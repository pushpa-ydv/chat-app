import axios from "axios";


export const axiosInstance = axios.create({
    baseURL: import.meta.env.VOTE_API_URL,
    withCredentials: true,
})