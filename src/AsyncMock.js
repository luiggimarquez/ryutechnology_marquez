const products = [
    {
        id: 1,
        nombre: "M1065",
        tipo: "Bullet",
        categoria:"camara",
        marca: "Axis",
        precio: 1200,
        cantidad: 10,
        img: "/M1065.jpg"
    },
    {
        id: 2,
        nombre: "M1134",
        tipo: "Bullet",
        categoria:"Camara",
        marca: "Axis",
        precio: 1500,
        cantidad: 10,
        img: "/M1134.jpg"
    },
    {
        id: 3,
        nombre: "M1137",
        tipo: "Bullet",
        categoria:"Camara",
        marca: "Axis",
        precio: 1000,
        cantidad: 10,
        img: "/M1137.jpg"
    },
    {
        id: 4,
        nombre: "P1375",
        tipo: "Bullet",
        categoria:"Camara",
        marca: "Axis",
        precio: 1000,
        cantidad: 10,
        img: "/P1375.jpg"
    }
      
]

export const getProducts = () => {
    
    return new Promise((resolve, reject) => {

        setTimeout(()=>{
            resolve(products)
        },2000)
    })




}

