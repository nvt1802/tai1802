import Axios from "axios"
const BASE_URL = 'https://vapi.vnappmob.com'

export const findDistrictByProvinceId = (provinceId) => {
  return Axios.get(`${BASE_URL}/api/province/district/${provinceId}`)
}