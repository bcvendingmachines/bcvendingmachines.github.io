# BC Vending Machines

![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/zachneill/bc-vending-machines/master?label=version&style=for-the-badge)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/zachneill/bc-vending-machines/@angular/core?label=angular&style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/zachneill/bc-vending-machines?color=purple&style=for-the-badge) 

An application that describes whether a vending machine on campus is on short supply or is out of coffee. 

## Technologies

This uses Angular 13, including the Angular CLI. It is the front end for BC Vending Machines. 

The back end is available as [bcvm-API](https://github.com/zachneill/bcvm-api). It uses Spring Boot and connects to [the "bcvmdb" Postgres database](https://bcvm.herokuapp.com). The backend can be run locally but may require some setup.

### To run the application locally, required technologies are:

#### _Front end only ([using Heroku Postgres online database](https://bcvm.herokuapp.com/test))_

- Angular + Angular CLI (port 4200)
- Internet access to [bcvm.herokuapp.com](https://bcvm.herokuapp.com/test)

#### _Full development stack_

- Angular + Angular CLI (port 4200)
- Spring Boot-compatible environment (for the [bcvm-API](https://github.com/zachneill/bcvm-api) server) (port 8080)
- PostgreSQL (port 5432)

## Scripts

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app automatically reloads if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### GH Pages

Make sure [Angular CLI GH Pages](https://www.npmjs.com/package/angular-cli-ghpages) is installed. [Make sure your system variables PATH has Git](https://stackoverflow.com/a/4493004/18721369). Otherwise, you will get an __Error: spawn git ENOENT__ error.

In _PowerShell_ or _Command Prompt_, run `ng deploy --base-href=/bcvm/` to deploy it to [zachneill.github.io/bcvm](https://zachneill.github.io/bcvm). 

Don't run this in Bash because Bash mistreats base-href (it's a known issue). If using Powershell, you may have to run `Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass` first. Otherwise, you will get an error.

If I publish using Bash, I get __Not allowed to load local resource__ when viewing the [GH Page](https://zachneill.github.io/bcvm). 

### Android (DOESN'T WORK YET)

Make sure the [Capacitor](https://capacitorjs.com/docs/getting-started) requirements (core, cli, and android) are installed.

Run `ng build`

Move everything within `/dist/bc-vending-machines` into `/dist`. Then run `npx cap add android`

## Dev Checklist 

- Live reload over location.reload
- Metadata