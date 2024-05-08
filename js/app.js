// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-analytics.js";

// const firebaseConfig = {
//     apiKey: "AIzaSyDlMH80keBrnI80WUCDwoRrcsOuVj2lNPM",
//     authDomain: "serragoktugwedding-rsvp.firebaseapp.com",
//     databaseURL: "https://serragoktugwedding-rsvp-default-rtdb.europe-west1.firebasedatabase.app",
//     projectId: "serragoktugwedding-rsvp",
//     storageBucket: "serragoktugwedding-rsvp.appspot.com",
//     messagingSenderId: "178955446901",
//     appId: "1:178955446901:web:5646c682181687422de63c",
//     measurementId: "G-BFHHVNWX4V"
//   };

// // Initialize Firebase
// initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig);
// var database = firebase.database().ref();

// console.log("database...")


// Import the functions you need from the SDKs you need
import {
  initializeApp
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";

import {
  getDatabase,
  set,
  get,
  update,
  remove,
  ref,
  child,
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";

import { getFirestore, getDocs, collection } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

import {
  getAnalytics
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlMH80keBrnI80WUCDwoRrcsOuVj2lNPM",
  authDomain: "serragoktugwedding-rsvp.firebaseapp.com",
  databaseURL: "https://serragoktugwedding-rsvp-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "serragoktugwedding-rsvp",
  storageBucket: "serragoktugwedding-rsvp.appspot.com",
  messagingSenderId: "178955446901",
  appId: "1:178955446901:web:5646c682181687422de63c",
  measurementId: "G-BFHHVNWX4V"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const db = getDatabase();

// const analytics = getAnalytics(app);

//listen for submit event//(1)
document
  .getElementById('registrationform')
  .addEventListener('submit', formSubmit);

//Submit form(2)
function formSubmit(e) {
  e.preventDefault();
  console.log("send")
  // Get Values from the DOM
  // let name = document.querySelector('#name').value;
  // let email = document.querySelector('#email').value;
  // let password = document.querySelector('#password').value;

  let name = document.getElementById("fname").value;
  let surname = document.getElementById("lname").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("mob").value;
  var no_attendees = document.getElementById("no_attendees").options[document.getElementById("no_attendees").selectedIndex].value;
  var attendance = document.getElementById("attendance").options[document.getElementById("attendance").selectedIndex].value;

  console.log(validate(6));
  console.log(name, surname, email, phone, no_attendees, attendance)

  if (validate(6)){
    sendMessage(name, surname, email, phone, no_attendees, attendance); 
  }
}

function sendMessage(name, surname, email, phone, no_attendees, attendance) {
  console.log("trying to send")

  const database = getDatabase();

  set(ref(database, 'users/' + Math.floor(Math.random() * 10000000)), {
    name: name,
    surname: surname,
    email: email,
    phone: phone,
    no_attendees: no_attendees,
    attendance: attendance
  }).then(() => {
    document.getElementById("card-attendance").style.display = "none";
    document.getElementById("card-attendance-message").style.display = "block";

    
    // //Show Alert Message(5)
    // document.querySelector('.alert').style.display = 'block';
    // //Hide Alert Message After Seven Seconds(6)
    // setTimeout(function () {
    //   document.querySelector('.alert').style.display = 'none';
    // }, 7000);
    document.getElementById('registrationform').reset();
    console.log("sent")
  }).catch((error) => {
    alert(error)
  })
}