FROM node:14

WORKDIR /app

COPY package.json . 

RUN npm install

COPY . . 

EXPOSE 80

# VOLUME ["/app/feedback"]
# this is an anonymous volume. Volumes are a way to provide prosisent data across an application. Information will be stored there. 
# if you do not include --rm for anonymous volume, you will get the same volume name every time and have duplications volumes. 
# Cannot created named volumes inside of a Dockerfile. 
# include the tag -v in your start up tags with name_of_volume:/app/location_of_storage
# example docker run -d -p 3000:80 --rm --name feedback-app -v feedback:/app/feedback feedback-node:volumes 
# if you are using anonymous volumes, no information will persist since it is directly linked to the container, not the image. Unlike named volumes. 

#BIND MOUNTS 
# this is a way to gain access to your local computer. Great for development. Will have to access at run time. Include -v again, but provide the path to the file you are working on and the path to the application /PWD:/app
# example: docker run -d -p 3000:80 --rm --name feedback-app -v feedback:/app/feedback -v $(pwd):/app feedback-node:volumes 
# building on the last example provided in VOLUME above. 
# can use " if you have spaces or special characters to prevent conflicts "

CMD ["node","server.js"]