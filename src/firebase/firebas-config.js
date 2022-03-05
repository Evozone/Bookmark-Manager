import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_H6uZMaLcO_awBcistxAQu7XcQ90iVaw",
  authDomain: "bookmark-manager-2617.firebaseapp.com",
  databaseURL: "https://bookmark-manager-2617-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "bookmark-manager-2617",
  storageBucket: "bookmark-manager-2617.appspot.com",
  messagingSenderId: "142193613472",
  appId: "1:142193613472:web:2b4e21abd90d0f5b0d47c5",
  measurementId: "G-GR8NCNZW51"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const fs = getFirestore(app);
export const provider = new GoogleAuthProvider();