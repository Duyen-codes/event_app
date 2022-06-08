# Events App

CRUD app for events. Created during studies in Business College Helsinki in spring 2022.

# Built with

- Symfony
- ReactJS
- Docker
- Bootstrap
- Material UI
- React Leaflet

# Installation

## Symfony-MAMP

1. Install SYMFONY-MAMP from here:
   https://github.com/kalwar/Symfony-MAMP

<br>

2. Go to Symfony-MAMP/php/vhosts/stacksf.conf and add:

```php
SetEnvIf Authorization "(.*)" HTTP_AUTHORIZATION=$1
```

## Setting up the project

3. Inside the Symfony-MAMP folder, clone the project and rename it to web
4. Inside the web folder terminal, run:

```cli
composer install
composer require symfony/webpack-encore-bundle
npm install
php bin/console lexik:jwt:generate-keypair
```

5. Inside the web folder create .env file and add these lines there:

```md
APP_ENV=dev
DATABASE_URL=//ADD YOUR DATABASE URL HERE E.G: mysql://USERNAME:PASSWORD@db:PORT_WHERE_THE_DB_IS_RUNNING/events_app?serverVersion=5.7

JWT_SECRET_KEY=%kernel.project_dir%/config/jwt/private.pem
JWT_PUBLIC_KEY=%kernel.project_dir%/config/jwt/public.pem
JWT_PASSPHRASE=//WRITE YOUR OWN PASSPHRASE HERE
```

## Creating the database

6. Inside the Symfony-MAMP folder run:

```cli
docker-compose up --build
```

You might need to run the above command at least twice to make the events_app database to be created.

7. In the Docker Desktop App, open the Symfony Mamp www container's client, seek into web (cd web) and run the following:

```cli
php bin/console make:migration
doctrine:migrations:migrate
```

## Running the project

8. Run the server in web folder's terminal:

```cli
npm run watch
```

You can stop the server with ctrl + c.

<br>
Now the project should run inside port 8007 (localhost:8007)! 
 
<br>

# Licence

MIT licence.
