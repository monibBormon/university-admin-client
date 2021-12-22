import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';

const Login = () => {
    const { loginUser, error } = useFirebase()
    const location = useLocation()
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        loginUser(data.email, data.password, location, navigate)
        console.log(data);
    }
    return (
        <div>
            <div className="container mx-auto py-16">
                <div className="grid grid-cols-6 gap-4">
                    <div className="login-form col-start-2 col-span-4">
                        <h3 className='text-4xl mb-10 font-semibold'>Sign In</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <label htmlFor="email">Email</label> <br />
                            <input className=' w-1/2 rounded mt-2 mb-5 outline-none pl-5 border-black border-2 h-12' {...register("email", { required: true })} type='email' /> <br />
                            <label htmlFor="pasword">Password</label> <br />
                            <input className=' w-1/2 rounded mt-2 mb-5 outline-none pl-5 border-black border-2 h-12' {...register("password", { required: true })} type='password' /> <br />
                            {/* errors will return when field validation fails  */}
                            {errors.exampleRequired && <span>This field is required</span>}

                            <input className='bg-black cursor-pointer text-white px-8 py-2 font-semibold rounded' type="submit" value='Sign In' />
                        </form>
                        <div className='mt-10'>
                            <p>New User? <Link className='underline' to='/register'>Create a free account.</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;