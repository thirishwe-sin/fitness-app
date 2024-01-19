import { apiCall, baseUrl } from "./apiService"


export const fetchExercisesByBodyPart = async(bodyParts) => {
    let data = await apiCall(baseUrl + `/exercises/bodyPart/${bodyParts}`)
    return data;
}