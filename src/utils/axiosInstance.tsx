import axios, { AxiosInstance } from "axios";

export const getAxiosInstance=():AxiosInstance=>{
   return  axios.create({
        baseURL:`${import.meta.env.VITE_DATABASE_URL}`,
        headers:{
            "Content-Type":"application/json",
        },
    });
}