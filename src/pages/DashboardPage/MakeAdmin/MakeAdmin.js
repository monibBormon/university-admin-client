import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [success, setSuccess] = useState(false)

    const onSubmit = data => {
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true)
                    reset()
                }
            })
    }
    return (
        <div className='lg:py-10 container mx-auto'>
            <h3 className='text-center text-2xl mb-5 font-semibold'>Make Admin </h3>
            {success && <div>
                <p className='text-red-500'>admin added succesfully</p>
            </div>}
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className='border-2 lg:w-1/2 w-full mx-auto block pl-5 rounded-full py-3 outline-none' {...register("email", { required: true })} placeholder='Email' /> <br />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                <input className='border-2 border-black px-14 font-semibold text-xl cursor-pointer rounded-full mx-auto block py-2' type="submit" value='Make admin' />
            </form>
        </div>
    );
};

export default MakeAdmin;