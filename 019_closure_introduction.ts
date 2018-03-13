
// method
function lineup() {
  var nowBatting : number = 1;

  return {
    nextBatter() { nowBatting++ },
    currentBatter() { return nowBatting }
  }
}


// process
let batters = lineup();


// print 
console.log(batters.currentBatter());
batters.nextBatter();
console.log(batters.currentBatter());
batters.nextBatter();
console.log(batters.currentBatter());

let pitchers = lineup();
console.log(pitchers.currentBatter());


// all funcitons in js are closures

// a loop could do that.. yeah.. but this batters variable is a living breathing object. it has maintainted its state even tho it has been called 3 times. even tho the process ran and returend items, we were able to go back in and change methods
// this is powerful. say you want to retrieve posts form an API in anguar development. use a closer much like
// let batters = lineup();
//
// has the functionality of classes/object
// has the process of being an object without being an object
// 
