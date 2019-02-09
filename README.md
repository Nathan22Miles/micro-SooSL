The purpose of this project is to implement a small subset of the [SooSL](https://www.soosl.net) functionality using React/Mobx/TypeScript in order
investigate whether this might be a productive method of creating a web version.

The current version allows you to click a gloss from a list of glosses. The corresponding SL video is shown along with the glosses and example sentences (when available) in English/French/Spanish.

The data files used in this demo are from the .zoozl file [here](https://www.soosl.net/software.html).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You can see the resulting app running at https://nathan22miles/micro-soosl.

## Running On Local Machine

* [Install](https://nodejs.org/en/download/current/) nodejs on your machine. I have been using the "Current" version (v11.9).
* Clone the repositiory https://github.com/Nathan22Miles/micro-SooSL into a directory on your machine
* In the project directory enter

    npm install
    npm start

This opens a browser and runs the app in the development mode.
You will also see any lint errors in the console.

The app will automatically reload if you make edits to the source code.
Visual Studio Code (VSC) is an excellent way to do this.
VSC support context sensitive editing for Typescript as well as the ability
to set breakpoints in your code on the browser for debugging.

## Roadmap to WebSooSL (Read Only Version)

* Expand the Relational to Object mapper (/utility/import.ts) to cover all the sqlite tables.
* Expand the React views (Views.tsx and Views.css) to cover all the Objects.
* Write an uploader to upload the configuration and video data for SooSL project to a static
web server.

