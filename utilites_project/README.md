A utility contain is a simple file that allows docker to run commands 

COMMANDS
  docker run -it -d node
  Since detached, still open and waiting. 

  Then docker exec -it container_name (npm init) > some command 
    exec = Execute a command inside of a docker container.
    needs to be -it to stay open we can interact with the container. 
    wouldn't require node to be installed since it can be run inside of the container.   

Different 
  docker run node --it node npm init 
  This will override the default command, condensed version of what we worked on before. 

  Could docker exec 

With Dockerfile 
not CMDs 
  docker build -t node-util . 

  docker run -it -v ${pwd}:/app node-util npm init 

  bind mount will allow init to be created within the container. 

  docker run -it -v ${pwd}:/app node-util npm install < this will make it so we can just restrict to npm commands w/ ENTRYPOINT>

ENTRYPOINT 
  Similar to CMD = commands can be overwritten with whatever is provided during the docker run command after they commands is complete. So after the image name, npm install would override any provided commands in the Dockerfile. 
  
  Whatever is entered is appended after the entry point. You don't have to include the command of the entrypoint since it will exist already. 