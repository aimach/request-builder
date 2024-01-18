# Étape de construction
# Utiliser une image Node.js comme image de base pour la construction
FROM node:latest as build-stage

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json (ou yarn.lock) dans le répertoire de travail
COPY package*.json ./
# Si vous utilisez Yarn, copiez yarn.lock également
# COPY yarn.lock ./

# Installer les dépendances
RUN npm install
# Pour Yarn, utilisez : RUN yarn install

# Copier les fichiers et dossiers du projet dans le répertoire de travail
COPY . .

# Construire l'application React avec Vite
RUN npm run build
# Pour Yarn, utilisez : RUN yarn build

# Étape de déploiement
# Utiliser une image légère (comme Nginx) pour servir l'application
FROM nginx:stable-alpine as production-stage

# Copier les fichiers construits de l'étape de construction dans le dossier de serveur
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Exposer le port (par défaut 80 pour Nginx)
EXPOSE 80

# Commande pour démarrer Nginx et servir l'application
CMD ["nginx", "-g", "daemon off;"]
