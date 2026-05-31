/**
 * Brands data - 6 certified ITE system brands
 */

export interface Brand {
  slug: string;
  name: string;
  origin: string;
  segment: string;
  starRating: number;
  voteCount: number;
  phareSystem: string;
  priceRange: string;
  pros: string[];
  cons: string[];
  certifications: string[];
  description: string;
}

export const brands: Brand[] = [
  {
    slug: "sto",
    name: "STO",
    origin: "🇩🇪 Allemagne",
    segment: "Ultra-Premium / Leader mondial",
    starRating: 4.9,
    voteCount: 1420,
    phareSystem: "StoTherm Classic",
    priceRange: "130€ – 200€ / m²",
    pros: [
      "Résistance aux chocs exceptionnelle (StoTherm Classic sans ciment)",
      "Vaste choix de finitions esthétiques et coloris stables",
      "Réseau d'applicateurs agréés hautement qualifiés"
    ],
    cons: [
      "Tarifs élevés sur la fourniture",
      "Système technique exigeant nécessitant une météo clémente"
    ],
    certifications: ["CSTB", "ATE", "DTA (StoTherm)"],
    description: "STO est le leader mondial incontesté de l'isolation thermique par l'extérieur. D'origine allemande, la marque est réputée auprès des architectes pour ses systèmes StoTherm Classic d'une incroyable robustesse face aux chocs mécaniques et aux micro-fissures."
  },
  {
    slug: "weber",
    name: "Weber",
    origin: "🇫🇷 France (Saint-Gobain)",
    segment: "Leader France / Référence Pro",
    starRating: 4.8,
    voteCount: 1980,
    phareSystem: "webertherm XM",
    priceRange: "111€ – 170€ / m²",
    pros: [
      "Le système le plus posé par les façadiers en France",
      "Enduits minéraux d'une excellente respirabilité",
      "Excellent rapport qualité-prix professionnel"
    ],
    cons: [
      "Finition sous-enduit ciment légèrement plus sensible au faïençage que STO",
      "Épaisseurs standards limitant parfois les gains extrêmes sans surcoût"
    ],
    certifications: ["CSTB", "DTA webertherm", "ACERMI"],
    description: "Filiale du géant Saint-Gobain, Weber (anciennement Weber & Broutin) est la référence absolue des artisans façadiers en France. Son système webertherm XM sous enduit minéral est plébiscité pour sa simplicité de mise en œuvre et son excellent rapport qualité-prix."
  },
  {
    slug: "parexlanko",
    name: "Parexlanko",
    origin: "🇫🇷 France",
    segment: "Professionnel / Qualité-prix",
    starRating: 4.7,
    voteCount: 1140,
    phareSystem: "ParexTherm",
    priceRange: "100€ – 160€ / m²",
    pros: [
      "Tarifs très compétitifs sur les isolants PSE",
      "Gamme d'enduits hydrauliques monocouches très performants",
      "Fiches techniques CSTB claires et précises"
    ],
    cons: [
      "Moins d'innovations sur le segment biosourcé",
      "Garantie restreinte hors réseau agréé"
    ],
    certifications: ["CSTB", "DTA ParexTherm"],
    description: "Parexlanko est un acteur historique des mortiers et enduits de façade en France. Ses systèmes ParexTherm et ParexDirect s'illustrent par une grande technicité de finition et des prix particulièrement compétitifs, idéaux pour les budgets maîtrisés."
  },
  {
    slug: "baumit",
    name: "Baumit",
    origin: "🇦🇹 Autriche",
    segment: "Premium / Spécialiste finitions",
    starRating: 4.7,
    voteCount: 860,
    phareSystem: "Baumit open",
    priceRange: "120€ – 190€ / m²",
    pros: [
      "Technologie de plaques perforées respirantes unique (openSystem)",
      "Finitions autonettoyantes autonettoyantes exceptionnelles (Nanopor)",
      "Régulation optimale de l'humidité"
    ],
    cons: [
      "Moins d'artisans formés à la marque en France",
      "Disponibilité locale des produits variable"
    ],
    certifications: ["ATE", "CSTB", "DTA Baumit open"],
    description: "Baumit est une entreprise autrichienne spécialisée dans les matériaux de construction innovants. Elle s'est fait connaître en Europe grâce à son système respirant Baumit open, doté d'isolants perforés brevetés combinant les avantages thermiques du PSE et la respirabilité de la laine de roche."
  },
  {
    slug: "knauf",
    name: "Knauf",
    origin: "🇩🇪 Allemagne",
    segment: "Polyvalent / Large gamme",
    starRating: 4.6,
    voteCount: 1540,
    phareSystem: "Knauf WARM-WAND",
    priceRange: "100€ – 160€ / m²",
    pros: [
      "Fabricant historique de polystyrène expansé (PSE) de haute qualité",
      "Gamme WARM-WAND très polyvalente",
      "Intégration d'accessoires de fixation de premier ordre"
    ],
    cons: [
      "Esthétique des enduits plus classique que STO",
      "Nécessite souvent des fixations mécaniques renforcées"
    ],
    certifications: ["CSTB", "ACERMI", "DTA Knauf WARM-WAND"],
    description: "Knauf est le leader mondial du plâtre et de l'isolation PSE. Réputé pour sa rigueur industrielle, Knauf propose avec la gamme WARM-WAND des systèmes complets d'isolation extérieure robustes et modulables s'adaptant à tous les types de supports maçonnés."
  },
  {
    slug: "myral",
    name: "Myral",
    origin: "🇫🇷 France",
    segment: "Bardage innovant / Vêture alu",
    starRating: 4.8,
    voteCount: 620,
    phareSystem: "Myral M62 / M72",
    priceRange: "150€ – 230€ / m²",
    pros: [
      "Panneaux pré-finis de grande longueur (gain de temps de pose)",
      "Isolant polyuréthane ultra-fin à haute performance thermique",
      "Aspect vêture en aluminium laqué sans aucun entretien"
    ],
    cons: [
      "Tarif de fourniture élevé",
      "Ne convient pas aux façades courbes ou complexes"
    ],
    certifications: ["CSTB", "DTA Myral M62"],
    description: "Myral est une entreprise française innovante qui conçoit et fabrique des panneaux de vêture d'isolation extérieure. Composés d'un isolant en polyuréthane PIR à haute densité recouvert d'un parement en aluminium thermolaqué, ces panneaux se posent par emboîtement direct, garantissant un chantier propre et rapide."
  }
];
