(function(global) {
    var Person = function(name, lastname) {
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
        console.log('You are cool!');

        return this;
      }
    }

    global.Person = Person;


      var person = Person('Romulo','Durante');
      person.greet().test();
      
}(window));

module.exports = Person;