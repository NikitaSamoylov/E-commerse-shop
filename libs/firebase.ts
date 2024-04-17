import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCIzOYLISyfIIJqPdcvxaSA3920FJS7PD4",
  authDomain: "electronixdb.firebaseapp.com",
  projectId: "electronixdb",
  storageBucket: "electronixdb.appspot.com",
  messagingSenderId: "924643025041",
  appId: "1:924643025041:web:c994779b945c724ac19f30"
};

const app = initializeApp(firebaseConfig);
export const ImgStorage = getStorage(app);