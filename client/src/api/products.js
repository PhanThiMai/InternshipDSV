import API from './axios.config'


export const getProducts = () => {
    return API
        .get(`/product`)
        .then(res => {
            return res.data
        }).catch(error => console.log(error));
}

