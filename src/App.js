
import './App.scss';

import NavBar from './components/NavBar/NavBar';
import ItemsListContainer from './components/ItemsListContainer/ItemsListContainer'

function App() {
  return (
    <div className="App">
 <NavBar/>
<ItemsListContainer
name="bienvenidos"/>
    </div>
  );
}

export default App;
