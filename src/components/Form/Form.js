import "./form.scss"
import { useState } from "react"
import { useContext } from "react";
import UserContext from '../../context/UsersContext';

const Form = () => {

    const { register } = useContext(UserContext)
    const { login } = useContext(UserContext)
    const { singOut } = useContext(UserContext)
    const { user } = useContext(user)

    const [name, setName] = useState([])
    const [phone, setPhone] = useState([])
    const [mail, setMail] = useState([])
    const [password, setPassword] = useState([])

    console.log("usuario logueado: ", user)


    return(<>

        {/* {(user.length === 0) && <> */}
            <>

        <form className="formularioContacto" id="formContacto"> 
            
            <input onChange={(e) => setMail(e.target.value) } type="email" placeholder="Mail" name="mail" required />
            <input onChange={(e) => setPassword(e.target.value) }type="password" placeholder="Password" name="password" required />
            
            
            <button onClick={(e) =>{
                e.preventDefault();
                
                login(mail, password);
                
                }  }>Enviar</button>
            <input type="reset" value="Restablecer"/>

        </form>    


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
        {/* } */}

        {

            // (user.length !== 0) && <button onClick={(e) =>{
                <button onClick={(e) =>{
                e.preventDefault();
                    
                 singOut();
                    
                }  }>Cerrar sesion</button>

        }
        </>
    )
}

export default Form