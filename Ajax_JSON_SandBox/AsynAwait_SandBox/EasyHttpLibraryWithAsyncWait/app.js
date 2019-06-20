const http = new EasyHttp();

//Get Users
// http.get(' https://jsonplaceholder.typicode.com/users')
// .then(data => console.log(data))
// .catch(err => console.log(err));


//User Data
const data = {
  name: 'ABC',
  username:'XYZ',
  email:'pqr@gmail.com' 
};

//Create a POST request
// http.post(' https://jsonplaceholder.typicode.com/users',data)
// .then(data => console.log(data))
// .catch(err => console.log(err));

//Update a POST request
// http.put(' https://jsonplaceholder.typicode.com/users/2',data)
// .then(data => console.log(data))
// .catch(err => console.log(err));

//Update a POST request
http.delete(' https://jsonplaceholder.typicode.com/users/2')
.then(res => console.log(res))
.catch(err => console.log(err));