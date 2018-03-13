# BaseForNewApp

First of all you need run the command 'npm install' to download and create the node modules folder, then:
----
-> run the command 'gulpe use-css' or 'gulpe use-sass' to choice which kind of file you want work it;
--
-> run command 'gulp watch' to starter you building process
----
The folder assets is where the App will be made. You will find the resources for 
keep organization:
--
-> images folder
--
-> scripts folder
  |-> modules // where the JS files will be splitted 
  -
  |app.js // where the modules will be called and bundle for the webpack 
--
-> styles folder
  -
  |-> base // base for the styles
  -
  |-> modules //where the css files will be splitted
  -
  |style.css or style.scss
---
/*** Don't worry, when you run the commands in the begin, the gulp will create the files for you 
---
when you run the command 'gulp watch' the 'temp'(temporary) folder will be created, where the production files will be sent
--
-> scripts folder
--
-> styles folder

---
When you finish your App, run the command 'gulp build', then the 'dist'(distribution) folder will be created where the finished App files will be.

