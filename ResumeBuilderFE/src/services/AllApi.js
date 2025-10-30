import { BaseUrl } from "./BaseUrl"
import commonApi from "./commonApi"

export const addResume =async(reqBody)=>{
    return await commonApi("post", `${BaseUrl}/resume`, reqBody);
}

export const displayResume =async()=>{
    return await commonApi("get",`${BaseUrl}/resume`,"")
}
export const deleteResume =async(id)=> {
    return await commonApi("delete",`${BaseUrl}/resume/${id}`)
}
export const editsaveData =async(id,reqBody)=>{
    return await commonApi("put", `${BaseUrl}/resume/${id}`,reqBody);
}