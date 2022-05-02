import "./form.scss"
import { useState, useEffect } from "react"
import { useContext } from "react";
import UserContext from '../../context/UsersContext';
import { useNavigate } from 'react-router-dom'

const Form = () => {

    const { register } = useContext(UserContext)
    const { login } = useContext(UserContext)
    const { signOut } = useContext(UserContext)
    const { user } = useContext(UserContext)
    const [loading, setLoading] = useState(true);
    const [name, setName] = useState([])
    const [phone, setPhone] = useState([])
    const [mail, setMail] = useState([])
    const [password, setPassword] = useState([])
    const [toggle, setToggle] = useState(false)
    let history = useNavigate();
    let ordenes = useNavigate();

    useEffect(() => {

        let a = false
        setTimeout(() => {

            setLoading(a)
        },1500)

        return (() => {

            setLoading([])
            setToggle([])
        })

    },[user])

    if(loading){

        return (

            <div className="loaderContainer">
                <div className="loader"></div>
                <p>Loading info ...</p>
            </div>
        )
    }

    return(<>

        {(user.length === 0) && (

            <div className="loginContainer">
                
                {!toggle && (

                    <div className="formContainer">

                        <h2>Ryu Tech - Login</h2>

                        <form className="formularioContacto" id="formContacto"> 
                            
                            <input onChange={(e) => setMail(e.target.value) } type="email" placeholder="Mail" name="mail" required />
                            <input onChange={(e) => setPassword(e.target.value) }type="password" placeholder="Password" name="password" required autoComplete="on"/>
                            <button className="buttomForm" type="submit" name="submit" onClick={(e) =>{ e.preventDefault(); login(mail, password);}}>Enviar</button>
                            <button className="buttomForm"  type="reset" value="Restablecer">Restablecer</button>

                            
                        </form>

                    </div>
                )}
                
                {toggle && (

                    <div className="formContainer">

                        <h2>Ryu Tech - Register</h2>
                        <form className="formularioContacto" id="formContacto"> 
                                    
                            <input onChange={(e) => setName(e.target.value) } type="text" placeholder="Nombre" name="name" required />
                            <input onChange={(e) => setPassword(e.target.value) }type="password" placeholder="Password" name="password" required autoComplete="on"/>
                            <input onChange={(e) => setPhone(e.target.value) } type="tel" placeholder="Teléfono" name="phone" required />
                            <input onChange={(e) => setMail(e.target.value) } type="email" placeholder="Mail" name="mail" required />
                            <button className="buttomForm" type="submit" name="submit" onClick={(e) =>{ e.preventDefault(); register(name, password, phone, mail); }}>Enviar</button>
                            <button className="buttomForm"  type="reset" value="Restablecer">Restablecer</button>

                        </form> 

                    </div>
                )}
                <button className="buttomSubmit" onClick={() => setToggle(!toggle)}>{toggle ? "Login": "Register"  }</button>
            </div>
        )} 
            
        {(user.length !== 0) &&
                    
            <div className="loginContainer">
                
                <p>Usuario: { user.email}</p> 
                <button className="buttomSubmit" onClick={(e) =>{ e.preventDefault(); signOut(); } }>Cerrar sesion</button>
                <button className="buttomSubmit" onClick={() => history(-1)}>Regresar</button> 
                <button className="buttomSubmit" onClick={() => ordenes('/orders')}>Ir a mis ordenes</button> 

            </div>           
        }
        
    </>)
}

export default Form