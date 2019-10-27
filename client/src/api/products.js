import API from './axios.config'


export const getProducts = () => {
    return API
        .get(`/product`)
        .then(res => {
            return res.data
        }).catch(error => console.log(error));
}

export const addProduct = (product, token) => {

    return API
        .post(`/product`, {
            product, token
        })
        .then(res => {
            console.log(res.data)
            return res.data
        }).catch(error => console.log(error));
}


export const editProduct = (product) => {
    return API
        .post(`/product/edit`, {
            product
        })
        .then(res => {
            return res.data
        }).catch(error => console.log(error));
}





