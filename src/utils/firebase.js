import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Add this import

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBB7PJ1sxGz42shSkTIaWb-bHYzmCsIF28",
  authDomain: "streamgpt-13c2e.firebaseapp.com",
  projectId: "streamgpt-13c2e",
  storageBucket: "streamgpt-13c2e.appspot.com",
  messagingSenderId: "586496347331",
  appId: "1:586496347331:web:887ba3a30605306703e676",
  measurementId: "G-EJ9XQPSC28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and export it
export const auth = getAuth(app);
