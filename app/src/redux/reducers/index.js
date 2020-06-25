const defaultState = {
    products: [],
    cart: [],
    total: 0,
    isOnline: false
}

export default (state=defaultState, action) => {
    const { payload } = action
    const currentCart = state.cart
    let flag
    let total = 0 

    switch (action.type) {
        case 'GET_PRODUCTS' :
            return {...state, products: payload, isOnline: true};
        case 'PLUS' :
            flag = false
            if (currentCart.length) {
                currentCart.map(el => {
                    if (el.title === payload.title) {
                        flag = true
                        el.count++
                    }
                    return el
                })
                if (!flag) {
                    currentCart.push({ title: payload.title, count: 1})
                }
            } 
            else {
                currentCart.push({ title:payload.title, count: 1 })
            }
            state.products[payload.index].count++
            currentCart.map(el => total += el.count)
            return {...state, cart:currentCart, total };
        case 'MIN' :
            flag = false
            currentCart.map((el, idxCart) => {
                if (el.title === payload.title) {
                    flag = true
                    el.count--
                }
                if (el.count === 0 ) {
                    currentCart.splice(idxCart, 1)
                }
                return el
            })
            state.products[payload.index].count--
            currentCart.map(el => total += el.count)
            return {...state, payload, total };
        case 'CHECKOUT' :
            return {...state, isOnline:false, cart: [], total: 0 };
        default: 
            return state
    }
}
