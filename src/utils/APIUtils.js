import get from 'lodash/get';

export const GetAPIRoutes = (apiFile) => {
    const APIROUTES_DIR = "api-routes";
    return require('../' + APIROUTES_DIR + "/" + apiFile); 
}

export const RemoveTokenFromCookie = () => {
    sessionStorage.removeItem('access-token')
}

export const GetTokenFromCookie = () => {
    return sessionStorage.getItem('access-token')
}

export const AddTokenFromCookie = (accessToken) => {
    sessionStorage.setItem('access-token', accessToken)
}