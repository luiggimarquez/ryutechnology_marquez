export const createAdapterProductOrders = (doc) => {

    const data = doc.data();

    const formattedProduct = {

        id: doc.id,
        buyer: data.buyer,
        items: data.items,
        date: data.date,
        total: data.total
    }

    return formattedProduct;
}
    