import "./navBar.css"
import logo1 from "./logo1.png"
import { NavDropdown } from 'react-bootstrap'
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {  

    return (

        <header>

            <div className="alineadorLogo">

                <a className="a" href="#">
                <img src={logo1}  alt="Logo Empresa" className="logoHeader" /></a>
                <h1>RYU TECHNOLOGY</h1>

            </div>

            <nav className="navBar"> 

                <ul className="menuNav">
                        
                    <li><a className="a" href="#">Home</a></li>
                    <NavDropdown title="Productos" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#">Cámaras</NavDropdown.Item>
                    <NavDropdown.Item href="#">Switchs</NavDropdown.Item>
                    <NavDropdown.Item href="#">Routers</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#">Firewalls</NavDropdown.Item>
                    </NavDropdown>
                    <li><a className="a" href="#">Contacto</a></li>
                    
                </ul>

                <CartWidget />

            </nav>

        </header>
    )
}

export default NavBar;