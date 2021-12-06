import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DessertsContextProvider } from "./context/dessertContext";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5MIELH0i4qNp5pGq0BLTXBmFpDhPu1aY",
  authDomain: "paradise-cafe-4012.firebaseapp.com",
  projectId: "paradise-cafe-4012",
  storageBucket: "paradise-cafe-4012.appspot.com",
  messagingSenderId: "981234757029",
  appId: "1:981234757029:web:3d5e03ef8b10f578bccc4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <DessertsContextProvider>
    <App />
  </DessertsContextProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
