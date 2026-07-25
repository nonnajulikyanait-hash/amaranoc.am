// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyA5Av-xVDrDWRXqJdpWVT1LMSpx3m2NPYQ",
//   authDomain: "aranoc-am.firebaseapp.com",
//   projectId: "aranoc-am",
//   storageBucket: "aranoc-am.firebasestorage.app",
//   messagingSenderId: "453033838051",
//   appId: "1:453033838051:web:401b8f109f26ba3fac4cd6",
//   measurementId: "G-51P0PVGBRY"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA5Av-xVDrDWRXqJdpWVT1LMspx3m2NPYQ",
  authDomain: "aranoc-am.firebaseapp.com",
  databaseURL: "https://aranoc-am-default-rtdb.firebaseio.com", // Սա պետք է ավելացնեք, որպեսզի բազան աշխատի
  projectId: "aranoc-am",
  storageBucket: "aranoc-am.appspot.com",
  messagingSenderId: "453033838051",
  appId: "1:453033838051:web:401b8f109f26ba3fac4cd6",
  measurementId: "G-51P0PVGBRY"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);