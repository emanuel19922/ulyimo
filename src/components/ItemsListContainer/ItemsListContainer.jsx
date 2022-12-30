import React from 'react'
import { useEffect, useState } from "react";
import ItemsProduct from '../Itemsproducts/Itemsproducts';

import ItemList from '../itemlist/ItemList';
import '../ItemsListContainer/_ItemsListContainer.scss'

import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore"

const ItemsListContainer = (props) => {
    const [product, setproduct] = useState([])
    //   aca estamos llamando al categoriname que esta en app.js en el link
    const { categoriName } = useParams();





    const getproduct = () => {

        const db = getFirestore()

        const querySnapshot = collection(db, 'items')

        if (categoriName) {
            const querifilter = query(querySnapshot, where("title", "==", categoriName))

            getDocs(querifilter)
                .then((response) => {
                    const produts = response.docs.map((item) => {

                        return { id: item.id, ...item.data() }

                    })

                    setproduct(produts)
                })
                .catch((error) => {
                    console.log(error)
                })


        } else {



            getDocs(querySnapshot)
                .then((response) => {
                    const produts = response.docs.map((item) => {

                        return { id: item.id, ...item.data() }

                    })

                    setproduct(produts)
                })
                .catch((error) => {
                    console.log(error)
                })

        }
    }

    useEffect(() => {
        getproduct()
    }, [categoriName])




    return (
        <div>
            {/* <ItemsProduct/> */}
            <div className='itemListContainer'>

                <ItemList product={product} />

            </div>
        </div>
    )
}

export default ItemsListContainer