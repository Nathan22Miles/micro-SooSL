The purpose of this project is to implement a small subset of the [SooSL](https://www.soosl.net) functionality using React/Mobx/TypeScript.

The current version allows you to click a gloss from a list of glosses. The corresponding SL video is shown along with the glosses and example sentences (when available) in English/French/Spanish.

The data files used in this demo are from the .zoozl file [here](https://www.soosl.net/software.html).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You can see the resulting app running at https://nathan22miles.github.io/micro-SooSL.

## Running On Local Machine

* [Install](https://nodejs.org/en/download/current/) nodejs on your machine. I have been using the "Current" version (v11.9).
* Clone the repositiory https://github.com/Nathan22Miles/micro-SooSL into a directory on your machine
* In the project directory enter

    * yarn install
    * yarn start

This opens a browser and runs the app in the development mode.
You will also see any lint errors in the console.

The app will automatically reload if you make edits to the source code.
Visual Studio Code (VSC) is an excellent way to do this.
VSC support context sensitive editing for Typescript as well as the ability
to set breakpoints in your code on the browser for debugging.

## Push a copy to nathan22miles.github.io/micro-SooSL

    yarn build
    yarn deploy
    -- it might take a few minutes to actually do the update

# Validating returned jwt

You can see the web access for this in the network tab in jwt.io

This is where the public keys come from

https://cognito-idp.us-east-1.amazonaws.com/us-east-1_PMCGh8nfT/.well-known/jwks.json

