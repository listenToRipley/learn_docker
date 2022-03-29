FROM php:7.4-fpm-alpine

WORKDIR /var/www/html 
# to serve the website from
#this folder holdsour final application, can see nginx.conf for dependencies example. 

COPY src .
# makes a snap shot of the code is available with the main body of the application 

RUN docker-php-ext-install pdo pdo_mysql

#allow for read and write access. chown = Change owenership (of a file or folder)
# www-data = default user who doesn't have read and write access : determines / restate the user 
# the folder they want access to .
RUN chown -R www-data:www-data /var/www/html
# this command will allow you to read and write to the src folder. 

## if you don't have an command or entrypoint listed, the base image will be used if you have one.
# the base image involves php interpretor 

# RUN addgroup -g 1000 laravel && adduser -G laravel -g laravel -s /bin/sh -D laravel
# add laravel interactions 

# USER laravel
