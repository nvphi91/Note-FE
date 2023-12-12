import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
    apiKey: "AIzaSyA-2nqGEuAaNsCd_n8nVExcmHCR5fRF9T0",
    authDomain: "note-app-6e12e.firebaseapp.com",
    projectId: "note-app-6e12e",
    storageBucket: "note-app-6e12e.appspot.com",
    messagingSenderId: "858464363641",
    appId: "1:858464363641:web:69bf6d52c2c56181eda0a8",
    measurementId: "G-XCSG6VM5KZ"
  };
  
  const app = initializeApp(firebaseConfig);
getAnalytics(app);