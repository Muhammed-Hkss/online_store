import axios from "axios"

export const BASE_URL = 'https://cryxxen.pythonanywhere.com/'

export const instance = axios.create({baseURL: BASE_URL})