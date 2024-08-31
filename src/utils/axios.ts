import axios from 'axios'

const URL : string = import.meta.env.VITE_URL_BACKEND

export const clientAxios = axios.create({
    baseURL: URL
})
