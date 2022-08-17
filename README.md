# BC Vending Machines

![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/zachneill/bcvm/master?label=version&style=for-the-badge)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/zachneill/bcvm/@angular/core?label=angular&style=for-the-badge)
![Spring Boot Version](https://img.shields.io/badge/spring%20boot-2.6.4-green?style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/zachneill/bcvm?color=purple&style=for-the-badge) 

An application that describes whether a vending machine on campus is on short supply or is out of coffee. 

## Technologies

This application uses Angular 14. The root directory is the front end seen on [GH Pages](https://zachneill.github.io/bcvm). The back end uses Spring Boot with Java 8. It is in the `api` branch (and `api-develop` branch for development), and each commit auto-deploys to [Heroku](https://bcvm.herokuapp.com). The API can be run locally ([documentation here](https://github.com/zachneill/bcvm/tree/api#bcvm-back-end-api)).

### To run the application locally, required technologies are:

#### _Full development stack_ **

- [Angular/Angular CLI](https://angular.io/guide/setup-local#install-the-angular-cli) on port 4200
- Spring Boot on port 8080 *
- [PostgreSQL](https://www.postgresql.org/download/) on port 5432 *

\* [Click here](https://github.com/zachneill/bcvm/tree/api#bcvm-back-end-api) for back end setup documentation

** For the full stack to work locally, use the `supply-service.service.ts` and `machine-service.service.ts` development urls in `src\app\service`.

#### _Front end only ([using Heroku Postgres online database](https://bcvm.herokuapp.com))_

- [Angular/Angular CLI](https://angular.io/guide/setup-local#install-the-angular-cli) on port 4200
- Internet access to [bcvm.herokuapp.com](https://bcvm.herokuapp.com/)

#### _API only_ *

- Spring Boot on port 8080
- [PostgreSQL](https://www.postgresql.org/download/) on port 5432

## Scripts

### Development server

Make sure to run `npm install` so you have all the dependencies. 

For the front end, run `ng serve` for a dev server. Navigate to the server at `http://localhost:4200/`. The app auto-reloads if you change any source files. 

For the back end, [go to this API README](https://github.com/zachneill/bcvm/tree/api#bcvm-back-end-api). The server is `http://localhost:8080/`.

### GH Pages

This is for the front end. [Make sure your system variables PATH has Git](https://stackoverflow.com/a/4493004/18721369). Otherwise, you may get an __Error: spawn git ENOENT__ error.

In _PowerShell_, _Command Prompt_, or a non-Bash terminal, run `npm run deploy` to deploy it to [zachneill.github.io/bcvm](https://zachneill.github.io/bcvm). 

Don't run this in Bash because Bash mistreats base-href (it's a known issue). If publishing using Bash, you may get __Not allowed to load local resource__ when viewing the [GH Page](https://zachneill.github.io/bcvm). If using Powershell, you may have to run `Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass` first. Otherwise, you will get an error. 

### Android (WORK IN PROGRESS)

Make sure the [Capacitor](https://capacitorjs.com/docs/getting-started) requirements (core, cli, and android) are installed.

If you recreate the capacitor-config.ts file with npx cap init, make sure `webDir:` is `'dist/bc-vending-machines'`.

Run `ng build`, then `npx cap add android`.

`npx cap open android` opens the project in Android Studio. Follow [these steps](https://capacitorjs.com/docs/getting-started/environment-setup#android-development) to ensure ideal configuration.

## Dev Checklist 

- Security measures
- Post and get error handling
