import "./navBar.css"
import logo1 from "./logo1.png"

const NavBar = () => {  


    return (

        <header>

            <div className="alineadorLogo">

                <a href="#">
                <img src={logo1}  alt="Logo Empresa" className="logoHeader" /></a>
                <h1>RYU TECHNOLOGY</h1>

            </div>


            <nav className="navBar"> 

                <ul className="menuNav">
                        
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Cámaras</a></li>
                    <li><a href="#">Switchs</a></li>
                    <li><a href="#">Routers</a></li>
                    
                </ul>

            </nav>

        </header>

    )

    
}

export default NavBar;