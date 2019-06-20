const http = new easyHTTP();

//Get Posts
// http.get("https://jsonplaceholder.typicode.com/posts",
// function(error, posts){
//   if (error) {
//     console.error(error);
//   } else {
//     console.log(posts);
//   }
// });


//GET Single Post
// http.get("https://jsonplaceholder.typicode.com/posts/1",
// function(error, posts){
//   if (error) {
//     console.error(error);
//   } else {
//     console.log(posts);
//   }
// });

//Create Post
const data = {
  title: "Custom Post",
  body: "Custom Post body11111"
};
// http.post("https://jsonplaceholder.typicode.com/posts",data,function(err,post){
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(post);
//   }
// });


//Update Post
// http.put("https://jsonplaceholder.typicode.com/posts/5",data,function(err,post){
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(post);
//   }
// });

//Delete Post
http.delete("https://jsonplaceholder.typicode.com/posts/1",
function(error, response){
  if (error) {
    console.error(error);
  } else {
    console.log(response);
  }
});
