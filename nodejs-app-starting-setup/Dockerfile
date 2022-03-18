#instructions to system to set up image 
FROM node 
# where the run should should
WORKDIR /app
# made a copy of content 
# 1st dot - all content should be copied. 2nd dot - path inside image where files should be stored, can disagenate (/app from .) to create it's structure  - app is root folder. Copy is realative to workdir
# if changes are made after the initializations, docker will not seem them, since there was a COPY made of the image at the initialization. - READ ONLY 
#should rebuild for checking, docker build . and run with docker run -p port#:portexpress image name

# COPY . /app
# allows the json to build before the rest of the application and asses any possible changes before they are made seperately, so copy again this document if there are changes made. Can't disignes changes in individual docs unless assessed seperately 
COPY package.json /app 
#this will now copy package.json into app folder, should only be effected WHEN changes are made to that file. 

# run a compand 
RUN npm install 
# since the copy of package.json accure befor ethis, we should only RUN this when those changes are made and it required. 

# should only need to copy again if assessed and changes made 
COPY . /app

# best practice, but not required. Really a note the port exposed with everything else. Should match the port shown in your server setup 
EXPOSE 80 
# command - only run when a container starts based on the image 
CMD ["node", "server.js"] 
#docker run -p 3000:80
# command above, -p will show the port. Left is the browser exposed port, the right is the port your application has provided. 