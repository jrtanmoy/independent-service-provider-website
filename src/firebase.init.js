import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBIWdlatC5FyYq-_SPVQkeRlOnAOlePnKo",
  authDomain: "independent-service-prov-3df5f.firebaseapp.com",
  projectId: "independent-service-prov-3df5f",
  storageBucket: "independent-service-prov-3df5f.appspot.com",
  messagingSenderId: "963589333854",
  appId: "1:963589333854:web:f84422e909a501450a25cf"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;