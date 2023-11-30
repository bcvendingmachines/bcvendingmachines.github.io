# BCVM Back End API

![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/zachneill/bcvm/master?label=version&color=black&style=for-the-badge)
![Java Version](https://img.shields.io/badge/java-8-orange?style=for-the-badge&logo=)
![Spring Boot Version](https://img.shields.io/badge/spring%20boot-2.6.4-green?style=for-the-badge&logo=spring)
![GitHub last commit](https://img.shields.io/github/last-commit/zachneill/bcvm?color=purple&style=for-the-badge&logo=github)

This branch is the back end REST API for the BC Vending Machines app. It uses Spring Boot 2.6.4 alongside Java 8. The production build is deployed on Heroku at [bcvm.herokuapp.com](https://bcvm.herokuapp.com/). The Angular front end is available in the master branch of the [BCVM](https://github.com/zachneill/bcvm) repo.

## Running the Application

### Spring Boot on port 8080

For development, use `api-develop`. `api-develop` includes "Local configuration" in `api/src/main/resources/application.yaml` and a Captcha class. For production, it must be commented out, and it uses System.getenv("SECRET_KEY") instead of the class.

IntelliJ IDEA was used to create and maintain this API. To run the server, check out the `api-develop` branch in a Java IDE and run it that way. Or, run `mvn spring-boot:run`. This requires some setup via [installing Maven](https://mkyong.com/maven/how-to-install-maven-in-windows/), cd'ing into the directory where pom.xml is located in, and running `mvn spring-boot:run`. [This may help](https://stackoverflow.com/a/56616547). 

### PostgreSQL on port 5432

[Install PostgreSQL here](https://www.postgresql.org/download/). A default option is starting it when your PC boots up. This initializes the connection. You can also start it in [Windows Services](https://stackoverflow.com/a/53062239). Locally, the project intends to connect to a Postgres database called "postgres" that runs on the default port 5432. You may need to populate the database with the `schema.sql` followed by the `data.sql` SQL file in `api/src/main/resources`.

### Full development stack (ports 5432, 8080, 4200)

If you're not just testing endpoints, you will need to set up the front end, so check out the [README in the master branch](https://github.com/zachneill/bcvm#bc-vending-machines).
