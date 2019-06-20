let re; //Initializing a variable re for regular expression.
//We will set a regular expression literal to this variable.
//Way to define a reguar expression literal is by enclosing it inside 2 forward slashes.
/*
re = /hello/; //regular expression literal has this syntax of 2 forward slashes.
//Above is a regular expression, which matches if input has word hello in it or not.
console.log(re);//It will print /hello/ as it is.
console.log(re.source); // Will print only hello and will disregard forward slashes.


//Functions to evaluate regular expressions.

//1 - exec() function. It returns results in an array if its a match else returns null.

const result = re.exec('hello world');
console.log(result);
//Prints - ["hello",index:0,input:"hello world"] this tells input has hello in it and it starts from index 0.

result = re.exec('hi world');
console.log(result); // Prints null as its not a match.

//2 - test() function. Returns true or false.
result = re.test('hello');
console.log(result); // Prints true

result = re.test('Hello');
console.log(result); // Prints false cause of case issue.

//To make our regular expression case insensitive, add 'i' character to it

re = /hello/i; // i = case insensitive

result = re.test('Hello');
console.log(result); // Prints true now

//Like i is a flag for case insensitivity, there is another flag 'g'.
//g flag is Global search, it means its gonna search all occurrences of hello in entire paragraph or input and not just the first one.
re = /hello/g; // g = global search

//3 - match() function returns result array or null.
const str = 'Hello there';
result = str.match(re);
console.log(result);

//4 - search() function. Returns the index of first match else -1.
const str = 'Hello there';
result = str.search(re);
console.log(result);


//5 - replace() func. Returns a new string with some or all matches of a pattern.
const str = 'Hello there';
const newStr = str.replace(re,'Hi');
console.log(newStr); // Prints Hi There
*/

//Literal characters
re = /hello/i;

//Metacharacter symbols

//Must start with
re = /^h/i; // '^' means input must start with character next to ^, in this case input should start with h.

//Must end with
re = /d$/i; // '$' means input must end with the character, inthis case with d.

//Chack whole world start and end with
re = /^hello$/i; //its must start with hello and must end with hello. case insensitive coz of i flag.

//Priod meta character to match any one character
re = /^h.llo$/i; // '.' means matches any one character. so hello or hpllo or hallo all are good.

//Asterisk to match 0 or more characters
re = /h*llo/i; // '*' means any character 0 or more times.

//Optional meta character
re = /gre?a?y/i;// '?' means optional. Means in given word there can be or not characters e and a as both are optional.

//Escape characters - to escape literals like \ or ? or "" etc
re = /gre?a?y\?/i; // Prints Grey? keeping ? a literal and not optional metachar.

//String to match
const str = 'Hello World';

//Log result using exec() function.
const result = re.exec(str);
console.log(result);

// Lets create a custom function to validate input string with our expression
function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} dose not match ${re.source}`);
  }
}

reTest(re,str);