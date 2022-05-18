import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {getFirestore, doc, getDoc, query, where, collection, getDocs} from "firebase/firestore/lite";


const firebaseConfig = {
    apiKey: "AIzaSyAPGrmxYynXZMwJ7NkgE9gyDvlZM7enxoo",
    authDomain: "reactproductos2022.firebaseapp.com",
    projectId: "reactproductos2022",
    storageBucket: "reactproductos2022.appspot.com",
    messagingSenderId: "21226357193",
    appId: "1:21226357193:web:a767f18696dd1bf3a72818"
};

const app = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(app);

export default firestoreDB;

export async function getAllItems(){

    const miColec = collection(firestoreDB, "productos");
    /* getDocs(miColec).then( result => console.log(result)); */
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