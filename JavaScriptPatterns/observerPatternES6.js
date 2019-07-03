//It allows to subscribe and unsubscribe to certain events.


//Let's define a constructor function
class EventObserver {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
    console.log(`You are now subscribed to ${fn.name}`);
  }

  unsubscribe(fn) {
    //Filter out from the list whatever matches the callback
    // function. If there is no match, the callback gets to stay
    // on the list. The filter returns a new list ans reassigns
    // the list of onservers.
    this.observers = this.observers.filter(function(item){
      if(item !== fn){
        return item;
      }
    });
    console.log(`You are now unsubscribed from ${fn.name}`);
  }

  fire() {
    this.observers.forEach(function(item) {
      item.call();
    });
  }

}

const click = new EventObserver();

// Event Listeners

document.querySelector('.sub-ms').addEventListener('click', function(){
  click.subscribe(getCurrMilliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click', function(){
  click.unsubscribe(getCurrMilliseconds);
});

document.querySelector('.sub-s').addEventListener('click', function(){
  click.subscribe(getCurrSeconds);
});

document.querySelector('.unsub-s').addEventListener('click', function(){
  click.unsubscribe(getCurrSeconds);
});

document.querySelector('.fire').addEventListener('click', function(){
  click.fire();
});

//Click handlers
const getCurrMilliseconds = function() {
  console.log(`Current MilliSeconds: ${new Date().getMilliseconds()}`);
}

const getCurrSeconds = function() {
  console.log(`Current Seconds: ${new Date().getSeconds()}`);
}