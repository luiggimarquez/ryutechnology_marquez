import './App.css';
import NavBar from "./components/NavBar/NavBar.js"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from "./components/Footer/Footer"
import Car from "./components/Car/Car"

function App() {

    return (

        <div>

            <BrowserRouter>

                <NavBar />
                <Routes>

                    <Route path= "/" element={<ItemListContainer saludo="Listado de productos"/>}/>
                    <Route path="/item/:id" element={<ItemDetailContainer/>} />
                    <Route path="/category/:id" element={<ItemListContainer/>}/>
                    <Route path="/car" element={<Car/>} />

                </Routes>
                <Footer />
            
            </BrowserRouter>

        </div>
    );
}

export default App;