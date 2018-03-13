(function(global) {
    var Obj = function(name, lastname) { // this is an exemple of the a IFEE function
      return new Obj.init(name, lastname); // if i wanna create a new instance of the object, i'm not need type the keyword 'new' every time
    }

    Obj.init = function(name, lastname) {
      this.name = name;
      this.lastname = lastname;
    }

    Obj.init.prototype = { // the object methods
      greet: function() {
        console.log('Hello ' + this.name + ' ' + this.lastname);

        return this; //use for chainable method
      },

      test: function (){
        console.log('You are great!');

        return this; // use for chainable method
      }
    }

    global.Obj = Obj;


      var obj = Obj('New','Object');
      obj.greet().test(); // this is chainable method in use
      
}(window));

module.exports = Obj; // I'm use webpack to bundle the multiples JS files, because i wanna keep the organization