FROM node:14

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 80

# VOLUME [ "/app/node_modules" ]

CMD [ "npm", "start" ]
#since we are using nodemon to watch for changes made during development, the start script is used instead for  CMD ["node","server.js"] 