// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

console.log(process.env.REACT_APP_apiKey)
const firebaseConfig = {
    apiKey: "AIzaSyBbqupMt2JWwuKpOMCbZtxHwIAWdAM7UMw",
    authDomain: "ph-practice-e41f1.firebaseapp.com",
    projectId: "ph-practice-e41f1",
    storageBucket: "ph-practice-e41f1.appspot.com",
    messagingSenderId: "686907941083",
    appId: "1:686907941083:web:134b7b5f3f861fe66d6cf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;