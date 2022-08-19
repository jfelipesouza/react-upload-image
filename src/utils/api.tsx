import axios, { AxiosRequestConfig } from 'axios'

const config: AxiosRequestConfig = {
  baseURL: 'http://localhost:3000/',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
}

export const api = axios.create(config)
