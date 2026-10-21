import { todo, type Project } from '../../types'

const project: Project = {
  slug: 'api-rest-aws',
  code: 'PRJ-07',
  title: { fr: 'Sécurisation d’une API REST sur AWS' },
  summary: {
    fr: 'API REST serverless sur AWS : authentification avec Amazon Cognito, exposition via API Gateway, traitement par AWS Lambda et contrôle des accès avec IAM.',
  },
  categories: ['securite', 'infrastructure'],
  status: 'done',
  context: { fr: todo('cadre du projet (formation AWS re/Start, projet personnel…), durée') },
  objective: {
    fr: 'Exposer une API REST serverless réservée aux utilisateurs authentifiés, avec des permissions maîtrisées.',
  },
  technologies: ['AWS Lambda', 'API Gateway', 'Amazon Cognito', 'IAM'],
  achievements: [
    { fr: 'Mise en place de fonctions AWS Lambda exposées via API Gateway.' },
    { fr: 'Authentification des utilisateurs avec Amazon Cognito.' },
    { fr: 'Gestion des permissions avec IAM.' },
    {
      fr: todo(
        'type d’autorisation utilisé, tests d’accès autorisé / refusé, langage des fonctions',
      ),
    },
  ],
  learnings: [{ fr: todo('2 ou 3 apprentissages clés') }],
  topology: {
    title: { fr: 'Architecture de principe : client, Cognito, API Gateway, Lambda et IAM' },
    caption: {
      fr: 'Schéma de principe de l’API. À compléter avec ton architecture réelle si elle diffère.',
    },
    nodes: [
      { id: 'client', label: 'Client', sub: 'application', kind: 'host', x: 100, y: 205, w: 150 },
      {
        id: 'cognito',
        label: 'Amazon Cognito',
        sub: 'authentification',
        kind: 'key',
        x: 360,
        y: 70,
        w: 190,
      },
      {
        id: 'apigw',
        label: 'API Gateway',
        sub: 'API REST',
        kind: 'gateway',
        x: 360,
        y: 205,
        w: 190,
      },
      { id: 'lambda', label: 'AWS Lambda', sub: 'traitement', kind: 'cpu', x: 640, y: 205, w: 170 },
      {
        id: 'iam',
        label: 'IAM',
        sub: 'rôles et politiques',
        kind: 'policy',
        x: 640,
        y: 340,
        w: 170,
      },
    ],
    links: [
      { from: 'client', to: 'cognito', label: 'connexion', bend: 40 },
      { from: 'client', to: 'apigw', label: 'requête + jeton' },
      { from: 'apigw', to: 'cognito', label: 'vérification', dashed: true },
      { from: 'apigw', to: 'lambda', label: 'invocation' },
      { from: 'iam', to: 'lambda', label: 'permissions', dashed: true },
    ],
  },
  screenshots: [],
  screenshotsHint: {
    fr: 'console API Gateway, pool d’utilisateurs Cognito, réponse 401 sans jeton puis 200 avec jeton',
  },
  github: null,
}

export default project
