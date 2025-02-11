FROM php:apache

RUN apt-get update && apt-get install -y certbot python3-certbot-apache

WORKDIR /var/www/html/

COPY . /var/www/html/

EXPOSE ${port} ${port2}