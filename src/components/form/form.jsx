import { Link } from "react-router-dom"
import './form.css'
import { useForm } from "react-hook-form"

export const Form = ()=>{

    
    const {register,handleSubmit, formState: {errors}} = useForm();
   
    
    return (
        <div>
            <form className="onForm" onSubmit={handleSubmit((data)=>{
                console.log(data)
                
            })}>
                <label htmlFor="username">Username</label>
                <input {...register("username",{required : "Username this is required"})}
                aria-invalid={errors.username ? "true": "false"} placeholder="username"/>

                {errors.username && <p role="alert">{errors.username?.message}</p>}

                <label htmlFor="email">Email</label>
                <input {...register("email",{required : "this is required"})} placeholder="email"/>

                <button type="submit">Submit</button>
            </form>
            <button>
            <Link to="/"> HOME</Link>
            </button>
        </div>
    )
} 
