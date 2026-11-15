# 🜛 Le Joueur — L'Éveil

Jeu web jouable dans le navigateur (RPG/visual novel façon Solo Leveling), adapté du light novel de Maximilien Dravert.

**Jouer : https://maxdravert-source.github.io/le-joueur/**

## Contenu
- Prologue illustré (An 0, la Rupture du 04/04/04, l'éveil de {NAME}… du moins, le vôtre)
- Système « Le Joueur » : fiche de stats, sorts forgés par le joueur (12 archétypes × 8 thèmes)
- Hub AMV : quêtes (22 types), donjons rangs G → S+, escouades de secours, chrono de rupture
- 80 familles de monstres, Panthéon grec complet (Méduse → Zeus) en fin de mode histoire
- 12 jalons narratifs post-Éveil : le Système, Léa la Veilleuse, les Élus, et la Porte Primordiale de Sernans
- Sauvegarde automatique locale (localStorage)

## Technique
Application React autonome (React 18 + framer-motion en UMD, Tailwind CDN, Babel standalone compile le TSX dans le navigateur). Les 108 planches AVIF sont servies en fichiers séparés, pleine qualité.

Les sources de référence (template TSX, scripts de build) sont maintenues séparément.
