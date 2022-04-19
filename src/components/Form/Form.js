import "./form.scss"
import { useState } from "react"
import { useContext } from "react";
import UserContext from '../../context/UsersContext';
import { Navigate, useNavigate } from 'react-router-dom'


const Form = () => {

    const { register } = useContext(UserContext)
    const { login } = useContext(UserContext)
    const { singOut } = useContext(UserContext)
    const { user } = useContext(UserContext)

    const [name, setName] = useState([])
    const [phone, setPhone] = useState([])
    const [mail, setMail] = useState([])
    const [password, setPassword] = useState([])
    const [toggle, setToggle] = useState(false)

    console.log("usuario logueado: ", user.displayName)

    let history = useNavigate();


    return(<>

    {
        
        (user.length === 0) && (
        <>
            
            {!toggle && (
            <div>
                <form className="formularioContacto" id="formContacto"> 
                    
                    <input onChange={(e) => setMail(e.target.value) } type="email" placeholder="Mail" name="mail" required />
                    <input onChange={(e) => setPassword(e.target.value) }type="password" placeholder="Password" name="password" required />
                    
                    
                    <button onClick={(e) =>{
                        e.preventDefault();
                        
                        login(mail, password);
                        
                    }  }>Enviar</button>

                    <input type="reset" value="Restablecer"/>
                    
                </form>

                
            </div>)}
            
            <button onClick={() => setToggle(!toggle)}>{toggle ? "Loguear": "Registar"  }</button>
            {toggle && (

                <>
                <form className="formularioContacto" id="formContacto"> 
                                
                <input onChange={(e) => setName(e.target.value) } type="text" placeholder="Nombre" name="name" required />
                <input onChange={(e) => setPassword(e.target.value) }type="password" placeholder="Password" name="password" required />
                <input onChange={(e) => setPhone(e.target.value) } type="tel" placeholder="Teléfono" name="phone" required />
                <input onChange={(e) => setMail(e.target.value) } type="email" placeholder="Mail" name="mail" required />
                <button onClick={(e) =>{
                    e.preventDefault();
                        
                        register(name, password, phone, mail);


                       

                        
                    }  }>Enviar</button>

                   
                <input type="reset" value="Restablecer"/> 

                

                </form> 
                
                

                </>


            )}
            
        
        </>
    ) } 
        
       

        {
            
            (user.length !== 0) &&
                
            <>
                <button onClick={(e) =>{ e.preventDefault(); singOut(); } }>Cerrar sesion</button>
                <button onClick={() => history(-1)}> regresar</button> 

                <p>Usuario: { user.uid}</p>  
                <p>Usuario: { user.email}</p>  
            </>           

        }
        
        </>
    )
}

export default Form