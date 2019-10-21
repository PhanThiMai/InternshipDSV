import API from './axios.config'


export const getCategories = () => {
    return API
        .get(`/category`)
        .then(res => {
            return res.data
        }).catch(error => console.log(error));
}


