import React from 'react'
import { useForm } from 'react-hook-form'
import CtaButton from '../CtaButton'
import { useDispatch, useSelector } from 'react-redux'
import { sendReport } from '../../services/operation/reportAPI'

const Report = () => {
    const{register,formState:{errors},handleSubmit} = useForm()
    const dispatch = useDispatch()
    const {token}= useSelector((state)=>state.auth)
    const reportSubmit = (data)=>{
        dispatch(sendReport(data,token))
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit(reportSubmit)}>
            <div className="flex flex-col"> 
                <label htmlFor="">Message</label>
                <textarea 
                name="report" id="report"
                cols={100}
                rows={8}
                {...register("report",{required:true})}
                className='form-style '
                />
                {errors.report &&(
                    <span>Please Write Your report</span>
                )}
            </div>
            
                <CtaButton type={"submit"} text={"Submit"}/>
        </form>
    </div>
  )
}

export default Report