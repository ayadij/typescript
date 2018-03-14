//mimic a database query call. asynchonus 
// function saved to a variable
//this is a callback . we know because 
var dbQuery = function () {
    setTimeout(function () {
        console.log('Query results');
    }, 3000); // timed out for 3 seconds
};
// higher order function. takes in a method/ function as a param
function loadPage(q) {
    console.log("Header");
    q();
    console.log("Sidebar");
    console.log("Footer");
}
loadPage(dbQuery);
// think of the people asked to go to the drugstore example that brayden gave
// sets stuff up in a chain so that if it doesnt work you can give it exceptions like promises
// do this. if not, let me know and do that
//# sourceMappingURL=028_higher_order_functions_callbacks.js.map