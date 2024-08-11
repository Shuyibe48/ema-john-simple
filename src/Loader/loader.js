import { getShoppingCart } from "../utilities/fakedb"

const cardProductsLoader = async () => {
    const loadedProducts = await fetch('http://localhost:5000/products')
    const products = await loadedProducts.json()

    
    const  storedCart = getShoppingCart()
    const saveCart = []
    for(const id in storedCart){
        const addedProducts = products.find(product => product._id === id)

        if(addedProducts){
            const quantity = storedCart[id] 
            addedProducts.quantity = quantity
            saveCart.push(addedProducts)
        }
    }

    return saveCart
}

export default cardProductsLoader