import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDAY912VJbAt9WfhiAid2NiUTUA2jehNXk",
  authDomain: "portfolio-94a3c.firebaseapp.com",
  projectId: "portfolio-94a3c",
  storageBucket: "portfolio-94a3c.appspot.com",
  messagingSenderId: "587163436888",
  appId: "1:587163436888:web:fe9586a72d591f7c97872d",
  measurementId: "G-C1609X65KE"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
