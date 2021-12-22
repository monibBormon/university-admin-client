import React from 'react';
import { useForm } from "react-hook-form";

const AddCourse = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        fetch('http://localhost:5000/courses', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Course Successfully added !')
                    reset()
                }
            })
    }
    return (
        <div>
            <div className="container mx-auto">
                <div className="section-title text-center mb-10">
                    <h2 className='lg:text-5xl text-3xl mt-5 lg:mt-0 capitalize font-semibold'>Add Course for Student</h2>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className='border-b-2 w-full pl-5 mb-5 rounded-full py-3 outline-none' {...register("name", { required: true })} placeholder='Student Name' /> <br />
                    <input className='border-b-2 w-full pl-5 mb-5 rounded-full py-3 outline-none' {...register("title", { required: true })} placeholder='Course Title' /> <br />
                    <input className='border-b-2 w-full pl-5 mb-5 rounded-full py-3 outline-none' {...register("price", { required: true })} placeholder='Course Price' type='number' /> <br />
                    <input className='border-b-2 w-full pl-5 mb-5 rounded-full py-3 outline-none' {...register("body", { required: true })} placeholder='Course description' /> <br />
                    <input className='border-b-2 w-full pl-5 mb-5 rounded-full py-3 outline-none' {...register("img", { required: true })} placeholder='Student Image Link' type='url' /> <br />
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}

                    <input className='border-2 border-black px-14 font-semibold text-xl cursor-pointer rounded-full mx-auto block text-black py-2' type="submit" value='Add New Product' />
                </form>
            </div>
        </div>
    );
};

export default AddCourse;