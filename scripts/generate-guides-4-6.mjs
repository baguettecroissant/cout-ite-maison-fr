import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rawDir = resolve(__dirname, '../src/data/guides-raw');

const guides = [
  {
    order: 4,
    slug: "ite-enduit-pse-guide",
    title: "Guide ITE sous Enduit Minéral : Technique, Épaisseur et Avantages",
    metaTitle: "L'ITE sous enduit (PSE et Laine de Roche) : Le Guide Ultime",
    metaDescription: "Tout savoir sur l'isolation thermique par l'extérieur sous enduit mince ou hydraulique. Les différences entre PSE blanc, PSE graphité et la Laine de roche (LDR).",
    excerpt: "L'ITE sous enduit est la méthode d'isolation de façade la plus répandue en France. Découvrez les isolants compatibles, les types d'enduits et le déroulé technique d'une pose calée-chevillée.",
    date: "2026-01-25",
    readTime: "21 min",
    category: "Techniques et Choix",
    emoji: "🧱",
    image: "/images/blog/ite-enduit-pse-guide.png",
    content: `
      <p class="text-xl font-medium leading-relaxed text-gray-800 mb-8">L'isolation thermique par l'extérieur dite <strong>"sous enduit"</strong> (également appelée filière humide ou ETICS en Europe) représente plus de 80% des chantiers de rénovation de façades en France. C'est la méthode reine car elle permet de conserver l'aspect "maçonné" et traditionnel d'une maison tout en l'enveloppant d'un manteau hautement performant. Du choix de l'isolant (Polystyrène Expansé ou Laine minérale) à la finition talochée, ce guide décortique pour vous les secrets d'une ITE sous enduit réussie et durable.</p>
      
      <figure class="my-8 space-y-2">
        <img src="/images/blog/ite-enduit-pse-guide.png" alt="Ouvrier façadier lissant un enduit sur une paroi isolée par l'extérieur" class="rounded-2xl shadow-lg w-full max-h-96 object-cover" />
        <figcaption class="text-xs text-gray-500 text-center font-light">Pose de la trame en fibre de verre noyée dans le sous-enduit avant la couche de finition.</figcaption>
      </figure>

      <div class="bg-gray-50 p-6 rounded-xl border border-gray-200 my-8">
        <h2 class="text-xl font-bold mt-0 mb-4">Sommaire de ce guide :</h2>
        <ul class="space-y-2 mb-0">
          <li><a href="#le-principe" class="text-secondary hover:underline">1. Le principe de l'ITE sous enduit (ETICS)</a></li>
          <li><a href="#choix-isolant" class="text-secondary hover:underline">2. Quel isolant choisir ? PSE Blanc, Graphité ou Laine de Roche</a></li>
          <li><a href="#fixation" class="text-secondary hover:underline">3. Collage ou Calé-Chevillé ? Les méthodes de fixation</a></li>
          <li><a href="#types-enduits" class="text-secondary hover:underline">4. Mince ou Hydraulique : Quel type d'enduit appliquer ?</a></li>
          <li><a href="#avantages" class="text-secondary hover:underline">5. Les avantages et les limites de la méthode</a></li>
        </ul>
      </div>

      <h2 id="le-principe">1. Le principe de l'ITE sous enduit (L'ETICS)</h2>
      <p>ETICS est l'acronyme anglais pour <em>External Thermal Insulation Composite System</em>. En français, on parle de système d'isolation thermique par l'extérieur par enduit sur isolant. La particularité de ce système est qu'il est <strong>fermé</strong> (contrairement au bardage qui est ventilé). L'enduit final repose directement, via une couche de préparation armée d'une trame en fibre de verre, sur le panneau isolant.</p>
      <p>Il ne s'agit pas d'acheter de la colle à un endroit, du polystyrène à un autre et un enduit au hasard. Les fabricants (comme Weber, Sto, Parexlanko, ou Zolpan) vendent des <strong>systèmes complets certifiés</strong>. L'artisan doit scrupuleusement utiliser la colle, la trame, les chevilles et l'enduit d'un même fabricant, validés par un Avis Technique (ATEC) du CSTB, sous peine de perdre la garantie décennale.</p>

      <h2 id="choix-isolant">2. Le nerf de la guerre : le choix de l'isolant</h2>
      <p>Sous un enduit, l'isolant doit être rigide et incompressible pour supporter le poids de l'enduit et résister aux chocs légers de la vie courante. Trois grands acteurs dominent le marché :</p>
      
      <div class="space-y-6 my-6">
        <div class="border border-gray-200 rounded-lg p-5">
          <h3 class="text-lg font-bold text-gray-900 mt-0">Le Polystyrène Expansé Blanc (PSE Blanc)</h3>
          <p class="text-sm text-gray-700">Le dinosaure de l'ITE, fiable et économique. Sa conductivité thermique (lambda λ) est généralement de <strong>0.038 W/m.K</strong>. Pour atteindre un R=3.7 (critère des aides), il faudra poser une épaisseur d'au moins <strong>14 à 16 cm</strong>.</p>
          <ul class="list-disc pl-5 text-sm mt-2 text-gray-600 mb-0">
            <li><strong>Avantages :</strong> Le moins cher du marché, très léger, facile à découper.</li>
            <li><strong>Inconvénients :</strong> Faible inertie pour l'été, très polluant à la fabrication (pétrole), épaisseur sur mur importante.</li>
          </ul>
        </div>
        
        <div class="border border-gray-200 rounded-lg p-5 bg-gray-50/50">
          <h3 class="text-lg font-bold text-gray-900 mt-0">Le Polystyrène Expansé Gris Graphité (PSE Graphité)</h3>
          <p class="text-sm text-gray-700">C'est la version "haut de gamme" du PSE. On y ajoute du graphite qui absorbe et reflète le rayonnement infrarouge de la chaleur. Son lambda λ chute à <strong>0.031 W/m.K</strong>. Pour atteindre R=3.7, <strong>12 cm d'épaisseur</strong> suffisent.</p>
          <ul class="list-disc pl-5 text-sm mt-2 text-gray-600 mb-0">
            <li><strong>Avantages :</strong> Gain d'épaisseur précieux sur les murs (évite parfois de changer les appuis de fenêtres), excellentes performances thermiques.</li>
            <li><strong>Inconvénients :</strong> Sensible au soleil direct pendant le chantier (les plaques peuvent se déformer avant la pose de l'enduit de base si l'échafaudage n'a pas de filets pare-soleil).</li>
          </ul>
        </div>

        <div class="border border-gray-200 rounded-lg p-5">
          <h3 class="text-lg font-bold text-gray-900 mt-0">La Laine de Roche (Double Densité)</h3>
          <p class="text-sm text-gray-700">Le challenger minéral de luxe. C'est une roche volcanique (le basalte) fondue et filée. Son lambda se situe autour de <strong>0.036 W/m.K</strong> (il faut environ 14 cm d'épaisseur). Elle possède une face dense pour recevoir l'enduit, et une face plus souple qui épouse les irrégularités du mur.</p>
          <ul class="list-disc pl-5 text-sm mt-2 text-gray-600 mb-0">
            <li><strong>Avantages :</strong> Incombustible (classement au feu A1), excellent isolant phonique pour les maisons proches de la route, totalement perspirant (laisse migrer la vapeur d'eau du mur).</li>
            <li><strong>Inconvénients :</strong> Lourd (manipulation plus lente), prix plus élevé (surcoût de 20€ à 30€/m² par rapport au PSE).</li>
          </ul>
        </div>
      </div>

      <h2 id="fixation">3. La Fixation au mur : Collage ou Calé-Chevillé ?</h2>
      <p>L'isolant ne tient pas par l'opération du Saint-Esprit. Sa fixation est vitale face à la dépression au vent (aspiration de la façade par les bourrasques).</p>
      <ul>
        <li><strong>Pose collée (rare en rénovation) :</strong> Le panneau est collé avec des plots de mortier colle. Elle n'est autorisée que sur des murs neufs, parfaitement plans, sains et non peints. Sur une maison de 1970 avec un vieil enduit, le collage seul est interdit.</li>
        <li><strong>Pose Calée-Chevillée (le standard de rénovation) :</strong> On "cale" le panneau avec des plots de colle, puis on vient le percer et le fixer "mécaniquement" dans le parpaing, la brique ou la pierre avec d'immenses chevilles à expansion (rosaces). En moyenne, il faut poser <strong>6 à 8 chevilles par mètre carré</strong> (davantage sur les angles du bâtiment). L'intégrité de l'ITE est ainsi garantie pour des décennies, même si l'ancien crépis sous-jacent décide de se décoller.</li>
      </ul>

      <h2 id="types-enduits">4. Enduit mince ou épais (hydraulique) : comprendre la finition</h2>
      <p>Une fois les isolants posés, on ne s'arrête pas là. Il faut armer la surface.</p>
      <ol class="space-y-3 mb-6">
        <li><strong>L'enduit de base armé (Sous-enduit) :</strong> L'artisan étale une couche de sous-enduit colle dans laquelle il vient maroufler (noyer) un treillis en fibre de verre (armature). Cette trame est cruciale : c'est l'exosquelette de la façade. C'est elle qui empêchera l'enduit final de fissurer aux jointures des panneaux de polystyrène.</li>
        <li><strong>L'Enduit Mince (Organique ou Silicate) :</strong> C'est la méthode moderne. L'enduit final fait à peine quelques millimètres (2 à 3 mm). Il est élastique, résiste aux micro-fissures et possède un grand choix de teintes éclatantes.</li>
        <li><strong>L'Enduit Épais (Minéral Hydraulique) :</strong> Proche du crépi traditionnel projeté (15 à 20 mm). Il est plus lourd et demande une préparation plus stricte (chevillage à travers la trame parfois nécessaire), mais donne un aspect rustique ou "gratté" impossible à reproduire avec l'enduit mince.</li>
      </ol>

      <h2 id="avantages">5. Résumé des Avantages et Limites de l'Enduit</h2>
      <div class="grid md:grid-cols-2 gap-4 mt-4">
        <div class="bg-green-50 p-4 border border-green-200 rounded-lg">
          <h4 class="font-bold text-green-900 mt-0">Les Points Forts</h4>
          <ul class="text-sm text-green-800 list-disc pl-4 mb-0">
            <li>Conserve l'esthétique "classique" et se fond dans tous les PLU français.</li>
            <li>Suppression de l'intégralité des ponts thermiques.</li>
            <li>Rapport efficacité/prix (surtout avec le PSE graphité) imbattable.</li>
            <li>Les fenêtres semblent s'enfoncer dans le mur, créant des "embrasures" chics.</li>
          </ul>
        </div>
        <div class="bg-red-50 p-4 border border-red-200 rounded-lg">
          <h4 class="font-bold text-red-900 mt-0">Les Limites</h4>
          <ul class="text-sm text-red-800 list-disc pl-4 mb-0">
            <li>Résistance aux chocs limitée (un coup de pare-choc ou de ballon de foot lourd peut marquer le PSE si non sur-armé en rez-de-chaussée).</li>
            <li>Le PSE empêche le mur de respirer correctement s'il y a des remontées capillaires (préférer la laine minérale si murs anciens humides).</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    order: 5,
    slug: "ite-bardage-bois-composite",
    title: "L'ITE sous Bardage Ventilé : Bois, Composite ou Métal ?",
    metaTitle: "ITE sous Bardage : Tout Savoir (Bois, Composite, PVC)",
    metaDescription: "Guide complet sur l'isolation extérieure sous bardage ventilé. Fonctionnement de la lame d'air, ossature croisée, et choix du revêtement : bois, pvc, fibrociment.",
    excerpt: "Modernisez votre maison avec l'ITE sous bardage ventilé. Une technique performante, pérenne (aucun risque de fissures) offrant un large choix de finitions contemporaines en bois ou en composite.",
    date: "2026-02-05",
    readTime: "18 min",
    category: "Techniques et Choix",
    emoji: "🪵",
    image: "/images/blog/ite-bardage-bois-composite.png",
    content: `
      <p class="text-xl font-medium leading-relaxed text-gray-800 mb-8">Si l'enduit ne vous attire pas ou que votre maison souffre d'humidité dans ses murs, la technique de la <strong>façade ventilée</strong> (ITE sous bardage) est la solution premium par excellence. Elle permet de changer totalement le design d'une maison (look contemporain, type cabane d'architecte, ou industriel) tout en séparant physiquement la protection contre la pluie de la protection thermique. Zoom sur cette méthode sèche, durable et extrêmement performante.</p>
      
      <figure class="my-8 space-y-2">
        <img src="/images/blog/ite-bardage-bois-composite.png" alt="Maison moderne avec isolation extérieure recouverte de lames de bardage en bois composite foncé" class="rounded-2xl shadow-lg w-full max-h-96 object-cover" />
        <figcaption class="text-xs text-gray-500 text-center font-light">Maison modernisée avec un bardage composite texturé bois et isolée aux normes BBC.</figcaption>
      </figure>

      <div class="bg-gray-50 p-6 rounded-xl border border-gray-200 my-8">
        <h2 class="text-xl font-bold mt-0 mb-4">Dans ce dossier expert :</h2>
        <ul class="space-y-2 mb-0">
          <li><a href="#principe-ventilation" class="text-secondary hover:underline">1. La magie de la lame d'air (principe physique)</a></li>
          <li><a href="#ossature" class="text-secondary hover:underline">2. L'ossature rapportée et l'isolant (technique de pose)</a></li>
          <li><a href="#choix-finition" class="text-secondary hover:underline">3. Quel parement choisir (Bois, Composite, Fibrociment, Zinc) ?</a></li>
          <li><a href="#avantages-inconvenients" class="text-secondary hover:underline">4. Bilan : Le pour et le contre du bardage</a></li>
        </ul>
      </div>

      <h2 id="principe-ventilation">1. La magie de la façade ventilée (La Lame d'Air)</h2>
      <p>La différence fondamentale entre un enduit sur isolant et un bardage réside dans une notion de physique du bâtiment : <strong>la lame d'air fortement ventilée</strong>.</p>
      <p>Dans un système de bardage, l'isolant est fixé contre le mur. Ensuite, un film "pare-pluie" le recouvre. L'habillage extérieur (les clins de bois par exemple) n'est jamais en contact direct avec cet isolant. On maintient un vide d'au moins 2 à 3 centimètres d'air entre l'arrière du bardage et l'isolant, ouvert en bas et en haut de la façade.</p>
      <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
        <p class="text-sm text-blue-900 m-0"><strong>L'Effet Cheminée :</strong> En été, le bardage extérieur va chauffer sous le soleil. L'air dans la lame d'air va s'échauffer, s'élever, et s'évacuer par la ventilation supérieure, aspirant de l'air frais par le bas. L'isolant (et votre mur) ne reçoivent ainsi jamais la chaleur directe. C'est le Graal du confort d'été.</p>
      </div>
      <p>En hiver, cette même lame d'air évacue toute l'humidité (vapeur d'eau générée par la cuisine, les douches) qui a transpiré à travers vos murs en maçonnerie, évitant tout pourrissement et condensation dans l'isolant.</p>

      <h2 id="ossature">2. Pose sur Ossature Rapportée (La Technique)</h2>
      <p>Le chantier d'un bardage est une opération de menuiserie sèche (pas besoin d'attendre que la colle ou l'enduit sèchent). Les étapes sont :</p>
      <ol class="space-y-3 mb-6">
        <li><strong>Fixation d'équerres :</strong> On cheville des équerres métalliques dans votre mur porteur (parpaing, brique).</li>
        <li><strong>Pose de l'isolant :</strong> Pour le bardage, on privilégie massivement les isolants "respirants" ou semi-rigides, le plus souvent la Laine de Verre (spéciale façade bardage, traitée hydrofuge) ou la Laine de Roche (plus chère mais plus rigide), en 12 à 16 cm d'épaisseur. Les isolants sont embrochés sur les équerres.</li>
        <li><strong>L'Ossature (Chevrons) :</strong> On vient fixer des chevrons verticaux en bois (ou des profilés métalliques) au bout des équerres.</li>
        <li><strong>Pare-pluie anti-UV :</strong> On déroule un tissu respirant par-dessus l'isolant et sous les chevrons (fortement recommandé, voire obligatoire si le bardage est "à claire-voie", c'est-à-dire avec des espaces entre les lames).</li>
        <li><strong>Pose du parement :</strong> Le bardage final est cloué ou vissé sur l'ossature bois.</li>
      </ol>

      <h2 id="choix-finition">3. Le choix du parement : du naturel au minéral</h2>
      <p>Le bardage offre une palette architecturale infinie. Le prix varie du simple au triple selon l'enveloppe finale choisie.</p>
      
      <table class="w-full text-sm my-6 border-collapse">
        <thead>
          <tr class="bg-gray-100 border-b border-gray-200">
            <th class="p-3 text-left">Type de Bardage</th>
            <th class="p-3 text-left">Caractéristiques & Entretien</th>
            <th class="p-3 text-left">Gamme de Prix (Fourniture seule)</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-gray-200">
            <td class="p-3"><strong>Bois Résineux (Pin, Sapin) traité Autoclave</strong></td>
            <td class="p-3">Très économique. Va grisailler naturellement avec les UV (sauf saturateur annuel). Esthétique "cabane" chaleureuse.</td>
            <td class="p-3 font-mono font-bold">25€ à 45€ / m²</td>
          </tr>
          <tr class="bg-secondary-light/20 border-b border-gray-200">
            <td class="p-3"><strong>Bois Noble (Mélèze, Red Cedar)</strong></td>
            <td class="p-3">Naturellement imputrescibles (classe 3 ou 4). Veinage superbe. Grise noblement avec le temps, très stable.</td>
            <td class="p-3 font-mono font-bold">50€ à 90€ / m²</td>
          </tr>
          <tr class="border-b border-gray-200">
            <td class="p-3"><strong>Le Bois Composite (Fibres + Plastique)</strong></td>
            <td class="p-3">Imite le bois sans ses défauts. Ne grise pas, ne fendille pas, aucun entretien. Durée de vie énorme.</td>
            <td class="p-3 font-mono font-bold">60€ à 120€ / m²</td>
          </tr>
          <tr class="bg-secondary-light/20 border-b border-gray-200">
            <td class="p-3"><strong>Fibrociment (type James Hardie, Cedral)</strong></td>
            <td class="p-3">Composition ciment, sable, cellulose. Totalement incombustible, résiste au gel, imite les clins bois à la perfection.</td>
            <td class="p-3 font-mono font-bold">50€ à 80€ / m²</td>
          </tr>
          <tr>
            <td class="p-3"><strong>Zinc à joint debout</strong></td>
            <td class="p-3">Esthétique ultra-contemporaine ou loft industriel. Zéro entretien, durée de vie centenaire. Pose très technique par couvreur-zingueur.</td>
            <td class="p-3 font-mono font-bold">100€ à 150€ / m²</td>
          </tr>
        </tbody>
      </table>

      <h2 id="avantages-inconvenients">4. Bilan : Pourquoi et quand choisir le bardage ?</h2>
      <p>Le choix du bardage se justifie très souvent sur les rénovations de vieilles bâtisses aux murs abîmés (les irrégularités du mur sont facilement rattrapées par le réglage des équerres de l'ossature, ce qui est impossible avec un enduit sur isolant collé). De plus, un bardage n'est jamais sujet aux fissurations de façade dues au mouvement du sol ou à la sécheresse.</p>
      
      <p><strong>Son plus gros point faible ? L'urbanisme !</strong> Renseignez-vous scrupuleusement auprès du Plan Local d'Urbanisme (PLU) de votre mairie. De nombreuses communes interdisent catégoriquement le bardage (surtout bois) en façade sur rue, ou n'autorisent que des couleurs de composites très spécifiques pour conserver une harmonie régionale.</p>
      <p>Une astuce très esthétique et souvent acceptée consiste à mixer les deux : traiter le rez-de-chaussée sous enduit classique, et isoler l'étage sous un bardage composite, créant une jolie rupture visuelle contemporaine.</p>
    `
  },
  {
    order: 6,
    slug: "ite-et-dpe-gain",
    title: "Comment l'ITE pulvérise votre DPE (Diagnostic de Performance Énergétique)",
    metaTitle: "Impact de l'ITE sur le DPE : Sortir des passoires thermiques",
    metaDescription: "Sortez de la case \"passoire thermique\" (F ou G) grâce à l'ITE. Comprendre comment le nouveau DPE calcule les déperditions murales et valorise votre maison.",
    excerpt: "Avec le nouveau DPE, l'isolation des murs est devenue l'élément crucial pour changer de lettre énergétique. Explications sur le calcul algorithmique et l'impact direct sur la valeur verte immobilière.",
    date: "2026-02-12",
    readTime: "17 min",
    category: "Réglementation et DPE",
    emoji: "📈",
    image: "/images/blog/ite-et-dpe-gain.png",
    content: `
      <p class="text-xl font-medium leading-relaxed text-gray-800 mb-8">Le Diagnostic de Performance Énergétique (DPE) a subi une profonde réforme. Autrefois calculé sur vos vieilles factures de chauffage ("méthode sur facture"), il repose désormais sur un algorithme strict de <strong>simulation thermique du bâtiment (méthode 3CL)</strong>. Et dans cet algorithme intraitable, les murs déperditifs non isolés sont le principal critère qui propulse une maison dans la redoutable catégorie des <em>passoires thermiques</em> (Classes F et G). Décryptons comment l'isolation par l'extérieur est aujourd'hui l'arme la plus puissante pour faire un bond de géant sur l'échelle du DPE.</p>
      
      <figure class="my-8 space-y-2">
        <img src="/images/blog/ite-et-dpe-gain.png" alt="Transition énergétique d'une classe G rouge vers une classe B verte illustrée sur une façade" class="rounded-2xl shadow-lg w-full max-h-96 object-cover" />
        <figcaption class="text-xs text-gray-500 text-center font-light">L'impact de l'ITE sur la note finale du DPE est massif.</figcaption>
      </figure>

      <div class="bg-gray-50 p-6 rounded-xl border border-gray-200 my-8">
        <h2 class="text-xl font-bold mt-0 mb-4">Dans ce dossier :</h2>
        <ul class="space-y-2 mb-0">
          <li><a href="#nouveau-dpe" class="text-secondary hover:underline">1. Comment l'algorithme 3CL pénalise vos murs froids</a></li>
          <li><a href="#saut-de-classes" class="text-secondary hover:underline">2. ITE : Combien de lettres peut-on gagner ?</a></li>
          <li><a href="#valeur-verte" class="text-secondary hover:underline">3. La "Valeur Verte" : augmentation du prix de revente</a></li>
          <li><a href="#interdictions" class="text-secondary hover:underline">4. Propriétaires Bailleurs : le calendrier des interdictions</a></li>
        </ul>
      </div>

      <h2 id="nouveau-dpe">1. L'algorithme 3CL ne pardonne plus les ponts thermiques</h2>
      <p>Avant la réforme de 2021, on considérait grossièrement que le toit représentait 30% des pertes et les murs 20%. Le nouveau DPE 3CL (Calcul des Consommations Conventionnelles des Logements) prend désormais en compte des paramètres d'ingénierie fine : inertie du bâti, déperditions surfaciques <strong>et déperditions linéiques (les fameux ponts thermiques)</strong>.</p>
      <p>Si vous isolez par l'intérieur (ITI), l'algorithme DPE imputera automatiquement des pertes massives dues aux "ponts thermiques de planchers" (là où les dalles béton croisent les façades). C'est mathématique. En revanche, si le diagnostiqueur DPE coche la case "Isolation Thermique par l'Extérieur de l'ensemble des parois opaques" avec une bonne épaisseur d'isolant (R>3.7), l'algorithme efface la quasi-totalité des pertes linéiques. Le gain de calcul est astronomique.</p>

      <h2 id="saut-de-classes">2. Simulation : Combien de lettres (classes) peut-on espérer gagner ?</h2>
      <p>Une simple ITE seule ne transformera pas un vieux manoir en ruine (Classe G) en maison BBC passive ultra-performante (Classe A). Néanmoins, voici ce que les statistiques de l'Observatoire National du DPE révèlent :</p>
      
      <ul class="space-y-4 mb-6">
        <li class="bg-white p-4 border border-gray-200 rounded-lg shadow-sm">
          <strong>Maisons des années 1960/1970 (Souvent F ou G) :</strong> Bâties en parpaings froids, sans aucune isolation. L'ITE est un remède miracle. Combinée au remplacement d'une vieille chaudière, elle fait systématiquement sauter la maison en <strong>Classe D voire C</strong>.
        </li>
        <li class="bg-white p-4 border border-gray-200 rounded-lg shadow-sm">
          <strong>Maisons des années 1980/1990 (Souvent E ou D) :</strong> Bâties avec 5 à 10 cm de polystyrène intérieur tassé et bourré de ponts thermiques. En effectuant un "sur-doublage" extérieur par ITE, la maison est propulsée directement en <strong>Classe C ou B</strong> (si équipée d'une Pompe à Chaleur).
        </li>
      </ul>
      <p>Gagner 2 à 3 lettres ("saut de classe") est l'objectif premier exigé par le programme MaPrimeRénov' <em>Parcours Accompagné</em> pour débloquer les financements massifs.</p>

      <h2 id="valeur-verte">3. La "Valeur Verte" : un effet direct sur votre patrimoine (Étude Notaires)</h2>
      <p>Pendant longtemps, le DPE n'était qu'un bout de papier regardé distraitement chez le notaire. Aujourd'hui, il est devenu le premier critère de négociation immobilière. Les études de la chambre des <em>Notaires de France</em> mesurent chaque année ce que l'on nomme la "Valeur Verte" : la surcote générée par un bon DPE par rapport à un DPE dégradé sur le marché de l'ancien.</p>
      
      <div class="bg-teal-50 border-l-4 border-teal-500 p-4 my-4">
        <p class="text-sm text-teal-900 m-0">En 2026, à caractéristiques équivalentes (surface, quartier, terrain), une maison classée C (grâce à son ITE) se vend <strong>entre 12% et 18% plus cher</strong> qu'une maison similaire classée F ou G. Sur un pavillon estimé initialement à 250 000€, l'ITE génère donc une plus-value immédiate d'environ 30 000€ à 40 000€. L'investissement des travaux (une fois les aides déduites) est très souvent inférieur à cette valorisation patrimoniale brute.</p>
      </div>

      <h2 id="interdictions" class="mt-10">4. L'urgence pour les propriétaires bailleurs (Loi Climat)</h2>
      <p>Si la maison isolée est un bien destiné à la location, l'ITE n'est plus un projet de confort, c'est une opération de survie économique. La <strong>Loi Climat et Résilience</strong> a instauré un calendrier d'interdiction formelle de mise en location des "passoires énergétiques" (qui sortent du marché de l'habitat "décent") :</p>
      
      <table class="w-full text-sm my-6 border-collapse">
        <thead>
          <tr class="bg-gray-100 border-b border-gray-200">
            <th class="p-3 text-left">Classe du DPE</th>
            <th class="p-3 text-left">Gel des loyers effectif depuis</th>
            <th class="p-3 text-left text-red-600">Interdiction de louer au</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-gray-200">
            <td class="p-3 font-bold text-red-700 text-lg">G</td>
            <td class="p-3">Août 2022</td>
            <td class="p-3 font-bold text-red-600">1er Janvier 2025</td>
          </tr>
          <tr class="border-b border-gray-200 bg-gray-50/50">
            <td class="p-3 font-bold text-orange-600 text-lg">F</td>
            <td class="p-3">Août 2022</td>
            <td class="p-3 font-bold text-red-600">1er Janvier 2028</td>
          </tr>
          <tr>
            <td class="p-3 font-bold text-yellow-600 text-lg">E</td>
            <td class="p-3">-</td>
            <td class="p-3 font-bold text-red-600">1er Janvier 2034</td>
          </tr>
        </tbody>
      </table>

      <p>Pour un bailleur disposant d'un locataire, l'ITE est le chantier rêvé : il se réalise entièrement à l'extérieur sans aucune nuisance à l'intérieur, ne réduisant pas la surface Carrez louée, et permet au locataire de rester dans les lieux tout en voyant ses charges de chauffage s'effondrer. L'isolation extérieure coche toutes les cases stratégiques pour sauver un investissement locatif.</p>
    `
  }
];

writeFileSync(resolve(rawDir, '4-6.json'), JSON.stringify(guides, null, 2), 'utf-8');
console.log('✅ Guides 4 to 6 written locally.');
