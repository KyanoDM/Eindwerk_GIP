import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref } from "firebase/database";





const firebaseConfig = {
    apiKey: "AIzaSyCG-BjnGE1V3X_18oxB325QroJ4UNftec8",
    authDomain: "weatherdata-a36d3.firebaseapp.com",
    databaseURL: "https://weatherdata-a36d3-default-rtdb.europe-west1.firebasedatabase.app/",
    storageBucket: "weatherdata-a36d3.appspot.com",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();
const distanceRef = ref(db, 'users/' + usedId + '/distance')

onValue(distanceRef, (snapshot) => {
    const data = snapshot.val();
    updateDistance(postElement, data);
});