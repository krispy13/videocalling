import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // your firebase config
  apiKey: "XXXXXXXXXXXXXXX",

  authDomain: "XXXXXXXXXXXXXX",

  projectId: "XXXXXXXXXXXXXXX",

  storageBucket: "XXXXXXXXXXXXXXXX",

  messagingSenderId: "XXXXXXXXXXXXXXXX",

  appId: "XXXXXXXXXXXXXXXXXXXXX",

  measurementId: "XXXXXXXXXXXXXXX"
};

const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const auth = getAuth(app);

export { auth, firestore };
