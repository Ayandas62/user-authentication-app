import axios from 'axios'
export const axioxInstance = axios.create({});

export const apiConnector = (method,url,bodydata,header,params,config)=>{
    return axioxInstance({
        method:`${method}`,
        url:`${url}`,
        data:bodydata?bodydata:null,
        headers:header?header:null,
        params:params?params:null,
        ...config
    })
}