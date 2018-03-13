let x : number = 100;

// (x = 100) is assignation, not comparison 
// (x == "100")cant compare type number to string


if(x == 200) { // checks the value but not datatype in js
 console.log('Condition passed');
}

if(x === 100) { // checks the value AND datatype in js. === is not a ts things
 console.log('Condition passed');
}

if(x != 100) {
 console.log('Condition passed');
}

if(x > 100) {
 console.log('Condition passed');
}

if(x >= 100) {
 console.log('Condition passed');
}

if(x < 100) {
 console.log('Condition passed');
}

if(x <= 100) {
 console.log('Condition passed');
}