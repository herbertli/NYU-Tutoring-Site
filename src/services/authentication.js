export const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    this.user = {
      firstName: "Joe",
      lastName: "Doe",
      email: "example@example.com"
    }
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    this.user = null;
    setTimeout(cb, 100);
  },
  user: null
};