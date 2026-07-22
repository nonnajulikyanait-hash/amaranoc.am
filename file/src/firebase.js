
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Ավելացրու սա
import { getAuth } from "firebase/auth"; // Ավելացրու սա

const firebaseConfig = {
  apiKey: "AIzaSyCLkH4KAZwt0485pagnAYQLeDzZ3IPWSsg",
  authDomain: "chat-64147.firebaseapp.com",
  projectId: "chat-64147",
  storageBucket: "chat-64147.firebasestorage.app",
  messagingSenderId: "1007509998547",
  appId: "1:12087134492:web:e8c5589a23d9b306c692d9", // Նկատիր՝ այստեղ քո նախորդի appId-ն էր, համոզվիր որ սա ճիշտ է
  measurementId: "G-7SY8VQNRGP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Այս երկուսը պարտադիր են
export const db = getFirestore(app);
export const auth = getAuth(app);