FROM node:14

WORKDIR /app

COPY package.json . 

RUN npm install

COPY . . 

EXPOSE 80

# VOLUME ["/app/feedback"]
# this is an anonymous volume. Volumes are a way to provide prosisent data across an application. Information will be stored there. 
# Cannot created named volumes inside of a Dockerfile. 
# include the tag -v in your start up tags with name_of_volume:/app/location_of_storage
# example docker run -d -p 3000:80 --rm --name feedback-app -v feedback:/app/feedback feedback-node:volumes 
# if you are using anonymous volumes, no information will persist since it is directly linked to the container, not the image. Unlike named volumes. 

CMD ["node","server.js"]