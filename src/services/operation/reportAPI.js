import toast from "react-hot-toast"
import { setAllReport, setLoading } from "../../slice/AuthSlice"
import { apiConnector } from "../ApiConnector"

export function sendReport(data,token){
    return async(dispatch)=>{
        dispatch(setLoading(true))
        const toastId = toast.loading("loading...")
        try{
            const response = await apiConnector("POST","http://localhost:4000/api/v1/sendReports",data,{
                Authorization: `Bearer ${token}` 
            })
            if(!response.data.success){
                throw new Error(response.data.message)
            }
            toast.success("Report Submitted")
        }catch(err){
            console.log(err);
            toast.error("Report can't send");
        }
        dispatch(setLoading(false))
        toast.dismiss(toastId)
    }
}

export function getAllReport(token){
    return async(dispatch)=>{
        dispatch(setLoading(true))
        const toastId = toast.loading("Loading")
        try{
            const response = await apiConnector("GET","http://localhost:4000/api/v1/getAllReports",null,{
                Authorization: `Bearer ${token}`
            })
            if(!response.data.success){
                throw new Error(response.data.message)
            }
            
            dispatch(setAllReport(response.data.data))
            dispatch(localStorage.setItem("allReport",JSON.stringify(response.data.data)))
            toast.success("All data fetch successfully")
        }catch(error){
            console.log("Error while fetch all data",error);
            // toast.error("Failed to fetch all data")
        }
        dispatch(setLoading(false))
        toast.dismiss(toastId)
    }
}

export function deleteReport(data,token){
    return async(dispatch)=>{
        const toastId = toast.loading("Loading...")
        const dataa = {
            id:data
        }
        console.log(dataa)

        try{
            const response = await apiConnector("DELETE","http://localhost:4000/api/v1/deleteReport",dataa,{
                Authorization: `Bearer ${token}`
            })
            if(!response.data.success){
                throw new Error(response.data.message)
            }
            toast.success(response.data.message)
        }catch(err){
            console.log("Error while delete report",err);
            toast.error("Failed to delete report")
        }
        toast.dismiss(toastId)
    }
}