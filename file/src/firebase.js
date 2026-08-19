// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5Av-xVDrDWRXqJdpWVT1LMspx3m2NPYQ",
  authDomain: "aranoc-am.firebaseapp.com",
  databaseURL: "https://aranoc-am-default-rtdb.firebaseio.com",
  projectId: "aranoc-am",
  storageBucket: "aranoc-am.firebasestorage.app",
  messagingSenderId: "453033838051",
  appId: "1:453033838051:web:401b8f109f26ba3fac4cd6",
  measurementId: "G-51P0PVGBRY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export db and auth for your components
export const db = getDatabase(app);
export const auth = getAuth(app);