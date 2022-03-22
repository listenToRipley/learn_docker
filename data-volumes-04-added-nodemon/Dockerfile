FROM node:14

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

#provide environment variable - 80 is the default, can be overriden when starting the container --env PORT=8000
# example docker run -d --rm -p 3000:8000 --env PORT=8000 --name feedback-app -v feedback:/app/feedback -v $(pwd):/app -v /app/node_modules feedback-node:volumes 
ENV PORT 80

# can call port how with $ in front since it is established in ENV
EXPOSE $PORT

# VOLUME [ "/app/node_modules" ]

CMD [ "npm", "start" ]
#since we are using nodemon to watch for changes made during development, the start script is used instead for  CMD ["node","server.js"] 