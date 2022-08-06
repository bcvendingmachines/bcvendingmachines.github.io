# BC Vending Machines

![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/zachneill/bc-vending-machines/master?label=version&style=for-the-badge)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/zachneill/bc-vending-machines/@angular/core?label=angular&style=for-the-badge)
![Spring Boot Version](https://img.shields.io/badge/spring%20boot-2.6.4-green?style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/zachneill/bc-vending-machines?color=purple&style=for-the-badge) 

An application that describes whether a vending machine on campus is on short supply or is out of coffee. 

## Technologies

This application uses Angular 13. The root directory is the front end seen on [GH Pages](https://zachneill.github.io/bcvm). The back end is in the `api` folder. It uses Spring Boot and connects to [the "bcvmdb" Postgres database](https://bcvm.herokuapp.com). The server can be run locally ([documentation here](https://github.com/zachneill/bcvm/tree/master/api#bcvm-back-end-api)).

### To run the application locally, required technologies are:

#### _Front end only ([using Heroku Postgres online database](https://bcvm.herokuapp.com/test))_

- [Angular/Angular CLI](https://angular.io/guide/setup-local#install-the-angular-cli) on port 4200
- Internet access to [bcvm.herokuapp.com](https://bcvm.herokuapp.com/)

#### _API only_ *

- Spring Boot on port 8080
- [PostgreSQL](https://www.postgresql.org/download/) on port 5432

#### _Full development stack_ **

- [Angular/Angular CLI](https://angular.io/guide/setup-local#install-the-angular-cli) on port 4200
- Spring Boot on port 8080 *
- [PostgreSQL](https://www.postgresql.org/download/) on port 5432 *

\* [Click here](https://github.com/zachneill/bcvm/tree/master/api#bcvm-back-end-api) for back end setup documentation

** For the full stack to work, use the `supply-service.service.ts` and `machine-service.service.ts` development urls in `src\app\service`. 

## Scripts

### Development server

Make sure to run `npm install` so you have all the dependencies. 

For the front end, run `ng serve` for a dev server. Navigate to the server at `http://localhost:4200/`. The app auto-reloads if you change any source files. 

For the back end, [go to this API README file](https://github.com/zachneill/bcvm/tree/master/api#bcvm-back-end-api). The server is `http://localhost:8080/`.

### Heroku

This is for the back end. It requires [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli#install-the-heroku-cli) installed. Commit and push all changes. Then run `git push heroku master`.

For first-time setup, you may need to run `heroku login` and `heroku git:remote -a bcvm`. This affords Heroku deployment access. Additionally, only Heroku collaborators can deploy. In Heroku, the only collaborator is zacharyneill@gmail.com.

### GH Pages

This is for the front end. Make sure [Angular CLI GH Pages](https://www.npmjs.com/package/angular-cli-ghpages) is available with `ng add` or `npm install`. [Make sure your system variables PATH has Git](https://stackoverflow.com/a/4493004/18721369). Otherwise, you will get an __Error: spawn git ENOENT__ error.

In _PowerShell_, _Command Prompt_, or a non-Bash terminal, run `ng deploy --base-href=/bcvm/` to deploy it to [zachneill.github.io/bcvm](https://zachneill.github.io/bcvm). 

Don't run this in Bash because Bash mistreats base-href (it's a known issue). If I publish using Bash, I get __Not allowed to load local resource__ when viewing the [GH Page](https://zachneill.github.io/bcvm). If using Powershell, you may have to run `Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass` first. Otherwise, you will get an error. 

### Android (RARELY WORKS)

Make sure the [Capacitor](https://capacitorjs.com/docs/getting-started) requirements (core, cli, and android) are installed.

If you recreate the capacitor-config.ts file with npx cap init, make sure `webDir:` is `'dist/bc-vending-machines'`.

Run `ng build`, then `npx cap add android`.

`npx cap open android` opens the project in Android Studio. Follow [these steps](https://capacitorjs.com/docs/getting-started/environment-setup#android-development) to ensure ideal configuration.

## Dev Checklist 

- Subscribing over location.reload
