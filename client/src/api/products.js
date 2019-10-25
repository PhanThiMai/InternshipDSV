import API from './axios.config'


export const getProducts = () => {
    return API
        .get(`/product`)
        .then(res => {
            return res.data
        }).catch(error => console.log(error));
}

export const addProduct = (product, token) => {

    if (product.name.trim() === '' ||
        product.category.length === 0 ||
        product.size.length === 0 ||
        product.color.length === 0
    ) {
        console.log("Product is not enough of information")
        return false
    }

    return API
        .post(`/product`, {
            product, token
        })
        .then(res => {
            console.log(res.data)
            return res.data
        }).catch(error => console.log(error));
}



