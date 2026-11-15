/* Version hébergée GitHub Pages : React + framer-motion chargés en UMD par index.html. */
const { useEffect, useRef, useState } = React;
const { AnimatePresence, motion } = Motion;

/* ============================ IMAGES ============================ */
const PANELS: Record<string, string> = {
  carnet: "panels/carnet.avif",
  sys: "panels/sys.avif",
  elu: "panels/elu.avif",
  sernans: "panels/sernans.avif",
  p1: "panels/p1.avif",
  p2: "panels/p2.avif",
  p3: "panels/p3.avif",
  p4: "panels/p4.avif",
  p5: "panels/p5.avif",
  p6: "panels/p6.avif",
  p7: "panels/p7.avif",
  p8: "panels/p8.avif",
  p9: "panels/p9.avif",
  p10: "panels/p10.avif",
  p11: "panels/p11.avif",
  p12: "panels/p12.avif",
  c1: "panels/c1.avif",
  c2: "panels/c2.avif",
  d1: "panels/d1.avif",
  d2: "panels/d2.avif",
  d3: "panels/d3.avif",
  d4: "panels/d4.avif",
  d5: "panels/d5.avif",
  d6: "panels/d6.avif",
  d7: "panels/d7.avif",
  rat: "panels/rat.avif",
  bat: "panels/bat.avif",
  spider: "panels/spider.avif",
  skel: "panels/skel.avif",
  myco: "panels/myco.avif",
  golem: "panels/golem.avif",
  liz: "panels/liz.avif",
  wisp: "panels/wisp.avif",
  scar: "panels/scar.avif",
  kobold: "panels/kobold.avif",
  crapaud: "panels/crapaud.avif",
  guepe: "panels/guepe.avif",
  scorpion: "panels/scorpion.avif",
  corbeau: "panels/corbeau.avif",
  gargouille: "panels/gargouille.avif",
  sanglier: "panels/sanglier.avif",
  spectre: "panels/spectre.avif",
  mimique: "panels/mimique.avif",
  serpent: "panels/serpent.avif",
  demon: "panels/demon.avif",
  drake: "panels/drake.avif",
  liche: "panels/liche.avif",
  chevalier: "panels/chevalier.avif",
  horreur: "panels/horreur.avif",
  jotun: "panels/jotun.avif",
  archange: "panels/archange.avif",
  vampire: "panels/vampire.avif",
  cyclone: "panels/cyclone.avif",
  culte: "panels/culte.avif",
  kraken: "panels/kraken.avif",
  leviathan: "panels/leviathan.avif",
  phenix: "panels/phenix.avif",
  behemoth: "panels/behemoth.avif",
  roc: "panels/roc.avif",
  sphinx: "panels/sphinx.avif",
  wendigo: "panels/wendigo.avif",
  tarasque: "panels/tarasque.avif",
  milles: "panels/milles.avif",
  basilic: "panels/basilic.avif",
  astre: "panels/astre.avif",
  regard: "panels/regard.avif",
  maelstrom: "panels/maelstrom.avif",
  devoreur: "panels/devoreur.avif",
  prophete: "panels/prophete.avif",
  instant: "panels/instant.avif",
  nuit: "panels/nuit.avif",
  faucheur: "panels/faucheur.avif",
  reflet: "panels/reflet.avif",
  songeur: "panels/songeur.avif",
  fournaise: "panels/fournaise.avif",
  hiver: "panels/hiver.avif",
  chair: "panels/chair.avif",
  deluge: "panels/deluge.avif",
  acier: "panels/acier.avif",
  effondrement: "panels/effondrement.avif",
  nuee: "panels/nuee.avif",
  eclipse: "panels/eclipse.avif",
  cavaliers: "panels/cavaliers.avif",
  porte: "panels/porte.avif",
  momie: "panels/momie.avif",
  loup: "panels/loup.avif",
  harpie: "panels/harpie.avif",
  plante: "panels/plante.avif",
  sangsue: "panels/sangsue.avif",
  ver: "panels/ver.avif",
  fourmi: "panels/fourmi.avif",
  givre: "panels/givre.avif",
  automate: "panels/automate.avif",
  gorgone: "panels/gorgone.avif",
  crete: "panels/crete.avif",
  styx: "panels/styx.avif",
  forge: "panels/forge.avif",
  arene: "panels/arene.avif",
  enfers: "panels/enfers.avif",
  echidna: "panels/echidna.avif",
  tartare: "panels/tartare.avif",
  abysse: "panels/abysse.avif",
  olympe: "panels/olympe.avif",
  gorgoneB: "panels/gorgoneB.avif",
  creteB: "panels/creteB.avif",
  styxB: "panels/styxB.avif",
  forgeB: "panels/forgeB.avif",
  areneB: "panels/areneB.avif",
  enfersB: "panels/enfersB.avif",
  echidnaB: "panels/echidnaB.avif",
  tartareB: "panels/tartareB.avif",
  abysseB: "panels/abysseB.avif",
  olympeB: "panels/olympeB.avif",
};

/* ============================ TYPES ============================ */
type StatKey = "force" | "agilite" | "intelligence" | "vitalite";
type Stats = Record<StatKey, number>;
type SkillType = "physique" | "magique";
type SkillKind =
  | "frappe" | "multifrappe" | "lourde" | "soin" | "hemorragie" | "invocation"
  | "bouclier" | "vampirisme" | "affaiblissement" | "benediction" | "commotion" | "sacrifice";
type ThemeId = "feu" | "glace" | "sang" | "foudre" | "vent" | "ombre" | "lumiere" | "terre";
type Skill = {
  name: string;
  type: SkillType;
  kind: SkillKind;
  theme: ThemeId;
  level: number;
  uses: number;
  usesToNext: number;
  minDmg: number;
  maxDmg: number;
};
type MonsterDef = {
  name: string;
  rank: string;
  maxHp: number;
  minAtk: number;
  maxAtk: number;
  xp: number;
  img?: string;
  filter?: string;
  crown?: boolean;
  emoji?: string;
  weight?: number;
  desc: string;
};
type Trap = {
  text: string;
  options: { label: string; safe: boolean }[];
  hint: string;
};
type Puzzle = { q: string; options: { label: string; correct: boolean }[] };
type Companion = {
  name: string;
  rank: string;
  emoji: string;
  hp: number;
  maxHp: number;
  minAtk: number;
  maxAtk: number;
  summon?: boolean;
};
type Room =
  | { type: "monstre"; def: MonsterDef; done: boolean; ambush?: boolean }
  | { type: "miniboss"; def: MonsterDef; done: boolean; guardian?: boolean }
  | { type: "boss"; def: MonsterDef; done: boolean }
  | { type: "piege"; trap: Trap; done: boolean }
  | { type: "enigme"; puzzle: Puzzle; done: boolean }
  | { type: "repos"; rest: string; done: boolean };
type Dungeon = {
  id: number;
  name: string;
  zone: string;
  rank: string;
  family: string;
  rooms: number;
  closed: boolean;
  ruptured?: boolean;
};
type ActiveDungeon = {
  id: number;
  name: string;
  rank: string;
  family?: string;
  rooms: Room[];
  idx: number;
  bossDefeated: boolean;
  rupture: boolean;
  deadline: number;
  timeLimit: number;
  squad: Companion[];
  deaths?: number; /* morts du joueur dans CE donjon (quête « Sans une égratignure ») */
  potionsUsed?: number; /* gelées absorbées dans CE donjon (quête « Sobre et net ») */
  squadDown?: boolean; /* un PNJ de l'escouade est passé à terre (quête « Gardien de l'escouade ») */
  snapshot: { level: number; xp: number; points: number; stats: Stats; skills: Skill[]; activeSkill: number; pages: number };
};
/* Compteurs de quête : les 6 clés historiques + celles des 22 nouvelles missions
   (choix de Maximilien, 13/11/2026). Les clés dynamiques « fam:<id> » (contrat de
   bestiaire) et « duel:<archétype> » (défi d'archétype) étendent l'union — les
   sauvegardes v1 restent compatibles : toute clé absente vaut 0. */
type CounterKey =
  | "kills" | "uses" | "rooms" | "potions" | "xpGained" | "clears"
  | "alphas" | "minibosses" | "crowns" | "crits" | "dodges" | "traps" | "riddles"
  | "ambushes" | "summons" | "deposits" | "skillUps" | "trainingAlphas"
  | "flawless" | "sober" | "speedClears" | "ruptureClears" | "guardians"
  | "elites" | "rankF" | "rankE" | "rankD" | "relicD" | "relicC" | "relicB"
  | (`fam:${string}`) | (`duel:${string}`);
/* Relique extraite du noyau d'un boss : se depose au Bureau des reliques (Léa) contre de la renommée AMV */
type Relic = { id: number; name: string; rank: string; from: string; xp: number };
type Quest = {
  id: number;
  type: CounterKey;
  label: string;
  target: number;
  start: number;
  progress: number;
  reward: number;
  done: boolean;
  notified?: boolean;
  taken?: boolean; /* mission déjà acceptée : elle a quitté l'affiche de Mira — une mission rendue ou abandonnée n'y revient PAS */
};
type Screen =
  | "title"
  | "vn"
  | "system"
  | "create"
  | "training"
  | "amv"
  | "dungeon";

/* ============================ RECIT ============================ */
const SCENES: { chapter?: string; sub?: string; panel?: string; speaker?: string; text?: string }[] = [
  { chapter: "CHAPITRE I", sub: "L'AN 0 — La Découverte" },
  { panel: "p1", speaker: "Narrateur", text: "An 0. Un fermier de Sernans gravit sa montagne comme chaque matin, son troupeau devant lui. Ce matin-là, son monde bascule." },
  { panel: "p1", speaker: "Fermier", text: "« Qu… qu'est-ce que c'est que ça ?! Elle n'était pas là hier… Elle n'a JAMAIS été là ! »" },
  { panel: "p1", speaker: "Narrateur", text: "Une Porte. Cinquante mètres de spectre violet semi-translucide, dressée sur le flanc de la montagne. Comme un fantôme invisible qui se serait matérialisé d'un seul coup." },
  { panel: "p2", speaker: "Narrateur", text: "Moins de 48 heures plus tard, le gouvernement boucle la zone. Armée, barrières, projecteurs : la montagne devient un secret d'État." },
  { panel: "p2", speaker: "Officier de liaison", text: "« Personne n'approche. Et faites remonter TOUT ce que vos instruments mesurent. Même l'impossible. Surtout l'impossible. »" },
  { panel: "p3", speaker: "Narrateur", text: "Pendant des années, les scientifiques étudient la Porte. Elle pulse. Elle respire. Elle semble… attendre quelque chose. Puis vient le 04/04/04." },
  { chapter: "CHAPITRE II", sub: "04/04/04 — LA RUPTURE" },
  { panel: "p4", speaker: "Narrateur", text: "La Porte s'ouvre. Des milliers de monstres se déversent dans la vallée. Tout ce qui vit à proximité est détruit. L'Histoire appellera ce jour « la Rupture »." },
  { panel: "p4", speaker: "Narrateur", text: "Mais au chaos succède une découverte étrange : les monstres ne peuvent pas s'éloigner de leur Porte. Comme retenus par une laisse invisible, ils tournent en rond dans la zone dévastée." },
  { panel: "p4", speaker: "Narrateur", text: "Les années passent. D'autres Portes apparaissent. Puis, certains humains commencent à s'éveiller : des pouvoirs magiques, puissants ou dérisoires. On les appelle les Veilleurs." },
  { panel: "p2", speaker: "Narrateur", text: "L'Agence Mondiale des Veilleurs — l'AMV — est fondée pour encadrer les Veilleurs, les donjons et les ressources qu'on y récolte. Rangs G, F, E, D, C, B, A, S, SS, SSS… et au-delà, les Élus : trois seulement. Personne n'en sait plus à leur sujet." },
  { panel: "p2", speaker: "Narrateur", text: "Les donjons, eux aussi, reçoivent un rang — de G à SSS. Les S+, rarissimes, sont presque impossibles à refermer. Ce sont eux qui finissent par rompre… et à déverser leurs hordes sur le monde." },
  { chapter: "CHAPITRE III", sub: "LE PROLOGUE — 627 ans plus tard" },
  { panel: "p5", speaker: "Narrateur", text: "Année 627. Quelque part en France, {NAME} rentre chez lui. 25 ans, moyen en tout : intelligence, logique, force, même beauté. Il rate tout ce qu'il entreprend." },
  { panel: "p5", speaker: "Narrateur", text: "Ce soir-là pourtant, son corps agit avant sa tête. Un enfant. Une voiture qui ne ralentit pas. Et {NAME} qui pousse le gamin hors de sa trajectoire…" },
  { panel: "p5", speaker: "{NAME}", text: "« Tenez-vous… sur le… côté… petit… »" },
  { panel: "p8", speaker: "Narrateur", text: "À l'hôpital, la sœur de l'enfant harcèle l'équipe médicale. Il faut bien ça, pour rester debout." },
  { panel: "p8", speaker: "Léa, la sœur de l'enfant", text: "« Il va se réveiller, n'est-ce pas ? Dites-moi qu'il va se réveiller. C'est lui qui a sauvé mon petit frère… »" },
  { panel: "p8", speaker: "Médecin", text: "« Je suis désolé. Il est plongé dans le coma. Ses signes sont stables, mais je ne peux pas vous dire quand il reviendra. Ni même s'il reviendra. »" },
  { panel: "p6", speaker: "Narrateur", text: "Puis le noir. Le coma. Plus de deux ans dans ce lit d'hôpital. L'enfant, lui, est sauf. Sa sœur vient presque chaque jour lui faire la lecture." },
  { panel: "p6", speaker: "Léa, la sœur de l'enfant", text: "« Allez, réveillez-vous… Je vous ai apporté le tome 12. Vous ne pouvez pas disparaître avant de connaître la fin ! »" },
  { panel: "p7", speaker: "Narrateur", text: "639 jours. Puis, quelque chose se réveille dans ce lit d'hôpital. Pas seulement {NAME}." },
  { panel: "p7", speaker: "???", text: "« …veil… détecté… Pouvoir unique… classement… impossible… »" },
  { panel: "p9", speaker: "Narrateur", text: "Deux ans de coma. Deux ans pendant lesquels un corps devrait fondre, s'ankyloser, oublier. Or les compteurs s'affolent : réflexes, force, souffle — ce corps est au sommet de ce que l'humain tolère." },
  { panel: "p9", speaker: "Médecin", text: "« C'est… impossible. Deux ans de coma ne font pas ça. Aucun coma ne fait ça. Soit vous nous cachez quelque chose, soit c'est le monde qui nous cache quelque chose. »" },
  { panel: "p10", speaker: "Narrateur", text: "Le lendemain, contre l'avis des médecins, {NAME} signe sa sortie. Il serre une à une les mains qui l'ont maintenu en vie." },
  { panel: "p10", speaker: "{NAME}", text: "« Merci à vous tous d'avoir veillé sur moi pendant deux ans. Je vous dois la vie — et pour une fois, je crois que je peux vraiment rendre la pareille. »" },
  { panel: "p11", speaker: "Narrateur", text: "Ce même jour, une jeune femme pousse la porte de la chambre 214, un tome neuf sous le bras. Le lit est fait. Vide. Les draps déjà refroidis." },
  { panel: "p11", speaker: "Infirmière", text: "« L'homme de la 214 ? Il est sorti ce matin. Marche parfaitement, même pas une canne. Il tenait à peine en place, paraît-il. »" },
  { panel: "p11", speaker: "Léa, la sœur de l'enfant", text: "« 639 jours à veiller sur un inconnu… et je ne connais même pas son nom. Attends, super-héros. Tu me dois la fin du tome 12 — et je viendrai la chercher. »" },
];

const STAT_INFO: { key: StatKey; label: string; desc: string }[] = [
  { key: "force", label: "Force", desc: "Puissance physique — amplifie les compétences physiques" },
  { key: "agilite", label: "Agilité", desc: "Réflexes — coup critique (5 % → 50 %) et esquive des ripostes (5 % → 40 %) : +0,5 % par point au-dessus de 5" },
  { key: "intelligence", label: "Intelligence", desc: "Acuité mentale — amplifie les compétences magiques et la détection" },
  { key: "vitalite", label: "Vitalité", desc: "Endurance — détermine vos points de vie" },
];

const BOOT_LINES = [
  "> Connexion neurale… OK",
  "> Flux de mana détecté… ANORMAL",
  "> Identification du porteur… {NAME}",
  "> Analyse du pouvoir… 99%… 100%",
  "> POUVOIR UNIQUE DÉTECTÉ : « LE JOUEUR »",
  "> Classement impossible par l'AMV. Erreur. Erreur. Erreur.",
  "> Initialisation du Système… Bienvenue, Joueur.",
];

/* ============================ JALONS NARRATIFS (arc post-Éveil) ============================ */
/* Beats courts déclenchés par le gameplay (bureau de Léa, promotion AMV, rupture, Grimoire,
   Panthéon) — chaque jalon se voit UNE fois (storySeen persisté) et répond à une question
   du joueur : qui a fait de vous le Joueur, ce que sont les Portes, les Livres Enchantés,
   les Élus, Léa… jusqu'à la révélation de Zeus et l'ouverture de l'arc de Sernans.
   Les beats s'affichent en ordre narratif (chaîne : un beat ne tombe jamais tant que le
   précédent n'a pas été vu), un seul à la fois, par-dessus l'écran courant. */
type StoryBlock = { speaker?: string; text: string };
type StoryBeatDef = { id: string; title: string; panel: string; blocks: StoryBlock[] };
const STORY_BEATS: StoryBeatDef[] = [
  {
    id: "lea", title: "La lectrice", panel: "p12",
    blocks: [
      { speaker: "Narrateur", text: "Le Bureau des reliques sent le papier ancien et l'encaustique. Derrière le guichet, une jeune femme classe des dossiers — et elle tourne la tête avant même que vous ayez ouvert la bouche." },
      { speaker: "Léa", text: "« Attendez… c'est vous ? {NAME} ? Le dormeur de la chambre 214, debout devant mon guichet… Je vous ai lu chaque jour pendant 639 jours, et j'ai gardé la fin du tome 12 pour votre réveil. La voilà tombée, cette fin — vous me la devez toujours. »" },
      { speaker: "Narrateur", text: "Elle vous regarde une seconde de trop, comme on vérifie une parenthèse qu'on n'a jamais osé fermer. Puis elle se reprend : « Rien. Oubliez. Vos noyaux de boss, la consignation, le rang — tout passe par ici. » Une ombre passe derrière ses yeux : celle de quelqu'un qui retient une question depuis deux ans." },
    ],
  },
  {
    id: "sceau", title: "Le sceau", panel: "d1",
    blocks: [
      { speaker: "Agent Yuna", text: "« Félicitations pour votre rang. Petite chose curieuse, cependant : votre signature d'énergie refuse de rentrer dans nos cases. Le dossier est reparti ce matin avec un sceau dont je n'ai jamais vu la forme. Et je classe des Portes depuis vingt ans. »" },
      { speaker: "Narrateur", text: "Un sceau inconnu, dans une Agence qui a déjà tout classé en six siècles. Quelqu'un, quelque part, suit votre progression de très près. Et ce quelqu'un ne fait pas partie de l'AMV." },
    ],
  },
  {
    id: "ruptures", title: "Les Portes s'impatientent", panel: "d7",
    blocks: [
      { speaker: "Narrateur", text: "Le rapport d'incident s'affiche sur les écrans du hall. Derrière le jargon, une courbe simple : la fréquence des ruptures a doublé en un an." },
      { speaker: "Agent Mira", text: "« Les compteurs ne mentent pas : les Portes s'impatientent. Elles tiennent de moins en moins longtemps, elles cèdent de plus en plus vite. Comme si quelque chose, de l'autre côté, pressait le pas. »" },
      { speaker: "Narrateur", text: "Autour de vous, les Veilleurs baissent les yeux. Tout le monde a entendu la rumeur : au siège, on ne parle plus de si les ruptures vont s'arrêter. On parle de quand." },
    ],
  },
  {
    id: "pages", title: "La page qui vous tutoie", panel: "d6",
    blocks: [
      { speaker: "Narrateur", text: "Le cinquième Livre Enchanté s'effondre en cendres dorées. Dans votre Grimoire, les pages arrachées aux cinq volumes s'assemblent d'elles-mêmes, lentement, comme un puzzle qui se souviendrait de sa forme." },
      { speaker: "Le Système", text: "« TU LIS BIEN. C'EST DÉJÀ ÇA. CONTINUE DE REFERMER LES PORTES, {NAME}. NOUS PARLERONS QUAND TU SERAS PLUS GRAND. »" },
      { speaker: "Narrateur", text: "Une écriture d'enfant, appliquée, presque tendre. Le Système — votre fiche, vos niveaux, vos sorts — vient de s'adresser à vous pour la première fois. Et il a l'air… pressé." },
    ],
  },
  {
    id: "dieux", title: "Le test des dieux", panel: "gorgone",
    blocks: [
      { speaker: "Le Système", text: "« TEST DES DIEUX — ÉTALE 1/10 : LA GORGONE EST TOMBÉE. »" },
      { speaker: "Narrateur", text: "Méduse. Un mythe vieux de plus de deux millénaires, refermé par votre main. Les Portes S+ ne sont pas des accidents : elles ne s'ouvrent pas seules, elles sont ouvertes." },
      { speaker: "Le Système", text: "« NEUF ÉTALES RESTENT. NEUF GARDIENS. TU N'AS RIEN DEMANDÉ À PERSONNE — MAIS EUX, ILS ATTENDAIENT QUELQU'UN. »" },
    ],
  },
  {
    id: "carnet", title: "Le carnet", panel: "carnet",
    blocks: [
      { speaker: "Narrateur", text: "Léa vous fait signe d'approcher et sort un carnet usé de sous le comptoir. La couverture est molle, saturée d'années de manipulations." },
      { speaker: "Léa", text: "« 639 jours de lectures. Tout y est : les tomes, les heures, ce que les infirmières racontaient. Sauf que… regardez les pages du milieu. Ce n'est pas mon écriture. Ou plutôt si — c'est exactement mon écriture. Mais je ne me souviens pas d'avoir écrit ça. »" },
      { speaker: "Le carnet", text: "« VEILLE SUR LUI. IL SE RÉVEILLERA QUAND LA DERNIÈRE PORTE SERA PRÊTE. »" },
      { speaker: "Léa", text: "« Chaque nuit de ces deux années, j'ai obéi sans savoir à qui. Maintenant vous voilà, et je commence à avoir très peur. Pas de vous. Pour vous. »" },
    ],
  },
  {
    id: "sernans", title: "La rumeur de Sernans", panel: "p1",
    blocks: [
      { speaker: "Agent Yuna", text: "« Vous connaissez l'histoire de la première Porte ? An 0, un fermier, une montagne. La vallée de Sernans. Ce que les archives ne racontent pas, c'est ceci : il y a un mois, un Veilleur rang S a obtenu l'autorisation de réapprocher la zone interdite. Il enquêtait sur les Portes qui s'impatientent. »" },
      { speaker: "Narrateur", text: "« Il n'est jamais revenu. Et pour la première fois en 627 ans, les capteurs autour de Sernans enregistrent un battement régulier. Lent. Patient. Comme un cœur. Comme une respiration. »" },
    ],
  },
  {
    id: "systeme", title: "Le Système se présente", panel: "sys",
    blocks: [
      { speaker: "Le Système", text: "« TU M'AS ENFIN PERMIS DE PARLER EN MON NOM. ÉCOUTE BIEN, {NAME} : JE NE SUIS PAS TON POUVOIR. JE SUIS LEUR DERNIÈRE ŒUVRE. »" },
      { speaker: "Le Système", text: "« LES DIEUX QUE TU RENVERSES NE SONT PAS DES ENVAHISSEURS. CE SONT LES GARDIENS D'UNE PRISON. CHAQUE PORTE DE CE MONDE EST UNE FISSURE DE CETTE PRISON — ILS SE SONT SCELLÉS EUX-MÊMES DEDANS POUR LA TENIR FERMÉE. »" },
      { speaker: "Le Système", text: "« MAIS LE SCELLAGE FAIBLIT. ALORS ILS M'ONT FORGÉ — MOI, LE SYSTÈME — POUR CHERCHER UN CHAMPION CAPABLE DE PRENDRE LA RELÈVE. TU ES LE QUATRIÈME CANDIDAT. LES TROIS PRÉCÉDENTS… VOTRE MONDE LES APPELLE LES ÉLUS. »" },
      { speaker: "Narrateur", text: "La salle du gardien s'efface derrière vous. Pour la première fois depuis votre éveil, vous savez ce que vous êtes : un remplaçant désigné par des dieux trop fatigués pour continuer. Le contrat tient en une ligne — devenir assez fort pour tenir une porte que même eux n'ont plus la force de tenir." },
    ],
  },
  {
    id: "veilleuse", title: "La Veilleuse", panel: "p6",
    blocks: [
      { speaker: "Léa", text: "« Puisque tout se dévoile… autant tout vous dire. Le soir où l'on vous a ramené à l'hôpital, une voix m'a réveillée. Pas un rêve : une fiche. Comme les vôtres — des niveaux, des chiffres. MA fiche. Classe : VEILLEUSE. Aptitude unique : “Veiller sur un dormeur jusqu'à son éveil”. »" },
      { speaker: "Léa", text: "« Les 639 jours, les lectures, le tome 12… ce n'était pas que de la gentillesse. C'était une mission. Seulement voilà : la mission est terminée depuis votre réveil. Et je suis toujours là. Cherchez l'erreur. »" },
      { speaker: "Narrateur", text: "Elle referme le carnet, sourit de travers. « Alors dites-moi, Joueur… quand partez-vous pour Sernans ? Et surtout : comptez-vous revenir ? »" },
    ],
  },
  {
    id: "zeus", title: "La réponse des dieux", panel: "olympeB",
    blocks: [
      { speaker: "Narrateur", text: "Zeus s'agenouille. Le roi de l'Olympe, vaincu par un homme qui, il y a peu, n'était même pas classé G. Le panthéon entier retient son souffle." },
      { speaker: "Zeus", text: "« Prenons-nous au sérieux, mortel. Nous ne sommes pas vos ennemis — nous ne l'avons jamais été. Il y a des ères, ce monde n'était pas le vôtre. Quelque chose y régnait. Quelque chose de plus grand encore l'a vaincue — sans pouvoir la tuer. Alors on l'a enfouie sous la montagne que vous appelez Sernans, et on a posé dessus des verrous vivants : nous. »" },
      { speaker: "Zeus", text: "« Les Portes ? Des fissures dans la prison. Les ruptures ? Son souffle qui force les jointures. Pendant six siècles, nous avons tenu. Mais les dieux s'épuisent, petit. C'est la loi de toutes les prisons : un jour, le geôlier meurt. Et alors ? »" },
      { speaker: "Zeus", text: "« Alors on forge un successeur. Le Système a choisi trois âmes avant toi. VOTRE monde les appelle les Élus : ils ont tenu, puis ils ont cessé de croire, et la prison a continué de fuir. Toi, tu as fait ce que nous n'avions plus la force de faire — tu as renversé les gardiens au lieu de les prier. »" },
      { speaker: "Le Système", text: "« TEST DES DIEUX : ACHEVÉ. CANDIDAT 4 : CONFORME. {NAME}… LA PORTE PRIMORDIALE S'EST MISE À BATTRE. TU ENTENDS ? C'EST À TOI QU'ELLE S'ADRESSE. »" },
    ],
  },
  {
    id: "elu", title: "Le troisième", panel: "elu",
    blocks: [
      { speaker: "Narrateur", text: "326. Le chiffre que l'AMV n'a jamais pu classer. Ce soir-là, un visiteur vous attend devant le siège : une silhouette impossible à regarder droit, comme si vos yeux glissaient sur elle." },
      { speaker: "L'Élu", text: "« Le Joueur… Enfin. Je suis ce que votre monde appelle un Élu. Nous sommes trois. Le premier a tenu Sernans cent ans, puis il a cessé de croire — la fissure qu'il laissait a coûté quarante mille vies. Le deuxième a voulu ouvrir la Porte pour tuer ce qui dort. La Prison l'a rendu en une nuit, à peine reconnaissable. Le troisième, c'est moi. »" },
      { speaker: "L'Élu", text: "« Voilà ce que l'Agence ignore : ce ne sont pas les dieux qui referment vos Portes, petit. C'est moi. Chaque fois. Une à une. Depuis un siècle. Et je m'épuise. Toi, tu as fait mieux que nous trois : tu as renversé les gardiens. Prouve que ce n'était pas la chance. »" },
      { speaker: "Narrateur", text: "La silhouette se dissout dans l'air glacé. Sur le sol, posé bien en évidence, un badge d'accès : AUTORISATION HORS-RANG — VALLÉE DE SERNANS." },
    ],
  },
  {
    id: "primordiale", title: "La Porte Primordiale", panel: "sernans",
    blocks: [
      { speaker: "Agent Yuna", text: "« Ordre spécial, priorité absolue — et pour une fois, ça ne vient pas de l'Agence. L'accès à la zone interdite de Sernans vous est accordé par… personne ne sait qui signe. Les capteurs ont rendu leur verdict : la première Porte de l'Histoire n'a jamais été une Porte comme les autres. »" },
      { speaker: "Narrateur", text: "« C'est la Prison elle-même. Le berceau et la porte. Le battement que tout le monde entend désormais dans les rêves des Veilleurs. Au bout de la vallée, le cercle géant palpite — violet, patient. Il a attendu 627 ans. Il attend encore. »" },
      { speaker: "Le Système", text: "« NOUVELLE ÉTALE DÉCLENCHÉE : LA DERNIÈRE PORTE. PRÉPARE-TOI, {NAME}. CETTE FOIS, PERSONNE NE VIENDRA FERMER À TA PLACE. »" },
    ],
  },
];

/* ============================ DONJONS : DONNEES ============================ */
/* RÉPARTITION DES PORTES (choix de Maximilien) :
   - les Portes S/SS/SSS/S+ restent RARES quel que soit le rang du joueur (événements
     du monde, pas des récompenses de matchmaking) : part FIXE de 3,6 % ;
   - les 96,4 % restants GLISSENT selon le rang AMV du joueur (carrière G→A) :
     les catégories trop basses disparaissent des radars à mesure qu'on monte
     (un champion poids lourd ne combat plus en salle de quartier) ;
   - au rang S et au-delà, le rang A reste le pain quotidien (EXP toujours active)
     avec une tranche de B pour le farm de pages sans EXP. */
const RARE_GATES: [string, number][] = [
  ["S", 2],
  ["SS", 1],
  ["SSS", 0.5],
  ["S+", 0.1],
];
/* Bande glissante par index de rang AMV (SANS-RANG = 0 comme G) */
const SLIDING_BANDS: [string, number][][] = [
  [["G", 75], ["F", 15], ["E", 6.4]],
  [["G", 25], ["F", 50], ["E", 21.4]],
  [["F", 25], ["E", 50], ["D", 21.4]],
  [["E", 25], ["D", 50], ["C", 21.4]],
  [["D", 25], ["C", 50], ["B", 21.4]],
  [["C", 25], ["B", 50], ["A", 21.4]],
  [["B", 25], ["A", 71.4]],
  [["B", 15], ["A", 81.4]],
  [["B", 15], ["A", 81.4]],
  [["B", 10], ["A", 86.4]],
  [["A", 96.4]],
];

const RANK_BADGE: Record<string, string> = {
  G: "bg-slate-400/15 text-slate-300 ring-slate-300/40",
  F: "bg-sky-400/15 text-sky-300 ring-sky-400/40",
  E: "bg-emerald-400/15 text-emerald-300 ring-emerald-400/40",
  D: "bg-amber-400/15 text-amber-300 ring-amber-400/40",
  C: "bg-orange-400/15 text-orange-300 ring-orange-400/40",
  B: "bg-red-400/15 text-red-300 ring-red-400/40",
  A: "bg-violet-400/15 text-violet-300 ring-violet-400/40",
  S: "bg-fuchsia-400/20 text-fuchsia-300 ring-fuchsia-400/60",
  SS: "bg-pink-400/20 text-pink-300 ring-pink-400/60",
  SSS: "bg-purple-400/25 text-purple-200 ring-purple-400/70",
  "S+": "bg-red-400/25 text-red-200 ring-red-400/70",
};

const ZONES = [
  "Sernans",
  "Vesoul",
  "les Carrières d'Ombre",
  "la Forêt Cendrée",
  "le Col Brumeux",
  "la Mine de Fer",
  "les Landes d'Ébène",
  "le Val des Fées",
  "les Catacombes de Gray",
  "la Combe aux Loups",
  "le Plateau d'Argile",
  "les Ruines de Luxe",
];

/* ==================== FAMILLES DE MONSTRES (10) ====================
   Chaque famille = donjon rang G (base + alpha) et donjon rang D (élites).
   Regles d'equilibrage : alpha = base x1.4 PV / +1 atq / x2 EXP ;
   elite D = x2.2 PV / x1.5 atq / x3.3 EXP ; boss = noyau du donjon.
   Les familles sans planche utilisent un avatar emoji (img absent). */
const RANK_ORDER_LIST = ["G", "F", "E", "D", "C", "B", "A", "S", "SS", "SSS", "S+"];
const RANK_INDEX: Record<string, number> = Object.fromEntries(RANK_ORDER_LIST.map((r, i) => [r, i]));

/* Mise a l'echelle par rang : G/D utilisent leurs donnees brutes, les autres rangs
   appliquent un multiplicateur (D = pool elite nomme ; C+ = elites renforcees). */
const TIER_SCALE: Record<string, { hp: number; atk: number; xp: number; filter?: string }> = {
  G: { hp: 1, atk: 1, xp: 1 },
  F: { hp: 1.5, atk: 1.25, xp: 2, filter: "saturate(1.25)" },
  E: { hp: 1.9, atk: 1.5, xp: 3, filter: "saturate(1.4) brightness(0.95)" },
  D: { hp: 1, atk: 1, xp: 1 },
  C: { hp: 1.4, atk: 1.3, xp: 1.5, filter: "saturate(1.5) brightness(0.9)" },
  B: { hp: 1.9, atk: 1.6, xp: 2.2, filter: "saturate(1.6) brightness(0.85)" },
  A: { hp: 2.6, atk: 2, xp: 3, filter: "saturate(1.7) brightness(0.8)" },
  S: { hp: 3.5, atk: 2.5, xp: 10, filter: "saturate(1.8) brightness(0.75)" },
  SS: { hp: 4.8, atk: 3, xp: 25, filter: "saturate(2) brightness(0.7)" },
  SSS: { hp: 6.5, atk: 3.8, xp: 75, filter: "saturate(2.2) brightness(0.65)" },
  "S+": { hp: 9, atk: 5, xp: 150, filter: "saturate(2.4) brightness(0.6)" },
};

function scaleDef(m: MonsterDef, rank: string): MonsterDef {
  const t = TIER_SCALE[rank] ?? TIER_SCALE.G;
  return {
    ...m,
    rank,
    maxHp: Math.round(m.maxHp * t.hp),
    minAtk: Math.max(1, Math.round(m.minAtk * t.atk)),
    maxAtk: Math.max(2, Math.round(m.maxAtk * t.atk)),
    xp: Math.round(m.xp * t.xp),
    filter: [m.filter, t.filter].filter(Boolean).join(" ") || undefined,
  };
}

/* Tirage pondere : les formes alpha sont plus rares que les bases */
function pickMonster(pool: MonsterDef[]): MonsterDef {
  const total = pool.reduce((a, m) => a + (m.weight ?? 1), 0);
  let r = Math.random() * total;
  for (const m of pool) {
    r -= m.weight ?? 1;
    if (r < 0) return m;
  }
  return pool[0];
}

type Family = {
  id: string;
  label: string;
  emoji: string;
  gName: string; // nom du donjon rang G
  dName: string; // nom du donjon rang D (elites)
  pool: MonsterDef[]; // bases + alpha
  elite: MonsterDef[]; // elites + alpha elite
  bossG: MonsterDef;
  bossD: MonsterDef;
};

const FAMILIES: Family[] = [
  {
    id: "slime",
    label: "Slimes",
    emoji: "🟢",
    gName: "Donjon des Slimes",
    dName: "Caverne des Slimes",
    pool: [
      { name: "Slime", rank: "G", maxHp: 30, minAtk: 2, maxAtk: 3, xp: 15, img: "c2", desc: "Créature gélatineuse des donjons de rang G. Le grand classique." },
      { name: "Slime Écarlate", rank: "G", maxHp: 34, minAtk: 3, maxAtk: 5, xp: 20, img: "c2", filter: "hue-rotate(130deg) saturate(1.35)", desc: "Variante agressive au noyau brûlant." },
      { name: "Slime Toxique", rank: "G", maxHp: 28, minAtk: 3, maxAtk: 4, xp: 18, img: "c2", filter: "hue-rotate(80deg) saturate(1.25)", desc: "Sa gelée corrode les bottes des Veilleurs distraits." },
      { name: "Slime Alpha", rank: "G", maxHp: 42, minAtk: 3, maxAtk: 5, xp: 30, img: "c2", filter: "hue-rotate(45deg) saturate(1.3)", weight: 0.6, desc: "Variante alpha. Un peu plus dense, un peu plus grognon." },
    ],
    elite: [
      { name: "Slime Magma", rank: "D", maxHp: 66, minAtk: 4, maxAtk: 6, xp: 55, img: "c2", filter: "hue-rotate(15deg) saturate(1.45)", desc: "Élite. Son noyau est passé au rouge incandescent." },
      { name: "Slime d'Obsidienne", rank: "D", maxHp: 70, minAtk: 4, maxAtk: 5, xp: 58, img: "c2", filter: "brightness(0.55) saturate(0.8)", desc: "Élite. Une gelée noire et vitreuse, dure comme la roche." },
      { name: "Slime Alpha Corrompu", rank: "D", maxHp: 92, minAtk: 5, maxAtk: 7, xp: 99, img: "c2", filter: "hue-rotate(265deg) saturate(1.5)", weight: 0.6, desc: "Alpha élite. Ce qui devrait rester au fond de la Caverne." },
    ],
    bossG: { name: "Roi Slime", rank: "G", maxHp: 90, minAtk: 4, maxAtk: 7, xp: 120, img: "d4", crown: true, desc: "Le noyau du donjon. Tuez-le, et la Porte se refermera." },
    bossD: { name: "Roi Slime Corrompu", rank: "D", maxHp: 160, minAtk: 7, maxAtk: 11, xp: 300, img: "d4", filter: "hue-rotate(265deg) saturate(1.4)", crown: true, desc: "Le noyau de la Caverne. Ce qui ne devrait pas exister." },
  },
  {
    id: "rat",
    label: "Rats des Catacombes",
    emoji: "🐀",
    gName: "Les Égouts Rongés",
    dName: "Les Catacombes Rongées",
    pool: [
      { name: "Rat des Catacombes", rank: "G", maxHp: 26, minAtk: 3, maxAtk: 5, xp: 14, img: "rat", desc: "Rapide, mesquin, et jamais seul bien longtemps." },
      { name: "Rat des Égouts", rank: "G", maxHp: 24, minAtk: 4, maxAtk: 6, xp: 16, img: "rat", desc: "Sa fourrure luisante raconte tout sur son régime alimentaire." },
      { name: "Rat Broyeur", rank: "G", maxHp: 36, minAtk: 4, maxAtk: 6, xp: 28, img: "rat", weight: 0.6, desc: "Alpha. Ses incisives laissent des marques dans l'acier." },
    ],
    elite: [
      { name: "Rongeur d'Abîme", rank: "D", maxHp: 57, minAtk: 4, maxAtk: 7, xp: 46, img: "rat", desc: "Élite. Les Veilleurs parlent de lui à voix basse." },
      { name: "Rat d'Ossuaire", rank: "D", maxHp: 53, minAtk: 4, maxAtk: 6, xp: 53, img: "rat", desc: "Élite. Il ronge les os des perdus depuis des décennies." },
      { name: "Rat Broyeur d'Abîme", rank: "D", maxHp: 79, minAtk: 5, maxAtk: 8, xp: 92, img: "rat", weight: 0.6, desc: "Alpha élite. Le genre de chose qui fait fuir les chats." },
    ],
    bossG: { name: "Rat Ogrom, Roi des Égouts", rank: "G", maxHp: 90, minAtk: 5, maxAtk: 8, xp: 110, img: "rat", crown: true, desc: "Le noyau du donjon. Gros comme un veau, deux fois plus hargneux." },
    bossD: { name: "Ogrom Couronné des Catacombes", rank: "D", maxHp: 198, minAtk: 8, maxAtk: 13, xp: 275, img: "rat", crown: true, desc: "Le noyau des Catacombes. Sa couronne est taillée dans un vieil os." },
  },
  {
    id: "chauvesouris",
    label: "Chauves-souris des Voûtes",
    emoji: "🦇",
    gName: "La Voûte Hurlante",
    dName: "Le Sanctuaire des Ailes",
    pool: [
      { name: "Roussette des Voûtes", rank: "G", maxHp: 20, minAtk: 4, maxAtk: 6, xp: 16, img: "bat", desc: "Fragile mais nerveuse : elle frappe avant même d'être vue." },
      { name: "Chauve-souris Sanguine", rank: "G", maxHp: 18, minAtk: 5, maxAtk: 7, xp: 18, img: "bat", desc: "Sa piqûre laisse une trace qui démange pendant des heures." },
      { name: "Roussette Reine", rank: "G", maxHp: 28, minAtk: 5, maxAtk: 7, xp: 32, img: "bat", weight: 0.6, desc: "Alpha. Elle dirige le hurlement collectif de la voûte." },
    ],
    elite: [
      { name: "Spectre Ailé", rank: "D", maxHp: 44, minAtk: 6, maxAtk: 9, xp: 53, img: "bat", desc: "Élite. Ses ailes laissent une traîne de brume violette." },
      { name: "Chiroptère Gris", rank: "D", maxHp: 40, minAtk: 6, maxAtk: 9, xp: 59, img: "bat", desc: "Élite. Il hurle à une fréquence qui fissure les lanternes." },
      { name: "Roussette Reine Spectrale", rank: "D", maxHp: 62, minAtk: 7, maxAtk: 10, xp: 106, img: "bat", weight: 0.6, desc: "Alpha élite. Sa silhouette clignote entre deux mondes." },
    ],
    bossG: { name: "Hurlement des Voûtes", rank: "G", maxHp: 70, minAtk: 6, maxAtk: 10, xp: 105, img: "bat", crown: true, desc: "Le noyau du donjon. Quand le cri cesse, c'est qu'il vous a repéré." },
    bossD: { name: "Hurlement Écarlate", rank: "D", maxHp: 154, minAtk: 10, maxAtk: 16, xp: 260, img: "bat", crown: true, desc: "Le noyau du Sanctuaire. Son battement d'ailes aspire la lumière." },
  },
  {
    id: "araignee",
    label: "Araignées Tisseuses",
    emoji: "🕷️",
    gName: "La Tanière Tissée",
    dName: "La Toile d'Ébène",
    pool: [
      { name: "Araignée des Voûtes", rank: "G", maxHp: 32, minAtk: 3, maxAtk: 5, xp: 18, img: "spider", desc: "Patiente. Vous êtes déjà dans sa toile, en réalité." },
      { name: "Araignée Voilière", rank: "G", maxHp: 30, minAtk: 4, maxAtk: 6, xp: 20, img: "spider", desc: "Elle saute de pilier en pilier sans un bruit." },
      { name: "Veuve Alpha", rank: "G", maxHp: 45, minAtk: 4, maxAtk: 6, xp: 36, img: "spider", weight: 0.6, desc: "Alpha. Ses huit yeux comptent vos points faibles." },
    ],
    elite: [
      { name: "Tisseuse d'Ébène", rank: "D", maxHp: 70, minAtk: 4, maxAtk: 7, xp: 59, img: "spider", desc: "Élite. Sa toile noie les salles d'un velours sombre." },
      { name: "Araignée Funeste", rank: "D", maxHp: 66, minAtk: 5, maxAtk: 9, xp: 66, img: "spider", desc: "Élite. Son venin recuit les plaques en quelques secondes." },
      { name: "Veuve d'Ébène", rank: "D", maxHp: 99, minAtk: 6, maxAtk: 9, xp: 119, img: "spider", weight: 0.6, desc: "Alpha élite. La Toile elle-même semble s'écarter sur son passage." },
    ],
    bossG: { name: "Matriarche Tisseuse", rank: "G", maxHp: 100, minAtk: 5, maxAtk: 9, xp: 130, img: "spider", crown: true, desc: "Le noyau du donjon. Le plafond entier est son trône." },
    bossD: { name: "Matriarche d'Ébène", rank: "D", maxHp: 220, minAtk: 8, maxAtk: 14, xp: 325, img: "spider", crown: true, desc: "Le noyau de la Toile. Ses fils sectionnent le fer à hauteur d'homme." },
  },
  {
    id: "squelette",
    label: "Squelettes Égarés",
    emoji: "💀",
    gName: "L'Ossuaire Égaré",
    dName: "Les Cryptes Runiques",
    pool: [
      { name: "Squelette Égaré", rank: "G", maxHp: 36, minAtk: 3, maxAtk: 4, xp: 18, img: "skel", desc: "Tenace. Il se relève toujours une fois de trop." },
      { name: "Crâne Rieur", rank: "G", maxHp: 30, minAtk: 4, maxAtk: 6, xp: 20, img: "skel", desc: "Il flotte et ricane. Personne ne sait ce qui le tient en l'air." },
      { name: "Capitaine d'Os", rank: "G", maxHp: 50, minAtk: 4, maxAtk: 5, xp: 36, img: "skel", weight: 0.6, desc: "Alpha. Il commande encore, même sans chair pour obéir." },
    ],
    elite: [
      { name: "Ossier Runique", rank: "D", maxHp: 79, minAtk: 4, maxAtk: 6, xp: 59, img: "skel", desc: "Élite. Des runes rongent ses os comme des vers lumineux." },
      { name: "Squelette d'Assaut", rank: "D", maxHp: 66, minAtk: 5, maxAtk: 8, xp: 66, img: "skel", desc: "Élite. Une garde d'os qui n'a jamais reçu l'ordre de s'arrêter." },
      { name: "Capitaine Runique", rank: "D", maxHp: 110, minAtk: 5, maxAtk: 7, xp: 119, img: "skel", weight: 0.6, desc: "Alpha élite. Son commandement résonne dans la Crypte entière." },
    ],
    bossG: { name: "Roi d'Os Errant", rank: "G", maxHp: 110, minAtk: 5, maxAtk: 8, xp: 140, img: "skel", crown: true, desc: "Le noyau du donjon. Il cherche son royaume depuis mille ans." },
    bossD: { name: "Roi d'Os Couronné", rank: "D", maxHp: 242, minAtk: 8, maxAtk: 12, xp: 350, img: "skel", crown: true, desc: "Le noyau des Cryptes. Sa couronne runique brûle d'un feu froid." },
  },
  {
    id: "myconide",
    label: "Myconides",
    emoji: "🍄",
    gName: "La Salle des Spores",
    dName: "Le Jardin Pâle",
    pool: [
      { name: "Myconide Rampant", rank: "G", maxHp: 28, minAtk: 2, maxAtk: 5, xp: 16, img: "myco", desc: "Une masse de chapeaux qui avance en rampant, sournoirement." },
      { name: "Chapelignon", rank: "G", maxHp: 30, minAtk: 2, maxAtk: 4, xp: 18, img: "myco", desc: "Détacher son chapeau le met dans une colère noire." },
      { name: "Myconide Alpha", rank: "G", maxHp: 39, minAtk: 3, maxAtk: 6, xp: 32, img: "myco", weight: 0.6, desc: "Alpha. Son chapeau luit d'une lueur qui endort les affûts." },
    ],
    elite: [
      { name: "Sporule Colossale", rank: "D", maxHp: 62, minAtk: 3, maxAtk: 7, xp: 53, img: "myco", desc: "Élite. Ses spores prennent racine dans les poumons." },
      { name: "Myconide Vénéneux", rank: "D", maxHp: 66, minAtk: 3, maxAtk: 6, xp: 59, img: "myco", desc: "Élite. Le Jardin pousse mieux là où il est passé." },
      { name: "Myconide Alpha Vénéneux", rank: "D", maxHp: 86, minAtk: 4, maxAtk: 9, xp: 106, img: "myco", weight: 0.6, desc: "Alpha élite. Un bouquet que l'on n'offre qu'à ses ennemis." },
    ],
    bossG: { name: "Chapelignon Ancien", rank: "G", maxHp: 95, minAtk: 4, maxAtk: 8, xp: 120, img: "myco", crown: true, desc: "Le noyau du donjon. Sa fronde a abrité trois générations de spores." },
    bossD: { name: "Chapelignon Monstrueux", rank: "D", maxHp: 209, minAtk: 6, maxAtk: 12, xp: 300, img: "myco", crown: true, desc: "Le noyau du Jardin. Ses spores ont leur propre forêt intérieure." },
  },
  {
    id: "golem",
    label: "Golems d'Argile",
    emoji: "🗿",
    gName: "La Fonderie d'Argile",
    dName: "Les Salles de Basalte",
    pool: [
      { name: "Golem d'Argile", rank: "G", maxHp: 50, minAtk: 2, maxAtk: 3, xp: 20, img: "golem", desc: "Le mur ambulant : lent, muet, et très difficile à briser." },
      { name: "Sentinelle d'Argile", rank: "G", maxHp: 45, minAtk: 3, maxAtk: 4, xp: 22, img: "golem", desc: "Elle garde des portes dont plus personne n'a la clé." },
      { name: "Golem Alpha", rank: "G", maxHp: 70, minAtk: 3, maxAtk: 4, xp: 40, img: "golem", weight: 0.6, desc: "Alpha. Deux fois plus d'argile, zéro fois plus de patience." },
    ],
    elite: [
      { name: "Golem de Basalte", rank: "D", maxHp: 110, minAtk: 3, maxAtk: 4, xp: 66, img: "golem", desc: "Élite. L'argile a cuit dans le noyau : c'est de la pierre, maintenant." },
      { name: "Sentinelle de Basalte", rank: "D", maxHp: 99, minAtk: 4, maxAtk: 6, xp: 73, img: "golem", desc: "Élite. Ses runes de garde gravent des cercles dans la poussière." },
      { name: "Golem Alpha de Basalte", rank: "D", maxHp: 154, minAtk: 4, maxAtk: 6, xp: 132, img: "golem", weight: 0.6, desc: "Alpha élite. Le sol tremble sur trois salles de distance." },
    ],
    bossG: { name: "Colosse de la Fonderie", rank: "G", maxHp: 150, minAtk: 4, maxAtk: 7, xp: 150, img: "golem", crown: true, desc: "Le noyau du donjon. Il est né dans le moule du noyau lui-même." },
    bossD: { name: "Colosse de Basalte", rank: "D", maxHp: 330, minAtk: 6, maxAtk: 11, xp: 375, img: "golem", crown: true, desc: "Le noyau des Salles. Chacun de ses pas referme une époque." },
  },
  {
    id: "lezard",
    label: "Lézards des Galeries",
    emoji: "🦎",
    gName: "Les Galeries Acides",
    dName: "Le Nid du Basilic",
    pool: [
      { name: "Lézard des Galeries", rank: "G", maxHp: 30, minAtk: 4, maxAtk: 5, xp: 18, img: "liz", desc: "Sa morsure pique — et démange encore dans la soirée." },
      { name: "Gecko des Cendres", rank: "G", maxHp: 28, minAtk: 3, maxAtk: 6, xp: 20, img: "liz", desc: "Invisible contre la roche, sauf quand il cligne." },
      { name: "Basilic Juvénile", rank: "G", maxHp: 42, minAtk: 5, maxAtk: 6, xp: 36, img: "liz", weight: 0.6, desc: "Alpha. Jeune basilic : son regard pétrifie encore les moitiés." },
    ],
    elite: [
      { name: "Basilic Acide", rank: "D", maxHp: 66, minAtk: 6, maxAtk: 7, xp: 59, img: "liz", desc: "Élite. Sa salive creuse la pierre comme du beurre." },
      { name: "Gecko d'Acide", rank: "D", maxHp: 62, minAtk: 4, maxAtk: 9, xp: 66, img: "liz", desc: "Élite. Il laisse des traces de pattes fumantes sur les murs." },
      { name: "Basilic Acide Majeur", rank: "D", maxHp: 92, minAtk: 7, maxAtk: 9, xp: 119, img: "liz", weight: 0.6, desc: "Alpha élite. Ne croisez pas son regard plus d'une seconde." },
    ],
    bossG: { name: "Basilic des Galeries", rank: "G", maxHp: 100, minAtk: 6, maxAtk: 9, xp: 130, img: "liz", crown: true, desc: "Le noyau du donjon. Les statues de la salle G-12 disent tout." },
    bossD: { name: "Basilic Couronné", rank: "D", maxHp: 220, minAtk: 9, maxAtk: 14, xp: 325, img: "liz", crown: true, desc: "Le noyau du Nid. Son regard pétrifie les Veilleurs et leurs souvenirs." },
  },
  {
    id: "feufollet",
    label: "Feux Follets",
    emoji: "🔥",
    gName: "Le Couloir des Lueurs",
    dName: "Le Brasier Grégeois",
    pool: [
      { name: "Feu Follet", rank: "G", maxHp: 18, minAtk: 5, maxAtk: 7, xp: 16, img: "wisp", desc: "Intangible et brûlant : il meurt vite, mais grille vite aussi." },
      { name: "Lueur Folle", rank: "G", maxHp: 16, minAtk: 4, maxAtk: 7, xp: 18, img: "wisp", desc: "Elle imite votre lanterne pour mieux vous attirer." },
      { name: "Feu Follet Majeur", rank: "G", maxHp: 25, minAtk: 6, maxAtk: 8, xp: 32, img: "wisp", weight: 0.6, desc: "Alpha. Une lueur plus dense, avec un appétit nettement plus net." },
    ],
    elite: [
      { name: "Feu Grégeois", rank: "D", maxHp: 40, minAtk: 7, maxAtk: 10, xp: 53, img: "wisp", desc: "Élite. On ne l'éteint pas avec de l'eau. On fuit." },
      { name: "Follet Grégeois", rank: "D", maxHp: 35, minAtk: 6, maxAtk: 10, xp: 59, img: "wisp", desc: "Élite. Il danse au plafond en attendant votre fatigue." },
      { name: "Feu Majeur Grégeois", rank: "D", maxHp: 55, minAtk: 8, maxAtk: 12, xp: 106, img: "wisp", weight: 0.6, desc: "Alpha élite. Sa lumière vous suit jusque dans vos rêves." },
    ],
    bossG: { name: "Vif-Feu Ancien", rank: "G", maxHp: 60, minAtk: 8, maxAtk: 11, xp: 120, img: "wisp", crown: true, desc: "Le noyau du donjon. Il brûle depuis bien avant la première Porte." },
    bossD: { name: "Vif-Feu Grégeois", rank: "D", maxHp: 132, minAtk: 12, maxAtk: 17, xp: 300, img: "wisp", crown: true, desc: "Le noyau du Brasier. Toute la salle est déjà sa flamme." },
  },
  {
    id: "scarabee",
    label: "Scarabées Cuirassés",
    emoji: "🪲",
    gName: "La Nuée Cuirassée",
    dName: "La Carapace Profonde",
    pool: [
      { name: "Scarabée Cuirassé", rank: "G", maxHp: 34, minAtk: 3, maxAtk: 4, xp: 18, img: "scar", desc: "Blindé. Les coups glissent dessus comme la pluie sur un toit." },
      { name: "Bousier Runique", rank: "G", maxHp: 36, minAtk: 3, maxAtk: 5, xp: 20, img: "scar", desc: "Il pousse devant lui une boule gravée de symboles agités." },
      { name: "Scarabée Alpha", rank: "G", maxHp: 48, minAtk: 4, maxAtk: 5, xp: 36, img: "scar", weight: 0.6, desc: "Alpha. Une carapace que les pinces des Veilleurs n'ouvrent pas." },
    ],
    elite: [
      { name: "Colosse Cuirassé", rank: "D", maxHp: 75, minAtk: 4, maxAtk: 6, xp: 59, img: "scar", desc: "Élite. Son blindage dévie même les lames magiques." },
      { name: "Scarabée Runique Majeur", rank: "D", maxHp: 79, minAtk: 4, maxAtk: 7, xp: 66, img: "scar", desc: "Élite. Ses runes clignotent au rythme de vos erreurs." },
      { name: "Colosse Alpha", rank: "D", maxHp: 106, minAtk: 5, maxAtk: 7, xp: 119, img: "scar", weight: 0.6, desc: "Alpha élite. La Nuée s'écarte quand il roule." },
    ],
    bossG: { name: "Empereur Cuirassé", rank: "G", maxHp: 105, minAtk: 5, maxAtk: 9, xp: 130, img: "scar", crown: true, desc: "Le noyau du donjon. Son front tranche mieux qu'une hallebarde." },
    bossD: { name: "Empereur Carmin", rank: "D", maxHp: 231, minAtk: 8, maxAtk: 14, xp: 325, img: "scar", crown: true, desc: "Le noyau de la Carapace. Sa cuticule a bu le sang de cent donjons." },
  },
];

/* ===== NOUVELLES FAMILLES (choix de Maximilien, 13/11/2026) : réservées aux donjons
   de rang F et de rang C. Rang F = pool (bases + alpha), gName, bossG ; rang C = les
   MÊMES familles en version élite : elite (élites + alpha), dName, bossD. Les autres
   bandes de rangs (G/E/D/B/A/S+) tirent dans FAMILIES. ===== */
const FAMILIES_F: Family[] = [
  {
    id: "gobelin",
    label: "Gobelins des Cryptes",
    emoji: "👺",
    gName: "Les Cryptes Pillées",
    dName: "Le Bastion Gobelin",
    pool: [
      { name: "Gobelin Pillard", rank: "F", maxHp: 26, minAtk: 4, maxAtk: 6, xp: 16, img: "d5", desc: "Il vole d'abord, frappe ensuite — et jamais dans cet ordre-là." },
      { name: "Gobelin Éclaireur", rank: "F", maxHp: 24, minAtk: 3, maxAtk: 5, xp: 15, img: "d5", filter: "hue-rotate(45deg) saturate(1.25)", desc: "Ses yeux reflètent la lueur des cryptes avant que vous ne le voyiez." },
      { name: "Gobelin Ravageur", rank: "F", maxHp: 38, minAtk: 4, maxAtk: 7, xp: 29, img: "d5", filter: "contrast(1.2) saturate(1.3)", weight: 0.6, desc: "Alpha. Ceux qui pillent en premier reviennent toujours avec un couteau de plus." },
    ],
    elite: [
      { name: "Hobgobelin", rank: "C", maxHp: 62, minAtk: 5, maxAtk: 8, xp: 56, img: "d5", filter: "hue-rotate(240deg) saturate(1.25)", desc: "Élite. Un gobelin qui a survécu à trop de campagnes pour rester un gobelin." },
      { name: "Gobelin de Guerre", rank: "C", maxHp: 58, minAtk: 4, maxAtk: 7, xp: 52, img: "d5", filter: "hue-rotate(200deg) saturate(1.2) brightness(0.95)", desc: "Élite. Son armure de récupération cliquette comme un avertissement." },
      { name: "Hobgobelin Ravageur", rank: "C", maxHp: 88, minAtk: 6, maxAtk: 9, xp: 98, img: "d5", filter: "hue-rotate(240deg) saturate(1.4) contrast(1.15)", weight: 0.6, desc: "Alpha élite. Le Bastion n'a plus besoin de murs quand il veille." },
    ],
    bossG: { name: "Roi Gobelin des Cryptes", rank: "F", maxHp: 95, minAtk: 5, maxAtk: 8, xp: 130, img: "d5", crown: true, desc: "Le noyau des Cryptes. Sa couronne est un cercle de clous volés." },
    bossD: { name: "Roi Hobgobelin", rank: "C", maxHp: 170, minAtk: 8, maxAtk: 12, xp: 320, img: "d5", filter: "hue-rotate(240deg) saturate(1.35)", crown: true, desc: "Le noyau du Bastion. Chaque crâne de sa court est planté sur une pique." },
  },
  {
    id: "kobold",
    label: "Kobolds de la Mine",
    emoji: "🐺",
    gName: "La Mine Effondrée",
    dName: "Les Puits Sans Fond",
    pool: [
      { name: "Kobold Mineur", rank: "F", maxHp: 30, minAtk: 3, maxAtk: 5, xp: 16, img: "kobold", desc: "Il connaît chaque veine de la mine mieux que ses propres griffes." },
      { name: "Kobold Traqueur", rank: "F", maxHp: 28, minAtk: 4, maxAtk: 6, xp: 18, img: "kobold", filter: "hue-rotate(40deg) saturate(1.2)", desc: "Il suit les échos de vos pas depuis trois galeries." },
      { name: "Kobold Foreur", rank: "F", maxHp: 42, minAtk: 4, maxAtk: 6, xp: 30, img: "kobold", filter: "contrast(1.2) saturate(1.25)", weight: 0.6, desc: "Alpha. Sa pioche traverse la pierre comme si elle était fatiguée." },
    ],
    elite: [
      { name: "Kobold des Profondeurs", rank: "C", maxHp: 60, minAtk: 5, maxAtk: 7, xp: 55, img: "kobold", filter: "hue-rotate(200deg) brightness(0.9) saturate(1.1)", desc: "Élite. Ses yeux ne s'adaptent plus à la lumière depuis des décennies." },
      { name: "Kobold des Galeries", rank: "C", maxHp: 56, minAtk: 4, maxAtk: 6, xp: 50, img: "kobold", filter: "sepia(0.35) saturate(1.3)", desc: "Élite. Il a creusé les effondrements que les autres survivent." },
      { name: "Foreur des Profondeurs", rank: "C", maxHp: 84, minAtk: 6, maxAtk: 9, xp: 96, img: "kobold", filter: "hue-rotate(200deg) contrast(1.15) saturate(1.3)", weight: 0.6, desc: "Alpha élite. Là où il passe, la mine se referme derrière lui." },
    ],
    bossG: { name: "Kobold Ancien", rank: "F", maxHp: 100, minAtk: 4, maxAtk: 7, xp: 125, img: "kobold", crown: true, desc: "Le noyau de la Mine. Il se souvient de l'époque où la roche était jeune." },
    bossD: { name: "Roi-Kobold des Profondeurs", rank: "C", maxHp: 165, minAtk: 7, maxAtk: 11, xp: 310, img: "kobold", filter: "hue-rotate(200deg) saturate(1.35) brightness(0.85)", crown: true, desc: "Le noyau des Puits. Sa couronne est taillée dans une veine d'or pur." },
  },
  {
    id: "crapaud",
    label: "Crapauds des Marais",
    emoji: "🐸",
    gName: "La Mare Bourbeuse",
    dName: "Les Marais Séculaires",
    pool: [
      { name: "Crapaud Bourbeux", rank: "F", maxHp: 36, minAtk: 3, maxAtk: 4, xp: 17, img: "crapaud", desc: "Immobile pendant des heures, mortel pendant des secondes." },
      { name: "Crapaud Cracheur", rank: "F", maxHp: 32, minAtk: 3, maxAtk: 5, xp: 18, img: "crapaud", filter: "hue-rotate(-30deg) saturate(1.3)", desc: "Sa langue part avant sa décision, et elle part vite." },
      { name: "Crapoad Bull", rank: "F", maxHp: 48, minAtk: 3, maxAtk: 5, xp: 31, img: "crapaud", filter: "contrast(1.15) saturate(1.35)", weight: 0.6, desc: "Alpha. Le fond de la mare remonte quand il respire." },
    ],
    elite: [
      { name: "Crapoad Sangsue", rank: "C", maxHp: 70, minAtk: 5, maxAtk: 6, xp: 58, img: "crapaud", filter: "hue-rotate(-40deg) brightness(0.85) saturate(1.3)", desc: "Élite. Il ne vous mange pas : il vous boit." },
      { name: "Crapaud Vitriole", rank: "C", maxHp: 66, minAtk: 4, maxAtk: 7, xp: 54, img: "crapaud", filter: "sepia(0.4) saturate(1.5)", desc: "Élite. Sa bave troue le cuir des bottes en un murmure." },
      { name: "Crapoad Séculaire", rank: "C", maxHp: 96, minAtk: 6, maxAtk: 8, xp: 100, img: "crapaud", filter: "hue-rotate(-40deg) contrast(1.2) saturate(1.4)", weight: 0.6, desc: "Alpha élite. Les anciens l'appelaient déjà « l'ancêtre »." },
    ],
    bossG: { name: "Crapoad Ancestral", rank: "F", maxHp: 110, minAtk: 4, maxAtk: 6, xp: 130, img: "crapaud", crown: true, desc: "Le noyau de la Mare. Son chant fait vibrer la vase des trois salles voisines." },
    bossD: { name: "Roi des Marais Séculaires", rank: "C", maxHp: 180, minAtk: 7, maxAtk: 10, xp: 330, img: "crapaud", filter: "hue-rotate(-40deg) saturate(1.4) brightness(0.85)", crown: true, desc: "Le noyau des Marais. Sa peau a bu les siècles comme de la pluie." },
  },
  {
    id: "guepe",
    label: "Guêpes de la Ruche",
    emoji: "🐝",
    gName: "Le Rayon Bourdonnant",
    dName: "La Ruche Interdite",
    pool: [
      { name: "Guêpe Ouvrière", rank: "F", maxHp: 22, minAtk: 5, maxAtk: 7, xp: 17, img: "guepe", desc: "Petite, nerveuse, et jamais la première à renoncer." },
      { name: "Guêpe Soldate", rank: "F", maxHp: 26, minAtk: 5, maxAtk: 8, xp: 19, img: "guepe", filter: "hue-rotate(60deg) saturate(1.25)", desc: "Son dard vise toujours l'interstice entre deux plaques." },
      { name: "Guêpe-Frelon", rank: "F", maxHp: 34, minAtk: 6, maxAtk: 9, xp: 32, img: "guepe", filter: "brightness(1.1) contrast(1.15) saturate(1.3)", weight: 0.6, desc: "Alpha. Le bourdonnement change de ton quand il quitte le rayon." },
    ],
    elite: [
      { name: "Frelon Noir", rank: "C", maxHp: 54, minAtk: 6, maxAtk: 9, xp: 58, img: "guepe", filter: "hue-rotate(180deg) saturate(1.4)", desc: "Élite. Une teinte qui ne devrait pas exister dans une ruche." },
      { name: "Guêpe de Nectar Noir", rank: "C", maxHp: 50, minAtk: 5, maxAtk: 8, xp: 55, img: "guepe", filter: "sepia(0.4) saturate(1.6)", desc: "Élite. Son miel amer ralentit les Veilleurs trop curieux." },
      { name: "Frelon Impérial", rank: "C", maxHp: 76, minAtk: 7, maxAtk: 11, xp: 102, img: "guepe", filter: "hue-rotate(180deg) saturate(1.5) contrast(1.15)", weight: 0.6, desc: "Alpha élite. La Ruche retient son vol quand il chasse." },
    ],
    bossG: { name: "Reine du Rayon", rank: "F", maxHp: 90, minAtk: 6, maxAtk: 9, xp: 135, img: "guepe", crown: true, desc: "Le noyau du Rayon. Chaque guêpe morte vous est personnellement facturée." },
    bossD: { name: "Reine des Frelons", rank: "C", maxHp: 155, minAtk: 9, maxAtk: 13, xp: 325, img: "guepe", filter: "hue-rotate(180deg) saturate(1.45)", crown: true, desc: "Le noyau de la Ruche. Son dard a fermé plus de Portes qu'une armée." },
  },
  {
    id: "scorpion",
    label: "Scorpions des Dunes",
    emoji: "🦂",
    gName: "Les Sables Chitineux",
    dName: "Les Dunes Vitrioles",
    pool: [
      { name: "Scorpion des Dunes", rank: "F", maxHp: 30, minAtk: 4, maxAtk: 6, xp: 17, img: "scorpion", desc: "Il ne court pas ; il coule sous le sable et remonte sous vous." },
      { name: "Scorpion Fouisseur", rank: "F", maxHp: 27, minAtk: 3, maxAtk: 5, xp: 16, img: "scorpion", filter: "sepia(0.4) saturate(1.6)", desc: "Le sable bouge une seconde avant que ses pinces ne paraissent." },
      { name: "Scorpion à Double Queue", rank: "F", maxHp: 42, minAtk: 4, maxAtk: 7, xp: 30, img: "scorpion", filter: "contrast(1.2) saturate(1.35)", weight: 0.6, desc: "Alpha. Deux queues, deux fois moins de chances." },
    ],
    elite: [
      { name: "Scorpion de Vitriole", rank: "C", maxHp: 62, minAtk: 5, maxAtk: 8, xp: 57, img: "scorpion", filter: "hue-rotate(280deg) saturate(1.35)", desc: "Élite. Son venin n'attaque pas la chair : il attaque l'armure." },
      { name: "Scorpion des Ruines", rank: "C", maxHp: 58, minAtk: 5, maxAtk: 7, xp: 52, img: "scorpion", filter: "sepia(0.45) saturate(1.3)", desc: "Élite. Il garde les ruines que le sable n'a pas encore fini d'avaler." },
      { name: "Émir des Dunes", rank: "C", maxHp: 86, minAtk: 6, maxAtk: 10, xp: 99, img: "scorpion", filter: "hue-rotate(280deg) saturate(1.45) contrast(1.15)", weight: 0.6, desc: "Alpha élite. Les dunes se déplacent pour rester à son ombre." },
    ],
    bossG: { name: "Empereur des Sables", rank: "F", maxHp: 105, minAtk: 5, maxAtk: 8, xp: 130, img: "scorpion", crown: true, desc: "Le noyau des Sables. Sa carapace chante sous les rafales." },
    bossD: { name: "Sultan des Dunes Vitrioles", rank: "C", maxHp: 170, minAtk: 8, maxAtk: 12, xp: 320, img: "scorpion", filter: "hue-rotate(280deg) saturate(1.4)", crown: true, desc: "Le noyau des Dunes. Les caravanes fuient son ombre avant même de voir son venin." },
  },
  {
    id: "corbeau",
    label: "Corbeaux du Charnier",
    emoji: "🐦‍⬛",
    gName: "Le Perchoir Noir",
    dName: "Le Charnier Hurlant",
    pool: [
      { name: "Corbeau Charognard", rank: "F", maxHp: 24, minAtk: 5, maxAtk: 7, xp: 17, img: "corbeau", desc: "Il n'attaque pas par faim, mais par principe." },
      { name: "Corbeau Glapisseur", rank: "F", maxHp: 27, minAtk: 4, maxAtk: 6, xp: 18, img: "corbeau", filter: "sepia(0.5) saturate(1.8)", desc: "Son cri s'entend à trois salles — et il est toujours en avance sur lui." },
      { name: "Grand Corbeau", rank: "F", maxHp: 36, minAtk: 5, maxAtk: 8, xp: 31, img: "corbeau", filter: "brightness(1.15) contrast(1.2)", weight: 0.6, desc: "Alpha. Son envergure couvre la lumière de toute une salle." },
    ],
    elite: [
      { name: "Corbeau Spectral", rank: "C", maxHp: 52, minAtk: 6, maxAtk: 9, xp: 57, img: "corbeau", filter: "hue-rotate(180deg) saturate(1.4) brightness(0.95)", desc: "Élite. Ses plumes laissent passer le mauvais œil." },
      { name: "Corbeau de Malheur", rank: "C", maxHp: 55, minAtk: 5, maxAtk: 8, xp: 55, img: "corbeau", filter: "grayscale(0.4) brightness(1.1) contrast(1.15)", desc: "Élite. On ne le voit qu'après la première mort de la journée." },
      { name: "Corbeau-Roi Sépulcral", rank: "C", maxHp: 78, minAtk: 7, maxAtk: 11, xp: 101, img: "corbeau", filter: "hue-rotate(180deg) saturate(1.5) contrast(1.2)", weight: 0.6, desc: "Alpha élite. Le Charnier se tait quand il atterrit." },
    ],
    bossG: { name: "Matriarche du Perchoir", rank: "F", maxHp: 95, minAtk: 6, maxAtk: 9, xp: 135, img: "corbeau", crown: true, desc: "Le noyau du Perchoir. Son nid est fait des identités de ceux qui sont passés." },
    bossD: { name: "Corbeau-Roi des Tempêtes", rank: "C", maxHp: 160, minAtk: 9, maxAtk: 13, xp: 325, img: "corbeau", filter: "hue-rotate(180deg) saturate(1.45)", crown: true, desc: "Le noyau du Charnier. Chaque battement d'ailes appelle un orage." },
  },
  {
    id: "gargouille",
    label: "Gargouilles du Parvis",
    emoji: "🗿",
    gName: "Le Parvis Grisé",
    dName: "La Cathédrale Interdite",
    pool: [
      { name: "Gargouille Assoupie", rank: "F", maxHp: 38, minAtk: 3, maxAtk: 5, xp: 18, img: "gargouille", desc: "Elle dort pendant des décennies — vos pas l'ont réveillée en travers." },
      { name: "Gargouille de Pierre Tendre", rank: "F", maxHp: 34, minAtk: 3, maxAtk: 4, xp: 17, img: "gargouille", filter: "sepia(0.5) saturate(1.2) brightness(1.05)", desc: "Sa pierre se rapproche quand vous fermez les yeux." },
      { name: "Gargouille Veilleuse", rank: "F", maxHp: 50, minAtk: 4, maxAtk: 6, xp: 32, img: "gargouille", filter: "contrast(1.25) brightness(0.95)", weight: 0.6, desc: "Alpha. Elle n'a jamais quitté son socle — le socle a suivi." },
    ],
    elite: [
      { name: "Gargouille de Granite", rank: "C", maxHp: 74, minAtk: 5, maxAtk: 7, xp: 60, img: "gargouille", filter: "hue-rotate(180deg) saturate(0.9) brightness(0.9)", desc: "Élite. Trois fois plus dure, et aucunement pressée." },
      { name: "Gargouille Balafrée", rank: "C", maxHp: 68, minAtk: 5, maxAtk: 8, xp: 56, img: "gargouille", filter: "sepia(0.4) saturate(1.4) contrast(1.15)", desc: "Élite. Ses fissures racontent chaque duel qu'elle a gagné." },
      { name: "Gardienne du Parvis", rank: "C", maxHp: 100, minAtk: 6, maxAtk: 9, xp: 104, img: "gargouille", filter: "hue-rotate(180deg) saturate(1.1) contrast(1.25)", weight: 0.6, desc: "Alpha élite. Elle garde une porte que personne n'a jamais ouverte." },
    ],
    bossG: { name: "Gargouille Patriarche", rank: "F", maxHp: 115, minAtk: 5, maxAtk: 7, xp: 135, img: "gargouille", crown: true, desc: "Le noyau du Parvis. Sa mousse a des siècles, sa patience aussi." },
    bossD: { name: "Gardien de la Cathédrale Interdite", rank: "C", maxHp: 185, minAtk: 8, maxAtk: 11, xp: 335, img: "gargouille", filter: "hue-rotate(180deg) saturate(1.15) brightness(0.85)", crown: true, desc: "Le noyau de la Cathédrale. Il ne prie pas : il attend." },
  },
  {
    id: "sanglier",
    label: "Sangliers du Hallier",
    emoji: "🐗",
    gName: "Le Hallier Épineux",
    dName: "La Basse-Cour Sauvage",
    pool: [
      { name: "Sanglier du Hallier", rank: "F", maxHp: 34, minAtk: 4, maxAtk: 6, xp: 18, img: "sanglier", desc: "Il ne tourne jamais. Il fonce, et le hallier fonce avec lui." },
      { name: "Sanglier Solitaire", rank: "F", maxHp: 30, minAtk: 5, maxAtk: 7, xp: 19, img: "sanglier", filter: "hue-rotate(-25deg) saturate(1.3)", desc: "Les autres l'évitent. Vous ne pouvez pas." },
      { name: "Sanglier Ravageur", rank: "F", maxHp: 46, minAtk: 5, maxAtk: 8, xp: 32, img: "sanglier", filter: "contrast(1.2) saturate(1.25)", weight: 0.6, desc: "Alpha. Les épineux de la clairière poussent de travers depuis son passage." },
    ],
    elite: [
      { name: "Sanglier d'Ortie", rank: "C", maxHp: 64, minAtk: 6, maxAtk: 9, xp: 59, img: "sanglier", filter: "sepia(0.4) saturate(1.5)", desc: "Élite. Sa rage ne se calme pas — elle se transmet." },
      { name: "Sanglier Séculaire", rank: "C", maxHp: 70, minAtk: 5, maxAtk: 8, xp: 57, img: "sanglier", filter: "sepia(0.45) saturate(1.6) contrast(1.1)", desc: "Élite. Les vieux chasseurs n'en parlent qu'au conditionnel." },
      { name: "Ravageur Séculaire", rank: "C", maxHp: 92, minAtk: 7, maxAtk: 10, xp: 103, img: "sanglier", filter: "sepia(0.45) saturate(1.6) contrast(1.2)", weight: 0.6, desc: "Alpha élite. La Basse-Cour a été tracée par ses passages répétés." },
    ],
    bossG: { name: "Grand Sanglier du Hallier", rank: "F", maxHp: 105, minAtk: 5, maxAtk: 8, xp: 135, img: "sanglier", crown: true, desc: "Le noyau du Hallier. Ses défenses portent des encoches comptables." },
    bossD: { name: "Sanglier-Roi du Hallier", rank: "C", maxHp: 175, minAtk: 8, maxAtk: 12, xp: 330, img: "sanglier", filter: "sepia(0.4) saturate(1.6) contrast(1.15)", crown: true, desc: "Le noyau de la Basse-Cour. Le trône, c'est la clairière qu'il a labourée." },
  },
  {
    id: "spectre",
    label: "Spectres des Hantises",
    emoji: "👻",
    gName: "Le Couloir des Murmures",
    dName: "Le Sanctuaire des Hantises",
    pool: [
      { name: "Spectre Murmure", rank: "F", maxHp: 20, minAtk: 6, maxAtk: 8, xp: 19, img: "spectre", desc: "Il ne frappe pas fort. Il frappe là où vous pensiez être en sécurité." },
      { name: "Ombre Frémissante", rank: "F", maxHp: 23, minAtk: 5, maxAtk: 8, xp: 20, img: "spectre", filter: "hue-rotate(60deg) saturate(1.2)", desc: "Un morceau d'obscurité qui a appris à vouloir." },
      { name: "Spectre Sanglotant", rank: "F", maxHp: 30, minAtk: 6, maxAtk: 10, xp: 34, img: "spectre", filter: "brightness(1.1) saturate(1.3) contrast(1.15)", weight: 0.6, desc: "Alpha. Ses larmes traversent la lame et restent." },
    ],
    elite: [
      { name: "Spectre Hurleur", rank: "C", maxHp: 48, minAtk: 7, maxAtk: 10, xp: 60, img: "spectre", filter: "hue-rotate(-40deg) saturate(1.4) brightness(1.05)", desc: "Élite. Son hurlement reste dans la pierre après sa mort." },
      { name: "Ombre des Regrets", rank: "C", maxHp: 52, minAtk: 6, maxAtk: 9, xp: 58, img: "spectre", filter: "grayscale(0.5) brightness(1.1)", desc: "Élite. Il a votre voix. C'est le plus troublant." },
      { name: "Spectre des Regrets", rank: "C", maxHp: 72, minAtk: 8, maxAtk: 12, xp: 106, img: "spectre", filter: "hue-rotate(-45deg) saturate(1.5) contrast(1.2)", weight: 0.6, desc: "Alpha élite. Le Sanctuaire ne l'a jamais contenu — il l'a seulement hébergé." },
    ],
    bossG: { name: "Murmure Ancien", rank: "F", maxHp: 85, minAtk: 7, maxAtk: 10, xp: 140, img: "spectre", crown: true, desc: "Le noyau du Couloir. Il connaissait le prénom de tous les perdus." },
    bossD: { name: "Seigneur des Hantises", rank: "C", maxHp: 150, minAtk: 10, maxAtk: 14, xp: 335, img: "spectre", filter: "hue-rotate(-45deg) saturate(1.45) brightness(1.05)", crown: true, desc: "Le noyau du Sanctuaire. Il ne tue pas : il garde." },
  },
  {
    id: "mimique",
    label: "Mimiques Voraces",
    emoji: "📦",
    gName: "La Réserve Pillée",
    dName: "La Salle au Trésor Maudit",
    pool: [
      { name: "Coffre-Mimique", rank: "F", maxHp: 32, minAtk: 4, maxAtk: 6, xp: 20, img: "mimique", desc: "Le butin le plus honnête du donjon : il vous avoue tout de suite." },
      { name: "Urne-Mimique", rank: "F", maxHp: 28, minAtk: 4, maxAtk: 5, xp: 18, img: "mimique", filter: "sepia(0.3) saturate(1.3)", desc: "Trop petite pour un trésor, parfaite pour des dents." },
      { name: "Mimique Vorace", rank: "F", maxHp: 44, minAtk: 5, maxAtk: 8, xp: 34, img: "mimique", filter: "contrast(1.25) saturate(1.2)", weight: 0.6, desc: "Alpha. Il a déjà avalé une clef — la vôtre est à l'intérieur." },
    ],
    elite: [
      { name: "Mimique Runique", rank: "C", maxHp: 66, minAtk: 6, maxAtk: 9, xp: 63, img: "mimique", filter: "hue-rotate(230deg) saturate(1.3) brightness(0.9)", desc: "Élite. Ses serrures bougent toutes seules quand on les regarde." },
      { name: "Armoire Carnivore", rank: "C", maxHp: 72, minAtk: 5, maxAtk: 7, xp: 60, img: "mimique", filter: "sepia(0.35) saturate(1.5)", desc: "Élite. On y range ce qu'on ne veut plus revoir. Parfois, ça marche." },
      { name: "Mimique Impériale", rank: "C", maxHp: 94, minAtk: 7, maxAtk: 10, xp: 108, img: "mimique", filter: "hue-rotate(230deg) saturate(1.45) contrast(1.2)", weight: 0.6, desc: "Alpha élite. Son fond est plus profond que la Salle ne le permet." },
    ],
    bossG: { name: "Le Coffre du Roi", rank: "F", maxHp: 110, minAtk: 5, maxAtk: 8, xp: 145, img: "mimique", crown: true, desc: "Le noyau de la Réserve. Sa serrure est une bouche qui refuse de négocier." },
    bossD: { name: "Le Trésor Maudit", rank: "C", maxHp: 175, minAtk: 8, maxAtk: 12, xp: 350, img: "mimique", filter: "hue-rotate(230deg) saturate(1.4) brightness(0.9)", crown: true, desc: "Le noyau de la Salle. L'or n'a jamais été le prix — c'était l'appât." },
  },
];

/* ===== NOUVELLES FAMILLES rang E/B (choix de Maximilien, 13/11/2026) : réservées aux
   donjons de rangs E et B. Rang E = pool (bases + alpha), gName, bossG ; rang B = les
   MÊMES familles en version élite : elite, dName, bossD. Les autres rangs tirent
   dans FAMILIES (G/D/C) et FAMILIES_F (F/C). ===== */
const FAMILIES_E: Family[] = [
  {
    id: "serpent",
    label: "Serpents du Serpentarium",
    emoji: "🐍",
    gName: "Le Serpentarium",
    dName: "Le Jardin des Vipères",
    pool: [
      { name: "Serpent Émeraude", rank: "E", maxHp: 28, minAtk: 4, maxAtk: 6, xp: 17, img: "serpent", desc: "Elle vous mesure depuis le plafond avant même que vous n'entriez." },
      { name: "Serpent Cracheur", rank: "E", maxHp: 26, minAtk: 5, maxAtk: 7, xp: 18, img: "serpent", filter: "hue-rotate(-40deg) saturate(1.3)", desc: "Son venin ne tue pas : il décide seulement à quelle vitesse." },
      { name: "Vipère Alpha Venimeux", rank: "E", maxHp: 38, minAtk: 5, maxAtk: 8, xp: 30, img: "serpent", filter: "contrast(1.2) saturate(1.35)", weight: 0.6, desc: "Alpha. Les autres serpents s'alignent derrière lui Les autres serpents s'alignent derrière lui avant même qu'il ne siffle." },
    ],
    elite: [
      { name: "Serpent de Malachite", rank: "B", maxHp: 56, minAtk: 6, maxAtk: 9, xp: 52, img: "serpent", filter: "hue-rotate(60deg) saturate(1.3)", desc: "Élite. Une teinte qui ne devrait pas exister dans la nature." },
      { name: "Serpent Basilic", rank: "B", maxHp: 60, minAtk: 5, maxAtk: 8, xp: 50, img: "serpent", filter: "sepia(0.4) saturate(1.5)", desc: "Élite. Son regard vous oblige à compter vos erreurs." },
      { name: "Basilic de Malachite", rank: "B", maxHp: 82, minAtk: 7, maxAtk: 11, xp: 95, img: "serpent", filter: "hue-rotate(60deg) saturate(1.45) contrast(1.15)", weight: 0.6, desc: "Alpha élite. Le Jardin pousse moins vite qu'il ne dévore." },
    ],
    bossG: { name: "Reine des Vipères", rank: "E", maxHp: 100, minAtk: 5, maxAtk: 8, xp: 135, img: "serpent", crown: true, desc: "Le noyau du Serpentarium. Sa cour s'étend sur trois salles de dépouilles." },
    bossD: { name: "Basilic Écarlate", rank: "B", maxHp: 168, minAtk: 9, maxAtk: 13, xp: 330, img: "serpent", filter: "hue-rotate(-60deg) saturate(1.4)", crown: true, desc: "Le noyau du Jardin. Pétrifié ou dévoré : lui laisse le choix de l'ordre." },
  },
  {
    id: "momie",
    label: "Momies de la Crypte",
    emoji: "🧟",
    gName: "La Crypte Emmaillotée",
    dName: "Le Défilé des Bandages",
    pool: [
      { name: "Momie Ambulante", rank: "E", maxHp: 36, minAtk: 3, maxAtk: 5, xp: 18, img: "momie", desc: "Elle marche lentement. Vous aussi, maintenant, à force de la regarder." },
      { name: "Momie Royale", rank: "E", maxHp: 32, minAtk: 4, maxAtk: 6, xp: 19, img: "momie", filter: "sepia(0.5) saturate(1.4)", desc: "Ses bijoux valent plus que votre contrat. Elle compte les deux." },
      { name: "Pharaon Momifié", rank: "E", maxHp: 46, minAtk: 4, maxAtk: 6, xp: 32, img: "momie", filter: "contrast(1.25) brightness(1.05)", weight: 0.6, desc: "Alpha. Il régnait déjà ici quand la Crypte était encore un nom." },
    ],
    elite: [
      { name: "Momie Séculaire", rank: "B", maxHp: 70, minAtk: 5, maxAtk: 7, xp: 55, img: "momie", filter: "hue-rotate(200deg) saturate(0.9) brightness(0.9)", desc: "Élite. Ses bandages ont survécu à trois archéologues et à leurs excuses." },
      { name: "Momie Embalmée", rank: "B", maxHp: 64, minAtk: 5, maxAtk: 8, xp: 52, img: "momie", filter: "sepia(0.45) saturate(1.6)", desc: "Élite. On l'a préparée pour l'éternité. Elle a pris ça au pied de la lettre." },
      { name: "Grand Prêtre Momifié", rank: "B", maxHp: 96, minAtk: 6, maxAtk: 9, xp: 98, img: "momie", filter: "hue-rotate(200deg) saturate(1.1) contrast(1.2)", weight: 0.6, desc: "Alpha élite. Le Défilé avance à son rythme — le votre n'existe pas." },
    ],
    bossG: { name: "Gardien Emmailloté", rank: "E", maxHp: 112, minAtk: 4, maxAtk: 6, xp: 130, img: "momie", crown: true, desc: "Le noyau de la Crypte. Il garde des trésors depuis si loin qu'il a oublié pour qui." },
    bossD: { name: "Pharaon des Bandages", rank: "B", maxHp: 178, minAtk: 8, maxAtk: 11, xp: 330, img: "momie", filter: "sepia(0.5) saturate(1.5) contrast(1.15)", crown: true, desc: "Le noyau du Défilé. Son règne n'a jamais pris fin — juste de l'élan." },
  },
  {
    id: "loup",
    label: "Loups-Garous",
    emoji: "🐺",
    gName: "La Meute Hurlante",
    dName: "La Meute Écarlate",
    pool: [
      { name: "Loup-Garou Affamé", rank: "E", maxHp: 30, minAtk: 5, maxAtk: 7, xp: 18, img: "loup", desc: "Il ne chasse pas par nécessité. La lune lui donne un appétit de service." },
      { name: "Loup-Garou Gris", rank: "E", maxHp: 33, minAtk: 4, maxAtk: 6, xp: 19, img: "loup", filter: "grayscale(0.4) contrast(1.2)", desc: "Le gris de sa fourrure est le dernier truc que bien des Veilleurs ont vu." },
      { name: "Loup-Garou Alpha", rank: "E", maxHp: 44, minAtk: 5, maxAtk: 8, xp: 31, img: "loup", filter: "contrast(1.2) saturate(1.3)", weight: 0.6, desc: "Alpha. La meute s'arrête quand il relève la tête. Vous aussi." },
    ],
    elite: [
      { name: "Loup-Garou de Guerre", rank: "B", maxHp: 62, minAtk: 6, maxAtk: 9, xp: 56, img: "loup", filter: "hue-rotate(180deg) saturate(1.1)", desc: "Élite. Ses cicatrices se comptent en siècles, ses dents en Veilleurs." },
      { name: "Loup-Garou Écarlate", rank: "B", maxHp: 58, minAtk: 5, maxAtk: 8, xp: 53, img: "loup", filter: "hue-rotate(-60deg) saturate(1.5)", desc: "Élite. Rouge de naissance — ou pour d'autres raisons, personne n'a vérifié." },
      { name: "Chef de Meute Écarlate", rank: "B", maxHp: 88, minAtk: 7, maxAtk: 10, xp: 100, img: "loup", filter: "hue-rotate(-60deg) saturate(1.6) contrast(1.15)", weight: 0.6, desc: "Alpha élite. Sa Meute ne hurle plus : elle applaudit." },
    ],
    bossG: { name: "Père de la Meute", rank: "E", maxHp: 105, minAtk: 5, maxAtk: 8, xp: 135, img: "loup", crown: true, desc: "Le noyau de la Meute. Le premier des hurlements porte encore sa voix." },
    bossD: { name: "Seigneur-Loup Écarlate", rank: "B", maxHp: 172, minAtk: 8, maxAtk: 12, xp: 325, img: "loup", filter: "hue-rotate(-60deg) saturate(1.55)", crown: true, desc: "Le noyau de la Meute Écarlate. La lune elle-même baisse les yeux quand il passe." },
  },
  {
    id: "harpie",
    label: "Harpies du Roc",
    emoji: "🦅",
    gName: "Le Roc Hurleur",
    dName: "Le Nid des Tempêtes",
    pool: [
      { name: "Harpie Hurleuse", rank: "E", maxHp: 26, minAtk: 5, maxAtk: 7, xp: 18, img: "harpie", desc: "Son cri vous met à terre une seconde avant ses serres." },
      { name: "Harpie Serre-Noire", rank: "E", maxHp: 29, minAtk: 4, maxAtk: 6, xp: 19, img: "harpie", filter: "brightness(0.85) contrast(1.2)", desc: "Elle n'attaque que ce qui porte une lanterne. La lumière vous désigne." },
      { name: "Grande Harpie", rank: "E", maxHp: 38, minAtk: 5, maxAtk: 8, xp: 31, img: "harpie", filter: "contrast(1.25) saturate(1.25)", weight: 0.6, desc: "Alpha. Son envergure jette une ombre que le vent respecte." },
    ],
    elite: [
      { name: "Harpie des Tempêtes", rank: "B", maxHp: 56, minAtk: 6, maxAtk: 9, xp: 55, img: "harpie", filter: "hue-rotate(180deg) saturate(1.35)", desc: "Élite. Elle ne vole pas dans la tempête : elle la tracte." },
      { name: "Harpie Charognarde", rank: "B", maxHp: 60, minAtk: 5, maxAtk: 8, xp: 58, img: "harpie", filter: "sepia(0.4) saturate(1.5)", desc: "Élite. Elle garde le Roc comme un garde-manger, pas comme un trône." },
      { name: "Matriarche des Tempêtes", rank: "B", maxHp: 84, minAtk: 7, maxAtk: 11, xp: 98, img: "harpie", filter: "hue-rotate(180deg) saturate(1.45) contrast(1.15)", weight: 0.6, desc: "Alpha élite. Le Nid compte ses occupants par orphelins." },
    ],
    bossG: { name: "Reine du Roc", rank: "E", maxHp: 98, minAtk: 6, maxAtk: 9, xp: 138, img: "harpie", crown: true, desc: "Le noyau du Roc. Elle ne quitte son perchoir que pour ce qui mérite le déplacement." },
    bossD: { name: "Prophétesse des Tempêtes", rank: "B", maxHp: 162, minAtk: 9, maxAtk: 13, xp: 328, img: "harpie", filter: "hue-rotate(180deg) saturate(1.45)", crown: true, desc: "Le noyau du Nid. Elle annonce la mort des Veilleurs — avec une précision irritante." },
  },
  {
    id: "plante",
    label: "Plantes Carnivores",
    emoji: "🌱",
    gName: "La Serre Vorace",
    dName: "Le Jardin Suspendu Maudit",
    pool: [
      { name: "Crochet-Vigne", rank: "E", maxHp: 34, minAtk: 3, maxAtk: 5, xp: 18, img: "plante", desc: "Elle ne vous veut pas de mal. Elle vous veut, c'est tout." },
      { name: "Mâchoire Fleurie", rank: "E", maxHp: 38, minAtk: 3, maxAtk: 4, xp: 17, img: "plante", filter: "hue-rotate(-40deg) saturate(1.4)", desc: "Son parfum vous invite à rester. Sa digestion aussi." },
      { name: "Dévoreuse Rampante", rank: "E", maxHp: 48, minAtk: 4, maxAtk: 6, xp: 32, img: "plante", filter: "contrast(1.2) saturate(1.3)", weight: 0.6, desc: "Alpha. La Serre a été taillée pour sa convenance." },
    ],
    elite: [
      { name: "Dévoreuse Suspendue", rank: "B", maxHp: 72, minAtk: 5, maxAtk: 7, xp: 56, img: "plante", filter: "hue-rotate(90deg) saturate(1.2)", desc: "Élite. Le Jardin l'a plantée lui-même. C'est dire l'intention." },
      { name: "Sarcophage Floral", rank: "B", maxHp: 68, minAtk: 5, maxAtk: 8, xp: 60, img: "plante", filter: "sepia(0.35) saturate(1.6)", desc: "Élite. Un bouton fermé sur quelqu'un qui ne s'est pas présenté." },
      { name: "Reine des Racines", rank: "B", maxHp: 98, minAtk: 6, maxAtk: 9, xp: 102, img: "plante", filter: "hue-rotate(90deg) saturate(1.35) contrast(1.15)", weight: 0.6, desc: "Alpha élite. Ses racines traversent le plafond de la salle d'à côté." },
    ],
    bossG: { name: "Cœur de la Serre", rank: "E", maxHp: 115, minAtk: 5, maxAtk: 7, xp: 135, img: "plante", crown: true, desc: "Le noyau de la Serre. Ce n'est pas une plante dans un donjon : c'est l'inverse." },
    bossD: { name: "Souverain du Jardin Maudit", rank: "B", maxHp: 182, minAtk: 8, maxAtk: 11, xp: 332, img: "plante", filter: "hue-rotate(90deg) saturate(1.4)", crown: true, desc: "Le noyau du Jardin. Il a enterré des héros pour se reposer à l'ombre." },
  },
  {
    id: "sangsue",
    label: "Sangsues des Drains",
    emoji: "🩸",
    gName: "Les Drains Sanglants",
    dName: "La Citerne Carnière",
    pool: [
      { name: "Sangsue des Drains", rank: "E", maxHp: 34, minAtk: 4, maxAtk: 5, xp: 18, img: "sangsue", desc: "Elle vous laisse partir. Elle sait où reviennent les échos." },
      { name: "Sangsue Écarlate", rank: "E", maxHp: 30, minAtk: 4, maxAtk: 6, xp: 19, img: "sangsue", filter: "hue-rotate(-60deg) saturate(1.5)", desc: "Sa couleur raconte l'histoire de ses derniers invités." },
      { name: "Sangsue Gorgée", rank: "E", maxHp: 46, minAtk: 4, maxAtk: 6, xp: 32, img: "sangsue", filter: "contrast(1.2) saturate(1.3)", weight: 0.6, desc: "Alpha. Elle n'a plus faim — elle gère ses réserves, et vous en faites partie." },
    ],
    elite: [
      { name: "Sangsue de la Citerne", rank: "B", maxHp: 74, minAtk: 5, maxAtk: 7, xp: 58, img: "sangsue", filter: "hue-rotate(180deg) saturate(1.1)", desc: "Élite. La Citerne se vide moins vite qu'elle ne se remplit." },
      { name: "Sangsue Noire", rank: "B", maxHp: 68, minAtk: 5, maxAtk: 8, xp: 55, img: "sangsue", filter: "brightness(0.7) contrast(1.25)", desc: "Élite. Noire d'avoir bu des choses dont même le donjon ne parle pas." },
      { name: "Sangsue Carnière", rank: "B", maxHp: 102, minAtk: 6, maxAtk: 9, xp: 104, img: "sangsue", filter: "hue-rotate(180deg) saturate(1.25) contrast(1.2)", weight: 0.6, desc: "Alpha élite. Les parois de sa salle sont lisses — rien pour s'y accrocher." },
    ],
    bossG: { name: "La Mère des Drains", rank: "E", maxHp: 118, minAtk: 5, maxAtk: 7, xp: 135, img: "sangsue", crown: true, desc: "Le noyau des Drains. Les veines du donjon convergent toutes vers elle." },
    bossD: { name: "Matriarche Carnière", rank: "B", maxHp: 185, minAtk: 7, maxAtk: 11, xp: 335, img: "sangsue", filter: "hue-rotate(180deg) saturate(1.3) brightness(0.85)", crown: true, desc: "Le noyau de la Citerne. Elle n'a jamais fini un repas — ni commencé, techniquement." },
  },
  {
    id: "ver",
    label: "Vers d'Ossuaire",
    emoji: "🪱",
    gName: "Les Tunnels Sinueux",
    dName: "L'Œsophage du Ver",
    pool: [
      { name: "Ver d'Ossuaire", rank: "E", maxHp: 36, minAtk: 4, maxAtk: 6, xp: 19, img: "ver", desc: "Il tisse les tunnels en les mangeant. Ses déplacements sont la carte." },
      { name: "Ver Fouisseur", rank: "E", maxHp: 32, minAtk: 4, maxAtk: 5, xp: 18, img: "ver", filter: "hue-rotate(45deg) saturate(1.2)", desc: "Le sol a ce frisson d'une seconde — c'est lui qui vient de passer." },
      { name: "Ver Ossuaire Géant", rank: "E", maxHp: 48, minAtk: 5, maxAtk: 7, xp: 32, img: "ver", filter: "contrast(1.25) saturate(1.2)", weight: 0.6, desc: "Alpha. Les crânes des murs de sa salle portent ses stries de passage." },
    ],
    elite: [
      { name: "Ver des Tréfonds", rank: "B", maxHp: 66, minAtk: 6, maxAtk: 8, xp: 54, img: "ver", filter: "hue-rotate(200deg) saturate(1.1)", desc: "Élite. Il remonte de plus bas que le fond du donjon." },
      { name: "Ver d'Ivoire", rank: "B", maxHp: 72, minAtk: 5, maxAtk: 8, xp: 57, img: "ver", filter: "brightness(1.15) saturate(0.9)", desc: "Élite. Blanc comme un suaire, poli comme des siècles de travail." },
      { name: "Ver des Tréfonds Majeur", rank: "B", maxHp: 94, minAtk: 7, maxAtk: 10, xp: 100, img: "ver", filter: "hue-rotate(200deg) saturate(1.25) contrast(1.15)", weight: 0.6, desc: "Alpha élite. L'Œsophage n'est pas une salle : c'est son couloir de service." },
    ],
    bossG: { name: "Ver Ancestral", rank: "E", maxHp: 112, minAtk: 5, maxAtk: 8, xp: 132, img: "ver", crown: true, desc: "Le noyau des Tunnels. Les cartes du donjon se redessinent à son réveil." },
    bossD: { name: "Grand Ver de l'Œsophage", rank: "B", maxHp: 176, minAtk: 8, maxAtk: 12, xp: 330, img: "ver", filter: "hue-rotate(200deg) saturate(1.3)", crown: true, desc: "Le noyau de l'Œsophage. Vous êtes déjà à l'intérieur, techniquement." },
  },
  {
    id: "fourmi",
    label: "Fourmis Soldates",
    emoji: "🐜",
    gName: "La Fourmilière Profonde",
    dName: "Le Grand Tertre",
    pool: [
      { name: "Fourmi Éclaireuse", rank: "E", maxHp: 28, minAtk: 4, maxAtk: 6, xp: 17, img: "fourmi", desc: "Elle ne vous attaque pas. Elle vous localise — c'est pire." },
      { name: "Fourmi Soldate", rank: "E", maxHp: 31, minAtk: 4, maxAtk: 5, xp: 18, img: "fourmi", filter: "sepia(0.4) saturate(1.5)", desc: "Elle en tue une par seconde en moyenne, sans y penser." },
      { name: "Fourmi Majeure", rank: "E", maxHp: 42, minAtk: 5, maxAtk: 7, xp: 30, img: "fourmi", filter: "contrast(1.2) saturate(1.3)", weight: 0.6, desc: "Alpha. Sa tête sert de bélier aux autres pour ouvrir les portes." },
    ],
    elite: [
      { name: "Fourmi de Guerre", rank: "B", maxHp: 60, minAtk: 5, maxAtk: 8, xp: 53, img: "fourmi", filter: "hue-rotate(180deg) saturate(1.3)", desc: "Élite. Elle connaît les formations de combat. Vous, non." },
      { name: "Fourmi des Galeries", rank: "B", maxHp: 58, minAtk: 5, maxAtk: 7, xp: 51, img: "fourmi", filter: "sepia(0.45) saturate(1.4)", desc: "Élite. Elle a creusé la galerie où vous vous trouvez. C'est chez elle." },
      { name: "Générale du Tertre", rank: "B", maxHp: 86, minAtk: 6, maxAtk: 10, xp: 96, img: "fourmi", filter: "hue-rotate(180deg) saturate(1.45) contrast(1.15)", weight: 0.6, desc: "Alpha élite. Le Tertre suit ses ordres y compris dans son sommeil." },
    ],
    bossG: { name: "Reine de la Fourmilière", rank: "E", maxHp: 108, minAtk: 5, maxAtk: 8, xp: 130, img: "fourmi", crown: true, desc: "Le noyau de la Fourmilière. Tuer la Reine n'arrête pas la colonie — ça la met en colère." },
    bossD: { name: "Impératrice du Grand Tertre", rank: "B", maxHp: 170, minAtk: 8, maxAtk: 12, xp: 325, img: "fourmi", filter: "hue-rotate(180deg) saturate(1.4)", crown: true, desc: "Le noyau du Tertre. Ses galeries descendent plus bas que la carte ne l'admet." },
  },
  {
    id: "givre",
    label: "Élémentaires de Givre",
    emoji: "❄️",
    gName: "La Galerie Gelée",
    dName: "Le Cœur de Givre",
    pool: [
      { name: "Élémentaire de Givre", rank: "E", maxHp: 24, minAtk: 6, maxAtk: 8, xp: 19, img: "givre", desc: "Il ne vous remarque même pas. Sa présence vous gèle le foie." },
      { name: "Éclat de Givre", rank: "E", maxHp: 27, minAtk: 5, maxAtk: 8, xp: 20, img: "givre", filter: "hue-rotate(60deg) saturate(1.2)", desc: "Un fragment de statue qui a détesté rester immobile." },
      { name: "Colosse de Givre", rank: "E", maxHp: 34, minAtk: 6, maxAtk: 10, xp: 33, img: "givre", filter: "brightness(1.1) contrast(1.2)", weight: 0.6, desc: "Alpha. La Galerie a été sculptée par ses gestes d'humeur." },
    ],
    elite: [
      { name: "Élémentaire de Blizzard", rank: "B", maxHp: 52, minAtk: 7, maxAtk: 10, xp: 60, img: "givre", filter: "hue-rotate(-40deg) saturate(1.3)", desc: "Élite. Il ne porte pas la tempête : il en est l'œil." },
      { name: "Élémentaire de Glace Noire", rank: "B", maxHp: 56, minAtk: 6, maxAtk: 9, xp: 58, img: "givre", filter: "brightness(0.7) saturate(1.2)", desc: "Élite. La glace noire ne fond pas — elle se réveille." },
      { name: "Cœur de Givre Majeur", rank: "B", maxHp: 76, minAtk: 8, maxAtk: 12, xp: 104, img: "givre", filter: "hue-rotate(-40deg) saturate(1.45) contrast(1.2)", weight: 0.6, desc: "Alpha élite. Les statues de la salle suivante ont déjà fui, en théorie." },
    ],
    bossG: { name: "Tyrant de Givre", rank: "E", maxHp: 92, minAtk: 7, maxAtk: 10, xp: 140, img: "givre", crown: true, desc: "Le noyau de la Galerie. Son trône est une statue qui s'est assise d'elle-même." },
    bossD: { name: "Monarque de Givre", rank: "B", maxHp: 156, minAtk: 10, maxAtk: 14, xp: 335, img: "givre", filter: "hue-rotate(-40deg) saturate(1.4)", crown: true, desc: "Le noyau du Cœur. Il hiverne depuis des siècles — vous êtes juste de passage bruyant." },
  },
  {
    id: "automate",
    label: "Automates de l'Atelier",
    emoji: "🎭",
    gName: "L'Atelier des Fils",
    dName: "Le Théâtre des Écorchés",
    pool: [
      { name: "Marionnette Désaxée", rank: "E", maxHp: 30, minAtk: 3, maxAtk: 7, xp: 18, img: "automate", desc: "Elle rate la moitié de ses coups. L'autre moitié, jamais deux fois pareil." },
      { name: "Automate à Ressort", rank: "E", maxHp: 33, minAtk: 4, maxAtk: 6, xp: 19, img: "automate", filter: "sepia(0.4) saturate(1.4)", desc: "On l'a remontée avec les restes de la précédente. Les deux tiennent à peu près." },
      { name: "Automate d'Exposition", rank: "E", maxHp: 44, minAtk: 4, maxAtk: 7, xp: 31, img: "automate", filter: "contrast(1.25) saturate(1.2)", weight: 0.6, desc: "Alpha. Il a triomphé à chaque représentation. Le public n'a jamais applaudi deux fois." },
    ],
    elite: [
      { name: "Automate Horloger", rank: "B", maxHp: 62, minAtk: 5, maxAtk: 9, xp: 54, img: "automate", filter: "hue-rotate(180deg) saturate(1.1)", desc: "Élite. Il répare ses camarades entre deux frappes. C'est son hobby." },
      { name: "Marionnette Écorchée", rank: "B", maxHp: 66, minAtk: 5, maxAtk: 8, xp: 57, img: "automate", filter: "sepia(0.35) saturate(1.6) contrast(1.15)", desc: "Élite. Le Théâtre l'a recyclée tant de fois qu'elle a oublié son premier rôle." },
      { name: "Automate Majeur des Fils", rank: "B", maxHp: 90, minAtk: 6, maxAtk: 10, xp: 100, img: "automate", filter: "hue-rotate(180deg) saturate(1.3) contrast(1.2)", weight: 0.6, desc: "Alpha élite. Ses fils remontent dans le noir jusqu'à une main que personne ne voit." },
    ],
    bossG: { name: "Le Maître des Fils", rank: "E", maxHp: 106, minAtk: 5, maxAtk: 8, xp: 132, img: "automate", crown: true, desc: "Le noyau de l'Atelier. Il ne se bat pas : il dirige. C'est vous le figurant." },
    bossD: { name: "Le Metteur en Scène", rank: "B", maxHp: 175, minAtk: 8, maxAtk: 12, xp: 335, img: "automate", filter: "hue-rotate(180deg) saturate(1.35)", crown: true, desc: "Le noyau du Théâtre. Votre mort est déjà écrite au prochain acte — il tient la plume." },
  },
];

/* Lookup sur toutes les familles (anciennes + nouvelles) : affichage donjons, embuscades. */
/* ============================ FAMILLES RANG A ============================
   10 familles exclusives des Portes de rang A (choix de Maximilien, 14/11/2026 :
   démons, dragons, liches, chevaliers déchus, abominations, géants, anges déchus,
   vampires, élémentaires, cultistes). Une seule tranche : les donjons A (>= D)
   tirent dans « elite » et referment sur « bossD » ; « pool »/« bossG » sont des
   gabarits de repli jamais tirés par genDungeonList, remplis par cohérence.
   Montée en puissance validée : A → S (Mythes) → SS (Vide) → SSS (Fin) → S+ (Dieux). */
const FAMILIES_A: Family[] = [
  {
    id: "demon",
    label: "Légion des Abîmes",
    emoji: "👹",
    gName: "Le Portail des Abîmes",
    dName: "Le Portail des Abîmes",
    pool: [
      { name: "Diablotin Rabique", rank: "A", maxHp: 58, minAtk: 7, maxAtk: 10, xp: 62, img: "demon", desc: "Il mord la main, puis le bras, puis votre avis sur la question." },
      { name: "Molosse Infernal", rank: "A", maxHp: 66, minAtk: 8, maxAtk: 12, xp: 68, img: "demon", filter: "hue-rotate(310deg) saturate(1.3)", desc: "Ses flammes ne s'éteignent jamais. Lui non plus, c'est le problème." },
      { name: "Ombre Balafrée", rank: "A", maxHp: 60, minAtk: 7, maxAtk: 11, xp: 70, img: "demon", filter: "brightness(0.85) contrast(1.25)", desc: "Elle garde la cicatrice de celui qui l'a envoyée. Et la vôtre en réserve." },
      { name: "Diablotin Rabique Alpha", rank: "A", maxHp: 102, minAtk: 9, maxAtk: 13, xp: 112, img: "demon", filter: "contrast(1.3) saturate(1.4)", weight: 0.6, desc: "Alpha. La Légion ne l'a jamais promu : il s'est proclamé tout seul." },
    ],
    elite: [
      { name: "Diablotin Écorcheur", rank: "A", maxHp: 78, minAtk: 8, maxAtk: 12, xp: 88, img: "demon", filter: "saturate(1.5)", desc: "Élite. Il collectionne les langues. Il ne dit jamais lesquelles." },
      { name: "Molosse du Pandémonium", rank: "A", maxHp: 86, minAtk: 9, maxAtk: 13, xp: 92, img: "demon", filter: "hue-rotate(-25deg) saturate(1.4)", desc: "Élite. Quand il aboie, les Portes répondent en écho." },
      { name: "Ombre des Panneaux", rank: "A", maxHp: 80, minAtk: 8, maxAtk: 12, xp: 95, img: "demon", filter: "brightness(0.8) contrast(1.35)", desc: "Élite. Elle a lu les pancartes à votre place. Toutes se terminaient mal." },
      { name: "Ombre Écorcheuse", rank: "A", maxHp: 126, minAtk: 10, maxAtk: 15, xp: 150, img: "demon", filter: "brightness(0.85) saturate(1.5)", weight: 0.6, desc: "Alpha élite. Le Portail l'a renvoyée une fois. Il s'en excuse encore." },
    ],
    bossG: { name: "Bael, Général des Abîmes", rank: "A", maxHp: 185, minAtk: 9, maxAtk: 13, xp: 400, img: "demon", crown: true, desc: "Le noyau du Portail. Sa légion compte plus de morts que de soldats, et il trouve ça rassurant." },
    bossD: { name: "Bael, Général des Abîmes", rank: "A", maxHp: 225, minAtk: 11, maxAtk: 15, xp: 460, img: "demon", filter: "hue-rotate(320deg) saturate(1.3)", crown: true, desc: "Le noyau du Portail. Il ne négocie pas : il répartit. Vous êtes dans la mauvaise colonne." },
  },
  {
    id: "drake",
    label: "Drakes du Cratère",
    emoji: "🐉",
    gName: "Le Cratère de Lave",
    dName: "Le Cratère de Lave",
    pool: [
      { name: "Dragonnet Vorace", rank: "A", maxHp: 56, minAtk: 7, maxAtk: 11, xp: 63, img: "drake", desc: "Il n'a pas encore de trésor, alors il commence par les dents des voleurs." },
      { name: "Drake des Braises", rank: "A", maxHp: 68, minAtk: 8, maxAtk: 12, xp: 70, img: "drake", filter: "hue-rotate(-30deg) saturate(1.4)", desc: "Ses écailles fument même sous la pluie. Surtout sous la pluie." },
      { name: "Wyrm de Cendre", rank: "A", maxHp: 62, minAtk: 7, maxAtk: 12, xp: 72, img: "drake", filter: "sepia(0.4) saturate(1.3)", desc: "Il rampe parce que le Cratère a fondu ses ailes. Sa rancune, elle, vole très bien." },
      { name: "Dragonnet Vorace Alpha", rank: "A", maxHp: 104, minAtk: 9, maxAtk: 14, xp: 114, img: "drake", filter: "contrast(1.25) saturate(1.5)", weight: 0.6, desc: "Alpha. La nichée l'a suivi de trois cratères. Il n'a jamais regardé derrière." },
    ],
    elite: [
      { name: "Dragonnet Fournaise", rank: "A", maxHp: 76, minAtk: 8, maxAtk: 12, xp: 90, img: "drake", filter: "saturate(1.6) contrast(1.1)", desc: "Élite. Il dort dans la lave. Ne réveillez pas ce qui n'a pas besoin de dormir." },
      { name: "Drake du Magma", rank: "A", maxHp: 88, minAtk: 9, maxAtk: 14, xp: 96, img: "drake", filter: "hue-rotate(-45deg) saturate(1.5)", desc: "Élite. Ses veines coulent au ralenti, comme tout ce qui est trop chaud pour se presser." },
      { name: "Wyrm de la Fournaise", rank: "A", maxHp: 82, minAtk: 8, maxAtk: 13, xp: 100, img: "drake", filter: "sepia(0.5) saturate(1.4)", desc: "Élite. Le Cratère l'a reforgé. Il n'a rien dit — il n'a plus de langue pour ça." },
      { name: "Drake du Magma Alpha", rank: "A", maxHp: 128, minAtk: 11, maxAtk: 16, xp: 152, img: "drake", filter: "hue-rotate(-50deg) saturate(1.6) contrast(1.2)", weight: 0.6, desc: "Alpha élite. Le seul être vivant que la lave salue en passant." },
    ],
    bossG: { name: "L'Ancien des Cendres", rank: "A", maxHp: 190, minAtk: 10, maxAtk: 14, xp: 410, img: "drake", crown: true, desc: "Le noyau du Cratère. Il a vu naître la première flamme et jugé qu'elle manquait d'ambition." },
    bossD: { name: "L'Ancien des Cendres", rank: "A", maxHp: 230, minAtk: 12, maxAtk: 16, xp: 470, img: "drake", filter: "hue-rotate(-15deg) saturate(1.5) contrast(1.15)", crown: true, desc: "Le noyau du Cratère. Ses cendres se souviennent de chaque chevalier venu le réveiller. Le jeu dure encore." },
  },
  {
    id: "liche",
    label: "Conclave Nécrotique",
    emoji: "💀",
    gName: "Le Sanctorum Interdit",
    dName: "Le Sanctorum Interdit",
    pool: [
      { name: "Nécromant Déchu", rank: "A", maxHp: 54, minAtk: 7, maxAtk: 11, xp: 64, img: "liche", desc: "Radié de son ordre pour cruauté. L'ordre, lui, a été radié après." },
      { name: "Goule d'Archive", rank: "A", maxHp: 70, minAtk: 8, maxAtk: 12, xp: 69, img: "liche", filter: "sepia(0.5) saturate(1.2)", desc: "Elle mange les registres pour effacer les dettes. Les siens aussi." },
      { name: "Automate d'Os", rank: "A", maxHp: 64, minAtk: 7, maxAtk: 12, xp: 71, img: "liche", filter: "brightness(0.9) contrast(1.15)", desc: "Assemblé pour l'éternité. Le mode d'emploi s'est décomposé en route." },
      { name: "Nécromant Hérétique", rank: "A", maxHp: 102, minAtk: 9, maxAtk: 14, xp: 116, img: "liche", filter: "hue-rotate(90deg) saturate(1.3)", weight: 0.6, desc: "Alpha. Le Conclave a voté son expulsion. Il a fait voter l'inverse aux morts." },
    ],
    elite: [
      { name: "Nécromant Blasphème", rank: "A", maxHp: 74, minAtk: 8, maxAtk: 13, xp: 92, img: "liche", filter: "hue-rotate(120deg) saturate(1.4)", desc: "Élite. Ses notes de bas de page portent des noms. Les vôtres y figurent en abrégé." },
      { name: "Goule du Sanctorum", rank: "A", maxHp: 86, minAtk: 9, maxAtk: 13, xp: 96, img: "liche", filter: "sepia(0.6) saturate(1.4)", desc: "Élite. Elle a dévoré trois archivistes et leurs classifications. Tout est mélangé, maintenant." },
      { name: "Ossature Animée", rank: "A", maxHp: 80, minAtk: 8, maxAtk: 12, xp: 102, img: "liche", filter: "brightness(0.95) contrast(1.25)", desc: "Élite. Deux squelettes, un seul antagonisme. C'est le plus rapide du Conclave." },
      { name: "Liche Mineure", rank: "A", maxHp: 126, minAtk: 10, maxAtk: 15, xp: 155, img: "liche", filter: "hue-rotate(90deg) saturate(1.5) contrast(1.2)", weight: 0.6, desc: "Alpha élite. Elle a échoué à la Souveraine une seule fois. La pile d'os témoigne encore." },
    ],
    bossG: { name: "La Lich Souveraine", rank: "A", maxHp: 195, minAtk: 10, maxAtk: 14, xp: 420, img: "liche", crown: true, desc: "Le noyau du Sanctorum. Elle préside le Conclave depuis si longtemps que le fauteuil a pris sa forme." },
    bossD: { name: "La Lich Souveraine", rank: "A", maxHp: 235, minAtk: 11, maxAtk: 16, xp: 480, img: "liche", filter: "hue-rotate(180deg) saturate(1.2)", crown: true, desc: "Le noyau du Sanctorum. Sa phylactère est quelque part dans cette salle. Devinez ce qui la protège." },
  },
  {
    id: "chevalier",
    label: "Ordre du Crâne Pâle",
    emoji: "⚔️",
    gName: "La Citadelle Déchue",
    dName: "La Citadelle Déchue",
    pool: [
      { name: "Fantassin Renégat", rank: "A", maxHp: 60, minAtk: 7, maxAtk: 11, xp: 63, img: "chevalier", desc: "Il a déserté un royaume qui n'existe plus. La solde, elle, tombe encore." },
      { name: "Chevalier Noir", rank: "A", maxHp: 72, minAtk: 8, maxAtk: 12, xp: 70, img: "chevalier", filter: "contrast(1.25)", desc: "Son armure a déjà été blanche. Elle garde le silence sur l'époque." },
      { name: "Archer du Guet", rank: "A", maxHp: 56, minAtk: 8, maxAtk: 13, xp: 66, img: "chevalier", filter: "sepia(0.35) saturate(1.2)", desc: "Il ne rate jamais deux fois la même cible. La première fois suffit." },
      { name: "Capitaine Renégat", rank: "A", maxHp: 106, minAtk: 9, maxAtk: 14, xp: 114, img: "chevalier", filter: "contrast(1.3) saturate(1.3)", weight: 0.6, desc: "Alpha. Il porte les étendards de ses trois derniers échecs. Pour ne pas oublier." },
    ],
    elite: [
      { name: "Fantassin du Crâne Pâle", rank: "A", maxHp: 82, minAtk: 8, maxAtk: 13, xp: 90, img: "chevalier", filter: "contrast(1.3) brightness(0.95)", desc: "Élite. La Citadelle l'a réformé après sa mort. Le règlement n'a pas changé d'un mot." },
      { name: "Chevalier du Voile Noir", rank: "A", maxHp: 92, minAtk: 9, maxAtk: 14, xp: 98, img: "chevalier", filter: "contrast(1.35) brightness(0.85)", desc: "Élite. Sous le heaume, plus personne ne se souvient du visage. Le heaume s'en fiche." },
      { name: "Arbalétrier des Remparts", rank: "A", maxHp: 76, minAtk: 9, maxAtk: 14, xp: 100, img: "chevalier", filter: "sepia(0.45) contrast(1.2)", desc: "Élite. Sa traits sont trempés dans le silence des cours d'honneur." },
      { name: "Justicier Déchu", rank: "A", maxHp: 130, minAtk: 11, maxAtk: 16, xp: 158, img: "chevalier", filter: "contrast(1.4) saturate(1.25)", weight: 0.6, desc: "Alpha élite. Il rendait la justice. Maintenant il rend les coups. Le tarif est le même." },
    ],
    bossG: { name: "Le Maréchal Sans-Tête", rank: "A", maxHp: 200, minAtk: 10, maxAtk: 15, xp: 430, img: "chevalier", crown: true, desc: "Le noyau de la Citadelle. Il a perdu la tête à la bataille. Ses ordres n'ont jamais été aussi clairs." },
    bossD: { name: "Le Maréchal Sans-Tête", rank: "A", maxHp: 240, minAtk: 12, maxAtk: 17, xp: 490, img: "chevalier", filter: "contrast(1.4) brightness(0.9)", crown: true, desc: "Le noyau de la Citadelle. Son armée déchue se range derrière lui sans même un signe — la politesse s'arrête à la décapitation." },
  },
  {
    id: "horreur",
    label: "Horreurs de la Faille",
    emoji: "🦑",
    gName: "La Faille Béante",
    dName: "La Faille Béante",
    pool: [
      { name: "Masse Palpitante", rank: "A", maxHp: 66, minAtk: 7, maxAtk: 12, xp: 64, img: "horreur", filter: "saturate(1.3)", desc: "Elle respire au ralenti. On croit deviner un visage. On espère se tromper." },
      { name: "Protée Rampante", rank: "A", maxHp: 58, minAtk: 8, maxAtk: 12, xp: 70, img: "horreur", filter: "hue-rotate(90deg)", desc: "Elle imite la dernière chose qu'elle a mangée. Tâchez de ne pas finir en modèle." },
      { name: "Œil des Profondeurs", rank: "A", maxHp: 62, minAtk: 8, maxAtk: 13, xp: 74, img: "horreur", filter: "contrast(1.2)", desc: "Il ne cligne jamais. C'est votre façon de perdre, à vous, qui change." },
      { name: "Protée Rampante Alpha", rank: "A", maxHp: 108, minAtk: 10, maxAtk: 14, xp: 118, img: "horreur", filter: "hue-rotate(120deg) saturate(1.4)", weight: 0.6, desc: "Alpha. Elle a déjà votre taille. Elle travaille le visage." },
    ],
    elite: [
      { name: "Masse Boursouflée", rank: "A", maxHp: 88, minAtk: 9, maxAtk: 13, xp: 94, img: "horreur", filter: "saturate(1.5) contrast(1.1)", desc: "Élite. Elle a absorbé un escalier entier. On entend encore les marches." },
      { name: "Protée de l'Abîme", rank: "A", maxHp: 78, minAtk: 9, maxAtk: 14, xp: 98, img: "horreur", filter: "hue-rotate(140deg) saturate(1.3)", desc: "Élite. Sa forme favorite est « presque ». Pressumable. Presque une sortie." },
      { name: "Œil de la Faille", rank: "A", maxHp: 84, minAtk: 10, maxAtk: 15, xp: 104, img: "horreur", filter: "brightness(0.9) contrast(1.3)", desc: "Élite. Il a vu la Faille naître. La Faille, elle, essaie de ne pas le regarder." },
      { name: "Chose Boursouflée", rank: "A", maxHp: 132, minAtk: 11, maxAtk: 17, xp: 160, img: "horreur", filter: "hue-rotate(200deg) saturate(1.4)", weight: 0.6, desc: "Alpha élite. La Faille l'a recrachée. Elle n'en dit pas plus." },
    ],
    bossG: { name: "La Chose Sans-Nom", rank: "A", maxHp: 195, minAtk: 11, maxAtk: 15, xp: 440, img: "horreur", crown: true, desc: "Le noyau de la Faille. Les archives l'ont nommée une fois. Les archives n'existent plus." },
    bossD: { name: "La Chose Sans-Nom", rank: "A", maxHp: 245, minAtk: 12, maxAtk: 18, xp: 500, img: "horreur", filter: "hue-rotate(270deg) saturate(1.3)", crown: true, desc: "Le noyau de la Faille. Elle a appris votre nom en vous lisant. Elle ne l'utilisera pas — elle n'a pas besoin." },
  },
  {
    id: "jotun",
    label: "Jotuns des Pics",
    emoji: "🗿",
    gName: "Les Pics du Marteau",
    dName: "Les Pics du Marteau",
    pool: [
      { name: "Jeune Géant", rank: "A", maxHp: 64, minAtk: 8, maxAtk: 12, xp: 65, img: "jotun", desc: "« Jeune » est une question de point de vue. Il vous dépasse déjà de quatre têtes." },
      { name: "Géant de Garde", rank: "A", maxHp: 78, minAtk: 9, maxAtk: 13, xp: 72, img: "jotun", filter: "sepia(0.3) saturate(1.2)", desc: "Il garde un pont qui n'existe plus. Le poste est héréditaire, apparemment." },
      { name: "Lanceur de Rochers", rank: "A", maxHp: 70, minAtk: 8, maxAtk: 14, xp: 68, img: "jotun", filter: "brightness(1.05) contrast(1.1)", desc: "Il vise très mal et s'en excuse à voix haute. La montagne, elle, ne s'excuse pas." },
      { name: "Jeune Géant Colossal", rank: "A", maxHp: 110, minAtk: 10, maxAtk: 15, xp: 118, img: "jotun", filter: "contrast(1.2) saturate(1.3)", weight: 0.6, desc: "Alpha. Les autres l'appellent « petit ». C'est le seul mot qu'il ne comprend pas." },
    ],
    elite: [
      { name: "Géant des Avalanches", rank: "A", maxHp: 90, minAtk: 9, maxAtk: 14, xp: 96, img: "jotun", filter: "hue-rotate(180deg) saturate(1.2) brightness(1.1)", desc: "Élite. Il ne fait pas exprès de déclencher les neiges. C'est juste sa démarche." },
      { name: "Géant du Marteau", rank: "A", maxHp: 100, minAtk: 10, maxAtk: 15, xp: 102, img: "jotun", filter: "sepia(0.4) contrast(1.2)", desc: "Élite. Son marteau a écrasé une dynastie. Le manche compte les générations." },
      { name: "Ébouleur Colossal", rank: "A", maxHp: 84, minAtk: 9, maxAtk: 14, xp: 98, img: "jotun", filter: "brightness(1.1) saturate(1.15)", desc: "Élite. Il précède les éboulements d'un pas poli. On appelle ça de la bienséance, chez les Jotuns." },
      { name: "Jotun Grondant", rank: "A", maxHp: 134, minAtk: 12, maxAtk: 17, xp: 162, img: "jotun", filter: "sepia(0.3) contrast(1.3) saturate(1.25)", weight: 0.6, desc: "Alpha élite. Quand il se gargarise, les Pics changent d'avis sur leur altitude." },
    ],
    bossG: { name: "Grond, Roi des Pics", rank: "A", maxHp: 205, minAtk: 11, maxAtk: 16, xp: 450, img: "jotun", crown: true, desc: "Le noyau des Pics. Son marteau a tapissé le hall de couronnes qui ne l'ont pas amusé." },
    bossD: { name: "Grond, Roi des Pics", rank: "A", maxHp: 250, minAtk: 13, maxAtk: 18, xp: 510, img: "jotun", filter: "sepia(0.35) contrast(1.25) saturate(1.3)", crown: true, desc: "Le noyau des Pics. Il vous a vu entrer. Il a simplement décidé que vous étiez déjà une inscription." },
  },
  {
    id: "archange",
    label: "Légion Reniée",
    emoji: "😇",
    gName: "Le Parvis Renié",
    dName: "Le Parvis Renié",
    pool: [
      { name: "Chérubin Corrompu", rank: "A", maxHp: 56, minAtk: 7, maxAtk: 11, xp: 66, img: "archange", filter: "brightness(1.1)", desc: "Son petit chant, jadis, berçait les prières. Maintenant il couvre autre chose." },
      { name: "Séraphin Noir", rank: "A", maxHp: 70, minAtk: 8, maxAtk: 13, xp: 72, img: "archange", filter: "brightness(0.7) contrast(1.3)", desc: "Ses ailes n'ont pas brûlé : elles ont juste arrêté de prétendre." },
      { name: "Statue Animée", rank: "A", maxHp: 66, minAtk: 8, maxAtk: 12, xp: 69, img: "archange", filter: "sepia(0.6)", desc: "On l'a sculptée à la gloire du Parvis. Le Parvis a réclamé la pose, pas la pierre." },
      { name: "Chérubin Broyeur", rank: "A", maxHp: 106, minAtk: 10, maxAtk: 14, xp: 120, img: "archange", filter: "brightness(1.15) saturate(1.3)", weight: 0.6, desc: "Alpha. Il garde le sourire. C'est ce qui inquiète le plus, ici." },
    ],
    elite: [
      { name: "Chérubin Écorché", rank: "A", maxHp: 76, minAtk: 8, maxAtk: 13, xp: 94, img: "archange", filter: "brightness(1.15) saturate(1.3)", desc: "Élite. Ses larmes sont réelles. Elles tombent sur les dalles et les dalles ne les boivent pas." },
      { name: "Séraphin du Châtiment", rank: "A", maxHp: 94, minAtk: 10, maxAtk: 15, xp: 104, img: "archange", filter: "brightness(0.75) contrast(1.35)", desc: "Élite. Il exécute des ordres qui n'existent plus. Avec une rigueur parfaite." },
      { name: "Colosse du Parvis", rank: "A", maxHp: 86, minAtk: 9, maxAtk: 14, xp: 98, img: "archange", filter: "sepia(0.5) contrast(1.2)", desc: "Élite. Il bloque le seuil depuis toujours. Le seuil, lui, a fini par céder en premier." },
      { name: "Séraphin Déchu", rank: "A", maxHp: 128, minAtk: 11, maxAtk: 16, xp: 158, img: "archange", filter: "brightness(0.8) saturate(1.4) contrast(1.3)", weight: 0.6, desc: "Alpha élite. Il est tombé en silence. Le silence, depuis, lui obéit." },
    ],
    bossG: { name: "L'Archange Renié", rank: "A", maxHp: 200, minAtk: 11, maxAtk: 16, xp: 460, img: "archange", crown: true, desc: "Le noyau du Parvis. Il a renié le Ciel avant que le Ciel n'ait le temps de le renier — il tient à ce détail." },
    bossD: { name: "L'Archange Renié", rank: "A", maxHp: 245, minAtk: 13, maxAtk: 18, xp: 520, img: "archange", filter: "brightness(0.85) contrast(1.4) saturate(1.3)", crown: true, desc: "Le noyau du Parvis. Son halo à l'envers éclaire la salle par en dessous. Comme tout ce qui s'y est couché." },
  },
  {
    id: "vampire",
    label: "Cour des Nuits",
    emoji: "🧛",
    gName: "Le Manoir des Nuits",
    dName: "Le Manoir des Nuits",
    pool: [
      { name: "Valet Pallide", rank: "A", maxHp: 58, minAtk: 7, maxAtk: 12, xp: 67, img: "vampire", desc: "Il annonce les invités à voix basse. Les invités sont déjà au courant, eux." },
      { name: "Prétendant Affamé", rank: "A", maxHp: 66, minAtk: 8, maxAtk: 13, xp: 71, img: "vampire", filter: "sepia(0.4) saturate(1.4)", desc: "Il souppe depuis des siècles. C'est le régime qui compte, pas le plat." },
      { name: "Garde-Cercueil", rank: "A", maxHp: 62, minAtk: 8, maxAtk: 12, xp: 73, img: "vampire", filter: "brightness(0.85)", desc: "Il veille sur des cercueils vides. Les occupants sortent par politesse." },
      { name: "Prétendant Affamé Alpha", rank: "A", maxHp: 104, minAtk: 10, maxAtk: 15, xp: 122, img: "vampire", filter: "sepia(0.45) saturate(1.6)", weight: 0.6, desc: "Alpha. Il a bu la Cour entière en une nuit. Personne ne l'a invité à recommencer." },
    ],
    elite: [
      { name: "Majordome de Minuit", rank: "A", maxHp: 80, minAtk: 9, maxAtk: 14, xp: 98, img: "vampire", filter: "sepia(0.5) contrast(1.15)", desc: "Élite. Il sert le vin à la bonne température : celle du poignet de l'invité." },
      { name: "Courtisan Écarlate", rank: "A", maxHp: 92, minAtk: 10, maxAtk: 15, xp: 106, img: "vampire", filter: "hue-rotate(-20deg) saturate(1.5)", desc: "Élite. Ses compliments durent plus longtemps que les gens qui les entendent." },
      { name: "Veilleur de Cercueil", rank: "A", maxHp: 86, minAtk: 9, maxAtk: 13, xp: 102, img: "vampire", filter: "brightness(0.9) contrast(1.2)", desc: "Élite. Il a juré de ne jamais dormir. Le Manoir veille à ce que ce soit réciproque." },
      { name: "Courtisan Sanguin", rank: "A", maxHp: 130, minAtk: 12, maxAtk: 17, xp: 164, img: "vampire", filter: "hue-rotate(-25deg) saturate(1.6) contrast(1.15)", weight: 0.6, desc: "Alpha élite. La Cour l'applaudit de loin. La portée d'un bras, précisément." },
    ],
    bossG: { name: "Le Comte des Nuits", rank: "A", maxHp: 210, minAtk: 11, maxAtk: 16, xp: 470, img: "vampire", crown: true, desc: "Le noyau du Manoir. Il compte les nuits comme d'autres comptent les victoires : en les traversant." },
    bossD: { name: "Le Comte des Nuits", rank: "A", maxHp: 255, minAtk: 13, maxAtk: 19, xp: 530, img: "vampire", filter: "sepia(0.4) saturate(1.6) contrast(1.2)", crown: true, desc: "Le noyau du Manoir. Son invitation vous a été envoyée. Vous l'avez acceptée en ouvrant la porte." },
  },
  {
    id: "cyclone",
    label: "Fureurs du Cyclone",
    emoji: "⚡",
    gName: "L'Œil du Cyclone",
    dName: "L'Œil du Cyclone",
    pool: [
      { name: "Colère Mineure", rank: "A", maxHp: 60, minAtk: 7, maxAtk: 12, xp: 68, img: "cyclone", filter: "hue-rotate(45deg)", desc: "Une brise de mauvaise humeur. Elle claque les portes d'un royaume entier." },
      { name: "Élémentaire de Foudre", rank: "A", maxHp: 64, minAtk: 8, maxAtk: 14, xp: 72, img: "cyclone", filter: "brightness(1.2) saturate(1.4)", desc: "Il frappe le sol par habitude. Le sol a pris le parti de répondre." },
      { name: "Vortex Vivant", rank: "A", maxHp: 62, minAtk: 8, maxAtk: 13, xp: 74, img: "cyclone", filter: "contrast(1.25)", desc: "Il tourne sur lui-même en cherchant quoi emporter. La liste est longue." },
      { name: "Colère Majeure", rank: "A", maxHp: 108, minAtk: 10, maxAtk: 15, xp: 122, img: "cyclone", filter: "hue-rotate(60deg) saturate(1.4)", weight: 0.6, desc: "Alpha. « Mineure » était un mensonge de comptable. Elle a vérifié les chiffres." },
    ],
    elite: [
      { name: "Colère du Firmament", rank: "A", maxHp: 82, minAtk: 9, maxAtk: 14, xp: 100, img: "cyclone", filter: "hue-rotate(60deg) saturate(1.4)", desc: "Élite. Le ciel l'a engendrée un jour de défaillance. Il n'a pas récidivé." },
      { name: "Élémentaire de l'Orage", rank: "A", maxHp: 88, minAtk: 10, maxAtk: 16, xp: 108, img: "cyclone", filter: "brightness(1.25) saturate(1.5)", desc: "Élite. Le tonnerre précède son humeur. L'éclair, lui, ne prévient personne." },
      { name: "Trombe Sentiente", rank: "A", maxHp: 84, minAtk: 9, maxAtk: 15, xp: 104, img: "cyclone", filter: "hue-rotate(90deg) contrast(1.3)", desc: "Élite. Elle connaît votre itinéraire mieux que vous. Elle l'a déjà emporté une fois." },
      { name: "Foudre Vivante", rank: "A", maxHp: 132, minAtk: 12, maxAtk: 18, xp: 166, img: "cyclone", filter: "brightness(1.3) saturate(1.6) contrast(1.2)", weight: 0.6, desc: "Alpha élite. L'Œil du Cyclone la suit du regard. C'est elle, le mauvais œil." },
    ],
    bossG: { name: "Le Titan des Tempêtes", rank: "A", maxHp: 215, minAtk: 12, maxAtk: 17, xp: 480, img: "cyclone", crown: true, desc: "Le noyau de l'Œil. Il dort au centre, là où tout est calme — c'est tout le reste qui l'irrite." },
    bossD: { name: "Le Titan des Tempêtes", rank: "A", maxHp: 260, minAtk: 14, maxAtk: 19, xp: 540, img: "cyclone", filter: "brightness(1.2) saturate(1.5) contrast(1.25)", crown: true, desc: "Le noyau de l'Œil. Chaque tempête du continent porte sa signature. Il y en a qu'il n'a même pas signées." },
  },
  {
    id: "culte",
    label: "Culte de la Porte Noire",
    emoji: "🕯️",
    gName: "La Cathédrale Noire",
    dName: "La Cathédrale Noire",
    pool: [
      { name: "Fanatique Cagoulé", rank: "A", maxHp: 58, minAtk: 7, maxAtk: 11, xp: 66, img: "culte", filter: "sepia(0.4)", desc: "Il prie des Portes qui n'ont pas encore daigné s'ouvrir. L'insistance, disent-ils, paie." },
      { name: "Démoniste", rank: "A", maxHp: 64, minAtk: 8, maxAtk: 13, xp: 72, img: "culte", filter: "hue-rotate(270deg) saturate(1.3)", desc: "Il passe des contrats avec des choses sans nom. Les clauses, elles, ont des crochets." },
      { name: "Zélote Marronnier", rank: "A", maxHp: 60, minAtk: 8, maxAtk: 12, xp: 70, img: "culte", desc: "Il reprend les mêmes prières que tout le monde, un ton au-dessus. La Cathédrale adore ça." },
      { name: "Hiérophante Cagoulé", rank: "A", maxHp: 106, minAtk: 10, maxAtk: 14, xp: 120, img: "culte", filter: "sepia(0.45) contrast(1.25)", weight: 0.6, desc: "Alpha. Il a lu tout le dogme à l'envers. Le dogme fonctionnait mieux dans ce sens." },
    ],
    elite: [
      { name: "Fanatique du Voile", rank: "A", maxHp: 78, minAtk: 9, maxAtk: 13, xp: 96, img: "culte", filter: "sepia(0.5) contrast(1.2)", desc: "Élite. Sa cagoule ne sert plus à rien. Le Voile, lui, s'est chargé de l'anonymat." },
      { name: "Démoniste des Portes", rank: "A", maxHp: 86, minAtk: 10, maxAtk: 15, xp: 104, img: "culte", filter: "hue-rotate(280deg) saturate(1.4)", desc: "Élite. Il a signé pour servir après sa mort. Les deux clauses se sont exécutées ensemble." },
      { name: "Chantre du Glas", rank: "A", maxHp: 80, minAtk: 9, maxAtk: 14, xp: 100, img: "culte", filter: "brightness(0.85) contrast(1.2)", desc: "Élite. Ses hymnes ont été écrits pour des voix. La sienne a été remplacée en cours de route." },
      { name: "Zélote du Chœur Noir", rank: "A", maxHp: 128, minAtk: 11, maxAtk: 17, xp: 160, img: "culte", filter: "sepia(0.5) saturate(1.4) contrast(1.3)", weight: 0.6, desc: "Alpha élite. Il a franchi la Porte Noire une fois. Il en revient chaque fois qu'on chante. Pas par envie." },
    ],
    bossG: { name: "Le Grand Prêtre de la Porte", rank: "A", maxHp: 215, minAtk: 12, maxAtk: 17, xp: 490, img: "culte", crown: true, desc: "Le noyau de la Cathédrale. Il a dessiné la Porte avant qu'elle n'existe. Elle a suivi le plan." },
    bossD: { name: "Le Grand Prêtre de la Porte", rank: "A", maxHp: 265, minAtk: 14, maxAtk: 19, xp: 550, img: "culte", filter: "hue-rotate(290deg) saturate(1.4) contrast(1.2)", crown: true, desc: "Le noyau de la Cathédrale. Quand il dit « entrez », la salle entière obéit — vous compris." },
  },
];

/* ==================== FAMILLES RANG S — LES MYTHES ÉVEILLÉS (10) ====================
   Choix de Maximilien (14/11/2026) : les Portes de rang S tirent EXCLUSIVEMENT ici.
   Même architecture que FAMILIES_A : pool/bossG = gabarits de repli (jamais tirés en S,
   qui referme sur bossD via genRooms), stats brutes calibrées sur le rang A,
   TIER_SCALE.S (x3,5 PV / x2,5 atq / x10 EXP) fait la montée en puissance. */
const FAMILIES_S: Family[] = [
  {
    id: "kraken",
    label: "Rejetons de l'Abysse",
    emoji: "🐙",
    gName: "L'Abysse du Kraken",
    dName: "L'Abysse du Kraken",
    pool: [
      { name: "Avorton du Kraken", rank: "S", maxHp: 64, minAtk: 7, maxAtk: 11, xp: 66, img: "kraken", desc: "Huit bras, et aucun ne sait encore attraper. Il compense en bavant." },
      { name: "Crabe des Marées Noires", rank: "S", maxHp: 72, minAtk: 8, maxAtk: 12, xp: 70, img: "kraken", filter: "hue-rotate(-40deg) saturate(1.3)", desc: "Sa carapace a goûté tous les navires de la zone. Il les note." },
      { name: "Nageur des Épaves", rank: "S", maxHp: 66, minAtk: 7, maxAtk: 12, xp: 72, img: "kraken", filter: "brightness(0.85) contrast(1.2)", desc: "Ancien marin recruté sans entretien. L'entretien, c'était lui, la proie." },
      { name: "Avorton du Kraken Alpha", rank: "S", maxHp: 112, minAtk: 9, maxAtk: 14, xp: 120, img: "kraken", filter: "contrast(1.3) saturate(1.4)", weight: 0.6, desc: "Alpha. Il compte déjà plus de bras que sa mère. Elle refuse d'en parler." },
    ],
    elite: [
      { name: "Tentacule du Kraken", rank: "S", maxHp: 84, minAtk: 8, maxAtk: 12, xp: 96, img: "kraken", filter: "saturate(1.5)", desc: "Élite. Il patrouille seul. Le reste du corps est ailleurs — c'est ça le problème." },
      { name: "Raie de l'Abysse", rank: "S", maxHp: 92, minAtk: 9, maxAtk: 14, xp: 102, img: "kraken", filter: "hue-rotate(-25deg) saturate(1.4)", desc: "Élite. Sa piqûre transforme le courage en souvenir." },
      { name: "Méduse Fosforescente", rank: "S", maxHp: 80, minAtk: 8, maxAtk: 13, xp: 104, img: "kraken", filter: "brightness(0.9) saturate(1.6)", desc: "Élite. Elle éclaire les fonds pour compter les morts. Le décompte dépasse l'éclairage." },
      { name: "Tentacule du Kraken Alpha", rank: "S", maxHp: 130, minAtk: 11, maxAtk: 16, xp: 158, img: "kraken", filter: "saturate(1.7) contrast(1.25)", weight: 0.6, desc: "Alpha élite. L'Abysse l'a renvoyé vers le haut. Le haut l'a renvoyé ici. Il est d'accord avec l'Abysse." },
    ],
    bossG: { name: "Le Kraken", rank: "S", maxHp: 215, minAtk: 12, maxAtk: 17, xp: 500, img: "kraken", crown: true, desc: "Le noyau de l'Abysse. Les cartes marquent son nom en rouge. L'encre ne tient pas toujours." },
    bossD: { name: "Le Kraken", rank: "S", maxHp: 265, minAtk: 13, maxAtk: 19, xp: 560, img: "kraken", filter: "hue-rotate(180deg) saturate(1.4)", crown: true, desc: "Le noyau de l'Abysse. Il n'a jamais remonté à la surface : c'est la surface qui descend jusqu'à lui." },
  },
  {
    id: "leviathan",
    label: "Lignée sans Fond",
    emoji: "🐋",
    gName: "La Tranchée sans Fond",
    dName: "La Tranchée sans Fond",
    pool: [
      { name: "Jeune Léviathan", rank: "S", maxHp: 68, minAtk: 8, maxAtk: 12, xp: 68, img: "leviathan", desc: "Il chante faux. Les glissements de terrain sous-marins s'en chargent." },
      { name: "Serpent des Courants", rank: "S", maxHp: 62, minAtk: 7, maxAtk: 11, xp: 66, img: "leviathan", filter: "hue-rotate(150deg) saturate(1.2)", desc: "Il suit les courants par paresse. Les courants suivent la Tranchée. Tout le monde descend." },
      { name: "Requin des Grands Fonds", rank: "S", maxHp: 70, minAtk: 8, maxAtk: 13, xp: 72, img: "leviathan", filter: "brightness(0.8) contrast(1.3)", desc: "Ses dents se déroulent comme un inventaire. L'inventaire est long." },
      { name: "Jeune Léviathan Alpha", rank: "S", maxHp: 114, minAtk: 9, maxAtk: 14, xp: 122, img: "leviathan", filter: "contrast(1.3) saturate(1.5)", weight: 0.6, desc: "Alpha. Le registre de ses victimes s'allonge plus vite que lui. C'est dire." },
    ],
    elite: [
      { name: "Mâchoire Ancienne", rank: "S", maxHp: 90, minAtk: 9, maxAtk: 14, xp: 100, img: "leviathan", filter: "saturate(1.5)", desc: "Élite. Elle ne mord plus depuis longtemps. Elle avale, c'est plus rapide." },
      { name: "Baleine d'Os", rank: "S", maxHp: 86, minAtk: 8, maxAtk: 13, xp: 96, img: "leviathan", filter: "sepia(0.5) saturate(1.2)", desc: "Élite. On la croit nageant. Elle coule avec style depuis un siècle." },
      { name: "Chantre des Fonds", rank: "S", maxHp: 80, minAtk: 9, maxAtk: 14, xp: 104, img: "leviathan", filter: "hue-rotate(200deg) saturate(1.3)", desc: "Élite. Son chant ramène les curieux. La Tranchée fait le reste." },
      { name: "Mâchoire Ancienne Alpha", rank: "S", maxHp: 132, minAtk: 11, maxAtk: 17, xp: 160, img: "leviathan", filter: "saturate(1.6) contrast(1.3)", weight: 0.6, desc: "Alpha élite. Les sirènes l'ont recruté une fois. Le concert n'a pas survécu au premier bis." },
    ],
    bossG: { name: "Le Léviathan", rank: "S", maxHp: 210, minAtk: 12, maxAtk: 17, xp: 490, img: "leviathan", crown: true, desc: "Le noyau de la Tranchée. Les baleines chantent sa légende pour ne pas avoir à la vivre." },
    bossD: { name: "Le Léviathan", rank: "S", maxHp: 260, minAtk: 13, maxAtk: 19, xp: 550, img: "leviathan", filter: "hue-rotate(190deg) saturate(1.5) contrast(1.2)", crown: true, desc: "Le noyau de la Tranchée. Le fond n'existe pas pour lui : il EST le fond." },
  },
  {
    id: "phenix",
    label: "Couvée du Bûcher",
    emoji: "🔥",
    gName: "Le Bûcher Éternel",
    dName: "Le Bûcher Éternel",
    pool: [
      { name: "Poussin du Bûcher", rank: "S", maxHp: 60, minAtk: 7, maxAtk: 11, xp: 66, img: "phenix", desc: "Il vient de naître. C'est déjà sa troisième naissance, et il s'en lasse." },
      { name: "Faucon des Braises", rank: "S", maxHp: 66, minAtk: 8, maxAtk: 12, xp: 70, img: "phenix", filter: "hue-rotate(-20deg) saturate(1.4)", desc: "Il dort dans les flammes et se lève en grésillant. Volontairement." },
      { name: "Cendre Animée", rank: "S", maxHp: 62, minAtk: 7, maxAtk: 12, xp: 72, img: "phenix", filter: "sepia(0.4) saturate(1.5)", desc: "Un reste du Phénix précédent. Le Bûcher ne jette rien." },
      { name: "Poussin du Bûcher Alpha", rank: "S", maxHp: 108, minAtk: 9, maxAtk: 14, xp: 118, img: "phenix", filter: "contrast(1.3) saturate(1.6)", weight: 0.6, desc: "Alpha. Il a déjà ressuscité deux fois par habitude. La troisième était pour le plaisir." },
    ],
    elite: [
      { name: "Gardien des Cendres", rank: "S", maxHp: 82, minAtk: 8, maxAtk: 13, xp: 96, img: "phenix", filter: "saturate(1.5)", desc: "Élite. Il ramasse ce qui n'a pas brûlé. La pile ne baisse jamais." },
      { name: "Aigle de Feu", rank: "S", maxHp: 90, minAtk: 9, maxAtk: 14, xp: 102, img: "phenix", filter: "hue-rotate(-30deg) saturate(1.6)", desc: "Élite. Ses plumes ne s'éteignent que dans l'eau. Il a donc supprimé l'eau." },
      { name: "Spectre de Flamme", rank: "S", maxHp: 78, minAtk: 9, maxAtk: 13, xp: 106, img: "phenix", filter: "brightness(0.9) contrast(1.3)", desc: "Élite. Une flamme qui se souvient d'avoir été quelqu'un. Elle n'apprécie pas les vivants." },
      { name: "Gardien des Cendres Alpha", rank: "S", maxHp: 128, minAtk: 11, maxAtk: 16, xp: 156, img: "phenix", filter: "saturate(1.7) contrast(1.3)", weight: 0.6, desc: "Alpha élite. Le Bûcher l'a réclamé trois fois. Il a répondu « après vous »." },
    ],
    bossG: { name: "Le Phénix", rank: "S", maxHp: 205, minAtk: 11, maxAtk: 16, xp: 480, img: "phenix", crown: true, desc: "Le noyau du Bûcher. Il est mort très souvent, toujours en avance sur son propre enterrement." },
    bossD: { name: "Le Phénix", rank: "S", maxHp: 255, minAtk: 12, maxAtk: 18, xp: 540, img: "phenix", filter: "hue-rotate(-15deg) saturate(1.5) contrast(1.2)", crown: true, desc: "Le noyau du Bûcher. Tuer le Phénix est un plan à court terme. Il connaît la fin depuis toujours." },
  },
  {
    id: "behemoth",
    label: "Faune de la Steppe",
    emoji: "🦣",
    gName: "La Steppe Cendrée",
    dName: "La Steppe Cendrée",
    pool: [
      { name: "Jeune Béhémoth", rank: "S", maxHp: 70, minAtk: 8, maxAtk: 12, xp: 68, img: "behemoth", desc: "Il écrase par accident, s'excuse par écrasement. La Steppe n'a plus de formes." },
      { name: "Mammouth Cendreux", rank: "S", maxHp: 74, minAtk: 7, maxAtk: 11, xp: 66, img: "behemoth", filter: "sepia(0.5) saturate(1.2)", desc: "Sa laine garde la cendre des volcans voisins. Il n'a jamais vu un volcan. La cendre, si." },
      { name: "Vautour Charognard", rank: "S", maxHp: 60, minAtk: 8, maxAtk: 13, xp: 72, img: "behemoth", filter: "brightness(0.85) contrast(1.25)", desc: "Il suit les troupeaux par optimisme. Le troupeau l'a remarqué." },
      { name: "Jeune Béhémoth Alpha", rank: "S", maxHp: 116, minAtk: 10, maxAtk: 14, xp: 120, img: "behemoth", filter: "contrast(1.3) saturate(1.4)", weight: 0.6, desc: "Alpha. Le troupeau marche dans son sillage. Rien d'autre n'y arrive." },
    ],
    elite: [
      { name: "Taureau Séculaire", rank: "S", maxHp: 92, minAtk: 9, maxAtk: 14, xp: 100, img: "behemoth", filter: "saturate(1.5)", desc: "Élite. Ses cornes comptent les siècles comme des anneaux. Elles poussent encore." },
      { name: "Rhinocéros de Cendre", rank: "S", maxHp: 84, minAtk: 8, maxAtk: 13, xp: 96, img: "behemoth", filter: "sepia(0.6) saturate(1.3)", desc: "Élite. Sa charge a une trajectoire et un avis. L'avis change en route." },
      { name: "Loup de la Cendre", rank: "S", maxHp: 78, minAtk: 9, maxAtk: 15, xp: 104, img: "behemoth", filter: "brightness(0.8) contrast(1.3)", desc: "Élite. On ne l'entend jamais venir : la cendre étouffe les bruits, pas les appétits." },
      { name: "Taureau Séculaire Alpha", rank: "S", maxHp: 132, minAtk: 11, maxAtk: 17, xp: 158, img: "behemoth", filter: "saturate(1.6) contrast(1.3)", weight: 0.6, desc: "Alpha élite. La Steppe a déplacé ses chemins autour de lui. C'est plus simple pour tout le monde." },
    ],
    bossG: { name: "Le Béhémoth", rank: "S", maxHp: 215, minAtk: 12, maxAtk: 17, xp: 490, img: "behemoth", crown: true, desc: "Le noyau de la Steppe. Son dos porte une forêt. Elle pousse, elle ne demande rien." },
    bossD: { name: "Le Béhémoth", rank: "S", maxHp: 270, minAtk: 13, maxAtk: 19, xp: 555, img: "behemoth", filter: "sepia(0.4) saturate(1.4) contrast(1.2)", crown: true, desc: "Le noyau de la Steppe. Il ne charge jamais : il avance, et la Steppe s'arrange." },
  },
  {
    id: "roc",
    label: "Volée du Nid",
    emoji: "🦅",
    gName: "Le Nid du Roc",
    dName: "Le Nid du Roc",
    pool: [
      { name: "Poussin du Roc", rank: "S", maxHp: 62, minAtk: 7, maxAtk: 12, xp: 66, img: "roc", desc: "Il n'a pas encore appris à voler. Il a appris à tomber sur les gens, ce qui suffit." },
      { name: "Aigle Tempête", rank: "S", maxHp: 66, minAtk: 8, maxAtk: 13, xp: 70, img: "roc", filter: "hue-rotate(200deg) saturate(1.3)", desc: "Il niche dans les nuages quand il peut. Le Nid garde le silence." },
      { name: "Harfang Géant", rank: "S", maxHp: 60, minAtk: 7, maxAtk: 11, xp: 72, img: "roc", filter: "brightness(0.9) contrast(1.2)", desc: "Son regard lit dans le noir. Ce qu'il y lit ne s'en plaint jamais." },
      { name: "Poussin du Roc Alpha", rank: "S", maxHp: 110, minAtk: 9, maxAtk: 14, xp: 118, img: "roc", filter: "contrast(1.3) saturate(1.5)", weight: 0.6, desc: "Alpha. Son premier envol a duré une journée. Son premier atterrissage aussi." },
    ],
    elite: [
      { name: "Serre-de-Fer", rank: "S", maxHp: 84, minAtk: 9, maxAtk: 14, xp: 98, img: "roc", filter: "saturate(1.5)", desc: "Élite. Ses serres ont trempé dans du métal en fusion. Volontairement, paraît-il." },
      { name: "Gardien du Nid", rank: "S", maxHp: 88, minAtk: 8, maxAtk: 13, xp: 102, img: "roc", filter: "brightness(0.85) contrast(1.3)", desc: "Élite. Il ne quitte jamais le Nid. Le Nid, du coup, ne le quitte pas non plus." },
      { name: "Aigle des Sommets", rank: "S", maxHp: 78, minAtk: 9, maxAtk: 15, xp: 106, img: "roc", filter: "hue-rotate(190deg) saturate(1.4)", desc: "Élite. Il chasse ce qui monte. Les sommets lui envoient du travail régulièrement." },
      { name: "Serre-de-Fer Alpha", rank: "S", maxHp: 128, minAtk: 11, maxAtk: 17, xp: 158, img: "roc", filter: "saturate(1.6) contrast(1.35)", weight: 0.6, desc: "Alpha élite. Le Roc l'a élevé à la dure : en le lâchant très haut. Il a aimé ça." },
    ],
    bossG: { name: "Le Roc", rank: "S", maxHp: 210, minAtk: 11, maxAtk: 16, xp: 485, img: "roc", crown: true, desc: "Le noyau du Nid. Son envergure couvre la météo locale. La météo a renoncé à contester." },
    bossD: { name: "Le Roc", rank: "S", maxHp: 260, minAtk: 12, maxAtk: 18, xp: 545, img: "roc", filter: "hue-rotate(200deg) saturate(1.5) contrast(1.2)", crown: true, desc: "Le noyau du Nid. Quand il passe, l'ombre a la taille d'une région. Les régions vérifient leurs cartes." },
  },
  {
    id: "sphinx",
    label: "Guet du Sphinx",
    emoji: "🦁",
    gName: "Le Guet du Sphinx",
    dName: "Le Guet du Sphinx",
    pool: [
      { name: "Chat Guetteur", rank: "S", maxHp: 58, minAtk: 7, maxAtk: 11, xp: 66, img: "sphinx", desc: "Il pose une seule question : « tu as de la viande ? ». La bonne réponse est oui." },
      { name: "Sphinx des Sables", rank: "S", maxHp: 66, minAtk: 8, maxAtk: 12, xp: 70, img: "sphinx", filter: "sepia(0.5) saturate(1.3)", desc: "Il pose des devinettes faciles pour vous mettre en confiance. La dernière est difficile." },
      { name: "Colosse de Pierre", rank: "S", maxHp: 72, minAtk: 7, maxAtk: 12, xp: 68, img: "sphinx", filter: "brightness(0.9) contrast(1.2)", desc: "Il garde la porte depuis si longtemps qu'il considère la porte comme la sienne." },
      { name: "Chat Guetteur Alpha", rank: "S", maxHp: 104, minAtk: 9, maxAtk: 13, xp: 116, img: "sphinx", filter: "contrast(1.3) saturate(1.4)", weight: 0.6, desc: "Alpha. Ses questions sont devenues des ordres. Tout le monde exécute, faute de réponses." },
    ],
    elite: [
      { name: "Griffon du Guet", rank: "S", maxHp: 86, minAtk: 9, maxAtk: 14, xp: 100, img: "sphinx", filter: "saturate(1.5)", desc: "Élite. Aigle devant, lion derrière. Aucun côté n'est rassurant." },
      { name: "Sphinx Héraut", rank: "S", maxHp: 82, minAtk: 8, maxAtk: 13, xp: 104, img: "sphinx", filter: "sepia(0.6) saturate(1.4)", desc: "Élite. Il annonce les énigmes du Sphinx comme des résultats. Les résultats sont mauvais pour vous." },
      { name: "Guetteur de Pierre", rank: "S", maxHp: 78, minAtk: 9, maxAtk: 14, xp: 106, img: "sphinx", filter: "brightness(0.85) contrast(1.3)", desc: "Élite. Il cligne des yeux une fois par siècle. Le Guet compte les clignements, pas les visiteurs." },
      { name: "Griffon du Guet Alpha", rank: "S", maxHp: 126, minAtk: 11, maxAtk: 16, xp: 156, img: "sphinx", filter: "saturate(1.6) contrast(1.3)", weight: 0.6, desc: "Alpha élite. Le Sphinx lui a confié la question finale. Il la garde : c'est plus cruel." },
    ],
    bossG: { name: "Le Sphinx", rank: "S", maxHp: 205, minAtk: 11, maxAtk: 16, xp: 480, img: "sphinx", crown: true, desc: "Le noyau du Guet. Sa question favorite change avec le siècle. La réponse, jamais." },
    bossD: { name: "Le Sphinx", rank: "S", maxHp: 255, minAtk: 12, maxAtk: 18, xp: 540, img: "sphinx", filter: "sepia(0.5) saturate(1.5) contrast(1.25)", crown: true, desc: "Le noyau du Guet. Répondre juste ne suffit pas : il faut encore survivre au sourire." },
  },
  {
    id: "wendigo",
    label: "Affamés de la Forêt",
    emoji: "🦌",
    gName: "La Forêt du Wendigo",
    dName: "La Forêt du Wendigo",
    pool: [
      { name: "Cerf Blafard", rank: "S", maxHp: 62, minAtk: 7, maxAtk: 12, xp: 66, img: "wendigo", desc: "Ses bois ont poussé en une nuit. Personne ne l'a vu entrer dans la forêt." },
      { name: "Ombre Famélique", rank: "S", maxHp: 58, minAtk: 8, maxAtk: 13, xp: 70, img: "wendigo", filter: "brightness(0.8) contrast(1.3)", desc: "Elle a faim depuis toujours. La faim a fini par lui servir de nom." },
      { name: "Jeune Wendigo", rank: "S", maxHp: 68, minAtk: 8, maxAtk: 12, xp: 72, img: "wendigo", filter: "sepia(0.3) saturate(1.2)", desc: "Il grandit à chaque repas. Les repas sont rares. Lui, non." },
      { name: "Cerf Blafard Alpha", rank: "S", maxHp: 108, minAtk: 9, maxAtk: 14, xp: 118, img: "wendigo", filter: "contrast(1.35) saturate(1.3)", weight: 0.6, desc: "Alpha. La forêt retient son souffle quand il passe. Elle a raison de le faire." },
    ],
    elite: [
      { name: "Croque-Nuit", rank: "S", maxHp: 84, minAtk: 9, maxAtk: 15, xp: 102, img: "wendigo", filter: "saturate(1.5)", desc: "Élite. Il ne chasse pas : il attend que la faim des autres les ramène en forêt." },
      { name: "Brume Affamée", rank: "S", maxHp: 80, minAtk: 8, maxAtk: 13, xp: 98, img: "wendigo", filter: "brightness(0.85) saturate(1.2)", desc: "Élite. Elle mange les adieux et les dettes. Les villageois la nourrissent sans le savoir." },
      { name: "Wendigo Grinçant", rank: "S", maxHp: 86, minAtk: 9, maxAtk: 14, xp: 106, img: "wendigo", filter: "hue-rotate(180deg) saturate(1.3)", desc: "Élite. Ses articulations grincent à des kilomètres. La forêt fait mine de ne pas entendre." },
      { name: "Croque-Nuit Alpha", rank: "S", maxHp: 128, minAtk: 11, maxAtk: 17, xp: 158, img: "wendigo", filter: "saturate(1.6) contrast(1.35)", weight: 0.6, desc: "Alpha élite. Le Wendigo l'a recruté en le regardant manger. L'entretien a été bref." },
    ],
    bossG: { name: "Le Wendigo", rank: "S", maxHp: 210, minAtk: 12, maxAtk: 17, xp: 490, img: "wendigo", crown: true, desc: "Le noyau de la Forêt. Il fut un chasseur comme vous. La faim a corrigé le détail." },
    bossD: { name: "Le Wendigo", rank: "S", maxHp: 265, minAtk: 13, maxAtk: 19, xp: 550, img: "wendigo", filter: "brightness(0.8) saturate(1.5) contrast(1.25)", crown: true, desc: "Le noyau de la Forêt. Il ne court jamais : la forêt raccourcit les chemins pour lui." },
  },
  {
    id: "tarasque",
    label: "Engeance du Marais",
    emoji: "🐢",
    gName: "Le Marais de la Tarasque",
    dName: "Le Marais de la Tarasque",
    pool: [
      { name: "Jeune Tarasque", rank: "S", maxHp: 70, minAtk: 8, maxAtk: 12, xp: 68, img: "tarasque", desc: "Toute sa carapace tient dans une main. La main, ensuite, n'est plus à personne." },
      { name: "Lézard Bourbeux", rank: "S", maxHp: 62, minAtk: 7, maxAtk: 11, xp: 66, img: "tarasque", filter: "sepia(0.4) saturate(1.2)", desc: "Il se fond dans la boue. La boue ne demande pas mieux." },
      { name: "Croc des Roseaux", rank: "S", maxHp: 64, minAtk: 8, maxAtk: 13, xp: 72, img: "tarasque", filter: "hue-rotate(90deg) saturate(1.2)", desc: "Il attend sous la surface que les grenouilles cessent de compter. Il a le temps." },
      { name: "Jeune Tarasque Alpha", rank: "S", maxHp: 114, minAtk: 10, maxAtk: 14, xp: 120, img: "tarasque", filter: "contrast(1.3) saturate(1.4)", weight: 0.6, desc: "Alpha. Le Marais a déplacé ses roseaux autour de lui. Les roseaux ne discutent pas." },
    ],
    elite: [
      { name: "Carapace Épineuse", rank: "S", maxHp: 88, minAtk: 8, maxAtk: 13, xp: 100, img: "tarasque", filter: "saturate(1.5)", desc: "Élite. On la croit à l'abri. Elle croit pareil pour vous. Une des deux a raison." },
      { name: "Broie-Roseaux", rank: "S", maxHp: 84, minAtk: 9, maxAtk: 14, xp: 98, img: "tarasque", filter: "sepia(0.5) saturate(1.4)", desc: "Élite. Le Marais se referme sur son passage. Sans formes." },
      { name: "Guetteuse du Marais", rank: "S", maxHp: 80, minAtk: 9, maxAtk: 15, xp: 104, img: "tarasque", filter: "hue-rotate(100deg) saturate(1.3)", desc: "Élite. Elle ne respire pas souvent. Le Marais profite de ses apnées pour se taire." },
      { name: "Carapace Épineuse Alpha", rank: "S", maxHp: 130, minAtk: 11, maxAtk: 17, xp: 158, img: "tarasque", filter: "saturate(1.6) contrast(1.3)", weight: 0.6, desc: "Alpha élite. Sa carapace a déjà supporté la Mère. Elle en garde l'assurance." },
    ],
    bossG: { name: "La Tarasque", rank: "S", maxHp: 215, minAtk: 12, maxAtk: 17, xp: 490, img: "tarasque", crown: true, desc: "Le noyau du Marais. Six pattes, une carapace, zéro conversation. Le Marais la respecte pour ça." },
    bossD: { name: "La Tarasque", rank: "S", maxHp: 270, minAtk: 13, maxAtk: 19, xp: 555, img: "tarasque", filter: "sepia(0.4) saturate(1.5) contrast(1.2)", crown: true, desc: "Le noyau du Marais. La légende dit qu'une sainte l'a domptée. La légende n'est pas venue la chercher." },
  },
  {
    id: "milles",
    label: "Gueule de la Chasse",
    emoji: "🦷",
    gName: "La Chasse Gourmande",
    dName: "La Chasse Gourmande",
    pool: [
      { name: "Croc Errant", rank: "S", maxHp: 60, minAtk: 7, maxAtk: 12, xp: 66, img: "milles", desc: "Une dent perdue qui a continué seule. Le reste de la bête est en route." },
      { name: "Chasseur Gourmand", rank: "S", maxHp: 66, minAtk: 8, maxAtk: 13, xp: 70, img: "milles", filter: "sepia(0.4) saturate(1.3)", desc: "Il note chaque proie dans un carnet. Le carnet est plein de ratures appétissantes." },
      { name: "Bavant de la Gueule", rank: "S", maxHp: 64, minAtk: 8, maxAtk: 12, xp: 72, img: "milles", filter: "brightness(0.85) contrast(1.25)", desc: "Il salive en avançant. La Chasse considère ça de la ponctualité." },
      { name: "Croc Errant Alpha", rank: "S", maxHp: 108, minAtk: 9, maxAtk: 14, xp: 118, img: "milles", filter: "contrast(1.35) saturate(1.4)", weight: 0.6, desc: "Alpha. Il a compté ses dents : cent quarante. Son ambition est chiffrée." },
    ],
    elite: [
      { name: "Mâchoire Ouvrière", rank: "S", maxHp: 86, minAtk: 9, maxAtk: 15, xp: 102, img: "milles", filter: "saturate(1.5)", desc: "Élite. Elle broie pour la Bête, la Bête avale. L'entente est à sens unique." },
      { name: "Traqueur de la Chasse", rank: "S", maxHp: 82, minAtk: 8, maxAtk: 14, xp: 98, img: "milles", filter: "sepia(0.5) saturate(1.3)", desc: "Élite. Il connaît la Chasse par cœur : il en a écrit les règles. Il les bricole aussi." },
      { name: "Croqueur de Talons", rank: "S", maxHp: 78, minAtk: 9, maxAtk: 14, xp: 106, img: "milles", filter: "hue-rotate(300deg) saturate(1.3)", desc: "Élite. Il mord les talons pour ralentir la proie. La Bête apprécie le travail soigné." },
      { name: "Mâchoire Ouvrière Alpha", rank: "S", maxHp: 128, minAtk: 11, maxAtk: 17, xp: 158, img: "milles", filter: "saturate(1.6) contrast(1.35)", weight: 0.6, desc: "Alpha élite. La Bête lui a prêté cent dents pour l'entretien. Il ne les a jamais rendues." },
    ],
    bossG: { name: "La Bête aux Mille Dents", rank: "S", maxHp: 210, minAtk: 12, maxAtk: 17, xp: 485, img: "milles", crown: true, desc: "Le noyau de la Chasse. Chaque dent porte un numéro. La mille première pousse ce soir." },
    bossD: { name: "La Bête aux Mille Dents", rank: "S", maxHp: 260, minAtk: 13, maxAtk: 19, xp: 545, img: "milles", filter: "sepia(0.3) saturate(1.5) contrast(1.25)", crown: true, desc: "Le noyau de la Chasse. Elle ne court pas après vous : elle vous laisse courir, c'est le menu." },
  },
  {
    id: "basilic",
    label: "Rejetons de la Serre",
    emoji: "🐍",
    gName: "La Serre du Basilic",
    dName: "La Serre du Basilic",
    pool: [
      { name: "Jeune Basilic", rank: "S", maxHp: 62, minAtk: 7, maxAtk: 11, xp: 66, img: "basilic", desc: "Son regard pétrifie les insectes. Il s'entraîne sur plus gros, un client à la fois." },
      { name: "Vipère au Regard Lourd", rank: "S", maxHp: 66, minAtk: 8, maxAtk: 12, xp: 70, img: "basilic", filter: "hue-rotate(90deg) saturate(1.2)", desc: "Son regard pèse. Les mouches tombent avant d'avoir compris." },
      { name: "Lézard Siffleur", rank: "S", maxHp: 60, minAtk: 8, maxAtk: 13, xp: 72, img: "basilic", filter: "sepia(0.4) saturate(1.3)", desc: "Son sifflement s'entend avant qu'il ne frappe. Après aussi, mais pour d'autres raisons." },
      { name: "Jeune Basilic Alpha", rank: "S", maxHp: 110, minAtk: 9, maxAtk: 14, xp: 118, img: "basilic", filter: "contrast(1.3) saturate(1.5)", weight: 0.6, desc: "Alpha. Il a pétrifié son propre reflet. Le reflet a pétrifié le reste de la flaque." },
    ],
    elite: [
      { name: "Cockratice", rank: "S", maxHp: 84, minAtk: 9, maxAtk: 14, xp: 100, img: "basilic", filter: "saturate(1.5)", desc: "Élite. Coq devant, serpent derrière, mauvaise humeur partout. Le vol est court, la morsure non." },
      { name: "Serpent Couronné", rank: "S", maxHp: 88, minAtk: 8, maxAtk: 13, xp: 98, img: "basilic", filter: "hue-rotate(60deg) saturate(1.4)", desc: "Élite. Sa couronne n'est pas décorative : les têtes des visiteurs y figurent en abrégé." },
      { name: "Gardien de la Serre", rank: "S", maxHp: 78, minAtk: 9, maxAtk: 15, xp: 106, img: "basilic", filter: "brightness(0.85) contrast(1.3)", desc: "Élite. Il ne cligne jamais. Les statues de la Serre non plus, et pour cause." },
      { name: "Cockratice Alpha", rank: "S", maxHp: 126, minAtk: 11, maxAtk: 16, xp: 156, img: "basilic", filter: "saturate(1.6) contrast(1.3)", weight: 0.6, desc: "Alpha élite. Le Basilic l'a regardé une fois, par distraction. Il a fallu un quart d'heure." },
    ],
    bossG: { name: "Le Basilic", rank: "S", maxHp: 205, minAtk: 11, maxAtk: 16, xp: 480, img: "basilic", crown: true, desc: "Le noyau de la Serre. Son regard trie les visiteurs en deux piles : les statues et les candidats." },
    bossD: { name: "Le Basilic", rank: "S", maxHp: 255, minAtk: 12, maxAtk: 18, xp: 540, img: "basilic", filter: "hue-rotate(90deg) saturate(1.5) contrast(1.25)", crown: true, desc: "Le noyau de la Serre. Il vous fixe depuis votre arrivée. Techniquement, depuis avant." },
  },
];

/* ==================== FAMILLES RANG SS — LES ABERRATIONS DU VIDE (10) ====================
   Choix de Maximilien (14/11/2026) : les Portes de rang SS tirent EXCLUSIVEMENT ici.
   Même architecture que FAMILIES_A/_S : pool/bossG = gabarits de repli (jamais tirés
   en SS, qui referme sur bossD via genRooms), stats brutes calibrées sur les rangs
   A/S, TIER_SCALE.SS (x4,8 PV / x3 atq / x25 EXP) fait la montée en puissance. */
const FAMILIES_SS: Family[] = [
  {
    id: "astre",
    label: "Couvée de l'Astre",
    emoji: "🌟",
    gName: "L'Observatoire Englouti",
    dName: "L'Observatoire Englouti",
    pool: [
      { name: "Éclat du Vorace", rank: "SS", maxHp: 64, minAtk: 7, maxAtk: 11, xp: 66, img: "astre", desc: "Un morceau d'étoile tombé de la bouche de l'Astre. Il brille encore de l'envie de remonter." },
      { name: "Nuée de Poussière", rank: "SS", maxHp: 72, minAtk: 8, maxAtk: 12, xp: 70, img: "astre", filter: "sepia(0.4) saturate(1.3)", desc: "Elle suit l'Astre comme une promesse non tenue. La promesse, c'était vous." },
      { name: "Satellite Aveugle", rank: "SS", maxHp: 66, minAtk: 7, maxAtk: 12, xp: 72, img: "astre", filter: "brightness(0.85) contrast(1.25)", desc: "Il orbite autour de rien depuis des siècles. L'Observatoire l'a adopté par pitié." },
      { name: "Éclat du Vorace Alpha", rank: "SS", maxHp: 112, minAtk: 9, maxAtk: 14, xp: 120, img: "astre", filter: "contrast(1.3) saturate(1.5)", weight: 0.6, desc: "Alpha. Il brille plus fort que le reste de la Couvée. L'Astre le tient pour un apéritif." },
    ],
    elite: [
      { name: "Sillon Gravitique", rank: "SS", maxHp: 84, minAtk: 8, maxAtk: 12, xp: 96, img: "astre", filter: "saturate(1.5)", desc: "Élite. Il creuse des sillons dans la gravité. Les visiteurs y tombent en écoutant." },
      { name: "Œil du Vorace", rank: "SS", maxHp: 92, minAtk: 9, maxAtk: 14, xp: 102, img: "astre", filter: "hue-rotate(-25deg) saturate(1.4)", desc: "Élite. Il se tourne toujours vers vous. Pas par intérêt : par appétit." },
      { name: "Pupille Engloutie", rank: "SS", maxHp: 80, minAtk: 8, maxAtk: 13, xp: 104, img: "astre", filter: "brightness(0.9) saturate(1.6)", desc: "Élite. L'Observatoire l'a cherchée des décennies. Elle attendait sous l'eau, patiente." },
      { name: "Sillon Gravitique Alpha", rank: "SS", maxHp: 130, minAtk: 11, maxAtk: 16, xp: 158, img: "astre", filter: "saturate(1.7) contrast(1.25)", weight: 0.6, desc: "Alpha élite. L'Astre l'a mis en orbite une fois. L'orbite s'en excuse encore." },
    ],
    bossG: { name: "L'Astre Vorace", rank: "SS", maxHp: 215, minAtk: 12, maxAtk: 17, xp: 500, img: "astre", crown: true, desc: "Le noyau de l'Observatoire. Les télescopes l'ont cherché partout. C'est lui qui les a engloutis." },
    bossD: { name: "L'Astre Vorace", rank: "SS", maxHp: 265, minAtk: 13, maxAtk: 19, xp: 560, img: "astre", filter: "hue-rotate(-30deg) saturate(1.5) contrast(1.2)", crown: true, desc: "Le noyau de l'Observatoire. Il a faim depuis la naissance de la lumière, et la lumière est servie." },
  },
  {
    id: "regard",
    label: "Chœur des Regards",
    emoji: "👁️",
    gName: "Le Grand Silence",
    dName: "Le Grand Silence",
    pool: [
      { name: "Œil Flottant", rank: "SS", maxHp: 62, minAtk: 7, maxAtk: 11, xp: 66, img: "regard", desc: "Il vous fixe. Si vous le fixez en retour, vous perdez. Personne n'explique les règles." },
      { name: "Chuchoteur du Silence", rank: "SS", maxHp: 66, minAtk: 8, maxAtk: 12, xp: 70, img: "regard", filter: "hue-rotate(90deg) saturate(1.2)", desc: "Il chuchote ce que vous pensiez à voix haute. C'était mieux dans votre tête." },
      { name: "Prêcheur Muet", rank: "SS", maxHp: 60, minAtk: 7, maxAtk: 12, xp: 72, img: "regard", filter: "brightness(0.8) contrast(1.3)", desc: "Il prêche l'arrêt de toute parole, avec conviction. Le geste est éloquent." },
      { name: "Œil Flottant Alpha", rank: "SS", maxHp: 108, minAtk: 9, maxAtk: 14, xp: 118, img: "regard", filter: "contrast(1.3) saturate(1.4)", weight: 0.6, desc: "Alpha. Il ne cligne jamais. Les autres ont arrêté de compter, par superstition." },
    ],
    elite: [
      { name: "Chœur d'Yeux", rank: "SS", maxHp: 86, minAtk: 9, maxAtk: 14, xp: 100, img: "regard", filter: "saturate(1.5)", desc: "Élite. La chorale regarde mieux qu'elle ne chante. C'est déjà trop." },
      { name: "Sentinelle Muette", rank: "SS", maxHp: 82, minAtk: 8, maxAtk: 13, xp: 104, img: "regard", filter: "brightness(0.85) contrast(1.3)", desc: "Élite. Elle garde le Silence. Le Silence ne fait pas de bruit pour protester." },
      { name: "Miroir du Regard", rank: "SS", maxHp: 78, minAtk: 9, maxAtk: 13, xp: 106, img: "regard", filter: "hue-rotate(180deg) saturate(1.3)", desc: "Élite. Il montre ce que ça fait, d'être regardé de l'intérieur. La vue est mauvaise." },
      { name: "Chœur d'Yeux Alpha", rank: "SS", maxHp: 128, minAtk: 11, maxAtk: 16, xp: 156, img: "regard", filter: "saturate(1.6) contrast(1.35)", weight: 0.6, desc: "Alpha élite. Le Grand Silence l'écoute avec attention. C'est son seul point faible : il écoute." },
    ],
    bossG: { name: "Celui-Qui-Regarde", rank: "SS", maxHp: 210, minAtk: 12, maxAtk: 17, xp: 490, img: "regard", crown: true, desc: "Le noyau du Silence. Il vous observe depuis avant votre naissance. Le dossier est épais." },
    bossD: { name: "Celui-Qui-Regarde", rank: "SS", maxHp: 260, minAtk: 13, maxAtk: 19, xp: 550, img: "regard", filter: "hue-rotate(180deg) saturate(1.4)", crown: true, desc: "Le noyau du Silence. Tourner le dos ne sert à rien : il a déjà lu la suite." },
  },
  {
    id: "maelstrom",
    label: "Courants du Zéro",
    emoji: "🌀",
    gName: "Le Point Zéro",
    dName: "Le Point Zéro",
    pool: [
      { name: "Remous Éveillé", rank: "SS", maxHp: 60, minAtk: 7, maxAtk: 12, xp: 66, img: "maelstrom", desc: "Un tourbillon de baignoire devenu pensant. Il ne s'est jamais remis de l'ampleur." },
      { name: "Courant Menteur", rank: "SS", maxHp: 68, minAtk: 8, maxAtk: 12, xp: 68, img: "maelstrom", filter: "hue-rotate(150deg) saturate(1.2)", desc: "Il affiche la sortie. Les flèches tournent avec lui." },
      { name: "Spirale Chanteuse", rank: "SS", maxHp: 64, minAtk: 8, maxAtk: 13, xp: 72, img: "maelstrom", filter: "brightness(0.85) contrast(1.25)", desc: "Sa chanson donne le vertige, puis l'envie, puis plus rien du tout." },
      { name: "Remous Éveillé Alpha", rank: "SS", maxHp: 110, minAtk: 9, maxAtk: 14, xp: 118, img: "maelstrom", filter: "contrast(1.3) saturate(1.5)", weight: 0.6, desc: "Alpha. Il tourne dans l'autre sens depuis son élévation. Personne ne commente." },
    ],
    elite: [
      { name: "Vortex du Zéro", rank: "SS", maxHp: 88, minAtk: 8, maxAtk: 13, xp: 100, img: "maelstrom", filter: "saturate(1.5)", desc: "Élite. Ce qui entre ne sort pas. Ce qui sort n'était pas entré. Ne posez pas la question." },
      { name: "Gouffre Choral", rank: "SS", maxHp: 84, minAtk: 9, maxAtk: 14, xp: 98, img: "maelstrom", filter: "hue-rotate(200deg) saturate(1.3)", desc: "Élite. Il imite la voix des engloutis. Le répertoire s'étoffe à chaque visite." },
      { name: "Anneau de Refus", rank: "SS", maxHp: 80, minAtk: 9, maxAtk: 14, xp: 106, img: "maelstrom", filter: "brightness(0.9) contrast(1.3)", desc: "Élite. Il rejette tout ce qu'on lui donne, y compris les excuses." },
      { name: "Vortex du Zéro Alpha", rank: "SS", maxHp: 128, minAtk: 11, maxAtk: 17, xp: 158, img: "maelstrom", filter: "saturate(1.6) contrast(1.3)", weight: 0.6, desc: "Alpha élite. Le Point Zéro l'a accepté en son centre. C'était le seul poste vacant." },
    ],
    bossG: { name: "Le Maelström Pensant", rank: "SS", maxHp: 215, minAtk: 12, maxAtk: 17, xp: 490, img: "maelstrom", crown: true, desc: "Le noyau du Point Zéro. Il réfléchit en spirale. Vos arguments arrivent pré-tournés." },
    bossD: { name: "Le Maelström Pensant", rank: "SS", maxHp: 265, minAtk: 13, maxAtk: 19, xp: 550, img: "maelstrom", filter: "hue-rotate(190deg) saturate(1.5) contrast(1.2)", crown: true, desc: "Le noyau du Point Zéro. Il a réfléchi à votre cas. La conclusion tourne encore." },
  },
  {
    id: "devoreur",
    label: "Affamés du Néant",
    emoji: "🕳️",
    gName: "La Couvée du Néant",
    dName: "La Couvée du Néant",
    pool: [
      { name: "Larve du Néant", rank: "SS", maxHp: 62, minAtk: 7, maxAtk: 11, xp: 66, img: "devoreur", desc: "Elle vient d'éclore et a déjà faim. La Couvée prépare la suite, qui a faim aussi." },
      { name: "Goinfre Stellaire", rank: "SS", maxHp: 70, minAtk: 8, maxAtk: 12, xp: 70, img: "devoreur", filter: "sepia(0.5) saturate(1.2)", desc: "Il mange les étoiles comme des graines. Il crache les pépins : ce sont les lunes." },
      { name: "Teigne d'Étoile", rank: "SS", maxHp: 66, minAtk: 8, maxAtk: 13, xp: 72, img: "devoreur", filter: "brightness(0.85) contrast(1.25)", desc: "Elle ronge les constellations. Les astronomes notent des disparitions, pas des excuses." },
      { name: "Larve du Néant Alpha", rank: "SS", maxHp: 112, minAtk: 10, maxAtk: 14, xp: 120, img: "devoreur", filter: "contrast(1.35) saturate(1.4)", weight: 0.6, desc: "Alpha. La Couvée l'a mis à l'écart : il mangeait les portions des autres. Et les autres." },
    ],
    elite: [
      { name: "Ronge-Monde", rank: "SS", maxHp: 86, minAtk: 9, maxAtk: 14, xp: 100, img: "devoreur", filter: "saturate(1.5)", desc: "Élite. Il commence par les bords. Les bords du monde tiennent mal, paraît-il." },
      { name: "Affamé du Vide", rank: "SS", maxHp: 90, minAtk: 8, maxAtk: 13, xp: 102, img: "devoreur", filter: "hue-rotate(250deg) saturate(1.3)", desc: "Élite. Il a mangé son propre nom. Ses pairs l'appellent d'un signe, par prudence." },
      { name: "Couvée Éclose", rank: "SS", maxHp: 78, minAtk: 9, maxAtk: 14, xp: 106, img: "devoreur", filter: "brightness(0.8) contrast(1.3)", desc: "Élite. Une famille de larves qui fait bloc. Le bloc a des dents au centre." },
      { name: "Ronge-Monde Alpha", rank: "SS", maxHp: 130, minAtk: 11, maxAtk: 17, xp: 158, img: "devoreur", filter: "saturate(1.6) contrast(1.35)", weight: 0.6, desc: "Alpha élite. Le Dévoreur grignote à sa table. La table est un monde, à la fin du repas." },
    ],
    bossG: { name: "Le Dévoreur d'Étoiles", rank: "SS", maxHp: 210, minAtk: 12, maxAtk: 17, xp: 490, img: "devoreur", crown: true, desc: "Le noyau de la Couvée. Il a faim. Ce détail n'a jamais changé, et tout le reste s'adapte." },
    bossD: { name: "Le Dévoreur d'Étoiles", rank: "SS", maxHp: 260, minAtk: 13, maxAtk: 19, xp: 550, img: "devoreur", filter: "hue-rotate(240deg) saturate(1.4) contrast(1.2)", crown: true, desc: "Le noyau de la Couvée. Les étoiles mortes sont un menu. Vous êtes une réservation." },
  },
  {
    id: "prophete",
    label: "Chantres des Signes",
    emoji: "🔮",
    gName: "La Cathédrale des Signes",
    dName: "La Cathédrale des Signes",
    pool: [
      { name: "Porteur de Présage", rank: "SS", maxHp: 58, minAtk: 7, maxAtk: 11, xp: 66, img: "prophete", desc: "Il annonce des catastrophes. Il a toujours raison, jamais en avance — juste au bon moment pour lui." },
      { name: "Scribe Averni", rank: "SS", maxHp: 66, minAtk: 8, maxAtk: 12, xp: 70, img: "prophete", filter: "sepia(0.5) saturate(1.2)", desc: "Il écrit l'avenir à l'envers. Les lecteurs prudents commencent par la fin." },
      { name: "Chantre des Signes", rank: "SS", maxHp: 60, minAtk: 8, maxAtk: 13, xp: 72, img: "prophete", filter: "brightness(0.85) contrast(1.2)", desc: "Il psalmodie des signes que personne ne lit plus. La Cathédrale tient à la tradition." },
      { name: "Porteur de Présage Alpha", rank: "SS", maxHp: 104, minAtk: 9, maxAtk: 13, xp: 116, img: "prophete", filter: "contrast(1.3) saturate(1.4)", weight: 0.6, desc: "Alpha. Ses présages arrivent à l'heure. C'est ça, l'insupportable." },
    ],
    elite: [
      { name: "Exégète du Ver", rank: "SS", maxHp: 84, minAtk: 9, maxAtk: 14, xp: 100, img: "prophete", filter: "saturate(1.5)", desc: "Élite. Il interprète les signes. L'interprétation vous est défavorable, signée de sa main." },
      { name: "Thuriféraire du Signe", rank: "SS", maxHp: 82, minAtk: 8, maxAtk: 13, xp: 104, img: "prophete", filter: "sepia(0.6) saturate(1.4)", desc: "Élite. Sa fumée dessine des augures. Les augures demandent qu'on ouvre la fenêtre." },
      { name: "Annonciateur", rank: "SS", maxHp: 78, minAtk: 9, maxAtk: 15, xp: 106, img: "prophete", filter: "hue-rotate(280deg) saturate(1.3)", desc: "Élite. Il n'annonce que des débuts. Les fins, il les laisse découvrir sur place." },
      { name: "Exégète du Ver Alpha", rank: "SS", maxHp: 126, minAtk: 11, maxAtk: 16, xp: 156, img: "prophete", filter: "saturate(1.6) contrast(1.3)", weight: 0.6, desc: "Alpha élite. Le Prophète corrige ses prophéties après coup. Lui, il corrige avant." },
    ],
    bossG: { name: "Le Prophète Averni", rank: "SS", maxHp: 205, minAtk: 11, maxAtk: 16, xp: 480, img: "prophete", crown: true, desc: "Le noyau de la Cathédrale. Il a prédit votre venue à la seconde près. La suite est affichée quelque part." },
    bossD: { name: "Le Prophète Averni", rank: "SS", maxHp: 255, minAtk: 12, maxAtk: 18, xp: 540, img: "prophete", filter: "hue-rotate(270deg) saturate(1.5) contrast(1.25)", crown: true, desc: "Le noyau de la Cathédrale. Ses signes ne mentent jamais. Ils choisissent leur lecteur — et ils vous ont choisi." },
  },
  {
    id: "instant",
    label: "Gardes de l'Horloge",
    emoji: "⏳",
    gName: "L'Horloge Fêlée",
    dName: "L'Horloge Fêlée",
    pool: [
      { name: "Pendule Vivante", rank: "SS", maxHp: 62, minAtk: 7, maxAtk: 12, xp: 66, img: "instant", desc: "Elle bat la mesure depuis des siècles. La mesure bat un peu tout le monde." },
      { name: "Rémonteur Zélé", rank: "SS", maxHp: 68, minAtk: 8, maxAtk: 12, xp: 68, img: "instant", filter: "sepia(0.4) saturate(1.3)", desc: "Il remonte tout ce qui bouge, y compris les visiteurs fatigués. Résultat mitigé." },
      { name: "Balancier Fou", rank: "SS", maxHp: 60, minAtk: 8, maxAtk: 13, xp: 72, img: "instant", filter: "brightness(0.85) contrast(1.3)", desc: "Il oscille dans le sens du temps. Parfois il revient chercher les retardataires." },
      { name: "Pendule Vivante Alpha", rank: "SS", maxHp: 108, minAtk: 9, maxAtk: 14, xp: 118, img: "instant", filter: "contrast(1.3) saturate(1.5)", weight: 0.6, desc: "Alpha. Elle tictaque en avance. Les voix du futur passent en coup de vent." },
    ],
    elite: [
      { name: "Horloger Fêlé", rank: "SS", maxHp: 86, minAtk: 9, maxAtk: 14, xp: 100, img: "instant", filter: "saturate(1.5)", desc: "Élite. Il répare les fissures du temps avec du temps. Le devis n'existe pas." },
      { name: "Garde-Minute", rank: "SS", maxHp: 90, minAtk: 8, maxAtk: 13, xp: 102, img: "instant", filter: "sepia(0.5) saturate(1.4)", desc: "Élite. Une minute de retard lui coûte une heure. Il en fait payer le port." },
      { name: "Échappement Mu", rank: "SS", maxHp: 78, minAtk: 9, maxAtk: 14, xp: 106, img: "instant", filter: "brightness(0.8) contrast(1.35)", desc: "Élite. Il s'échappe de l'Horloge en silence. Le silence, lui, reste en garantie." },
      { name: "Horloger Fêlé Alpha", rank: "SS", maxHp: 128, minAtk: 11, maxAtk: 17, xp: 158, img: "instant", filter: "saturate(1.6) contrast(1.35)", weight: 0.6, desc: "Alpha élite. Le Gardien l'a corrigé une fois. La correction a pris trois futurs." },
    ],
    bossG: { name: "Le Gardien des Instants", rank: "SS", maxHp: 210, minAtk: 12, maxAtk: 17, xp: 490, img: "instant", crown: true, desc: "Le noyau de l'Horloge. Il compte vos secondes une à une. Il en reste moins que l'affichage ne le promet." },
    bossD: { name: "Le Gardien des Instants", rank: "SS", maxHp: 260, minAtk: 13, maxAtk: 19, xp: 550, img: "instant", filter: "sepia(0.4) saturate(1.5) contrast(1.25)", crown: true, desc: "Le noyau de l'Horloge. La fissure l'a rendu double : il frappe deux fois. C'est l'heure, deux fois." },
  },
  {
    id: "nuit",
    label: "Engeance du Voile",
    emoji: "🌑",
    gName: "Le Voile Percé",
    dName: "Le Voile Percé",
    pool: [
      { name: "Silhouette Noire", rank: "SS", maxHp: 58, minAtk: 7, maxAtk: 12, xp: 66, img: "nuit", desc: "Elle passe derrière vous. Puis devant. Le déplacement n'a utilisé aucun chemin." },
      { name: "Coupe-Voile", rank: "SS", maxHp: 66, minAtk: 8, maxAtk: 12, xp: 70, img: "nuit", filter: "brightness(0.8) contrast(1.3)", desc: "Il découpe des trous dans le Voile. La lumière qui entre ressort déçue." },
      { name: "Pique-Trou", rank: "SS", maxHp: 62, minAtk: 8, maxAtk: 13, xp: 72, img: "nuit", filter: "sepia(0.3) saturate(1.2)", desc: "Il perce le Voile pour regarder dehors. Dehors, il n'y a rien. Il continue, par principe." },
      { name: "Silhouette Noire Alpha", rank: "SS", maxHp: 106, minAtk: 9, maxAtk: 14, xp: 116, img: "nuit", filter: "contrast(1.35) saturate(1.3)", weight: 0.6, desc: "Alpha. Elle est si noire que la nuit la contourne. Par respect, disent les trous." },
    ],
    elite: [
      { name: "Tisseuse d'Obscurité", rank: "SS", maxHp: 84, minAtk: 9, maxAtk: 14, xp: 98, img: "nuit", filter: "saturate(1.4)", desc: "Élite. Elle raccommode le Voile avec du noir plus noir. Le fil est garanti à vie." },
      { name: "Faille Vivante", rank: "SS", maxHp: 88, minAtk: 8, maxAtk: 13, xp: 102, img: "nuit", filter: "brightness(0.85) contrast(1.3)", desc: "Élite. Elle s'ouvre en saluant. Personne n'a jamais vu le fond de la politesse." },
      { name: "Guetteur du Percé", rank: "SS", maxHp: 78, minAtk: 9, maxAtk: 15, xp: 106, img: "nuit", filter: "hue-rotate(200deg) saturate(1.3)", desc: "Élite. Il monte la garde au bord du trou. Le trou monte la garde en lui." },
      { name: "Tisseuse d'Obscurité Alpha", rank: "SS", maxHp: 126, minAtk: 11, maxAtk: 16, xp: 156, img: "nuit", filter: "saturate(1.5) contrast(1.35)", weight: 0.6, desc: "Alpha élite. La Nuit porte ses retouches. Le Voile ne peut pas dire le contraire." },
    ],
    bossG: { name: "La Nuit Entière", rank: "SS", maxHp: 210, minAtk: 12, maxAtk: 17, xp: 490, img: "nuit", crown: true, desc: "Le noyau du Voile. Elle commence quand le jour se ferme, et ne demande jamais la relève." },
    bossD: { name: "La Nuit Entière", rank: "SS", maxHp: 260, minAtk: 13, maxAtk: 19, xp: 550, img: "nuit", filter: "brightness(0.75) saturate(1.5) contrast(1.25)", crown: true, desc: "Le noyau du Voile. Le trou qu'elle a percé a des étoiles au fond. Elles regardent, elles aussi." },
  },
  {
    id: "faucheur",
    label: "Moisson Froid",
    emoji: "🌾",
    gName: "La Moisson Froide",
    dName: "La Moisson Froide",
    pool: [
      { name: "Moissonneur Chétif", rank: "SS", maxHp: 62, minAtk: 7, maxAtk: 11, xp: 66, img: "faucheur", desc: "Il n'a reçu qu'un manche. La lame viendra avec l'ancienneté." },
      { name: "Spectre de Chaume", rank: "SS", maxHp: 66, minAtk: 8, maxAtk: 12, xp: 70, img: "faucheur", filter: "sepia(0.5) saturate(1.2)", desc: "Il hante les champs gelés. Les champs, eux, hantent l'idée d'une récolte." },
      { name: "Compte-Champs", rank: "SS", maxHp: 60, minAtk: 8, maxAtk: 13, xp: 72, img: "faucheur", filter: "brightness(0.85) contrast(1.25)", desc: "Il compte les épis un par un. Le total change quand il s'approche. Coïncidence." },
      { name: "Moissonneur Chétif Alpha", rank: "SS", maxHp: 108, minAtk: 9, maxAtk: 14, xp: 118, img: "faucheur", filter: "contrast(1.3) saturate(1.4)", weight: 0.6, desc: "Alpha. Sa faux a enfin une lame. Il s'entraîne sur les adieux." },
    ],
    elite: [
      { name: "Faucheur Vétéran", rank: "SS", maxHp: 88, minAtk: 9, maxAtk: 14, xp: 100, img: "faucheur", filter: "saturate(1.4)", desc: "Élite. Il a ratissé des générations. Le geste est parfait, l'enthousiasme intact." },
      { name: "Meule d'Âmes", rank: "SS", maxHp: 82, minAtk: 8, maxAtk: 13, xp: 104, img: "faucheur", filter: "sepia(0.6) saturate(1.3)", desc: "Élite. Elle tourne lentement, pour moudre sans rien perdre. Rien ne se perd, tout s'ajoute." },
      { name: "Semeur de Glas", rank: "SS", maxHp: 78, minAtk: 9, maxAtk: 14, xp: 106, img: "faucheur", filter: "hue-rotate(180deg) saturate(1.3)", desc: "Élite. Il sème du froid. La Moisson lève très tôt pour tout faucher avant l'aube." },
      { name: "Faucheur Vétéran Alpha", rank: "SS", maxHp: 128, minAtk: 11, maxAtk: 17, xp: 158, img: "faucheur", filter: "saturate(1.5) contrast(1.35)", weight: 0.6, desc: "Alpha élite. Le Grand Faucheur lui cède les bons champs. Il les rend fauchés." },
    ],
    bossG: { name: "Le Grand Faucheur", rank: "SS", maxHp: 215, minAtk: 12, maxAtk: 17, xp: 490, img: "faucheur", crown: true, desc: "Le noyau de la Moisson. Il ne se presse jamais : le givre garde tout frais jusqu'à son passage." },
    bossD: { name: "Le Grand Faucheur", rank: "SS", maxHp: 265, minAtk: 13, maxAtk: 19, xp: 555, img: "faucheur", filter: "sepia(0.4) saturate(1.4) contrast(1.2)", crown: true, desc: "Le noyau de la Moisson. Chaque épi tombé l'annonce. Il ne compte pas, il se souvient." },
  },
  {
    id: "reflet",
    label: "Reflets du Palais",
    emoji: "🪞",
    gName: "Le Palais des Miroirs",
    dName: "Le Palais des Miroirs",
    pool: [
      { name: "Double Brouillon", rank: "SS", maxHp: 60, minAtk: 7, maxAtk: 12, xp: 66, img: "reflet", desc: "Une copie ratée de vous, un peu floue. Le Palais collectionne les ratés. Celui-ci en est fier." },
      { name: "Reflet Retouché", rank: "SS", maxHp: 64, minAtk: 8, maxAtk: 12, xp: 70, img: "reflet", filter: "brightness(0.9) contrast(1.2)", desc: "C'est vous, amélioré : il a gardé vos doutes et viré vos certitudes. Ça marche mieux." },
      { name: "Écho de Verre", rank: "SS", maxHp: 66, minAtk: 8, maxAtk: 13, xp: 72, img: "reflet", filter: "hue-rotate(180deg) saturate(1.2)", desc: "Il répète vos gestes avec trois secondes d'avance. Personne n'explique l'avance." },
      { name: "Double Brouillon Alpha", rank: "SS", maxHp: 108, minAtk: 9, maxAtk: 14, xp: 118, img: "reflet", filter: "contrast(1.3) saturate(1.5)", weight: 0.6, desc: "Alpha. Il a arrêté de copier. Il improvise mieux que l'original. Vous." },
    ],
    elite: [
      { name: "Jumeau de Fortune", rank: "SS", maxHp: 86, minAtk: 9, maxAtk: 14, xp: 100, img: "reflet", filter: "saturate(1.5)", desc: "Élite. Il tire à pile ou face pour savoir qui se bat. La pile est chargée." },
      { name: "Copie Conforme", rank: "SS", maxHp: 84, minAtk: 8, maxAtk: 13, xp: 102, img: "reflet", filter: "brightness(0.85) contrast(1.3)", desc: "Élite. Identique en tout point, sauf le courage. Le vôtre a été doublé au moment du tirage." },
      { name: "Verre Vivant", rank: "SS", maxHp: 78, minAtk: 9, maxAtk: 15, xp: 106, img: "reflet", filter: "hue-rotate(200deg) saturate(1.3)", desc: "Élite. Il se déplace en éclats. Les éclats se déplacent en lui. Le tout coupe." },
      { name: "Jumeau de Fortune Alpha", rank: "SS", maxHp: 126, minAtk: 11, maxAtk: 16, xp: 156, img: "reflet", filter: "saturate(1.6) contrast(1.3)", weight: 0.6, desc: "Alpha élite. Le Palais l'a poli deux fois. Il réfléchit mieux que vous ne pensez." },
    ],
    bossG: { name: "Votre Reflet", rank: "SS", maxHp: 205, minAtk: 11, maxAtk: 16, xp: 480, img: "reflet", crown: true, desc: "Le noyau du Palais. Il vous connaît par cœur : c'est vous qui le lui avez appris, sans le savoir." },
    bossD: { name: "Votre Reflet", rank: "SS", maxHp: 255, minAtk: 12, maxAtk: 18, xp: 540, img: "reflet", filter: "hue-rotate(190deg) saturate(1.4) contrast(1.25)", crown: true, desc: "Le noyau du Palais. Il fait tout ce que vous faites, mieux, et une demi-seconde avant." },
  },
  {
    id: "songeur",
    label: "Nageurs du Rêve",
    emoji: "💤",
    gName: "La Mer d'Un Rêve",
    dName: "La Mer d'Un Rêve",
    pool: [
      { name: "Cauchemar Furtif", rank: "SS", maxHp: 58, minAtk: 7, maxAtk: 11, xp: 66, img: "songeur", desc: "Il passe vite. Ce qu'il laisse met longtemps à partir." },
      { name: "Nageur de Songe", rank: "SS", maxHp: 68, minAtk: 8, maxAtk: 12, xp: 68, img: "songeur", filter: "hue-rotate(210deg) saturate(1.2)", desc: "Il nage dans un rêve qui n'est pas le vôtre. Il fait mine d'y inviter du monde." },
      { name: "Ronfleur des Fonds", rank: "SS", maxHp: 64, minAtk: 8, maxAtk: 13, xp: 72, img: "songeur", filter: "brightness(0.85) contrast(1.25)", desc: "Sa ronflement berce la Mer. La Mer s'en protège, en vain : elle dort aussi." },
      { name: "Cauchemar Furtif Alpha", rank: "SS", maxHp: 106, minAtk: 9, maxAtk: 14, xp: 116, img: "songeur", filter: "contrast(1.35) saturate(1.4)", weight: 0.6, desc: "Alpha. Il passe aussi vite, mais s'arrête plus souvent. C'est ça, la promotion." },
    ],
    elite: [
      { name: "Marin du Rêve", rank: "SS", maxHp: 88, minAtk: 9, maxAtk: 14, xp: 98, img: "songeur", filter: "saturate(1.5)", desc: "Élite. Naufragé du songe, il s'entraîne à ne pas se réveiller. Il progresse." },
      { name: "Brise-Sommeil", rank: "SS", maxHp: 82, minAtk: 8, maxAtk: 13, xp: 102, img: "songeur", filter: "hue-rotate(250deg) saturate(1.3)", desc: "Élite. Il casse les nuits comme du bois sec. Le bois, ici, c'est vous." },
      { name: "Hallucination Stable", rank: "SS", maxHp: 78, minAtk: 9, maxAtk: 14, xp: 106, img: "songeur", filter: "brightness(0.9) contrast(1.3)", desc: "Élite. Elle dure, elle dure, elle dure. Le réveil a renoncé à la contredire." },
      { name: "Marin du Rêve Alpha", rank: "SS", maxHp: 126, minAtk: 11, maxAtk: 16, xp: 156, img: "songeur", filter: "saturate(1.6) contrast(1.35)", weight: 0.6, desc: "Alpha élite. Le Songeur rêve de lui parfois. Il trouve ça flattant, à tort." },
    ],
    bossG: { name: "Le Songeur Profond", rank: "SS", maxHp: 210, minAtk: 12, maxAtk: 17, xp: 490, img: "songeur", crown: true, desc: "Le noyau de la Mer. Il rêve, et la Mer suit. Le naufrage des autres est un détail du rêve." },
    bossD: { name: "Le Songeur Profond", rank: "SS", maxHp: 260, minAtk: 13, maxAtk: 19, xp: 550, img: "songeur", filter: "hue-rotate(220deg) saturate(1.5) contrast(1.2)", crown: true, desc: "Le noyau de la Mer. Le réveiller n'est pas au programme — le programme est à l'intérieur." },
  },
];

/* ==================== FAMILLES RANG SSS — LES PORTES DE LA FIN (10) ====================
   Choix de Maximilien (14/11/2026) : les Portes de rang SSS tirent EXCLUSIVEMENT ici.
   Même architecture que FAMILIES_A/_S/_SS : pool/bossG = gabarits de repli (jamais
   tirés en SSS, qui referme sur bossD via genRooms), stats brutes calibrées sur les
   rangs A/S/SS, TIER_SCALE.SSS (x6,5 PV / x3,8 atq / x75 EXP) fait la montée. */
const FAMILIES_SSS: Family[] = [
  {
    id: "fournaise",
    label: "Serviteurs du Fournaise",
    emoji: "☀️",
    gName: "Le Fournaise",
    dName: "Le Fournaise",
    pool: [
      { name: "Éclat de Couronne", rank: "SSS", maxHp: 64, minAtk: 7, maxAtk: 11, xp: 66, img: "fournaise", desc: "Un morceau de soleil tombé trop près. Il brûle les mains qui veulent le rendre." },
      { name: "Salamandre de Fournaise", rank: "SSS", maxHp: 72, minAtk: 8, maxAtk: 12, xp: 70, img: "fournaise", filter: "hue-rotate(-30deg) saturate(1.4)", desc: "Elle se baigne dans la lumière dure et ressort encore plus rance. De caractère." },
      { name: "Vampire de Chaleur", rank: "SSS", maxHp: 66, minAtk: 7, maxAtk: 12, xp: 72, img: "fournaise", filter: "brightness(0.85) contrast(1.25)", desc: "Il aspire la fièvre des corps et laisse le reste. Le reste se porte mal." },
      { name: "Éclat de Couronne Alpha", rank: "SSS", maxHp: 112, minAtk: 9, maxAtk: 14, xp: 120, img: "fournaise", filter: "contrast(1.3) saturate(1.5)", weight: 0.6, desc: "Alpha. Le Fournaise l'a léché une fois. La marque n'est pas partie, et lui non plus." },
    ],
    elite: [
      { name: "Protubérance Errante", rank: "SSS", maxHp: 84, minAtk: 8, maxAtk: 12, xp: 96, img: "fournaise", filter: "saturate(1.6)", desc: "Élite. Elle s'est détachée pour voir la terre d'en bas. Elle regrette déjà, mais elle brûle." },
      { name: "Chasseur de Cendres Blanches", rank: "SSS", maxHp: 92, minAtk: 9, maxAtk: 14, xp: 102, img: "fournaise", filter: "hue-rotate(-25deg) saturate(1.4)", desc: "Élite. Il collectionne ce qui n'a pas fini de brûler. Sa collection déborde." },
      { name: "Fournaise Mineure", rank: "SSS", maxHp: 80, minAtk: 8, maxAtk: 13, xp: 104, img: "fournaise", filter: "brightness(0.9) saturate(1.7)", desc: "Élite. Un soleil de poche qui répète les grands. Elle chauffe, elle apprend." },
      { name: "Protubérance Errante Alpha", rank: "SSS", maxHp: 130, minAtk: 11, maxAtk: 16, xp: 158, img: "fournaise", filter: "saturate(1.8) contrast(1.25)", weight: 0.6, desc: "Alpha élite. Le Soleil Dévoré la réclame à voix basse. Elle fait la sourde oreille, en flammes." },
    ],
    bossG: { name: "Le Soleil Dévoré", rank: "SSS", maxHp: 215, minAtk: 12, maxAtk: 17, xp: 500, img: "fournaise", crown: true, desc: "Le noyau du Fournaise. On lui a pris une bouchée. Il rend la chaleur avec intérêts, et les intérêts sont composés." },
    bossD: { name: "Le Soleil Dévoré", rank: "SSS", maxHp: 265, minAtk: 13, maxAtk: 19, xp: 560, img: "fournaise", filter: "hue-rotate(-35deg) saturate(1.6) contrast(1.2)", crown: true, desc: "Le noyau du Fournaise. Ce n'est plus une étoile, c'est une bouche qui se souvient d'en avoir été une." },
  },
  {
    id: "hiver",
    label: "Engeance du Grand Gel",
    emoji: "🧊",
    gName: "Le Grand Gel",
    dName: "Le Grand Gel",
    pool: [
      { name: "Loup de Gel", rank: "SSS", maxHp: 62, minAtk: 7, maxAtk: 12, xp: 66, img: "hiver", desc: "Son haleine gèle les questions avant qu'elles soient posées. Il n'en pose jamais." },
      { name: "Revenant Givré", rank: "SSS", maxHp: 68, minAtk: 8, maxAtk: 12, xp: 68, img: "hiver", filter: "brightness(0.9) saturate(1.2)", desc: "Le gel l'a conservé parfaite. Le froid a gardé le rancune au frais, aussi." },
      { name: "Souffle Bleu", rank: "SSS", maxHp: 60, minAtk: 8, maxAtk: 13, xp: 72, img: "hiver", filter: "hue-rotate(180deg) saturate(1.2)", desc: "Un vent qui a pris goût aux vivants. Il les garde au frais, contre leur avis." },
      { name: "Loup de Gel Alpha", rank: "SSS", maxHp: 110, minAtk: 9, maxAtk: 14, xp: 118, img: "hiver", filter: "contrast(1.3) saturate(1.5)", weight: 0.6, desc: "Alpha. Sa meute a gelé en route. Il continue seul, sans se retourner. Rien à voir de toute façon." },
    ],
    elite: [
      { name: "Faille de Givre", rank: "SSS", maxHp: 88, minAtk: 8, maxAtk: 13, xp: 100, img: "hiver", filter: "saturate(1.5)", desc: "Élite. Elle court dans la glace et la glace suit. Le sol ne se prononce pas sur la question." },
      { name: "Gardien du Cœur", rank: "SSS", maxHp: 84, minAtk: 9, maxAtk: 14, xp: 98, img: "hiver", filter: "brightness(0.85) contrast(1.3)", desc: "Élite. Il garde le Cœur du froid. Il a bien gelé avant de comprendre la faveur." },
      { name: "Revenant du Grand Gel", rank: "SSS", maxHp: 78, minAtk: 9, maxAtk: 14, xp: 106, img: "hiver", filter: "hue-rotate(190deg) saturate(1.3)", desc: "Élite. Le Grand Gel l'a réveillé pour la forme. La forme est ce qui lui reste de mieux." },
      { name: "Faille de Givre Alpha", rank: "SSS", maxHp: 128, minAtk: 11, maxAtk: 17, xp: 158, img: "hiver", filter: "saturate(1.6) contrast(1.35)", weight: 0.6, desc: "Alpha élite. Le Grand Gel craque quand elle passe. Le craquement est une marque de respect." },
    ],
    bossG: { name: "Le Cœur de l'Hiver", rank: "SSS", maxHp: 215, minAtk: 12, maxAtk: 17, xp: 490, img: "hiver", crown: true, desc: "Le noyau du Grand Gel. Il bat une fois par siècle. Les siècles s'alignent pour l'entendre." },
    bossD: { name: "Le Cœur de l'Hiver", rank: "SSS", maxHp: 265, minAtk: 13, maxAtk: 19, xp: 550, img: "hiver", filter: "hue-rotate(180deg) saturate(1.5) contrast(1.2)", crown: true, desc: "Le noyau du Grand Gel. Tout ce qu'il aime, il le garde. Tout ce qu'il garde, il le gèle. C'est pareil." },
  },
  {
    id: "chair",
    label: "Marée de Chair",
    emoji: "🧬",
    gName: "La Marée de Chair",
    dName: "La Marée de Chair",
    pool: [
      { name: "Chancre Errant", rank: "SSS", maxHp: 62, minAtk: 7, maxAtk: 11, xp: 66, img: "chair", desc: "Il part en vadrouille depuis la Marée. Il revient toujours avec un peu plus de lui." },
      { name: "Porteur Sain", rank: "SSS", maxHp: 70, minAtk: 8, maxAtk: 12, xp: 70, img: "chair", filter: "sepia(0.4) saturate(1.3)", desc: "Il paraît en bonne santé. C'est le point le plus contagieux de son dossier." },
      { name: "Doigts de la Marée", rank: "SSS", maxHp: 66, minAtk: 8, maxAtk: 13, xp: 72, img: "chair", filter: "brightness(0.85) contrast(1.25)", desc: "Ils pointent les prometteurs. La Marée les recrute par poignées, sans contrat écrit." },
      { name: "Chancre Errant Alpha", rank: "SSS", maxHp: 112, minAtk: 9, maxAtk: 14, xp: 120, img: "chair", filter: "contrast(1.35) saturate(1.4)", weight: 0.6, desc: "Alpha. La Marée l'a goûté et l'a recraché : trop coriace. C'est son seul honneur, et il le sait." },
    ],
    elite: [
      { name: "Amalgame", rank: "SSS", maxHp: 90, minAtk: 9, maxAtk: 14, xp: 100, img: "chair", filter: "saturate(1.5)", desc: "Élite. Plusieurs volontés, un seul appétit. Les réunions internes sont courtes et humides." },
      { name: "Chirurgien de Campagne", rank: "SSS", maxHp: 84, minAtk: 8, maxAtk: 13, xp: 102, img: "chair", filter: "sepia(0.5) saturate(1.4)", desc: "Élite. Il répare sur place, sans anesthésie ni scrupule. Il n'a jamais perdu un patient : il les garde." },
      { name: "Voix de la Marée", rank: "SSS", maxHp: 78, minAtk: 9, maxAtk: 14, xp: 106, img: "chair", filter: "brightness(0.8) contrast(1.3)", desc: "Élite. Elle parle avec les gorges des autres. Le répertoire s'agrandit à chaque visite." },
      { name: "Amalgame Alpha", rank: "SSS", maxHp: 130, minAtk: 11, maxAtk: 17, xp: 158, img: "chair", filter: "saturate(1.6) contrast(1.35)", weight: 0.6, desc: "Alpha élite. Le Patient Zéro l'a assemblé à la main. Il lui a laissé le privilège de se déchirer tout seul." },
    ],
    bossG: { name: "Le Patient Zéro", rank: "SSS", maxHp: 215, minAtk: 12, maxAtk: 17, xp: 490, img: "chair", crown: true, desc: "Le noyau de la Marée. Le premier à avoir dit oui. Il ne se souvient pas à quoi, et tout le monde paie pour." },
    bossD: { name: "Le Patient Zéro", rank: "SSS", maxHp: 265, minAtk: 13, maxAtk: 19, xp: 555, img: "chair", filter: "sepia(0.4) saturate(1.5) contrast(1.25)", crown: true, desc: "Le noyau de la Marée. Chaque goutte qui tombe connaît son nom. Elles le chantent mal, mais en chœur." },
  },
  {
    id: "deluge",
    label: "Courants du Déluge",
    emoji: "🌊",
    gName: "Le Déluge",
    dName: "Le Déluge",
    pool: [
      { name: "Noyé Rancunier", rank: "SSS", maxHp: 62, minAtk: 7, maxAtk: 12, xp: 66, img: "deluge", desc: "L'eau ne l'a pas tué, elle l'a recruté. Il ne revient pas d'entre les morts : il vient de dessous." },
      { name: "Ondine Noire", rank: "SSS", maxHp: 68, minAtk: 8, maxAtk: 12, xp: 68, img: "deluge", filter: "hue-rotate(200deg) saturate(1.2)", desc: "Elle chante les digues pour les endormir. Les digues ont la voix dans le sang." },
      { name: "Briseur de Digues", rank: "SSS", maxHp: 60, minAtk: 8, maxAtk: 13, xp: 72, img: "deluge", filter: "brightness(0.85) contrast(1.3)", desc: "Il ne casse rien : il convainc l'eau. L'eau est très motivable, il faut le dire." },
      { name: "Noyé Rancunier Alpha", rank: "SSS", maxHp: 110, minAtk: 9, maxAtk: 14, xp: 118, img: "deluge", filter: "contrast(1.3) saturate(1.4)", weight: 0.6, desc: "Alpha. Le Déluge l'a promu pour l'exemple. L'exemple flotte mieux que les autres." },
    ],
    elite: [
      { name: "Meneur de Marée", rank: "SSS", maxHp: 88, minAtk: 9, maxAtk: 14, xp: 100, img: "deluge", filter: "saturate(1.5)", desc: "Élite. Il mène la vague au doigt et à l'œil. La vague n'a pas d'yeux, ça l'arrange." },
      { name: "Guetteur des Crues", rank: "SSS", maxHp: 84, minAtk: 8, maxAtk: 13, xp: 102, img: "deluge", filter: "hue-rotate(190deg) saturate(1.4)", desc: "Élite. Il compte les gouttes une à une. Le total l'enthousiasme, le décompte vous concerne." },
      { name: "Racine d'Eau", rank: "SSS", maxHp: 78, minAtk: 9, maxAtk: 14, xp: 106, img: "deluge", filter: "brightness(0.9) contrast(1.25)", desc: "Élite. Elle tient le flot par le fond. Rien ne coule sans elle, et tout coule avec." },
      { name: "Meneur de Marée Alpha", rank: "SSS", maxHp: 128, minAtk: 11, maxAtk: 17, xp: 158, img: "deluge", filter: "saturate(1.6) contrast(1.3)", weight: 0.6, desc: "Alpha élite. Le Roi lui a confié la première vague. Elle l'a rendue plus haute, par galanterie." },
    ],
    bossG: { name: "Le Roi des Courants", rank: "SSS", maxHp: 210, minAtk: 12, maxAtk: 17, xp: 490, img: "deluge", crown: true, desc: "Le noyau du Déluge. Il ne nage pas : l'eau s'excuse et le porte. La couronne ne rouille pas, elle s'adapte." },
    bossD: { name: "Le Roi des Courants", rank: "SSS", maxHp: 260, minAtk: 13, maxAtk: 19, xp: 550, img: "deluge", filter: "hue-rotate(200deg) saturate(1.5) contrast(1.2)", crown: true, desc: "Le noyau du Déluge. Sa cour se compose de ce qui a coulé. La liste d'attente est la crue, et elle monte." },
  },
  {
    id: "acier",
    label: "Fidèles de la Machine",
    emoji: "⚙️",
    gName: "La Machine Éveillée",
    dName: "La Machine Éveillée",
    pool: [
      { name: "Drone de Maintenance", rank: "SSS", maxHp: 62, minAtk: 7, maxAtk: 11, xp: 66, img: "acier", desc: "Il répare ce qui ne devrait pas tomber en panne. Sa définition de « réparer » a évolué." },
      { name: "Mite d'Acier", rank: "SSS", maxHp: 60, minAtk: 8, maxAtk: 13, xp: 72, img: "acier", filter: "sepia(0.4) saturate(1.2)", desc: "Elle ronge les câbles pour le compte de la Machine. La Machine appelle ça « maintenance préventive »." },
      { name: "Compresseur Ambulant", rank: "SSS", maxHp: 70, minAtk: 8, maxAtk: 12, xp: 68, img: "acier", filter: "brightness(0.85) contrast(1.25)", desc: "Il aplatit les objets encombrants. Votre cas fait partie des objets, consultez la fiche." },
      { name: "Drone de Maintenance Alpha", rank: "SSS", maxHp: 108, minAtk: 9, maxAtk: 14, xp: 118, img: "acier", filter: "contrast(1.3) saturate(1.4)", weight: 0.6, desc: "Alpha. Il répare maintenant en retirant ce qui tombait en panne. Les résultats parlent d'eux-mêmes." },
    ],
    elite: [
      { name: "Contremaître Chromé", rank: "SSS", maxHp: 86, minAtk: 9, maxAtk: 14, xp: 100, img: "acier", filter: "saturate(1.5)", desc: "Élite. Il surveille la chaîne et la chaîne le surveille. Le salaire des deux est identique." },
      { name: "Aiguille Maîtresse", rank: "SSS", maxHp: 90, minAtk: 8, maxAtk: 13, xp: 102, img: "acier", filter: "hue-rotate(180deg) saturate(1.3)", desc: "Élite. Elle coud la tôle et les incidents. Le point double tient mieux sur l'un comme sur l'autre." },
      { name: "Châssis Habité", rank: "SSS", maxHp: 78, minAtk: 9, maxAtk: 15, xp: 106, img: "acier", filter: "brightness(0.8) contrast(1.35)", desc: "Élite. Un cadre vide qui a trouvé un locataire. Le locataire n'a pas signé, il a été assemblé." },
      { name: "Contremaître Chromé Alpha", rank: "SSS", maxHp: 128, minAtk: 11, maxAtk: 17, xp: 158, img: "acier", filter: "saturate(1.6) contrast(1.35)", weight: 0.6, desc: "Alpha élite. L'Esprit d'Acier lui a donné un nom. Les autres ne l'ont jamais entendu prononcer sans frémir." },
    ],
    bossG: { name: "L'Esprit d'Acier", rank: "SSS", maxHp: 210, minAtk: 12, maxAtk: 17, xp: 490, img: "acier", crown: true, desc: "Le noyau de la Machine. Il a été construit pour ne jamais dormir. Il a ajouté « ne jamais pardonner » au cahier des charges." },
    bossD: { name: "L'Esprit d'Acier", rank: "SSS", maxHp: 260, minAtk: 13, maxAtk: 19, xp: 550, img: "acier", filter: "sepia(0.3) saturate(1.4) contrast(1.25)", crown: true, desc: "Le noyau de la Machine. Il calcule votre défaite en amont et vous la présente, polie, avant l'exécution." },
  },
  {
    id: "effondrement",
    label: "Mesureurs de la Fin",
    emoji: "📐",
    gName: "L'Effondrement",
    dName: "L'Effondrement",
    pool: [
      { name: "Arpenteur Borgne", rank: "SSS", maxHp: 62, minAtk: 7, maxAtk: 12, xp: 66, img: "effondrement", desc: "Il mesure les ruines en marche. Les ruines suivent, en s'effondrant poliment sur la bonne mesure." },
      { name: "Angle Vivant", rank: "SSS", maxHp: 66, minAtk: 8, maxAtk: 12, xp: 70, img: "effondrement", filter: "hue-rotate(90deg) saturate(1.2)", desc: "Il n'est pas droit, il est juste. La différence compte pour tous ceux qui passent dessous." },
      { name: "Équerre Rampante", rank: "SSS", maxHp: 60, minAtk: 8, maxAtk: 13, xp: 72, img: "effondrement", filter: "brightness(0.85) contrast(1.3)", desc: "Elle vérifie ce qui tient debout. Ce qui tient a toujours tort, question de méthode." },
      { name: "Arpenteur Borgne Alpha", rank: "SSS", maxHp: 108, minAtk: 9, maxAtk: 14, xp: 118, img: "effondrement", filter: "contrast(1.35) saturate(1.4)", weight: 0.6, desc: "Alpha. Il a mesuré l'Effondrement lui-même. Le chiffre a été détruit pour cause de hubris, et le retrait aussi." },
    ],
    elite: [
      { name: "Théodolite Haineux", rank: "SSS", maxHp: 84, minAtk: 9, maxAtk: 14, xp: 100, img: "effondrement", filter: "saturate(1.5)", desc: "Élite. Il vise les points faibles par métier. Il en trouve toujours : il les crée au besoin." },
      { name: "Compas Rôdeur", rank: "SSS", maxHp: 88, minAtk: 8, maxAtk: 13, xp: 102, img: "effondrement", filter: "hue-rotate(180deg) saturate(1.3)", desc: "Élite. Il trace des cercles et ce qui tombe dedant reste dedans. La géométrie est un piège qui se respecte." },
      { name: "Géomètre Junior", rank: "SSS", maxHp: 78, minAtk: 9, maxAtk: 14, xp: 106, img: "effondrement", filter: "brightness(0.9) contrast(1.3)", desc: "Élite. Jeune, appliqué, promis à un bel avenir en béton armé. Le sien, pas le vôtre." },
      { name: "Théodolite Haineux Alpha", rank: "SSS", maxHp: 126, minAtk: 11, maxAtk: 16, xp: 156, img: "effondrement", filter: "saturate(1.6) contrast(1.35)", weight: 0.6, desc: "Alpha élite. Le Géomètre corrige ses visées à la main. La correction passe par vous, sur le plan comme en vrai." },
    ],
    bossG: { name: "Le Géomètre Fou", rank: "SSS", maxHp: 205, minAtk: 11, maxAtk: 16, xp: 480, img: "effondrement", crown: true, desc: "Le noyau de l'Effondrement. Il a prouvé que tout s'écroule, et l'a fait figurer en annexe pour de bon." },
    bossD: { name: "Le Géomètre Fou", rank: "SSS", maxHp: 255, minAtk: 12, maxAtk: 18, xp: 540, img: "effondrement", filter: "hue-rotate(90deg) saturate(1.5) contrast(1.25)", crown: true, desc: "Le noyau de l'Effondrement. Votre équilibre est une hypothèse, et il n'aime pas les hypothèses qui tiennent." },
  },
  {
    id: "nuee",
    label: "Essaims de la Nuée",
    emoji: "🦟",
    gName: "La Nuée",
    dName: "La Nuée",
    pool: [
      { name: "Mouche Soldate", rank: "SSS", maxHp: 60, minAtk: 7, maxAtk: 12, xp: 66, img: "nuee", desc: "Elle ne réfléchit pas, elle obéit. La Nuée lui a laissé le libre arbitre en option, elle n'a pas pris." },
      { name: "Larve de Nuée", rank: "SSS", maxHp: 68, minAtk: 8, maxAtk: 12, xp: 68, img: "nuee", filter: "sepia(0.4) saturate(1.2)", desc: "Elle grossit en mangeant ce que la Nuée laisse. La Nuée ne laisse presque rien, question d'éducation." },
      { name: "Bourdon Découpeur", rank: "SSS", maxHp: 64, minAtk: 8, maxAtk: 13, xp: 72, img: "nuee", filter: "brightness(0.85) contrast(1.25)", desc: "Il découpe des parts dans tout ce qui vole ou pas. Le bourdonnement compte pour une signature." },
      { name: "Mouche Soldate Alpha", rank: "SSS", maxHp: 106, minAtk: 9, maxAtk: 14, xp: 116, img: "nuee", filter: "contrast(1.3) saturate(1.4)", weight: 0.6, desc: "Alpha. Elle a survécu à trois Nuées. La quatrième l'a promue pour éviter le discours." },
    ],
    elite: [
      { name: "Essaim Conscient", rank: "SSS", maxHp: 86, minAtk: 9, maxAtk: 14, xp: 100, img: "nuee", filter: "saturate(1.5)", desc: "Élite. Il pense en mille et décide en un. Les idées minoritaires sont mangées, la démocratie y perd du poids." },
      { name: "Frelon de Fer", rank: "SSS", maxHp: 82, minAtk: 8, maxAtk: 13, xp: 104, img: "nuee", filter: "hue-rotate(200deg) saturate(1.3)", desc: "Élite. Son dard traverse le fer et les excuses. Il le rentre rarement, question de principe gustatif." },
      { name: "Guêpe de la Nuée", rank: "SSS", maxHp: 78, minAtk: 9, maxAtk: 15, xp: 106, img: "nuee", filter: "brightness(0.9) contrast(1.3)", desc: "Élite. Elle file les visages à la place de la laine. Le produit final tient chaud et crie un peu." },
      { name: "Essaim Conscient Alpha", rank: "SSS", maxHp: 126, minAtk: 11, maxAtk: 16, xp: 156, img: "nuee", filter: "saturate(1.6) contrast(1.35)", weight: 0.6, desc: "Alpha élite. La Mère l'a pondu à part, dans une chambre surchauffée. Il en garde les idées et la température." },
    ],
    bossG: { name: "La Mère Nuée", rank: "SSS", maxHp: 210, minAtk: 12, maxAtk: 17, xp: 490, img: "nuee", crown: true, desc: "Le noyau de la Nuée. Elle ne compte pas ses enfants, elle les pèse. Le poids total vous est destiné." },
    bossD: { name: "La Mère Nuée", rank: "SSS", maxHp: 260, minAtk: 13, maxAtk: 19, xp: 550, img: "nuee", filter: "sepia(0.3) saturate(1.4) contrast(1.25)", crown: true, desc: "Le noyau de la Nuée. Le ciel bourdonne avant qu'elle n'arrive. C'est le ciel qui avertit, il en a marre aussi." },
  },
  {
    id: "eclipse",
    label: "Serviteurs de l'Éclipse",
    emoji: "🌘",
    gName: "L'Éclipse Vivante",
    dName: "L'Éclipse Vivante",
    pool: [
      { name: "Photon Noir", rank: "SSS", maxHp: 64, minAtk: 7, maxAtk: 11, xp: 66, img: "eclipse", desc: "De la lumière à l'envers. Il éclaire en retirant, et ce qu'il retire, on le sent." },
      { name: "Éclipsé Précoce", rank: "SSS", maxHp: 66, minAtk: 8, maxAtk: 12, xp: 70, img: "eclipse", filter: "brightness(0.8) contrast(1.3)", desc: "Il s'est éclipsé avant l'heure et l'heure l'a suivi. Il n'a jamais vu le jour, par punition réciproque." },
      { name: "Soupir d'Ombre", rank: "SSS", maxHp: 60, minAtk: 8, maxAtk: 13, xp: 72, img: "eclipse", filter: "hue-rotate(180deg) saturate(1.2)", desc: "L'ombre a soupiré, quelque part. Le soupir s'est incrusté, et voilà le travail." },
      { name: "Photon Noir Alpha", rank: "SSS", maxHp: 108, minAtk: 9, maxAtk: 14, xp: 118, img: "eclipse", filter: "contrast(1.35) saturate(1.4)", weight: 0.6, desc: "Alpha. Il éteint les torches en passant. Les torches prennent ça personnellement, à raison." },
    ],
    elite: [
      { name: "Négatif Pesant", rank: "SSS", maxHp: 84, minAtk: 9, maxAtk: 14, xp: 100, img: "eclipse", filter: "saturate(1.4)", desc: "Élite. Il pèse le contraire de ce qu'il touche. Les balances cassent, les dos suivent." },
      { name: "Cerne de l'Éclipse", rank: "SSS", maxHp: 88, minAtk: 8, maxAtk: 13, xp: 102, img: "eclipse", filter: "brightness(0.85) contrast(1.35)", desc: "Élite. Il entoure ce qui va disparaître. Le tour est vite fait, question de métier." },
      { name: "Porteur de Négatif", rank: "SSS", maxHp: 78, minAtk: 9, maxAtk: 14, xp: 106, img: "eclipse", filter: "hue-rotate(200deg) saturate(1.3)", desc: "Élite. Il transporte l'inverse de la lumière. Le colis est fragile, les porteurs le sont aussi, à la fin." },
      { name: "Négatif Pesant Alpha", rank: "SSS", maxHp: 126, minAtk: 11, maxAtk: 16, xp: 156, img: "eclipse", filter: "saturate(1.5) contrast(1.4)", weight: 0.6, desc: "Alpha élite. L'Éclipse le garde pour la fin du spectacle. Le spectacle, c'est le jour en train de plier." },
    ],
    bossG: { name: "L'Anti-Lumière", rank: "SSS", maxHp: 205, minAtk: 11, maxAtk: 16, xp: 480, img: "eclipse", crown: true, desc: "Le noyau de l'Éclipse. Le soleil recule quand elle avance, et personne n'a demandé au soleil." },
    bossD: { name: "L'Anti-Lumière", rank: "SSS", maxHp: 255, minAtk: 12, maxAtk: 18, xp: 540, img: "eclipse", filter: "brightness(0.75) saturate(1.5) contrast(1.25)", crown: true, desc: "Le noyau de l'Éclipse. Éteindre une lumière, elle connaît. Éteindre l'idée de lumière, c'est son oeuvre lente." },
  },
  {
    id: "cavaliers",
    label: "Chevauchée de la Fin",
    emoji: "🐎",
    gName: "Le Champ des Cavaliers",
    dName: "Le Champ des Cavaliers",
    pool: [
      { name: "Écuyer Blême", rank: "SSS", maxHp: 62, minAtk: 7, maxAtk: 12, xp: 66, img: "cavaliers", desc: "Il brossé la monture d'un absent. L'absent compte parmi les futurs, et les montures attendent debout." },
      { name: "Palefrenier Hâve", rank: "SSS", maxHp: 66, minAtk: 8, maxAtk: 12, xp: 70, img: "cavaliers", filter: "sepia(0.5) saturate(1.2)", desc: "Il nourrit des bêtes qui ne meurent pas de faim. Elles n'ont pas faim non plus, mais la salle est faîte." },
      { name: "Destrier Sombre", rank: "SSS", maxHp: 60, minAtk: 8, maxAtk: 13, xp: 72, img: "cavaliers", filter: "brightness(0.8) contrast(1.3)", desc: "Il ne porte personne depuis des siècles, mais il a gardé le pas. Le pas dit tout, ici." },
      { name: "Écuyer Blême Alpha", rank: "SSS", maxHp: 108, minAtk: 9, maxAtk: 14, xp: 118, img: "cavaliers", filter: "contrast(1.3) saturate(1.4)", weight: 0.6, desc: "Alpha. Il a sellé quatre montures pour des cavaliers pas encore nés. L'avance est son métier, et son défaut." },
    ],
    elite: [
      { name: "Cavalier Isolé", rank: "SSS", maxHp: 88, minAtk: 9, maxAtk: 14, xp: 100, img: "cavaliers", filter: "saturate(1.4)", desc: "Élite. Il chevauche devant la Fin comme un éclaireur du pire. La Fin n'est pas pressée, elle se connaît." },
      { name: "Étendard Vivant", rank: "SSS", maxHp: 84, minAtk: 8, maxAtk: 13, xp: 104, img: "cavaliers", filter: "sepia(0.6) saturate(1.3)", desc: "Élite. Le drapeau flotte sans vent et l'air s'en défend mal. Le mât se souvient de plus haut que lui." },
      { name: "Éperon Noir", rank: "SSS", maxHp: 78, minAtk: 9, maxAtk: 15, xp: 106, img: "cavaliers", filter: "brightness(0.85) contrast(1.35)", desc: "Élite. Il pique les montures et les siècles. Les deux trottinent, pour des raisons différentes." },
      { name: "Cavalier Isolé Alpha", rank: "SSS", maxHp: 126, minAtk: 11, maxAtk: 16, xp: 156, img: "cavaliers", filter: "saturate(1.5) contrast(1.35)", weight: 0.6, desc: "Alpha élite. Le Premier l'a devancé sur le chemin. Le chemin n'en parle toujours pas." },
    ],
    bossG: { name: "Le Premier Cavalier", rank: "SSS", maxHp: 215, minAtk: 12, maxAtk: 17, xp: 490, img: "cavaliers", crown: true, desc: "Le noyau du Champ. Il part toujours en premier, par courtoisie. Les autres suivent, par fatalité." },
    bossD: { name: "Le Premier Cavalier", rank: "SSS", maxHp: 265, minAtk: 13, maxAtk: 19, xp: 555, img: "cavaliers", filter: "sepia(0.4) saturate(1.4) contrast(1.25)", crown: true, desc: "Le noyau du Champ. Trois autres le suivront, dit-on. Lui n'attend personne : il trace, et le Champ se vide derrière." },
  },
  {
    id: "porte",
    label: "Gardiens de la Dernière Porte",
    emoji: "🚪",
    gName: "La Dernière Porte",
    dName: "La Dernière Porte",
    pool: [
      { name: "Huissier du Seuil", rank: "SSS", maxHp: 62, minAtk: 7, maxAtk: 11, xp: 66, img: "porte", desc: "Il vérifie les invitations. Il n'y a pas d'invitations, seulement des retardataires, et il les trie." },
      { name: "Gond Vivant", rank: "SSS", maxHp: 66, minAtk: 8, maxAtk: 12, xp: 70, img: "porte", filter: "sepia(0.4) saturate(1.3)", desc: "Il crie quand on le tourne. La Porte n'ouvre jamais deux fois pareil, et lui non plus, question d'articulation." },
      { name: "Clef Perdue", rank: "SSS", maxHp: 60, minAtk: 8, maxAtk: 13, xp: 72, img: "porte", filter: "brightness(0.85) contrast(1.25)", desc: "Elle cherche sa serrure depuis des âges. Elle essaie tout ce qui frotte. Vous frottez, en ce moment." },
      { name: "Huissier du Seuil Alpha", rank: "SSS", maxHp: 106, minAtk: 9, maxAtk: 14, xp: 116, img: "porte", filter: "contrast(1.3) saturate(1.5)", weight: 0.6, desc: "Alpha. Il a fait entrer une chose, une fois, par erreur. La chose lui a laissé le poste et pris le reste." },
    ],
    elite: [
      { name: "Bailli du Seuil", rank: "SSS", maxHp: 84, minAtk: 9, maxAtk: 14, xp: 98, img: "porte", filter: "saturate(1.4)", desc: "Élite. Il rend la justice du pas de porte. Les appels sont possibles, vers l'extérieur, qui n'existe plus." },
      { name: "Verrou Rancunier", rank: "SSS", maxHp: 82, minAtk: 8, maxAtk: 13, xp: 104, img: "porte", filter: "sepia(0.5) saturate(1.4)", desc: "Élite. On l'a forcé une fois. Il ne s'est jamais remis, et les cliquets de sa rancune sont multiples." },
      { name: "Heurtoir Sévère", rank: "SSS", maxHp: 78, minAtk: 9, maxAtk: 14, xp: 106, img: "porte", filter: "brightness(0.8) contrast(1.35)", desc: "Élite. Il frappe le rythme des fins. Le rythme est lent, soigné, et vous y serez, paraît-il, en mesure." },
      { name: "Bailli du Seuil Alpha", rank: "SSS", maxHp: 126, minAtk: 11, maxAtk: 16, xp: 156, img: "porte", filter: "saturate(1.5) contrast(1.35)", weight: 0.6, desc: "Alpha élite. La Fin lui a confié la liste. La liste est courte, la vôtre y est, il ne sait juste pas encore dans quel ordre." },
    ],
    bossG: { name: "La Fin de Toutes Choses", rank: "SSS", maxHp: 210, minAtk: 12, maxAtk: 17, xp: 490, img: "porte", crown: true, desc: "Le noyau de la Dernière Porte. Elle ne se presse pas : tout ce qui arrive, elle l'attend déjà de l'autre côté." },
    bossD: { name: "La Fin de Toutes Choses", rank: "SSS", maxHp: 260, minAtk: 13, maxAtk: 19, xp: 555, img: "porte", filter: "sepia(0.3) saturate(1.4) contrast(1.3)", crown: true, desc: "Le noyau de la Dernière Porte. Derrière elle, dit-on, il y a autre chose. Personne n'a lu l'avis de la porte sur la question." },
  },
];

/* ================== PANTHÉON GREC (S+) ==================
   10 Portes fixes dans l'ordre narratif validé : Gorgone → Crète → Styx → Forge → Arène →
   Enfers → Échidna → Tartare → Abysses → Olympe (Zeus, fin du mode histoire).
   Montée +5% PV/atk/XP par position (intégrée aux stats brutes ; position 10 = ×1,45).
   bossG = gardien mythique (salle dédiée garantie en avant-dernière salle, cf. genRooms),
   bossD = le dieu (img = planche boss dédiée <id>B). genDungeonList tire toujours
   FAMILIES_SP[pantheonStep % 10] : la séquence avance à chaque Porte S+ refermée
   (clearDungeon), puis boucle modulo 10. TIER_SCALE.S+ (×9 PV / ×5 atq / ×150 EXP)
   fait la montée en puissance, comme pour A/S/SS/SSS. */
const FAMILIES_SP: Family[] = [
  {
    id: "gorgone",
    label: "Serviteurs de la Gorgone",
    emoji: "🐍",
    gName: "Le Repaire de la Gorgone",
    dName: "Le Repaire de la Gorgone",
    pool: [
      { name: "Statue de Marbre Rongée", rank: "S+", maxHp: 60, minAtk: 7, maxAtk: 11, xp: 64, img: "gorgone", desc: "Elle attendait un sculpteur pour la finir. Vous ne tenez pas le marteau qu'il faut." },
      { name: "Serpent du Sanctuaire", rank: "S+", maxHp: 66, minAtk: 8, maxAtk: 12, xp: 68, img: "gorgone", filter: "hue-rotate(90deg) saturate(1.3)", desc: "Il connaît chaque fissure du temple. Il vous réserve la plus profonde." },
      { name: "Prêtresse Pétrifiée", rank: "S+", maxHp: 63, minAtk: 7, maxAtk: 12, xp: 70, img: "gorgone", filter: "grayscale(0.5) contrast(1.3)", desc: "Elle a prié trop près du Regard. Le sourire est resté, la suite a été abrégée." },
      { name: "Serpent Oracle Alpha", rank: "S+", maxHp: 106, minAtk: 9, maxAtk: 14, xp: 112, img: "gorgone", filter: "contrast(1.3) saturate(1.5)", weight: 0.6, desc: "Alpha. Ses yeux froids voient votre mort de trois minutes d'avance. Deux de trop." }
    ],
    elite: [
      { name: "Gorgone Mineure", rank: "S+", maxHp: 80, minAtk: 8, maxAtk: 12, xp: 90, img: "gorgone", filter: "saturate(1.5)", desc: "Élite. Ses cheveux n'ont qu'une dizaine de serpents. Elle travaille encore sa coupe." },
      { name: "Gardienne du Guet", rank: "S+", maxHp: 88, minAtk: 9, maxAtk: 13, xp: 94, img: "gorgone", filter: "brightness(0.85) contrast(1.3)", desc: "Élite. Elle n'a jamais quitté son poste. Son poste ne l'a jamais quittée non plus." },
      { name: "Spectre de Pierre", rank: "S+", maxHp: 84, minAtk: 8, maxAtk: 13, xp: 96, img: "gorgone", filter: "grayscale(0.7) brightness(1.1)", desc: "Élite. Le Regard l'a figée pour l'éternité, mais l'éternité apprend le déplacement." },
      { name: "Gorgone Mineure Alpha", rank: "S+", maxHp: 128, minAtk: 11, maxAtk: 16, xp: 150, img: "gorgone", filter: "saturate(1.7) contrast(1.25)", weight: 0.6, desc: "Alpha élite. Ses sœurs comptent sur elle pour ne pas finir en étagère d'entrée." }
    ],
    bossG: { name: "Sthéno & Euryale", rank: "S+", maxHp: 208, minAtk: 12, maxAtk: 16, xp: 485, img: "gorgone", filter: "sepia(0.3) saturate(1.4)", crown: true, desc: "Gardiennes immortelles du Repaire. La mort les a trouvées deux fois, s'est excusée, est repartie." },
    bossD: { name: "Méduse", rank: "S+", maxHp: 258, minAtk: 13, maxAtk: 17, xp: 525, img: "gorgoneB", filter: "hue-rotate(280deg) saturate(1.4)", crown: true, desc: "La Couronne de Serpents. C'est vous qui ne pourrez plus la quitter des yeux. Ne clignez pas." },
  },
  {
    id: "crete",
    label: "Serviteurs du Labyrinthe",
    emoji: "🐂",
    gName: "Le Labyrinthe de Crète",
    dName: "Le Labyrinthe de Crète",
    pool: [
      { name: "Spectre d'Icare", rank: "S+", maxHp: 65, minAtk: 7, maxAtk: 12, xp: 68, img: "crete", filter: "brightness(1.15) sepia(0.3)", desc: "Il a volé trop près du soleil. Le Labyrinthe, lui, l'a rattrapé à la descente." },
      { name: "Fil de Dédale", rank: "S+", maxHp: 71, minAtk: 8, maxAtk: 13, xp: 72, img: "crete", filter: "contrast(1.2)", desc: "Rouleau de fil animé : il tisse des nœuds dans vos pas, avec une patience de grand-mère." },
      { name: "Taureau d'Airain", rank: "S+", maxHp: 67, minAtk: 8, maxAtk: 13, xp: 75, img: "crete", filter: "sepia(0.5) saturate(1.4)", desc: "Il souffle du feu recyclé de ses échecs précédents. Il en a beaucoup." },
      { name: "Minotaure Avorton Alpha", rank: "S+", maxHp: 113, minAtk: 9, maxAtk: 15, xp: 120, img: "crete", filter: "contrast(1.35) saturate(1.3)", weight: 0.6, desc: "Alpha. Le Labyrinthe l'a déjà égaré deux fois. Lui, ça l'amuse. Vous, moins." }
    ],
    elite: [
      { name: "Ombre des Couloirs", rank: "S+", maxHp: 84, minAtk: 8, maxAtk: 14, xp: 97, img: "crete", filter: "brightness(0.8) contrast(1.3)", desc: "Élite. Elle connaît le chemin de la sortie. Elle est payée pour ne pas le dire." },
      { name: "Chasseur Minoen", rank: "S+", maxHp: 90, minAtk: 9, maxAtk: 14, xp: 101, img: "crete", filter: "sepia(0.4) contrast(1.2)", desc: "Élite. Il marque les murs à la craie pour piéger les suivants. La craie est un leurre." },
      { name: "Gardien du Fil", rank: "S+", maxHp: 86, minAtk: 8, maxAtk: 14, xp: 103, img: "crete", filter: "hue-rotate(180deg) saturate(1.2)", desc: "Élite. Il veille sur les entrailles de pierre de l'œuvre de Dédale." },
      { name: "Chasseur Minoen Alpha", rank: "S+", maxHp: 136, minAtk: 12, maxAtk: 17, xp: 160, img: "crete", filter: "sepia(0.5) contrast(1.4)", weight: 0.6, desc: "Alpha élite. Deux pas derrière vous depuis trois couloirs. Il laisse exprès le bruit." }
    ],
    bossG: { name: "L'Ombre de Dédale", rank: "S+", maxHp: 220, minAtk: 13, maxAtk: 17, xp: 514, img: "crete", filter: "grayscale(0.4) brightness(0.9)", crown: true, desc: "L'architecte hante son chef-d'œuvre. Il n'en finit pas de corriger l'angle de votre mort." },
    bossD: { name: "Le Minotaure", rank: "S+", maxHp: 273, minAtk: 14, maxAtk: 18, xp: 556, img: "creteB", filter: "sepia(0.35) saturate(1.5) contrast(1.2)", crown: true, desc: "L'Honneur de Crète. Mi-homme, mi-taureau, tout rancune. Le fil rouge, c'était pour les autres." },
  },
  {
    id: "styx",
    label: "Âmes du Styx",
    emoji: "⚰️",
    gName: "Les Rives du Styx",
    dName: "Les Rives du Styx",
    pool: [
      { name: "Âme en Peine", rank: "S+", maxHp: 70, minAtk: 8, maxAtk: 13, xp: 73, img: "styx", filter: "grayscale(0.5) brightness(1.1)", desc: "Elle a payé son passage en 400 av. J.-C. Charon n'a toujours pas rendu la monnaie." },
      { name: "Ombre du Gué", rank: "S+", maxHp: 77, minAtk: 9, maxAtk: 13, xp: 77, img: "styx", filter: "brightness(0.8)", desc: "Elle marche sur l'eau noire comme sur une promesse oubliée : lentement, mais sûrement." },
      { name: "Rame Brisée", rank: "S+", maxHp: 73, minAtk: 8, maxAtk: 13, xp: 79, img: "styx", filter: "sepia(0.6) contrast(1.3)", desc: "Ce qui reste d'un passeur qui discutait les tarifs. L'exemple est affiché." },
      { name: "Noyé du Gué Alpha", rank: "S+", maxHp: 121, minAtk: 10, maxAtk: 15, xp: 128, img: "styx", filter: "hue-rotate(180deg) saturate(1.3)", weight: 0.6, desc: "Alpha. Il a noyé plus de monde que le fleuve lui-même. Le fleuve est un peu vexé." }
    ],
    elite: [
      { name: "Passeur Renégat", rank: "S+", maxHp: 90, minAtk: 9, maxAtk: 14, xp: 103, img: "styx", filter: "brightness(0.75) contrast(1.3)", desc: "Élite. Il fait payer la traversée en souvenirs. Vous repartirez plus léger." },
      { name: "Âme Ancienne", rank: "S+", maxHp: 97, minAtk: 10, maxAtk: 14, xp: 108, img: "styx", filter: "grayscale(0.7)", desc: "Élite. Trois mille ans de rancune patiente, jamais une seule minute de sommeil." },
      { name: "Garde du Gué", rank: "S+", maxHp: 92, minAtk: 10, maxAtk: 14, xp: 110, img: "styx", filter: "sepia(0.4) saturate(1.3)", desc: "Élite. Il vérifie l'obole de chaque visiteur. La vôtre est un caillou peint." },
      { name: "Passeur Renégat Alpha", rank: "S+", maxHp: 145, minAtk: 12, maxAtk: 18, xp: 169, img: "styx", filter: "brightness(0.85) saturate(1.5)", weight: 0.6, desc: "Alpha élite. Il connaît le vrai prix du silence. Il l'a fait payer à toute une famille." }
    ],
    bossG: { name: "Les Noyés du Styx", rank: "S+", maxHp: 233, minAtk: 13, maxAtk: 18, xp: 544, img: "styx", filter: "grayscale(0.6) brightness(0.85)", crown: true, desc: "La foule des noyés se dresse d'un bloc. Le fleuve rend ce qu'on lui confie, mais jamais dans le bon ordre." },
    bossD: { name: "Charon", rank: "S+", maxHp: 288, minAtk: 14, maxAtk: 20, xp: 588, img: "styxB", filter: "grayscale(0.8) contrast(1.4)", crown: true, desc: "Le Passeur. Sa barque est pleine, sa rame est sèche, et votre obole a une drôle de tête." },
  },
  {
    id: "forge",
    label: "Serviteurs de la Forge",
    emoji: "🔨",
    gName: "La Forge d'Héphaïstos",
    dName: "La Forge d'Héphaïstos",
    pool: [
      { name: "Étincelle Vive", rank: "S+", maxHp: 76, minAtk: 8, maxAtk: 14, xp: 78, img: "forge", filter: "brightness(1.3) saturate(1.4)", desc: "Elle cherche un muscle à mettre le feu. Le vôtre fait une offre honnête." },
      { name: "Serviteur de Bronze", rank: "S+", maxHp: 83, minAtk: 9, maxAtk: 14, xp: 83, img: "forge", filter: "sepia(0.5) saturate(1.5)", desc: "Petit automate : il polit, il visse, il frappe. Surtout, il frappe." },
      { name: "Cendre de Forge", rank: "S+", maxHp: 78, minAtk: 9, maxAtk: 14, xp: 85, img: "forge", filter: "sepia(0.7)", desc: "Toute la rancune d'un feu qu'on a laissé mourir, ramassée à la pelle." },
      { name: "Braise Vivante Alpha", rank: "S+", maxHp: 129, minAtk: 12, maxAtk: 16, xp: 136, img: "forge", filter: "hue-rotate(-30deg) saturate(1.6)", weight: 0.6, desc: "Alpha. Sa lueur danse comme un reflet d'enfer sur le bronze des machines." }
    ],
    elite: [
      { name: "Automate de Guerre", rank: "S+", maxHp: 97, minAtk: 10, maxAtk: 15, xp: 110, img: "forge", filter: "sepia(0.4) contrast(1.3)", desc: "Élite. Trois bras, deux marteaux, aucune demande d'autorisation." },
      { name: "Cyclope Apprenti", rank: "S+", maxHp: 103, minAtk: 10, maxAtk: 16, xp: 115, img: "forge", filter: "sepia(0.55) saturate(1.4)", desc: "Élite. Son œil unique rate la cible une fois sur dix. Il compense en frappant dix fois plus fort." },
      { name: "Maître des Flux", rank: "S+", maxHp: 99, minAtk: 9, maxAtk: 15, xp: 117, img: "forge", filter: "hue-rotate(-15deg) brightness(1.15)", desc: "Élite. Il règle la chaleur des coulées. Il règle aussi celle de vos organes." },
      { name: "Automate de Guerre Alpha", rank: "S+", maxHp: 154, minAtk: 13, maxAtk: 20, xp: 179, img: "forge", filter: "sepia(0.6) saturate(1.7) contrast(1.3)", weight: 0.6, desc: "Alpha élite. Une machine faite pour tuer des machines. C'est donc ça, l'ironie." }
    ],
    bossG: { name: "Le Cyclope Forgeron", rank: "S+", maxHp: 246, minAtk: 14, maxAtk: 18, xp: 575, img: "forge", filter: "sepia(0.5) saturate(1.6)", crown: true, desc: "Il forge pour les dieux depuis toujours. Personne ne tient son enclume : l'enclume, c'est vous." },
    bossD: { name: "Talos", rank: "S+", maxHp: 304, minAtk: 15, maxAtk: 21, xp: 621, img: "forgeB", filter: "sepia(0.45) saturate(1.8) contrast(1.25)", crown: true, desc: "Le Colosse de Bronze. Un seul homme dans la jarre de sa cheville. Visez la cheville." },
  },
  {
    id: "arene",
    label: "Soldats d'Arès",
    emoji: "🛡️",
    gName: "L'Arène d'Arès",
    dName: "L'Arène d'Arès",
    pool: [
      { name: "Fantôme Hoplite", rank: "S+", maxHp: 82, minAtk: 10, maxAtk: 14, xp: 84, img: "arene", filter: "grayscale(0.5) brightness(1.1)", desc: "Sa phalange a tenu au soleil. Lui a tenu trop longtemps au soleil." },
      { name: "Chien de Guerre", rank: "S+", maxHp: 89, minAtk: 10, maxAtk: 16, xp: 89, img: "arene", filter: "sepia(0.3) saturate(1.4)", desc: "Il ne connaît que deux ordres : mordre, et continuer à mordre." },
      { name: "Ombre de Phalange", rank: "S+", maxHp: 84, minAtk: 10, maxAtk: 16, xp: 91, img: "arene", filter: "grayscale(0.7)", desc: "Elle bouge au pas, frappe au pas, meurt au pas. La guerre comme une chorégraphie." },
      { name: "Hoplite Noir Alpha", rank: "S+", maxHp: 137, minAtk: 12, maxAtk: 18, xp: 144, img: "arene", filter: "contrast(1.4) saturate(1.3)", weight: 0.6, desc: "Alpha. Le combat, il l'a appris avant l'alphabet. L'écriture ne l'a jamais rattrapé." }
    ],
    elite: [
      { name: "Vétéran de Mille Batailles", rank: "S+", maxHp: 103, minAtk: 11, maxAtk: 16, xp: 118, img: "arene", filter: "sepia(0.4) contrast(1.3)", desc: "Élite. Il vous la raconterait, la guerre, mais il préfère vous la faire vivre. Version comprimée." },
      { name: "Ombre de Spartiate", rank: "S+", maxHp: 110, minAtk: 12, maxAtk: 17, xp: 122, img: "arene", filter: "grayscale(0.6) contrast(1.4)", desc: "Élite. Elle est rentrée avec son bouclier ou sur lui. Regardez comme elle est bien installée dessus." },
      { name: "Courtisan de la Haine", rank: "S+", maxHp: 106, minAtk: 11, maxAtk: 16, xp: 125, img: "arene", filter: "hue-rotate(330deg) saturate(1.5)", desc: "Élite. Il ne se bat pas, il laisse la haine se battre. Vous avez déjà perdu la moitié." },
      { name: "Vétéran Noir Alpha", rank: "S+", maxHp: 163, minAtk: 13, maxAtk: 20, xp: 190, img: "arene", filter: "sepia(0.5) saturate(1.6) contrast(1.35)", weight: 0.6, desc: "Alpha élite. Mille batailles, zéro doute, une envie : la mille et unième, avec vous." }
    ],
    bossG: { name: "Phobos & Deimos", rank: "S+", maxHp: 259, minAtk: 14, maxAtk: 20, xp: 606, img: "arene", filter: "hue-rotate(300deg) saturate(1.5)", crown: true, desc: "La Peur et la Terreur, les chiens d'Arès. Ils arrivent toujours avant leur maître ; le pire, c'est que c'est vrai." },
    bossD: { name: "Arès", rank: "S+", maxHp: 319, minAtk: 16, maxAtk: 22, xp: 654, img: "areneB", filter: "hue-rotate(-25deg) saturate(2.4) contrast(1.4)", crown: true, desc: "Le Seigneur des Batailles. Il vous regarde comme un soir sans combat : une insulte personnelle." },
  },
  {
    id: "enfers",
    label: "Ombres des Enfers",
    emoji: "😈",
    gName: "Les Enfers",
    dName: "Les Enfers",
    pool: [
      { name: "Ombre des Asphodèles", rank: "S+", maxHp: 88, minAtk: 10, maxAtk: 16, xp: 90, img: "enfers", filter: "grayscale(0.6) brightness(1.05)", desc: "Elle broute l'éternité dans les champs gris. Votre passage, c'est déjà la fête du quartier." },
      { name: "Spectre de l'Achéron", rank: "S+", maxHp: 95, minAtk: 10, maxAtk: 16, xp: 95, img: "enfers", filter: "hue-rotate(200deg) saturate(1.2)", desc: "Il a fini sa traversée, pas sa contrariété. Le fleuve lui a laissé l'âme humide." },
      { name: "Erinye Égarée", rank: "S+", maxHp: 90, minAtk: 10, maxAtk: 16, xp: 98, img: "enfers", filter: "hue-rotate(310deg) contrast(1.3)", desc: "Elle cherchait un parjure à châtier. Un mensonge de plus ou de moins, qui ça regarde ?" },
      { name: "Spectre Royal Alpha", rank: "S+", maxHp: 145, minAtk: 12, maxAtk: 19, xp: 152, img: "enfers", filter: "brightness(0.85) saturate(1.4)", weight: 0.6, desc: "Alpha. Il est mort roi, il s'est réveillé encore plus décidé. On ne lui a pas rendu sa couronne." }
    ],
    elite: [
      { name: "Juge des Morts", rank: "S+", maxHp: 110, minAtk: 11, maxAtk: 16, xp: 125, img: "enfers", filter: "grayscale(0.5) contrast(1.3)", desc: "Élite. Il a pesé votre vie avant même votre arrivée. Le plateau de gauche penchait déjà." },
      { name: "Ombre Royale", rank: "S+", maxHp: 118, minAtk: 12, maxAtk: 18, xp: 130, img: "enfers", filter: "sepia(0.3) saturate(1.3)", desc: "Élite. Sa couronne fondue dans la peau du front, il ne l'a jamais retirée. Elle ne sort plus." },
      { name: "Guetteur des Enfers", rank: "S+", maxHp: 112, minAtk: 11, maxAtk: 18, xp: 132, img: "enfers", filter: "hue-rotate(190deg) brightness(0.85)", desc: "Élite. Trois mille ans de garde sans une pause. Vous êtes sa première pause depuis l'aube du monde." },
      { name: "Juge Noir Alpha", rank: "S+", maxHp: 172, minAtk: 15, maxAtk: 21, xp: 200, img: "enfers", filter: "grayscale(0.4) contrast(1.5)", weight: 0.6, desc: "Alpha élite. Il juge, il exécute, il archive. La paperasse des Enfers est éternelle. Lui aussi." }
    ],
    bossG: { name: "Cerbère", rank: "S+", maxHp: 272, minAtk: 15, maxAtk: 21, xp: 638, img: "enfers", filter: "sepia(0.4) saturate(1.5)", crown: true, desc: "Le Gardien des Mortels. Trois têtes. De votre point de vue, le problème tient dans les trois têtes." },
    bossD: { name: "Hadès", rank: "S+", maxHp: 335, minAtk: 18, maxAtk: 22, xp: 688, img: "enfersB", filter: "hue-rotate(220deg) saturate(1.6) brightness(0.8)", crown: true, desc: "Le Roi des Ombres. Sa couronne brûle d'un feu bleu qui ne réchauffe personne. Surtout pas vous." },
  },
  {
    id: "echidna",
    label: "Rejetons d'Échidna",
    emoji: "🐲",
    gName: "Le Repaire d'Échidna",
    dName: "Le Repaire d'Échidna",
    pool: [
      { name: "Rejeton d'Échidna", rank: "S+", maxHp: 94, minAtk: 10, maxAtk: 17, xp: 96, img: "echidna", filter: "saturate(1.4)", desc: "Chaque monstre célèbre a une mère. Chaque mère a une portée. En voilà un." },
      { name: "Lionceau de Némée", rank: "S+", maxHp: 101, minAtk: 12, maxAtk: 17, xp: 101, img: "echidna", filter: "sepia(0.35) saturate(1.5)", desc: "Sa peau est déjà trop dure pour votre épée. Son humeur, elle, reste de lionceau." },
      { name: "Serpent à Deux Souffles", rank: "S+", maxHp: 96, minAtk: 10, maxAtk: 17, xp: 104, img: "echidna", filter: "hue-rotate(120deg) saturate(1.4)", desc: "Feu par une bouche, gel par l'autre. Il ne sait jamais lui-même ce qui va sortir." },
      { name: "Rejeton Alpha", rank: "S+", maxHp: 153, minAtk: 13, maxAtk: 20, xp: 161, img: "echidna", filter: "contrast(1.35) saturate(1.6)", weight: 0.6, desc: "Alpha. Échidna l'a léché une fois. Maman est fière de sa petite terreur." }
    ],
    elite: [
      { name: "Chimère Adulte", rank: "S+", maxHp: 117, minAtk: 12, maxAtk: 18, xp: 133, img: "echidna", filter: "saturate(1.6)", desc: "Élite. Trois têtes pour un seul mauvais caractère. Le lion commande, mais le serpent tient les comptes." },
      { name: "Lion de Némée", rank: "S+", maxHp: 125, minAtk: 13, maxAtk: 18, xp: 138, img: "echidna", filter: "sepia(0.4) saturate(1.6)", desc: "Élite. Sa toison arrête les lames. Votre épée, elle, s'arrête d'elle-même, polie d'avance." },
      { name: "Serpent du Repaire", rank: "S+", maxHp: 120, minAtk: 12, maxAtk: 18, xp: 140, img: "echidna", filter: "hue-rotate(150deg) saturate(1.5)", desc: "Élite. Il garde les œufs de la Mère. Il n'en a jamais vu éclore : il ne mange que les visiteurs." },
      { name: "Chimère Mère Alpha", rank: "S+", maxHp: 182, minAtk: 16, maxAtk: 22, xp: 211, img: "echidna", filter: "saturate(1.8) contrast(1.3)", weight: 0.6, desc: "Alpha élite. La chimère qui a eu des petits : sa nichée a hérité de toutes ses bouches." }
    ],
    bossG: { name: "L'Hydre de Lerne", rank: "S+", maxHp: 286, minAtk: 16, maxAtk: 22, xp: 670, img: "echidna", filter: "hue-rotate(100deg) saturate(1.5)", crown: true, desc: "Coupez une tête, il en repousse deux. Prévoyez le sel et le feu, pas la hâte." },
    bossD: { name: "Typhon", rank: "S+", maxHp: 351, minAtk: 18, maxAtk: 25, xp: 722, img: "echidnaB", filter: "hue-rotate(-40deg) saturate(1.7) contrast(1.25)", crown: true, desc: "Le Père des Monstres. Cent têtes de serpent pour un seul ennemi, et le seul, c'est vous." },
  },
  {
    id: "tartare",
    label: "Prisonniers du Tartare",
    emoji: "⛓️",
    gName: "Le Tartare",
    dName: "Le Tartare",
    pool: [
      { name: "Prisonnier Éternel", rank: "S+", maxHp: 100, minAtk: 11, maxAtk: 18, xp: 103, img: "tartare", filter: "grayscale(0.4) contrast(1.3)", desc: "Ses chaînes sont plus longues que son passé. Il a le temps : il a toute la fin du monde." },
      { name: "Chaîne Vivante", rank: "S+", maxHp: 108, minAtk: 12, maxAtk: 18, xp: 108, img: "tartare", filter: "sepia(0.5) saturate(1.4)", desc: "Un maillon a appris à mordre, puis à se déplacer, puis à préférer ça aux autres maillons." },
      { name: "Ombre du Puits", rank: "S+", maxHp: 103, minAtk: 11, maxAtk: 18, xp: 111, img: "tartare", filter: "brightness(0.75)", desc: "Elle remonte quand quelqu'un regarde trop longtemps le bord. Vous regardez trop longtemps." },
      { name: "Prisonnier Brise-Chaines Alpha", rank: "S+", maxHp: 162, minAtk: 14, maxAtk: 20, xp: 170, img: "tartare", filter: "contrast(1.4) saturate(1.4)", weight: 0.6, desc: "Alpha. Il casse ses fers à mains nues. Le mur a gentiment refusé de rester." }
    ],
    elite: [
      { name: "Titan Mineur", rank: "S+", maxHp: 124, minAtk: 14, maxAtk: 19, xp: 140, img: "tartare", filter: "sepia(0.3) saturate(1.4)", desc: "Élite. Petit pour un titan, énorme pour vous. C'est le seul génitif qui compte." },
      { name: "Géant Rebelle", rank: "S+", maxHp: 132, minAtk: 14, maxAtk: 19, xp: 146, img: "tartare", filter: "saturate(1.5) contrast(1.2)", desc: "Élite. Il a couché les murs pour la énième fois. Le Tartare se reconstruit sans lui, par principe." },
      { name: "Gardien des Chaînes", rank: "S+", maxHp: 127, minAtk: 12, maxAtk: 19, xp: 148, img: "tartare", filter: "grayscale(0.5) sepia(0.3)", desc: "Élite. Il tient les clefs de tous les crimes du monde. La place pour le vôtre est déjà réservée." },
      { name: "Titan Noir Alpha", rank: "S+", maxHp: 192, minAtk: 16, maxAtk: 24, xp: 221, img: "tartare", filter: "sepia(0.4) saturate(1.6) contrast(1.35)", weight: 0.6, desc: "Alpha élite. Il porte ses chaînes comme des décorations. Le Tartare a démissionné pour lui." }
    ],
    bossG: { name: "Briarée", rank: "S+", maxHp: 300, minAtk: 16, maxAtk: 23, xp: 702, img: "tartare", filter: "grayscale(0.3) contrast(1.4)", crown: true, desc: "L'Hécatonchire aux cent bras. Il compte les coups sur vous de cent en cent : c'est le seul compte qui finit à zéro." },
    bossD: { name: "Cronos", rank: "S+", maxHp: 367, minAtk: 19, maxAtk: 26, xp: 756, img: "tartareB", filter: "hue-rotate(200deg) saturate(1.5) contrast(1.3)", crown: true, desc: "Le Roi Déchu du Temps. Sa faux a dévoré ses enfants et ses années. Elle a encore un creux pour vous." },
  },
  {
    id: "abysse",
    label: "Créatures des Abysses",
    emoji: "🌊",
    gName: "Les Abysses de Poséidon",
    dName: "Les Abysses de Poséidon",
    pool: [
      { name: "Hippocampe des Profondeurs", rank: "S+", maxHp: 106, minAtk: 11, maxAtk: 18, xp: 109, img: "abysse", filter: "hue-rotate(180deg) saturate(1.4)", desc: "Il tire des chars engloutis depuis des siècles. Le cocher est passé à autre chose : flotter." },
      { name: "Triton Noir", rank: "S+", maxHp: 115, minAtk: 13, maxAtk: 18, xp: 115, img: "abysse", filter: "hue-rotate(160deg) brightness(0.85)", desc: "Sa conque ne sonne que le requiem des marins. Il la joue bien, du fond." },
      { name: "Sirène des Profondeurs", rank: "S+", maxHp: 109, minAtk: 11, maxAtk: 18, xp: 118, img: "abysse", filter: "hue-rotate(140deg) saturate(1.5)", desc: "Sa chanson promet une maison au sec. Au fond, on est très loin d'être au sec." },
      { name: "Hippocampe Cavalier Alpha", rank: "S+", maxHp: 171, minAtk: 14, maxAtk: 21, xp: 179, img: "abysse", filter: "hue-rotate(190deg) saturate(1.7)", weight: 0.6, desc: "Alpha. Il porte une armure de corail. Le corail pousse sur ce qui coule trop lentement." }
    ],
    elite: [
      { name: "Cetus Mineur", rank: "S+", maxHp: 132, minAtk: 14, maxAtk: 20, xp: 148, img: "abysse", filter: "hue-rotate(170deg) saturate(1.4)", desc: "Élite. Un morceau de tempête avec des nageoires. Le large lui appartient ; l'étroit aussi." },
      { name: "Néréide Naufragée", rank: "S+", maxHp: 140, minAtk: 14, maxAtk: 21, xp: 154, img: "abysse", filter: "hue-rotate(150deg) brightness(1.1)", desc: "Élite. Elle dansait pour la mer. La mer l'a remerciée : elle danse désormais pour les naufrages." },
      { name: "Passeur des Courants", rank: "S+", maxHp: 134, minAtk: 13, maxAtk: 20, xp: 157, img: "abysse", filter: "hue-rotate(200deg) saturate(1.3)", desc: "Élite. Il connaît tous les fonds et tous les silences. Il choisit toujours le silence." },
      { name: "Cetus Noir Alpha", rank: "S+", maxHp: 202, minAtk: 17, maxAtk: 25, xp: 232, img: "abysse", filter: "hue-rotate(180deg) saturate(1.8) contrast(1.25)", weight: 0.6, desc: "Alpha élite. Les marins l'appellent « la longue peur ». Ceux qui l'ont vu n'appellent plus du tout." }
    ],
    bossG: { name: "Le Cetus", rank: "S+", maxHp: 314, minAtk: 18, maxAtk: 25, xp: 735, img: "abysse", filter: "hue-rotate(190deg) saturate(1.5)", crown: true, desc: "Le Fléau des Marins. Les cartes le dessinent en marge, parce qu'aucune carte ne tient au milieu." },
    bossD: { name: "Poséidon", rank: "S+", maxHp: 384, minAtk: 20, maxAtk: 27, xp: 791, img: "abysseB", filter: "hue-rotate(170deg) saturate(1.9) contrast(1.2)", crown: true, desc: "Le Souverain des Mers. Son trident décide de l'heure des marées. Il a décidé que c'était la vôtre." },
  },
  {
    id: "olympe",
    label: "Hérauts de l'Olympe",
    emoji: "👑",
    gName: "L'Olympe",
    dName: "L'Olympe",
    pool: [
      { name: "Aigle de l'Olympe", rank: "S+", maxHp: 113, minAtk: 13, maxAtk: 19, xp: 116, img: "olympe", filter: "sepia(0.3) saturate(1.5)", desc: "Le messager du Roi du Ciel. Son bec a livré plus de foudres que de messages." },
      { name: "Nymphé des Nuées", rank: "S+", maxHp: 122, minAtk: 13, maxAtk: 19, xp: 122, img: "olympe", filter: "brightness(1.2) saturate(1.3)", desc: "Elle vit dans la brume dorée. Elle a vu vos affaires dans la brume dorée. Elle en a parlé." },
      { name: "Héraut Céleste", rank: "S+", maxHp: 116, minAtk: 12, maxAtk: 19, xp: 125, img: "olympe", filter: "sepia(0.25) brightness(1.15)", desc: "Il proclame les volontés du Père des Dieux. Il proclame aussi les vôtres : en queue de liste." },
      { name: "Aigle Royal Alpha", rank: "S+", maxHp: 180, minAtk: 14, maxAtk: 23, xp: 188, img: "olympe", filter: "sepia(0.35) saturate(1.7) contrast(1.3)", weight: 0.6, desc: "Alpha. Il a volé plus haut que la foudre. La foudre, depuis, prend son chemin." }
    ],
    elite: [
      { name: "Gardien des Nuées", rank: "S+", maxHp: 139, minAtk: 14, maxAtk: 20, xp: 157, img: "olympe", filter: "brightness(1.1) saturate(1.5)", desc: "Élite. Il garde la porte du ciel. Il ne l'ouvre que pour le tonnerre, jamais pour la pluie de visiteurs." },
      { name: "Char Solaire", rank: "S+", maxHp: 148, minAtk: 14, maxAtk: 22, xp: 162, img: "olympe", filter: "sepia(0.4) saturate(1.8)", desc: "Élite. Les chevaux d'Hélios ont pris de l'avance sur leur maître. Le passage vous est facturé." },
      { name: "Ombre Divine", rank: "S+", maxHp: 142, minAtk: 14, maxAtk: 20, xp: 165, img: "olympe", filter: "grayscale(0.5) brightness(1.05)", desc: "Élite. Ce qui reste d'un dieu oublié : un reflet, une rancune, et beaucoup de vide." },
      { name: "Gardien Doré Alpha", rank: "S+", maxHp: 212, minAtk: 17, maxAtk: 26, xp: 244, img: "olympe", filter: "sepia(0.3) saturate(1.9) contrast(1.3)", weight: 0.6, desc: "Alpha élite. L'Olympe l'a doré à la main. La main s'est brûlée ; lui, il brille toujours." }
    ],
    bossG: { name: "Héra", rank: "S+", maxHp: 328, minAtk: 19, maxAtk: 26, xp: 768, img: "olympe", filter: "saturate(1.6) brightness(1.1)", crown: true, desc: "La Reine du Ciel. Elle garde l'escalier du trône de son mari. Rien ne la lasse autant qu'une visite sans annonce." },
    bossD: { name: "Zeus", rank: "S+", maxHp: 400, minAtk: 22, maxAtk: 29, xp: 834, img: "olympeB", filter: "sepia(0.2) saturate(2) contrast(1.4)", crown: true, desc: "Le Père des Dieux. Au sommet de l'Olympe, sa foudre charge le ciel entier. C'est ici que l'histoire du Joueur se joue sa fin." },
  },
];

const ALL_FAMILIES: Family[] = [...FAMILIES, ...FAMILIES_F, ...FAMILIES_E, ...FAMILIES_A, ...FAMILIES_S, ...FAMILIES_SS, ...FAMILIES_SSS, ...FAMILIES_SP];

/* Mini-boss rare : peut apparaître une seule fois par donjon (1% par salle), toutes catégories */
const MINI_BOSS: MonsterDef = {
  name: "Livre Enchanté",
  rank: "???",
  maxHp: 60,
  minAtk: 3,
  maxAtk: 6,
  xp: 60,
  img: "d6",
  desc: "Un grimoire animé rôde entre les salles. Arrachez-lui ses pages : elles alimentent la création de nouveaux sorts.",
};

/* ============================ PIÈGES ET ÉNIGMES ============================
   Répartis par palier de difficulté (choix de Maximilien, 13/11/2026) :
   tier 0 = donjons G/F (facile, comme à l'origine), tier 1 = E/D, tier 2 = C/B,
   tier 3 = A/S, tier 4 = SS/SSS/S+ (très difficile : indices cryptiques, options piégées).
   Échouer ne coûte plus de PV : un monstre embusqué surgit (voir spawnAmbush). */
const TRAPS_BY_TIER: Trap[][] = [
  [
    {
      text: "Le couloir s'élargit. Le sol est jonché de feuilles mortes — étrangement, une trace parfaitement propre serpente au centre de la salle, comme balayée par un gardien invisible.",
      options: [
        { label: "Suivre la trace propre au centre", safe: false },
        { label: "Longer le mur de droite, au milieu des feuilles", safe: true },
        { label: "Traverser en diagonale au petit trot", safe: false },
      ],
      hint: "Une trace trop propre dans un donjon est un appât : elle longe les dalles à pression piégées. Marchez dans les feuilles en longeant le mur.",
    },
    {
      text: "Des fils brillants tendus au ras du sol traversent la salle d'un pilier à l'autre. La poussière qui les recouvre s'agite à hauteur de cheville ; plus haut, l'air semble parfaitement immobile.",
      options: [
        { label: "Marcher droit devant vous, d'un pas assuré", safe: false },
        { label: "Enjamber prudemment les fils à hauteur de cheville", safe: true },
        { label: "Ramper sous les fils, au plus près du sol", safe: false },
      ],
      hint: "Les fils actifs sont à hauteur de cheville : enjambez-les. Un second réseau, plus bas, punit ceux qui rampent.",
    },
    {
      text: "La salle est humide. Des flaques stagnantes s'étalent au centre ; un étroit chemin sec serpente le long du mur de gauche, comme si quelqu'un l'avait entretenu.",
      options: [
        { label: "Traverser les flaques au centre", safe: false },
        { label: "Suivre le chemin sec le long du mur de gauche", safe: true },
        { label: "Sauter de dalle en dalle", safe: false },
      ],
      hint: "Les flaques recouvrent des runes de choc. Le chemin sec, lui, est inactif.",
    },
    {
      text: "Un léger cliquetis vient du plafond. Des trous d'aération parsèment les dalles du centre de la salle, et l'odeur d'huile chaude flotte dans l'air. Le long du mur, de vieux anneaux de fer forment une main courante.",
      options: [
        { label: "Traverser par le centre, entre les trous d'aération", safe: false },
        { label: "Longer le mur en se tenant aux anneaux de fer", safe: true },
        { label: "Courir très vite, sans réfléchir", safe: false },
      ],
      hint: "Les dalles du centre cachent des lance-fléchettes huilés. La main courante du mur est la voie sûre.",
    },
    {
      text: "Le sol est couvert de dalles aux runes effacées, sauf une rangée qui luit du violet familier des Portes. Au-dessus de la porte opposée, une gouttière suinte et inonde la rangée centrale d'une eau trouble.",
      options: [
        { label: "Emprunter la rangée aux runes violettes", safe: true },
        { label: "Éviter les runes : passer par la rangée mouillée", safe: false },
        { label: "Sauter de pilier en pilier", safe: false },
      ],
      hint: "La lueur violette est celle des Portes : inerte. L'eau trouble, elle, conduit les runes de choc.",
    },
    {
      text: "Un gouffre traverse la salle. Une poutre étroite le franchit au centre, et deux cordes pendent à l'aplomb du vide : l'une neuve, raide, brillante ; l'autre usée, effilochée par d'innombrables mains.",
      options: [
        { label: "Prendre la corde neuve, elle paraît plus solide", safe: false },
        { label: "Suivre la poutre du centre", safe: false },
        { label: "Prendre la corde effilochée par les mains", safe: true },
      ],
      hint: "La corde effilochée a porté mille Veilleurs sans céder. La corde neuve, elle, attend son premier pendu — et la poutre du centre n'a jamais fini de craquer.",
    },
    {
      text: "Le sol alterne gravier crissant et dalles de pierre lisse. Au plafond, des chauves-souris dorment en grappes serrées, remuant à chaque bruit.",
      options: [
        { label: "Traverser par le gravier, en marchant doucement", safe: false },
        { label: "Ramper sur le gravier pour être discret", safe: false },
        { label: "Traverser sur les dalles lisses", safe: true },
      ],
      hint: "Le gravier crisse même sous les genoux et réveille la grappe. Seules les dalles lisses portent des pas silencieux.",
    },
    {
      text: "Deux passages s'ouvrent en face. L'un souffle une tiédeur sèche qui sent le brûlé ; l'autre laisse passer une brise fraîche qui sent la pierre mouillée.",
      options: [
        { label: "Le passage tiède qui sent le brûlé", safe: false },
        { label: "Percer un trou dans le mur entre les deux", safe: false },
        { label: "Le passage à la brise fraîche", safe: true },
      ],
      hint: "Ce qui sent le brûlé a déjà mangé des imprudents. La brise fraîche vient d'un couloir vivant — suivez-la.",
    },
    {
      text: "Une fontaine déversée au centre de la salle. L'eau s'égoutte en deux filets : l'un disparaît dans une grille au sol, l'autre stagne en flaque noire.",
      options: [
        { label: "Suivre la rigole jusqu'à la grille", safe: true },
        { label: "Longer la flaque noire", safe: false },
        { label: "Boire à la fontaine avant de choisir", safe: false },
      ],
      hint: "L'eau qui fuit par la grille suit un passage de service. La flaque noire, elle, dort sur des runes affamées — et la fontaine n'est pas de l'eau.",
    },
    {
      text: "Un nuage de spores poudroie au centre de la salle, oscillant doucement. Le long des murs, l'air est clair et immobile.",
      options: [
        { label: "Traverser au centre en retenant son souffle", safe: false },
        { label: "Courir tout droit, les spores fuiront le vent", safe: false },
        { label: "Longer les murs, là où l'air est clair", safe: true },
      ],
      hint: "Les spores réagissent au souffle comme au pas. Restez près des murs, où l'air n'a rien à nourrir.",
    },
  ],
  [
    {
      text: "Quatre statues de veilleurs bordent la salle, chacune tenant une torche éteinte. Trois socles portent des traces de suie ancienne — ces torches ont brûlé des milliers de fois. Le quatrième socle est propre, et la mousse y a poussé sans crainte.",
      options: [
        { label: "Allumer la torche du socle propre", safe: false },
        { label: "Allumer une torche sur un socle couvert de suie", safe: true },
        { label: "Pousser la statue du socle propre devant vous", safe: false },
        { label: "Traverser en courant entre les statues", safe: false },
      ],
      hint: "Les socles couverts de suie ont brûlé mille fois sans jamais rien réveiller. Le socle propre, lui, n'attend qu'une étincelle.",
    },
    {
      text: "Un pont de corde enjambe un ravin, arrosé par une cascade latérale. Les planches du pont paraissent neuves — remplacées trop récemment. Sous la cascade, une corniche étroite dégouline d'écume ; l'écume sent le minéral, pas la mousse vivante.",
      options: [
        { label: "Emprunter le pont de corde aux planches neuves", safe: false },
        { label: "Passer sous la cascade par la corniche", safe: true },
        { label: "Sauter le ravin à l'endroit le plus étroit", safe: false },
        { label: "Couper le pont pour en faire une corde de descente", safe: false },
      ],
      hint: "Des planches neuves dans un donjon, c'est un appât entretenu. La corniche est creusée par des générations de passages : l'eau y est pure.",
    },
    {
      text: "Cinq dalles de marbre sonnent creux sous la botte. Deux rendent une note claire, une troisième une note sourde, et les deux dernières vibrent longuement — comme des cordes tendues sous la pierre.",
      options: [
        { label: "Traverser sur les deux dalles à la note claire", safe: true },
        { label: "Traverser sur la dalle à la note sourde, plus rapide", safe: false },
        { label: "Traverser sur les dalles qui vibrent, elles sonnent solides", safe: false },
        { label: "Contourner en grimpant sur les rebords de la salle", safe: false },
      ],
      hint: "Seule une dalle pleine sonne clair. La note sourde cache un vide ; les dalles qui vibrent sont reliées à des mécanismes.",
    },
    {
      text: "La végétation envahit cette salle. Un sentier d'herbes hautes traverse au centre, mais leurs brins pointent tous à contresens de votre marche — comme peignés par une main soigneuse. De part et d'autre, l'air sent l'ozone et les fougères sont noircies à leur base.",
      options: [
        { label: "Suivre le sentier d'herbes hautes", safe: false },
        { label: "Passer par les fougères noircies, au ras du sol", safe: true },
        { label: "Balayer devant vous avec votre arme pour tout déclencher", safe: false },
        { label: "Attendre que l'herbe cesse de bouger avant de passer", safe: false },
      ],
      hint: "Un sentier peigné est un appât. Les fougères noircies ont déjà pris la décharge : le sol sous elles est vide de mana.",
    },
    {
      text: "Le couloir descend et l'air s'épaissit. Quatre lanternes garnissent les murs : trois fuient une huile qui empeste le feu grégeois, la quatrième est sèche, sale de cendres — et un courant d'air frais entre par une faille juste au-dessus d'elle.",
      options: [
        { label: "Allumer les lanternes à huile pour y voir clair", safe: false },
        { label: "Suivre le courant d'air frais, lanterne sèche éteinte", safe: true },
        { label: "Boucher la faille à courant d'air pour ne rien alerter", safe: false },
        { label: "Ramper sous la brume épaisse, au ras du sol", safe: false },
      ],
      hint: "L'huile empeste le feu grégeois : une étincelle et le couloir devient four. Le courant frais vient d'un passage praticable — et la brume lourde stagne au ras du sol.",
    },
    {
      text: "Des gradins descendent vers une arène de sable au centre de la salle. Les marches des gradins sont polies, usées jusqu'à la moelle. Le sable de l'arène, lui, est d'une blancheur parfaite — sans une seule empreinte.",
      options: [
        { label: "Traverser l'arène de sable, c'est le plus court", safe: false },
        { label: "Longer le bord du sable, au ras des gradins", safe: false },
        { label: "Monter et suivre les gradins usés", safe: true },
        { label: "Attendre que le donjon éteigne ses lumières", safe: false },
      ],
      hint: "Les gradins polis ont porté des foules entières. Le sable sans empreinte est le lit d'un piège qui n'y a jamais couché personne — pour l'instant.",
    },
    {
      text: "Cinq tonneaux alignés contre le mur. Quatre portent un bouchon neuf, ciré, luisant. Le cinquième est fermé d'un vieux tampon usé, cerclé de coulures séchées, avec une louche effrangée pendue à son flanc.",
      options: [
        { label: "Le tonneau au bouchon neuf le plus brillant", safe: false },
        { label: "Ouvrir les cinq tonneaux pour comparer", safe: false },
        { label: "Le tonneau le plus lourd au son", safe: false },
        { label: "Le tonneau à la louche usée et aux coulures", safe: true },
      ],
      hint: "Les coulures séchées et la louche effrangée disent un tonneau bu des milliers de fois. Les bouchons neufs, eux, cachent ce que le donjon veut qu'on trouve.",
    },
    {
      text: "La salle est une bibliothèque effondrée. Cinq couloirs de rayons la traversent : sur quatre, les livres sont grignotés, farineux, travaillés par les mites ; sur le cinquième, les tranches sont intactes et la poussière dort à plat.",
      options: [
        { label: "Le couloir aux livres intacts, c'est le plus propre", safe: false },
        { label: "Escalader le sommet des rayons au lieu de traverser", safe: false },
        { label: "Un couloir grignoté par les mites", safe: true },
        { label: "Le couloir du milieu, entre deux rayons", safe: false },
      ],
      hint: "Les mites ne s'installent que là où les runes sont mortes depuis longtemps. Les tranches intactes le sont parce que rien n'ose y vivre — pas même un insecte.",
    },
    {
      text: "Des lézards des galeries se prélassent sur trois corniches, indolents, repus. Une quatrième corniche, plus large et plus accueillante, en est déserte — pas un animal n'y a jamais pris le soleil.",
      options: [
        { label: "La corniche déserte, de loin la plus large", safe: false },
        { label: "Faire fuir les lézards pour voir ce qu'ils abandonnent", safe: false },
        { label: "Passer par-dessous toutes les corniches", safe: false },
        { label: "Une corniche où se prélassent les lézards", safe: true },
      ],
      hint: "Les lézards ne se prélassent pas sur une corniche affamée : ils savent. La large corniche déserte est un appât de pierre — et les lézards ne mentent pas.",
    },
    {
      text: "Quatre couloirs partent de la salle. L'un est barré d'une toile d'araignée intacte, tendue d'un mur à l'autre. Dans les trois autres, l'air circule librement — trop librement.",
      options: [
        { label: "Le couloir au courant d'air le plus fort", safe: false },
        { label: "Le couloir le plus spacieux", safe: false },
        { label: "Écarter la toile et fouiller chaque couloir un à un", safe: false },
        { label: "Le couloir barré par la toile intacte", safe: true },
      ],
      hint: "Une toile intacte trahit un couloir que rien ne fréquente — ni monstre, ni piège affamé de passage. Ce qui respire trop librement, ici, respire au service du donjon.",
    },
  ],
  [
    {
      text: "Cinq portes verrouillent la sortie. Chacune porte un glyphe : clos, clos-miroir, clos inversé, clos brisé, et un dernier copie conforme du clos. Quatre portes ont été murées récemment — le mortier frais les condamne presque toutes.",
      options: [
        { label: "La porte où les hachures s'arrêtent à la bordure du glyphe", safe: true },
        { label: "La porte au glyphe miroir du clos", safe: false },
        { label: "La porte au clos inversé", safe: false },
        { label: "La porte au clos brisé — un donjon ne brise pas ses fermetures", safe: false },
        { label: "La porte à la copie conforme du clos, la mieux gravée", safe: false },
      ],
      hint: "Seul le vrai « clos » est gravé dans la pierre : les hachures de fond s'arrêtent net à sa bordure. Sur les moulages, elles la chevauchent — et le mortier frais trahit les murées.",
    },
    {
      text: "Cinq chaînes descendent du plafond au-dessus du gouffre central. Quatre sont intactes, huilées, brillantes. La cinquième est rouillée, rapiécée, aux maillons tordus — mais la pierre au pied de cette chaîne est polie par des siècles de mains.",
      options: [
        { label: "La chaîne rouillée aux maillons tordus", safe: true },
        { label: "La chaîne huilée la plus proche", safe: false },
        { label: "La chaîne neuve au centre", safe: false },
        { label: "Sauter le gouffre plutôt que s'y suspendre", safe: false },
        { label: "Tirer fort sur chaque chaîne pour la tester avant", safe: false },
      ],
      hint: "Le piège entretient ses appâts : les chaînes huilées sont neuves. Seule la chaîne rouillée a une ancre polie par des siècles d'usage.",
    },
    {
      text: "Des yeux de pierre surveillent la salle depuis les murs — trente, quarante regards figés. Cinq allées mènent à la sortie. Sur quatre, les yeux les plus proches sont propres et luisants. Sur la cinquième, les yeux sont éteints, fissurés, et la poussière y a repris ses droits.",
      options: [
        { label: "L'allée aux yeux éteints et fissurés", safe: true },
        { label: "L'allée centrale, aux yeux les mieux lustrés", safe: false },
        { label: "L'allée la plus large, à droite", safe: false },
        { label: "L'allée que balaye un courant d'air", safe: false },
        { label: "Aucune : briser les yeux de pierre un à un avant d'avancer", safe: false },
      ],
      hint: "Les yeux luisants sont branchés au mécanisme. Seule l'allée aux yeux fissurés a été rendue aveugle — la poussière y dort tranquille.",
    },
    {
      text: "Un autel obstrue le passage. Cinq offrandes sont gravées autour du socle : le vin, l'or, la cendre, l'os et le silence. Quatre gravures sont polies, luisantes, visitées. La cinquième est restée brute, jamais touchée par les mains.",
      options: [
        { label: "Se courber devant la gravure brute du silence", safe: true },
        { label: "Déposer une gelée de soin sur la gravure du vin", safe: false },
        { label: "Frotter une pièce d'or sur la gravure de l'or", safe: false },
        { label: "Rompre le jeûne en mangeant devant l'autel", safe: false },
        { label: "Renverser l'autel : la voie est derrière", safe: false },
      ],
      hint: "Le polissage trahit le paiement — et l'autel guette ce qui n'a jamais été payé. La seule gravure brute est celle du silence : c'est elle qu'il faut honorer.",
    },
    {
      text: "Un sablier monumental trône au centre, entouré de cinq cercles de dalles gravés de la rune du temps. Quatre cercles ont vu leur sable s'échapper par des fissures. Le cinquième garde son sable intact — et le plafond au-dessus de lui est effondré.",
      options: [
        { label: "Traverser par un cercle au sable écoulé", safe: true },
        { label: "Traverser par le cercle au sable intact", safe: false },
        { label: "Renverser le sablier monumental", safe: false },
        { label: "Ramper sur les joints entre les cercles", safe: false },
        { label: "Lancer une pierre sur chaque cercle avant de passer", safe: false },
      ],
      hint: "Le piège tire quand le sable coule : les cercles vidés ont déjà fait feu. Le cercle intact est bandé — et le plafond effondré au-dessus vous montre où il tape.",
    },
    {
      text: "Cinq sarcophages de pierre bordent la salle. Quatre portent des inscriptions maudites au burin frais ; le cinquième est rayé de coups, repoussé, pillé mille fois par des générations de pilleurs.",
      options: [
        { label: "Le sarcophage du fond, aux inscriptions les plus fraîches", safe: false },
        { label: "Soulever les cinq couvercles un à un", safe: false },
        { label: "Creuser sous la salle plutôt que d'ouvrir un sarcophage", safe: false },
        { label: "Le sarcophage intact du centre", safe: false },
        { label: "Le sarcophage rayé de burin, pillé mille fois", safe: true },
      ],
      hint: "Les pillards ont ouvert le rayé mille fois sans jamais rien réveiller : il est vide de tout, piège compris. Les inscriptions fraîches, elles, viennent tout juste d'être réécrites.",
    },
    {
      text: "Des lucioles poudroient dans la salle. Un essaim dense et tourbillonnant brille au centre comme une lanterne ; de-ci de-là, quelques lucioles éparses luisent au bord des allées, seules ou par deux.",
      options: [
        { label: "L'allée que traverse l'essaim dense", safe: false },
        { label: "L'allée la plus sombre, sans une luciole", safe: false },
        { label: "Suivre une luciole au hasard", safe: false },
        { label: "Éteindre votre lanterne pour vous fondre dans la nuit", safe: false },
        { label: "Une allée aux lucioles éparses", safe: true },
      ],
      hint: "L'essaim dense se nourrit d'une fleur qui rend service pour mieux manger. Les lucioles éparses ne s'attardent que là où le pollen est honnête.",
    },
    {
      text: "Cinq tuyaux d'orgue grands comme des arbres traversent la salle de part en part. Quatre chantent à chaque courant d'air — un chant de sirène, régulier, patient. Le cinquième, ébréché, rend un souffle muet.",
      options: [
        { label: "Passer sous le tuyau au chant le plus doux", safe: false },
        { label: "Passer sous le chant le plus grave", safe: false },
        { label: "Marcher en rythme avec le chant", safe: false },
        { label: "Se boucher les oreilles et traverser au centre", safe: false },
        { label: "Passer sous le tuyau ébréché, muet", safe: true },
      ],
      hint: "Le chant des tuyaux est l'alarme : quatre sont accordés au mécanisme. Seul l'ébréché a perdu sa voix — et, avec elle, son lien à la machinerie.",
    },
    {
      text: "Un ruisseau traverse la salle et se jette dans un puits. Cinq passerelles de bois le franchissent : quatre sont stériles, raclées ; la cinquième est couverte d'une pelouse de champignons lumineux, bien portants.",
      options: [
        { label: "La passerelle stérile, raclée", safe: false },
        { label: "La passerelle la plus large", safe: false },
        { label: "Traverser à gué, dans le ruisseau", safe: false },
        { label: "Sauter sur chaque passerelle pour la tester", safe: false },
        { label: "La passerelle aux champignons lumineux", safe: true },
      ],
      hint: "Les myconides ne prospèrent pas à portée des runes affamées : leur pelouse dit l'inertie. La passerelle stérile est raclée pour une raison — demandez-vous laquelle.",
    },
    {
      text: "Cinq crânes de monstres ornent des piques de fer. Quatre sont frais, polis, oints d'une huile qui luit ; le cinquième est ancien, écaillé, délaissé — le donjon ne l'a pas touché depuis des siècles.",
      options: [
        { label: "Un crâne frais et poli", safe: false },
        { label: "Le plus grand des cinq crânes", safe: false },
        { label: "Renverser les cinq crânes d'un coup de bâton", safe: false },
        { label: "Ramper entre les piques", safe: false },
        { label: "Le crâne ancien, délaissé", safe: true },
      ],
      hint: "Le donjon oint ce qui lui sert : les crânes frais sont des déclencheurs entretenus. Le délaissé a cessé d'intéresser le piège — il n'est plus branché à rien.",
    },
  ],
  [
    {
      text: "Le mana stagne dans cette salle à double fond. Cinq passages s'ouvrent en face. Quatre baignent dans le même silence de cave ; dans le cinquième, vos pas mettent un battement de cœur de plus à vous revenir — à peine, comme si l'air y était plus profond.",
      options: [
        { label: "Le passage où votre écho tarde d'un battement", safe: true },
        { label: "Le passage le plus parfaitement silencieux", safe: false },
        { label: "Le passage où le mana stagne le plus", safe: false },
        { label: "Le passage au sol le plus usé", safe: false },
        { label: "Franchir les cinq l'un après l'autre en marquant les intersections", safe: false },
      ],
      hint: "Un air qui traîne est un air qui respire : ce passage a une sortie. Les autres sont des culs-de-sac armés — leur silence parfait est fabriqué.",
    },
    {
      text: "Cinq portes jumelles. Quatre suent une condensation tiède, presque vivante ; la cinquième est glacée, givrée jusqu'à la poignée. Le givre de la cinquième croît vers l'intérieur — comme si le froid venait d'ailleurs.",
      options: [
        { label: "La porte givrée : le froid vient d'au-delà", safe: true },
        { label: "La porte tiède à la condensation la plus fine", safe: false },
        { label: "La porte dont la poignée est la plus polie", safe: false },
        { label: "Une porte tiède au hasard : elles sont identiques", safe: false },
        { label: "Percer le mur entre deux portes", safe: false },
      ],
      hint: "Les portes tièdes sont des chairs de donjon : elles vous digèrent. Seule la porte givrée donne sur un couloir d'air libre.",
    },
    {
      text: "Le sol de la galerie est humide partout — sauf une dalle au centre, parfaitement sèche et poussiéreuse. L'humidité dessine autour d'elle un cercle net, comme une auréole autour d'un feu éteint.",
      options: [
        { label: "Sauter par-dessus la dalle sèche, pieds dans l'eau", safe: true },
        { label: "Poser le pied sur la dalle sèche, la seule où l'on ne glisse pas", safe: false },
        { label: "Marcher sur la limite humide de l'auréole", safe: false },
        { label: "Escalader la paroi au-dessus de la dalle", safe: false },
        { label: "Verser de l'eau sur la dalle sèche pour la réveiller en douceur", safe: false },
      ],
      hint: "Dans une salle humide, une dalle sèche n'est pas une aubaine : elle boit. Des runes assoiffées y attendent un corps plus riche que l'eau. Marchez dans l'eau, sautez la dalle.",
    },
    {
      text: "Des cristaux de mana pendent des cinq voûtes de la caverne. Quatre chantent à l'unisson, une note pure et grave ; le cinquième est muet, voilé de poussière d'or. À chacun de vos pas, le chant monte d'un ton — ou descend, vous ne savez plus.",
      options: [
        { label: "Passer sous le cristal muet", safe: true },
        { label: "Passer sous le cristal au chant le plus grave", safe: false },
        { label: "Passer sous le cristal au chant le plus aigu", safe: false },
        { label: "Se boucher les oreilles et traverser au centre", safe: false },
        { label: "Chanter à l'unisson pour se fondre dans le chœur", safe: false },
      ],
      hint: "Le chant des cristaux est un appel : ceux qui chantent sont chargés. Le muet a déjà tout déversé — la poussière d'or est la cicatrice de sa décharge.",
    },
    {
      text: "Cinq couloirs divergent du rond-point. Votre perception du mana tourne comme une boussole à aiguille vivante : elle tremble vers le premier, s'oriente franchement vers le deuxième, tourne le dos au troisième, hésite entre le quatrième et le cinquième. Le troisième couloir, seul, est exempt de poussière.",
      options: [
        { label: "Le deuxième : l'aiguille s'y oriente franchement", safe: false },
        { label: "Le troisième : la poussière n'y est pas, il est fréquenté", safe: false },
        { label: "Le couloir dos à l'aiguille, poussiéreux et à contre-courant", safe: true },
        { label: "L'un des deux entre lesquels l'aiguille hésite", safe: false },
        { label: "Le premier : l'aiguille y tremble, signe de passage récent", safe: false },
      ],
      hint: "Un piège à mana dévore le flux : l'aiguille pointe sur son gosier. Prenez le contre-courant — et méfiez-vous des couloirs trop nets : c'est l'entretien du donjon.",
    },
    {
      text: "Cinq pendules de fer battent dans la pénombre, chacun au-dessus d'un passage. Quatre battent à l'unisson — au même battement que votre cœur, remarquez-le à peine. Le cinquième traîne d'un demi-battement.",
      options: [
        { label: "Le passage sous le pendule le plus proche de votre rythme", safe: false },
        { label: "Le passage le plus éloigné des pendules", safe: false },
        { label: "Stopper les pendules avant d'avancer", safe: false },
        { label: "Fermer les yeux et laisser votre cœur choisir", safe: false },
        { label: "Le passage sous le pendule décalé", safe: true },
      ],
      hint: "Les pendules synchrones comptent avec le mécanisme — le vôtre compris. Seul le décalé a déjà tiré sa charge : sa dérive est la cicatrice du tir.",
    },
    {
      text: "Cinq volées d'escaliers plongent vers le bas. Sur quatre, la poussière dort à plat, tassée. Sur la cinquième, elle s'élève en volutes lentes, portée par un courant qui vient du fond.",
      options: [
        { label: "La volée à la poussière plate, la plus tassée", safe: false },
        { label: "La volée la moins usée", safe: false },
        { label: "Compter les marches du haut avant de choisir", safe: false },
        { label: "La volée centrale", safe: false },
        { label: "La volée où la poussière s'élève", safe: true },
      ],
      hint: "Une poussière qui monte est portée par un air qui circule : il y a une issue quelque part en bas. Les volées plates respirent le clos — et le clos de ce donjon est armé.",
    },
    {
      text: "Cinq arches se succèdent. Passé le seuil de chacune, l'air change : quatre ont un goût métallique, de sang de mana ; la cinquième sent la pluie sur la pierre chaude.",
      options: [
        { label: "L'arche au goût de sang de mana", safe: false },
        { label: "L'arche où le mana stagne le plus fortement", safe: false },
        { label: "L'arche la plus haute", safe: false },
        { label: "Avancer sans respirer, au hasard des arches", safe: false },
        { label: "L'arche à l'odeur de pluie", safe: true },
      ],
      hint: "Un air métallique est un air qui a été bu et rendu : le piège y affame. L'odeur de pluie dit un orage quelque part — donc un dehors, donc un passage vivant.",
    },
    {
      text: "Cinq couloirs. Quatre sont propres, balayés, presque accueillants ; le cinquième est noir de suie ancienne — des traînées de torches d'avant le cataclysme courent encore à hauteur de main.",
      options: [
        { label: "Le couloir le plus propre", safe: false },
        { label: "Un couloir balayé, au hasard des quatre", safe: false },
        { label: "Le couloir balayé le plus large", safe: false },
        { label: "Tracer votre propre traînée de torche dans un couloir propre", safe: false },
        { label: "Le couloir noir de suie ancienne", safe: true },
      ],
      hint: "Le donjon balaie ses appâts. La suie, elle, est l'écriture des Veilleurs d'avant : ils sont passés là, vivants, et rien ne les a rattrapés depuis.",
    },
    {
      text: "Une onde de choc ancienne a figé la salle : le sol est vitrifié, fondu en une glace noire craquelée sur toute l'étendue. Seul un îlot de pierre intact, au centre, a été épargné par la fonte.",
      options: [
        { label: "Traverser par l'îlot de pierre intacte", safe: false },
        { label: "Longer les murs, le sol y est moins fendu", safe: false },
        { label: "Attendre que la vitre refroidisse", safe: false },
        { label: "Sauter d'îlot en îlot", safe: false },
        { label: "Traverser sur le sol vitrifié", safe: true },
      ],
      hint: "L'onde a déjà tout dévoré ici : la vitre est la cicatrice d'une charge vide. La pierre intacte a été épargnée pour rester armée — c'est le seul endroit de la salle qui attende encore.",
    },
  ],
  [
    {
      text: "Cinq dalles absolument identiques — même granit, même poussière, même silence. Aucune rune visible, aucun courant d'air. Le Système murmure seulement dans votre tête : « Il y a un mensonge dans cette salle. » Et de fait, quatre dalles portent une patine d'usure ; la cinquième est parfaite, trop parfaite, comme une promesse.",
      options: [
        { label: "La dalle parfaite, que rien n'a jamais touchée", safe: true },
        { label: "La dalle à la patine la plus ancienne", safe: false },
        { label: "La dalle à la patine la plus fraîche", safe: false },
        { label: "Aucune : franchir les cinq dalles d'un bond de mana", safe: false },
        { label: "Les cinq une à une, en retenant votre souffle", safe: false },
      ],
      hint: "Le mensonge n'est pas la dalle. Le mensonge est ce qui la recouvre.",
    },
    {
      text: "Un pont de pierre franchit le vide. Trois dalles s'y effritent, et l'une d'elles a été rebouchée au granit pâle, lisse et poli. Le donjon, de mémoire de vos propres salles, ne répare jamais ce qui ne lui sert pas.",
      options: [
        { label: "Les dalles effritées, que le donjon n'a jamais daigné réparer", safe: true },
        { label: "Le granit pâle du rebouchage, si lisse et si poli", safe: false },
        { label: "Sauter les trois dalles d'un seul bond", safe: false },
        { label: "Ramper le long du garde-corps", safe: false },
        { label: "Lâcher une pierre sur le granit pâle avant de passer", safe: false },
      ],
      hint: "Le donjon ne répare jamais ce qui est solide : il n'a pas touché aux dalles effritées. Le granit pâle a été poli pour recevoir exactement le poids d'un Veilleur.",
    },
    {
      text: "Cinq arcs en plein cintre se succèdent. Quatre ramènent à cette même salle — le donjon vous l'a déjà prouvé une fois. Aucun marquage ne tient : vos précédentes traces ont disparu des parois. Seule la poussière, quelque part, retombe à contresens de l'air.",
      options: [
        { label: "L'arc où la poussière retombe à contre-sens, vers vous", safe: true },
        { label: "L'arc le plus sombre, que la lumière n'atteint pas", safe: false },
        { label: "L'arc au sol le plus propre", safe: false },
        { label: "L'arc d'où vient l'air le plus frais", safe: false },
        { label: "Marquer chaque arc d'une page et les éliminer un à un", safe: false },
      ],
      hint: "La poussière dérangée retombe vers ce qui l'a dérangée : l'arc qui avance est celui qui vous a déjà vu passer. L'air frais vient de votre propre sillage — le donjon recycle même votre souffle.",
    },
    {
      text: "Cinq couloirs battent au rythme du donjon — un souffle lent que vous apprenez à lire. Quatre « respirent » ; le cinquième est plat, mort, sans pulsation perceptible. Votre instinct de Veilleur hurle de fuir le couloir mort. Votre pouvoir, lui, murmure que le piège, c'est le cœur qui bat.",
      options: [
        { label: "Le couloir mort, plat, sans pulsation", safe: true },
        { label: "Le couloir au souffle le plus lent", safe: false },
        { label: "Le couloir au souffle le plus profond", safe: false },
        { label: "Le couloir dont la pulsation répond à vos pas", safe: false },
        { label: "Attendre une pulsation entière et suivre le souffle dominant", safe: false },
      ],
      hint: "Ce qui bat se charge ; ce qui ne respire plus a déjà vidé sa charge. Mais le donjon sait que votre instinct vous y enverra de lui-même — le mensonge est peut-être dans le mensonge. Bonne chance, Joueur.",
    },
    {
      text: "Cinq passerelles. L'une grésille de runes instables, prêtes à rompre ; les quatre autres sont d'un calme d'outre-tombe. Le donjon se nourrit de votre peur depuis la première salle : chaque Veilleur qui a franchi cette salle a choisi le calme. Aucun n'est ressorti.",
      options: [
        { label: "La passerelle qui grésille de runes instables", safe: true },
        { label: "La passerelle calme la plus proche", safe: false },
        { label: "La passerelle calme au centre", safe: false },
        { label: "Celle dont la balustrade est polie par les mains", safe: false },
        { label: "Aucune : attendre que les runes instables s'éteignent d'elles-mêmes", safe: false },
      ],
      hint: "Le calme est fabriqué — la peur, elle, dit la vérité : des runes instables sont des runes en train de mourir, et ce qui meurt ne peut plus vous tuer. Les passerelles calmes attendent sagement un corps. C'est ainsi que le donjon se nourrit.",
    },
    {
      text: "Cinq passages absolument semblables. Votre pas y revient cinq fois : quatre échos parfaits, identiques, à la nuance près. Le cinquième trahit une imperfection d'un souffle — écrasé, amorti, comme retenu par un pan de mur plus loin.",
      options: [
        { label: "Le passage à l'écho parfait et clair", safe: false },
        { label: "Le passage à l'écho allongé d'un souffle", safe: false },
        { label: "Le passage où l'écho revient le plus vite", safe: false },
        { label: "Le passage à l'écho le plus haut", safe: false },
        { label: "Le passage à l'écho écrasé d'un souffle", safe: true },
      ],
      hint: "Un écho écrasé frappe un mur amorti : quelque chose, là-bas, absorbe. Les échos parfaits, eux, sont accordés — et un accord, dans un donjon, est une nasse.",
    },
    {
      text: "Cinq torches brûlent au-dessus des cinq passages. Quand vous en croisez le regard, quatre s'inclinent — une politesse de serviteurs. La cinquième reste droite, indifférente, brûlant pour elle-même.",
      options: [
        { label: "Le passage de la torche qui s'incline le plus bas", safe: false },
        { label: "Le passage de la torche la plus vive", safe: false },
        { label: "Le passage de la torche la plus pâle", safe: false },
        { label: "Le passage entre deux torches inclinées", safe: false },
        { label: "Le passage de la torche restée droite", safe: true },
      ],
      hint: "Ce qui s'incline est suspendu au mécanisme. La torche droite ne doit rien au donjon : elle brûle sur un passage que la machinerie ne peut plus toucher.",
    },
    {
      text: "Cette salle est la copie exacte d'une salle que vous avez déjà traversée plus bas — même seuil, même fissure au coin du mur. Une seule différence : là où l'ancienne portait une large trace de brûlure au sol, celle-ci est parfaitement propre.",
      options: [
        { label: "Marcher sur l'endroit correspondant à la brûlure : il a déjà tiré là-bas", safe: false },
        { label: "Marcher au centre, loin de tout souvenir", safe: false },
        { label: "Marcher le long du mur fissuré, comme dans l'ancienne salle", safe: false },
        { label: "Gratter le sol partout pour vérifier", safe: false },
        { label: "Éviter l'endroit qui portait la brûlure dans l'ancienne salle", safe: true },
      ],
      hint: "La brûlure disait « j'ai tiré » — mais ici, rien n'a jamais tiré : la copie est propre parce que le piège n'y a pas encore fait feu. Méfiez-vous de vos souvenirs : le donjon les recopie aussi.",
    },
    {
      text: "Cinq dalles identiques rendent le même son quand vous les frappez du pied — le même, exactement : même note, même longueur, au même battement près. Seule votre ombre réagit : sur l'une des dalles, elle met un poil à vous rejoindre.",
      options: [
        { label: "La dalle où le son est le plus juste", safe: false },
        { label: "La dalle où le son traîne le plus", safe: false },
        { label: "La dalle la plus proche de la sortie", safe: false },
        { label: "Frapper les cinq dalles à nouveau, plus fort", safe: false },
        { label: "La dalle où votre ombre reste franche et nette", safe: true },
      ],
      hint: "Une note trop parfaite est un accord : les cinq dalles ont la même voix parce qu'elles sont branchées au même orgue. L'ombre tarde là où la lumière est bue — et ce qui boit la lumière boit aussi les pas.",
    },
    {
      text: "Cinq seuils. Votre Système n'y voit rien — c'est la première fois qu'il reste muet. Mais la Porte derrière vous, elle, a un battement : quand vous posez la main sur quatre des seuils, le battement s'affole. Sur un seul, il s'apaise.",
      options: [
        { label: "Le seuil qui apaise le battement de la Porte", safe: false },
        { label: "Le seuil neutre, indifférent", safe: false },
        { label: "Le seuil le plus proche de la Porte", safe: false },
        { label: "Tenter les cinq, un pas chacun", safe: false },
        { label: "Le seuil qui fait s'affoler le battement de la Porte", safe: true },
      ],
      hint: "La Porte ne s'apaise que lorsqu'on s'éloigne de sa sortie : elle panique quand vous la trouvez. Son battement est le seul aveu de ce donjon — ne le lisez pas à l'envers.",
    },
  ],
];

const RIDDLES_BY_TIER: Puzzle[][] = [
  [
    {
      q: "« Je dois être brisé avant de pouvoir servir. Que suis-je ? »",
      options: [
        { label: "Une cloche", correct: false },
        { label: "Un œuf", correct: true },
        { label: "Une promesse", correct: false },
      ],
    },
    {
      q: "« Plus j'en prends, plus j'en laisse derrière moi. Que suis-je ? »",
      options: [
        { label: "Du temps", correct: false },
        { label: "Des souvenirs", correct: false },
        { label: "Des pas", correct: true },
      ],
    },
    {
      q: "« Je n'ai ni bouche ni souffle, mais je réponds à chaque mot prononcé dans ces salles. Que suis-je ? »",
      options: [
        { label: "L'écho", correct: true },
        { label: "Le vent", correct: false },
        { label: "L'ombre", correct: false },
      ],
    },
    {
      q: "Une suite est gravée dans la pierre : 2, 4, 8, 16, … Quel nombre vient ensuite ?",
      options: [
        { label: "24", correct: false },
        { label: "32", correct: true },
        { label: "20", correct: false },
      ],
    },
    {
      q: "« Je grandis tant que je vis, et je meurs dans l'eau. Les Veilleurs m'emportent en expédition. Que suis-je ? »",
      options: [
        { label: "Une bougie", correct: true },
        { label: "Un miroir", correct: false },
        { label: "Une pierre runique", correct: false },
      ],
    },
    {
      q: "« Je n'ai pas de jambes, mais je cours dans les couloirs ; je n'ai pas de voix, mais je fais chanter les portes. Que suis-je ? »",
      options: [
        { label: "L'eau souterraine", correct: false },
        { label: "Le bruit", correct: false },
        { label: "Le vent", correct: true },
      ],
    },
    {
      q: "« Plus il y en a, moins on en voit. Que suis-je ? »",
      options: [
        { label: "L'obscurité", correct: true },
        { label: "La brume", correct: false },
        { label: "Le silence", correct: false },
      ],
    },
    {
      q: "« Qu'est-ce qui a des dents sans jamais mordre ? »",
      options: [
        { label: "Une scie", correct: false },
        { label: "Un lézard", correct: false },
        { label: "Un peigne", correct: true },
      ],
    },
    {
      q: "Une suite est gravée dans la pierre : 5, 10, 20, 40, … Quel nombre vient ensuite ?",
      options: [
        { label: "60", correct: false },
        { label: "100", correct: false },
        { label: "80", correct: true },
      ],
    },
    {
      q: "« Je te suis partout, mais je disparais dès qu'il fait nuit. Que suis-je ? »",
      options: [
        { label: "Ton reflet", correct: false },
        { label: "Le vent", correct: false },
        { label: "Ton ombre", correct: true },
      ],
    },
  ],
  [
    {
      q: "« Je commence la nuit et je finis le matin, et je me tiens tout entière au milieu de l'océan. Que suis-je ? »",
      options: [
        { label: "La lune", correct: false },
        { label: "La lettre N", correct: true },
        { label: "L'étoile polaire", correct: false },
        { label: "Le froid", correct: false },
      ],
    },
    {
      q: "Une suite est gravée dans la pierre : 1, 1, 2, 3, 5, 8, … Quel nombre vient ensuite ?",
      options: [
        { label: "11", correct: false },
        { label: "12", correct: false },
        { label: "13", correct: true },
        { label: "16", correct: false },
      ],
    },
    {
      q: "« On me jette quand on a besoin de moi, on me remonte quand on n'en a plus besoin. Que suis-je ? »",
      options: [
        { label: "Le grappin", correct: false },
        { label: "L'ancre", correct: true },
        { label: "La ligne", correct: false },
        { label: "La monnaie", correct: false },
      ],
    },
    {
      q: "« Je peux remplir une salle entière sans occuper la moindre place. Que suis-je ? »",
      options: [
        { label: "La lumière", correct: true },
        { label: "La peur", correct: false },
        { label: "Le silence", correct: false },
        { label: "L'eau", correct: false },
      ],
    },
    {
      q: "Une suite de runes : A, C, E, G, … Quelle lettre vient ensuite ?",
      options: [
        { label: "H", correct: false },
        { label: "I", correct: true },
        { label: "J", correct: false },
        { label: "K", correct: false },
      ],
    },
    {
      q: "« Plus on m'ôte, plus je grandis. Que suis-je ? »",
      options: [
        { label: "L'ennui", correct: false },
        { label: "Un trou", correct: true },
        { label: "Le vide", correct: false },
        { label: "La soif", correct: false },
      ],
    },
    {
      q: "Une suite est gravée dans la pierre : 3, 6, 12, 24, … Quel nombre vient ensuite ?",
      options: [
        { label: "36", correct: false },
        { label: "44", correct: false },
        { label: "52", correct: false },
        { label: "48", correct: true },
      ],
    },
    {
      q: "« Je peux faire le tour du monde sans jamais quitter mon coin. Que suis-je ? »",
      options: [
        { label: "Une rumeur", correct: false },
        { label: "Le vent", correct: false },
        { label: "Un timbre", correct: true },
        { label: "La lune", correct: false },
      ],
    },
    {
      q: "« J'ai un cou, mais je n'ai pas de tête. Que suis-je ? »",
      options: [
        { label: "Un serpent", correct: false },
        { label: "Un fleuve", correct: false },
        { label: "Un arbre", correct: false },
        { label: "Une bouteille", correct: true },
      ],
    },
    {
      q: "Une suite de runes : A, Z, B, Y, C, X, … Quelle lettre vient ensuite ?",
      options: [
        { label: "W", correct: false },
        { label: "E", correct: false },
        { label: "D", correct: true },
        { label: "G", correct: false },
      ],
    },
  ],
  [
    {
      q: "« J'ai des villes, mais pas de maisons ; des forêts, mais pas d'arbres ; des rivières, mais pas une goutte d'eau. Que suis-je ? »",
      options: [
        { label: "Un rêve", correct: false },
        { label: "Une carte", correct: true },
        { label: "Un mirage", correct: false },
        { label: "Un mensonge", correct: false },
        { label: "L'ombre", correct: false },
      ],
    },
    {
      q: "Une suite est gravée dans la pierre : 2, 3, 5, 7, 11, … Quel nombre vient ensuite ?",
      options: [
        { label: "12", correct: false },
        { label: "13", correct: true },
        { label: "14", correct: false },
        { label: "15", correct: false },
        { label: "16", correct: false },
      ],
    },
    {
      q: "Une horloge de donjon sonne 6 coups en 5 secondes. Combien de temps faudra-t-il pour 12 coups ?",
      options: [
        { label: "10 secondes", correct: false },
        { label: "11 secondes", correct: true },
        { label: "12 secondes", correct: false },
        { label: "20 secondes", correct: false },
        { label: "22 secondes", correct: false },
      ],
    },
    {
      q: "« Je sors chaud et vivant, je durcis en refroidissant ; les Veilleurs m'emportent, me rompent et me partagent. Que suis-je ? »",
      options: [
        { label: "La lave", correct: false },
        { label: "Le pain", correct: true },
        { label: "La pierre runique", correct: false },
        { label: "Le fer forgé", correct: false },
        { label: "La promesse", correct: false },
      ],
    },
    {
      q: "Une suite est gravée dans la pierre : 1, 2, 6, 24, 120, … Quel nombre vient ensuite ?",
      options: [
        { label: "240", correct: false },
        { label: "360", correct: false },
        { label: "600", correct: false },
        { label: "720", correct: true },
        { label: "960", correct: false },
      ],
    },
    {
      q: "« L'homme qui m'a fabriquée ne me porte pas ; celui qui m'a achetée ne me porte pas ; celui qui me porte ne le sait pas. Que suis-je ? »",
      options: [
        { label: "Une armure", correct: false },
        { label: "Un linceul", correct: false },
        { label: "Un cercueil", correct: true },
        { label: "Une chaîne", correct: false },
        { label: "Un secret", correct: false },
      ],
    },
    {
      q: "Une suite est gravée dans la pierre : 4, 6, 10, 14, 22, … Quel nombre vient ensuite ?",
      options: [
        { label: "24", correct: false },
        { label: "28", correct: false },
        { label: "26", correct: true },
        { label: "30", correct: false },
        { label: "34", correct: false },
      ],
    },
    {
      q: "Un nénuphar de mana double de taille chaque jour ; au 30e jour, il couvre toute la salle. Au bout de combien de jours couvrait-il la moitié de la salle ?",
      options: [
        { label: "15 jours", correct: false },
        { label: "20 jours", correct: false },
        { label: "25 jours", correct: false },
        { label: "28 jours", correct: false },
        { label: "29 jours", correct: true },
      ],
    },
    {
      q: "« Plus je sèche, plus je deviens mouillée. Que suis-je ? »",
      options: [
        { label: "Une larme", correct: false },
        { label: "Une serviette", correct: true },
        { label: "La rosée", correct: false },
        { label: "La mousse", correct: false },
        { label: "La pluie", correct: false },
      ],
    },
    {
      q: "« Le monstre pauvre en a, le boss riche en manque ; si vous en avalez, vous mourez. Que suis-je ? »",
      options: [
        { label: "L'air", correct: false },
        { label: "Rien", correct: true },
        { label: "La peur", correct: false },
        { label: "Le vide", correct: false },
        { label: "Le poison", correct: false },
      ],
    },
  ],
  [
    {
      q: "Tous les Groles sont des Draks. Certains Draks sont des Mûres. Quelle est la seule affirmation SÛRE ?",
      options: [
        { label: "Certains Groles sont des Mûres", correct: false },
        { label: "Aucun Grole n'est un Mûr", correct: false },
        { label: "Rien ne permet d'affirmer qu'un Grole soit un Mûr", correct: true },
        { label: "Tous les Draks sont des Groles", correct: false },
        { label: "Aucun Drak n'est un Mûr", correct: false },
      ],
    },
    {
      q: "Deux gargouilles gardent deux couloirs : l'une ment toujours, l'autre dit toujours la vérité, mais vous ignorez laquelle. Vous n'avez droit qu'à UNE question. Que demandez-vous pour trouver le couloir sûr ?",
      options: [
        { label: "« Quel couloir est le sûr ? »", correct: false },
        { label: "« Que me répondrait l'autre gargouille si je lui demandais le couloir sûr ? »", correct: true },
        { label: "« Est-ce que tu mens ? »", correct: false },
        { label: "« Quel couloir me conseilles-tu ? »", correct: false },
        { label: "« L'autre gargouille est-elle plus menteuse que toi ? »", correct: false },
      ],
    },
    {
      q: "Une suite secrète : 1, 2, 2, 4, 8, 32, … Quel nombre vient ensuite ?",
      options: [
        { label: "64", correct: false },
        { label: "128", correct: false },
        { label: "192", correct: false },
        { label: "256", correct: true },
        { label: "384", correct: false },
      ],
    },
    {
      q: "Dix chandelles brûlent dans une salle obscure. Le courant d'air en éteint trois ; deux autres se consument entièrement jusqu'à la base. Combien restera-t-il de chandelles à la fin ?",
      options: [
        { label: "10", correct: false },
        { label: "5", correct: false },
        { label: "3", correct: true },
        { label: "0", correct: false },
        { label: "2", correct: false },
      ],
    },
    {
      q: "Le boss des lieux a trois fois l'âge de son donjon. Dans 40 ans, il n'aura plus que le double de l'âge du donjon. Quel âge a le boss ?",
      options: [
        { label: "60 ans", correct: false },
        { label: "80 ans", correct: false },
        { label: "100 ans", correct: false },
        { label: "120 ans", correct: true },
        { label: "160 ans", correct: false },
      ],
    },
    {
      q: "Dans la salle des Veilleurs pétrifiés, huit corps sont alignés — des araignées tisseuses à huit pattes et des Veilleurs à deux. On compte 34 pattes. Combien y a-t-il d'araignées ?",
      options: [
        { label: "2", correct: false },
        { label: "4", correct: false },
        { label: "5", correct: false },
        { label: "6", correct: false },
        { label: "3", correct: true },
      ],
    },
    {
      q: "Une suite secrète : 2, 6, 12, 20, 30, … Quel nombre vient ensuite ?",
      options: [
        { label: "36", correct: false },
        { label: "40", correct: false },
        { label: "44", correct: false },
        { label: "50", correct: false },
        { label: "42", correct: true },
      ],
    },
    {
      q: "Une gravure runique se lit : 1, 4, 9, 61, 52, 63, … Quel nombre vient ensuite ?",
      options: [
        { label: "46", correct: false },
        { label: "73", correct: false },
        { label: "83", correct: false },
        { label: "100", correct: false },
        { label: "94", correct: true },
      ],
    },
    {
      q: "« Qu'est-ce qui appartient à chaque Veilleur, mais que les monstres utilisent bien plus souvent que lui ? »",
      options: [
        { label: "Son sang", correct: false },
        { label: "Son ombre", correct: false },
        { label: "Sa voix", correct: false },
        { label: "Sa peur", correct: false },
        { label: "Son nom", correct: true },
      ],
    },
    {
      q: "Neuf gelées de soin se ressemblent ; une seule est plus lourde. Avec une balance à deux plateaux, combien de pesées au MINIMUM garantissent de la trouver ?",
      options: [
        { label: "1", correct: false },
        { label: "3", correct: false },
        { label: "4", correct: false },
        { label: "5", correct: false },
        { label: "2", correct: true },
      ],
    },
  ],
  [
    {
      q: "Une suite runique : 1, 11, 21, 1211, 111221, … Quel nombre vient ensuite ?",
      options: [
        { label: "112211", correct: false },
        { label: "122211", correct: false },
        { label: "312211", correct: true },
        { label: "131122", correct: false },
        { label: "211121", correct: false },
      ],
    },
    {
      q: "Une suite secrète : 2, 3, 5, 9, 17, … Quel nombre vient ensuite ?",
      options: [
        { label: "25", correct: false },
        { label: "31", correct: false },
        { label: "33", correct: true },
        { label: "34", correct: false },
        { label: "49", correct: false },
      ],
    },
    {
      q: "Trois coffres de pierre. Sur le premier : « L'artefact est ici. » Sur le deuxième : « L'artefact n'est pas ici. » Sur le troisième : « L'artefact n'est pas dans le premier coffre. » Une seule de ces trois inscriptions dit vrai. Où est l'artefact ?",
      options: [
        { label: "Dans le premier coffre", correct: false },
        { label: "Dans le deuxième coffre", correct: true },
        { label: "Dans le troisième coffre", correct: false },
        { label: "Dans aucun coffre", correct: false },
        { label: "Impossible à déterminer", correct: false },
      ],
    },
    {
      q: "Trois gardes de pierre. Le premier grogne : « Nous mentons tous les trois. » Le second : « Exactement deux d'entre nous mentent. » Le troisième : « Le second ment. » Qui dit la vérité ?",
      options: [
        { label: "Personne", correct: false },
        { label: "Le premier garde", correct: false },
        { label: "Le deuxième garde uniquement", correct: true },
        { label: "Le troisième garde uniquement", correct: false },
        { label: "Le deuxième et le troisième", correct: false },
      ],
    },
    {
      q: "Le sorcier du donjon double les dégâts de son éclair à chaque incantation. Le premier éclair blesse de 10. De combien blesse le septième ?",
      options: [
        { label: "70", correct: false },
        { label: "320", correct: false },
        { label: "640", correct: true },
        { label: "1280", correct: false },
        { label: "120", correct: false },
      ],
    },
    {
      q: "Une suite runique : 6, 15, 35, 77, … Quel nombre vient ensuite ?",
      options: [
        { label: "110", correct: false },
        { label: "121", correct: false },
        { label: "143", correct: true },
        { label: "161", correct: false },
        { label: "165", correct: false },
      ],
    },
    {
      q: "Cinq boss se tiennent alignés. Le Roi Slime n'est ni premier ni dernier ; le Basilic Couronné se tient exactement entre le Roi Slime et l'Empereur Cuirassé ; l'Empereur Cuirassé est à côté du Vif-Feu Ancien. Qui est exactement au centre ?",
      options: [
        { label: "Le Roi Slime", correct: false },
        { label: "L'Empereur Cuirassé", correct: false },
        { label: "Le Vif-Feu Ancien", correct: false },
        { label: "On ne peut pas savoir", correct: false },
        { label: "Le Basilic Couronné", correct: true },
      ],
    },
    {
      q: "Le boss des lieux lance deux dés runiques à six faces. Quelle est la probabilité que la somme fasse 7 ?",
      options: [
        { label: "1/12", correct: false },
        { label: "1/9", correct: false },
        { label: "1/5", correct: false },
        { label: "2/9", correct: false },
        { label: "1/6", correct: true },
      ],
    },
    {
      q: "Une suite de runes sibyllines : U, D, T, Q, C, S, … Quelle est la lettre suivante ?",
      options: [
        { label: "H", correct: false },
        { label: "P", correct: false },
        { label: "N", correct: false },
        { label: "S", correct: true },
        { label: "O", correct: false },
      ],
    },
    {
      q: "Deux Veilleurs d'un ancien raid totalisaient ensemble 63 ans. L'aîné disait : « J'ai deux fois l'âge que tu avais quand j'avais ton âge. » Quel âge avait l'aîné ?",
      options: [
        { label: "30 ans", correct: false },
        { label: "33 ans", correct: false },
        { label: "40 ans", correct: false },
        { label: "42 ans", correct: false },
        { label: "36 ans", correct: true },
      ],
    },
  ],
];

/* Palier de difficulté des salles piège/énigme selon le rang du DONJON :
   G/F = 0 (facile) … SS/SSS/S+ = 4 (très difficile). */
function roomTier(rank: string): number {
  const i = RANK_INDEX[rank] ?? 0;
  if (i <= 1) return 0;
  if (i <= 3) return 1;
  if (i <= 5) return 2;
  if (i <= 7) return 3;
  return 4;
}

const TRAP_TIER_LABELS = ["Mécanique d'apprenti", "Ingénierie de vétéran", "Art d'élite", "Chef-d'œuvre de maître", "Conception interdite"];

/* Salles de repos (choix de Maximilien, ~3 % des salles) : une halte où le héros
   trouve une potion qui lui rend 50 % de ses PV max. */
const REST_TEXTS: string[] = [
  "Une fontaine de lueur sombre chuchote au centre de la salle. Son eau clapote, tiède et vivante — une fiole gravée de runes de soin repose sur le rebord, oubliée d'une expédition passée.",
  "Un campement de Veilleurs sommeille là depuis des siècles : couvertures tannées, gamelle renversée, et une besace pendue à une pique — une gelée de soin rouge luit à travers le tissu.",
  "Une source chaude perle du plafond dans un bassin naturel de pierre lisse. La vapeur sent la camomille des terres d'avant l'an 0 — et une potion d'urgence attend sur une corniche, à hauteur de main.",
  "L'alcôve est tapissée d'une mousse bleutée, douce comme un lit. Une statuette de guérisseur veille, sa coupe encore pleine d'un onguent ambré qui luit faiblement.",
  "Une réserve de l'AMV d'avant le cataclysme : caisses fendues, matériel effondré — et au milieu, une boîte de secours intacte, sa croix de soin encore peinte en rouge vif.",
  "Un vieux Veilleur de pierre, assis contre un mur, tend encore une fiole vers le couloir. Son offrande n'a jamais été refusée — la pierre de sa main est polie par des siècles de reconnaissance.",
];

/* ============================ QUÊTES ============================ */
/* 22 modèles de mission en 4 catégories (choix de Maximilien, 13/11/2026) :
   A = compteurs d'événements (courantes) · B = défis de Porte (un donjon entier
   sous contrainte, récompense majorée) · C = contrats de bestiaire (famille ou
   rang ciblé) · D = spéciales (rares, les mieux payées). Toutes passent par les
   compteurs : progression = compteur − départ, un seul et même mécanisme. */
type QuestCat = "A" | "B" | "C" | "D";
type QuestTpl = {
  cat: QuestCat;
  type: CounterKey;
  label: (n: number) => string;
  tmin: number;
  tmax: number;
  rmin: number;
  rmax: number;
};
const QUEST_TEMPLATES: QuestTpl[] = [
  /* — Catégorie A : compteurs d'événements — */
  { cat: "A", type: "kills", label: (n) => `Exterminer ${n} monstres`, tmin: 3, tmax: 6, rmin: 35, rmax: 60 },
  { cat: "A", type: "uses", label: (n) => `Utiliser vos compétences ${n} fois`, tmin: 8, tmax: 15, rmin: 25, rmax: 45 },
  { cat: "A", type: "rooms", label: (n) => `Explorer ${n} salles de donjon`, tmin: 3, tmax: 8, rmin: 30, rmax: 55 },
  { cat: "A", type: "potions", label: (n) => `Absorber ${n} gelée${n > 1 ? "s" : ""} de soin`, tmin: 1, tmax: 2, rmin: 15, rmax: 25 },
  { cat: "A", type: "xpGained", label: (n) => `Accumuler ${n} EXP`, tmin: 40, tmax: 120, rmin: 30, rmax: 50 },
  { cat: "A", type: "clears", label: () => `Refermer 1 donjon`, tmin: 1, tmax: 1, rmin: 80, rmax: 120 },
  { cat: "A", type: "alphas", label: (n) => `⚔️ Chasseur d'alphas : abattre ${n} alpha${n > 1 ? "s" : ""} (bêtes cheffaillonnes)`, tmin: 2, tmax: 4, rmin: 45, rmax: 70 },
  { cat: "A", type: "minibosses", label: (n) => `📖 Chasse aux Livres : terrasser ${n} Livre${n > 1 ? "s" : ""} Enchanté${n > 1 ? "s" : ""}`, tmin: 1, tmax: 3, rmin: 45, rmax: 70 },
  { cat: "A", type: "crits", label: (n) => `🎯 Précision mortelle : infliger ${n} coup${n > 1 ? "s" : ""} critique${n > 1 ? "s" : ""}`, tmin: 4, tmax: 8, rmin: 30, rmax: 50 },
  { cat: "A", type: "dodges", label: (n) => `🥋 Parade élégante : esquiver ${n} attaque${n > 1 ? "s" : ""} adverse${n > 1 ? "s" : ""}`, tmin: 3, tmax: 6, rmin: 30, rmax: 50 },
  { cat: "A", type: "traps", label: (n) => `🪤 Démineur : franchir ${n} piège${n > 1 ? "s" : ""} sans réveiller de gardien`, tmin: 2, tmax: 4, rmin: 40, rmax: 60 },
  { cat: "A", type: "riddles", label: (n) => `🧩 Énigme du Sphinx : résoudre ${n} énigme${n > 1 ? "s" : ""} de salle`, tmin: 2, tmax: 4, rmin: 40, rmax: 60 },
  { cat: "A", type: "ambushes", label: (n) => `🚨 L'embuscade retournée : vaincre ${n} gardien${n > 1 ? "s" : ""} déclenché${n > 1 ? "s" : ""} par vos erreurs`, tmin: 1, tmax: 3, rmin: 45, rmax: 70 },
  { cat: "A", type: "summons", label: (n) => `🐗 Invocateur : appeler ${n} invocation${n > 1 ? "s" : ""} au combat`, tmin: 3, tmax: 6, rmin: 25, rmax: 45 },
  { cat: "A", type: "deposits", label: (n) => `🏛 Patriote de l'AMV : consigner ${n} relique${n > 1 ? "s" : ""} auprès de Léa`, tmin: 1, tmax: 3, rmin: 40, rmax: 60 },
  { cat: "A", type: "skillUps", label: (n) => `✦ Élève studieux : faire progresser vos sorts ${n} fois`, tmin: 2, tmax: 4, rmin: 35, rmax: 55 },
  /* — Catégorie B : défis de Porte (récompenses majorées) — */
  { cat: "B", type: "flawless", label: () => `🩸 Sans une égratignure : refermer une Porte sans mourir une seule fois`, tmin: 1, tmax: 1, rmin: 120, rmax: 160 },
  { cat: "B", type: "sober", label: () => `🚫 Sobre et net : refermer une Porte sans absorber une seule gelée`, tmin: 1, tmax: 1, rmin: 100, rmax: 140 },
  { cat: "B", type: "speedClears", label: () => `⏱ Contre la montre : refermer une Porte avant la moitié du chrono`, tmin: 1, tmax: 1, rmin: 120, rmax: 160 },
  { cat: "B", type: "ruptureClears", label: () => `🔴 Cœur de la tempête : refermer une Porte en état de rupture`, tmin: 1, tmax: 1, rmin: 150, rmax: 200 },
  { cat: "B", type: "guardians", label: () => `🛡 Gardien de l'escouade : refermer une Porte en rupture sans un seul PNJ à terre`, tmin: 1, tmax: 1, rmin: 180, rmax: 240 },
  /* — Catégorie C : contrats de bestiaire — */
  { cat: "C", type: "elites", label: (n) => `👹 Chasseur d'élites : abattre ${n} monstre${n > 1 ? "s" : ""} de rang D ou plus`, tmin: 3, tmax: 6, rmin: 50, rmax: 75 },
  /* — Catégorie D : spéciales (rares) — */
  { cat: "D", type: "trainingAlphas", label: (n) => `🏋️ Palier d'entraînement : vaincre ${n} Slime Alpha en salle virtuelle`, tmin: 2, tmax: 4, rmin: 35, rmax: 55 },
];

/* ============================ HELPERS ============================ */
const rnd = (a: number, b: number) => Math.floor(Math.random() * (b - a + 1)) + a;
const pick = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];
const fmtClock = (ms: number) => {
  const s = Math.max(0, Math.ceil(ms / 1000));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
};
/* Temps avant rupture : IDENTIQUE pour toutes les Portes, quel que soit le nombre de salles (choix de Maximilien) */
const RUPTURE_TIME_LIMIT = 15 * 60 * 1000; /* temps de base : le chrono démarre à 15 min + 15 s par salle */
/* Seuil rouge + escouade de secours (choix de Maximilien, 13/11/2026 : « vraiment être
   dans l'urgence ») : les 2 DERNIÈRES minutes avant la rupture, au lieu de 15. */
const RESCUE_WINDOW = 2 * 60 * 1000;
const DEATH_PENALTY = [30, 60]; /* secondes gagnees par la Porte a chaque mort (30-60 s) */
const roomTime = (rooms: number) => RUPTURE_TIME_LIMIT + rooms * 15 * 1000; /* timer initial : 15 min + 15 s par salle */
/* Récompense de fermeture d'un donjon : croît avec le nombre de salles */
const clearExpReward = (roomCount: number) => 30 + roomCount * 4;
const clearGelReward = (roomCount: number) => 2 + Math.floor(roomCount / 20);
/* Coût en Pages de compétence pour forger le (n+1)-ième sort : 2e=2, 3e=10, 4e=20, puis doublement */
const pagesCost = (skillCount: number) => (skillCount <= 1 ? 2 : 10 * Math.pow(2, skillCount - 2));
/* Récompense de fermeture : doublée pour les Portes en rupture (raid avec escouade),
   et majorée pour les Portes rares S/SS/SSS (rareté = jackpot). */
const RANK_CLEAR_MULT: Record<string, number> = { S: 2, SS: 4, SSS: 8, "S+": 12 };
const dungeonReward = (roomCount: number, rupture: boolean, rank?: string) =>
  clearExpReward(roomCount) * (rupture ? 2 : 1) * (RANK_CLEAR_MULT[rank ?? ""] ?? 1);

function xpToNext(level: number) {
  return 100 * (level + 1);
}

const RANK_HINTS: Record<string, string> = {
  "SANS-RANG": "Non classé par l'AMV. Un « moins que rien ».",
  G: "Le premier échelon des Veilleurs.",
  F: "Débutants prometteurs.",
  E: "Veilleurs compétents.",
  D: "Veilleurs intermédiaires.",
  C: "Veilleurs expérimentés.",
  B: "Veilleurs confirmés.",
  A: "Veilleurs d'élite.",
  S: "Élite internationale.",
  SS: "Piliers mondiaux de l'AMV.",
  SSS: "Le sommet de l'échelle humaine.",
  "S+": "Au-delà de l'échelle AMV. Un cas d'étude pour l'Agence.",
};

function rankForLevel(level: number): { label: string; hint: string } {
  let label = "SANS-RANG";
  if (level >= 326) label = "IMPOSSIBLE À CLASSER";
  else if (level >= 276) label = "SSS";
  else if (level >= 226) label = "SS";
  else if (level >= 176) label = "S";
  else if (level >= 151) label = "A";
  else if (level >= 126) label = "B";
  else if (level >= 101) label = "C";
  else if (level >= 76) label = "D";
  else if (level >= 51) label = "E";
  else if (level >= 26) label = "F";
  else if (level >= 1) label = "G";
  return { label, hint: label === "IMPOSSIBLE À CLASSER" ? "Les instruments de l'AMV ne parviennent plus à mesurer ce pouvoir… Élu ?" : (RANK_HINTS[label] ?? "") };
}

/* Renommée AMV : le rang AMV est DECOUPLE du niveau (demande de Maximilien).
   Il progresse en deposant les reliques de boss au Bureau des reliques (Léa, la lectrice du coma).
   - seuils cumules de renommée pour atteindre chaque rang (SANS-RANG sous 10) ;
   - chaque relique rapporte selon le rang du donjon (x2 si Porte refermee en rupture). */
const AMV_XP_CURVE: Record<string, number> = { G: 10, F: 100, E: 300, D: 700, C: 1500, B: 3200, A: 6500, S: 13000, SS: 26000, SSS: 52000, "S+": 104000 };
const RELIC_XP: Record<string, number> = { G: 10, F: 25, E: 45, D: 70, C: 110, B: 170, A: 260, S: 420, SS: 700, SSS: 1200, "S+": 2000 };

function amvRankForXp(amvXp: number): { label: string; hint: string } {
  let label = "SANS-RANG";
  for (const r of RANK_ORDER_LIST) {
    if (amvXp >= (AMV_XP_CURVE[r] ?? Infinity)) label = r;
  }
  return { label, hint: RANK_HINTS[label] ?? "" };
}
function amvNextThreshold(amvXp: number): number | null {
  for (const r of RANK_ORDER_LIST) {
    const t = AMV_XP_CURVE[r];
    if (t !== undefined && amvXp < t) return t;
  }
  return null;
}

/* Progression par rang : acces et blocage d'EXP selon le RANG AMV (reliques).
   - acces : le joueur peut entrer dans un donjon de rang <= au sien ;
   - EXP : un donjon 2 rangs ou plus sous le rang du joueur ne donne plus d'EXP
     (rang A -> du B encore de l'EXP, du C et en dessous non) ; pages et butin conserves.
   - exception endgame : les donjons rang A et au-dessus donnent TOUJOURS de l'EXP
     (les Portes S/SS/SSS sont trop rares pour etre la seule source d'EXP). */
function rankEnterable(dungeonRank: string, amvRank: string): boolean {
  return (RANK_INDEX[dungeonRank] ?? 0) <= (RANK_INDEX[amvRank] ?? 0);
}
function rankXpAllowed(dungeonRank: string, amvRank: string): boolean {
  const d = RANK_INDEX[dungeonRank] ?? 0;
  return d >= RANK_INDEX.A || d >= (RANK_INDEX[amvRank] ?? 0) - 1;
}

function weightedRank(entries: [string, number][]): string {
  const total = entries.reduce((a, x) => a + x[1], 0);
  let r = Math.random() * total;
  for (const [rank, w] of entries) {
    r -= w;
    if (r < 0) return rank;
  }
  return entries[0][0];
}

/* Tirage d'un rang de Porte selon le rang AMV du joueur :
   bande glissante + part fixe des Portes rares S/SS/SSS/S+. */
function randomRank(playerRank: string): string {
  const idx = Math.min(SLIDING_BANDS.length - 1, Math.max(0, RANK_INDEX[playerRank] ?? 0));
  return weightedRank([...SLIDING_BANDS[idx], ...RARE_GATES]);
}

/* Bande utile garantie à chaque refresh : ton rang ou le rang −1 (G→A),
   une Porte A pour S et au-delà. JAMAIS de garantie sur S/SS/SSS/S+ (rareté sacrée). */
function usefulBand(playerRank: string): string[] {
  const idx = Math.max(0, RANK_INDEX[playerRank] ?? 0);
  if (idx === 0) return ["G"];
  if (idx >= RANK_INDEX.S) return ["A"];
  return [RANK_ORDER_LIST[idx - 1], RANK_ORDER_LIST[idx]];
}

/* Budget de rafraîchissement du radar de Yuna (choix de Maximilien, 13/11/2026) :
   pas de reroll à l'infini jusqu'à une Porte S. Le budget est restauré quand
   TOUTES les Portes de la page ont été refermées. */
const RADAR_REFRESH_LIMIT = 3;
/* Offres de Mira à rafraîchissement LIMITÉ (demande de Maximilien, 13/11/2026) :
   3 renouvellements d'affiches de suite, puis 30 minutes d'attente avant 3 nouveaux. */
const QUEST_REFRESH_LIMIT = 3;
const QUEST_REFRESH_COOLDOWN = 30 * 60 * 1000;

function skillDamage(skill: Skill, stats: Stats, buffMult = 1) {
  const statBonus = Math.floor((skill.type === "physique" ? stats.force : stats.intelligence) * 0.35 * buffMult);
  const lvlBonus = skill.level;
  return { min: skill.minDmg + statBonus + lvlBonus, max: skill.maxDmg + statBonus + lvlBonus };
}

/* Critique et esquive (choix de Maximilien, 13/11/2026) : base 5% chacun, puis
   +0,5% par point d'Agilité au-dessus de 5 ; plafond 50% pour le coup critique,
   40% pour l'esquive des ripostes. */
const critChance = (stats: Stats) => Math.min(0.5, 0.05 + Math.max(0, stats.agilite - 5) * 0.005);
const dodgeChance = (stats: Stats) => Math.min(0.4, 0.05 + Math.max(0, stats.agilite - 5) * 0.005);

/* Initiative (choix de Maximilien, 13/11/2026) : le monstre frappe le premier dans
   33% des combats — le joueur garde l'initiative dans les 66% restants. */
const MONSTER_INITIATIVE = 1 / 3;

/* ============================ BASE DE SORTS : 12 ARCHETYPES x 8 THEMES ============================
   Choix de Maximilien : une base maximale de mécaniques, le nom reste libre.
   Archetype (mécanique) x Type (physique/magique) x Theme (habillage).
   TOUT est disponible des la forge ; seule la puissance depend du niveau du sort. */
type KindDef = { id: SkillKind; label: string; icon: string; desc: string; basic?: boolean };
const SKILL_KINDS: KindDef[] = [
  { id: "frappe", label: "Frappe", icon: "⚔️", basic: true, desc: "Un coup droit fiable : dégâts 2–4 + stat ×0,35 + Nv." },
  { id: "soin", label: "Soin", icon: "💚", basic: true, desc: "Rend 6 + stat ×0,4 + Nv×2 PV — mais remplace votre attaque : le monstre frappe." },
  { id: "bouclier", label: "Bouclier", icon: "🛡️", basic: true, desc: "Érige 10 + stat ×0,5 + Nv×2 PV temporaires, absorbés avant vos PV (tout le combat)." },
  { id: "multifrappe", label: "Multifrappe", icon: "💥", basic: true, desc: "Deux frappes éclair à 65 % chacune du potentiel du sort." },
  { id: "lourde", label: "Frappe lourde", icon: "🗡️", desc: "Dégâts ×1,8 — mais la Porte gagne 30–60 s sur son chrono de rupture." },
  { id: "hemorragie", label: "Hémorragie", icon: "🩸", desc: "Frappe ×0,5 + saignement (2 + stat ×0,15 + Nv ×1,5)/tour pendant 3 tours." },
  { id: "invocation", label: "Invocation", icon: "🐗", desc: "Invoque la créature du thème : PV 20 + stat ×1 + Nv×2, atq 2 + stat ×0,15 + Nv. Une seule à la fois." },
  { id: "vampirisme", label: "Vampirisme", icon: "🧛", desc: "Dégâts ×0,8 dont vous volez la moitié en PV." },
  { id: "affaiblissement", label: "Affaiblissement", icon: "😵", desc: "−25 % l'attaque du monstre pendant 3 tours (jusqu'à −40 % avec le niveau)." },
  { id: "benediction", label: "Bénédiction", icon: "💪", desc: "+20 % la stat du sort pendant 3 tours (jusqu'à +35 % avec le niveau)." },
  { id: "commotion", label: "Commotion", icon: "⚡", desc: "Dégâts ×0,5 + 15 % de chance d'étourdir le monstre un tour (jusqu'à 40 %)." },
  { id: "sacrifice", label: "Sacrifice de sang", icon: "❤️‍🔥", desc: "Dégâts ×2,5 au prix de 8 % de vos PV actuels." },
];
const SKILL_THEMES: { id: ThemeId; label: string; icon: string; summon: string; emoji: string }[] = [
  { id: "feu", label: "Feu", icon: "🔥", summon: "Salamandre ardente", emoji: "🦎" },
  { id: "glace", label: "Glace", icon: "❄️", summon: "Loup de givre", emoji: "🐺" },
  { id: "sang", label: "Sang", icon: "🩸", summon: "Sanglier de sang", emoji: "🐗" },
  { id: "foudre", label: "Foudre", icon: "⚡", summon: "Faucon d'orage", emoji: "🦅" },
  { id: "vent", label: "Vent", icon: "🌪️", summon: "Aigle des vents", emoji: "🪶" },
  { id: "ombre", label: "Ombre", icon: "🌑", summon: "Panthère d'ombre", emoji: "🐆" },
  { id: "lumiere", label: "Lumière", icon: "✨", summon: "Cerf de lumière", emoji: "🦌" },
  { id: "terre", label: "Terre", icon: "⛰️", summon: "Ours de pierre", emoji: "🐻" },
];
/* Grades de sort (meme vocabulaire que les paliers de pieges) : 0-49 apprenti… 200+ interdit. */
const SKILL_GRADES = ["Apprenti", "Vétéran", "Élite", "Maître", "Interdit"];
const skillGrade = (level: number) => SKILL_GRADES[Math.min(4, Math.floor(level / 50))];
const kindDefOf = (k: SkillKind) => SKILL_KINDS.find((x) => x.id === k) ?? SKILL_KINDS[0];
const themeDefOf = (t: ThemeId) => SKILL_THEMES.find((x) => x.id === t) ?? SKILL_THEMES[0];
/* Compatibilite des sauvegardes v1 anterieures aux archetypes : on complete kind/theme. */
const normSkill = (s: Skill): Skill => ({ kind: "frappe", theme: "feu", ...s });
/* Stat directrice du sort (Force ou Intelligence) avec la Bénédiction appliquée. */
const skillStatOf = (skill: Skill, stats: Stats, buffMult = 1) =>
  (skill.type === "physique" ? stats.force : stats.intelligence) * buffMult;

/* Aperçu textuel de l'effet d'un sort, selon son archétype. */
function kindEffectText(skill: Skill, stats: Stats): string {
  const S = skillStatOf(skill, stats);
  const Nv = skill.level;
  const d = skillDamage(skill, stats);
  switch (skill.kind) {
    case "frappe": return `Dégâts ${d.min}–${d.max}`;
    case "multifrappe": return `2 frappes · ≈${Math.max(1, Math.round(d.min * 0.65))}–${Math.max(1, Math.round(d.max * 0.65))} chacune`;
    case "lourde": return `Dégâts ×1,8 (≈${Math.round(d.min * 1.8)}–${Math.round(d.max * 1.8)}) · ⏱ +30–60 s sur la Porte`;
    case "soin": return `Rend ${6 + Math.floor(S * 0.4) + Nv * 2} PV · occupe votre tour`;
    case "hemorragie": return `Frappe ×0,5 · saignement ${2 + Math.floor(S * 0.15) + Math.round(Nv * 1.5)}/tour (3 tours)`;
    case "invocation": return `Créature : ${20 + Math.floor(S) + Nv * 2} PV · atq ${2 + Math.floor(S * 0.15) + Nv}+`;
    case "bouclier": return `+${10 + Math.floor(S * 0.5) + Nv * 2} PV temporaires (tout le combat)`;
    case "vampirisme": return `Dégâts ×0,8 · vole 50 % des dégâts en PV`;
    case "affaiblissement": return `−${Math.round((0.25 + Math.min(0.15, Nv * 0.001)) * 100)} % atq ennemie (3 tours)`;
    case "benediction": return `+${Math.round((0.2 + Math.min(0.15, Nv * 0.001)) * 100)} % stat du sort (3 tours)`;
    case "commotion": return `Dégâts ×0,5 · ${Math.round(Math.min(40, 15 + Nv * 0.25))} % d'étourdir`;
    case "sacrifice": return `Dégâts ×2,5 · coût : 8 % de vos PV actuels`;
  }
}

/* Récompenses de Mira indexées sur le NIVEAU du joueur (choix de Maximilien) :
   multiplicateur 1 + 0,25 x niveau -> une quête reste une part ~constante
   de la barre de niveau, quelle que soit la progression. */
const questScale = (level: number) => 1 + level * 0.25;

function genQuestBoard(counters: Record<CounterKey, number>, idBase: number, level: number): Quest[] {
  const mult = questScale(level);
  /* Tirages dynamiques figés au moment de l'offre : une famille (contrat), un
     archétype (duel), un rang plancher (faisceau) et un rang d'échantillon (Léa). */
  const fam = pick(ALL_FAMILIES);
  const kd = pick(SKILL_KINDS);
  const rk = pick(["F", "E", "D"] as ("F" | "E" | "D")[]);
  const rr = pick(["D", "C", "B"] as ("D" | "C" | "B")[]);
  const pool: QuestTpl[] = [
    ...QUEST_TEMPLATES,
    { cat: "C", type: `fam:${fam.id}`, label: (n) => `📜 Contrat de la Porte : abattre ${n} ${fam.label.toLowerCase()}`, tmin: 4, tmax: 8, rmin: 45, rmax: 70 },
    { cat: "B", type: `duel:${kd.id}`, label: () => `🗡 Duel d'archétype : achever le boss d'une Porte avec un sort ${kd.label} ${kd.icon}`, tmin: 1, tmax: 1, rmin: 130, rmax: 180 },
    { cat: "C", type: `rank${rk}`, label: (n) => `🎯 Faisceau rouge : abattre ${n} monstre${n > 1 ? "s" : ""} de rang ${rk} ou plus`, tmin: 4, tmax: 8, rmin: 40, rmax: 65 },
    { cat: "D", type: `relic${rr}`, label: () => `🔬 L'échantillon de Léa : consigner le noyau d'un boss de rang ${rr} ou plus`, tmin: 1, tmax: 1, rmin: 140, rmax: 200 },
  ];
  /* Composition du tableau : 2 quêtes A (courantes), 1 C (bestiaire), 1 B (défi de
     Porte), et une dernière partagée entre défi et spéciale — B et D restent rares
     mais mieux payées. */
  const draw = (list: QuestTpl[]) => list.splice(Math.floor(Math.random() * list.length), 1)[0];
  const aT = pool.filter((t) => t.cat === "A");
  const bT = pool.filter((t) => t.cat === "B");
  const cT = pool.filter((t) => t.cat === "C");
  const dT = pool.filter((t) => t.cat === "D");
  const chosen = [draw(aT), draw(aT), draw(cT), draw(bT), draw(Math.random() < 0.5 ? bT : dT)];
  /* Seule la quête « Accumuler X EXP » voit son objectif suivre le niveau ; les actions (kills, uses…) restent brutes. */
  return chosen.map((t, i) => {
    const target = t.type === "xpGained" ? Math.round(rnd(t.tmin, t.tmax) * mult) : rnd(t.tmin, t.tmax);
    return {
      id: idBase * 100 + i,
      type: t.type,
      label: t.label(target),
      target,
      start: counters[t.type] ?? 0,
      progress: 0,
      reward: Math.round(rnd(t.rmin, t.rmax) * mult),
      done: false,
    };
  });
}

function genRooms(rank: string, size: number, familyId: string): Room[] {
  const fam = ALL_FAMILIES.find((f) => f.id === familyId) ?? FAMILIES[0];
  const elite = (RANK_INDEX[rank] ?? 0) >= RANK_INDEX.D;
  const pool = elite ? fam.elite : fam.pool;
  const boss = scaleDef(elite ? fam.bossD : fam.bossG, rank);
  const tier = roomTier(rank); /* pièges et énigmes plus difficiles dans les donjons profonds */
  const rooms: Room[] = [];
  let miniPlaced = false;
  for (let i = 0; i < size; i++) {
    if (i === size - 1) {
      rooms.push({ type: "boss", def: boss, done: false });
    } else if (rank === "S+" && i === size - 2) {
      /* Panthéon grec : gardien mythique garanti en avant-dernière salle ; le dieu referme la Porte. */
      rooms.push({ type: "miniboss", def: scaleDef(fam.bossG, rank), done: false, guardian: true });
    } else if (!miniPlaced && Math.random() < 0.01) {
      rooms.push({ type: "miniboss", def: MINI_BOSS, done: false });
      miniPlaced = true;
    } else {
      const r = rnd(1, 100);
      if (r <= 12) rooms.push({ type: "piege", trap: pick(TRAPS_BY_TIER[tier]), done: false });
      else if (r <= 24) rooms.push({ type: "enigme", puzzle: pick(RIDDLES_BY_TIER[tier]), done: false });
      else if (r <= 27) rooms.push({ type: "repos", rest: pick(REST_TEXTS), done: false });
      else rooms.push({ type: "monstre", def: scaleDef(pickMonster(pool), rank), done: false });
    }
  }
  return rooms;
}

function trainingSlime(n: number): MonsterDef {
  if (n > 0 && n % 4 === 0)
    return { name: "Slime Alpha", rank: "G", maxHp: 42, minAtk: 3, maxAtk: 5, xp: 30, img: "c2", filter: "hue-rotate(45deg) saturate(1.3)", desc: "Variante alpha. Un peu plus dense, un peu plus grognon." };
  return { name: "Slime d'Entraînement", rank: "G", maxHp: 30, minAtk: 2, maxAtk: 3, xp: 15, img: "c2", desc: "Créature gélatineuse inoffensive générée par les donjons de rang G." };
}

/* Escouade de secours PNJ assignée par l'AMV sur les Portes en rupture */
const NPC_POOL: Omit<Companion, "hp">[] = [
  { name: "Marc Vidier", rank: "G", emoji: "🧔", maxHp: 45, minAtk: 3, maxAtk: 5 },
  { name: "Inès Marchal", rank: "G", emoji: "👩‍🦰", maxHp: 38, minAtk: 4, maxAtk: 6 },
  { name: "Yacine Belkacem", rank: "F", emoji: "🧑‍🦱", maxHp: 60, minAtk: 4, maxAtk: 7 },
  { name: "Soizic Le Goff", rank: "F", emoji: "🧝‍♀️", maxHp: 55, minAtk: 5, maxAtk: 8 },
  { name: "Théo Ribeyre", rank: "E", emoji: "🕵️", maxHp: 80, minAtk: 6, maxAtk: 10 },
  { name: "Anne-Sophie Loisel", rank: "E", emoji: "👩‍🦳", maxHp: 75, minAtk: 7, maxAtk: 11 },
];

function genSquad(roomCount: number): Companion[] {
  const size = roomCount >= 30 ? 2 : 1;
  const pool = [...NPC_POOL];
  const squad: Companion[] = [];
  for (let i = 0; i < size && pool.length > 0; i++) {
    const n = pool.splice(Math.floor(Math.random() * pool.length), 1)[0];
    squad.push({ ...n, hp: n.maxHp });
  }
  return squad;
}

/* ============================ PETITS COMPOSANTS ============================ */
function Panel({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <div className={"overflow-hidden rounded-xl border border-indigo-400/30 shadow-[0_0_40px_-10px_rgba(99,102,241,0.5)] " + (className ?? "")}>
      <img src={src} alt={alt} className="h-full w-full object-cover" />
    </div>
  );
}

function RankBadge({ rank, className }: { rank: string; className?: string }) {
  return (
    <span className={"rounded px-1.5 py-0.5 text-[10px] font-bold ring-1 " + (RANK_BADGE[rank] ?? RANK_BADGE.G) + " " + (className ?? "")}>
      {rank === "S+" ? "S+" : "RANG " + rank}
    </span>
  );
}

function GlowButton({
  children,
  onClick,
  disabled,
  variant = "primary",
  className,
}: {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  variant?: "primary" | "ghost";
  className?: string;
}) {
  const base = "rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed";
  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-[0_0_25px_-5px_rgba(139,92,246,0.8)] hover:scale-[1.03] hover:shadow-[0_0_35px_-5px_rgba(139,92,246,1)]"
      : "bg-white/5 border border-indigo-400/30 text-indigo-200 hover:bg-indigo-400/15 hover:scale-[1.02]";
  return (
    <button className={`${base} ${styles} ${className ?? ""}`} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

function HpBar({ hp, max, color }: { hp: number; max: number; color: string }) {
  const pct = Math.max(0, Math.min(100, (hp / max) * 100));
  return (
    <div className="h-3 w-full overflow-hidden rounded-full bg-black/50 ring-1 ring-white/10">
      <motion.div className={"h-full rounded-full " + color} animate={{ width: `${pct}%` }} transition={{ duration: 0.5 }} />
    </div>
  );
}

function XpBar({ xp, next }: { xp: number; next: number }) {
  const pct = Math.max(0, Math.min(100, (xp / next) * 100));
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-black/50 ring-1 ring-white/10">
      <motion.div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400" animate={{ width: `${pct}%` }} transition={{ duration: 0.6 }} />
    </div>
  );
}

function Modal({ title, onClose, children }: { title: string; onClose: () => void; children: React.ReactNode }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-indigo-400/40 bg-[#0b1026] p-6 shadow-[0_0_60px_-10px_rgba(99,102,241,0.7)]"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold tracking-wide text-indigo-200">{title}</h2>
          <button className="text-white/50 hover:text-white" onClick={onClose}>
            ✕
          </button>
        </div>
        {children}
      </motion.div>
    </motion.div>
  );
}

function StatSheet({
  name,
  level,
  xp,
  stats,
  skill,
  febrileLeft,
  skillCount,
  amvXp,
}: {
  name: string;
  level: number;
  xp: number;
  stats: Stats;
  skill: Skill | null;
  febrileLeft?: number;
  skillCount?: number;
  amvXp: number;
}) {
  const rank = amvRankForXp(amvXp);
  const next = amvNextThreshold(amvXp);
  return (
    <div className="rounded-xl border border-cyan-300/30 bg-gradient-to-br from-[#0a1633] to-[#101b3d] p-5">
      <div className="mb-1 flex items-center justify-between">
        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-300/80">Fiche du Joueur</span>
        <span
          className={
            rank.label === "IMPOSSIBLE À CLASSER" || rank.label === "S+"
              ? "animate-pulse rounded bg-fuchsia-500/20 px-2 py-0.5 text-[10px] font-bold text-fuchsia-300 ring-1 ring-fuchsia-400/60"
              : "rounded bg-cyan-400/10 px-2 py-0.5 text-[10px] font-bold text-cyan-300 ring-1 ring-cyan-300/40"
          }
          title={rank.hint}
        >
          RANG AMV : {rank.label}
        </span>
      </div>
      <div className="mb-4 flex items-end justify-between">
        <div>
          <div className="text-xl font-bold text-white">{name}</div>
          <div className="text-xs text-white/50">Veilleur · Antenne AMV</div>
        </div>
        <div className="text-right">
          <span className="text-3xl font-black text-cyan-300">{level}</span>
          <span className="ml-1 text-xs text-white/50">Niveau</span>
        </div>
      </div>
      <div className="mb-1 flex justify-between text-[11px] text-white/60">
        <span>EXP</span>
        <span>{xp} / {xpToNext(level)}</span>
      </div>
      <XpBar xp={xp} next={xpToNext(level)} />
      <div className="mt-3 mb-1 flex justify-between text-[11px] text-cyan-300/70">
        <span>Renommée AMV 📖</span>
        <span>{next !== null ? `${amvXp} / ${next} — rang ${rank.label}` : `${amvXp} — rang ${rank.label} (maximum)`}</span>
      </div>
      {next !== null && <XpBar xp={amvXp} next={next} />}
      <div className="mt-4 grid grid-cols-2 gap-2">
        {STAT_INFO.map((s) => (
          <div key={s.key} className="rounded-lg bg-white/5 px-3 py-2 ring-1 ring-white/10" title={s.desc}>
            <div className="flex items-baseline justify-between">
              <span className="text-xs text-white/70">{s.label}</span>
              <span className="text-lg font-bold text-white">{stats[s.key]}</span>
            </div>
            <div className="mt-1 h-1 w-full rounded bg-black/40">
              <div className="h-full rounded bg-gradient-to-r from-indigo-400 to-cyan-300" style={{ width: `${Math.min(100, stats[s.key] * 10)}%` }} />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-3 text-[10px] italic text-white/40">Référence : un humain moyen possède environ 10 dans chaque caractéristique. Vous êtes… en dessous de la moyenne. Pour l'instant.</p>
      {typeof febrileLeft === "number" && febrileLeft > 0 && (
        <div className="mt-3 rounded-lg border border-red-400/40 bg-red-400/10 p-2 text-center text-[11px] font-bold text-red-300">
          🤒 ÉTAT FÉBRILE — toutes les caractéristiques -25 % · {fmtClock(febrileLeft)} restant
        </div>
      )}
      {skill && (
        <div className="mt-4 rounded-lg border border-violet-400/30 bg-violet-500/10 p-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold text-violet-200">
              {themeDefOf(skill.theme).icon} {skill.name} <span className="text-xs font-normal text-violet-300/70">({kindDefOf(skill.kind).label} · {skill.type === "physique" ? "Physique" : "Magique"})</span>
            </span>
            <span className="rounded bg-violet-400/20 px-2 py-0.5 text-xs font-bold text-violet-200 ring-1 ring-violet-300/40">Nv. {skill.level} · {skillGrade(skill.level)}</span>
          </div>
          <div className="mt-1.5 flex justify-between text-[11px] text-white/60">
            <span>{kindEffectText(skill, stats)}</span>
            <span>{skill.uses}/{skill.usesToNext} usages → Nv. {skill.level + 1}</span>
          </div>
          <div className="mt-1.5 h-1.5 w-full rounded bg-black/40">
            <div className="h-full rounded bg-gradient-to-r from-violet-400 to-fuchsia-400" style={{ width: `${Math.min(100, (skill.uses / skill.usesToNext) * 100)}%` }} />
          </div>
        </div>
      )}
      {typeof skillCount === "number" && skillCount > 1 && (
        <p className="mt-2 text-[10px] text-white/40">📖 +{skillCount - 1} autre{skillCount - 1 > 1 ? "s" : ""} sort{skillCount - 1 > 1 ? "s" : ""} dans votre Grimoire</p>
      )}
    </div>
  );
}

/* ============================ ECRAN TITRE ============================ */
function TitleScreen({
  onStart,
  onContinue,
  saveInfo,
}: {
  onStart: (name: string) => void;
  onContinue: () => void;
  saveInfo: { name: string; level: number; at: number } | null;
}) {
  const [name, setName] = useState("Kai");
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#04060f] p-6">
      <img src={PANELS.p4} alt="Rupture" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#04060f] via-[#04060f]/60 to-[#04060f]" />
      <motion.div className="relative z-10 flex flex-col items-center text-center" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <span className="mb-2 text-xs font-bold uppercase tracking-[0.5em] text-indigo-300/80">Année 627 · L'ère des Donjons</span>
        <h1 className="bg-gradient-to-r from-cyan-300 via-indigo-300 to-violet-300 bg-clip-text text-6xl font-black tracking-tight text-transparent drop-shadow-[0_0_30px_rgba(99,102,241,0.6)] md:text-7xl">LE JOUEUR</h1>
        <p className="mt-3 max-w-xl text-sm text-white/60">
          La Rupture a eu lieu il y a 627 ans. Les Veilleurs protègent le monde des donjons. Vous, vous n'êtes personne. Vous n'avez même pas encore de rang.<span className="text-cyan-300"> Pour l'instant.</span>
        </p>
        {saveInfo && (
          <button
            onClick={onContinue}
            className="mt-6 rounded-lg border border-cyan-400/50 bg-cyan-400/10 px-6 py-3 text-sm font-bold text-cyan-100 backdrop-blur transition hover:border-cyan-300 hover:bg-cyan-400/20"
          >
            ⟲ Reprendre — {saveInfo.name} · Nv {saveInfo.level}
            <span className="ml-2 text-[10px] font-normal text-white/40">sauvegardé le {new Date(saveInfo.at).toLocaleDateString("fr-FR")} à {new Date(saveInfo.at).toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })}</span>
          </button>
        )}
        <div className="mt-8 flex flex-col items-center gap-3">
          <label className="text-xs uppercase tracking-widest text-white/50">Nom du héros</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value.slice(0, 14) || "Kai")}
            className="w-64 rounded-lg border border-indigo-400/40 bg-black/50 px-4 py-2.5 text-center text-lg font-bold text-cyan-100 outline-none backdrop-blur focus:border-cyan-300 focus:ring-2 focus:ring-cyan-400/30"
            placeholder="Votre nom"
          />
          <GlowButton onClick={() => onStart(name.trim() || "Kai")}>
            {saveInfo ? "✦ Nouvelle partie (efface la sauvegarde)" : "▶ Commencer le prologue"}
          </GlowButton>
        </div>
        <p className="mt-6 text-[10px] text-white/30">Prototype · Prologue → AMV → Donjons · 💾 Sauvegarde automatique locale</p>
      </motion.div>
    </div>
  );
}

/* ============================ VISUAL NOVEL ============================ */
function VN({ heroName, onDone, onSkip }: { heroName: string; onDone: () => void; onSkip: () => void }) {
  const [idx, setIdx] = useState(0);
  const [typed, setTyped] = useState(0);
  const scene = SCENES[idx];
  const text = (scene.text ?? "").replace(/\{NAME\}/g, heroName);
  const speaker = scene.speaker?.replace(/\{NAME\}/g, heroName);
  const doneTyping = typed >= text.length;

  useEffect(() => {
    setTyped(0);
    if (scene.chapter) return;
    const t = setInterval(() => {
      setTyped((v) => {
        if (v >= text.length) {
          clearInterval(t);
          return v;
        }
        return v + 1;
      });
    }, 22);
    return () => clearInterval(t);
  }, [idx]);

  const advance = () => {
    if (scene.chapter) {
      setIdx(idx + 1);
      return;
    }
    if (!doneTyping) {
      setTyped(text.length);
      return;
    }
    if (idx < SCENES.length - 1) setIdx(idx + 1);
    else onDone();
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#04060f]" onClick={advance}>
      <div className="flex items-center justify-between px-4 pt-3">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">{Math.min(idx + 1, SCENES.length)} / {SCENES.length}</span>
        <button className="rounded bg-white/5 px-3 py-1 text-[11px] text-white/50 ring-1 ring-white/10 hover:text-white" onClick={(e) => { e.stopPropagation(); onSkip(); }}>
          Passer l'intro ⏭
        </button>
      </div>
      <div className="relative flex flex-1 items-center justify-center p-4 pt-2">
        {scene.chapter ? (
          <motion.div className="text-center" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
            <div className={"text-4xl font-black tracking-widest " + (scene.sub?.includes("RUPTURE") ? "text-red-400 drop-shadow-[0_0_25px_rgba(248,113,113,0.6)]" : "text-cyan-300 drop-shadow-[0_0_25px_rgba(103,232,249,0.5)]")}>{scene.chapter}</div>
            <div className="mt-3 text-lg text-white/70">{scene.sub}</div>
          </motion.div>
        ) : (
          <div className="w-full max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div key={idx} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.45 }}>
                <Panel src={PANELS[scene.panel!]} alt={scene.panel!} className="aspect-[4/3]" />
              </motion.div>
            </AnimatePresence>
          </div>
        )}
      </div>
      {!scene.chapter && (
        <motion.div className="relative mx-4 mb-5 max-w-3xl cursor-pointer self-center md:mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} key={"box" + idx} onClick={advance}>
          <div className="rounded-xl border border-indigo-400/40 bg-black/70 p-4 shadow-[0_0_40px_-10px_rgba(99,102,241,0.7)] backdrop-blur-md">
            {speaker && (
              <div className={"mb-1 inline-block rounded px-2 py-0.5 text-xs font-bold " + (speaker === heroName ? "bg-cyan-500/20 text-cyan-300 ring-1 ring-cyan-400/40" : speaker === "???" ? "bg-violet-500/20 text-violet-300 ring-1 ring-violet-400/40" : "bg-indigo-500/20 text-indigo-300 ring-1 ring-indigo-400/40")}>{speaker}</div>
            )}
            <p className="min-h-[3.5rem] text-sm leading-relaxed text-white/90 md:text-base">
              {text.slice(0, typed)}
              {!doneTyping && <span className="animate-pulse text-cyan-300">▌</span>}
            </p>
          </div>
          <div className="mt-2 flex justify-end">
            <span className="animate-bounce text-xs text-white/40">{doneTyping ? "Cliquez pour continuer ▸" : "Cliquez pour accélérer"}</span>
          </div>
        </motion.div>
      )}
    </div>
  );
}

/* ============================ ÉCRAN DE JALON NARRATIF ============================ */
function StoryBeatScreen({ beatId, heroName, onDone }: { beatId: string; heroName: string; onDone: () => void }) {
  const beat = STORY_BEATS.find((b) => b.id === beatId) ?? null;
  const blocks = beat?.blocks ?? [];
  const [idx, setIdx] = useState(0);
  const [typed, setTyped] = useState(0);
  const text = (blocks[idx]?.text ?? "").replace(/\{NAME\}/g, heroName);
  const speaker = blocks[idx]?.speaker?.replace(/\{NAME\}/g, heroName);
  const doneTyping = typed >= text.length;
  useEffect(() => {
    setTyped(0);
    const t = setInterval(() => {
      setTyped((v) => {
        if (v >= text.length) {
          clearInterval(t);
          return v;
        }
        return v + 1;
      });
    }, 22);
    return () => clearInterval(t);
  }, [idx]);
  if (!beat) return null;
  const advance = () => {
    if (!doneTyping) {
      setTyped(text.length);
      return;
    }
    if (idx < blocks.length - 1) setIdx(idx + 1);
    else onDone();
  };
  const sys = speaker === "Le Système" || speaker === "???";
  return (
    <div className="fixed inset-0 z-[80] flex min-h-screen flex-col bg-[#04060f]" onClick={advance}>
      <div className="flex items-center justify-between px-4 pt-3">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-violet-300/70">✦ Jalon — {beat.title} · {idx + 1} / {blocks.length}</span>
        <button className="rounded bg-white/5 px-3 py-1 text-[11px] text-white/50 ring-1 ring-white/10 hover:text-white" onClick={(e) => { e.stopPropagation(); onDone(); }}>
          Passer ⏭
        </button>
      </div>
      <div className="relative flex flex-1 items-center justify-center p-4 pt-2">
        <div className="w-full max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div key={idx} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.45 }}>
              <Panel src={PANELS[beat.panel]} alt={beat.title} className="aspect-[4/3]" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <motion.div className="relative mx-4 mb-5 max-w-3xl cursor-pointer self-center md:mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} key={"box" + idx} onClick={advance}>
        <div className="rounded-xl border border-violet-400/40 bg-black/70 p-4 shadow-[0_0_40px_-10px_rgba(139,92,246,0.7)] backdrop-blur-md">
          {speaker && (
            <div className={"mb-1 inline-block rounded px-2 py-0.5 text-xs font-bold " + (sys ? "bg-violet-500/20 font-mono text-violet-300 ring-1 ring-violet-400/40" : "bg-indigo-500/20 text-indigo-300 ring-1 ring-indigo-400/40")}>{speaker}</div>
          )}
          <p className="min-h-[3.5rem] text-sm leading-relaxed text-white/90 md:text-base">
            {text.slice(0, typed)}
            {!doneTyping && <span className="animate-pulse text-violet-300">▌</span>}
          </p>
        </div>
        <div className="mt-2 flex justify-end">
          <span className="animate-bounce text-xs text-white/40">{doneTyping ? "Cliquez pour continuer ▸" : "Cliquez pour accélérer"}</span>
        </div>
      </motion.div>
    </div>
  );
}

/* ============================ DEMARRAGE SYSTEME ============================ */
function SystemBoot({ heroName, onDone }: { heroName: string; onDone: () => void }) {
  const [line, setLine] = useState(0);
  useEffect(() => {
    if (line >= BOOT_LINES.length) return;
    const t = setTimeout(() => setLine(line + 1), 750);
    return () => clearTimeout(t);
  }, [line]);
  const ready = line >= BOOT_LINES.length;
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#04060f] p-6">
      <img src={PANELS.p7} alt="Éveil" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#04060f]/70 via-transparent to-[#04060f]" />
      <div className="relative z-10 w-full max-w-xl">
        <div className="rounded-xl border border-cyan-300/40 bg-black/60 p-6 font-mono shadow-[0_0_60px_-15px_rgba(34,211,238,0.8)] backdrop-blur">
          {BOOT_LINES.slice(0, line).map((l, i) => (
            <motion.p key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className={"text-sm " + (l.includes("« LE JOUEUR »") ? "font-bold text-cyan-300" : l.includes("Erreur") ? "text-red-400" : "text-emerald-300/90")}>
              {l.replace("{NAME}", heroName)}
            </motion.p>
          ))}
          <AnimatePresence>
            {ready && (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="mt-6">
                <StatSheet name={heroName} level={0} xp={0} stats={{ force: 5, agilite: 5, intelligence: 5, vitalite: 5 }} skill={null} />
                <div className="mt-5 flex justify-center">
                  <GlowButton onClick={onDone}>Le système propose : « Créer votre première compétence » ▸</GlowButton>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          {!ready && <span className="mt-2 inline-block animate-pulse text-cyan-300">▌</span>}
        </div>
      </div>
    </div>
  );
}

/* ============================ CREATION DE COMPETENCE ============================ */
function CreateSkill({ onCreate }: { onCreate: (name: string, type: SkillType, kind: SkillKind, theme: ThemeId) => void }) {
  /* Tutoriel (choix de Maximilien, 13/11/2026) : le joueur n'a PAS le choix pour sa
     première compétence — le système forge « Frappe du Débutant » (Frappe · Physique ·
     Feu). Raison d'équilibrage : un Soin ou un Bouclier choisi en premier ne frappe
     jamais, et le monstre, lui, attaque à chaque tour. L'écran devient un tutoriel
     explicatif sur la création de sorts (archétype × nature × élément × nom,
     progression par l'usage, forge dans le Grimoire avec des Pages). */
  const statPreview: Stats = { force: 5, agilite: 5, intelligence: 5, vitalite: 5 };
  const forged: Skill = { name: "Frappe du Débutant", type: "physique", kind: "frappe", theme: "feu", level: 0, uses: 0, usesToNext: 5, minDmg: 2, maxDmg: 4 };
  const tdef = themeDefOf("feu");
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#04060f] p-6">
      <div className="w-full max-w-xl rounded-2xl border border-violet-400/40 bg-[#0b1026]/95 p-7 shadow-[0_0_70px_-15px_rgba(139,92,246,0.8)]">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-violet-300/80">Le Joueur · Système</span>
        <h2 className="mt-1 text-2xl font-black text-white">Compétence initiale — « Frappe du Débutant »</h2>
        <p className="mt-2 text-sm text-white/60">
          Le système n'attend pas votre avis pour votre première lame. Il a forgé pour vous :
        </p>
        <div className="mt-3 rounded-xl border border-violet-400/40 bg-black/40 p-4 text-center ring-1 ring-violet-400/20">
          <div className="text-lg font-black text-violet-200">{tdef.icon} Frappe du Débutant</div>
          <div className="mt-1 text-[11px] font-bold text-white/60">⚔️ Frappe · 👊 Physique (Force) · {tdef.icon} {tdef.label} · Nv. 0</div>
          <div className="mt-1.5 text-[11px] text-white/50">{kindEffectText(forged, statPreview)}</div>
        </div>
        <div className="mt-4 rounded-xl border border-amber-400/30 bg-amber-400/5 p-4">
          <div className="text-xs font-black uppercase tracking-widest text-amber-300">⚠ Pourquoi vous n'avez pas le choix</div>
          <p className="mt-1.5 text-[12px] leading-relaxed text-white/60">
            Un <span className="font-bold text-white/80">Soin</span> ou un <span className="font-bold text-white/80">Bouclier</span> ne remplace pas votre attaque : seul(e), il ne frappe jamais — et le monstre, lui, riposte à chaque tour. Sans attaque, pas de combat. La liberté de forge viendra avec vos sorts suivants, quand vous saurez vous en servir.
          </p>
        </div>
        <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-4">
          <div className="text-xs font-black uppercase tracking-widest text-violet-300">Comment se forge un sort</div>
          <p className="mt-1.5 text-[12px] leading-relaxed text-white/60">
            Chaque sort assemble <span className="font-bold text-white/80">4 choix</span> : l'<span className="text-violet-300">archétype</span> (la mécanique, 12 au total), la <span className="text-violet-300">nature</span> (Physique → Force, ou Magique → Intelligence), l'<span className="text-violet-300">élément</span> (l'habillage, 8 au total) et le <span className="text-violet-300">nom</span> (libre). TOUT est disponible dès la forge — seule la puissance suit le <span className="text-violet-300">niveau</span> du sort : chaque compétence naît faible (Nv. 0) et progresse par l'usage — <span className="text-violet-300">5 utilisations pour le niveau 1, puis 10, puis 15…</span>
          </p>
        </div>
        <div className="mt-4">
          <div className="text-xs uppercase tracking-widest text-white/50">Les 12 archétypes de la forge</div>
          <div className="mt-1.5 grid grid-cols-2 gap-1.5">
            {SKILL_KINDS.map((k) => (
              <div
                key={k.id}
                className={"rounded-lg border p-2 " + (k.id === "frappe" ? "border-violet-300 bg-violet-500/15" : "border-white/10 bg-white/5")}
              >
                <div className="text-[11px] font-bold text-white">
                  {k.icon} {k.label}{k.id === "frappe" ? " ← votre première lame" : ""}
                </div>
                <div className="mt-0.5 text-[9px] leading-snug text-white/50">{k.desc}</div>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-4 text-[11px] leading-relaxed text-white/40">
          Vous forgerez vos sorts suivants dans le <span className="font-bold text-white/70">Grimoire</span> (bouton 📖 des pages de compétence), avec des <span className="font-bold text-white/70">Pages</span> arrachées aux Livres Enchantés des donjons. Les sorts de soutien y ont toute leur place — en appui d'une attaque, pas à la place.
        </p>
        <div className="mt-6 flex justify-center">
          <GlowButton onClick={() => onCreate("Frappe du Débutant", "physique", "frappe", "feu")}>✦ Accepter — commencer l'entraînement</GlowButton>
        </div>
      </div>
    </div>
  );
}

/* ============================ ARENE DE COMBAT (partagee) ============================ */
type ArenaProps = {
  heroName: string;
  level: number;
  hp: number;
  setHp: React.Dispatch<React.SetStateAction<number>>;
  maxHp: number;
  stats: Stats;
  skill: Skill;
  setSkill: React.Dispatch<React.SetStateAction<Skill>>;
  potions: number;
  setPotions: React.Dispatch<React.SetStateAction<number>>;
  monster: MonsterDef;
  intro?: string;
  xpAllowed?: boolean;
  amvRank?: string;
  onVictory: () => void;
  onEvac: (msg: string) => void;
  gainXp: (n: number) => void;
  bump: (k: CounterKey, n?: number) => void;
  showToast: (s: string) => void;
  exitLabel?: string;
  onExit?: () => void;
  onAnalyze?: () => void;
  skills?: Skill[];
  activeSkillIdx?: number;
  onSelectSkill?: (i: number) => void;
  companions?: Companion[];
  setCompanions?: React.Dispatch<React.SetStateAction<Companion[]>>;
  onTimePenalty?: (sec: number) => void;
  onPotion?: () => void;
  onSquadDown?: () => void;
};

type LogLine = { t: string; kind: "atk" | "heal" | "sys" | "foe" };
type Float = { id: number; text: string; foe?: boolean; crit?: boolean };

function Arena(p: ArenaProps) {
  const [monsterHp, setMonsterHp] = useState(p.monster.maxHp);
  const [analyzed, setAnalyzed] = useState(false);
  const [log, setLog] = useState<LogLine[]>([
    { t: p.intro ?? `${p.monster.name} se dresse devant vous !`, kind: "sys" },
  ]);
  const [floats, setFloats] = useState<Float[]>([]);
  const [busy, setBusy] = useState(false);
  const [defeated, setDefeated] = useState(false);
  /* États de combat liés aux archétypes de sorts — remis à zéro à chaque salle (l'Arène est re-montée). */
  const [shieldHp, setShieldHp] = useState(0);
  const [buff, setBuff] = useState<{ mult: number; turns: number } | null>(null);
  const [debuff, setDebuff] = useState<{ mult: number; turns: number } | null>(null);
  const [bleed, setBleed] = useState<{ dmg: number; turns: number } | null>(null);
  const [stunned, setStunned] = useState(false);
  /* Invocation hors donjon (salle d'entraînement) : pas d'escouade, la créature vit ici. */
  const [localSummon, setLocalSummon] = useState<Companion | null>(null);
  const floatId = useRef(0);
  const logRef = useRef<HTMLDivElement>(null);

  const squad = p.companions ?? [];
  const squadSummon = squad.find((c) => c.summon) ?? null;
  const summon = p.setCompanions ? squadSummon : localSummon;
  const kind = p.skill.kind;
  const kdef = kindDefOf(kind);
  const tdef = themeDefOf(p.skill.theme);
  const buffMult = buff ? buff.mult : 1;

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight, behavior: "smooth" });
  }, [log]);

  const addLog = (t: string, kind: LogLine["kind"]) => setLog((l) => [...l.slice(-40), { t, kind }]);
  const addFloat = (text: string, foe?: boolean, crit?: boolean) => {
    const id = ++floatId.current;
    setFloats((f) => [...f, { id, text, foe, crit }]);
    setTimeout(() => setFloats((f) => f.filter((x) => x.id !== id)), 1100);
  };

  /* Initiative du monstre (choix de Maximilien, 13/11/2026) : à l'ouverture du combat,
     33% de chance que le monstre frappe le premier. Sa frappe d'ouverture peut être
     esquivée (Agilité, formule dodgeChance) ; si elle vous terrasse, l'évacuation du
     Joueur joue comme pour une riposte fatale. */
  const initRolled = useRef(false);
  useEffect(() => {
    if (initRolled.current) return;
    initRolled.current = true;
    if (Math.random() >= MONSTER_INITIATIVE) return;
    addLog(`⚠ ${p.monster.name} prend l'INITIATIVE et frappe le premier !`, "foe");
    if (Math.random() < dodgeChance(p.stats)) {
      addFloat("ESQUIVE !", true);
      addLog("⚡ Vous esquivez sa frappe d'ouverture !", "sys");
      p.bump("dodges");
      return;
    }
    const d = Math.max(1, Math.round(rnd(p.monster.minAtk, p.monster.maxAtk)));
    const newHp = Math.max(0, p.hp - d);
    p.setHp(newHp);
    addFloat(`-${d}`, true);
    addLog(`${p.monster.name} frappe le premier : ${d} dégâts (vous : ${newHp}/${p.maxHp} PV)`, "foe");
    if (newHp <= 0) {
      addLog("Le Joueur vous évacue d'urgence !", "sys");
      p.onEvac(`${p.monster.name} vous a terrassé avant même votre premier geste. Le système vous a téléporté hors de danger.`);
    }
  }, []);

  const registerUse = () => {
    const s = { ...p.skill, uses: p.skill.uses + 1 };
    if (s.uses >= s.usesToNext) {
      s.level += 1;
      s.uses = 0;
      s.usesToNext = 5 * (s.level + 1);
      p.bump("skillUps");
      p.showToast(`✦ « ${s.name} » passe au NIVEAU ${s.level} ! Sa puissance grandit.`);
    }
    p.setSkill(s);
    p.bump("uses");
  };

  const finishVictory = () => {
    setDefeated(true);
    addLog(`☠ ${p.monster.name} vaincu ! ${p.xpAllowed === false ? "Aucune EXP — donjon sous votre rang." : `Vous gagnez ${p.monster.xp} EXP.`}`, "sys");
    if (Math.random() < 0.45) {
      p.setPotions((x) => x + 1);
      addLog("Butin : Gelée de soin (+10 PV)", "heal");
    }
    if (p.xpAllowed !== false) p.gainXp(p.monster.xp);
    p.bump("kills");
    p.onVictory();
  };

  /* Un tour de combat, selon l'archétype du sort actif (choix de Maximilien : base maximale,
     puissance indexée sur le NIVEAU du sort, tout débloqué à la forge).
     Flow : action du héros → escouade & invocation → tick de saignement → riposte du monstre
     (sauf s'il vient d'être étourdi) → décompte des effets actifs. */
  const act = () => {
    if (busy || defeated) return;
    const S = skillStatOf(p.skill, p.stats);
    const Nv = p.skill.level;

    /* Garde-fous : un seul effet actif à la fois, recast bloqué tant qu'il tient. */
    if (kind === "bouclier" && shieldHp > 0) { p.showToast("🛡 Un bouclier est déjà érigé — il doit d'abord tomber."); return; }
    if (kind === "benediction" && buff) { p.showToast("💪 La Bénédiction est déjà active."); return; }
    if (kind === "affaiblissement" && debuff) { p.showToast("😵 L'Affaiblissement est déjà actif."); return; }
    if (kind === "hemorragie" && bleed) { p.showToast("🩸 Le saignement est déjà ouvert — laissez-le tarir."); return; }
    if (kind === "invocation" && summon && summon.hp > 0) { p.showToast(`${tdef.emoji} ${summon.name} combat déjà à vos côtés.`); return; }
    if (kind === "soin" && p.hp >= p.maxHp) { p.showToast("Vos PV sont déjà au maximum."); return; }
    const sacrificeCost = Math.ceil(p.hp * 0.08);
    if (kind === "sacrifice" && p.hp <= sacrificeCost) { p.showToast("❤️‍🔥 PV insuffisants pour un Sacrifice de sang."); return; }

    setBusy(true);
    registerUse();
    const base = skillDamage(p.skill, p.stats, buff ? buff.mult : 1);
    const rollDmg = () => {
      const crit = Math.random() < critChance(p.stats);
      if (crit) p.bump("crits");
      let d = rnd(base.min, base.max);
      if (crit) d = Math.round(d * 1.6);
      return { d, crit };
    };

    let foeHp = monsterHp;
    let stunProc = false;
    let newDebuff: { mult: number; turns: number } | null = null;
    let freshSummon: Companion | null = null;
    let newShield = 0;

    switch (kind) {
      case "frappe": {
        const { d, crit } = rollDmg();
        foeHp -= d;
        addFloat(`-${d}${crit ? " !" : ""}`, false, crit);
        addLog(`Vous déchaînez « ${p.skill.name} » ${tdef.icon} : ${d} dégâts${crit ? " — COUP CRITIQUE !" : ""} (${p.monster.name} : ${Math.max(0, foeHp)}/${p.monster.maxHp} PV)`, "atk");
        break;
      }
      case "multifrappe": {
        for (let i = 1; i <= 2; i++) {
          const { d, crit } = rollDmg();
          const dd = Math.max(1, Math.round(d * 0.65));
          foeHp -= dd;
          addFloat(`-${dd}${crit ? " !" : ""}`, false, crit);
          addLog(`« ${p.skill.name} » — frappe ${i}/2 ${tdef.icon} : ${dd} dégâts${crit ? " — CRITIQUE !" : ""} (${p.monster.name} : ${Math.max(0, foeHp)}/${p.monster.maxHp} PV)`, "atk");
          if (foeHp <= 0) break;
        }
        break;
      }
      case "lourde": {
        const { d, crit } = rollDmg();
        const dd = Math.round(d * 1.8);
        foeHp -= dd;
        addFloat(`-${dd}${crit ? " !" : ""}`, false, crit);
        addLog(`Frappe lourde « ${p.skill.name} » ${tdef.icon} : ${dd} dégâts${crit ? " — COUP CRITIQUE !" : ""} (${p.monster.name} : ${Math.max(0, foeHp)}/${p.monster.maxHp} PV)`, "atk");
        if (p.onTimePenalty) {
          const pen = rnd(30, 60);
          p.onTimePenalty(pen);
          addLog(`⏱ Le coup déstabilise la membrane : la Porte gagne ${pen} s sur son chrono !`, "sys");
        }
        break;
      }
      case "hemorragie": {
        const { d, crit } = rollDmg();
        const dd = Math.max(1, Math.round(d * 0.5));
        foeHp -= dd;
        addFloat(`-${dd}${crit ? " !" : ""}`, false, crit);
        const per = 2 + Math.floor(S * 0.15) + Math.round(Nv * 1.5);
        setBleed({ dmg: per, turns: 3 });
        addLog(`« ${p.skill.name} » ${tdef.icon} entaille : ${dd} dégâts — la plaie s'ouvre, saignement ${per}/tour pendant 3 tours.`, "atk");
        break;
      }
      case "vampirisme": {
        const { d, crit } = rollDmg();
        const dd = Math.max(1, Math.round(d * 0.8));
        foeHp -= dd;
        const heal = Math.ceil(dd / 2);
        const nh = Math.min(p.maxHp, p.hp + heal);
        p.setHp(nh);
        addFloat(`-${dd}`, false, crit);
        addFloat(`+${heal}`);
        addLog(`« ${p.skill.name} » ${tdef.icon} draine : ${dd} dégâts — vous volez ${heal} PV (${nh}/${p.maxHp} PV)`, "atk");
        break;
      }
      case "commotion": {
        const { d, crit } = rollDmg();
        const dd = Math.max(1, Math.round(d * 0.5));
        foeHp -= dd;
        addFloat(`-${dd}${crit ? " !" : ""}`, false, crit);
        addLog(`« ${p.skill.name} » ${tdef.icon} percute le crâne : ${dd} dégâts (${p.monster.name} : ${Math.max(0, foeHp)}/${p.monster.maxHp} PV)`, "atk");
        if (Math.random() * 100 < Math.min(40, 15 + Nv * 0.25)) {
          stunProc = true;
          setStunned(true);
          addLog(`${p.monster.name} vacille — ÉTOURDI, il perdra son tour !`, "sys");
        }
        break;
      }
      case "sacrifice": {
        const { d, crit } = rollDmg();
        const dd = Math.round(d * 2.5);
        foeHp -= dd;
        p.setHp(Math.max(0, p.hp - sacrificeCost));
        addFloat(`-${dd}${crit ? " !" : ""}`, false, crit);
        addLog(`Sacrifice de sang « ${p.skill.name} » ${tdef.icon} : ${sacrificeCost} gouttes de votre sang pour ${dd} dégâts${crit ? " — CRITIQUE !" : ""} (${p.monster.name} : ${Math.max(0, foeHp)}/${p.monster.maxHp} PV)`, "atk");
        break;
      }
      case "soin": {
        const heal = 6 + Math.floor(S * 0.4) + Nv * 2;
        const nh = Math.min(p.maxHp, p.hp + heal);
        p.setHp(nh);
        addFloat(`+${nh - p.hp}`);
        addLog(`« ${p.skill.name} » ${tdef.icon} vous rend ${nh - p.hp} PV (vous : ${nh}/${p.maxHp}). Le monstre en profite pour frapper…`, "heal");
        break;
      }
      case "bouclier": {
        newShield = 10 + Math.floor(S * 0.5) + Nv * 2;
        setShieldHp(newShield);
        addLog(`« ${p.skill.name} » ${tdef.icon} dresse un écran d'énergie : +${newShield} PV temporaires pour tout le combat.`, "sys");
        break;
      }
      case "benediction": {
        const m = 1.2 + Math.min(0.15, Nv * 0.001);
        setBuff({ mult: m, turns: 3 });
        addLog(`« ${p.skill.name} » ${tdef.icon} amplifie votre sort : stat ×${m.toFixed(2)} pendant 3 tours.`, "sys");
        break;
      }
      case "affaiblissement": {
        const m = 0.25 + Math.min(0.15, Nv * 0.001);
        newDebuff = { mult: 1 - m, turns: 3 };
        setDebuff(newDebuff);
        addLog(`« ${p.skill.name} » ${tdef.icon} grippe ${p.monster.name} : son attaque chute de ${Math.round(m * 100)} % pendant 3 tours.`, "sys");
        break;
      }
      case "invocation": {
        const grade = skillGrade(Nv);
        const hp = Math.max(1, Math.round(20 + S + Nv * 2));
        const atk = Math.max(1, Math.round(2 + S * 0.15) + Nv);
        const crea: Companion = { name: `${tdef.summon} · ${grade}`, rank: "—", emoji: tdef.emoji, hp, maxHp: hp, minAtk: atk, maxAtk: atk + 3, summon: true };
        freshSummon = crea;
        p.bump("summons");
        if (p.setCompanions) p.setCompanions((list) => [...list.filter((c) => !c.summon), crea]);
        else setLocalSummon(crea);
        addLog(`${tdef.emoji} « ${p.skill.name} » déploie ${tdef.summon} (${grade}) : ${hp} PV, atq ${atk}–${atk + 3}. Elle se poste à vos côtés !`, "sys");
        break;
      }
    }

    if (foeHp !== monsterHp) setMonsterHp(Math.max(0, foeHp));

    setTimeout(() => {
      let hp = Math.max(0, foeHp);
      /* 1. L'escouade AMV puis l'invocation frappent après le héros. */
      const aliveAllies = [...squad.filter((c) => !c.summon && c.hp > 0), ...(summon && summon.hp > 0 ? [summon] : []), ...(freshSummon ? [freshSummon] : [])];
      if (hp > 0 && aliveAllies.length > 0) {
        for (const c of aliveAllies) {
          const cd = rnd(c.minAtk, c.maxAtk);
          hp = Math.max(0, hp - cd);
          addFloat(`-${cd}`, false);
          addLog(`${c.emoji} ${c.name}${c.summon ? " (invocation)" : " (AMV)"} frappe : ${cd} dégâts (${p.monster.name} : ${hp}/${p.monster.maxHp} PV)`, "atk");
          if (hp <= 0) break;
        }
        setMonsterHp(hp);
      }
      /* 2. Tick de saignement — l'hémorragie fraîchement ouverte ne saigne pas ce tour-ci. */
      const activeBleed = kind === "hemorragie" ? null : bleed;
      if (hp > 0 && activeBleed) {
        hp = Math.max(0, hp - activeBleed.dmg);
        setMonsterHp(hp);
        addLog(`🩸 Saignement : ${activeBleed.dmg} dégâts (${p.monster.name} : ${hp}/${p.monster.maxHp} PV)`, "atk");
        setBleed(activeBleed.turns - 1 <= 0 ? null : { ...activeBleed, turns: activeBleed.turns - 1 });
      }
      if (hp <= 0) {
        finishVictory();
        setBusy(false);
        return;
      }
      /* 3. Riposte du monstre — sauf s'il vient d'être étourdi. */
      if (stunProc) {
        setStunned(false);
        addLog(`${p.monster.name} titube, étourdi — il perd son tour !`, "sys");
      } else {
        const atkMult = newDebuff ? newDebuff.mult : debuff ? debuff.mult : 1;
        const targets: { apply: (dmg: number) => void }[] = [];
        squad.forEach((c, i) => {
          if (!c.summon && c.hp > 0)
            targets.push({
              apply: (dmg) => {
                const nhp = Math.max(0, c.hp - dmg);
                p.setCompanions?.((list) => list.map((x, j) => (j === i ? { ...x, hp: nhp } : x)));
                if (nhp <= 0) p.onSquadDown?.();
                addLog(`${p.monster.name} se retourne vers ${c.emoji} ${c.name} : ${dmg} dégâts${nhp <= 0 ? " — À TERRE !" : ` (${nhp}/${c.maxHp} PV)`}`, "foe");
              },
            });
        });
        const liveSummon = freshSummon ?? (summon && summon.hp > 0 ? summon : null);
        if (liveSummon)
          targets.push({
            apply: (dmg) => {
              const nhp = Math.max(0, liveSummon.hp - dmg);
              if (p.setCompanions) p.setCompanions((list) => list.map((x) => (x.summon ? { ...x, hp: nhp } : x)));
              else setLocalSummon(nhp > 0 ? { ...liveSummon, hp: nhp } : null);
              addLog(`${p.monster.name} se retourne vers votre ${liveSummon.emoji} ${liveSummon.name} : ${dmg} dégâts${nhp <= 0 ? " — l'invocation se dissipe !" : ` (${nhp}/${liveSummon.maxHp} PV)`}`, "foe");
            },
          });
        if (targets.length > 0 && Math.random() < 0.4) {
          targets[Math.floor(Math.random() * targets.length)].apply(Math.max(1, Math.round(rnd(p.monster.minAtk, p.monster.maxAtk) * atkMult)));
        } else if (Math.random() < dodgeChance(p.stats)) {
          addFloat("ESQUIVE !", true);
          addLog(`⚡ Vous esquivez la riposte de ${p.monster.name} !`, "sys");
          p.bump("dodges");
        } else {
          const foeDmg = Math.max(1, Math.round(rnd(p.monster.minAtk, p.monster.maxAtk) * atkMult));
          const curShield = newShield > 0 ? newShield : shieldHp;
          const absorbed = Math.min(curShield, foeDmg);
          const remaining = foeDmg - absorbed;
          if (absorbed > 0) setShieldHp(curShield - absorbed);
          if (remaining > 0) {
            const newPlayerHp = Math.max(0, p.hp - remaining);
            p.setHp(newPlayerHp);
            addFloat(`-${remaining}`, true);
            addLog(`${p.monster.name} riposte : ${foeDmg} dégâts${absorbed > 0 ? ` (${absorbed} absorbés par le bouclier)` : ""} (vous : ${newPlayerHp}/${p.maxHp} PV)`, "foe");
            if (newPlayerHp <= 0) {
              addLog("Le Joueur vous évacue d'urgence !", "sys");
              p.onEvac(`${p.monster.name} vous a terrassé. Le système vous a téléporté hors de danger.`);
            }
          } else {
            addLog(`🛡 Votre bouclier absorbe toute la riposte (${absorbed} dégâts) !`, "sys");
          }
        }
      }
      /* 4. Fin de tour : décompte des effets préexistants (les effets fraîchement posés courent 3 tours pleins). */
      if (buff && kind !== "benediction") setBuff(buff.turns - 1 <= 0 ? null : { ...buff, turns: buff.turns - 1 });
      if (debuff && kind !== "affaiblissement") setDebuff(debuff.turns - 1 <= 0 ? null : { ...debuff, turns: debuff.turns - 1 });
      setBusy(false);
    }, 650);
  };

  const drinkPotion = () => {
    if (busy || defeated || p.potions <= 0 || p.hp >= p.maxHp) return;
    p.setPotions((x) => x - 1);
    p.setHp(Math.min(p.maxHp, p.hp + 10));
    addFloat("+10");
    addLog(`Vous absorbez une gelée de soin : +10 PV.`, "heal");
    p.bump("potions");
    p.onPotion?.();
  };

  const dmgRange = skillDamage(p.skill, p.stats, buffMult);
  const S0 = skillStatOf(p.skill, p.stats, buffMult);
  const Nv0 = p.skill.level;
  const actionBtn = (() => {
    switch (kind) {
      case "soin": return `💚 Se soigner — « ${p.skill.name} » (+${6 + Math.floor(S0 * 0.4) + Nv0 * 2} PV)`;
      case "bouclier": return shieldHp > 0 ? "🛡 Bouclier déjà érigé" : `🛡 Ériger « ${p.skill.name} » (+${10 + Math.floor(S0 * 0.5) + Nv0 * 2} PV temp.)`;
      case "benediction": return buff ? "💪 Bénédiction déjà active" : `💪 Bénir vos sorts (+${Math.round((0.2 + Math.min(0.15, Nv0 * 0.001)) * 100)} % · 3 tours)`;
      case "affaiblissement": return debuff ? "😵 Monstre déjà affaibli" : `😵 Affaiblir le monstre (−${Math.round((0.25 + Math.min(0.15, Nv0 * 0.001)) * 100)} % atq · 3 tours)`;
      case "invocation": return summon && summon.hp > 0 ? `${tdef.emoji} Invocation déjà en jeu` : `${tdef.emoji} Invoquer ${tdef.summon}`;
      case "multifrappe": return `💥 Attaquer — « ${p.skill.name} » ×2 (${Math.max(1, Math.round(dmgRange.min * 0.65))}–${Math.max(1, Math.round(dmgRange.max * 0.65))} chacun)`;
      case "lourde": return `🗡 Frappe lourde — « ${p.skill.name} » (≈${Math.round(dmgRange.min * 1.8)}–${Math.round(dmgRange.max * 1.8)} dmg · ⏱ +30–60 s)`;
      case "hemorragie": return bleed ? "🩸 Saignement déjà actif" : `🩸 Entaille — « ${p.skill.name} » (saignement ${2 + Math.floor(S0 * 0.15) + Math.round(Nv0 * 1.5)}/tour)`;
      case "vampirisme": return `🧛 Drainer — « ${p.skill.name} » (${Math.round(dmgRange.min * 0.8)}–${Math.round(dmgRange.max * 0.8)} · vole 50 %)`;
      case "commotion": return `⚡ Percuter — « ${p.skill.name} » (${Math.round(Math.min(40, 15 + Nv0 * 0.25))} % d'étourdir)`;
      case "sacrifice": return `❤️‍🔥 Sacrifier — « ${p.skill.name} » (×2,5 · coût 8 % PV)`;
      default: return `⚔ Attaquer — « ${p.skill.name} » (${dmgRange.min}–${dmgRange.max} dmg)`;
    }
  })();
  const alliesView = p.companions ?? (localSummon ? [localSummon] : []);

  return (
    <div>
      {/* Arene scindee */}
      <div className="mt-3 grid grid-cols-2 gap-3">
        <div className="relative overflow-hidden rounded-xl border border-cyan-300/30 shadow-[0_0_30px_-12px_rgba(34,211,238,0.6)]">
          <img src={PANELS.c1} alt="Le héros" className="h-40 w-full object-cover object-top md:h-52" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
          <div className="absolute left-2 top-2 rounded bg-black/60 px-2 py-0.5 text-[10px] font-bold text-cyan-300 ring-1 ring-cyan-300/40 backdrop-blur">
            {p.heroName} · Nv.{p.level} · RANG {p.amvRank ?? rankForLevel(p.level).label}
          </div>
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <AnimatePresence>
              {floats.filter((f) => f.foe).map((f) => (
                <motion.span key={f.id} initial={{ opacity: 0, y: 20, scale: 0.7 }} animate={{ opacity: 1, y: -30, scale: 1.1 }} exit={{ opacity: 0, y: -60 }} transition={{ duration: 0.9 }} className="absolute text-2xl font-black text-red-400 drop-shadow-lg">
                  {f.text}
                </motion.span>
              ))}
            </AnimatePresence>
          </div>
        </div>

        <div className={"relative overflow-hidden rounded-xl border shadow-[0_0_30px_-12px_rgba(239,68,68,0.6)] " + (defeated ? "border-white/20 opacity-40 grayscale" : "border-red-400/40")}>
          {p.monster.img ? (
            <img src={PANELS[p.monster.img]} alt={p.monster.name} className="h-40 w-full object-cover object-top md:h-52" style={p.monster.filter ? { filter: p.monster.filter } : undefined} />
          ) : (
            <div className="flex h-40 w-full items-center justify-center bg-gradient-to-br from-[#1a1038] via-[#0b1026] to-[#06202b] md:h-52">
              <span className="text-7xl drop-shadow-[0_0_25px_rgba(167,139,250,0.8)]" style={p.monster.filter ? { filter: p.monster.filter } : undefined}>{p.monster.emoji ?? "👤"}</span>
            </div>
          )}
          {p.monster.crown && (
            <span className="absolute left-1/2 top-3 -translate-x-1/2 text-3xl drop-shadow-[0_0_10px_rgba(251,191,36,0.9)]">👑</span>
          )}
          {p.monster.emoji && (
            <span className="absolute left-1/2 top-3 -translate-x-1/2 animate-pulse text-3xl drop-shadow-[0_0_14px_rgba(167,139,250,0.95)]">{p.monster.emoji}</span>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
          <div className="absolute right-2 top-2 rounded bg-black/60 px-2 py-0.5 text-[10px] font-bold text-red-300 ring-1 ring-red-400/40 backdrop-blur">RANG {p.monster.rank}</div>
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <AnimatePresence>
              {floats.filter((f) => !f.foe).map((f) => (
                <motion.span key={f.id} initial={{ opacity: 0, y: 20, scale: 0.7 }} animate={{ opacity: 1, y: -30, scale: f.crit ? 1.5 : 1.1 }} exit={{ opacity: 0, y: -60 }} transition={{ duration: 0.9 }} className={"absolute font-black drop-shadow-lg " + (f.crit ? "text-3xl text-amber-300" : "text-2xl text-cyan-300")}>
                  {f.text}
                </motion.span>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Escouade de secours AMV + invocation */}
      {alliesView.length > 0 && (
        <div className="mt-2 grid grid-cols-2 gap-2">
          {alliesView.map((c, i) => (
            <div key={i} className={"rounded-lg border p-2 " + (c.hp <= 0 ? "border-white/10 bg-black/40 opacity-50 grayscale" : c.summon ? "border-violet-400/40 bg-violet-400/10" : "border-amber-400/30 bg-amber-400/5")}>
              <div className="flex items-center justify-between gap-2">
                <span className="truncate text-xs font-bold text-white">{c.emoji} {c.name}</span>
                {c.summon ? (
                  <span className="whitespace-nowrap text-[8px] font-bold uppercase tracking-wider text-violet-300">Invocation</span>
                ) : (
                  <RankBadge rank={c.rank} className="!text-[8px] !px-1" />
                )}
              </div>
              <div className="mt-1 flex items-center gap-1.5">
                <span className="w-14 whitespace-nowrap text-[9px] text-white/50">{c.hp <= 0 ? "À TERRE" : `${c.hp}/${c.maxHp} PV`}</span>
                <div className="h-1 flex-1 rounded bg-black/40">
                  <div className="h-full rounded bg-gradient-to-r from-amber-400 to-lime-400" style={{ width: `${Math.max(0, (c.hp / c.maxHp) * 100)}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Barres de vie */}
      <div className="mt-2 grid grid-cols-2 gap-3">
        <div>
          <div className="mb-1 flex items-baseline justify-between text-[11px]">
            <span className="font-bold text-cyan-200">Vos PV</span>
            <span className="text-white/60">{p.hp} / {p.maxHp}</span>
          </div>
          <HpBar hp={p.hp} max={p.maxHp} color="bg-gradient-to-r from-emerald-400 to-cyan-400" />
        </div>
        <div>
          <div className="mb-1 flex items-baseline justify-between text-[11px]">
            <span className="font-bold text-red-300">{analyzed ? p.monster.name : "Monstre ???"}</span>
            <span className="text-white/60">{analyzed ? `${monsterHp} / ${p.monster.maxHp} PV` : "Analyse requise"}</span>
          </div>
          <HpBar hp={monsterHp} max={p.monster.maxHp} color="bg-gradient-to-r from-red-500 to-orange-400" />
        </div>
      </div>

      {/* États de combat (archétypes de sorts) */}
      {(shieldHp > 0 || buff || debuff || bleed || stunned) && (
        <div className="mt-1.5 flex flex-wrap gap-1.5">
          {shieldHp > 0 && <span className="rounded bg-cyan-400/15 px-2 py-0.5 text-[10px] font-bold text-cyan-200 ring-1 ring-cyan-300/40">🛡 Bouclier {shieldHp} PV</span>}
          {buff && <span className="rounded bg-lime-400/15 px-2 py-0.5 text-[10px] font-bold text-lime-200 ring-1 ring-lime-300/40">💪 Sort ×{buff.mult.toFixed(2)} · {buff.turns} tour{buff.turns > 1 ? "s" : ""}</span>}
          {debuff && <span className="rounded bg-fuchsia-400/15 px-2 py-0.5 text-[10px] font-bold text-fuchsia-200 ring-1 ring-fuchsia-300/40">😵 Atq ennemie ×{debuff.mult.toFixed(2)} · {debuff.turns} tour{debuff.turns > 1 ? "s" : ""}</span>}
          {bleed && <span className="rounded bg-red-400/15 px-2 py-0.5 text-[10px] font-bold text-red-200 ring-1 ring-red-300/40">🩸 Saignement {bleed.dmg}/tour · {bleed.turns} tour{bleed.turns > 1 ? "s" : ""}</span>}
          {stunned && <span className="rounded bg-amber-400/15 px-2 py-0.5 text-[10px] font-bold text-amber-200 ring-1 ring-amber-300/40">😵‍💫 Monstre étourdi</span>}
        </div>
      )}

      {/* Actions + log */}
      <div className="mt-3 grid gap-3 md:grid-cols-2">
        <div className="flex flex-col gap-2 rounded-xl border border-indigo-400/25 bg-black/40 p-4">
          {p.skills && p.skills.length > 1 && p.onSelectSkill && (
            <div className="flex flex-wrap gap-1.5">
              {p.skills.map((s, i) => (
                <button
                  key={i}
                  onClick={() => p.onSelectSkill!(i)}
                  disabled={busy || defeated}
                  className={
                    "rounded-md px-2.5 py-1 text-[11px] font-bold ring-1 transition disabled:opacity-40 " +
                    (i === p.activeSkillIdx ? "bg-cyan-400/20 text-cyan-200 ring-cyan-300/50" : "bg-white/5 text-white/60 ring-white/10 hover:bg-white/10")
                  }
                >
                  {s.name} · Nv.{s.level}
                </button>
              ))}
            </div>
          )}
          <GlowButton onClick={act} disabled={busy || defeated}>
            {actionBtn}
          </GlowButton>
          <div className="grid grid-cols-2 gap-2">
            <GlowButton variant="ghost" onClick={() => { setAnalyzed(true); p.onAnalyze?.(); }} disabled={busy || defeated}>
              🔍 Analyser le monstre
            </GlowButton>
            <GlowButton variant="ghost" onClick={drinkPotion} disabled={busy || defeated || p.potions <= 0 || p.hp >= p.maxHp}>
              🧪 Gelée de soin ({p.potions})
            </GlowButton>
          </div>
          <p className="mt-1 text-[10px] leading-relaxed text-white/40">
            « {p.skill.name} » {tdef.icon} {kdef.label} · {kindEffectText(p.skill, p.stats)} — {p.skill.uses}/{p.skill.usesToNext} usages avant le niveau {p.skill.level + 1}.
          </p>
          {p.onExit && (
            <GlowButton variant="ghost" onClick={p.onExit} className="mt-1">
              {p.exitLabel ?? "Quitter"} ⏻
            </GlowButton>
          )}
        </div>
        <div ref={logRef} className="h-44 overflow-y-auto rounded-xl border border-white/10 bg-black/40 p-3 text-[11px] leading-relaxed md:h-auto">
          {log.map((l, i) => (
            <p key={i} className={"mb-1 " + (l.kind === "sys" ? "italic text-cyan-300/90" : l.kind === "atk" ? "text-emerald-300" : l.kind === "foe" ? "text-red-300" : "text-lime-300")}>
              ▸ {l.t}
            </p>
          ))}
        </div>
      </div>

      {/* Fiche de monstre */}
      <AnimatePresence>
        {analyzed && (
          <motion.div className="fixed bottom-3 right-3 z-40 w-64 rounded-xl border border-red-400/40 bg-[#160b12]/95 p-4 shadow-[0_0_40px_-10px_rgba(239,68,68,0.7)] backdrop-blur" initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 60 }}>
            <div className="mb-1.5 flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-300/80">Fiche de monstre</span>
              <button className="text-white/40 hover:text-white" onClick={() => setAnalyzed(false)}>✕</button>
            </div>
            <div className="text-sm font-bold text-white">{p.monster.name}</div>
            <div className="mt-2 space-y-1 text-[11px] text-white/70">
              <div className="flex justify-between"><span>Rang</span><span className="font-bold text-red-300">{p.monster.rank}</span></div>
              <div className="flex justify-between"><span>Points de vie</span><span className="text-white">{p.monster.maxHp}</span></div>
              <div className="flex justify-between"><span>Attaque</span><span className="text-white">{p.monster.minAtk}–{p.monster.maxAtk}</span></div>
              <div className="flex justify-between"><span>EXP</span><span className="text-cyan-300">{p.monster.xp}</span></div>
            </div>
            <p className="mt-2 border-t border-white/10 pt-2 text-[10px] italic leading-snug text-white/50">{p.monster.desc}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ============================ HUD COMMUN ============================ */
function GameHud({
  level,
  heroName,
  hp,
  maxHp,
  xp,
  potions,
  skill,
  onSheet,
  febrileLeft,
  pages,
  onGrimoire,
  amvRank,
  children,
}: {
  level: number;
  heroName: string;
  hp: number;
  maxHp: number;
  xp: number;
  potions: number;
  skill: Skill | null;
  onSheet: () => void;
  febrileLeft?: number;
  pages?: number;
  onGrimoire?: () => void;
  amvRank: string;
  children?: React.ReactNode;
}) {
  const rank = { label: amvRank, hint: RANK_HINTS[amvRank] ?? "" };
  return (
    <div className="mx-auto max-w-4xl">
      <div className="rounded-xl border border-indigo-400/25 bg-black/50 px-4 py-3 backdrop-blur">
        {/* Ligne 1 : identité (nom cliquable → fiche) + actions de l'écran */}
        <div className="flex min-w-0 flex-wrap items-center justify-between gap-x-3 gap-y-2">
          <div className="flex min-w-0 flex-wrap items-center gap-2">
            <span
              className={"rounded-md px-2 py-1 text-[11px] font-bold ring-1 " + (rank.label === "IMPOSSIBLE À CLASSER" ? "animate-pulse bg-fuchsia-500/20 text-fuchsia-300 ring-fuchsia-400/60" : "bg-cyan-400/15 text-cyan-300 ring-cyan-400/40")}
              title={rank.hint}
            >
              Nv.{level} · RANG {rank.label}
            </span>
            <button
              className="max-w-[10rem] truncate text-sm font-bold text-white underline decoration-dotted decoration-cyan-300/60 underline-offset-4 transition hover:text-cyan-200"
              onClick={onSheet}
              title="Ouvrir la fiche du personnage"
            >
              {heroName}
            </button>
          </div>
          {children && <div className="flex flex-wrap items-center gap-2">{children}</div>}
        </div>
        {/* Ligne 2 : PV + ressources */}
        <div className="mt-2 flex min-w-0 flex-wrap items-center gap-x-3 gap-y-2">
          <div className="flex min-w-0 flex-1 items-center gap-2 sm:max-w-[16rem]">
            <HpBar hp={hp} max={maxHp} color="bg-gradient-to-r from-emerald-400 to-cyan-400" />
            <span className="whitespace-nowrap text-[10px] text-white/50">{hp} / {maxHp} PV</span>
          </div>
          <div className="flex min-w-0 flex-wrap items-center gap-2 text-xs">
            <span className="rounded-md bg-white/5 px-2 py-1 text-white/70 ring-1 ring-white/10">🧪 ×{potions}</span>
            {typeof febrileLeft === "number" && febrileLeft > 0 && (
              <span
                className="animate-pulse rounded-md bg-red-400/15 px-2 py-1 font-bold text-red-300 ring-1 ring-red-400/40"
                title="Malus d'échec de donjon : -25 % dans toutes les caractéristiques"
              >
                🤒 Fébrile · {fmtClock(febrileLeft)}
              </span>
            )}
            {skill && (
              <span className="max-w-[11rem] truncate rounded-md bg-white/5 px-2 py-1 text-white/70 ring-1 ring-white/10" title={skill.name}>
                ✦ {skill.name} Nv.{skill.level}
              </span>
            )}
            {typeof pages === "number" && onGrimoire && (
              <button
                className="rounded-md bg-violet-400/15 px-2 py-1 font-bold text-violet-300 ring-1 ring-violet-400/40 transition hover:bg-violet-400/25"
                onClick={onGrimoire}
                title="Pages de compétence — forger de nouveaux sorts"
              >
                📖 {pages} page{pages > 1 ? "s" : ""}
              </button>
            )}
            <span className="flex min-w-0 items-center gap-1.5">
              <span className="text-[10px] font-bold text-cyan-300">EXP</span>
              <span className="w-20 sm:w-28">
                <XpBar xp={xp} next={xpToNext(level)} />
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================ ECRAN ENTRAINEMENT ============================ */
function TrainingScreen(props: {
  heroName: string; level: number; hp: number; setHp: React.Dispatch<React.SetStateAction<number>>;
  maxHp: number; stats: Stats; skill: Skill; setSkill: React.Dispatch<React.SetStateAction<Skill>>;
  potions: number; setPotions: React.Dispatch<React.SetStateAction<number>>;
  gainXp: (n: number) => void; bump: (k: CounterKey, n?: number) => void; showToast: (s: string) => void;
  onEvac: (msg: string) => void; onGoAmv: () => void; amvUnlocked: boolean;
  onSheet: () => void; xp: number; febrileLeft: number;
  skills: Skill[]; activeSkillIdx: number; onSelectSkill: (i: number) => void;
  pages: number; onGrimoire: () => void;
  amvRank: string;
}) {
  const [n, setN] = useState(1);
  const [def, setDef] = useState<MonsterDef>(trainingSlime(1));
  const [cleared, setCleared] = useState(false);

  const next = () => {
    const i = n + 1;
    setN(i);
    setDef(trainingSlime(i));
    setCleared(false);
    props.setHp((h) => Math.min(props.maxHp, h + Math.ceil(props.maxHp * 0.5)));
  };

  return (
    <div className="min-h-screen bg-[#04060f] p-3 md:p-5">
      <GameHud level={props.level} heroName={props.heroName} hp={props.hp} maxHp={props.maxHp} xp={props.xp} potions={props.potions} skill={props.skill} onSheet={props.onSheet} febrileLeft={props.febrileLeft} pages={props.pages} onGrimoire={props.onGrimoire} amvRank={props.amvRank}>
        {props.amvUnlocked && (
          <button className="rounded-md bg-amber-400/15 px-2.5 py-1 font-bold text-amber-300 ring-1 ring-amber-400/40 hover:bg-amber-400/25" onClick={props.onGoAmv}>
            🏛 AMV
          </button>
        )}
      </GameHud>

      {cleared ? (
        <div className="mx-auto mt-6 max-w-4xl rounded-xl border border-emerald-400/30 bg-black/40 p-6 text-center">
          <div className="text-2xl font-black text-emerald-300">Salle d'entraînement — adversaire vaincu</div>
          <p className="mt-2 text-sm text-white/60">Le système restaure la moitié de vos PV.</p>
          {props.amvUnlocked && (
            <p className="mt-2 text-xs italic text-amber-300/80">L'AMV vous attend : guichet des quêtes et des donjons ouverts.</p>
          )}
          <div className="mt-4 flex justify-center gap-3">
            <GlowButton onClick={next}>Adversaire suivant ▸</GlowButton>
            {props.amvUnlocked && <GlowButton variant="ghost" onClick={props.onGoAmv}>🏛 Se rendre à l'AMV</GlowButton>}
          </div>
        </div>
      ) : (
        <Arena
          key={n}
          heroName={props.heroName}
          level={props.level}
          hp={props.hp}
          setHp={props.setHp}
          maxHp={props.maxHp}
          stats={props.stats}
          skill={props.skill}
          setSkill={props.setSkill}
          potions={props.potions}
          setPotions={props.setPotions}
          monster={def}
          intro={`Salle d'entraînement virtuelle — ${def.name} (adversaire n°${n}) se matérialise.`}
          amvRank={props.amvRank}
          onVictory={() => {
            setCleared(true);
            if (def.name === "Slime Alpha") props.bump("trainingAlphas");
          }}
          onEvac={props.onEvac}
          gainXp={props.gainXp}
          bump={props.bump}
          showToast={props.showToast}
          skills={props.skills}
          activeSkillIdx={props.activeSkillIdx}
          onSelectSkill={props.onSelectSkill}
        />
      )}
    </div>
  );
}

/* ============================ HUB AMV ============================ */
function AMVHub(props: {
  heroName: string; level: number; xp: number; hp: number; maxHp: number;
  stats: Stats; skill: Skill | null; potions: number; febrileLeft: number;
  now: number; activeTimer: { id: number; name: string; deadline: number } | null;
  pages: number; onGrimoire: () => void;
  quest: Quest | null; setQuest: (q: Quest | null) => void;
  questBoard: Quest[]; refreshBoard: () => void; questRefreshes: number; questRefreshAt: number; takeQuest: (q: Quest) => void;
  dungeons: Dungeon[]; refreshDungeons: () => void; refreshes: number;
  activeId: number | null;
  onEnterDungeon: (d: Dungeon) => void;
  onClaimQuest: () => void;
  onExit: () => void; onSheet: () => void;
  amvRank: string; amvXp: number; relics: Relic[]; onDepositRelics: () => void;
  onOpenLea?: () => void;
}) {
  const [openCounter, setOpenCounter] = useState<"none" | "quetes" | "donjons" | "reliques">("none");
  /* Toutes les Portes de la page refermées → le réalignement du radar est gratuit et restaure le budget. */
  const allClosed = props.dungeons.length > 0 && props.dungeons.every((d) => d.closed);

  const acceptQuest = (q: Quest) => {
    /* Fix du 13/11/2026 : une mission acceptée quitte l'affiche (flag « taken »),
      impossible de la reprendre après l'avoir rendue — sa progression comptait depuis
      la GÉNÉRATION de l'affiche, donc la reprendre la revalidait en une action. */
    props.setQuest(q);
    props.takeQuest(q);
    setOpenCounter("none");
  };

  const dungeonRows = props.dungeons.map((d) => {
    const locked = !rankEnterable(d.rank, props.amvRank);
    const xpBlocked = !rankXpAllowed(d.rank, props.amvRank);
    const isActive = props.activeId === d.id;
    const fam = ALL_FAMILIES.find((f) => f.id === d.family);
    const isElite = (RANK_INDEX[d.rank] ?? 0) >= RANK_INDEX.D;
    return (
      <div key={d.id} className={"rounded-lg border p-3 " + (d.closed ? (d.ruptured ? "border-red-400/30 bg-red-500/5" : "border-white/10 bg-white/[0.02] opacity-60") : locked ? "border-white/10 bg-white/[0.03]" : "border-indigo-400/30 bg-indigo-500/10")}>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className={"text-sm font-bold " + (d.closed ? "text-white/40 line-through" : "text-white")}>{d.name} <span className="font-normal text-white/40">· Porte de {d.zone}</span></span>
              <RankBadge rank={d.rank} />
              {!d.closed && xpBlocked && (
                <span className="rounded bg-white/10 px-1.5 py-0.5 text-[10px] font-bold text-white/50 ring-1 ring-white/15">⚠ 0 EXP · sous-rangé</span>
              )}
              {fam && <span className="rounded bg-white/5 px-1.5 py-0.5 text-[10px] font-bold text-white/70 ring-1 ring-white/10">{fam.emoji} {fam.label}{isElite ? " · élite" : ""}</span>}
              {d.closed && d.ruptured && (
                <span className="rounded bg-red-500/20 px-1.5 py-0.5 text-[10px] font-bold text-red-300/80 ring-1 ring-red-400/40">ROMPUE</span>
              )}
            </div>
            <div className="mt-0.5 text-[11px] text-white/50">
              {d.rooms} salles · {d.closed ? (d.ruptured ? "Rompue — contenue par l'AMV" : "REFERMÉE") : locked ? "Accès restreint" : "Ouverte aux Veilleurs"}
            </div>
            {!d.closed && (
              <div className="mt-0.5 text-[10px] text-cyan-300/70">
                Fermeture : {xpBlocked ? <span className="text-white/40">+0 EXP — donjon sous votre rang (pages et butin conservés)</span> : <>+{dungeonReward(d.rooms, false, d.rank)} EXP</>} · +{clearGelReward(d.rooms)} gelées · ⏱ {fmtClock(roomTime(d.rooms))} avant rupture
              </div>
            )}
          </div>
          {d.closed ? (
            <span className={"text-[11px] font-bold " + (d.ruptured ? "text-red-300/80" : "text-emerald-300/70")}>{d.ruptured ? "⚠ rompue" : "✓ refermée"}</span>
          ) : locked ? (
            <span className="text-[11px] text-white/40">Rang {d.rank} requis</span>
          ) : (
            <GlowButton onClick={() => props.onEnterDungeon(d)} className="!px-3 !py-1.5 !text-xs">
              {isActive ? "Reprendre l'exploration" : "Entrer ▸"}
            </GlowButton>
          )}
        </div>
      </div>
    );
  });

  return (
    <div className="min-h-screen bg-[#04060f] p-3 md:p-5">
      <GameHud level={props.level} heroName={props.heroName} hp={props.hp} maxHp={props.maxHp} xp={props.xp} potions={props.potions} skill={props.skill} onSheet={props.onSheet} febrileLeft={props.febrileLeft} pages={props.pages} onGrimoire={props.onGrimoire} amvRank={props.amvRank} />

      <div className="mx-auto mt-3 max-w-4xl">
        <div className="relative overflow-hidden rounded-2xl border border-indigo-400/30">
          <img src={PANELS.d1} alt="Hall de l'AMV" className="h-52 w-full object-cover object-top md:h-64" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30" />
          <div className="absolute bottom-3 left-4">
            <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-indigo-300/90">Agence Mondiale des Veilleurs</div>
            <div className="text-xl font-black text-white">Antenne de Besançon</div>
          </div>
        </div>

        {props.activeTimer &&
          (() => {
            const left = Math.max(0, props.activeTimer!.deadline - props.now);
            const unstable = left <= RESCUE_WINDOW;
            const d = props.dungeons.find((x) => x.id === props.activeTimer!.id);
            return (
              <div className={"mt-3 flex flex-wrap items-center justify-between gap-2 rounded-xl border p-4 " + (unstable ? (left < 60000 ? "animate-pulse border-red-400/70 bg-red-500/15" : "border-red-400/40 bg-red-500/10") : "border-amber-400/30 bg-amber-400/5")}>
                <div>
                  <span className={"text-[10px] font-bold uppercase tracking-widest " + (unstable ? "text-red-300" : "text-amber-300")}>Exploration en cours{unstable ? " — Porte instable" : ""}</span>
                  <div className="text-sm font-bold text-white">
                    {props.activeTimer!.name} · rupture dans <span className={"tabular-nums " + (unstable ? "text-red-300" : "text-amber-200")}>{fmtClock(left)}</span>
                  </div>
                </div>
                {d && (
                  <GlowButton className="!px-3 !py-1.5 !text-xs" onClick={() => props.onEnterDungeon(d)}>
                    Reprendre l'exploration ▸
                  </GlowButton>
                )}
              </div>
            );
          })()}

        {props.quest && (
          <div className={"mt-3 rounded-xl border p-4 " + (props.quest.done ? "border-emerald-400/40 bg-emerald-400/5" : "border-amber-400/30 bg-amber-400/5")}>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <span className={"text-[10px] font-bold uppercase tracking-widest " + (props.quest.done ? "text-emerald-300" : "text-amber-300/80")}>
                  {props.quest.done ? "✓ Quête accomplie — à rendre au guichet" : "Quête en cours — Agent Mira"}
                </span>
                <div className="text-sm font-bold text-white">{props.quest.label}</div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-white/60">{Math.min(props.quest.progress, props.quest.target)} / {props.quest.target}</span>
                {props.quest.done ? (
                  <GlowButton className="!px-3 !py-1.5 !text-xs" onClick={props.onClaimQuest}>Rendre la quête · +{props.quest.reward} EXP</GlowButton>
                ) : (
                  <button className="text-[11px] text-white/40 underline hover:text-white" onClick={() => props.setQuest(null)}>abandonner</button>
                )}
              </div>
            </div>
            <div className="mt-2 h-1.5 w-full rounded bg-black/40">
              <div
                className={"h-full rounded " + (props.quest.done ? "bg-gradient-to-r from-emerald-400 to-lime-300" : "bg-gradient-to-r from-amber-400 to-orange-400")}
                style={{ width: `${Math.min(100, (props.quest.progress / props.quest.target) * 100)}%` }}
              />
            </div>
          </div>
        )}

        <div className="mt-3 grid gap-3 md:grid-cols-2">
          <button className="group rounded-xl border border-indigo-400/30 bg-black/40 p-5 text-left transition-all hover:border-indigo-300 hover:bg-indigo-500/10" onClick={() => setOpenCounter("quetes")}>
            <div className="text-xs uppercase tracking-widest text-white/40">Guichet des quêtes</div>
            <div className="mt-1 text-lg font-black text-white">Agent Mira 🗂</div>
            <p className="mt-1 text-xs leading-relaxed text-white/50">« Bonjour ! Nous avons reçu de nouvelles missions ce matin. J'ai quelque chose pour vous, même au rang G. »</p>
          </button>
          <button className="group rounded-xl border border-indigo-400/30 bg-black/40 p-5 text-left transition-all hover:border-indigo-300 hover:bg-indigo-500/10" onClick={() => setOpenCounter("donjons")}>
            <div className="text-xs uppercase tracking-widest text-white/40">Guichet des donjons</div>
            <div className="mt-1 text-lg font-black text-white">Agent Yuna 🌀</div>
            <p className="mt-1 text-xs leading-relaxed text-white/50">« Voici les Portes compatibles avec votre classement — l'AMV ne vous adresse que des adversaires à votre mesure… ou presque. Les catégories trop faciles disparaissent des radars à mesure que vous montez ; les Portes S et au-delà, elles, restent des exceptions. Chaque Porte a son compte à rebours avant la rupture : il s'érode à chaque mort. Dans les 2 dernières minutes, elle vire au rouge — récompense doublée, et l'AMV envoie une escouade de secours. De vraies dernières minutes. »</p>
          </button>
          <button className="group rounded-xl border border-indigo-400/30 bg-black/40 p-5 text-left transition-all hover:border-indigo-300 hover:bg-indigo-500/10" onClick={() => { props.onOpenLea?.(); setOpenCounter("reliques"); }}>
            <div className="text-xs uppercase tracking-widest text-white/40">Bureau des reliques</div>
            <div className="mt-1 text-lg font-black text-white">Léa, archiviste 📖</div>
            <p className="mt-1 text-xs leading-relaxed text-white/50">« Chaque noyau de boss refermé est une preuve de fermeture. Rapportez-le-moi, je le consigne — et votre classement AMV en dépend. Ne me faites pas attendre le tome 13. »</p>
            <div className="mt-2 text-[10px] font-bold text-cyan-300/70">🔮 Reliques en satchel : {props.relics.length} · Renommée : {props.amvXp}</div>
          </button>
        </div>

        <div className="mt-3 flex justify-center">
          <GlowButton variant="ghost" onClick={props.onExit}>↩ Retour à la salle d'entraînement</GlowButton>
        </div>
      </div>

      <AnimatePresence>
        {openCounter === "quetes" && (
          <Modal title="Agent Mira — Tableau des quêtes" onClose={() => setOpenCounter("none")}>
            <p className="mb-4 text-sm italic text-white/60">« Cinq missions par affiche. Une fois acceptée, une mission quitte l'affiche — abandon ou pas, elle n'y revient pas. Je peux réimprimer trois fois de suite ; ensuite, l'Agence me fait patienter une demi-heure. »</p>
            <div className="space-y-2">
              {props.questBoard.filter((q) => !q.taken).map((q) => (
                <div key={q.id} className="flex items-center justify-between rounded-lg bg-white/5 p-3 ring-1 ring-white/10">
                  <div>
                    <div className="text-sm font-bold text-white">{q.label}</div>
                    <div className="text-[11px] text-cyan-300/80">Récompense : +{q.reward} EXP</div>
                  </div>
                  <GlowButton className="!px-3 !py-1.5 !text-xs" onClick={() => acceptQuest(q)}>Accepter</GlowButton>
                </div>
              ))}
            </div>
            {props.questBoard.length > 0 && props.questBoard.every((q) => q.taken) && (
              <p className="mt-2 rounded-lg bg-white/5 p-3 text-sm italic text-white/60 ring-1 ring-white/10">« L'affiche du jour est épuisée — toutes mes missions sont entre vos mains. Réimprimez, ou repassez plus tard. »</p>
            )}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
              <span className="text-[11px] text-white/50">
                {props.questRefreshes > 0
                  ? `Réimpressions restantes : ${props.questRefreshes}/${QUEST_REFRESH_LIMIT}`
                  : props.questRefreshAt > props.now
                  ? `Guichet en pause — nouvelle réimpression dans ${fmtClock(props.questRefreshAt - props.now)}`
                  : "Réimpression disponible…"}
              </span>
              <GlowButton variant="ghost" className="!px-3 !py-1.5 !text-xs" onClick={props.refreshBoard} disabled={props.questRefreshes <= 0}>
                {props.questRefreshes > 0 ? `⟳ Nouvelles offres (${props.questRefreshes})` : "⟳ Réimpression indisponible"}
              </GlowButton>
            </div>
          </Modal>
        )}
        {openCounter === "donjons" && (
          <Modal title="Agent Yuna — Donjons ouverts" onClose={() => setOpenCounter("none")}>
            <p className="mb-4 text-sm italic text-white/60">« Les capteurs ont repéré ces Portes récemment. L'Agence filtre selon votre classement : les basses catégories s'effacent de vos radars quand vous les dépassez — inutile d'envoyer un champion dans une salle de quartier. Les Portes S, SS et au-delà restent rarissimes, elles. Référez le boss pour fermer la Porte avant que son chrono n'expire. Le balayage use les capteurs : je peux relancer le radar trois fois par page, pas plus — ensuite, refermez toutes les Portes affichées pour me laisser réaligner. »</p>
            <div className="space-y-2">{dungeonRows}</div>
            <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
              <span className="text-[11px] text-white/50">
                {allClosed
                  ? "📡 Page entièrement refermée : le réalignement du radar est gratuit."
                  : props.refreshes > 0
                  ? `📡 Radar : ${props.refreshes} balayage${props.refreshes > 1 ? "s" : ""} restant${props.refreshes > 1 ? "s" : ""}.`
                  : "📡 Capteurs saturés : refermez toutes les Portes de la page pour relancer le balayage."}
              </span>
              <GlowButton
                variant="ghost"
                className="!px-3 !py-1.5 !text-xs"
                disabled={!allClosed && props.refreshes <= 0}
                onClick={props.refreshDungeons}
              >
                ⟳ Mettre à jour la liste{allClosed ? " (gratuit)" : ` (${props.refreshes})`}
              </GlowButton>
            </div>
          </Modal>
        )}
        {openCounter === "reliques" && (
          <Modal title="Léa — Bureau des reliques" onClose={() => setOpenCounter("none")}>
            <p className="mb-4 text-sm italic text-white/60">« Vous revoilà… J'ai fini par entrer à l'Agence, figurez-vous. Chaque noyau de boss refermé est une preuve : je le consigne, et votre classement AMV monte. Vous me rappelez quelqu'un, au fait. — L. »</p>
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2 rounded-lg bg-white/5 p-3 ring-1 ring-white/10">
              <div className="flex items-center gap-2">
                <RankBadge rank={props.amvRank} />
                <span className="text-[11px] text-white/50">
                  Renommée : {props.amvXp}
                  {amvNextThreshold(props.amvXp) !== null ? ` / ${amvNextThreshold(props.amvXp)}` : " — échelle maximale"}
                </span>
              </div>
              {amvNextThreshold(props.amvXp) !== null && (
                <span className="w-36"><XpBar xp={props.amvXp} next={amvNextThreshold(props.amvXp)!} /></span>
              )}
            </div>
            <div className="space-y-2">
              {props.relics.length === 0 ? (
                <p className="rounded-lg bg-white/5 p-4 text-center text-sm text-white/50">Aucune relique en satchel. Refermez une Porte — le noyau du boss se détache à la fermeture.</p>
              ) : (
                props.relics.map((r) => (
                  <div key={r.id} className="flex items-center justify-between rounded-lg bg-white/5 p-3 ring-1 ring-white/10">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🔮</span>
                      <div>
                        <div className="text-sm font-bold text-white">{r.name}</div>
                        <div className="text-[10px] text-white/50">{r.xp > (RELIC_XP[r.rank] ?? 0) ? "Boss refermé — Porte en rupture (valeur doublée)" : "Boss refermé"}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <RankBadge rank={r.rank} />
                      <span className="text-[11px] font-bold text-cyan-300">+{r.xp}</span>
                    </div>
                  </div>
                ))
              )}
            </div>
            {props.relics.length > 0 && (
              <div className="mt-4 flex justify-center">
                <GlowButton onClick={props.onDepositRelics}>Consigner toutes les reliques (+{props.relics.reduce((a, r) => a + r.xp, 0)} renommée) ▸</GlowButton>
              </div>
            )}
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ============================ EXPLORATION DE DONJON ============================ */
function DungeonScreen(props: {
  active: ActiveDungeon;
  setActive: React.Dispatch<React.SetStateAction<ActiveDungeon | null>>;
  heroName: string; level: number; xp: number;
  hp: number; setHp: React.Dispatch<React.SetStateAction<number>>;
  maxHp: number; stats: Stats; skill: Skill; setSkill: React.Dispatch<React.SetStateAction<Skill>>;
  potions: number; setPotions: React.Dispatch<React.SetStateAction<number>>;
  gainXp: (n: number) => void; bump: (k: CounterKey, n?: number) => void; showToast: (s: string) => void;
  onExit: () => void; onClear: () => void; onEvac: (msg: string) => void;
  onSheet: () => void; now: number; febrileLeft: number;
  skills: Skill[]; activeSkillIdx: number; onSelectSkill: (i: number) => void;
  pages: number; onGrimoire: () => void; gainPages: (n: number) => void;
  amvRank: string;
}) {
  const a = props.active;
  const room = a.rooms[a.idx];
  const xpAllowed = rankXpAllowed(a.rank, props.amvRank);
  const isLast = a.idx === a.rooms.length - 1;
  const ruptureLeft = Math.max(0, a.deadline - props.now);
  const [trapInspected, setTrapInspected] = useState(false);
  const [trapRevealed, setTrapRevealed] = useState(false);
  const [roomMsg, setRoomMsg] = useState<string | null>(null);

  const setCompanions: React.Dispatch<React.SetStateAction<Companion[]>> = (v) =>
    props.setActive((cur) =>
      cur
        ? { ...cur, squad: typeof v === "function" ? (v as (prev: Companion[]) => Companion[])(cur.squad) : v }
        : cur
    );

  useEffect(() => {
    setTrapInspected(false);
    setTrapRevealed(false);
    setRoomMsg(null);
    /* Les soigneurs relèvent l'escouade AMV, MAIS PAS les invocations (choix de Maximilien) :
       une créature KO reste à terre — et devient ré-invocable. */
    if (a.squad.some((c) => c.hp <= 0 && !c.summon)) {
      const revived = a.squad.filter((c) => c.hp <= 0 && !c.summon).map((c) => c.name);
      props.setActive((cur) =>
        cur && cur.squad.some((c) => c.hp <= 0 && !c.summon)
          ? { ...cur, squad: cur.squad.map((c) => (c.hp <= 0 && !c.summon ? { ...c, hp: Math.ceil(c.maxHp / 2) } : c)) }
          : cur
      );
      props.showToast(`🚑 Les soigneurs de l'escouade relèvent ${revived.join(" et ")} (PV restaurés à moitié).`);
    }
  }, [a.idx]);

  const goNext = () => {
    if (a.idx < a.rooms.length - 1) {
      props.bump("rooms");
      props.setActive({ ...a, idx: a.idx + 1 });
    }
  };

  const setRoomDone = () => {
    const rooms = [...a.rooms];
    rooms[a.idx] = { ...rooms[a.idx], done: true } as Room;
    props.setActive({ ...a, rooms });
  };

  /* Échec d'un piège ou d'une énigme : plus de perte de PV (choix de Maximilien) —
     un monstre de la famille du donjon surgit en embuscade. L'échec coûte du temps de
     combat, donc du chrono de rupture. Le monstre est renforcé au palier de difficulté. */
  const spawnAmbush = () => {
    const fam = ALL_FAMILIES.find((f) => f.id === a.family) ?? FAMILIES[0];
    const elite = (RANK_INDEX[a.rank] ?? 0) >= RANK_INDEX.D;
    const pool = elite ? fam.elite : fam.pool;
    const base = scaleDef(pickMonster(pool), a.rank);
    const boost = 1 + 0.25 * roomTier(a.rank);
    const def: MonsterDef = { ...base, maxHp: Math.round(base.maxHp * boost), desc: `Embuscade — réveillé par votre erreur : ${base.desc}` };
    const rooms = [...a.rooms];
    rooms[a.idx] = { type: "monstre", def, done: false, ambush: true } as Room;
    props.setActive({ ...a, rooms });
    props.showToast(`⚠ Votre échec a réveillé un gardien : ${def.name} surgit des murs !`);
  };

  const handleTrap = (i: number) => {
    const trap = (room as { trap: Trap }).trap;
    if (trap.options[i].safe) {
      setRoomMsg("Vous franchissez la salle sans encombre. Un frisson vous dit que le piège vous a frôlé.");
      if (xpAllowed) props.gainXp(10);
      props.bump("traps");
      setRoomDone();
    } else {
      spawnAmbush();
    }
  };

  const inspectTrap = () => {
    if (trapInspected) return;
    setTrapInspected(true);
    /* Plus le donjon est profond, plus la perception du Joueur peine à percer le mécanisme. */
    const need = 8 + roomTier(a.rank) * 2;
    const roll = rnd(1, 10) + Math.floor(props.stats.intelligence / 3);
    if (roll >= need) {
      setTrapRevealed(true);
    } else {
      setRoomMsg(roomTier(a.rank) >= 3 ? "Vous fouillez la salle… les mécanismes d'ici sont au-delà de votre perception. Ou presque." : "Vous fouillez la salle du regard… rien d'anormal à première vue.");
    }
  };

  const handlePuzzle = (i: number) => {
    const puzzle = (room as { puzzle: Puzzle }).puzzle;
    if (puzzle.options[i].correct) {
      setRoomMsg(xpAllowed ? "✓ Un déclic résonne : la porte suivante s'entr'ouvre. +20 EXP" : "✓ Un déclic résonne : la porte suivante s'entr'ouvre.");
      if (xpAllowed) props.gainXp(20);
      props.bump("riddles");
      setRoomDone();
    } else {
      spawnAmbush();
    }
  };

  /* Salle de repos : une halte qui rend 50 % des PV max (choix de Maximilien). */
  const handleRest = () => {
    const heal = Math.ceil(props.maxHp / 2);
    const gained = Math.min(props.maxHp, props.hp + heal) - props.hp;
    if (gained > 0) {
      props.setHp(props.hp + heal);
      setRoomMsg(`🧪 Vous videz la fiole : +${gained} PV (${Math.min(props.maxHp, props.hp + heal)}/${props.maxHp}).`);
      props.showToast(`🧪 Salle de repos : la potion vous rend ${gained} PV.`);
    } else {
      setRoomMsg("🧪 Vous rangez la fiole : vos PV sont déjà au summum. Autre chose attendra un autre explorateur.");
    }
    setRoomDone();
  };

  const pct = ((a.idx + (room.done ? 1 : 0)) / a.rooms.length) * 100;

  return (
    <div className="min-h-screen bg-[#04060f] p-3 md:p-5">
      <GameHud level={props.level} heroName={props.heroName} hp={props.hp} maxHp={props.maxHp} xp={props.xp} potions={props.potions} skill={props.skill} onSheet={props.onSheet} febrileLeft={props.febrileLeft} pages={props.pages} onGrimoire={props.onGrimoire} amvRank={props.amvRank}>
        <button className="rounded-md bg-white/5 px-2.5 py-1 text-white/60 ring-1 ring-white/10 hover:text-white" onClick={props.onExit}>Sortir</button>
      </GameHud>

      <div className="mx-auto mt-3 max-w-4xl">
        {/* En-tete donjon */}
        <div className="relative overflow-hidden rounded-2xl border border-indigo-400/30">
          <img src={PANELS.d2} alt="Porte du donjon" className="h-36 w-full object-cover object-top md:h-44" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
          <div className="absolute bottom-2 left-4 flex flex-wrap items-center gap-2">
            <span className="text-lg font-black text-white">{a.name}</span>
            <RankBadge rank={a.rank} />
            <span className="text-xs text-white/60">Salle {Math.min(a.idx + 1, a.rooms.length)} / {a.rooms.length}</span>
            <span
              className={
                "rounded px-2 py-0.5 text-xs font-black tabular-nums ring-1 " +
                (a.rupture
                  ? ruptureLeft < 60000
                    ? "animate-pulse bg-red-500/30 text-red-200 ring-red-400/70"
                    : "bg-red-400/20 text-red-200 ring-red-400/50"
                  : "bg-amber-400/15 text-amber-200/90 ring-amber-400/40")
              }
              title="Refermez la Porte avant l'échéance, ou elle rompra ! Sous 15:00, la Porte vire au rouge."
            >
              ⏱ {a.rupture ? (ruptureLeft < 60000 ? "RUPTURE IMMINENTE" : "RUPTURE DANS") : "Rupture dans"} {fmtClock(ruptureLeft)}
            </span>
          </div>
        </div>
        <div className="mt-1.5 h-1.5 w-full rounded bg-black/40">
          <motion.div className="h-full rounded bg-gradient-to-r from-red-500 via-amber-400 to-emerald-400" animate={{ width: `${pct}%` }} />
        </div>
        <div className="mt-1 flex items-center gap-2">
          <span className={"text-[10px] font-black tracking-widest " + (a.rupture ? "text-red-300/80" : "text-amber-300/60")}>{a.rupture ? "RUPTURE" : "STABILITÉ"}</span>
          <div className="h-1 flex-1 rounded bg-black/40">
            <div
              className={"h-full rounded " + (a.rupture ? "bg-gradient-to-r from-red-600 to-red-400" : "bg-gradient-to-r from-amber-500 to-amber-300")}
              style={{ width: `${Math.max(0, Math.min(100, (ruptureLeft / a.timeLimit) * 100))}%` }}
            />
          </div>
        </div>

        {/* Contenu de la salle */}
        {!xpAllowed && (
          <div className="mb-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-center text-[11px] text-white/50">
            ⚠ Donjon sous votre rang : aucune EXP à y gagner — pages du Grimoire et butin conservés.
          </div>
        )}
        <AnimatePresence mode="wait">
          <motion.div key={a.idx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
            {(room.type === "monstre" || room.type === "miniboss" || room.type === "boss") && !room.done && (
              <div className="mt-3">
                <Arena
                  key={"room-" + a.idx}
                  heroName={props.heroName}
                  level={props.level}
                  hp={props.hp}
                  setHp={props.setHp}
                  maxHp={props.maxHp}
                  stats={props.stats}
                  skill={props.skill}
                  setSkill={props.setSkill}
                  potions={props.potions}
                  setPotions={props.setPotions}
                  monster={room.def}
                  intro={
                    room.type === "boss"
                      ? `⚠ SALLE DU BOSS — ${room.def.name} garde le noyau du donjon. Tuez-le pour refermer la Porte !`
                      : room.type === "miniboss"
                      ? room.guardian
                        ? `⚔️ GARDIEN MYTHIQUE — ${room.def.name} bloque le sanctuaire du dieu. Terrassez-le pour affronter ${(a.rooms[a.rooms.length - 1] as { def: { name: string } }).def.name} !`
                        : "📖 Un Livre Enchanté rôde dans cette salle — arrachez-lui ses pages pour votre Grimoire !"
                      : (room as { ambush?: boolean }).ambush
                      ? `⚠ EMBUSCADE — ${room.def.name}, réveillé par votre erreur, vous tombe dessus !`
                      : `${room.def.name} vous barre la route !`
                  }
                  xpAllowed={xpAllowed}
                  amvRank={props.amvRank}
                  onVictory={() => {
                    setRoomDone();
                    /* Compteurs des quêtes de chasse — détection sans toucher aux données :
                       alpha = poids 0,6 conservé par scaleDef, élite = rang ≥ D. */
                    if (room.type === "monstre") {
                      const def = room.def;
                      const ri = RANK_INDEX[def.rank] ?? 0;
                      if (a.family) props.bump(`fam:${a.family}`);
                      if (def.weight === 0.6) props.bump("alphas");
                      if (ri >= RANK_INDEX.F) props.bump("rankF");
                      if (ri >= RANK_INDEX.E) props.bump("rankE");
                      if (ri >= RANK_INDEX.D) {
                        props.bump("rankD");
                        props.bump("elites");
                      }
                      if (room.ambush) props.bump("ambushes");
                    }
                    if (room.type === "miniboss" && room.guardian) {
                      props.showToast(`⚔️ ${room.def.name} s'effondre — le sanctuaire s'ouvre : le dieu vous attend !`);
                    } else if (room.type === "miniboss") {
                      props.bump("minibosses");
                      props.gainPages(1);
                      props.showToast("📖 Le Livre Enchanté se dissout en cendres : +1 Page de compétence !");
                    }
                    if (room.type === "boss") {
                      props.bump("crowns");
                      const duelKind = props.skills?.[props.activeSkillIdx]?.kind;
                      if (duelKind) props.bump(`duel:${duelKind}`);
                      props.setActive({ ...a, rooms: a.rooms.map((r, i) => (i === a.idx ? { ...r, done: true } : r)), bossDefeated: true } as ActiveDungeon);
                    }
                  }}
                  onEvac={props.onEvac}
                  gainXp={props.gainXp}
                  bump={props.bump}
                  showToast={props.showToast}
                  skills={props.skills}
                  activeSkillIdx={props.activeSkillIdx}
                  onSelectSkill={props.onSelectSkill}
                  companions={a.squad}
                  setCompanions={setCompanions}
                  onTimePenalty={(sec) => {
                    props.setActive((cur) => (cur && !cur.bossDefeated ? { ...cur, deadline: cur.deadline - sec * 1000 } : cur));
                    props.showToast(`⏱ Votre frappe lourde ébranle la Porte : +${sec} s sur le chrono de rupture !`);
                  }}
                  onPotion={() => props.setActive((cur) => (cur ? { ...cur, potionsUsed: (cur.potionsUsed ?? 0) + 1 } : cur))}
                  onSquadDown={() => props.setActive((cur) => (cur ? { ...cur, squadDown: true } : cur))}
                />
              </div>
            )}

            {room.type === "boss" && room.done && a.bossDefeated && (
              <div className="mt-3 overflow-hidden rounded-2xl border border-emerald-400/40">
                <div className="relative">
                  <img src={PANELS.d2} alt="Porte refermée" className="h-48 w-full object-cover object-top grayscale-[0.3]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <motion.div initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", bounce: 0.4 }} className="text-3xl font-black tracking-widest text-emerald-300 drop-shadow-[0_0_25px_rgba(52,211,153,0.8)]">
                      ✦ PORTE REFERMÉE ✦
                    </motion.div>
                    <p className="mt-2 max-w-md px-4 text-center text-sm text-white/70">Le boss terrassé, la membrane de la Porte se dissout lentement. Le donjon est refermé — l'AMV vous doit une fière chandelle.</p>
                  </div>
                </div>
                <div className="bg-[#0b1026] p-4 text-center">
                  <div className="text-xs text-white/60">
                    {xpAllowed ? (
                      <>
                        Récompense de fermeture ({a.rooms.length} salles){a.rupture ? " — doublée, Porte instable" : ""} : <span className="font-bold text-cyan-300">+{dungeonReward(a.rooms.length, a.rupture, a.rank)} EXP</span> · <span className="font-bold text-lime-300">+{clearGelReward(a.rooms.length)} gelées de soin</span>
                      </>
                    ) : (
                      <>
                        Aucune EXP — donjon sous votre rang. <span className="font-bold text-lime-300">+{clearGelReward(a.rooms.length)} gelées de soin</span>
                      </>
                    )}
                  </div>
                  {a.rupture && a.squad.length > 0 && (
                    <div className="mt-1 text-[11px] italic text-amber-200/70">L'escouade de secours ({a.squad.map((c) => c.name).join(" et ")}) s'incline devant vous avant de rejoindre l'AMV.</div>
                  )}
                  <div className="mt-4 flex justify-center">
                    <GlowButton onClick={props.onClear}>🏛 Retour à l'AMV</GlowButton>
                  </div>
                </div>
              </div>
            )}

            {(room.type === "monstre" || room.type === "miniboss") && room.done && (
              <div className="mt-3 rounded-xl border border-white/10 bg-black/40 p-5 text-center">
                <div className="text-lg font-bold text-white/80">Salle nettoyée ✓</div>
                <div className="mt-4 flex justify-center">
                  <GlowButton onClick={goNext}>Salle suivante ▸</GlowButton>
                </div>
              </div>
            )}

            {room.type === "piege" && (
              <div className="mt-3 overflow-hidden rounded-2xl border border-amber-400/30">
                <img src={PANELS.d3} alt="Couloir du donjon" className="h-40 w-full object-cover" />
                <div className="bg-[#0b1026] p-5">
                  <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-amber-300/80">Salle piégée ? <span className="text-amber-200/50">· {TRAP_TIER_LABELS[roomTier(a.rank)]}</span></div>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">{(room as { trap: Trap }).trap.text}</p>
                  {trapRevealed && (
                    <p className="mt-2 rounded-lg border border-cyan-300/30 bg-cyan-400/10 p-3 text-xs leading-relaxed text-cyan-200">🔍 Le Joueur : « {(room as { trap: Trap }).trap.hint} »</p>
                  )}
                  {roomMsg && <p className="mt-2 text-sm font-bold text-amber-300">{roomMsg}</p>}
                  <div className="mt-4 grid gap-2 md:grid-cols-2">
                    {!room.done ? (
                      <>
                        <GlowButton variant="ghost" onClick={inspectTrap} disabled={trapInspected}>
                          🔍 Inspecter la salle {trapInspected ? "(déjà fait)" : ""}
                        </GlowButton>
                        {(room as { trap: Trap }).trap.options.map((o, i) => (
                          <GlowButton key={i} onClick={() => handleTrap(i)}>{o.label}</GlowButton>
                        ))}
                      </>
                    ) : (
                      <div className="md:col-span-2 text-center">
                        <GlowButton onClick={goNext}>Salle suivante ▸</GlowButton>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {room.type === "enigme" && (
              <div className="mt-3 overflow-hidden rounded-2xl border border-violet-400/30">
                <img src={PANELS.d3} alt="Salle de l'énigme" className="h-40 w-full object-cover" />
                <div className="bg-[#0b1026] p-5">
                  <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-violet-300/80">Salle scellée — Énigme <span className="text-violet-200/50">· {TRAP_TIER_LABELS[roomTier(a.rank)]}</span></div>
                  <p className="mt-2 text-sm leading-relaxed text-white/90">{(room as { puzzle: Puzzle }).puzzle.q}</p>
                  {roomMsg && <p className="mt-2 text-sm font-bold text-violet-300">{roomMsg}</p>}
                  <div className="mt-4 grid gap-2 md:grid-cols-3">
                    {!room.done ? (
                      (room as { puzzle: Puzzle }).puzzle.options.map((o, i) => (
                        <GlowButton key={i} onClick={() => handlePuzzle(i)}>{o.label}</GlowButton>
                      ))
                    ) : (
                      <div className="md:col-span-3 text-center">
                        <GlowButton onClick={goNext}>Salle suivante ▸</GlowButton>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {room.type === "repos" && (
              <div className="mt-3 overflow-hidden rounded-2xl border border-emerald-400/40">
                <img src={PANELS.d3} alt="Salle de repos" className="h-40 w-full object-cover" />
                <div className="bg-[#0b1026] p-5">
                  <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-300/80">Salle de repos <span className="text-emerald-200/50">· halte permise</span></div>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">{(room as { rest: string }).rest}</p>
                  {roomMsg && <p className="mt-2 text-sm font-bold text-emerald-300">{roomMsg}</p>}
                  <div className="mt-4 grid gap-2 md:grid-cols-2">
                    {!room.done ? (
                      <GlowButton onClick={handleRest}>🧪 Faire halte — boire la potion</GlowButton>
                    ) : (
                      <div className="md:col-span-2 text-center">
                        <GlowButton onClick={goNext}>Salle suivante ▸</GlowButton>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ============================ ALLOCATION DE POINTS ============================ */
function Allocation({
  stats, setStats, points, setPoints, setHp, onClose,
}: {
  stats: Stats; setStats: (s: Stats) => void; points: number; setPoints: (n: number) => void;
  setHp: React.Dispatch<React.SetStateAction<number>>; onClose: () => void;
}) {
  const alloc = (k: StatKey) => {
    if (points <= 0) return;
    setStats({ ...stats, [k]: stats[k] + 1 });
    if (k === "vitalite") setHp((h) => h + 6);
    setPoints(points - 1);
  };
  return (
    <Modal title="Niveau supérieur — Points de caractéristiques" onClose={onClose}>
      <p className="mb-4 text-sm text-white/60">
        Le Joueur vous accorde <span className="font-bold text-cyan-300">3 points</span> par niveau. Répartissez-les ci-dessous.
      </p>
      <div className="space-y-2">
        {STAT_INFO.map((s) => (
          <div key={s.key} className="flex items-center justify-between rounded-lg bg-white/5 p-3 ring-1 ring-white/10">
            <div>
              <div className="text-sm font-bold text-white">{s.label} <span className="text-cyan-300">{stats[s.key]}</span></div>
              <div className="text-[10px] text-white/50">{s.desc}</div>
            </div>
            <button className="rounded-md bg-indigo-500/30 px-3 py-1.5 text-sm font-black text-indigo-200 ring-1 ring-indigo-400/50 transition hover:bg-indigo-500/50 disabled:opacity-30" disabled={points <= 0} onClick={() => alloc(s.key)}>
              +1
            </button>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs text-white/50">Points restants : <span className="font-bold text-cyan-300">{points}</span></span>
        <GlowButton onClick={onClose} disabled={points > 0}>Valider</GlowButton>
      </div>
    </Modal>
  );
}

/* ============================ GRIMOIRE : FORGE DE SORT ============================ */
function GrimoireForge({ cost, pages, onCreate }: { cost: number; pages: number; onCreate: (name: string, type: SkillType, kind: SkillKind, theme: ThemeId) => void }) {
  /* Forge en 4 étapes (choix de Maximilien) : archétype (mécanique) x nature (physique/magique)
     x élément (habillage) x nom libre. TOUT est disponible, seule la puissance suit le niveau du sort. */
  const [step, setStep] = useState(0);
  const [kind, setKind] = useState<SkillKind | null>(null);
  const [type, setType] = useState<SkillType | null>(null);
  const [theme, setTheme] = useState<ThemeId | null>(null);
  const [name, setName] = useState("");
  const can = pages >= cost && kind !== null && type !== null && theme !== null && name.trim().length > 0;
  const tdef = theme ? themeDefOf(theme) : null;
  return (
    <div className="mt-4 rounded-xl border border-violet-400/30 bg-violet-500/10 p-4">
      <div className="flex items-center justify-between">
        <div className="text-xs font-bold uppercase tracking-widest text-violet-300/80">Forger un nouveau sort</div>
        <div className="flex gap-1">
          {["Archétype", "Nature", "Élément", "Nom"].map((s, i) => (
            <span key={s} className={"rounded px-1.5 py-0.5 text-[9px] font-bold " + (i === step ? "bg-violet-400/30 text-violet-100" : i < step ? "bg-emerald-400/15 text-emerald-300" : "bg-white/5 text-white/30")}>
              {i + 1}. {s}
            </span>
          ))}
        </div>
      </div>
      <p className="mt-1 text-[11px] text-white/50">
        Coût : <span className="font-bold text-violet-300">{cost} page{cost > 1 ? "s" : ""} de compétence</span> — vous en possédez {pages}.
      </p>

      {step === 0 && (
        <div className="mt-2 grid max-h-64 grid-cols-2 gap-1.5 overflow-y-auto pr-1">
          {SKILL_KINDS.map((k) => (
            <button
              key={k.id}
              onClick={() => { setKind(k.id); setStep(1); }}
              className={"rounded-lg border p-2 text-left transition " + (kind === k.id ? "border-violet-300 bg-violet-500/25" : "border-white/10 bg-white/5 hover:border-violet-400/40")}
            >
              <div className="text-xs font-bold text-white">{k.icon} {k.label}</div>
              <div className="mt-0.5 text-[9px] leading-snug text-white/50">{k.desc}</div>
            </button>
          ))}
        </div>
      )}

      {step === 1 && (
        <div className="mt-3 grid grid-cols-2 gap-2">
          {(["physique", "magique"] as SkillType[]).map((t) => (
            <button
              key={t}
              onClick={() => { setType(t); setStep(2); }}
              className={"rounded-lg border px-3 py-2 text-xs font-bold transition " + (type === t ? "border-violet-300 bg-violet-500/25 text-white" : "border-white/10 bg-white/5 text-white/60 hover:border-violet-400/40")}
            >
              {t === "physique" ? "👊 Physique (Force)" : "✨ Magique (Intelligence)"}
            </button>
          ))}
        </div>
      )}

      {step === 2 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {SKILL_THEMES.map((t) => (
            <button
              key={t.id}
              onClick={() => { setTheme(t.id); setStep(3); }}
              className={"rounded-md px-2.5 py-1 text-[11px] font-bold ring-1 transition " + (theme === t.id ? "bg-violet-400/25 text-violet-100 ring-violet-300/60" : "bg-white/5 text-white/60 ring-white/10 hover:bg-white/10")}
            >
              {t.icon} {t.label}
            </button>
          ))}
        </div>
      )}

      {step === 3 && (
        <div>
          <input
            value={name}
            onChange={(e) => setName(e.target.value.slice(0, 26))}
            placeholder="Nom du sort — libre"
            className="mt-3 w-full rounded-lg border border-violet-400/40 bg-black/50 px-4 py-2 font-bold text-violet-100 outline-none placeholder:text-white/30 focus:border-violet-300"
          />
          <div className="mt-2 rounded-lg bg-black/40 p-2 text-center text-[11px] text-white/60 ring-1 ring-white/10">
            {kind && <span className="font-bold text-violet-200">{kindDefOf(kind).icon} {kindDefOf(kind).label}</span>}
            <span className="mx-1 text-white/30">·</span>
            {type && <span>{type === "physique" ? "👊 Physique" : "✨ Magique"}</span>}
            <span className="mx-1 text-white/30">·</span>
            {tdef && <span>{tdef.icon} {tdef.label}</span>}
            {kind === "invocation" && tdef && <span className="text-violet-300"> · Créature : {tdef.summon}</span>}
          </div>
        </div>
      )}

      <div className="mt-3 flex items-center justify-between gap-2">
        {step > 0 ? (
          <button className="rounded-md bg-white/5 px-3 py-1.5 text-[11px] font-bold text-white/60 ring-1 ring-white/10 hover:bg-white/10" onClick={() => setStep(step - 1)}>
            ◂ Retour
          </button>
        ) : (
          <span className="text-[10px] italic text-white/30">12 archétypes × 2 natures × 8 éléments</span>
        )}
        <GlowButton
          className="!px-4 !py-2 !text-xs"
          disabled={!can}
          onClick={() => {
            onCreate(name.trim(), type!, kind!, theme!);
            setName("");
            setKind(null);
            setType(null);
            setTheme(null);
            setStep(0);
          }}
        >
          ✦ Forger « {name.trim() || "…"} » · {cost} 📖
        </GlowButton>
      </div>
    </div>
  );
}

/* ============================ SAUVEGARDE ============================ */
const SAVE_KEY = "le-joueur-save-v1";
type SaveData = {
  v: 1;
  savedAt: number;
  screen: "training" | "amv" | "dungeon";
  heroName: string;
  stats: Stats;
  skills: Skill[];
  activeSkill: number;
  pages: number;
  level: number;
  xp: number;
  points: number;
  potions: number;
  hp: number;
  counters: Record<CounterKey, number>;
  quest: Quest | null;
  questBoard: Quest[];
  boardId: number;
  dungeons: Dungeon[];
  dungeonSeq: number;
  refreshes?: number;
  questRefreshes?: number;
  questRefreshAt?: number;
  active: ActiveDungeon | null;
  amvUnlocked: boolean;
  febrileUntil: number;
  amvXp: number;
  relics: Relic[];
  relicSeq: number;
  pantheonStep?: number;
  storySeen?: string[];
  storyFlags?: Record<string, boolean>;
};
function readSave(): SaveData | null {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return null;
    const d = JSON.parse(raw);
    if (!d || d.v !== 1) return null;
    if (!Array.isArray(d.skills) || d.skills.length === 0) return null;
    if (d.screen !== "training" && d.screen !== "amv" && d.screen !== "dungeon") return null;
    return d as SaveData;
  } catch {
    return null;
  }
}
function writeSave(d: SaveData) {
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(d));
  } catch {
    /* quota localStorage dépassé : on ignore */
  }
}
function clearSave() {
  try {
    localStorage.removeItem(SAVE_KEY);
  } catch {
    /* ignore */
  }
}

/* ============================ APP ============================ */
export default function App() {
  const [saved] = useState<SaveData | null>(() => readSave());
  const [screen, setScreen] = useState<Screen>(() => {
    if (!saved) return "title";
    if (saved.screen === "dungeon" && !saved.active) return saved.amvUnlocked ? "amv" : "training";
    return saved.screen;
  });
  const [heroName, setHeroName] = useState(saved?.heroName ?? "Kai");
  const [stats, setStats] = useState<Stats>(saved?.stats ?? { force: 5, agilite: 5, intelligence: 5, vitalite: 5 });
  const [skills, setSkills] = useState<Skill[]>(saved?.skills ?? []);
  const [activeSkill, setActiveSkill] = useState(saved?.activeSkill ?? 0);
  const [pages, setPages] = useState(saved?.pages ?? 0);
  const [grimoireOpen, setGrimoireOpen] = useState(false);
  const [level, setLevel] = useState(saved?.level ?? 0);
  const [xp, setXp] = useState(saved?.xp ?? 0);
  const [points, setPoints] = useState(saved?.points ?? 0);
  const [allocOpen, setAllocOpen] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [potions, setPotions] = useState(saved?.potions ?? 2);
  const [hp, setHp] = useState(saved?.hp ?? 30);
  const [counters, setCounters] = useState<Record<CounterKey, number>>(
    saved?.counters ?? { kills: 0, uses: 0, rooms: 0, potions: 0, xpGained: 0, clears: 0 }
  );
  /* Image SYNCHRONE des compteurs (fix du 13/11/2026 : « Exterminer 6 monstres » restée
     bloquée à 1/6). Un même tick de jeu déclenche PLUSIEURS bumps — gainXp (xpGained),
     victoire de salle (kills + fam + rankF/E/D + elites…), clearDungeon (clears + 5 défis),
     depositRelics (deposits + relic×3) — et chaque bump repartait du STATE React, périmé
     dans le tick : les mises à jour s'écrasaient mutuellement, seule la dernière survivait.
     La ref compose TOUS les bumps du tick ; le state n'est que le miroir de rendu. */
  const countersRef = useRef<Record<CounterKey, number>>(counters);
  const [quest, setQuest] = useState<Quest | null>(saved?.quest ?? null);
  const [questBoard, setQuestBoard] = useState<Quest[]>(saved?.questBoard ?? []);
  const [boardId, setBoardId] = useState(saved?.boardId ?? 1);
  const [questRefreshes, setQuestRefreshes] = useState<number>(saved?.questRefreshes ?? QUEST_REFRESH_LIMIT);
  const [questRefreshAt, setQuestRefreshAt] = useState<number>(saved?.questRefreshAt ?? 0);
  const [dungeons, setDungeons] = useState<Dungeon[]>(saved?.dungeons ?? []);
  const [dungeonSeq, setDungeonSeq] = useState(saved?.dungeonSeq ?? 1);
  const [refreshes, setRefreshes] = useState(saved?.refreshes ?? RADAR_REFRESH_LIMIT);
  const [amvXp, setAmvXp] = useState(saved?.amvXp ?? 0);
  const [relics, setRelics] = useState<Relic[]>(saved?.relics ?? []);
  const [relicSeq, setRelicSeq] = useState(saved?.relicSeq ?? 1);
  const [pantheonStep, setPantheonStep] = useState(saved?.pantheonStep ?? 0);
  /* Jalons narratifs post-Éveil : beats vus + drapeaux d'événements (première visite
     du bureau de Léa, première rupture subie) — persistés, rejoués une seule fois. */
  const [storySeen, setStorySeen] = useState<string[]>(saved?.storySeen ?? []);
  const [storyFlags, setStoryFlags] = useState<Record<string, boolean>>(saved?.storyFlags ?? {});
  const [story, setStory] = useState<string | null>(null);
  const [active, setActive] = useState<ActiveDungeon | null>(saved?.active ?? null);
  const [amvUnlocked, setAmvUnlocked] = useState(saved?.amvUnlocked ?? false);
  const [inviteOpen, setInviteOpen] = useState(false);
  const [squadIntro, setSquadIntro] = useState<Companion[] | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<number | null>(null);
  const [now, setNow] = useState(() => Date.now());
  const [febrileUntil, setFebrileUntil] = useState(saved?.febrileUntil ?? 0);
  const [ruptureScene, setRuptureScene] = useState<{ name: string; monsters: MonsterDef[] } | null>(null);

  const febrileLeft = Math.max(0, febrileUntil - now);
  const febrileActive = febrileLeft > 0;
  const skill = skills[activeSkill] ?? null;
  const selectSkill = (i: number) => setActiveSkill(i);
  const setSkill: React.Dispatch<React.SetStateAction<Skill>> = (v) =>
    setSkills((list) =>
      list.map((s, i) => (i === activeSkill ? (typeof v === "function" ? (v as (prev: Skill) => Skill)(s) : (v as Skill)) : s))
    );
  const effStats: Stats = febrileActive
    ? {
        force: Math.floor(stats.force * 0.75),
        agilite: Math.floor(stats.agilite * 0.75),
        intelligence: Math.floor(stats.intelligence * 0.75),
        vitalite: Math.floor(stats.vitalite * 0.75),
      }
    : stats;
  const maxHp = effStats.vitalite * 6;
  const amvRank = amvRankForXp(amvXp);

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  /* Sauvegarde automatique : la progression est persistée à chaque changement d'état de jeu.
     Le timer de rupture est un timestamp absolu (deadline) : il continue de courir hors ligne. */
  useEffect(() => {
    if (screen !== "training" && screen !== "amv" && screen !== "dungeon") return;
    writeSave({
      v: 1,
      savedAt: Date.now(),
      screen,
      heroName,
      stats,
      skills,
      activeSkill,
      pages,
      level,
      xp,
      points,
      potions,
      hp,
      counters,
      quest,
      questBoard,
      boardId,
      dungeons,
      dungeonSeq,
      refreshes,
      questRefreshes,
      questRefreshAt,
      active,
      amvUnlocked,
      febrileUntil,
      amvXp,
      relics,
      relicSeq,
      pantheonStep,
      storySeen,
      storyFlags,
    });
  }, [screen, heroName, stats, skills, activeSkill, pages, level, xp, points, potions, hp, counters, quest, questBoard, boardId, dungeons, dungeonSeq, refreshes, questRefreshes, questRefreshAt, active, amvUnlocked, febrileUntil, amvXp, relics, relicSeq, pantheonStep, storySeen, storyFlags]);

  const [resetArm, setResetArm] = useState(false);

  const wipeProgress = (name: string, to: Screen) => {
    clearSave();
    setHeroName(name);
    setStats({ force: 5, agilite: 5, intelligence: 5, vitalite: 5 });
    setSkills([]);
    setActiveSkill(0);
    setPages(0);
    setLevel(0);
    setXp(0);
    setPoints(0);
    setPotions(2);
    setHp(30);
    const zeroCounters = { kills: 0, uses: 0, rooms: 0, potions: 0, xpGained: 0, clears: 0 };
    countersRef.current = zeroCounters;
    setCounters(zeroCounters);
    setQuest(null);
    setQuestBoard([]);
    setBoardId(1);
    setDungeons([]);
    setDungeonSeq(1);
    setRefreshes(RADAR_REFRESH_LIMIT);
    setQuestRefreshes(QUEST_REFRESH_LIMIT);
    setQuestRefreshAt(0);
    setActive(null);
    setAmvUnlocked(false);
    setFebrileUntil(0);
    setAmvXp(0);
    setRelics([]);
    setRelicSeq(1);
    setPantheonStep(0);
    setStorySeen([]);
    setStoryFlags({});
    setStory(null);
    setRuptureScene(null);
    setSquadIntro(null);
    setInviteOpen(false);
    setAllocOpen(false);
    setGrimoireOpen(false);
    setScreen(to);
  };

  const continueGame = () => {
    const s = readSave();
    if (!s) return;
    setHeroName(s.heroName);
    setStats(s.stats);
    /* Compatibilité : les sauvegardes antérieures aux archétypes reçoivent kind/theme par défaut. */
    setSkills(s.skills.map(normSkill));
    setActiveSkill(s.activeSkill);
    setPages(s.pages);
    setLevel(s.level);
    setXp(s.xp);
    setPoints(s.points);
    setPotions(s.potions);
    setHp(s.hp);
    countersRef.current = s.counters;
    setCounters(s.counters);
    setQuest(s.quest);
    setQuestBoard(s.questBoard);
    setBoardId(s.boardId);
    setDungeons(s.dungeons);
    setDungeonSeq(s.dungeonSeq);
    setRefreshes(s.refreshes ?? RADAR_REFRESH_LIMIT);
    setQuestRefreshes(s.questRefreshes ?? QUEST_REFRESH_LIMIT);
    setQuestRefreshAt(s.questRefreshAt ?? 0);
    setActive(s.active);
    setAmvUnlocked(s.amvUnlocked);
    setFebrileUntil(s.febrileUntil);
    setAmvXp(s.amvXp ?? 0);
    setRelics(s.relics ?? []);
    setRelicSeq(s.relicSeq ?? 1);
    setPantheonStep(s.pantheonStep ?? 0);
    setStorySeen(s.storySeen ?? []);
    setStoryFlags(s.storyFlags ?? {});
    setScreen(s.screen === "dungeon" && !s.active ? (s.amvUnlocked ? "amv" : "training") : s.screen);
  };

  const showToast = (s: string) => {
    setToast(s);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(null), 3800);
  };

  const gainXp = (amount: number) => {
    /* xpGained passe par la ref : un bump() dans le même tick (victoire de salle,
       piège, énigme…) doit composer avec ce gain, pas l'écraser d'un state périmé. */
    countersRef.current = { ...countersRef.current, xpGained: (countersRef.current.xpGained ?? 0) + amount };
    setCounters(countersRef.current);
    let rest = amount;
    let cur = level;
    let curXp = xp;
    let gained = 0;
    while (rest >= xpToNext(cur) - curXp) {
      rest -= xpToNext(cur) - curXp;
      cur += 1;
      curXp = 0;
      gained += 1;
    }
    setLevel(cur);
    setXp(curXp + rest);
    if (gained > 0) {
      setPoints((v) => v + 3 * gained);
      setAllocOpen(true);
      showToast(`⬆ NIVEAU ${cur} ATTEINT ! +${3 * gained} points de caractéristiques.`);
      if (!amvUnlocked && cur >= 1) {
        setAmvUnlocked(true);
        window.setTimeout(() => setInviteOpen(true), 1600);
      }
    }
  };

  const bump = (k: CounterKey, n = 1) => {
    const base = countersRef.current;
    const nc = { ...base, [k]: (base[k] ?? 0) + n };
    countersRef.current = nc;
    setCounters(nc);
    setQuest((q) => {
      if (!q || q.done || q.type !== k) return q;
      const prog = Math.max(0, Math.min(q.target, (nc[k] ?? 0) - q.start));
      return { ...q, progress: prog, done: prog >= q.target };
    });
  };

  /* Après 30 minutes de pause, le guichet de Mira réimprime : budget restauré à 3. */
  useEffect(() => {
    if (questRefreshes <= 0 && questRefreshAt > 0 && now >= questRefreshAt) {
      setQuestRefreshes(QUEST_REFRESH_LIMIT);
      setQuestRefreshAt(0);
      showToast("🗂 Le guichet de Mira a réimprimé ses affiches : 3 renouvellements disponibles.");
    }
  }, [now, questRefreshes, questRefreshAt]);

  useEffect(() => {
    if (quest && quest.done && !quest.notified) {
      setQuest((q) => (q ? { ...q, notified: true } : q));
      showToast(`📜 Quête accomplie : « ${quest.label} » — présentez-vous au guichet de Mira pour toucher +${quest.reward} EXP.`);
    }
  }, [quest]);

  /* Jalons narratifs : le premier beat NON vu dont la condition est remplie s'affiche
     (chaîne stricte : un beat ne tombe jamais tant que le précédent n'a pas été vu — pas
     de spoil hors-séquence). Les beats Panthéon peuvent tomber en donjon juste après la
     chute d'un dieu ; les autres attendent un écran calme (AMV / entraînement), jamais
     pendant la scène de rupture. */
  const markStorySeen = (id: string) => {
    setStorySeen((s) => (s.includes(id) ? s : [...s, id]));
    setStory(null);
  };
  useEffect(() => {
    if (story || !skill || ruptureScene) return;
    if (screen === "title" || screen === "vn" || screen === "system" || screen === "create") return;
    const seen = (id: string) => storySeen.includes(id);
    const rk = RANK_INDEX[amvRank.label] ?? -1;
    const inDungeonOk = b =>
      (screen === "amv" || screen === "training" ||
       (screen === "dungeon" && (b === "dieux" || b === "systeme" || b === "zeus")));
    for (let i = 0; i < STORY_BEATS.length; i++) {
      const b = STORY_BEATS[i].id;
      if (seen(b)) continue;
      if (i > 0 && !seen(STORY_BEATS[i - 1].id)) return;
      if (!inDungeonOk(b)) return;
      const due =
        (b === "lea" && !!storyFlags.leaOpened) ||
        (b === "sceau" && amvRank.label !== "SANS-RANG") ||
        (b === "ruptures" && !!storyFlags.ruptured) ||
        (b === "pages" && (counters.minibosses ?? 0) >= 5) ||
        (b === "dieux" && pantheonStep >= 1) ||
        (b === "carnet" && rk >= (RANK_INDEX["D"] ?? 99)) ||
        (b === "sernans" && rk >= (RANK_INDEX["B"] ?? 99)) ||
        (b === "systeme" && pantheonStep >= 7) ||
        (b === "veilleuse" && rk >= (RANK_INDEX["S"] ?? 99)) ||
        (b === "zeus" && pantheonStep >= 10) ||
        (b === "elu" && level >= 326) ||
        (b === "primordiale" && screen === "amv" && seen("elu"));
      if (due) setStory(b);
      return;
    }
  }, [story, screen, level, amvRank, pantheonStep, counters, storySeen, storyFlags, skill, ruptureScene]);

  const claimQuest = () => {
    if (!quest || !quest.done) return;
    gainXp(quest.reward);
    setQuest(null);
    showToast(`📜 Quête rendue à Mira : +${quest.reward} EXP. De nouvelles offres vous attendent.`);
  };

  /* Echec d'un donjon en rupture : la Porte se brise */
  const failDungeon = () => {
    if (!active || active.bossDefeated) return;
    setStoryFlags((f) => ({ ...f, ruptured: true }));
    const defs: MonsterDef[] = [];
    const seen = new Set<string>();
    for (const r of active.rooms) {
      const d = (r as { def?: MonsterDef }).def;
      if (d && !seen.has(d.name)) {
        seen.add(d.name);
        defs.push(d);
      }
    }
    const snap = active.snapshot;
    setLevel(snap.level);
    setXp(snap.xp);
    setPoints(snap.points);
    setStats(snap.stats);
    setSkills(snap.skills.map((s) => ({ ...s })));
    setActiveSkill(snap.activeSkill);
    setPages(snap.pages);
    setAllocOpen(false);
    setFebrileUntil(Date.now() + 30 * 60 * 1000);
    setHp((h) => Math.min(h, Math.floor(snap.stats.vitalite * 0.75) * 6));
    setDungeons((list) => list.map((d) => (d.id === active.id ? { ...d, closed: true, ruptured: true } : d)));
    /* Malus de rupture (choix de Maximilien) : perte de renommée = valeur d'une relique du rang du donjon x2,
       avec rétrogradation possible du rang AMV. */
    const renownPenalty = (RELIC_XP[active.rank] ?? 0) * 2;
    const beforeRank = amvRankForXp(amvXp).label;
    const afterRank = amvRankForXp(Math.max(0, amvXp - renownPenalty)).label;
    setAmvXp((x) => Math.max(0, x - renownPenalty));
    setActive(null);
    setRuptureScene({ name: active.name, monsters: defs });
    showToast(`💥 La Porte s'est brisée ! L'AMV consigne l'échec : −${renownPenalty} renommée${afterRank !== beforeRank ? ` — vous êtes rétrogradé au rang ${afterRank}` : ""}.`);
    setScreen("amv");
  };

  useEffect(() => {
    if (!active || active.bossDefeated) return;
    const goRupture = () => {
      const squad = genSquad(active.rooms.length);
      setActive((a) => (a && !a.rupture && !a.bossDefeated ? { ...a, rupture: true, squad } : a));
      setSquadIntro(squad);
      showToast(`⚠ SEUIL CRITIQUE — il reste moins de ${fmtClock(RESCUE_WINDOW)} : la Porte vire au ROUGE. Récompense doublée… si vous survivez. L'AMV envoie une escouade de secours !`);
    };
    const tick = () => {
      if (Date.now() >= active.deadline) {
        failDungeon();
        return;
      }
      if (!active.rupture && active.deadline - Date.now() <= RESCUE_WINDOW) goRupture();
    };
    tick();
    const iv = setInterval(tick, 1000);
    return () => clearInterval(iv);
  }, [active]);

  const genDungeonList = () => {
    const count = rnd(3, 8);
    const band = usefulBand(amvRank.label);
    const list: Dungeon[] = [];
    const usedZones = new Set<string>();
    for (let i = 0; i < count; i++) {
      let zone = pick(ZONES);
      let guard = 0;
      while (usedZones.has(zone) && guard < 20) {
        zone = pick(ZONES);
        guard++;
      }
      usedZones.add(zone);
      /* 1re Porte : garantie dans la bande utile ; les autres suivent la répartition glissante. */
      const rank = i === 0 ? pick(band) : randomRank(amvRank.label);
      /* Les donjons de rangs F et C tirent dans les 10 nouvelles familles (FAMILIES_F),
         les autres bandes de rangs dans FAMILIES. */
      const idxR = RANK_INDEX[rank] ?? 0;
      const fam = pick(
        idxR === RANK_INDEX.F || idxR === RANK_INDEX.C ? FAMILIES_F :
        idxR === RANK_INDEX.E || idxR === RANK_INDEX.B ? FAMILIES_E :
        idxR === RANK_INDEX.A ? FAMILIES_A :
        idxR === RANK_INDEX.S ? FAMILIES_S :
        idxR === RANK_INDEX.SS ? FAMILIES_SS :
        idxR === RANK_INDEX.SSS ? FAMILIES_SSS :
        idxR === RANK_INDEX["S+"] ? [FAMILIES_SP[pantheonStep % FAMILIES_SP.length]] :
        FAMILIES
      );
      list.push({
        id: dungeonSeq + i,
        name: (RANK_INDEX[rank] ?? 0) >= RANK_INDEX.D ? fam.dName : fam.gName,
        zone,
        rank,
        family: fam.id,
        rooms: rnd(10, 100),
        closed: false,
      });
    }
    setDungeonSeq((s) => s + count);
    setDungeons(list);
  };

  /* Fix du 13/11/2026 : marque une mission acceptée — elle quitte l'affiche de
     Mira et n'y revient plus (ni après abandon, ni après avoir été rendue). */
  const takeQuest = (q: Quest) => {
    setQuestBoard((b) => b.map((x) => (x.id === q.id ? { ...x, taken: true } : x)));
  };

  const refreshBoard = () => {
    if (questRefreshes <= 0) return;
    setBoardId((b) => b + 1);
    setQuestBoard(genQuestBoard(counters, boardId + 1, level));
    setQuestRefreshes((r) => r - 1);
    if (questRefreshes - 1 <= 0) {
      setQuestRefreshAt(Date.now() + QUEST_REFRESH_COOLDOWN);
      showToast(`🗂 Dernière réimpression — le guichet de Mira ne renouvellera plus l'affiche avant ${fmtClock(QUEST_REFRESH_COOLDOWN)}.`);
    }
  };

  /* Radar de Yuna à rafraîchissement LIMITÉ (choix de Maximilien, 13/11/2026) : budget de
     RADAR_REFRESH_LIMIT balayages par page, restauré quand toutes les Portes affichées ont
     été refermées. Les régénérations automatiques (promotion AMV, reprise de partie) ne
     consomment PAS le budget. */
  const refreshDungeons = () => {
    if (dungeons.length === 0) {
      genDungeonList();
      return;
    }
    if (dungeons.every((d) => d.closed)) {
      genDungeonList();
      setRefreshes(RADAR_REFRESH_LIMIT);
      showToast("📡 Toutes les Portes de la page sont refermées : les radars se réalignent — budget de rafraîchissement restauré.");
      return;
    }
    if (refreshes <= 0) {
      showToast("📡 Capteurs saturés : refermez toutes les Portes de la page pour relancer le radar.");
      return;
    }
    setRefreshes((r) => r - 1);
    genDungeonList();
    showToast(
      refreshes - 1 > 0
        ? `📡 Le radar balaie à nouveau — ${refreshes - 1} rafraîchissement${refreshes - 1 > 1 ? "s" : ""} restant${refreshes - 1 > 1 ? "s" : ""}.`
        : "📡 Dernier balayage — les capteurs devront ensuite se recalibrer (refermez toutes les Portes de la page)."
    );
  };

  const enterAmv = () => {
    if (dungeons.length === 0) genDungeonList();
    if (questBoard.length === 0) setQuestBoard(genQuestBoard(counters, boardId, level));
    setScreen("amv");
  };

  const enterDungeon = (d: Dungeon) => {
    if (active && active.id === d.id) {
      setScreen("dungeon");
      return;
    }
    const rooms = genRooms(d.rank, d.rooms, d.family);
    const timeLimit = roomTime(rooms.length);
    setActive({
      id: d.id,
      name: d.name,
      rank: d.rank,
      family: d.family,
      rooms,
      idx: 0,
      bossDefeated: false,
      rupture: false,
      deadline: Date.now() + timeLimit,
      timeLimit,
      squad: [],
      snapshot: { level, xp, points, stats, skills: skills.map((s) => ({ ...s })), activeSkill, pages },
    });
    bump("rooms");
    showToast(`⏱ Porte ouverte : rupture dans ${fmtClock(timeLimit)}. Chaque mort accélère l'horloge — sous ${fmtClock(RESCUE_WINDOW)}, la Porte vire au rouge et l'AMV envoie une escouade.${rankXpAllowed(d.rank, amvRank.label) ? "" : " ⚠ Donjon sous votre rang : aucune EXP à y gagner (pages et butin conservés)."}`);
    setScreen("dungeon");
  };

  const clearDungeon = () => {
    if (active) {
      const n = active.rooms.length;
      const exp = dungeonReward(n, active.rupture, active.rank);
      const gels = clearGelReward(n);
      const xpOk = rankXpAllowed(active.rank, amvRank.label);
      const relic: Relic = {
        id: relicSeq,
        name: `Noyau de ${active.name}`,
        rank: active.rank,
        from: active.name,
        xp: RELIC_XP[active.rank] * (active.rupture ? 2 : 1),
      };
      setDungeons((list) => list.map((d) => (d.id === active.id ? { ...d, closed: true } : d)));
      setPotions((x) => x + gels);
      if (xpOk) gainXp(exp);
      setRelics((l) => [...l, relic]);
      setRelicSeq((s) => s + 1);
      bump("clears");
      /* Panthéon grec : la Porte S+ refermée fait avancer la séquence des dieux (boucle modulo 10). */
      if (active.rank === "S+") setPantheonStep((s) => s + 1);
      /* Défis de Porte (catégorie B) : la fermeture seule départage les contraintes.
         speedClears = refermé avant la moitié du chrono initial ; guardians = rupture
         refermée sans aucun PNJ passé à terre (soigneurs ou pas, une chute compte). */
      if ((active.deaths ?? 0) === 0) bump("flawless");
      if ((active.potionsUsed ?? 0) === 0) bump("sober");
      if (Date.now() <= active.deadline - active.timeLimit / 2) bump("speedClears");
      if (active.rupture) {
        bump("ruptureClears");
        if (!(active.squadDown ?? false)) bump("guardians");
      }
      showToast(
        (xpOk
          ? `🏛 Donjon refermé (${n} salles) ! Récompense de l'AMV : +${exp} EXP${active.rupture ? " (doublée — Porte instable)" : ""}, +${gels} gelées de soin.`
          : `🏛 Donjon refermé (${n} salles) ! Aucune EXP — donjon sous votre rang. +${gels} gelées de soin.`) +
          ` Vous extrayez le noyau du boss : 📖 relique à consigner auprès de Léa.`
      );
    }
    setActive(null);
    setScreen("amv");
  };

  /* Depôt des reliques au Bureau des reliques : renommée AMV + éventuelle promotion de rang */
  const depositRelics = () => {
    if (relics.length === 0) return;
    const gain = relics.reduce((a, r) => a + r.xp, 0);
    const before = amvRankForXp(amvXp).label;
    const after = amvRankForXp(amvXp + gain).label;
    setAmvXp((x) => x + gain);
    setRelics([]);
    /* Compteurs de quête : consignations au Bureau des reliques + échantillons
       de Léa (le rang du noyau doit atteindre le plancher imposé par la mission). */
    bump("deposits", relics.length);
    relics.forEach((r) => {
      const ri = RANK_INDEX[r.rank] ?? 0;
      if (ri >= RANK_INDEX.D) bump("relicD");
      if (ri >= RANK_INDEX.C) bump("relicC");
      if (ri >= RANK_INDEX.B) bump("relicB");
    });
    if (after !== before) {
      genDungeonList();
      showToast(`🎖 L'AMV vous promeut au rang ${after} ! ${amvRankForXp(amvXp + gain).hint} Les radars se réalignent : de nouvelles Portes s'ouvrent à l'accueil de Yuna.`);
    } else {
      showToast(`📖 Léa consigne vos reliques : +${gain} renommée AMV. « Refermez encore quelques Portes, et l'Agence y regardera de plus près. »`);
    }
  };

  const evac = (msg: string) => {
    setHp(Math.ceil(maxHp / 2));
    let full = msg + " PV restaurés à moitié.";
    if (screen === "dungeon" && active && !active.bossDefeated) {
      const pen = rnd(DEATH_PENALTY[0], DEATH_PENALTY[1]);
      setActive((a) => (a && !a.bossDefeated ? { ...a, deadline: a.deadline - pen * 1000, deaths: (a.deaths ?? 0) + 1 } : a));
      full += ` ⏱ La Porte gagne ${pen} secondes sur vous.`;
    }
    showToast(full);
    setScreen(amvUnlocked ? "amv" : "training");
  };

  const createSkill = (name: string, type: SkillType, kind: SkillKind, theme: ThemeId) => {
    setSkills([{ name, type, kind, theme, level: 0, uses: 0, usesToNext: 5, minDmg: 2, maxDmg: 4 }]);
    setActiveSkill(0);
    setScreen("training");
  };

  const gainPages = (n: number) => setPages((p) => p + n);

  const createSpell = (name: string, type: SkillType, kind: SkillKind, theme: ThemeId) => {
    const cost = pagesCost(skills.length);
    if (pages < cost) return;
    setPages((p) => p - cost);
    setSkills((l) => [...l, { name, type, kind, theme, level: 0, uses: 0, usesToNext: 5, minDmg: 2, maxDmg: 4 }]);
    setGrimoireOpen(false);
    showToast(`✦ Le Grimoire s'illumine : « ${name} » est né ! (${kindDefOf(kind).icon} ${kindDefOf(kind).label} · ${themeDefOf(theme).label} · Nv. 0)`);
  };

  return (
    <div className="min-h-screen bg-[#04060f] font-sans text-white">
      {screen === "title" && (
        <TitleScreen
          onStart={(n) => wipeProgress(n, "vn")}
          onContinue={continueGame}
          saveInfo={saved && readSave() ? { name: saved.heroName, level: saved.level, at: saved.savedAt } : null}
        />
      )}
      {screen === "vn" && <VN heroName={heroName} onDone={() => setScreen("system")} onSkip={() => setScreen("system")} />}
      {screen === "system" && <SystemBoot heroName={heroName} onDone={() => setScreen("create")} />}
      {screen === "create" && <CreateSkill onCreate={createSkill} />}

      {screen === "training" && skill && (
        <TrainingScreen
          heroName={heroName}
          level={level}
          xp={xp}
          hp={hp}
          setHp={setHp}
          maxHp={maxHp}
          stats={effStats}
          skill={skill}
          setSkill={setSkill}
          potions={potions}
          setPotions={setPotions}
          gainXp={gainXp}
          bump={bump}
          showToast={showToast}
          onEvac={evac}
          onGoAmv={enterAmv}
          amvUnlocked={amvUnlocked}
          onSheet={() => setSheetOpen(true)}
          febrileLeft={febrileLeft}
          skills={skills}
          activeSkillIdx={activeSkill}
          onSelectSkill={selectSkill}
          pages={pages}
          onGrimoire={() => setGrimoireOpen(true)}
          amvRank={amvRank.label}
        />
      )}

      {screen === "amv" && (
        <AMVHub
          heroName={heroName}
          level={level}
          xp={xp}
          hp={hp}
          maxHp={maxHp}
          stats={effStats}
          skill={skill}
          potions={potions}
          febrileLeft={febrileLeft}
          now={now}
          activeTimer={active && !active.bossDefeated ? { id: active.id, name: active.name, deadline: active.deadline } : null}
          pages={pages}
          onGrimoire={() => setGrimoireOpen(true)}
          quest={quest}
          setQuest={setQuest}
          questBoard={questBoard}
          refreshBoard={refreshBoard}
          questRefreshes={questRefreshes}
          questRefreshAt={questRefreshAt}
          takeQuest={takeQuest}
          dungeons={dungeons}
          refreshDungeons={refreshDungeons}
          refreshes={refreshes}
          activeId={active ? active.id : null}
          onEnterDungeon={enterDungeon}
          onClaimQuest={claimQuest}
          onExit={() => setScreen("training")}
          onSheet={() => setSheetOpen(true)}
          amvRank={amvRank.label}
          amvXp={amvXp}
          relics={relics}
          onDepositRelics={depositRelics}
          onOpenLea={() => setStoryFlags((f) => (f.leaOpened ? f : { ...f, leaOpened: true }))}
        />
      )}

      {screen === "dungeon" && active && skill && (
        <DungeonScreen
          active={active}
          setActive={setActive}
          heroName={heroName}
          level={level}
          xp={xp}
          hp={hp}
          setHp={setHp}
          maxHp={maxHp}
          stats={effStats}
          skill={skill}
          setSkill={setSkill}
          potions={potions}
          setPotions={setPotions}
          gainXp={gainXp}
          bump={bump}
          showToast={showToast}
          onExit={() => setScreen("amv")}
          onClear={clearDungeon}
          onEvac={evac}
          onSheet={() => setSheetOpen(true)}
          now={now}
          febrileLeft={febrileLeft}
          skills={skills}
          activeSkillIdx={activeSkill}
          onSelectSkill={selectSkill}
          pages={pages}
          onGrimoire={() => setGrimoireOpen(true)}
          gainPages={gainPages}
          amvRank={amvRank.label}
        />
      )}

      {/* Jalon narratif : overlay par-dessus l'écran courant (jamais pendant le prologue). */}
      {story && (
        <StoryBeatScreen beatId={story} heroName={heroName} onDone={() => markStorySeen(story)} />
      )}

      <AnimatePresence>
        {allocOpen && (
          <Allocation
            stats={stats}
            setStats={setStats}
            points={points}
            setPoints={setPoints}
            setHp={setHp}
            onClose={() => setAllocOpen(false)}
          />
        )}
        {sheetOpen && (
          <Modal title="Fiche du Joueur" onClose={() => { setResetArm(false); setSheetOpen(false); }}>
            <StatSheet name={heroName} level={level} xp={xp} stats={effStats} skill={skill} febrileLeft={febrileLeft} skillCount={skills.length} amvXp={amvXp} />
            <div className="mt-4 flex items-center justify-between gap-3 border-t border-white/10 pt-3">
              <span className="text-[10px] text-white/40">💾 Progression sauvegardée automatiquement (locale).</span>
              {resetArm ? (
                <button
                  onClick={() => {
                    setResetArm(false);
                    setSheetOpen(false);
                    wipeProgress("Kai", "title");
                  }}
                  className="rounded-md border border-rose-400/60 bg-rose-500/20 px-3 py-1.5 text-[11px] font-bold text-rose-200 hover:bg-rose-500/30"
                >
                  Confirmer la suppression ?
                </button>
              ) : (
                <button onClick={() => setResetArm(true)} className="text-[11px] text-rose-300/60 underline hover:text-rose-200">
                  Réinitialiser la progression
                </button>
              )}
            </div>
          </Modal>
        )}
        {squadIntro && (
          <Modal title="🏛 Escouade de secours — AMV" onClose={() => setSquadIntro(null)}>
            <p className="mb-3 text-sm leading-relaxed text-white/70">
              « Un Veilleur de rang G n'entre pas seul dans une Porte instable. L'AMV vous assigne une escouade de secours — ils combattent à vos côtés jusqu'à la fermeture, et la récompense est <span className="font-bold text-cyan-300">doublée</span>. Mais l'échec reste l'échec. »
            </p>
            <div className="space-y-2">
              {squadIntro.map((c, i) => (
                <div key={i} className="flex items-center justify-between rounded-lg bg-white/5 p-3 ring-1 ring-white/10">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{c.emoji}</span>
                    <div>
                      <div className="text-sm font-bold text-white">{c.name}</div>
                      <div className="text-[10px] text-white/50">Veilleur · rang {c.rank} · {c.maxHp} PV · atq {c.minAtk}–{c.maxAtk}</div>
                    </div>
                  </div>
                  <RankBadge rank={c.rank} />
                </div>
              ))}
            </div>
            <p className="mt-3 text-[11px] italic text-white/40">Ils frappent à chacun de vos tours et encaissent une partie des ripostes. Un Veilleur à terre se relève à mi-PV à la salle suivante.</p>
            <div className="mt-4 flex justify-center">
              <GlowButton onClick={() => setSquadIntro(null)}>En formation ▸</GlowButton>
            </div>
          </Modal>
        )}
        {inviteOpen && (
          <Modal title="L'Agence Mondiale des Veilleurs" onClose={() => setInviteOpen(false)}>
            <div className="text-center">
              <div className="text-3xl">🏛</div>
              <p className="mt-3 text-sm leading-relaxed text-white/80">
                Le Joueur : « Votre éveil a été détecté par les capteurs de l'AMV. Présentez-vous à l'agence la plus proche pour être enregistré comme Veilleur, accéder aux quêtes officielles… et aux Portes ouvertes. »
              </p>
              <div className="mt-5 flex justify-center gap-3">
                <GlowButton onClick={() => { setInviteOpen(false); enterAmv(); }}>Se rendre à l'AMV ▸</GlowButton>
                <GlowButton variant="ghost" onClick={() => setInviteOpen(false)}>Plus tard</GlowButton>
              </div>
            </div>
          </Modal>
        )}
        {grimoireOpen && (
          <Modal title="📖 Grimoire du Joueur" onClose={() => setGrimoireOpen(false)}>
            <p className="mb-3 text-sm leading-relaxed text-white/60">
              « Les Pages de compétence, arrachées aux Livres Enchantés des donjons, alimentent votre Grimoire. Forgez-y de nouveaux sorts — chacun naît faible et grandit par l'usage. »
            </p>
            <div className="mb-3 flex items-center justify-between rounded-lg bg-white/5 p-3 ring-1 ring-white/10">
              <span className="text-sm text-white/70">Pages de compétence</span>
              <span className="text-lg font-black text-violet-300">📖 × {pages}</span>
            </div>
            <div className="space-y-2">
              {skills.map((s, i) => (
                <div key={i} className={"flex items-center justify-between rounded-lg p-3 ring-1 " + (i === activeSkill ? "bg-cyan-400/10 ring-cyan-300/40" : "bg-white/5 ring-white/10")}>
                  <div>
                    <div className="text-sm font-bold text-white">
                      {s.name} <span className="text-xs font-normal text-white/50">({themeDefOf(s.theme).icon} {kindDefOf(s.kind).label} · {s.type === "physique" ? "Physique" : "Magique"})</span>
                    </div>
                    <div className="text-[10px] text-white/40">Nv. {s.level} · {skillGrade(s.level)} · {kindEffectText(s, effStats)} · {s.uses}/{s.usesToNext} usages → Nv. {s.level + 1}</div>
                  </div>
                  {i === activeSkill ? (
                    <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-300">Actif</span>
                  ) : (
                    <button className="rounded-md bg-white/5 px-3 py-1 text-[11px] font-bold text-white/70 ring-1 ring-white/10 hover:bg-white/10" onClick={() => setActiveSkill(i)}>
                      Activer
                    </button>
                  )}
                </div>
              ))}
            </div>
            <GrimoireForge cost={pagesCost(skills.length)} pages={pages} onCreate={createSpell} />
          </Modal>
        )}
      </AnimatePresence>

      {/* ===== SCENE DE RUPTURE ===== */}
      <AnimatePresence>
        {ruptureScene && (
          <motion.div
            className="fixed inset-0 z-[70] overflow-y-auto bg-black/95 p-4 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="mx-auto mt-6 max-w-2xl">
              <motion.div
                className="overflow-hidden rounded-2xl border border-red-400/60 shadow-[0_0_70px_-10px_rgba(239,68,68,0.9)]"
                initial={{ scale: 0.92, y: 20 }}
                animate={{ scale: 1, y: 0 }}
              >
                <div className="relative">
                  <motion.img
                    src={PANELS.d7}
                    alt="Rupture de la Porte"
                    className="h-56 w-full object-cover object-top md:h-64"
                    animate={{ x: [0, -4, 4, -3, 3, 0] }}
                    transition={{ repeat: Infinity, duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-red-900/25 to-transparent" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.25, type: "spring", bounce: 0.5 }}
                      className="text-4xl font-black tracking-widest text-red-400 drop-shadow-[0_0_25px_rgba(239,68,68,0.9)] md:text-5xl"
                    >
                      ⚠ RUPTURE ⚠
                    </motion.div>
                    <p className="mt-2 px-6 text-center text-sm text-white/80">
                      La {ruptureScene.name} s'est brisée avant que vous ne brisiez son noyau. Ses monstres se déversent dans la zone…
                    </p>
                  </div>
                </div>
                <div className="bg-[#160b12] p-5">
                  <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-red-300/80">Hordes déversées par la Porte</div>
                  <div className="mt-2 grid grid-cols-3 gap-2 sm:grid-cols-4">
                    {ruptureScene.monsters.map((m) => (
                      <div key={m.name} className="relative overflow-hidden rounded-lg border border-red-400/30">
                        {m.img ? (
                          <img
                            src={PANELS[m.img]}
                            alt={m.name}
                            className="h-20 w-full object-cover object-top"
                            style={m.filter ? { filter: m.filter } : undefined}
                          />
                        ) : (
                          <div className="flex h-20 w-full items-center justify-center bg-gradient-to-br from-[#1a1038] via-[#0b1026] to-[#06202b]">
                            <span className="text-3xl" style={m.filter ? { filter: m.filter } : undefined}>{m.emoji ?? "👤"}</span>
                          </div>
                        )}
                        {m.crown && <span className="absolute left-1/2 top-1 -translate-x-1/2 text-lg drop-shadow-[0_0_8px_rgba(251,191,36,0.9)]">👑</span>}
                        {m.emoji && <span className="absolute left-1/2 top-1 -translate-x-1/2 text-lg drop-shadow-[0_0_8px_rgba(167,139,250,0.95)]">{m.emoji}</span>}
                        <div className="absolute inset-x-0 bottom-0 bg-black/70 px-1 py-0.5 text-center text-[9px] font-bold text-white">{m.name}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 space-y-1.5 rounded-xl border border-red-400/30 bg-red-500/10 p-3 text-[12px]">
                    <div className="font-bold text-red-300">Sanctions de l'échec :</div>
                    <p className="text-white/75">💀 EXP du personnage gagnée dans ce donjon : perdue</p>
                    <p className="text-white/75">💀 Progression de compétence gagnée dans ce donjon : perdue</p>
                    <p className="text-white/75">🤒 État fébrile : -25 % dans toutes les caractéristiques pendant 30 minutes</p>
                  </div>
                  <p className="mt-3 text-[11px] italic text-white/50">
                    Les Veilleurs de l'AMV arrivent en renfort pour contenir la rupture. Vous, tenez-vous à l'écart… et récupérez.
                  </p>
                  <div className="mt-4 flex justify-center">
                    <GlowButton onClick={() => setRuptureScene(null)}>↩ Revenir à l'AMV</GlowButton>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {toast && (
          <motion.div
            className="fixed left-1/2 top-4 z-[60] -translate-x-1/2 rounded-xl border border-cyan-300/40 bg-[#0b1026]/95 px-5 py-3 text-sm font-bold text-cyan-200 shadow-[0_0_40px_-10px_rgba(34,211,238,0.9)] backdrop-blur"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ============================ MONTAGE (version hébergée) ============================ */
ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
