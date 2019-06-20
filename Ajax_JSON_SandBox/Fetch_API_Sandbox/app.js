const btn_getText = document.getElementById('button1');
const btn_getJson = document.getElementById('button2');
const btn_getAPIData = document.getElementById('button3');

btn_getText.addEventListener('click',getText);
btn_getJson.addEventListener('click',getJson);
btn_getAPIData.addEventListener('click',getApiData);

//Get local text file data
function getText() {
  fetch('data.txt')
  .then(function(response){
    return response.text();
  })
  .then(function(data){
    document.getElementById('output').innerHTML = data;
  }).catch(function(error){
    console.log("Error : "+error);
  });
}

//Get local JSON file data
function getJson() {

  fetch('post.json')
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    let output = '';
    data.forEach(post => {
      output += `<tr><td>${post.title}</td><td>${post.body}</td></tr>`;
    });
    document.getElementById('table').innerHTML = output;
  }).catch(function(error){
    console.log("Error : "+error);
  });

}

function getApiData(){

  fetch('https://api.github.com/users')
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    let output = '';
    data.forEach(user => {
      output += `<tr><td>${user.login}</td><td>${user.node_id}</td></tr>`;
    });
    document.getElementById('table').innerHTML = output;
  }).catch(function(error){
    console.log("Error : "+error);
  });

  //document.getElementById('output').innerHTML = "<h1>API Data</h1>";
}
