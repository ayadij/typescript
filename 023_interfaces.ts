// like a contract // makes sure everything is explict
interface User {
  email : string;
  firstName? : string;
  lastName? : string; // ? means optional
}

function profile(user: User) : string {
  return `Welcome, ${user.email}`;
}

var realUser = {
  email: 'test@test.com',
  firstName: "Test",
  lastName: "Tester"
};

console.log(profile(realUser));
console.log(realUser.email)