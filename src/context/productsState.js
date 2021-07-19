import React, { useReducer, useEffect } from 'react';
import ProductContext from './productsContext';
import { ProductsReducer } from './productsReducer';
import { ADD_PRODUCT_TO_CART, COMPLETE_PURCHASE, GET_ALL_PRODUCT, REMOVE_PRODUCT, SELECT_SHIPMENT } from './productsTypes';
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';

const ProductsState = props => {
    const initialState = {
        products: [],
        cart: localStorage.getItem('cart') ? JSON?.parse(localStorage.getItem('cart')) : [],
        pricetotal: localStorage.getItem('pricetotal') ? JSON?.parse(localStorage.getItem('pricetotal')) : null,
        myshopping: localStorage.getItem('myshopping') ? JSON?.parse(localStorage.getItem('myshopping')) : [],
        actualshipment: null
    };

    const [state, dispatch] = useReducer(ProductsReducer, initialState);
    const productsLocal = JSON?.parse(localStorage.getItem('products'))
    const currentCart = JSON?.parse(localStorage.getItem('cart'))

    useEffect(() => {
        if (currentCart) return
        localStorage.setItem('cart', JSON.stringify(state.cart))
        // eslint-disable-next-line
    }, [state.cart])

    const getProducts = async () => {
        try {
            const response = await axios.get('../../../dummy.json')
            if (!productsLocal) {
                localStorage.setItem('products', JSON.stringify(response.data.products))
            }
            dispatch({
                type: GET_ALL_PRODUCT,
                products: productsLocal ? productsLocal : response.data.products,
                cart: currentCart ? currentCart : []
            })
        } catch (error) {
            console.log(error);
        }
    }

    const addProductToCart = (product, key) => {
        const id = uuidv4()

        const data = { // add id unique for product
            ...product,
            qty: product.qty - 1,
            id: id
        }

        state.products[key] = data // replace element of array

        dispatch({
            type: ADD_PRODUCT_TO_CART,
            payload: data,
            products: state.products
        })

        const totalprice = state.cart.reduce( // add total price
            (sum, value) => parseFloat(sum) + parseFloat(value.price),
            product.price
        )

        //set values for storage local
        localStorage.setItem('products', JSON.stringify(state.products))
        localStorage.setItem('pricetotal', totalprice)
        localStorage.setItem('cart', JSON.stringify([...state.cart, data]))
    }

    const removeProduct = (product, key) => {
        const data = {
            ...product,
            qty: product.qty + 1
        }
        state.products[key] = data // replace element of array

        const removePrice = state.pricetotal - product.price
        const removeProduct = state.cart.filter((item) => item !== product)
        dispatch({
            type: REMOVE_PRODUCT,
            payload: product,
        })

        localStorage.setItem('products', JSON.stringify(state.products))
        localStorage.setItem('pricetotal', removePrice)
        localStorage.setItem('cart', JSON.stringify(removeProduct))
    }

    const completePurchase = purchase => {
        const updatePurchase = {
            id: uuidv4(),
            products: purchase,
            totalprice: state.pricetotal,
            status: 'completed'
        }
        dispatch({
            type: COMPLETE_PURCHASE,
            payload: updatePurchase
        })

        localStorage.removeItem('cart')
        localStorage.removeItem('pricetotal')
        localStorage.setItem('myshopping', JSON.stringify([updatePurchase, ...state.myshopping]))
    }

    const selectShipment = shipment => {
        dispatch({
            type: SELECT_SHIPMENT,
            payload: shipment
        })
    }

    return (
        <ProductContext.Provider
            value={{
                cart: state.cart,
                products: state.products,
                pricetotal: state.pricetotal,
                myshopping: state.myshopping,
                actualshipment: state.actualshipment,
                getProducts,
                addProductToCart,
                removeProduct,
                completePurchase,
                selectShipment
            }}
        >
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductsState;