// Boolean -- has a true or false value
let paidAccount : boolean = false;

// Number -- includes ints, floats, and decimals
let age : number = 33;
var taxRate : number = 7.5;

// String -- 
var fullName : string = "Aya Dijkwel";

// Array -- collection of one type, not a mix
var ages : number[] = [33, 28, 11];

// Tuple -- a structured collection of a mix of types
let player : [number, string, number, number];
player = [3, 'Corerra', .333, 33];

// Enum -- ability to set differnet stages and call them like methods
enum ApprovalStatus {Approved, Pending, Rejected};
let job : ApprovalStatus = ApprovalStatus.Pending;

// Any -- error prone
var apiData : any[] = [123, 'Jordan', false];

// Void -- for functions/methods, does action but doesnt return anything
function printOut(msg: string) : void {
  console.log(msg);
}

console.log("Done.");