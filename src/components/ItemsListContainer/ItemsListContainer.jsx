import React from 'react'
import { useEffect, useState } from "react";
import { data } from "../../data/Data";

import ItemList from '../itemlist/ItemList';
import '../ItemsListContainer/_ItemsListContainer.scss'
import Items from '../items/Items';
import { useParams } from 'react-router-dom';


const ItemsListContainer = (props) => {
    const [product, setproduct] = useState([])
    //   aca estamos llamando al categoriname que esta en app.js en el link
    const { categoriName } = useParams();
   
    

    const getData = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (categoriName) {
               
                const filtradodedata = data.filter((productos) => {
                    
                    return productos.name === categoriName
                
                })
                resolve(filtradodedata)
                
            } else {
                resolve(data);
            }



        }, );
    })

    useEffect(() => {
     
        getData
            .then((response) => { setproduct(response); })
            .catch(erroe => console.log(erroe))
    }, [categoriName]);

    return (
        <div className='itemListContainer'>

            <ItemList product={product} />

        </div>
    )
}

export default ItemsListContainer