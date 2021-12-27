import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './AllCourses.css'

const AllCourses = () => {
    const [courses, setCourses] = useState([])
    const [pageCount, setPageCount] = useState(0)
    const [page, setPage] = useState(0)

    const pageSize = 5
    useEffect(() => {
        fetch(`http://localhost:5000/courses?page=${page}&&size=${pageSize}`)
            .then(res => res.json())
            .then(data => {
                setCourses(data.result)
                const count = data.count;
                const pageNumber = Math.ceil(count / pageSize)
                setPageCount(pageNumber)
            })
    }, [page])

    return (
        <div>
            <h2 className='text-center text-4xl font-semibold'>All Student List</h2>
            <div className='container mx-auto py-10'>
                <div className="flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                {courses.map((course, index) => (
                                    <div key={course._id} className='flex shadow p-3 mb-3'>
                                        <img src={course.img} className='w-20 rounded' alt="" />
                                        <div className='ml-5'>
                                            <h3 className='text-2xl mb-2'>{course.name}</h3>
                                            <Link to={`/student-details/${course._id}`}>
                                                <button className='border-2 border-red-500 rounded-full px-2 text-sm mr-1'>View Details</button>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                                <div className="pagination">
                                    {
                                        [...Array(pageCount).keys()].map(number => <button className={number === page ? 'selected' : ''} key={number}
                                            onClick={() => setPage(number)}
                                        >{number + 1}</button>)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllCourses;