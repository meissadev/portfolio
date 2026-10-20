# Portfolio — Meissa Babou

Site statique de présentation : analyste SOC et ingénieur sécurité réseau.
Page d'accueil à navigation ancrée et une étude de cas par projet (`/projets/<slug>`).

**Stack** : Vite · React 19 · TypeScript · Tailwind CSS v4 · React Router · vite-react-ssg (pré-rendu) ·
Framer Motion · lucide-react · polices IBM Plex auto-hébergées.

Toutes les pages sont pré-rendues en HTML au build : Google et LinkedIn lisent le titre, la
description et l'image d'aperçu sans exécuter de JavaScript.

---

## Démarrer en local

Prérequis : Node.js 20 ou plus récent.

```bash
npm install
npm run dev        # serveur de développement : http://localhost:5173
npm run build      # build de production dans dist/
npm run preview    # sert dist/ sur http://localhost:4173
```

Autres commandes : `npm run lint`, `npm run typecheck`, `npm run format`, `npm run og` (régénère
seulement les images d'aperçu).

## Où est quoi

```
src/data/            ← TOUT le contenu du site (c'est ici que tu modifies le texte)
  profile.ts         nom, accroche, e-mail, LinkedIn, GitHub, CV, preuves de l'accueil
  award.ts           Cyber Competition Challenge 2026
  projects/          un fichier par projet + index.ts (ordre d'affichage)
  experience.ts      stage et engagement associatif
  education.ts       diplômes et certification
  skills.ts          compétences par domaine et projets qui les prouvent
  types.ts           structure attendue de chaque donnée
src/i18n/            libellés de l'interface (fr.ts, en.ts)
src/components/      composants (ne pas toucher pour modifier le contenu)
public/cv/           les deux CV en PDF
public/images/       captures d'écran des projets
scripts/             images Open Graph, sitemap, robots.txt
.env                 SITE_URL : l'adresse publique du site
```

Une information manquante s'écrit `todo('ce qui manque')` dans les données. Elle s'affiche sur le
site dans un encadré orange `[À COMPLÉTER : …]`. Il suffit de remplacer le `todo(...)` par le vrai
texte pour la faire disparaître.

## Ajouter un projet

1. **Copier** un fichier existant de `src/data/projects/`, par exemple
   `soc-open-source.ts` → `mon-projet.ts`.
2. **Remplir** les champs. L'éditeur signale toute erreur grâce aux types :

   ```ts
   const project: Project = {
     slug: 'mon-projet',                 // adresse : /projets/mon-projet
     code: 'PRJ-08',                     // numéro de fiche
     title: { fr: 'Titre du projet' },
     summary: { fr: 'Une ou deux phrases pour la carte.' },
     categories: ['reseau', 'securite'], // soc | reseau | securite | infrastructure
     status: 'done',                     // done | ongoing
     context: { fr: '…' },
     objective: { fr: '…' },
     technologies: ['Cisco IOS', 'OSPF'],
     achievements: [{ fr: '…' }],
     learnings: [{ fr: '…' }],
     topology: { … },                    // facultatif : voir ci-dessous
     screenshots: [],                    // voir « Ajouter des captures »
     screenshotsHint: { fr: 'ce que les captures montreront' },
     github: null,                       // ou 'https://github.com/…'
   }
   ```

3. **Déclarer** le projet dans `src/data/projects/index.ts` : l'importer et l'ajouter à la liste
   `projects`, à la position voulue.
4. Lancer `npm run dev` pour vérifier, puis publier (voir « Redéployer »).

La carte, le filtre, la page d'étude de cas, l'image d'aperçu LinkedIn et l'entrée du sitemap sont
générés automatiquement.

### Le schéma de topologie

Le schéma est décrit par des données. Le site le dessine en SVG avec les couleurs du thème :

```ts
topology: {
  title: { fr: 'Phrase lue par les lecteurs d’écran' },
  caption: { fr: 'Légende affichée sous le schéma' },
  zones: [{ label: 'Site A', x: 10, y: 40, w: 400, h: 120 }],      // facultatif
  nodes: [
    { id: 'r1', label: 'R1', sub: 'Cisco IOS', kind: 'router', x: 100, y: 100 },
    { id: 'fw', label: 'FortiGate', sub: 'NGFW', kind: 'firewall', x: 320, y: 100 },
  ],
  links: [{ from: 'r1', to: 'fw', label: 'OSPF', dashed: false }],
}
```

- `x` et `y` sont le **centre** du nœud. Un nœud mesure 170 × 58 par défaut (`w` pour l'élargir).
  Le cadre du schéma s'ajuste tout seul.
- `kind` choisit l'icône : `router`, `firewall`, `switch`, `server`, `cloud`, `host`, `users`,
  `container`, `storage`, `database`, `workflow`, `key`, `cpu`, `gateway`, `policy`, `search`.
- `bend` courbe un lien (ex. `bend: -150`) pour éviter de traverser un nœud.

### Ajouter des captures

Déposer les images dans `public/images/projets/<slug>/` (PNG ou WebP, 1600 px de large au plus),
puis :

```ts
screenshots: [
  {
    src: '/images/projets/soc-open-source/wazuh-dashboard.webp',
    alt: { fr: 'Tableau de bord Wazuh affichant les alertes des dernières 24 heures' },
    caption: { fr: 'Tableau de bord Wazuh' },
  },
],
```

Le texte `alt` décrit ce que montre l'image : il est lu par les lecteurs d'écran.

## Changer les CV, LinkedIn ou GitHub

- CV : remplacer les fichiers dans `public/cv/` en gardant les mêmes noms
  (`meissa-babou-cv-soc.pdf`, `meissa-babou-cv-securite-reseau.pdf`).
- LinkedIn / GitHub : renseigner `linkedin` et `github` dans `src/data/profile.ts`.

## Déployer sur Vercel

### Première mise en ligne

1. Créer un dépôt GitHub et y pousser le projet :
   ```bash
   git add -A
   git commit -m "Portfolio initial"
   git branch -M main
   git remote add origin https://github.com/<ton-compte>/portfolio.git
   git push -u origin main
   ```
2. Sur [vercel.com](https://vercel.com), choisir **Add New → Project**, puis importer le dépôt.
   `vercel.json` fournit déjà la commande de build (`npm run build`) et le dossier de sortie
   (`dist`) : il n'y a rien à régler.
3. Après le premier déploiement, noter l'URL (ex. `https://meissa-babou.vercel.app`) et la
   renseigner :
   - soit dans `.env` (`SITE_URL=…`), puis commit ;
   - soit dans Vercel → Settings → Environment Variables → `SITE_URL`.

   Puis redéployer. Les balises Open Graph et le sitemap utilisent cette adresse.

### Redéployer

Chaque `git push` sur `main` redéploie automatiquement le site :

```bash
git add -A
git commit -m "Ajout du projet X"
git push
```

Pour vérifier l'aperçu LinkedIn après une mise à jour, utiliser le
[Post Inspector de LinkedIn](https://www.linkedin.com/post-inspector/). Il force aussi LinkedIn à
rafraîchir son cache.

## Version anglaise (plus tard)

La structure est prête :

1. Traduire les libellés de `src/i18n/en.ts`.
2. Ajouter les champs `en` dans les données (`title: { fr: '…', en: '…' }`). Sans traduction, le
   texte français s'affiche.
3. Dans `src/routes.tsx`, dupliquer l'arbre de routes sous `/en` avec
   `<LocaleProvider locale="en">`, et ajouter un sélecteur de langue dans l'en-tête.

## Choix techniques

- **Pré-rendu (vite-react-ssg)** : HTML complet pour chaque page au build, donc SEO et aperçus
  LinkedIn fiables, et site rapide sans serveur.
- **Couleurs en variables CSS** (`src/styles/globals.css`) : bleu marine `#1D3A63` et bleu
  `#2F5D9A` du CV. Le thème sombre change seulement les valeurs, avec des bleus éclaircis pour
  garder un contraste AA.
- **Images Open Graph** : générées au build en PNG 1200×630 (satori + resvg), une par page.
- **Animations** : Framer Motion en `LazyMotion`, coupées si « réduire les animations » est activé
  sur l'appareil.
- **Accessibilité** : lien d'évitement, navigation au clavier, `aria-pressed` sur les filtres,
  description textuelle de chaque schéma.

Mesures Lighthouse (mobile, en local, serveur avec compression) : Performance 90–91,
Accessibilité 100, Bonnes pratiques 100, SEO 100.
