import { ADD_PRODUCT_TO_CART, COMPLETE_PURCHASE, GET_ALL_PRODUCT, REMOVE_PRODUCT, SELECT_SHIPMENT } from "./products/productsTypes";

const initialState = {
    products: [],
    cart: [],
    pricetotal: 0,
    myshopping: [],
    actualshipment: null
}

export function ProductsReducer(state = initialState, action) {
    switch (action.type) {

        case GET_ALL_PRODUCT:
            return {
                ...state,
                products: action.products,
                cart: action.cart
            }

        case ADD_PRODUCT_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload],
                pricetotal: state.cart.reduce(
                    (sum, value) => parseFloat(sum) + parseFloat(value.price),
                    action.payload.price
                ),
                products: action.products
            }

        case REMOVE_PRODUCT:
            return {
                ...state,
                cart: state.cart.filter((item) => item !== action.payload),
                pricetotal: state.pricetotal - action.payload.price,
            }

        case COMPLETE_PURCHASE:
            return {
                ...state,
                myshopping: [action.payload, ...state.myshopping],
                cart: [],
                pricetotal: null
            }

        case SELECT_SHIPMENT:
            return {
                ...state,
                actualshipment: action.payload
            }

        default:
            return state;
    }
}