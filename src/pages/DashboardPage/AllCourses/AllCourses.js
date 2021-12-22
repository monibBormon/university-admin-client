import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllCourses = () => {
    const [courses, setCourses] = useState([])
    const [isDelete, setIsDelete] = useState(null)

    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [isDelete])
    // delete product
    const handleDeleteProduct = (id) => {
        const confirmation = window.confirm('Are you sure product will be delete parmanently?')
        if (confirmation) {
            fetch(`http://localhost:5000/delete/${id}`, {
                method: 'DELETE',
                headers: { 'content-type': 'application/json' }
            }).then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        setIsDelete(true)
                        alert('Deleted Successfully.')
                    } else {
                        setIsDelete(false)
                    }
                })
        }
    }
    return (
        <div>
            <h2 className='text-center text-4xl font-semibold'>All Student List</h2>
            <div className='container mx-auto py-10'>
                <div className="flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Serial No.
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Student Name
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {courses.map((course, index) => (
                                            <tr key={course._id}>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900 capitalize">{index + 1}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900 capitalize">{course.name}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <Link to={`/student-details/${course._id}`}>
                                                        <button className='border-2 border-red-500 rounded-full px-2 mr-1'>View Details</button>
                                                    </Link>
                                                    <div onClick={() => handleDeleteProduct(course._id)} className="text-sm text-gray-900 capitalize inline-block"><button className='border-2 border-red-500 rounded-full px-2 mr-1'>Delete Student</button>
                                                    </div>

                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllCourses;