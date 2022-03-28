FROM php:7.4-fpm-alpine

WORKDIR /var/www/html 
# to serve the website from
#this folder holdsour final application, can see nginx.conf for dependencies example. 
COPY src ./ 

RUN docker-php-ext-install pdo pdo_mysql

## if you don't have an command or entrypoint listed, the base image will be used if you have one.
# the base image involves php interpretor 

RUN addgroup -g 1000 laravel && adduser -G laravel -g laravel -s /bin/sh -D laravel
# add laravel interactions 

USER laravel

RUN chown -R www-data:www-data /var/www/html
