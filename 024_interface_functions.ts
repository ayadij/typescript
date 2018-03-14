interface InvoiceFunc {
  (name : string, total : number) : void;
}
//makes a custom datatype that that function has to follow

let myInvoice : InvoiceFunc;
myInvoice = function(n, t) {
  console.log(n);
  console.log(t);
}

myInvoice("Google", 500);