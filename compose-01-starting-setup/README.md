## notes 
Single or double quote don't appear to have an effect on the input 

## Services
docker-compose up 
  Pulls all images and starts containers 

Can use docker-compose -d 
  Will start in detached mode. 

docker-compose down, shut everything down, removes services. deletes containers. Does not delete volumes. 

docker-compose down -d removes volumes 

if you add --build to docker-compose up, you force images to get rebuilt. Otherwise, previous image will get reused. 

## docker-compose.yml: 
A way to include requirements instead of specifying in CLI on docker run. 
Indenting and spacing matters for yml.
When you docker compose it will automatically be --rm (removed) when you bring it down. 
Will add -d (deattached) when run 

- use of single values 
if using key value parts, you don't use - 

VERSION   
  Refers to the version of docker-compose you are currently using and can effect the syntax. 
Find notes, [here](https://docs.docker.com/compose/compose-file/)
Or you can review install items [here](https://docs.docker.com/compose/install/)

SERVICES
  The names of the containers associated with the composer.
  There must be at least one container associated with this composer file. 
  Each service will be provided by an indent as well and wil detail the requirements of the container. 

  NAME
    overrides default names or pre-generated name from Docker. 
  
  BUILD
    Provide the absolute path from the base directly to the image you want to create/ has the associated Dockerfile. 

  IMAGES
    the image associated with the container. 
    This name can be an image you created or the name that will be looked up in Dockerhub.
    It can also be a URL to a repo where image is stored or a previously created image with the local path. 
  
  VOLUMES 
    They syntax is the same as a docker run -v 
    - name:/location/path

  ENVIRONMENT
    can provide associated elements 
  
  alternatively 
  ENV_FILE
    provide relative path to an env file with a list of variables that that container will use. 

  PORTS
    - Provide as a list "post port:container internal port"
    can provide multiple ports 

  NETWORKS
    you can provide on individual containers, but docker-compose created single service for all items within the name network that is automatically created by docker. 
    Can still add if other networks.

  DEPENDS_ON
    One container depends on another and one should be up before the other container starts running.
    Provide - list of services/container/ this container depends on. 

VOLUMES
  Top level volumes
  Should be at the same level of services. List of volumes used here.  
  Indent the name on the volume, include :
  volumes listed here can be shared. 
  Anonymous and bind mounts won't be. 