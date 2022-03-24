### multi app notes - NK 
Use Official Mongo image : docker run --name mongodb --rm -d -p 27017:27017 mongo

create a network for them all to talk on 
  docker network create goals-net 

Ports are not required if containers on the same network. 
  docker run --name mongodb --rm -d --network goals mongo