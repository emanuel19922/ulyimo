import '../items/_items.scss'


const Items = ({produs}) => {
    
    
  return (
 
    <div className='ItemsProduct'>
        <h2>{produs.id}</h2>
        <h2>{produs.name}</h2>
        <h2>{produs.color}</h2>
    
    </div>
  )
}

export default Items