import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA9x9d-KqtN-0SNsh6vh0nFMjqJ1UxQdEU",
  authDomain: "port-2ad37.firebaseapp.com",
  projectId: "port-2ad37",
  storageBucket: "port-2ad37.appspot.com",
  messagingSenderId: "1093119027359",
  appId: "1:1093119027359:web:ce7627894986bf5180daaa",
  measurementId: "G-GN1549JYK5"
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);