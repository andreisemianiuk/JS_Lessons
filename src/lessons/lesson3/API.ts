import axios from 'axios'

const configOMB = {
  baseURL: 'http://www.omdbapi.com',
}
const key = '?apikey=c6b92094'
const axiosInstance = axios.create(configOMB)

const API = {
  searchFilmsByTitle: (title: string) => {
    return axiosInstance.get(`${key}&s=${title}`)
  },
  searchFilmsByType: (title: string, type: string) => {
    return axiosInstance.get(`${key}&s=${title}&type=${type}`)
  },
}

export default API
