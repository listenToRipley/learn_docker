FROM composer:latest 

WORKDIR /var/www/html 

#this lives inside container
ENTRYPOINT [ "composer", "--ignore-platform-reqs" ]
# ignore allows to run without warnings or errors 