// ES6 or ES 2015 has introduced actual modules in JS.
// Meaning that we can use seperate file to export modules,
// which are just custom pieces of code, and import them into a new file.
//However browsers doesn't support it yet. We have to use compiler like Babble along 
// a module loader like webpack for it to work.

// But in ES5, we have something called the module pattern,
// which allows us to break-up parts of our code into self contain modules with private properties
// and methods, private variables and functions.

//Basic structure for module pattern -- the way it is setup.

// First we have a module whih is going to be in iffy
//iffy is immediately invokes function expression. It runs right away.
// we need to wrap it into paranthesis to make it an expression.
// So we provided an anonymous function inside parenthesis and placed function parenthesis after it [(anonymous function)();] so that it 
// gets invoked instantly.
//So iffy is a function that gets invoke automatically.
/*(function() {

  //Declare private vars and functions here

  return {
    //Declare public vars and functions which are to be returned.

  }

})();
*/

//Lets create a module controler in standard Module pattern.
/*
const UIControler = (function () {
  //Declare private vars and functions here, we cannot see them outside this module.
  let text = 'Hello World';

  const changeText = function () {
    const element = document.querySelector('h1');
    element.textContent = text;
  }

  return {
    callChangeText: function () {
      changeText();
      console.log(text);
    }
  }
})();
UIControler.callChangeText();
*/

//Revealing Module Pattern

const ItemController = (function() {
  let data = [];

  function add(item) {
    data.push(item);
    console.log('Item Added ....');
  }

  function get(id) {
    return data.find(item => {
      return item.id === id;
    });
  }
  //We are going to return an object literal To reveal our private functionality, unlike standard module pattern.
  return {
    add : add,
    get : get
  }
})();
ItemController.add({id:1,name: 'John'});