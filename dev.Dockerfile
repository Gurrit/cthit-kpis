FROM node:14

WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY src src
COPY config config

CMD ["npm", "run", "devstart"]