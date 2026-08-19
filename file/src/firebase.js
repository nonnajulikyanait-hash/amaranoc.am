import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA5Av-xVDrDWRXqJdpWVT1LMspx3m2NPYQ",
  authDomain: "aranoc-am.firebaseapp.com",
  databaseURL: "https://aranoc-am-default-rtdb.firebaseio.com",
  projectId: "aranoc-am",
  storageBucket: "aranoc-am.appspot.com",
  messagingSenderId: "453033838051",
  appId: "1:453033838051:web:401b8f109f26ba3fac4cd6",
  measurementId: "G-51P0PVGBRY"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);