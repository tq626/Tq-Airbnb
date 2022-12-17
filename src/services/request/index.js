import axios from 'axios'
import { BASE_URL, TIMEOUT } from "./config"

class tqRequest {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout
    })

    this.instance.interceptors.response.use((res) => {
      return res.data
    }, err => {
      return err
    })
  }

  request(config) {
    return this.instance.request(config)
  }

  get(config) {
    return this.request({ ...config, methods: "get" })
  }

  post(config) {
    return this.request({ ...config, methods: "post" })
  }
}

export default new tqRequest(BASE_URL, TIMEOUT)