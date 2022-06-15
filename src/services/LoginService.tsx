import React from "react";
import axios from "axios";
import {User} from "../user"


const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080/',
    headers: {
        'Content-type': 'application/json',
    },
});

const loginService = {
    loginUser: async (user: User) => axiosInstance.post('register', user)
        .then((response: any) => response)
        .catch((error) => {
            console.log(error.error);
        }),
}
export default loginService;