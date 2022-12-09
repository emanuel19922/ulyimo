
import { useParams } from "react-router-dom";
import { data } from "../../data/Data";
import Itemforproducts from "../Itemforproduct/Itemforproducts";

import { useEffect,useState } from "react";
import {doc,getDoc,getFirestore} from "firebase/firestore"
const ItemdetailContainet = () => {
    const [productid,setproductid] = useState([]);
    
    const {id} = useParams();
    

const getproduct = ()=>{
    const db = getFirestore();
    const query = doc(db, 'items' ,id);
    getDoc(query)
    .then((response)=>{
       
setproductid({id:response.id, ...response.data() });

    })
}


useEffect(()=>{
    getproduct();
    
},[id])


   return(

<div>  <Itemforproducts productid={productid} /></div>

   )

};

export default ItemdetailContainet;