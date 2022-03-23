you will need to containaize MongoDB in order for favorites to work. 

A Special address that Docker can see and know where it should go, translated to host machine inside docker machine. 
Can be any url or http request: host.docker.internal 

one container should have a single function. Switch to mongodb having it's own image : https://hub.docker.com/_/mongo 

docker run -d --name mongodb mongo 

 docker inspect container mongodb to see details on container just created.

 Since you are no longer running mongodb through the local instance, you will need the network information from the container. More specifically  IPAddress 

USE NETWORKS 
Docker will not automatically create networks. 
docker network create network_name  to create new one 
docker network ls to see all networks 
to associate a network to a container, link it in your run time
docker run -d --name mongodb --network network_name mongo

If two containers share a network, then instead of using the network IP address to make calls, you can use the container's name 