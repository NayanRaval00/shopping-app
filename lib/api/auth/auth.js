import ApiService from '../../ApiService'
import authEndpoint from '../../endpoint/auth'

export const userLogin = payload => {
    return ApiService.post(authEndpoint.login, payload)
}

export const userRegister = payload => {
    return ApiService.post(authEndpoint.register, payload)
}

export const userLogout = payload => {
    return ApiService.post(authEndpoint.logout)
}