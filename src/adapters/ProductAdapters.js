export const createAdapterProduct = (doc) => {

    const data = doc.data();

    const formattedProduct = {

        id: doc.id,
        nombre: data.nombre,
        categoria: data.categoria,
        marca: data.marca,
        tipo: data.tipo,
        cantidad: data.cantidad,
        precio: data.precio,
        img: data.img,
        detalle: data.detalle
    }

    return formattedProduct;
}
    