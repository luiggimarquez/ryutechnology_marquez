import './App.css';
import NavBar from "./components/NavBar/NavBar.js"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Empresa from "./components/Empresa/Empresa"
import Contacto from "./components/Contacto/Contacto"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

    const OnAdd = (cantidad) =>{

        console.log(cantidad);
    }

    return (

        <div>

            <BrowserRouter>

                <NavBar />
                <Routes>

                    <Route path="/about" element={<Empresa/>} />
                    <Route path= "/" element={<ItemListContainer saludo="Listado de productos"><ItemCount inicial={0} stock={10} OnAdd={OnAdd} /></ItemListContainer>}/>
                    <Route path="/contacto" element={<Contacto/>} />
                    <Route path="/item/:id" element={<ItemDetailContainer/>} />

                </Routes>
            
            </BrowserRouter>

        </div>
    );
}

export default App;
