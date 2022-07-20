import API from './config';

const PRODUCTS_ENDPOINTS = {
    PRODUCT: 'products',
}

const ProductService = {// Objeto Movie Service
    getAll: () => new Promise(
        (resolve, reject) => {
            API.get(PRODUCTS_ENDPOINTS.PRODUCT)
            .then( response => resolve(response))
            .catch( error => reject(error))
        }
    ),
    delete: (id) => new Promise(
        (resolve, reject) => {
            API.delete(PRODUCTS_ENDPOINTS.PRODUCT+`/${id}`)
            .then( response => resolve(response))
            .catch( error => reject(error))
        }
    )
}
export default ProductService;