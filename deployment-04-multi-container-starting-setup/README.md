Will need to rebuild image 

docker build -t node-goals ./backend

Push to dockerhub
Name and place as public repository. 

Create Cluster and network only cluster
Give cluster name 
Create VPC - default settings 
Create - allows for front end and backend to be on the same network. 

View Cluster
View tasks and services 

Create task under task definitions 
Choose Fargate 
Next give name
Task role execution 
Choose smallest sizes for memory and CPU (will keep costs low)

Container definitions 
Give name 
Give repository for docker hub
Use the exposed port the same as on the docker-compose ports 

Items in the Dockerfile will be part of the docker images used in Dockerhub. So if content is references there, you more than likely won't have to account for that within the production site with the acceptation of environmental variables. 

Some sites will also ask for CMDs to be defined in production. 

Load balancing - in coming traffic handled efficiently 