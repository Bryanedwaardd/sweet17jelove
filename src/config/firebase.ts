import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "API-KEY",
  authDomain: "AUTH-DOMAIN",
  projectId: "PROJECT-ID",
  storageBucket: "STORAGE-BUCKET",
  messagingSenderId: "SENDER-ID",
  appId: "APP-ID",
  measurementId: "MEASUREMENT-ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
