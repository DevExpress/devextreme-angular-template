# devextreme-angular-template

This project contains a template of an Angular application based on DevExtreme widgets.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0-rc.4.

## Getting Started

You have the following options to start:

- Use this DevExtreme Angular application template

    - Clone the repository  

            git clone https://github.com/DevExpress/devextreme-angular-template/

    - Navigate to the project folder

            cd devextreme-angular-template

    - Install dependencies

            npm install

 This option does not require install devextreme-cli, but you can not change application settings including the name.

- Create a new Angular application with DevExtreme layout using the DevExtreme CLI

        npx devextreme-cli new angular-app app-name

 Use flag `--empty` to prevent creation of sample views.

 **Note: this command creates an Angular application using the default settings and SASS styles. (`ng new app-name --style=sass`)**

- Add DevExtreme layout to an existing Angular application using the DevExtreme CLI

        npx devextreme-cli add angular-template

 In this case, DevExtreme CLI does not modify existing app.component files. It creates new files with a unique name (app1.component). You should manually specify which components should be bootstrapped in app.module.ts.

 If app.component files do not contain custom code, you can use the `--override-app-component=true` option to override these files. The `--empty` flag prevents sample views creation.

- Add DevExtreme layout to an existing Angular application using DevExtreme Schematics

 **Note: DevExtreme Schematics require @angular/cli or @angular-devkit/schematics-cli to be installed.**

        ng g devextreme-angular: add app-template

 See the [DevExtreme Schematics README](https://github.com/devexpress/DevExtreme-schematics#devextreme-schematics) for more information.

## Development Server

Run `ng serve` to run a development server. The application is available on `http://localhost:4200/`. It is automatically reloaded once you change source files.

## Code Scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module` to generate another Angular application element.

## Build

Run `ng build` to build the project. The build artifacts are stored in the dist/ directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

Use `ng help` or check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md) to get more help on Angular CLI.
