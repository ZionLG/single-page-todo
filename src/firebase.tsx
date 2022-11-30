import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC90RHpTdXwGxOEL6dlkWPwYK8IJYt5IVk",
  authDomain: "basictodo-5d872.firebaseapp.com",
  projectId: "basictodo-5d872",
  storageBucket: "basictodo-5d872.appspot.com",
  messagingSenderId: "916622343339",
  appId: "1:916622343339:web:d2bdf9bf71571d7b0b8bee",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db };
