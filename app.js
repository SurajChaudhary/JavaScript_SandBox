//Iterators and Generators

//Iterator Example

function nameIterator() {
  let nextIndex = 0;

  return {
    next : function() {
      return nextIndex < names.length ?
      {value: names[nextIndex++], done: false}:
      {done: true}
    }
  }
}

//Create array of names
const namesArr = ['Jack','Jill','John'];

//Initialize iterator and pass in the names array
const names = nameIterator(namesArr);

console.log(names.next());
console.log(names.next().value);


//Generator Example
function* sayNames() {
  yield 'Jack';
  yield 'Jill';
  yield 'John';
}

const name = sayNames();
console.log(name.next());
console.log(name.next().value);

//ID Generator Example
function* createIDs() {
  let index = 0;
  while(true) {
    yield index++;
  }
}

const gen = createIDs();
console.log(name.next().value);//0
console.log(name.next().value);//1
console.log(name.next().value);//2
console.log(name.next().value);//3



