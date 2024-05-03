import axios from "axios";

export const instanceAxios = axios.create({
    baseURL:import.meta.env.VITE_API_PATH,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
})