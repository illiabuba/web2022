class Controller {
  constructor() {
    this.view = new View();
    this.model = new Model();
  }
  
  profileRegisterHandler = () => {
    const RegisterBtn = document.querySelector('.register-button');
    RegisterBtn.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('here');
      this.model.registrProfile();
    });
  };

  profileLoginHandler = () => {
    const LoginBtn = document.querySelector('.login-button');
    LoginBtn.addEventListener('click', (e) => {
      e.preventDefault();
      this.model.loginProfile();
    });
  };

  profileLogoutHandler = () => {
    const logoutLink = document.querySelector(".logout-button");
    logoutLink.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('here');
      this.model.logoutProfile();
      document.location.href = "./login.html";
    })
  };
}

const myApp = new Controller();
