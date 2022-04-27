import { createContext } from "react";
import Swal from 'sweetalert2'

const NotificationContext = createContext();
export const NotificationContextProvider = ({ children }) => {

    const setNotification = (typeNotification, messageNotification, timeNotification) =>{

        const Toast = Swal.mixin({

            toast: true,
            position: 'center',
            showConfirmButton: false,
            timer: timeNotification,
            timerProgressBar: true,
            didOpen: (toast) => {

                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })
          
        Toast.fire({

            icon: typeNotification,
            title: messageNotification
        })
    }

    return(

        <NotificationContext.Provider value={{setNotification}}>
            {children} 
        </NotificationContext.Provider> 
    )
}

export default NotificationContext