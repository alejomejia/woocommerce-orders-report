# Development stage
FROM node:18 as development
WORKDIR /usr/src/app
COPY package*.json tsconfig.json ./
RUN npm install
COPY ./src ./src
CMD [ "npx", "tsc"]
CMD [ "npm", "run", "start" ]