import "./itemListContainer.css"


const   ItemListContainer = ({saludo, children}) => {

    return(

        <div>

            <h1 className="h1">{saludo}</h1>
            {children}
      

        </div>
    )

}

export default ItemListContainer