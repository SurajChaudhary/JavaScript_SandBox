const posts = [
  {title:'Post One', body:'This is post one'},
  {title:'Post Two', body:'This is post two'},
  {title:'Post Three', body:'This is post three'}
];

/*
  Below code takes 2 secs to create a post but only 1 sec to get those posts.
  This is a typical example of server taking time in creating a resource
  but server is comparatively fast in getting them.
  In such cases we will miss the newly created resource. 
  So below, we won't see post four in our list.
 */
// function createPost(post) {
//   setTimeout(function() {
//     posts.push(post);
//   }, 2000);
// }

// function getPosts() {
//   setTimeout(function() {
//     let output = '';
//     posts.forEach(function(post){
//         output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// createPost({title:'Post Four', body:'This is post four'});
// getPosts();

/*
  Below code takes 2 secs to create a post but only 1 sec to get those posts.
  This is a typical example of server taking time in creating a resource
  but server is comparatively fast in getting them.
  In such cases we will miss the newly created resource. 
  but below we are passing a callback function to create post,
  which ensures to run that function, once create post is complete.
  Since we are passing getPosts as call back, it means even if create is taking longer,
  as soon as it completes, it will call back getPosts.
  So below, we will see post four in our list after 2 secs.
 */

function createPost(post,callback) {
  setTimeout(function() {
    posts.push(post);
    callback();//calling callBack function.
  }, 2000);
}

function getPosts() {
  setTimeout(function() {
    let output = '';
    posts.forEach(function(post){
        output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

//Passing getPosts as call back istead of calling it seperately.
//createPost({title:'Post Four', body:'This is post four'},getPosts);


//Above functionality using Promise, which is an alternative to callbacks in ES5
function createPost(post) {
  return new Promise(function(resolve, reject){
    setTimeout(function() {
      posts.push(post);
      let error = false;//Dummy flag to show that resolve is positive fallback and reject is in case of errors.
      if(!error){
        resolve();//calling promise's resolve function.
      }else{
        reject("Something went wrong!");
      }
    }, 2000);
  });
}

createPost({title:'Post Four', body:'This is post four'})
.then(getPosts)
.catch(function(msg){
  console.log(msg);
});
