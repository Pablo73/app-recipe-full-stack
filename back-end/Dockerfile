FROM node:16.14-alpine

WORKDIR /app-back-end

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY ./ .

EXPOSE 3001

ENTRYPOINT ["npm", "run"]
CMD [ "dev" ]
