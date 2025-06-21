# Reelix website

The Reelix website is made using Vite React with Typescript & SCSS.

## Dependencies

* Node
* NPM

## Start project

### Developer container (Recommended)

Go to the [developer container directory](./../../reelix.docker/) and follow the instructions in its README file. <br>
This will start up all projects required for the project.

open http://localhost:8025 or https://localhost:44325, which will hit nginx in the container and it will return the website.

### Standalone

Running the website project standalone, will require that you start other projects as well, to have everything working. <br>
Please follow the instructions in

1. Start up your CLI and navigate to the same directory as this README file.
2. Ensure you have the lates npm dependencies, run `npm install`
3. To only start the website project, run `npm run dev`.
4. The website will then open up, on http://localhost:44141

## Code formatting

The website project is using prettier for code formatting.

Please configure your IDE to use the [project's prettier configuration file](./.prettierrc).
