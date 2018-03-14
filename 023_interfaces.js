function profile(user) {
    return "Welcome, " + user.email;
}
var realUser = {
    email: 'test@test.com',
    firstName: "Test",
    lastName: "Tester"
};
console.log(profile(realUser));
console.log(realUser.email);
//# sourceMappingURL=023_interfaces.js.map