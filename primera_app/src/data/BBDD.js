
import { initializeApp } from "firebase/app";
import {getFirestore, doc, Timestamp, addDoc, getDoc, setDoc, query, where, collection, getDocs} from "firebase/firestore/lite";
import clearCart from "../store/CartContext";
import Swal from "sweetalert2";


const firebaseConfig = {

    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID,
};

const app = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(app);

export default firestoreDB;


export async function getAllItems(){

    const miColec = collection(firestoreDB, "productos");
    const productosSnap = await getDocs(miColec);
    return productosSnap.docs.map(doc =>{
        return{
        ...doc.data(),
        id: doc.id
        }});
}


export async function getItemsByCategory(categoryid){
    const miColec = collection(firestoreDB, "productos");
    const queryProduct = query(miColec, where("Categoria", "==", categoryid));  
    const productosSnap = await getDocs(queryProduct);

    return productosSnap.docs.map(doc =>{
        return{
        ...doc.data(),
        id: doc.id
        }}); 
}


export async function getItem(id){
    const miColec = collection(firestoreDB, "productos");
    const productoRef = doc(miColec, id);
    const productoSnap = await getDoc(productoRef);

        return{
            ...productoSnap.data(),
            id: productoSnap.id
        }
}

export async function createBuyOrder(orderData){
    const buyTimestamp = Timestamp.now();
    const orderWithDate = {
        ...orderData, 
        date:buyTimestamp,
    }

    const miColec = collection(firestoreDB, "buyOrdenes");
    const ordenDoc = await addDoc(miColec, orderWithDate)
    

    Swal.fire({
        title: `Su compra ha sido confirmada con el numero ${ordenDoc.id}`,
        icon: 'success',
        showCancelButton: false,
        })
    .then(() => {
        window.location.reload();
    }
    )
    
    clearCart()
    
}

