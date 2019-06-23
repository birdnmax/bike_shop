export const setUser = (user) => {
    return {
        type: 'set_user',
        payload: user
    }
}

export const setCart = (cartItems) => {
    return {
        type: 'set_cart',
        payload: cartItems
    }
}