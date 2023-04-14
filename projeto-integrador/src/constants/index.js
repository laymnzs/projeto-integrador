import axios from 'axios';
export const BASE_URL = "https://documenter.getpostman.com/view/24461561/2s93RRwDcg";


export const Login = async (body) =>{
    const {data} = await axios.post(`${BASE_URL}/users/login`, body)
    return data;
}


export const Signup = async (body) => {
    const {data} = await axios.post(`${BASE_URL}/users/signup`, body)
    return data;
}


export const Posts = async () => {
    const {data} = await axios.get(`${BASE_URL}/users/posts`)
    return data;
}



export const validateEmail = email =>/[a-zA-Z0-9]+@[a-z]{3}[.a-z]?/.test(email);
export const validatePassword = password => /.{6,}/.test(password);
export const validateName = name => /.{3,}/.test(name);
