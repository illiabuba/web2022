
function checkName(name) {
  if (name.length < 4) {
    alert("Too short name");
    return false;
  }
  return true;
}
function checkPassword(password) {
  if (password.length < 6) {
    alert("Too short password");
    return false;
  }
  return true;
}

class Model {
  constructor() {
    this.currentUserIndex = localStorage.getItem("currentUserIndex");
    this.allUsers = JSON.parse(localStorage.getItem("allUsers"));
  }

  loginProfile = () => {
    let currentAcc = -1;
    let currentAccIndex = -1;
    const contactsLoginEmail = document.getElementById("login-email");
    const contactsLoginPassword = document.getElementById("login-password");

   
    currentAcc = this.allUsers.find(
    (acc) => acc.email === contactsLoginEmail.value);
    if (typeof currentAcc === "undefined") {
      alert("Acc with this email dosen't exist ");
      return;
    } else {
      currentAccIndex = this.allUsers.findIndex(
        (acc) => acc.email === contactsLoginEmail.value);
      if (currentAcc.password === contactsLoginPassword.value) {
        localStorage.setItem("currentUserIndex", currentAccIndex);
        document.location.href = "./profile.html";
      } else {
        alert("Wrong password");
        contactsLoginPassword.value = "";
        return;
      }
    }
  };

  logoutProfile = () => {
    
    localStorage.setItem("currentUserIndex", -1);
      // logoutLink.innerHTML = "LOGOUT";
  };

  registrProfile = () => {
    const userId = JSON.parse(localStorage.getItem('allUsers')).length + 1;
    const contactsRegisterEmail = document.getElementById("email-register");
    const contactsRegisterFirstName = document.getElementById("first-name-register");
    const contactsRegisterLastName = document.getElementById("last-name-register");
    const contactsRegisterPassword = document.getElementById(
      "password-register"
    );
    const contactsRegisterBirthday = document.getElementById(
      "birthdate-register"
    );
    const contactsRegisterMale = document.getElementById("inlineRadio1");
    const contactsRegisterFemale = document.getElementById(
      "inlineRadio2"
    );
    let gender = -1;
    const newProfile = {};
    
      if (checkPassword(contactsRegisterPassword.value)) {
        if (contactsRegisterFirstName.value.trim() === "") {
          alert("Select your first name");
          return;
        }
        if (contactsRegisterLastName.value.trim() === "") {
          alert("Select your last name");
          return;
        }
        if (contactsRegisterBirthday.value === "") {
          alert("Select your birthday");
          return;
        }
        if (contactsRegisterMale.checked) {
          gender = "Male";
        } else if (contactsRegisterFemale.checked) {
          gender = "Female";
        } else {
          alert("Select yours gender");
          return;
        }
        newProfile.userId = userId;
        newProfile.email = contactsRegisterEmail.value;
        newProfile.firstName = contactsRegisterFirstName.value;;
        newProfile.lastName = contactsRegisterLastName.value;;
        newProfile.password = contactsRegisterPassword.value;
        newProfile.gender = gender;
        newProfile.birthday = contactsRegisterBirthday.value;
        this.allUsers.push(newProfile);
        localStorage.setItem("allUsers", JSON.stringify(this.allUsers));
        document.location.href = "./login.html";
      }
  };
}
