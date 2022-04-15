import "./navBar.scss"
import logo1 from "./logo1.png"
import { NavDropdown } from 'react-bootstrap'
import CartWidget from "../CartWidget/CartWidget"
import {Link, NavLink} from "react-router-dom"
import { LinkContainer } from 'react-router-bootstrap'
import Context from '../../context/CartContext';
import { useContext } from "react";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { firestoreDb } from "../../services/Firebase";

const NavBar = () => {  

    const { cart } = useContext(Context)
    const [menu, setMenu] = useState([])

    useEffect(() => {

        const collectionRef = collection(firestoreDb,'categorias')
        getDocs(collectionRef).then(querySnapshot =>{
    
            const items = querySnapshot.docs.map(doc => {
    
                return{ id: doc.id, ...doc.data() }
            })
             
            setMenu(items);  
                
        }).catch( error =>{
            
            console.log(error);
    
        })
            
    },[])

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

                {(cart.length !== 0) ? <CartWidget />: <></>}

            </nav>

        </header>
    )
}

export default NavBar;