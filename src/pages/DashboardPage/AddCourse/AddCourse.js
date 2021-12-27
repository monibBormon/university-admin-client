import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddCourse = () => {
    // const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [name, setName] = useState('')
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState(null)

    const onSubmit = e => {
        e.preventDefault()
        if (!image) {
            alert('Please add an Image')
            return;
        }
        const formData = new FormData()
        formData.append('name', name)
        formData.append('title', title)
        formData.append('price', price)
        formData.append('body', body)
        formData.append('image', image)
        const handleReset = () => {
            Array.from(document.querySelectorAll("input")).forEach(
                input => (input.value = "")
            );
            this.setState({
                itemvalues: [{}]
            });
        };
        fetch('http://localhost:5000/courses', {
            method: 'POST',
            body: formData
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    alert('Course Successfully added !')
                    // reset()
                    handleReset()
                }
            })
    }
    return (
        <div>
            <div className="container mx-auto">
                <div className="section-title text-center mb-10">
                    <h2 className='lg:text-5xl text-3xl mt-5 lg:mt-0 capitalize font-semibold'>Add new Course for Student</h2>
                </div>
                <form>
                    <input className='border-b-2 w-full pl-5 mb-5 rounded-full py-3 outline-none' onChange={e => setName(e.target.value)} placeholder='Student Name' /> <br />
                    <input className='border-b-2 w-full pl-5 mb-5 rounded-full py-3 outline-none' onChange={e => setTitle(e.target.value)} placeholder='Course Title' /> <br />
                    <input className='border-b-2 w-full pl-5 mb-5 rounded-full py-3 outline-none' onChange={e => setPrice(e.target.value)} placeholder='Course Price' type='number' /> <br />
                    <input className='border-b-2 w-full pl-5 mb-5 rounded-full py-3 outline-none' onChange={e => setBody(e.target.value)} placeholder='Course description' /> <br />
                    <input type='file' accept='image/*' onChange={e => setImage(e.target.files[0])} /> <br />
                    {/* errors will return when field validation fails  */}

                    <button onClick={onSubmit} className='border-2 border-black px-14 font-semibold text-xl cursor-pointer rounded-full mx-auto block text-black py-2' type="submit" >Add New Course</button>
                </form>
            </div>
        </div>
    );
};

export default AddCourse;