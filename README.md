# AngularJS CRUD application demo

This is a test project to demonstrate CRUD operation using Angular and JSON server.

## Get started

### Clone the repo

```shell
git clone https://github.com/Zealous-System-Pvt-Ltd/angular.git
cd angular
```

### App Server

Our backend application server is a JSON server application that relies upon some 3rd Party npm packages. You need to install these:

* Install local dependencies (from the project root folder):

    ```
    cd server
    npm install
    ```

  (This will install the dependencies declared in the server/package.json file)

### Client App

Our client application is a straight HTML/Javascript application but our development process uses a `json-server` npm package.

* Install local dependencies (from the project root folder):

    ```
    npm install
    ```

  (This will install the dependencies declared in the package.json file)

Shut it down manually with `Ctrl-C`.

## Running
### Start the Server
* Run the server

    ```
    cd server
    json-server --watch database.json
    ```
* Browse to the server at [http://localhost:3000]

### Start the Client App
* Run the frontend

    ```
    ng serve --open
    ```
* Browse to the application at [http://localhost:4200]

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Learn More
To learn Angular, check out the [Angular documentation](https://angular.io/docs).