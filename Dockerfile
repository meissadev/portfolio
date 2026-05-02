# Stage 1: Build
FROM node:24-alpine AS builder

WORKDIR /app

# Copier le code et les fichiers de dépendances
COPY . .

# Installer les dépendances
RUN npm install

# Build de l'application
RUN npm run build

# Stage 2: Production avec Nginx
FROM nginx:1.29.8-alpine

# Copier la configuration Nginx personnalisée
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copier les fichiers buildés depuis le stage builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]
