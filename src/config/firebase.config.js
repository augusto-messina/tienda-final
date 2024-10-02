
import { initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
apiKey: "AIzaSyCqA-U2mzZ0cZ7tu8CYrbRiWyP4TCeHCM4",
authDomain: "tienda-trishop.firebaseapp.com",
projectId: "tienda-trishop",
storageBucket: "tienda-trishop.appspot.com",
messagingSenderId: "12457560338",
appId: "1:12457560338:web:0be214c42f100a338acbcb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);