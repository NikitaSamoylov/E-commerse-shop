import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBlAvcxklfCFkWZYiHm78PfbRUvoXMf2Ts",
  authDomain: "testproj-b8a80.firebaseapp.com",
  projectId: "testproj-b8a80",
  storageBucket: "testproj-b8a80.appspot.com",
  messagingSenderId: "483276498748",
  appId: "1:483276498748:web:0377c1912ea6d41371a039"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;