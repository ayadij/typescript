// Function declarationm // hoisting // processed when code is run // can be run anywhere
function fullName(first, last) {
    return first + " " + last;
}
// Function expression // can only be called after the expression is defined // order matters
var otherFullName;
otherFullName = function (first, last) {
    return first + " " + last;
};
var thirdFullName = function (first, last) {
    return first + " " + last;
};
console.log(fullName('Aya', 'Dijkwel'));
console.log(otherFullName('Caleb', 'Moore'));
console.log(thirdFullName('Moa', 'Stigsson'));
//# sourceMappingURL=017_function_declarations_vs_expressions.js.map