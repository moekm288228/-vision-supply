import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyD0MQj1q38Cngv25Y8abPJ4X-kqJYmhXEw",
  authDomain: "vision-supply.firebaseapp.com",
  projectId: "vision-supply",
  storageBucket: "vision-supply.firebasestorage.app",
  messagingSenderId: "146429442090",
  appId: "1:146429442090:web:881521639a2b2572bdeb53"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export { db, auth };