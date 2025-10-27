import axios from 'axios'

const commonApi = async(method,url,reqBody) => {
let configobj={
    method:method,
    url:url,
    data:reqBody
}
return await axios(configobj).then((res)=>{
    return res
}
).catch((err)=>{
    return err
})
}

export default commonApi