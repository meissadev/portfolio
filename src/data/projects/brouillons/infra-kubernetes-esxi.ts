import { todo, type Project } from '../../types'

const project: Project = {
  slug: 'infra-kubernetes-esxi',
  code: 'PRJ-05',
  title: { fr: 'Infrastructure virtualisée : Kubernetes sur VMware ESXi' },
  summary: {
    fr: 'Cluster Kubernetes multi-nœuds sur VMware ESXi, stockage TrueNAS et volumes LVM, hébergeant une application MERN.',
  },
  categories: ['infrastructure'],
  status: 'done',
  context: { fr: todo('cadre du projet, durée, seul ou en équipe') },
  objective: {
    fr: 'Construire une infrastructure virtualisée complète, du stockage à l’orchestration de conteneurs, pour héberger une application web.',
  },
  technologies: ['VMware ESXi', 'Kubernetes', 'TrueNAS', 'LVM', 'MERN'],
  achievements: [
    { fr: 'Déploiement d’un cluster Kubernetes multi-nœuds sur VMware ESXi.' },
    { fr: 'Mise en place du stockage avec TrueNAS et de volumes LVM.' },
    { fr: 'Déploiement d’une application MERN (MongoDB, Express, React, Node.js) sur le cluster.' },
    { fr: todo('nombre de nœuds, raccordement du stockage au cluster, difficultés rencontrées') },
  ],
  learnings: [{ fr: todo('2 ou 3 apprentissages clés') }],
  topology: {
    title: {
      fr: 'Architecture de principe : cluster Kubernetes sur ESXi, stockage TrueNAS et LVM',
    },
    caption: {
      fr: 'Schéma de principe. À compléter : nombre réel de nœuds et de VM, protocole d’accès au stockage.',
    },
    zones: [
      { label: 'VMware ESXi', x: 195, y: 75, w: 455, h: 360 },
      { label: 'Cluster Kubernetes', x: 212, y: 100, w: 196, h: 320 },
    ],
    nodes: [
      {
        id: 'users',
        label: 'Utilisateurs',
        sub: 'navigateur',
        kind: 'users',
        x: 530,
        y: 35,
        w: 160,
      },
      {
        id: 'cp',
        label: 'Control plane',
        sub: 'Kubernetes',
        kind: 'container',
        x: 310,
        y: 155,
        w: 170,
      },
      { id: 'w1', label: 'Worker 1', sub: 'Kubernetes', kind: 'container', x: 310, y: 265, w: 170 },
      { id: 'wn', label: 'Worker N', sub: 'Kubernetes', kind: 'container', x: 310, y: 375, w: 170 },
      {
        id: 'app',
        label: 'Application MERN',
        sub: 'sur le cluster',
        kind: 'server',
        x: 530,
        y: 265,
        w: 180,
      },
      { id: 'truenas', label: 'TrueNAS', sub: 'stockage', kind: 'storage', x: 770, y: 200, w: 160 },
      { id: 'lvm', label: 'Volumes LVM', sub: 'stockage', kind: 'storage', x: 770, y: 340, w: 160 },
    ],
    links: [
      { from: 'users', to: 'app' },
      { from: 'w1', to: 'app' },
      { from: 'wn', to: 'app' },
      { from: 'app', to: 'truenas', dashed: true },
      { from: 'truenas', to: 'lvm', dashed: true },
    ],
  },
  screenshots: [],
  screenshotsHint: {
    fr: 'kubectl get nodes, VM dans ESXi, tableau de bord TrueNAS, application MERN en fonctionnement',
  },
  github: null,
}

export default project
