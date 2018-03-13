

// Function declarationm // hoisting // processed when code is run // can be run anywhere
function fullName(first : string, last : string) : string {
  return first + " " + last;
}


// Function expression // can only be called after the expression is defined // order matters
var otherFullName : (first : string, last : string) => string;



otherFullName = function (first : string, last : string) {
  return first + " " + last;  
}

var thirdFullName : (first : string, last : string) => string = function (first : string, last : string) {
  return first + " " + last;  
}



console.log(fullName('Aya', 'Dijkwel'));
console.log(otherFullName('Caleb', 'Moore'));
console.log(thirdFullName('Moa', 'Stigsson'));