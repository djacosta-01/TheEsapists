import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtOoz1kXGAjEPwnH9ZdItE8huftEiQ_W4",
  authDomain: "keck-escape-room.firebaseapp.com",
  projectId: "keck-escape-room",
  storageBucket: "keck-escape-room.appspot.com",
  messagingSenderId: "250104678734",
  appId: "1:250104678734:web:2bc78946b6d5e9ed0db61f",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
