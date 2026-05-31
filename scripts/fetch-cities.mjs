#!/usr/bin/env node
/**
 * Fetch ~5400 communes françaises > 2000 habitants via l'API geo.api.gouv.fr
 * Generates src/data/cities-fr.ts
 */

const API_URL = 'https://geo.api.gouv.fr/communes?fields=nom,code,codesPostaux,codeDepartement,departement,codeRegion,region,population,centre&format=json&geometry=centre';

async function fetchCities() {
  console.log('🏠 Fetching French cities from geo.api.gouv.fr...');
  
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  
  const communes = await res.json();
  console.log(`📊 Total communes returned: ${communes.length}`);
  
  // Filter > 2000 pop and valid data
  const filtered = communes
    .filter(c => c.population && c.population >= 2000 && c.codesPostaux?.length > 0 && c.centre?.coordinates)
    .map(c => {
      const name = c.nom;
      const slug = name
        .toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
      
      return {
        slug,
        name,
        zip: c.codesPostaux[0],
        deptCode: c.codeDepartement,
        deptName: c.departement?.nom || '',
        region: c.region?.nom || '',
        pop: c.population,
        lat: c.centre.coordinates[1],
        lng: c.centre.coordinates[0],
      };
    })
    .filter(c => c.deptName && c.region) // Remove entries with missing dept/region
    .sort((a, b) => b.pop - a.pop);
  
  console.log(`✅ Filtered cities > 2000 hab: ${filtered.length}`);
  
  // Generate TypeScript
  const lines = filtered.map(c => {
    const escapedName = c.name.replace(/'/g, "\\'").replace(/"/g, '\\"');
    const escapedDept = c.deptName.replace(/'/g, "\\'").replace(/"/g, '\\"');
    const escapedRegion = c.region.replace(/'/g, "\\'").replace(/"/g, '\\"');
    return `  { slug: "${c.slug}", name: "${escapedName}", zip: "${c.zip}", deptCode: "${c.deptCode}", deptName: "${escapedDept}", region: "${escapedRegion}", pop: ${c.pop}, lat: ${c.lat.toFixed(4)}, lng: ${c.lng.toFixed(4)} },`;
  });
  
  const ts = `export interface City {
  slug: string;
  name: string;
  zip: string;
  deptCode: string;
  deptName: string;
  region: string;
  pop: number;
  lat: number;
  lng: number;
}

/**
 * ~${filtered.length} communes françaises > 2 000 habitants
 * Généré automatiquement via scripts/fetch-cities.mjs
 * Source: geo.api.gouv.fr — ${new Date().toISOString().split('T')[0]}
 */
export const cities: City[] = [
${lines.join('\n')}
];
`;
  
  // Write file
  const fs = await import('fs');
  const path = await import('path');
  const outPath = path.resolve(import.meta.dirname, '../src/data/cities-fr.ts');
  fs.writeFileSync(outPath, ts, 'utf-8');
  
  console.log(`📁 Written to: ${outPath}`);
  console.log(`🎉 Done! ${filtered.length} cities generated.`);
}

fetchCities().catch(err => {
  console.error('❌ Error:', err.message);
  process.exit(1);
});
