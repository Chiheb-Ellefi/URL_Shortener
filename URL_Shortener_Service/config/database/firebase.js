// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-V-1tJlKGiypF6_z0_cSfvSAcEa8JnWs",
  authDomain: "brew-creww-1fbfe.firebaseapp.com",
  databaseURL: "https://brew-creww-1fbfe-default-rtdb.firebaseio.com",
  projectId: "brew-creww-1fbfe",
  storageBucket: "brew-creww-1fbfe.appspot.com",
  messagingSenderId: "209263211753",
  appId: "1:209263211753:web:b1ee3da696938a8b7dec78",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
