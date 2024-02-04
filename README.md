# BC Vending Machines

![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/zachneill/bcvm/master?label=version&style=for-the-badge)
![GitHub package.json dependency version (prod)](https://img.shields.io/static/v1?label=Angular&logo=angular&message=14.1.2&color=orange&style=for-the-badge)
![Spring Boot Version](https://img.shields.io/badge/spring%20boot-2.6.4-green?style=for-the-badge&logo=spring)
![GitHub last commit](https://img.shields.io/github/last-commit/zachneill/bcvm?color=purple&style=for-the-badge&logo=github) 

An application that describes whether a vending machine on campus is on short supply or is out of coffee. 

## Technologies

This application uses Angular 14. The `master` branch (and `develop` branch for development) is the front end seen 
on [Heroku](https://bcvm.herokuapp.com). The back end uses Spring Boot with Java 8. It is in the `api` branch (`api-develop` for development), 
and each commit auto-deploys to [Heroku](https://bcvm.herokuapp.com). The API can be run locally 
([documentation here](https://github.com/zachneill/bcvm/tree/api#bcvm-back-end-api)).

### To run the application locally, required technologies are:

#### _Full development stack_ **

- [Angular/Angular CLI](https://angular.io/guide/setup-local#install-the-angular-cli) on port 4200 (`develop` branch)
- Spring Boot on port 8080 (`api-develop` branch)*
- [PostgreSQL](https://www.postgresql.org/download/) on port 5432 *

\* [Click here](https://github.com/zachneill/bcvm/tree/api#bcvm-back-end-api) for back end setup documentation

** For the full stack to work locally, use the correct configs in `configs.ts` in `src\app\service`.

#### _Front end only ([using Heroku Postgres online database](https://bcvm.herokuapp.com))_

- [Angular/Angular CLI](https://angular.io/guide/setup-local#install-the-angular-cli) on port 4200
- Internet access to [bcvm.herokuapp.com](https://bcvm.herokuapp.com/)

#### _API only_ *

- Spring Boot on port 8080 (`api-develop` branch)
- [PostgreSQL](https://www.postgresql.org/download/) on port 5432

## Scripts/Protocol

### Development server

Make sure to run `npm install` so you have all the dependencies. 

For the front end, run `ng serve` for a dev server. Navigate to the server at `http://localhost:4200/`. The app auto-reloads if you change any source files. 

For the back end, [go to this API README](https://github.com/zachneill/bcvm/tree/api#bcvm-back-end-api). The server is `http://localhost:8080/`.

### Heroku

The production build is on Heroku at [bcvm.herokuapp.com](https://bcvm.herokuapp.com). It auto-deploys the `api` branch. To deploy the front end, 
run `ng build`, which creates a `static` folder in the root directory. Copy and paste that into the `api` branch in `api/src/main/resources`.
Remove the static folder that's already there. Commit and push, and Heroku will deploy it on its own. To deploy the back end, just commit and push to the `api` branch as you normally would.

For development, use the `api-develop` and `develop` branches. 

## Dev Checklist 

- Better logout
- Keep user logged in on refresh
- Docker!!!
