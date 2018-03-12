(function(global) {
    var Person = function(name, lastname) { // this is an exemple of the a IFFE function
      return new Person.init(name, lastname);
    }

    Person.init = function(name, lastname) {
      this.name = name;
      this.lastname = lastname;
    }

    Person.init.prototype = {
      greet: function() {
        console.log('Hello ' + this.name + ' ' + this.lastname);

        return this;
      },

      test: function (){
        console.log('You are great!');

        return this; // use for chainable method
      }
    }

    global.Person = Person;


      var person = Person('Romulo','Durante');
      person.greet().test(); // this is chainable method
      
}(window));

module.exports = Person;