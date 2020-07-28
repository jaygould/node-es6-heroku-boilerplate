## :warning: This repo is no longer maintained

# node-es6-heroku-boilerplate

Simple boilerplate for running ES6+ features on a Node server - specifically on a Heroku environment, although there are only a couple of bits which have been altered to make the Heroku environment work which are:

## Heroku specific

- The Procfile - used to execute a web hook on deployment
- `"start": "babel-node server.js"` in the package.json file

## Front-end app folder

There's a directory, `/app` which can be used to hold a Vue/React/React-Native/whatever front end system. These can be decoupled completely from the back end, but sometimes it can be good to keep them together in source control while it's being developed (I like to anyway). To read more, [see here](https://github.com/mars/heroku-cra-node).

## Node server

The node server has the following basic elements which I end up using in every project:

- Uses routes in a separate folder to keep things clean! These are great for API endpoints, or can be used to group pages if serving HTML content to a website.
- Uses Mongoose which is created and connected in a separate folder, `/util`, alongside a **User** model which is exported for use around the server.
- Uses ESLint with pre-defined Node and ES6 rules.
- Uses **Environment variables** with the help of the **dotenv** npm package - these are hidden fron Git source control so secret information isn't pushed publically. When used with cloud systems (like Heroku) the environment variables are added separately. With Heroku this can be done in the admin area or CLI.
  - I've added a `.env-sample` file here to show in action (enables the use of `process.env.MLAB_CONNECTION` in the `/util/mongo.js` file). It should be called `.env`.
