const products = [
    {
        id: "1",
        nombre: "M1065",
        tipo: "Bullet",
        categoria:"camara",
        marca: "Axis",
        precio: 1200,
        cantidad: 10,
        img: "/M1065.jpg",
        detalle: `La AXIS M1065-L incluye un micrófono integrado para grabar audio,
        un minialtavoz que puede emitir mensajes grabados previamente y un sensor de
        movimiento infrarrojo pasivo (PIR) para detectar el movimiento incluso en la
        oscuridad. Esta cámara con alimentación a través de Ethernet (PoE) ofrece una
        resolución HDTV 1080p a velocidad de imagen máxima, funcionalidad día/noche con
        filtro bloqueador IR mecánico e iluminación de infrarrojos. Es fácil de instalar
        con la escuadra para pared y esquina; y ofrece un campo de visión horizontal de 110°.
        La cámara presenta también WDR y es compatible con tarjetas microSD para almacenamiento local.`
    },
    {
        id: "2",
        nombre: "M1134",
        tipo: "Bullet",
        categoria:"Camara",
        marca: "Axis",
        precio: 1500,
        cantidad: 10,
        img: "/M1134.jpg",
        detalle: `La AXIS M1134 es una cámara de red compacta y asequible que es fácil
        de instalar y manejar. Admite PoE y alimentación de CC redundante, por lo que sus
        datos están protegidos en caso de que se produzca una interrupción en la alimentación.
        Gracias a la tecnología Axis Lightfinder y Axis Forensic WDR, ofrece colores verdaderos
        y gran nivel de detalle en condiciones de iluminación difícil o casi oscuridad. Incluye una montura CS que le
        permite cambiar con facilidad los objetivos para cubrir sus necesidades específicas.
        Además, un micrófono integrado le permite grabar vídeo con sonido. Por otra parte,
        ofrece Axis Zipstream con H. 264/H. 265 para reducir los requisitos de ancho de banda y almacenamiento,
        así como una funcionalidad de seguridad mejorada`
    },
    {
        id: "3",
        nombre: "M1137",
        tipo: "Bullet",
        categoria:"Camara",
        marca: "Axis",
        precio: 1000,
        cantidad: 10,
        img: "/M1137.jpg",
        detalle: `La AXIS M1137 es una cámara de red compacta y asequible que es fácil de
        instalar y manejar. Admite PoE y alimentación de CC redundante, por lo que sus datos
        están protegidos en caso de que se produzca una interrupción en la alimentación.
        Gracias a la tecnología Axis Lightfinder y Axis Forensic WDR, ofrece colores
        verdaderos y gran nivel de detalle en condiciones difíciles de iluminación o casi
        oscuridad. Incluye una montura CS que le permite cambiar con facilidad el
        objetivo para cubrir sus necesidades específicas. Además, un micrófono integrado
        le permite grabar vídeo con sonido. Por otra parte, ofrece Axis Zipstream con H.264/H.265
        para reducir los requisitos de ancho de banda y almacenamiento,
        así como una funcionalidad de seguridad mejorada.`
    },
    {
        id: "4",
        nombre: "P1375",
        tipo: "Bullet",
        categoria:"Camara",
        marca: "Axis",
        precio: 1000,
        cantidad: 10,
        img: "/P1375.jpg",
        detalle: `La cámara de red AXIS P1375 Network Camera ofrece una excelente calidad
        de vídeo incluso en condiciones de vibración e incorpora perfiles de escena para
        configuraciones ajustadas automáticamente para adaptarse a escenas específicas.
        Funciones de seguridad mejoradas como el firmware firmado y el arranque seguro
        garantizan la integridad y la autenticidad del firmware de la cámara. Además,
        características como alarma antimanipulación e indicador de transmisión de
        vídeo garantizan un control total del vídeo. Con Lightfinder y Forensic WDR, la
        cámara ofrece detalles incluso en condiciones de iluminación difíciles y gracias
        a la tecnología Zipstream, el almacenamiento y el ancho de banda se reducen
        significativamente. La montura CS de la cámara permite flexibilidad para cambiar
        a objetivos de mayor tamaño o más inteligentes, como objetivos i-CS.`
    }
      
]

export const getProducts = () => {
    
    return new Promise((resolve, reject) => {

        setTimeout(()=>{
            resolve(products)
        },2000)
    })
}

export const getItem = (id) =>{

    return new Promise ((resolve, reject) => {

        setTimeout(() => {
            resolve( products.find( element => element.id === id))
        },2000)
    })
}

