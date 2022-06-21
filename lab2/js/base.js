'use strict';

const profiles = [
  {
    userId: 1,
    email: '1@gmail.com',
    firstName: 'qqq',
    lastName: 'www',
    password: 'zvfrfc',
    gender: 'Male',
    birthday: '11-11-2001',
  },
  {
    userId: 2,
    email: '2@gmail.com',
    firstName: 'zzz',
    lastName: 'xxx',
    password: 'zvfrfc2',
    gender: 'Male',
    birthday: '11-12-2001',
  },
];

if (!localStorage.getItem('allUsers')) {
  localStorage.setItem('allUsers', JSON.stringify(profiles));
}

if (!localStorage.getItem('currentUserIndex')) {
  localStorage.setItem('currentUserIndex', -1);
}
