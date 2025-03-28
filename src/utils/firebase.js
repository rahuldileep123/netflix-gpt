// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPoM5vU5lcVnd54IiFriOPopar8V2yduE",
  authDomain: "netflixgpt-fdf3d.firebaseapp.com",
  projectId: "netflixgpt-fdf3d",
  storageBucket: "netflixgpt-fdf3d.firebasestorage.app",
  messagingSenderId: "510684218383",
  appId: "1:510684218383:web:607074f39a8729a503cf7a",
  measurementId: "G-LQ9HF1R7TK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();