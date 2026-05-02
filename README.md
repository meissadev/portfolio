# Portfolio - Meissa Babou

Portfolio professionnel d'un Administrateur Systèmes, Réseaux & Cybersécurité passionné par le Cloud et DevOps.

## 🚀 Technologies utilisées

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS v4
- **Icons**: React Icons
- **Containerisation**: Docker, Docker Compose

## 📋 Prérequis

- Node.js 20+
- npm ou yarn
- Docker (optionnel)

## 🛠️ Installation et développement

### Développement local

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Accéder à l'application
# http://localhost:5173
```

### Build de production

```bash
# Créer le build de production
npm run build

# Prévisualiser le build
npm run preview
```

## 🐳 Déploiement avec Docker

### Option 1: Docker simple

```bash
# Build de l'image
docker build -t meissa-portfolio .

# Lancer le conteneur
docker run -d -p 8080:80 --name portfolio meissa-portfolio

# Accéder à l'application
# http://localhost:8080
```

### Option 2: Docker Compose (recommandé)

```bash
# Lancer l'application
docker-compose up -d

# Voir les logs
docker-compose logs -f

# Arrêter l'application
docker-compose down

# Accéder à l'application
# http://localhost:8080
```

### Commandes Docker utiles

```bash
# Reconstruire l'image
docker-compose up -d --build

# Vérifier le statut
docker-compose ps

# Vérifier la santé du conteneur
docker inspect --format='{{.State.Health.Status}}' meissa-portfolio

# Accéder au conteneur
docker exec -it meissa-portfolio sh
```

## 📁 Structure du projet

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── assets/
│   │   └── photo_2026-04-03_11-39-44.png
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── Dockerfile
├── docker-compose.yml
├── nginx.conf
├── .dockerignore
└── package.json
```

## 🎨 Sections du portfolio

1. **Hero** - Présentation avec photo professionnelle
2. **À propos** - Description du profil et expertises
3. **Compétences** - Technologies et outils maîtrisés
4. **Projets** - Réalisations principales
5. **Contact** - Liens vers les réseaux sociaux

## 🔒 Sécurité

Le Dockerfile utilise :
- Multi-stage build pour optimiser la taille de l'image
- Image Alpine légère
- Nginx avec headers de sécurité configurés
- Healthcheck pour monitoring
- Compression Gzip activée

## 📝 Personnalisation

Pour personnaliser le portfolio :

1. Modifier les informations dans les composants
2. Remplacer la photo dans `src/assets/`
3. Mettre à jour les liens GitHub et LinkedIn
4. Ajuster les couleurs dans `src/index.css`

## 🔄 CI/CD avec Jenkins

### Configuration du pipeline

Le projet inclut un pipeline Jenkins complet pour l'intégration et la livraison continues.

```bash
# Fichiers Jenkins
├── Jenkinsfile              # Pipeline complet
├── Jenkinsfile.simple       # Version simplifiée
└── .jenkins/
    ├── README.md            # Documentation complète
    └── setup-agent.sh       # Script d'installation de l'agent
```

### Prérequis Jenkins

1. Agent Jenkins avec label `aws-ec2`
2. Node.js 20+, Docker, Docker Compose installés
3. Credentials configurés dans Jenkins

### Déploiement automatique

- **Branch `develop`** → Staging (automatique)
- **Branch `main`** → Production (avec confirmation)

Voir `.jenkins/README.md` pour la documentation complète.

## 📄 Licence

© 2026 Meissa Babou. Tous droits réservés.

## 👤 Auteur

**Meissa Babou**
- Administrateur Systèmes, Réseaux & Cybersécurité
- Passionné Cloud & DevOps
- Email: meissa.babou@example.com
