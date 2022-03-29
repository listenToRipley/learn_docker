FROM nginx:stable-alpine

WORKDIR /etc/nginx/conf.d

COPY nginx/nginx.conf . 

RUN mv nginx.conf default.conf

WORKDIR /var/www/html

COPY src . 
# alway get a copy of the source code and not depending on the bind mount. 