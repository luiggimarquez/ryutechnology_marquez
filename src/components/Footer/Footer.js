import "./footer.scss";
import logo1 from "./RRSS/logo1.png"
import instagram from "./RRSS/instagram.png"
import twitter from "./RRSS/twitter.png"
import facebook from "./RRSS/facebook.svg"
import {Link, NavLink} from "react-router-dom"
import { useState, useEffect } from "react";
import { getNavbar } from "../../services/Firestore";
import { Navbar, Container} from 'react-bootstrap'
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse"

const Footer = () => {

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
           
    },[])

    return(

        <>
            <footer className="footerPrincipal">

                <h3>Contacto</h3>

                <div className ="footerAlineacion"> 

                    <div className ="contenedorMenuFooter">
                        <ul className ="menuNavFooter">
                        <Navbar collapseOnSelect expand="lg" expanded={expanded}>
                        <Container id="container">
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}/>
                            <NavbarCollapse className="colpaseColumn" id="responsive-navbar-nav">
                                <NavLink to="/" onClick={() => setExpanded(false)} className={ ({isActive}) => isActive ? 'footerActivo' : undefined}><li>Home</li></NavLink>
                                {menu.map(elemento => <NavLink onClick={() => setExpanded(false)} key={elemento.id} to={`/category/${elemento.nombre}`}  className={ ({isActive}) => isActive ? 'footerActivo' : undefined}><li>{`${elemento.nombre}s`}</li></NavLink>)}
                            </NavbarCollapse>
                        </Container> 
                    </Navbar> 
                        </ul>
                    </div>
                        
                    <div className="contenedorImagenesFooter">
                    
                        <div className="contenedorLogo">
                            <Link to="/"><img src={logo1} alt="Vinculo a Home" /></Link>
                        </div>

                        <div className="contenedorRrss">

                            <a href="http://www.instagram.com" target="_blank" rel="noreferrer"><img src={instagram} alt="Instagram" /></a>
                            <a href="http://www.twitter.com" target="_blank" rel="noreferrer"><img src={twitter} alt="Twitter" /></a>
                            <a href="http://www.facebook.com" target="_blank" rel="noreferrer"><img src={facebook} alt="Facebook" /></a>
                                
                        </div>

                    </div>

                    <div className="contenedorDireccionFooter">

                        <h4 className="estiloTitulos">Dirección</h4>
                        <p>Avenida Luis María Campos 935, Palermo, C.A.B.A - Argentina</p>
                        <h4 className="estiloTitulos">Teléfono</h4>
                        <p>+54 9 11 12345678</p>
                        
                    </div>

                </div>

                <h4 className="estiloTitulos"> © Ryu Technology | All rigths reserved 2022</h4>
            
            </footer>
        </>
    )
}

export default Footer