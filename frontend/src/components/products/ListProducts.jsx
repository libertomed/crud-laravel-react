import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductService from '../../services/ProductServices'

import { Link } from 'react-router-dom'

const ShowProduct = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetchProducts()
    }, [])

    const fetchProducts = () => {

        ProductService.getAll()
            .then(response => { setProducts(response) })
            .catch(error => { console.log(error) })
    }

    const deleteProducts = () => {

        ProductService.delete(id)
            .then(response => {
                alert(response)
                fetchProducts()
            })
            .catch(error => { console.log(error) })
    }
    return (
        <div>
            <div class="flex space-x-2 justify-center">
                <Link to='/create' className='inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>Create</Link>
            </div>

            <div class="flex justify-center">
                <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                    <div>
                        <h5 class="flex text-gray-900 text-xl leading-tight font-medium mb-2">Card title</h5>
                    </div>
                    <p class="text-gray-700 text-base mb-4">
                        Some quick example text to build on the card title and make up the bulk of the card's
                        content.
                    </p>
                    <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                </div>
            </div>
        </div>


    )
}

export default ShowProduct