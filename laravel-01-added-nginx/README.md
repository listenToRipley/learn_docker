## Laravel
[Official docs](https://laravel.com/docs/9.x)
Can use composer to start project. 

This is the util that needs to be running for the rest of the application to work. 

docker-compose run --rm composer create-project --prefer-dist laravel/laravel . 
This will provide all information to the src 

Within created content within src/env look at lines 9-14, these should sync up with your db settings provided in your env folder. 

The db host will need to be the name of the container hosting the mysql db. 

## Nginx
[Official documentation on nginx image](https://hub.docker.com/_/nginx)

## PHP
Want the custom docker file since it does not have everything we need. 
[Starts with...](https://hub.docker.com/_/php), will need extensions 

## MYSQL

[Starting point](https://hub.docker.com/_/mysql)

## Composer 

[Hub image](https://hub.docker.com/_/composer)

## Artisan

## npm:

## Docker compose

docker-compose up --help > info about docker compose up 

If you use docker-compose up < this will provide all services
If you use docker-compose > you can target specific services by providing a list of services you want.

