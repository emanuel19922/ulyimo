
import { useParams } from "react-router-dom";
import { data } from "../../data/Data";
import Itemforproducts from "../Itemforproduct/Itemforproducts";

import { useEffect,useState } from "react";

const ItemdetailContainet = () => {

    const [productid,setproductid] = useState([]);
    
    const {id} = useParams();
    
    const getdata = () =>{
   
    const dataforfilter = data.filter((datas)=>{
       
     return datas.id == id ;
     
    })
    setproductid(...dataforfilter)
    
}
useEffect(()=>{
    getdata();
    
},[id])


   return(

<div>  <Itemforproducts productid={productid} /></div>

   )

};

export default ItemdetailContainet;