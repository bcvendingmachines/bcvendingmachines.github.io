# BC Vending Machines API

![Version](https://img.shields.io/badge/version-1.0.0-red?style=for-the-badge)
![Spring Boot Version](https://img.shields.io/badge/spring%20boot-2.6.4-green?style=for-the-badge)
![Java Version](https://img.shields.io/badge/java-8-orange?style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/zachneill/bc-vending-machines?color=purple&style=for-the-badge) 

The back end REST API for the BC Vending Machine app, which describes whether a vending machine on campus is on short supply or is out of coffee. IntelliJ IDEA was used to create and maintain this API. 

## Technologies

This uses Spring Boot 2.6.4 alongside Java 8. The production build is on Heroku at [bcvm.herokuapp.com](https://bcvm.herokuapp.com/test). Locally, the repo intends to connect to a Postgres database called "bcvmdb" that runs on the default port 5432.

For development, use the provided "Local configuration" in `src/main/resources/application.properties`. For production, comment it out.

The front end is available in the initial directory of the [BCVM](https://github.com/zachneill/bcvm) repo. It uses Angular 13 and Angular Material with Flex Layout.

### To run the application, required technologies are:

#### _API only_

- Spring Boot-compatible environment (port 8080) **
- PostgreSQL (port 5432)

#### _Full development stack_

- Angular + Angular CLI ([for the front end](https://github.com/zachneill/bcvm)) (port 4200)
- Spring Boot-compatible environment (port 8080) **
- PostgreSQL (port 5432)

\** To avoid requiring an IDE like Intellij or Eclipse, you _could_ run Spring Boot from the command line via [installing Maven](https://mkyong.com/maven/how-to-install-maven-in-windows/), cd'ing into the directory where pom.xml is and running mvn spring-boot:run. [This may help](https://stackoverflow.com/a/56616547).
