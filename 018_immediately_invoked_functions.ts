
var names : string[] = ['Jordan', 'Tiffany', 'Kristine'];
var counter : number = 0;

(function() {
  for (let name in names) {
    counter++;
  }
})();

console.log(counter);


// functions that are ran whent he interpreter or parser reaches that line of code

// syntax.       the parenthesis 