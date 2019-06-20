const jokesBtn = document.querySelector('.get-jokes');
jokesBtn.addEventListener('click',getJokes);

function getJokes(e) {
  console.log('Getting jokes...');
  const number = document.querySelector('input[type="number"]').value;
  console.log(`Getting ${number} jokes`);

  const xhr = new XMLHttpRequest();
  
  xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`,true);
  
  xhr.onprogress = function() {
    console.log('LOADING...');
    document.querySelector('.jokes').innerHTML = "<h1>Loading...</h1>";
  }
  
  xhr.onload = function() {
  if(this.status === 200){
      const result = JSON.parse(this.responseText);
      const jokes = result.value;
      console.log(jokes);
      let output = '';
      if(result.type === 'success'){
        jokes.forEach(joke => {
          output += `<li>${joke.joke}</li>`;
        });
      }else{
        output += '<li>Something went wrong!</li>';
      }
      document.querySelector('.jokes').innerHTML = output;
    }
  }
  
  xhr.onerror = function() {
    console.log('API Error',this.status);
  }
  
  xhr.send();
  
  e.preventDefault();
}