import Items from "../items/Items"

const ItemList = ({product}) => {
return(

product.map((produ)=>  <Items produs={produ}/>
)
)
    
  
}

export default ItemList