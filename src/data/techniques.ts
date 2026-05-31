/**
 * Techniques data - 4 core ITE technical methods
 */

export interface Technique {
  slug: string;
  name: string;
  shortName: string;
  emoji: string;
  priceRange: string;
  rValue: string;
  thickness: string;
  lifespan: string;
  finishingOptions: string[];
  pros: string[];
  cons: string[];
  summary: string;
  fullDescription: string;
}

export const techniques: Technique[] = [
  {
    slug: "enduit-pse",
    name: "L'Isolation sous Enduit avec Polystyrène Expansé (PSE)",
    shortName: "Enduit sur PSE",
    emoji: "⚪",
    priceRange: "100€ – 160€ / m²",
    rValue: "R=3.7 à R=5",
    thickness: "120 à 140 mm (Gris graphité)",
    lifespan: "30 à 50 ans",
    finishingOptions: ["Enduit gratté fin", "Enduit taloché", "Enduit projeté rustique", "Peinture siloxane"],
    pros: [
      "Le système le plus économique du marché",
      "Épaisseur minimale requise grâce au lambda bas (0.031 du PSE gris)",
      "Excellente étanchéité à l'eau de pluie"
    ],
    cons: [
      "Faible performance acoustique (le polystyrène transmet le bruit)",
      "Faible déphasage thermique en été",
      "Sensibilité accrue aux chocs mécaniques directs"
    ],
    summary: "Le polystyrène expansé (PSE) sous enduit mince représente 75% du marché de l'isolation par l'extérieur en France. Économique et performant, il offre une barrière continue très étanche.",
    fullDescription: "Cette technique consiste à coller et cheviller des panneaux de polystyrène expansé (généralement gris graphité pour un meilleur lambda) sur la maçonnerie de façade. L'isolant est ensuite recouvert d'un sous-enduit armé d'une trame en fibre de verre pour prévenir toute fissuration, puis d'un enduit de finition décoratif. C'est la solution reine pour allier isolation thermique performante et ravalement esthétique moderne au meilleur coût."
  },
  {
    slug: "laine-de-roche",
    name: "L'Isolation sous Enduit avec Laine de Roche",
    shortName: "Enduit Laine de Roche",
    emoji: "🪨",
    priceRange: "120€ – 180€ / m²",
    rValue: "R=3.7 à R=5",
    thickness: "140 à 160 mm",
    lifespan: "30 à 50 ans",
    finishingOptions: ["Enduit minéral respirant", "Enduit silicate", "Finition grattée"],
    pros: [
      "Incombustibilité totale (isolant minéral classé A1 anti-feu)",
      "Excellentes performances d'affaiblissement acoustique (bruits extérieurs)",
      "Excellente respirabilité (perméabilité à la vapeur d'eau)"
    ],
    cons: [
      "Prix plus élevé que le polystyrène expansé",
      "Matériau plus lourd exigeant un support sain et de solides fixations",
      "Sensible aux infiltrations d'eau accidentelles en phase de chantier"
    ],
    summary: "La laine de roche sous enduit est préconisée pour les habitations en milieu bruyant ou pour les copropriétés soumises à des normes strictes de sécurité incendie.",
    fullDescription: "La laine de roche est un isolant minéral issu de la fusion du basalte. Posée sous forme de panneaux rigides double densité, elle est calée et chevillée à la façade. Sa structure fibreuse emprisonne l'air, offrant une excellente résistance thermique tout en laissant respirer le bâti. C'est la solution idéale pour isoler phoniquement sa maison contre les nuisances routières tout en garantissant une sécurité feu maximale."
  },
  {
    slug: "bardage-bois",
    name: "L'Isolation Extérieure avec Bardage Bois Naturel",
    shortName: "Bardage Bois",
    emoji: "🪵",
    priceRange: "150€ – 220€ / m²",
    rValue: "R=4 à R=6",
    thickness: "140 à 180 mm (Laine minérale ou biosourcée)",
    lifespan: "25 à 40 ans",
    finishingOptions: ["Clins Douglas brut", "Lames Mélèze rabotées", "Bardage Red Cedar", "Bois thermo-traité"],
    pros: [
      "Esthétique naturelle, chaleureuse et valorisante",
      "Excellente protection de la structure maçonnée sous-jacente",
      "Lame d'air ventilée supprimant tout risque d'humidité"
    ],
    cons: [
      "Nécessite un entretien périodique (lasure ou saturation tous les 3-5 ans)",
      "Grisaillement naturel sous l'effet des UV solaires",
      "Sensibilité aux incendies supérieure aux finitions enduites"
    ],
    summary: "Le bardage en bois naturel apporte une touche architecturale haut de gamme et écologique tout en enveloppant la maison d'une structure respirante et ventilée.",
    fullDescription: "Cette technique d'ITE ventilée consiste à fixer une ossature en bois (chevrons) sur la façade existante. L'isolant (laine de roche, laine de verre ou fibre de bois) est inséré entre les montants de l'ossature, puis recouvert d'un pare-pluie hautement perméable. Enfin, les lames de bardage en bois naturel sont clouées sur des tasseaux, ménageant une lame d'air ventilée de 2 cm minimum. Cette circulation d'air continue protège le bâtiment contre l'humidité."
  },
  {
    slug: "bardage-composite",
    name: "L'Isolation Extérieure avec Bardage Composite",
    shortName: "Bardage Composite",
    emoji: "🧱",
    priceRange: "160€ – 250€ / m²",
    rValue: "R=4 à R=6",
    thickness: "140 à 180 mm",
    lifespan: "40 à 60 ans",
    finishingOptions: ["Lames fibro-ciment (Cedral)", "Bardage composite polymère", "Parements composite bois-plastique"],
    pros: [
      "Durabilité extrême (supérieure à 50 ans) sans aucun entretien",
      "Coloris teintés dans la masse insensibles aux UV et au vieillissement",
      "Imputrescible et résistant aux termites, champignons et intempéries"
    ],
    cons: [
      "Tarifs élevés à la fourniture et à la pose",
      "Aspect moins authentique que le bois naturel massif",
      "Dilatation thermique à gérer précisément lors de la pose"
    ],
    summary: "Le bardage composite (ciment-composite ou polymère haute densité) combine l'esthétique contemporaine du bois et la durabilité absolue d'un matériau sans entretien.",
    fullDescription: "La mise en œuvre est similaire au bardage bois traditionnel, mais les clins de finition sont remplacés par des lames en fibro-ciment ou en composite bois-plastique haute densité. Ces parements modernes n'exigent aucune peinture ou lasure au fil des décennies. C'est l'investissement le plus durable et le plus résistant pour rénover et isoler les façades exposées aux intempéries marines ou à la pollution urbaine."
  }
];
