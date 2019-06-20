/** 
 * Easy HTTP Library
*/

class EasyHttp {

  //Make an HTTP GET request
  get(url) {
    return new Promise((resolve,reject) => {
      fetch(url)
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    })
  }

  //Make an HTTP POST request
  post(url,data) {
    return new Promise((resolve,reject) => {
      fetch(url,{
        method:'POST',
        headers: {
          'Content-type':'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    })
  }

  //Make an HTTP PUT request
  put(url,data) {
    return new Promise((resolve,reject) => {
      fetch(url,{
        method:'PUT',
        headers: {
          'Content-type':'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    })
  }

  //Make a Delete requst

  delete(url) {
    return new Promise((resolve,reject) => {
      fetch(url,{
        method:'DELETE',
        headers: {
          'Content-type':'application/json'
        }
      })
      .then(res => res.json())
      .then(data => resolve('Resource deleted!'))
      .catch(err => reject(err));
    })
  }

}