import './App.css';
import NavBar from "./components/NavBar/NavBar.js"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount';

function App() {

    const OnAdd = (cantidad) =>{

        console.log(cantidad);

    }

    return (
        <div>
            <NavBar />

            <ItemListContainer saludo="Bienvenidos a Ryu Technology">

                <ItemCount inicial={0} stock={10} OnAdd={OnAdd} />

            </ItemListContainer>

            
            
            
        </div>
  );
}

export default App;
