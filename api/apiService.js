import { rapidApiKey } from "../constants"
import axios from 'axios';

export const baseUrl = 'https://exercisedb.p.rapidapi.com'
export const localhost_url = 'http://127.0.0.1:8000/api';

export const apiCall = async(url, params) => {
    try{
        const options = {
            method: 'GET',
            url,
            params,
            headers: {
                'X-RapidAPI-Key': rapidApiKey,
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
              }
        }
        const response = await axios.request(options)
        return response.data;
    }
    catch(err){
        console.log(err.message);
    }
}

export const getRequest = async(url, params) => {
    console.log(url);
    try{
        const response = await axios.get(url, {
            params,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        console.log("response request",response);
        return response;
    }
    catch(err){
        console.log("api error",err);
        throw err;
    }
}

