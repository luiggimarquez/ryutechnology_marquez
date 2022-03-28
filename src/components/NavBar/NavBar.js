import "./navBar.scss"
import logo1 from "./logo1.png"
import { NavDropdown } from 'react-bootstrap'
import CartWidget from "../CartWidget/CartWidget"
import {Link} from "react-router-dom"

const NavBar = () => {  

    return (

        <header>

            <div className="alineadorLogo">

                <Link to="/"><img src={logo1}  alt="Logo Empresa" className="logoHeader" /></Link>
                <Link to="/" id="h1"><h1>RYU TECHNOLOGY</h1></Link>

            </div>

            <nav className="navBar"> 

                <ul className="menuNav">
                        
                    <Link to="/" className="a"><li>Home</li></Link>
                    <NavDropdown title="Productos" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#">Cámaras</NavDropdown.Item>
                    <NavDropdown.Item href="#">Switchs</NavDropdown.Item>
                    <NavDropdown.Item href="#">Routers</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#">Firewalls</NavDropdown.Item>
                    </NavDropdown>
                    <Link to="/Contacto" className="a"><li>Contacto</li></Link>
                    
                </ul>

                <CartWidget />

            </nav>

        </header>
    )
}

export default NavBar;