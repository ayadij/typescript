// Boolean -- has a true or false value
var paidAccount = false;
// Number -- includes ints, floats, and decimals
var age = 33;
var taxRate = 7.5;
// String -- 
var fullName = "Aya Dijkwel";
// Array -- collection of one type, not a mix
var ages = [33, 28, 11];
// Tuple -- a structured collection of a mix of types
var player;
player = [3, 'Corerra', .333, 33];
// Enum -- ability to set differnet stages and call them like methods
var ApprovalStatus;
(function (ApprovalStatus) {
    ApprovalStatus[ApprovalStatus["Approved"] = 0] = "Approved";
    ApprovalStatus[ApprovalStatus["Pending"] = 1] = "Pending";
    ApprovalStatus[ApprovalStatus["Rejected"] = 2] = "Rejected";
})(ApprovalStatus || (ApprovalStatus = {}));
;
var job = ApprovalStatus.Pending;
// Any -- error prone
var apiData = [123, 'Jordan', false];
// Void -- for functions/methods, does action but doesnt return anything
function printOut(msg) {
    console.log(msg);
}
console.log("Done.");
//# sourceMappingURL=007_types.js.map