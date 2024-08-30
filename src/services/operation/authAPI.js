import toast from "react-hot-toast"
import { setAllUser, setLoading, setToken, setUser } from "../../slice/AuthSlice"
import { apiConnector } from "../ApiConnector"

export function login (data,navigate){
    return async(dispatch)=>{
        const toastId = toast.loading("Loading...")
        dispatch(setLoading(true))
        try{
            const response = await apiConnector("POST","https://localhost:4000/api/v1/login",data)
            if(!response.data.success){
                throw new Error(toast.error(response.data.message))
            }
            toast.success("Login successfull")
            dispatch(setToken(response.data.user.token))
            dispatch(setUser(response.data.user))
            localStorage.setItem("token",JSON.stringify(response.data.user.token));
            localStorage.setItem("user",JSON.stringify(response.data.user));
            navigate("/dashboard/my-profile")
        }catch(err){
            console.log("error in login -->",err)
            toast.error("Login failed");
        }
        dispatch(setLoading(false))
        toast.dismiss(toastId);
    }
}

export function logout(navigate){
    return (dispatch)=>{
        dispatch(setToken(null));
        dispatch(setUser(null));
        localStorage.removeItem("token")
        localStorage.removeItem("user");
        toast.success("Logged Out")
        navigate('/')
    }
}

export function signup(data,navigate){
    return async(dispatch)=>{
        const toastId = toast.loading("Loading...")
        dispatch(setLoading(true))
        try{
            const response = await apiConnector("POST","http://localhost:4000/api/v1/signup",data)
            if(!response.data.success){
                throw new Error(response.data.message)
            }
            toast.success("Signup Successfull")
            navigate("/login")
        }catch(err){
            console.log("error while signup",err);
            toast.error("Signup failed")
        }
        dispatch(setLoading(false))
        toast.dismiss(toastId)
    }
}

export function updateProfile(data,navigate,token){
    return async(dispatch)=>{
        dispatch(setLoading(true))
        const toastId = toast.loading("Loading...");
        try{
            const response = await apiConnector("PUT","http://localhost:4000/api/v1/updateProfile",data,{
                    
                Authorization: `Bearer ${token}`,
            
        })
            if(!response.data.success){
                throw new Error(response.data.message)
            }
            dispatch(setUser(response.data.data))
            localStorage.setItem("user",JSON.stringify(response.data.data));
            navigate("/dashboard/my-profile")
            toast.success("Successfully Update Data")
        }catch(error){
            console.log("error while update user data",error);
            toast.error("Data update Failed...")
        }
        dispatch(setLoading(false))
        toast.dismiss(toastId)
    } 
}

export function getAllUser(token){
    return async(dispatch)=>{
        dispatch(setLoading(true))
        const toastId = toast.loading("Loading")
        try{
            const response = await apiConnector("GET","http://localhost:4000/api/v1/getAllUser",null,{
                Authorization: `Bearer ${token}`
            })
            if(!response.data.success){
                throw new Error(response.data.message)
            }
            
            dispatch(setAllUser(response.data.data))
            dispatch(localStorage.setItem("allUser",JSON.stringify(response.data.data)))
            toast.success("All data fetch successfully")
        }catch(error){
            console.log("Error while fetch all data",error);
            // toast.error("Failed to fetch all data")
        }
        dispatch(setLoading(false))
        toast.dismiss(toastId)
    }
}

export function getAllMember(data,token){
    return async(dispatch)=>{
        dispatch(setLoading(true))
        const toastId = toast.loading("Loading")
        try{
            const dataa = {
                teamCode:data
            }
            console.log(dataa)
            const response = await apiConnector("GET","http://localhost:4000/api/v1/getAllMember",dataa,{
                Authorization:`Bearer ${token}`
            })
            if(!response.data.success){
                throw new Error(response.data.message)
            }
            
            dispatch(setAllUser(response.data.data))
            dispatch(localStorage.setItem("allUser",JSON.stringify(response.data.data)))
            toast.success("All data fetch successfully")
        }catch(error){
            console.log("Error while fetch all data",error);
        }
        dispatch(setLoading(false))
        toast.dismiss(toastId)
    }
}

export function deleteUser(data,token){
    return async ()=>{
        const toastId = toast.loading("Loading...")
        const dataa = {
            userId:data
        }
        console.log(dataa)
        try{
            const response = await apiConnector("DELETE","http://localhost:4000/api/v1/deleteAccount",dataa,{
                Authorization:`Bearer ${token}`
            })
            if(!response.data.success){
                throw new Error(response.data.message)
            }
            toast.success("User Deleted")
        }catch(error){
            console.log(error)
            toast.error("Failed to delete user")
        }
        toast.dismiss(toastId)
    }
}