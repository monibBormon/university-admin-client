import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const StudentDetails = () => {
    const { id } = useParams()
    console.log(id)
    const [course, setCourse] = useState({})
    useEffect(() => {
        fetch(`https://aqueous-waters-71286.herokuapp.com/course-details/${id}`)
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [id])
    return (
        <div>
            <div className="container mx-auto py-10">
                <div className="grid grid-cols-6 gap-4">
                    <div className=" col-start-2 col-span-4 details-box rounded-lg shadow-lg mx-auto px-10 py-5">
                        <img className='w-40 mx-auto rounded' src={`data:image;base64,${course.img}`} alt="student bg" />
                        <div className='mt-5 text-center'>
                            <h4 className='text-3xl font-semibold mb-3'>{course.name}</h4>
                            <p className='mb-2'>Course Title: {course.title}</p>
                            <p>Course Price: ${course.price}</p>
                            <p>{course.body}</p>
                        </div>
                        <div className='text-center'>
                            <Link to='/dashboard/all-courses'><button className='mt-5 border-2 border-black px-5 py-1 rounded font-semibold'>Back To all Student List</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentDetails;