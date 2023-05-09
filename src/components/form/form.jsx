import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"

export const Form = ()=>{

    
    const {register,handleSubmit, formState: {errors}} = useForm();
   
    
    return (
        <div>
            <button>
            <Link to="/" className="text-amber-500"> HOME</Link>
            </button>
            <form className="flex flex-col justify-center items-center border border-amber-600 m-auto w-80 h-56 text-center mt-2" 
                onSubmit={handleSubmit((data)=>{
                console.log(data)
                
            })}>
                <label htmlFor="username" className="mb-2 ">Username</label>
                <input className="h-5 border " {...register("username",{required : "Username this is required"})}
                aria-invalid={errors.username ? "true": "false"} placeholder="username" />

                {errors.username && <p className="text-red-600" role="alert">{errors.username?.message}</p>}

                <label className="mb-2" htmlFor="email">Email</label>
                <input className="h-5 border" {...register("email",{required : "this is required"})} placeholder="email"/>

                <button type="submit" className="text-emerald-500 hover:text-amber-600/70 mt-3">Submit</button>
            </form>
            
        </div>
    )
} 
