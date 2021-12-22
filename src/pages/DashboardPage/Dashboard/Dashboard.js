import React from 'react';
import { Link, Link as NavLink, Outlet } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';

const Dashboard = () => {
    const { admin } = useFirebase()

    return (
        <div>
            <div className="md:container md:mx-auto px-5 lg:px-0 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
                    <ul className='lg:mt-8 mt-0 text-center lg:text-left'>
                        <li>
                            {admin && <div>
                                <NavLink className='block text-lg mb-2' to={`/dashboard`}>DashBoard</NavLink>
                                <NavLink className='block text-lg mb-2' to={`/dashboard/all-courses`}>All Courses</NavLink>
                                <NavLink className='block text-lg mb-2' to={`/dashboard/add-course`}>Add Course</NavLink>
                                <NavLink className='block text-lg mb-2' to={`/dashboard/make-admin`}>Make Admin</NavLink>
                            </div>}
                        </li>
                    </ul>
                    <div className='col-span-6'>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;