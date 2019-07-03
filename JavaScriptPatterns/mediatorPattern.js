// Mediator pattern is a behavioral pattern like observer pattern.
// Idea is to have a mediator, which basically an interface for communicating with
// what are called colleagues.
//Best example is a chat room.


// We will have 2 constructor functions, one for the user and one for the chat room.
const User = function(name) {
  this.name = name;
  this.chatroom = null;
}

User.prototype = {
  send: function(message, to) {
    this.chatroom.send(message, this,to);
  },
  recieve: function(message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  }
}

const Chatroom = function () {
  let users = {}; //list of users

  return {
    register: function(user) {
      users[user.name] = user;
      user.chatroom = this;
    },
    send: function(message,from, to) {
      if(to){
        //Single User message
        to.recieve(message,from);
      }else {
        //Mass message
        for (const key in users) {
          if (users[key]!== from) {
            users[key].recieve(message,from);
          }
        }
      }
    }
  }
}

const brad = new User('Brad');
const jeff = new User('Jeff');
const tracy = new User('Tracy');

const mediator = new Chatroom();

mediator.register(brad);
mediator.register(jeff);
mediator.register(tracy);

brad.send('Hello Jeff',jeff);
tracy.send('Hello Brad',brad);
jeff.send('hi both');