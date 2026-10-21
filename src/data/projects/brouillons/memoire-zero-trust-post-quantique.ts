import { todo, type Project } from '../../types'

const project: Project = {
  slug: 'memoire-zero-trust-post-quantique',
  code: 'PRJ-06',
  title: { fr: 'Mémoire de Master : architecture Zero Trust post-quantique' },
  summary: {
    fr: 'Conception d’une architecture Zero Trust résistante aux attaques quantiques, fondée sur la cryptographie à codes correcteurs d’erreurs.',
  },
  categories: ['securite'],
  status: 'ongoing',
  context: {
    fr: 'Mémoire de fin d’études du Master Réseaux et Télécoms, Université Iba Der Thiam de Thiès (en cours).',
  },
  objective: {
    fr: 'Proposer une architecture Zero Trust dont les mécanismes cryptographiques restent sûrs face aux ordinateurs quantiques, en s’appuyant sur la cryptographie à codes correcteurs d’erreurs.',
  },
  technologies: ['Zero Trust', 'Cryptographie post-quantique', 'Codes correcteurs d’erreurs'],
  achievements: [
    {
      fr: todo(
        'avancement : état de l’art, schéma retenu, prototype ou simulation, échéance de soutenance',
      ),
    },
  ],
  learnings: [{ fr: todo('2 ou 3 apprentissages clés à ce stade') }],
  topology: {
    title: {
      fr: 'Architecture Zero Trust de principe avec une couche cryptographique post-quantique',
    },
    caption: {
      fr: 'Schéma de principe d’une architecture Zero Trust générique. À compléter : place exacte de la cryptographie à codes correcteurs dans ton architecture.',
    },
    nodes: [
      { id: 'subject', label: 'Utilisateur', sub: 'ou équipement', kind: 'users', x: 100, y: 205 },
      {
        id: 'pdp',
        label: 'Moteur de politique',
        sub: 'décision',
        kind: 'policy',
        x: 370,
        y: 70,
        w: 190,
      },
      {
        id: 'pep',
        label: 'Point d’application',
        sub: 'contrôle d’accès',
        kind: 'gateway',
        x: 370,
        y: 205,
        w: 190,
      },
      { id: 'res', label: 'Ressource', sub: 'protégée', kind: 'server', x: 660, y: 205 },
      {
        id: 'pqc',
        label: 'Crypto à codes',
        sub: 'post-quantique',
        kind: 'key',
        x: 515,
        y: 340,
        w: 180,
      },
    ],
    links: [
      { from: 'subject', to: 'pep', label: 'demande d’accès' },
      { from: 'pep', to: 'pdp', label: 'décision' },
      { from: 'pep', to: 'res', label: 'session' },
      { from: 'pqc', to: 'pep', dashed: true },
      { from: 'pqc', to: 'res', dashed: true },
    ],
  },
  screenshots: [],
  screenshotsHint: { fr: 'schéma d’architecture du mémoire, résultats de simulation ou de tests' },
  github: null,
}

export default project
