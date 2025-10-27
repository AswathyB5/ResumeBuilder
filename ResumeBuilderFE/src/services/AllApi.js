import { BaseUrl } from "./BaseUrl"
import commonApi from "./commonApi"

export const addResume =async(reqBody)=>{
    return await commonApi("post", `${BaseUrl}/resume`, reqBody);
}

export const displayResume =async()=>{
    return await commonApi("get",`${BaseUrl}/resume`,"")
}