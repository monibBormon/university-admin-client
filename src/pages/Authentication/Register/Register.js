import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';

const Register = () => {
    const { registerUser, error } = useFirebase()
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        if (data.password !== data.password2) {
            alert("password didn't match.")
            return
        }
        registerUser(data.email, data.password, data.name, navigate)
        console.log(data);
    }
    return (
        <div>
            <div className="container mx-auto py-16">
                <div className="grid grid-cols-6 gap-4">
                    <div className="login-form col-start-2 col-span-4">
                        <h3 className='text-4xl mb-10 font-semibold'>Sign Up</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label htmlFor="name">Full Name</label> <br />
                            <input className=' w-1/2 rounded mt-2 mb-5 outline-none pl-5 border-black border-2 h-12' {...register("name", { required: true })} type='text' /> <br />
                            <label htmlFor="email">Email</label> <br />
                            <input className=' w-1/2 rounded mt-2 mb-5 outline-none pl-5 border-black border-2 h-12' {...register("email", { required: true })} type='email' /> <br />
                            <label htmlFor="pasword">Password</label> <br />
                            <input className=' w-1/2 rounded mt-2 mb-5 outline-none pl-5 border-black border-2 h-12' {...register("password", { required: true })} type='password' /> <br />
                            <label htmlFor="pasword">Re-Password</label> <br />
                            <input className=' w-1/2 rounded mt-2 mb-5 outline-none pl-5 border-black border-2 h-12' {...register("password2", { required: true })} type='password' /> <br />
                            {/* errors will return when field validation fails  */}
                            {errors.exampleRequired && <span>This field is required</span>}

                            <input className='bg-black cursor-pointer text-white px-8 py-2 font-semibold rounded' type="submit" value='Sign Up' />
                        </form>
                        <div className='mt-10'>
                            <p>Already have an account? <Link className='underline' to='/login'>Sign In here.</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;