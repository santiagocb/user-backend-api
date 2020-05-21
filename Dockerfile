FROM node:stretch-slim
EXPOSE 8082
WORKDIR /app

COPY package.json /app
RUN npm install
COPY . /app

CMD node index.js