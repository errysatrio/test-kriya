export const getProduct = (products, news) => ({
    type: 'GET_PRODUCTS',
    payload: products 
})

export const plus = (title, index) => ({
    type: 'PLUS',
    payload: {title, index}
})

export const min = (title, index) => ({
    type: 'MIN',
    payload: {title, index}
})

export const checkout = () => ({
    type: 'CHECKOUT',
    payload: false
})