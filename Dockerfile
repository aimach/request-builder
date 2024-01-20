FROM node:14.17.3-alpine

RUN mkdir /app
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY public public
COPY src src
COPY vite.config.js ./

CMD npm run dev