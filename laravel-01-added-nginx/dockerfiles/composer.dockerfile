FROM composer:latest 

RUN addgroup -g 1000 laravel && adduser -G laravel -g laravel -s /bin/sh -D laravel

USER laravel 

WORKDIR /var/www/html 

#this lives inside container
ENTRYPOINT [ "composer", "--ignore-platform-reqs" ]
# ignore allows to run without warnings or errors 