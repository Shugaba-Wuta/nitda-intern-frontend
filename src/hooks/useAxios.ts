import axios from "axios"
const APIBaseURL = process.env.API_ROOT_URL || "http://localhost:8000/api"

export const useAxios = axios.create({ baseURL: APIBaseURL, withCredentials: true })