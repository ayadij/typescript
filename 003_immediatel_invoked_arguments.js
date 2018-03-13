// Function expression
var fullName;
// function expression
fullName = function (first, last) {
    return first + " " + last;
};
console.log(fullName('Jordan', 'Hudgens'));
// Immediately invoked version
(function (first, last) {
    console.log(first + " " + last);
})('Tiffany', 'Hudgens');
// types can be enforced in typescript
//# sourceMappingURL=003_immediatel_invoked_arguments.js.map