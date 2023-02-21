import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyB3Rr3DdTjuEaXAm0ARMZNY5tsXsaAY3pA",
	authDomain: "shop-60514.firebaseapp.com",
	projectId: "shop-60514",
	storageBucket: "shop-60514.appspot.com",
	messagingSenderId: "191879211680",
	appId: "1:191879211680:web:d138f0271c83f61a48f7c5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
