class Invoice {
  companyProfile : string;

  constructor(public name, public city, public state) {
    this.companyProfile = name + ", " + city + ", " + state;
  }
}

//datatypes not specified.. so it is automatically 'any'
var googleInvoice = new Invoice('Google', 'Mountain View', 'State');
var yahooInvoice = new Invoice('Yahoo', 'SF', 'State');


console.log(googleInvoice.companyProfile);
console.log(yahooInvoice.companyProfile);


// 