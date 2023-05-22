FROM node:16.14-alpine

WORKDIR /app-front-end

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY ./ .

EXPOSE 3000

ENTRYPOINT ["npm", "start"]
