import "./navBar.scss"
import logo1 from "./logo1.png"
import { NavDropdown } from 'react-bootstrap'
import CartWidget from "../CartWidget/CartWidget"
import {Link, NavLink} from "react-router-dom"
import { LinkContainer } from 'react-router-bootstrap'
import Context from '../../context/CartContext';
import UserContext from "../../context/UsersContext"
import { useContext } from "react";
import { useState, useEffect } from "react";
import { getNavbar } from "../../services/Firestore"
import WishListContext from "../../context/WishListContext"
import WishListWidget from "../WishListWidget/WishListWidget"

const NavBar = () => {  

    const { cart } = useContext(Context)
    const { user } = useContext(UserContext)
    const { list } = useContext(WishListContext)
    const [menu, setMenu] = useState([])

    useEffect(() => {

        getNavbar().then( (items) =>{
            
            setMenu(items);  
                
        }).catch( error =>{
            
            console.log(error);
        })
            
    },[user])

    return (

        <header>

            <div className="alineadorLogo">

                <Link to="/"><img src={logo1}  alt="Logo Empresa" className="logoHeader" /></Link>
                <Link to="/" id="h1"><h1>RYU TECHNOLOGY</h1></Link>

            </div>

            <nav className="navBar"> 
                <ul className="menuNav">
                        
                    <NavLink to="/" className={ ({isActive}) => isActive ? 'navActivo' : 'a'}><li>Home</li></NavLink>
                    <NavDropdown title="Categorías" id="basic-nav-dropdown">
                    {menu.map(elemento => <LinkContainer to ={`/category/${elemento.nombre}` } key={elemento.id}><NavDropdown.Item >{elemento.nombre}s</NavDropdown.Item></LinkContainer>)}
                    </NavDropdown>
                    
                </ul>
                {(list.length !== 0) && <WishListWidget/>}
                {(cart.length !== 0) ? <CartWidget />: <></>}
                {(user.length !== 0)? <Link className="actualUserNav" to="/formulario"><img className="iconUser" src="/img/usericon.png" alt="icono usuario" /><p>{user.displayName}</p></Link>: <></>}

            </nav>
        </header>
    )
}

export default NavBar;