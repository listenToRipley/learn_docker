FROM node:14

WORKDIR /app
# 3. Bind Mount will overrides since everything references to the local folder... unless you add an third anonymous volume -v /app/location_path # VOLUME ["/app/location_path"]
# this is the same as 
# Docker evaluates all volumes, if there is a conflict with volume paths, the longer more specified path will win. 
#example docker run -d --rm -p 3000:80 --name feedback-app -v feedback:/app/feedback -v $(pwd):/app -v /app/node_modules feedback-node:volumes 
# the longer path name will override the volume coming from the outside. 
COPY package.json . 

RUN npm install

COPY . . 

EXPOSE 80

# VOLUME ["/app/feedback"]
#1. this is an anonymous volume. Volumes are a way to provide prosisent data across an application. Information will be stored there. 
# if you do not include --rm for anonymous volume, you will get the same volume name every time and have duplications volumes. 
# Cannot created named volumes inside of a Dockerfile. 
# include the tag -v in your start up tags with name_of_volume:/app/location_of_storage
# example docker run -d -p 3000:80 --rm --name feedback-app -v feedback:/app/feedback feedback-node:volumes 
# if you are using anonymous volumes, no information will persist since it is directly linked to the container, not the image. Unlike named volumes. 

#2. BIND MOUNTS 
# this is a way to gain access to your local computer. Great for development. Will have to access at run time. Include -v again, but provide the path to the file you are working on and the path to the application /PWD:/app
# example: docker run -d -p 3000:80 --rm --name feedback-app -v feedback:/app/feedback -v $(pwd):/app feedback-node:volumes 
# building on the last example provided in VOLUME above. 
# can use " if you have spaces or special characters to prevent conflicts "

CMD ["node","server.js"]