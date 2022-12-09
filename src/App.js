
import './App.scss';

import NavBar from './components/NavBar/NavBar';
import ItemsListContainer from './components/ItemsListContainer/ItemsListContainer'
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import CartWidget from './components/CartWidget/CartWidget';
import ComponentsContador from './components/componenteContador/ComponentsContador';
import ItemdetailContainet from './components/ItemDetailcontainer/ItemdetailContainet';
// aca importo el contexxxxx
import CartProvaider from './context/CartProvaider'

// 







//

function App() {
  
  return (
    <CartProvaider>
    <BrowserRouter>
  
    <NavBar />
 
    
        < Routes>
          <Route path='/' exact element={<ItemsListContainer />} />
          <Route path='/product/:categoriName' element={<ItemsListContainer />} />
          <Route path='/product/:categoriName' element={<ItemsListContainer />} />
          <Route path='/filter/:id'  element={  <ItemdetailContainet/>} />
          <Route path='CartWidget' element={<CartWidget />} />
        </Routes>
      
   
    
    </BrowserRouter>
    </CartProvaider>
        
    
  );
}

export default App;
