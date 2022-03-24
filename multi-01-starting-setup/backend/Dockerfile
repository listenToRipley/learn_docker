FROM node

WORKDIR /back

COPY package.json .

RUN npm install

COPY . .

EXPOSE 80

CMD ["node", "app.js"]