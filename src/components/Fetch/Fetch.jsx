import { useState, useEffect } from "react"
import Fetchdos from "../Fetchdos/Fetchdos"

const Fetch = () => {
    const [api, setapi] = useState([]);

    const Consumirapi = () => {
        fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=10')
            .then((respuesta) =>  respuesta.json())
            .then((respuestareal) => {

                setapi(respuestareal)
            })

    }
    useEffect(() => {

        Consumirapi()
    }, []);


    return (
        <div> <Fetchdos consumir={api} /></div>
    )
}

export default Fetch