// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9JxS7n-Rn48mDNNoaQQ_plzq53UfA12Q",
  authDomain: "gadget-warehouse-management.firebaseapp.com",
  projectId: "gadget-warehouse-management",
  storageBucket: "gadget-warehouse-management.appspot.com",
  messagingSenderId: "870482636916",
  appId: "1:870482636916:web:5209c9c208b788fb826121",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
