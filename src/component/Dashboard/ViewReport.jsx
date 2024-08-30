import React,{useEffect} from 'react'
import { deleteReport, getAllReport } from '../../services/operation/reportAPI';
import { useDispatch,useSelector } from 'react-redux';
import { MdDelete } from "react-icons/md";
// import { report } from '../../../backend/routes/UserRoute';

const ViewReport = () => {
  const {token} = useSelector((state)=>state.auth)
    const dispatch =useDispatch()
    
    const clickHandler = (reports)=>{
      dispatch(deleteReport(reports._id,token))
      dispatch(getAllReport(token))
    }

    useEffect(()=>{
        dispatch(getAllReport(token))
    },[dispatch])
    
    const {allReport} = useSelector((state)=>state.auth)
    console.log(allReport)

    // const deleteHandler = ()=>{
    //   dispatch(deleteReport(token))
    // }
  return (
    <div>
      {allReport.length <1 ? (<div>No report available</div>):(
      
        allReport.map((reports,index)=>{
          return(
            <div className="bg-richblack-800 p-5 rounded-xl mb-4 flex justify-between" key={index}>
              <div className="">
                <div className="">{reports.report}</div>
                By <span className='text-blue-200'>{reports.name}</span>
              </div>
              
              <button onClick={()=>clickHandler(reports)} className="bg-pink-800 h-12 w-12 flex items-center justify-center rounded-full">
                <MdDelete className='text-3xl text-pink-300'/>
              </button>
            </div>
          )
        }))
      }
        
    </div>
  )
}

export default ViewReport