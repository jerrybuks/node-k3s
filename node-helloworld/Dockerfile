FROM node:16
COPY . /node/src/app
WORKDIR /node/src/app
RUN npm install
EXPOSE 8080
CMD ["node", "server.js"]