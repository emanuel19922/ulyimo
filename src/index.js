import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBgNTEQCl0RnU1RE8GsX-UUOP5hc7qkmg",
  authDomain: "coder-e21c2.firebaseapp.com",
  projectId: "coder-e21c2",
  storageBucket: "coder-e21c2.appspot.com",
  messagingSenderId: "106763274215",
  appId: "1:106763274215:web:1d56c17674de7075e89f42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App />
 
);

