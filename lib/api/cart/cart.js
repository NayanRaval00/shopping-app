import ApiService from '../../ApiService'
import cartEndpoint from '../../endpoint/cart'

export const addToCart = payload => {
    console.log(payload,'payload');
    
    return ApiService.post(cartEndpoint.addtocart, payload)
}

export const retrieveCartDetails = payload => {
    return ApiService.get(cartEndpoint.listCartDetails, payload)
}

export const deleteCartItem = (id) => {
    const url = cartEndpoint.deleteCartItem.replace(':id', id); // Replace :id with actual id
    return ApiService.post(url); // Make the API call
};