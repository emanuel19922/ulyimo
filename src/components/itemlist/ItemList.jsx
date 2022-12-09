import Items from "../items/Items"

const ItemList = ({product}) => {

return(

product.map((produ)=>  <Items key={produ.id} produs={produ} />
)

)
    
  
}

export default ItemList