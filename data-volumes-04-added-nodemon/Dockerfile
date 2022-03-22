FROM node:14

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .
# can make defaults more flexable, resign the default within arg 
ARG DEFAULT_PORT=80
#  dynamic variable set when building this image. If not provided during build, default values will be used. Or you can provide the content to override the default 
# example docker build -t feedback-node:dev --build-arg DEFAULT_PORT=8000 .
# ARG can't be used on CMD, but on all other instructions 
# best practice, place arg close to where they are called. 

#provide environment variable - 80 is the default, can be overriden when starting the container --env PORT=8000 or -e
# example docker run -d --rm -p 3000:8000 --env PORT=8000 --name feedback-app -v feedback:/app/feedback -v $(pwd):/app -v /app/node_modules feedback-node:volumes 

#mulitpule -e or each env
ENV PORT $DEFAULT_PORT
# or reference the .env file --env-file .env

# can call port how with $ in front since it is established in ENV
EXPOSE $PORT

# VOLUME [ "/app/node_modules" ]

CMD [ "npm", "start" ]
#since we are using nodemon to watch for changes made during development, the start script is used instead for  CMD ["node","server.js"] 