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
import { NotificationContextProvider } from './context/NotificationContext';
import Lottie from "lottie-react";
import error404 from "./assets/error404.json"
import Form from "./components/Form/Form"
import PurchaseOrder from "./components/PurchaseOrder/PurchaseOrder"
import WishList from "./components/WishList/WishList"
import Orders from './components/Orders/Orders';

function App() {

    const options = {

        animationData: error404,
        autoplay: true,
        loop: true,
    }

    return (

        <div>
            <NotificationContextProvider>
                <UserContextProvider>
                    <WishListContextProvider>
                        <CartContextProvider>
                    <       BrowserRouter>
                            <NavBar />
                            <Routes>

                            <Route path= "/" element={<ItemListContainer saludo="Listado de productos"/>}/>
                            <Route path="/item/:id" element={<ItemDetailContainer/>} />
                            <Route path="/category/:id" element={<ItemListContainer/>}/>
                            <Route path="/cart" element={<Cart/>} />
                            <Route path="/formulario" element={<Form/>} />
                            <Route path="/purchaseorder" element={<PurchaseOrder/>} />
                            <Route path="/wishlist" element={<WishList/>}></Route>
                            <Route path="/orders" element={<Orders/>}></Route>
                            <Route path="*" element={<section ><Lottie className='error404'{...options}/></section>} />

                            </Routes>
                            <Footer />
                            </BrowserRouter>
                        </CartContextProvider>
                    </WishListContextProvider>
                </UserContextProvider>
            </NotificationContextProvider>

        </div>
    );
}

export default App;