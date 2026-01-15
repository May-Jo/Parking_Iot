import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getDatabase, ref, onValue, set, update } 
  from "https://www.gstatic.com/firebasejs/12.7.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCpWOqKcUI5kDRqF3yQAKpr0PXMiDIOQT4",
  authDomain: "smart-parking-fb76f.firebaseapp.com",
  databaseURL: "https://smart-parking-fb76f-default-rtdb.firebaseio.com",
  projectId: "smart-parking-fb76f",
  storageBucket: "smart-parking-fb76f.firebasestorage.app",
  messagingSenderId: "29983685068",
  appId: "1:29983685068:web:05c37f8c3e98e6fea90569"
};

export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export { ref, onValue, set, update };
