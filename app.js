import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyBnDMNY8yqYYWaWiqzk57QlibmhOFTjlPA",
  authDomain: "fjpl-d2dbc.firebaseapp.com",
  projectId: "fjpl-d2dbc",
  storageBucket: "fjpl-d2dbc.firebasestorage.app",
  messagingSenderId: "917833760111",
  appId: "1:917833760111:web:f5423e8cee682c7e4bbc9a"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


// فتح التسجيل

document.getElementById("showRegister").onclick = () => {
  document.getElementById("loginBox").classList.add("hidden");
  document.getElementById("registerBox").classList.remove("hidden");
};


// الرجوع للدخول

document.getElementById("showLogin").onclick = () => {
  document.getElementById("registerBox").classList.add("hidden");
  document.getElementById("loginBox").classList.remove("hidden");
};


// إنشاء حساب

document.getElementById("registerBtn").onclick = () => {

  const email = document.getElementById("newEmail").value;
  const password = document.getElementById("newPassword").value;


  createUserWithEmailAndPassword(auth, email, password)
  .then(() => {
    alert("تم إنشاء الحساب بنجاح");
  })
  .catch((error) => {
    alert(error.message);
  });

};


// تسجيل الدخول

document.getElementById("loginBtn").onclick = () => {

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;


  signInWithEmailAndPassword(auth, email, password)
  .then(() => {
    alert("تم تسجيل الدخول بنجاح");
  })
  .catch((error) => {
    alert(error.message);
  });

};
