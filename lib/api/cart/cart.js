import ApiService from '../../ApiService'
import cartEndpoint from '../../endpoint/cart'

export const addToCart = payload => {
    return ApiService.post(cartEndpoint.addtocart, payload)
}