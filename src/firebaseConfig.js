// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // Asegurar que GoogleAuthProvider está importado correctamente
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDlj1ie2Z3HigkMCgu4ViJ66mFaulF9Y20",
    authDomain: "datacruz-7a3f3.firebaseapp.com",
    projectId: "datacruz-7a3f3",
    storageBucket: "datacruz-7a3f3.firebasestorage.app",
    messagingSenderId: "616075634331",
    appId: "1:616075634331:web:19b6d1380eb1cd6c32883e"
  };

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider(); // Asegurarse de definir correctamente GoogleAuthProvider

export { auth, db, googleProvider }; // Exportar googleProvider correctamente