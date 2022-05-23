import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {getFirestore, doc, Timestamp, addDoc, getDoc, setDoc, query, where, collection, getDocs} from "firebase/firestore/lite";
import clearCart from "../store/CartContext";


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

export async function dataToFirebase(producto){
    const PRODUCTS = [{
        "precio": 1500,
        "title": "Botas",
        "thumbnailUrl": "../assets/img/productos/product_01.jpg",
        "reviews" : 25,
        "star": 2,
        "Categoria": "Calzados",
        "description": "Botas de cuero de alta calidad",
        "stock": 10
    },
    {
        "precio": 1300,
        "title": "Campera",
        "thumbnailUrl": "../assets/img/productos/product_02.jpg",
        "reviews" : 25,
        "star": 3.5,
        "Categoria": "Indumentaria",
        "description": "Campera de cuero de alta calidad",
        "stock": 10
    },
    {
        "precio": 1100,
        "title": "Bufandas",
        "thumbnailUrl": "../assets/img/productos/product_03.jpg",
        "reviews" : 25,
        "star": 3.2,
        "Categoria": "Indumentaria",
        "description": "Bufandas de cuero de alta calidad",
        "stock": 10
    },
    {
        "precio": 1250,
        "title": "Snow Toys",
        "thumbnailUrl": "../assets/img/productos/product_04.jpg",
        "reviews" : 23,
        "star": 3.5,
        "Categoria": "Hogar",
        "description": "Regalos para navidad",
        "stock": 10
    },
    {
        "precio": 4310,
        "title": "Pulover",
        "thumbnailUrl": "../assets/img/productos/product_05.jpg",
        "reviews" : 11,
        "star": 3.5,
        "Categoria": "Indumentaria",
        "description": "Pulover de pana de alta calidad",
        "stock": 10
    },
    {
        "precio": 1250,
        "title": "Snow Toys",
        "thumbnailUrl": "../assets/img/productos/product_06.jpg",
        "reviews" : 66,
        "star": 3.5,
        "Categoria": "Hogar",
        "description": "Regalos para navidad",
        "stock": 10
    },
    {
        "precio": 11234,
        "title": "Celular Samsung",
        "thumbnailUrl": "../assets/img/productos/celular.png",
        "reviews" : 611,
        "star": 5,
        "Categoria": "Tecno",
        "description": "Mejor Celular del mundo",
        "stock": 10
    },
    {
        "precio": 122250,
        "title": "TV Samsung",
        "thumbnailUrl": "../assets/img/productos/tv.png",
        "reviews" : 611,
        "star": 4,
        "Categoria": "Tecno",
        "description": "Mejor televisor del mundo",
        "stock": 10
    },
    {
        "precio": 111250,
        "title": "Laptop Samsung",
        "thumbnailUrl": "../img/productos/laptop.png",
        "reviews" : 611,
        "star": 4,
        "Categoria": "Tecno",
        "description": "Mejor laptop del mundo",
        "stock": 10
    },
    {
        "precio": 3150,
        "title": "Licuadora",
        "thumbnailUrl": "../img/productos/licuadora.png",
        "reviews" : 21,
        "star": 5,
        "Categoria": "Electro",
        "description": "Mejor Celular del mundo",
        "stock": 10
    },
    {
        "precio": 2200,
        "title": "Mixer",
        "thumbnailUrl": "../img/productos/mixer.png",
        "reviews" : 51,
        "star": 4,
        "Categoria": "Electro",
        "description": "Mejor televisor del mundo",
        "stock": 10
    },
    {
        "precio": 5250,
        "title": "Tostadora",
        "thumbnailUrl": "../img/productos/tostadora.png",
        "reviews" : 61,
        "star": 3,
        "Categoria": "Electro",
        "description": "Mejor laptop del mundo",
        "stock": 10
    }]

    const miColec = collection(firestoreDB, "productos");


    PRODUCTS.forEach((item) => {     
        // remplazar "cities" por el nombre de la coleccion
        const newItem = doc(miColec);

        setDoc(newItem, item).then(() => {
          console.log("Document written with ID: ", newItem.id)})
        .catch(err => {
            console.error("Error adding document: ", err);
        });
    });
}

export async function createBuyOrder(orderData){
    const buyTimestamp = Timestamp.now();
    const orderWithDate = {
        ...orderData, 
        date:buyTimestamp,
    }

    const miColec = collection(firestoreDB, "buyOrdenes");
    const ordenDoc = await addDoc(miColec, orderWithDate);  
    alert(`Su compra ha sido confirmada con el numero ${ordenDoc.id}`);
    clearCart()
    
}

