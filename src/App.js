
import './App.scss';

import NavBar from './components/NavBar/NavBar';
import ItemsListContainer from './components/ItemsListContainer/ItemsListContainer'
import { BrowserRouter , Route, Routes,} from "react-router-dom";

import Pokemon from './components/pokemos/Pokemon';
import CartWidget from './components/CartWidget/CartWidget';
import ItemdetailContainet from './components/ItemDetailcontainer/ItemdetailContainet';

function App() {
  return (
   
    <BrowserRouter>
    <div className="App">

    <NavBar/>
    < Routes>
     <Route path='/'  exact element={ <ItemsListContainer/> } />
     <Route path='/product/:categoriName' element={<ItemsListContainer/>}/>
     <Route path='/product/:categoriName' element={<ItemsListContainer/>}/>
     <Route path='CartWidget' element={<ItemdetailContainet/>} />
    
    </Routes>
  

    </div>
    </BrowserRouter>
   
  );
}

export default App;
