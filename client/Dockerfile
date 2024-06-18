FROM node:21.6.1-alpine3.18 AS builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build:prod

CMD ["npm", "run", "start"]
