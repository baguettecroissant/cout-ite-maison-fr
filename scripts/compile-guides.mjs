#!/usr/bin/env node

import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rawDir = resolve(__dirname, '../src/data/guides-raw');
const outputPath = resolve(__dirname, '../src/data/blog-articles.ts');

const files = readdirSync(rawDir).filter(f => f.endsWith('.json'));

let articles = [];

for (const file of files) {
  const content = readFileSync(resolve(rawDir, file), 'utf-8');
  try {
    const json = JSON.parse(content);
    articles.push(...json);
  } catch (e) {
    console.error(`Error parsing ${file}:`, e);
  }
}

// Sort by an explicit order if needed, but we can just sort by slug or date to be safe.
// To keep the order matching the previous list, we sort by 'order' property if we add one.
articles.sort((a, b) => (a.order || 0) - (b.order || 0));

// Remove the 'order' property before writing
articles = articles.map(({ order, ...rest }) => rest);

const tsContent = `/**
 * Blog articles data — 10 highly comprehensive, E-E-A-T expert pillar articles for ITE SEO
 */

export interface BlogArticle {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  emoji: string;
  image: string;
  content: string; // HTML content
}

export const blogArticles: BlogArticle[] = ${JSON.stringify(articles, null, 2)};
`;

writeFileSync(outputPath, tsContent, 'utf-8');
console.log(`✅ Successfully compiled ${articles.length} guides into blog-articles.ts`);
