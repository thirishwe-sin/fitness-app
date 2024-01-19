import { rapidApiKey } from "../constants"
import axios from "axios"

export const baseUrl = 'https://exercisedb.p.rapidapi.com'

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