import "./footer.scss";
import logo1 from "./RRSS/logo1.png"
import instagram from "./RRSS/instagram.png"
import twitter from "./RRSS/twitter.png"
import facebook from "./RRSS/facebook.svg"
import {Link, NavLink} from "react-router-dom"

const Footer = () => {

    return(

        <>
            <footer className="footerPrincipal">

                <h3>Contacto</h3>

                <div className ="footerAlineacion"> 

                    <div className ="contenedorMenuFooter">
                        
                        <ul className ="menuNavFooter">

                            <NavLink to="/" className={ ({isActive}) => isActive ? 'footerActivo' : undefined}><li>Home</li></NavLink>
                            <NavLink to="/category/camara" className={ ({isActive}) => isActive ? 'footerActivo' : undefined}><li>Cámaras</li></NavLink>
                            <NavLink to="/category/switch" className={ ({isActive}) => isActive ? 'footerActivo': undefined}><li>Switchs</li></NavLink>
                            <NavLink to="/category/router" className={ ({isActive}) => isActive ? 'footerActivo' : undefined}><li>Routers</li></NavLink>
                            <NavLink to="/category/firewall" className={ ({isActive}) => isActive ? 'footerActivo' : undefined}><li>Firewalls</li></NavLink>
            
                        </ul>

                    </div>
                        
                    <div className="contenedorImagenesFooter">
                    
                        <div className="contenedorLogo">
                            <Link to="/"><img src={logo1} alt="Vinculo a Home" /></Link>
                        </div>

                        <div className="contenedorRrss">

                            <a href="http://www.instagram.com" target="_blank" rel="noreferrer">
                                <img src={instagram} alt="Instagram" />
                            </a>
                            <a href="http://www.twitter.com" target="_blank" rel="noreferrer">
                                <img src={twitter} alt="Twitter" />
                            </a>
                            <a href="http://www.facebook.com" target="_blank" rel="noreferrer">
                                <img src={facebook} alt="Facebook" />
                            </a>

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