var path = require('path');

module.exports = { //configure webpack
  entry: "./app/assets/scripts/app.js", //shows the webpack which file will be used to create bundle
  output: {
    path: path.resolve(__dirname, "./app/temp/scripts"), //where the bundle webpack go
    filename: "App.js" 
  }
}

