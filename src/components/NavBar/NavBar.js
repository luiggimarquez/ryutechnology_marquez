import "./navBar.scss"
import logo1 from "./logo1.png"
import { NavDropdown } from 'react-bootstrap'
import CartWidget from "../CartWidget/CartWidget"
import {Link, NavLink} from "react-router-dom"
import { LinkContainer } from 'react-router-bootstrap'
import Context from '../../context/CartContext';
import { useContext } from "react";

const NavBar = () => {  

    const { cart } = useContext(Context)
 

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
                    <LinkContainer to ="/category/camara"><NavDropdown.Item>Cámaras</NavDropdown.Item></LinkContainer>
                    <LinkContainer to ="/category/switch"><NavDropdown.Item>Switchs</NavDropdown.Item></LinkContainer>
                    <LinkContainer to ="/category/router"><NavDropdown.Item>Routers</NavDropdown.Item></LinkContainer>
                    <NavDropdown.Divider />
                    <LinkContainer to ="/category/firewall"><NavDropdown.Item>Firewalls</NavDropdown.Item></LinkContainer>
                    </NavDropdown>
                    
                </ul>

                {(cart.length !== 0) ? <CartWidget />: <></>}

            </nav>

        </header>
    )
}

export default NavBar;