
import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAzEI0CD3EF4L_dcNzzjq-sazWeM7hZsrg",
    authDomain: "oryza-dashboard.firebaseapp.com",
    projectId: "oryza-dashboard",
    storageBucket: "oryza-dashboard.appspot.com",
    messagingSenderId: "392478071009",
    appId: "1:392478071009:web:a14299474f5b4eb728bfa0",
    measurementId: "G-JG6RG267P4"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export { firebaseApp, auth };
