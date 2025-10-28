import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDdckYXQ67QxrfSUVGt9L0GI0HLu4gc-YQ",
  authDomain: "ideavault-web.firebaseapp.com",
  projectId: "ideavault-web",
  storageBucket: "ideavault-web.firebasestorage.app",
  messagingSenderId: "1045044544401",
  appId: "1:1045044544401:web:46ee58643ab433a1101030",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
