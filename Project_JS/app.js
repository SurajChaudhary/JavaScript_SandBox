document.getElementById('button').addEventListener('click',
loadData);

//Ajax way of calling asynchronously,below is GET request
function loadData() {
  //Create an XHR(XmlHttpTrequest) Object
  const xhr = new XMLHttpRequest();

  //OPEN
  xhr.open('GET','data.txt',true);
  console.log('ReadyState',xhr.readyState);//ReadyState is 1
  //before onLoad we used to use onreadystatechange e.g:
  /*
      xhr.onreadystatechange = function() {
        if (this.status === 200 && this.readyState === 4) {
          console.log(this.responseText);
        }
      }
  */
 /*
      We have another optional method "progress" used for
      spinners/loaders
 */
  xhr.onprogress = function() {
    console.log('ReadyState',xhr.readyState);//ReadyState is 3
  }
  xhr.onload = function() {
    console.log('ReadyState',xhr.readyState);//ReadyState is 4
    if (this.status === 200) {
      console.log(this.responseText);
      document.getElementById('output').innerHTML = `
      <h1>${this.responseText}</h1>`;
    }
  }

  //xhr.onerror runs only if something went wrong with request
  xhr.onerror = function() {
    console.log('Request error.');
  }
  xhr.send();
}

/* 
  Ready State values :
  0: Request Not initiated
  1: Server connection established
  2: Request received
  3: Processing request
  4: Request finished and response is ready.

  HTTP Statuses:
  200: OK
  403: Forbidden
  404: Not Found
*/