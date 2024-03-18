import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCADaqkpzGD35Ic-xBXpqGHsE04W3tiU9g",
  authDomain: "bwitter-5f74e.firebaseapp.com",
  projectId: "bwitter-5f74e",
  storageBucket: "bwitter-5f74e.appspot.com",
  messagingSenderId: "396504278007",
  appId: "1:396504278007:web:a3cbc7ea058c37d14644f2",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
