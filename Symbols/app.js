const sym1 = Symbol();
const sym2 = Symbol('sym2');

console.log(typeof sym2);

// No 2 Symbols can ever be equal.
console.log(Symbol() === Symbol()); // false
console.log(Symbol('123') === Symbol('123')); // false

console.log(`Hello ${String(sym1)}`); // Hello Symbol()
console.log(`Hello ${sym1.toString()}`); // Hello Symbol()

//Unique Object Keys
const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myObj = {};

myObj[KEY1] = 'Prop1';
myObj[KEY2] = 'Prop2';
myObj.KEY3 = 'Prop3';
myObj.KEY4 = 'Prop4';
console.log(myObj[KEY1]); // Prop1
console.log(myObj[KEY2]); // Prop2

//Symbols are not enumerable in for...in loop

for(let i in myObj) {
  console.log(`${i}: ${myObj[i]}`); // O/P : KEY3:Prop3 and KEY4:Prop4
  //KEY1 and KEY2 are not show as Symbols are not enumerable.
}

//Symbols are ignored in JSON.stringify
console.log(JSON.stringify({key:'prop'})); // Prints normally as JSON as no Symbol used.
console.log(JSON.stringify({[Symbol('sym1')]:'prop'})); // Nothing shown as Symbols are used.
