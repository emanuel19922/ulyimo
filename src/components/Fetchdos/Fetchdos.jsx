import Fetchtres from "./Fetchtres/Fetchtres"

const Fetchdos = ({consumir}) => {
   
  return (
    consumir.map((produc)=> <Fetchtres  api={produc}  />
    )
  )
}

export default Fetchdos