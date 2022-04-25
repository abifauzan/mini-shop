import axios, { Method, AxiosRequestConfig, AxiosPromise } from 'axios'

type ApiRequestProperties = {
  path: string
  params?: object
  url?: string
  method: Method
  headers?: object
  timeout?: number
  bodyRequest?: object
}

export type GetTypes = {
  limit?: number
  page?: number
  term?: string
}

export type ApiResponse<T> = {
  data: T
  status?: number
  message?: string
}

const BASE_URL = process.env.BASE_URL

export const apiRequest = (arguments_: ApiRequestProperties): AxiosPromise => {
  const { method, bodyRequest, params, path, url, timeout, headers } =
    arguments_
  const baseUrl = url || (BASE_URL as string)

  const config: AxiosRequestConfig = {
    headers: {
      'Content-Type': 'application/json',
    },
    url: `${baseUrl}${path}`,
    method,
  }

  if (headers) {
    config.headers = { ...config.headers, ...headers }
  }

  if (bodyRequest) {
    config.data = bodyRequest
  }

  if (params) {
    config.params = params
  }

  if (timeout) {
    config.timeout = timeout
  }

  return axios(config)
}
