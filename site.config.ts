/**
 * ⭐ SITE CONFIGURATION — cout-ite-maison.fr
 */
export const siteConfig = {
  // === IDENTITÉ ===
  domain: "cout-ite-maison.fr",
  name: "Coût ITE Maison",
  tagline: "L'Isolation Thermique par l'Extérieur (ITE) — Prix au m², Aides & Devis 2026",
  description: "Quel est le prix d'une isolation par l'extérieur (ITE) en 2026 ? De 100€ à 250€/m² pose incluse. Jusqu'à 75€/m² d'aides MaPrimeRénov'. Comparez 3 devis d'artisans RGE.",
  emoji: "🏠",

  // === NICHE ===
  niche: {
    slug: "isolation-thermique-exterieur",
    name: "Isolation Thermique par l'Extérieur",
    nameShort: "ITE",
    emoji: "🏠",
    icon: "home",
    seoTitleTemplate: "ITE {city} ({zip}) : Prix dès 100€/m² + Aides MaPrimeRénov' 2026",
    metaDescTemplate: "Isolation par l'extérieur (ITE) à {city} ({zip}) : de 100€ à 250€/m² pose incluse. Jusqu'à 75€/m² d'aides. Comparez 3 devis d'artisans RGE en {deptName} • Gratuit ✅",
    heroTitle: "Isolation Thermique par l'Extérieur (ITE) : Prix au m², Aides & Devis 2026",
    heroSubtitle: "Jusqu'à 75€/m² d'aides MaPrimeRénov' 2026 pour transformer votre façade et réduire votre facture de chauffage. Devis gratuit sans engagement.",
  },

  // === PRIX DETALLÉS ===
  pricing: [
    { service: "Enduit sur Polystyrène (PSE)", price: "100 – 160 €/m²", details: "L'isolant le plus populaire (90% du marché), finition enduit projeté ou gratté" },
    { service: "Enduit sur Laine de Roche", price: "120 – 180 €/m²", details: "Excellente isolation phonique et comportement au feu exceptionnel" },
    { service: "Bardage Bois (ventilé)", price: "150 – 220 €/m²", details: "Aspect chaleureux et naturel, bois type Douglas, Mélèze ou Red Cedar" },
    { service: "Bardage Composite (ventilé)", price: "160 – 250 €/m²", details: "Ultra-durable, sans aucun entretien (Cédral, ciment composite, PVC haute densité)" },
    { service: "Vêture / Vêtage (plaques)", price: "80 – 140 €/m²", details: "Plaques isolantes pré-finies directement chevillées dans la maçonnerie" },
    { service: "Enduit isolant chaux-chanvre", price: "60 – 120 €/m²", details: "Matériau biosourcé respirant, idéal pour le bâti ancien en pierre" },
  ],
  pricingNote: "Prix moyens TTC posés constatés en 2026, incluant l'échafaudage et le traitement des tableaux de fenêtres. Hors aides de l'État.",

  // === AIDES ===
  aids: [
    { name: "MaPrimeRénov' 2026", amount: "Jusqu'à 75€/m²", condition: "Selon les ressources du foyer (barème Bleu/Jaune/Violet/Rose)" },
    { name: "CEE (Prime Énergie)", amount: "5 à 20€/m²", condition: "Cumulable avec MaPrimeRénov' sans condition de ressources" },
    { name: "TVA réduite 5,5%", amount: "~1 500€ d'économie", condition: "Appliquée directement sur la facture du façadier certifié RGE" },
    { name: "Éco-PTZ (prêt à taux 0)", amount: "Jusqu'à 30 000€", condition: "Pour financer le reste à charge sans aucun intérêt bancaire" },
  ],

  // === MONÉTISATION (ViteUnDevis) ===
  viteundevis: {
    partnerId: "2353",
    boxId: "f485866d30",
    categoryId: "103",
  },

  // === DESIGN COLORS ===
  colors: {
    primary: "#475569",      // Slate / Ardoise
    primaryDark: "#334155",  // Slate dark
    accent: "#EA580C",       // Orange brûlé
    secondary: "#0F766E",    // Teal profond
    dark: "#0F172A",         // Bleu-gris presque noir
  },

  // === PROCESSUS DE CHANTIER ===
  process: [
    { title: "Bilan thermique gratuit", desc: "Diagnostic initial des façades et calcul de la résistance thermique nécessaire.", icon: "🔍", duration: "1h30" },
    { title: "Simulation d'aides", desc: "Évaluation de vos droits MaPrimeRénov', CEE et aides locales de votre commune.", icon: "💰", duration: "24h" },
    { title: "Comparaison des devis", desc: "Réception de 3 propositions détaillées de façadiers certifiés RGE locaux.", icon: "⚖️", duration: "48h" },
    { title: "Pose et finitions", desc: "Mise en place de l'échafaudage, collage/chevillage, sous-enduit trame, et enduit de finition.", icon: "🏗️", duration: "2-3 semaines" },
  ],

  // === FAQ GLOBALE ===
  faq: [
    {
      q: "Quel est le prix moyen au m² d'une isolation extérieure (ITE) ?",
      a: "En 2026, le coût moyen d'une isolation thermique par l'extérieur (ITE) varie de 100€ à 250€ par m² TTC, pose comprise. La technique la plus abordable est l'enduit sur polystyrène expansé (100€ à 160€/m²), tandis que les solutions haut de gamme comme le bardage en bois ou composite se situent entre 150€ et 250€/m²."
    },
    {
      q: "Combien d'aides peut-on toucher pour une ITE en 2026 ?",
      a: "Grâce au cumul des aides de l'État, vous pouvez financer jusqu'à 75% de vos travaux. Les aides principales comprennent MaPrimeRénov' (de 15€/m² à 75€/m² selon vos revenus), les primes CEE (5€ à 20€/m²), la TVA réduite à 5,5% et l'Éco-PTZ. Les ménages très modestes (profil bleu) bénéficient de l'aide maximale."
    },
    {
      q: "Quels sont les avantages de l'ITE par rapport à l'ITI (intérieur) ?",
      a: "L'isolation par l'extérieur (ITE) présente trois avantages majeurs : 1) Elle supprime 100% des ponts thermiques (en enveloppant le bâtiment). 2) Elle ne fait perdre aucune surface habitable à l'intérieur de la maison. 3) Elle permet d'effectuer un ravalement esthétique complet et moderne de vos façades pendant les travaux d'isolation."
    },
    {
      q: "Quelle épaisseur d'isolant faut-il pour être conforme et éligible aux aides ?",
      a: "Pour être éligible aux aides de l'État (MaPrimeRénov' et CEE), l'isolant posé sur les murs extérieurs doit atteindre une résistance thermique minimale R égale ou supérieure à 3,7 m².K/W. Avec du polystyrène expansé gris (lambda 0,031), cela correspond à une épaisseur minimale de 12 à 14 cm."
    },
    {
      q: "Faut-il un permis de construire ou une autorisation pour une ITE ?",
      a: "Une isolation par l'extérieur modifiant l'aspect visuel de votre façade, vous devez obligatoirement déposer une Déclaration Préalable de Travaux (DP) auprès de la mairie de votre commune. L'instruction dure en général 1 mois. Notre réseau d'artisans RGE vous accompagne dans la rédaction et le dépôt de ce dossier administratif."
    },
    {
      q: "Quelle est la durée de vie d'une isolation extérieure ?",
      a: "Les systèmes d'ITE actuels certifiés par le CSTB ont une durée de vie technique comprise entre 30 et 50 ans. L'enduit mince sur isolant résiste parfaitement aux intempéries et chocs thermiques, tandis que les bardages composites offrent une tenue de couleur et d'étanchéité supérieure à 40 ans sans entretien particulier."
    },
  ],

  // === CRITÈRES DE CONFIANCE ===
  trustBadges: ["Artisans RGE Référés", "Devis 100% Gratuit", "Sans Engagement", "Garantie Décennale 10 Ans"],

  // === INTRO TEXTS ===
  introText: `L'isolation thermique par l'extérieur (ITE) est la solution de rénovation énergétique globale la plus efficace pour les maisons individuelles. En créant un bouclier isolant tout autour de votre habitation, elle élimine la totalité des ponts thermiques au niveau des planchers et des refends, responsables de 25% des pertes thermiques.
  
  Plus qu'une simple isolation, l'ITE redonne une seconde jeunesse à votre maison en combinant ravalement de façade moderne et performance thermique. Grâce aux aides massives du plan de rénovation MaPrimeRénov' 2026, isoler sa maison par l'extérieur est un investissement hautement rentable qui valorise votre patrimoine immobilier de plus de 15% (valeur verte DPE).`,

  whyChooseUs: [
    "Mise en relation directe avec jusqu'à 3 façadiers certifiés RGE qualifiés",
    "Garantie décennale validée et assurances professionnelles vérifiées",
    "Simulation instantanée et aide au montage de vos dossiers MaPrimeRénov' et CEE",
    "Artisans locaux intervenant rapidement sur votre département",
    "Études techniques de façade et devis 100% gratuits et sans aucun engagement",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
