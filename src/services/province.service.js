import Axios from "axios"
const BASE_URL = "https://vapi.vnappmob.com"

export const findAllProvince = () => {
  var instance = Axios.create({
    baseURL: "https://vapi.vnappmob.com",
    timeout: 1000,
  })
  return instance.get(`${BASE_URL}/api/province`)
}
