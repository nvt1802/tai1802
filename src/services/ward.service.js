import Axios from "axios"
const BASE_URL = 'https://vapi.vnappmob.com'

export const findAll = () => {
    return Axios.get(`${BASE_URL}/api/district`)
}

export const findDistrictByDistrictId = (provinceId) => {
    return Axios.get(`${BASE_URL}/api/ward/${provinceId}`)
}