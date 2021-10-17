import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

const config = {
  apiKey: "AIzaSyDRTvCBTaIgUIUnCemQ8eLI0OJ6bhhyEAA",
  authDomain: "chatty-app-3faed.firebaseapp.com",
  projectId: "chatty-app-3faed",
  storageBucket: "chatty-app-3faed.appspot.com",
  messagingSenderId: "114038523498",
  appId: "1:114038523498:web:345d2248524ac050426c13",
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();
