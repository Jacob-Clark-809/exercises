let Account = (function() {
  let validChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let email;
  let password;
  let firstName;
  let lastName;

  function generateDisplayName() {
    let result = '';
    for (let index = 0; index < 16; index += 1) {
      let randomIndex = Math.floor(Math.random() * validChars.length);
      result += validChars[randomIndex];
    }

    return result;
  }

  return {
    displayName: '',

    init(iEmail, iPassword, iFirstName, iLastName) {
      email = iEmail;
      password = iPassword;
      firstName = iFirstName;
      lastName = iLastName;
      this.displayName = generateDisplayName();
      return this;
    },

    reanonymize(passwordAttempt) {
      if (passwordAttempt === password) {
        this.displayName = generateDisplayName();
        return true;
      } else {
        return 'Invalid Password';
      }
    },

    resetPassword(passwordAttempt, newPassword) {
      if (passwordAttempt === password) {
        password = newPassword;
        return true;
      } else {
        return 'Invalid Password';
      }
    },

    firstName(passwordAttempt) {
      if (passwordAttempt === password) {
        return firstName;
      } else {
        return 'Invalid Password';
      }
    },

    lastName(passwordAttempt) {
      if (passwordAttempt === password) {
        return lastName;
      } else {
        return 'Invalid Password';
      }
    },

    email(passwordAttempt) {
      if (passwordAttempt === password) {
        return email;
      } else {
        return 'Invalid Password';
      }
    },
  };
})();

let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'));    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')); // logs true

let displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false