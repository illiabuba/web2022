class View {
  constructor() {
    this.profileName = document.querySelectorAll('.profile-name');
    this.profileEmail = document.querySelector('.profile-email');
    this.profileBirthdate = document.querySelector('.profile-birthdate');
    this.profileGender = document.querySelector('.profile-gender');
    this.profileId = document.querySelector('.profile-id');
  }

  showProfile = (currentUserIndexView, allUsersView) => {
    if (+currentUserIndexView === -1) {
      return;
    } else {
      this.profileName.forEach((element) => element.innerHTML = allUsersView[currentUserIndexView].firstName + " " + allUsersView[currentUserIndexView].lastName)
      this.profileEmail.innerHTML = allUsersView[currentUserIndexView].email;
      this.profileBirthdate.innerHTML = allUsersView[currentUserIndexView].birthday;
      this.profileGender.innerHTML = allUsersView[currentUserIndexView].gender;
      this.profileId.innerHTML = allUsersView[currentUserIndexView].userId;
    }
  };
}
