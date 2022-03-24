### multi app notes - NK 
Use Official Mongo image : docker run --name mongodb --rm -d -p 27017:27017 mongo

create a network for them all to talk on 
  docker network create goals-net 

Ports are not required if containers on the same network. 
  docker run --name mongodb --rm -d --network goals-net mongo

READ UP ON MONGO DB IMAGE SETTINGS [HERE](https://hub.docker.com/_/mongo)

If the mongodb container is taken down, we lose all data as it does not persist if the container is gone. Alteratively we can use volumes:

  docker run --name mongodb  -v data:/data/db --rm -d --network goals-net mongo 

not a full bind mount for this, since it's not a full path after -v 

To make secure, add environment variables. Can makes required to access 
docker run --name mongodb  -v data:/data/db --rm -d --network goals -e MONGO_INITDB_ROOT_USERNAME=natalie -e MONGO_INITDB_ROOT_PASSWORD=secret mongo