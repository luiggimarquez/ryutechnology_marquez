import "./NavBar.scss"
import logo1 from "./logo1.png"
import { NavDropdown, Navbar, Container} from 'react-bootstrap'
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
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse"

const NavBar = () => {  

    const { cart } = useContext(Context)
    const { user } = useContext(UserContext)
    const { list } = useContext(WishListContext)
    const [menu, setMenu] = useState([])
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {

        getNavbar().then( (items) =>{
            
            setMenu(items);  
                
        }).catch( error =>{
            
            console.log(error);
        })

        return (() => {
            
            setMenu([])
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

                    <Navbar collapseOnSelect expand="lg" expanded={expanded}>
                        <Container id="container">
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}/>
                            <NavbarCollapse  id="responsive-navbar-nav">
                                <NavLink to="/" onClick={() => setExpanded(false)} className={ ({isActive}) => isActive ? 'navActivo' : 'a'}><li>Home</li></NavLink>
                                <NavDropdown title="Categorías" id="basic-nav-dropdown">
                                    {menu.map(elemento => <LinkContainer to ={`/category/${elemento.nombre}` } key={elemento.id}><NavDropdown.Item onClick={() => setExpanded(false)}>{elemento.nombre}s</NavDropdown.Item></LinkContainer>)}
                                </NavDropdown>
                            </NavbarCollapse>
                        </Container> 
                    </Navbar> 
                    
                </ul>
                <div className="widgetContainer"> 
                    {(list.length !== 0) && <WishListWidget/>}
                    {(cart.length !== 0) ? <CartWidget />: <></>}
                    {(user.length !== 0)? <Link className="actualUserNav" to="/formulario"><img className="iconUser" src="/img/usericon.png" alt="icono usuario" /><p>{user.displayName}</p></Link>: <></>}
                </div>
            </nav>
        </header>
    )
}

export default NavBar;