import './App.css';
import NavBar from "./components/NavBar/NavBar.js"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from "./components/Footer/Footer"
import Cart from "./components/Cart/Cart"
import { CartContextProvider } from './context/CartContext';
import { WishListContextProvider } from './context/WishListContext';
import { UserContextProvider } from './context/UsersContext';
import Lottie from "lottie-react";
import error404 from "./assets/error404.json"
import Form from "./components/Form/Form"
import PurchaseOrder from "./components/PurchaseOrder/PurchaseOrder"

function App() {

    const options = {

        animationData: error404,
        autoplay: true,
        loop: true,
        style: {
            width: '40%',
        },
    }

    return (

        <div>
            <UserContextProvider>
            <WishListContextProvider>
                <CartContextProvider>
                    <BrowserRouter>
                        <NavBar />
                        <Routes>

                            <Route path= "/" element={<ItemListContainer saludo="Listado de productos"/>}/>
                            <Route path="/item/:id" element={<ItemDetailContainer/>} />
                            <Route path="/category/:id" element={<ItemListContainer/>}/>
                            <Route path="/cart" element={<Cart/>} />
                            <Route path="/formulario" element={<Form/>} />
                            <Route path="/purchaseorder" element={<PurchaseOrder/>} />
                            <Route path="*" element={<section className='error404'><Lottie {...options}/></section>} />

                        </Routes>
                        <Footer />
                    </BrowserRouter>
                </CartContextProvider>
            </WishListContextProvider>
            </UserContextProvider>

        </div>
    );
}

export default App;