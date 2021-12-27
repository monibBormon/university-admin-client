import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';

const Dashboard = () => {
    const { admin, isLoading } = useFirebase()

    return (
        <div>
            {isLoading ? <div>
                <h2 className='text-center py-20 text-4xl'>Loading..</h2>
            </div> : <div className="md:container md:mx-auto px-5 lg:px-0 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
                    <ul className='lg:mt-8 mt-0 text-center lg:text-left'>
                        <li>
                            {admin && <div>
                                <NavLink className='lg:block mr-3 border-2 lg:border-0 p-1 rounded lg:p-0 lg:rounded-none inline-block text-lg mb-2 font-semibold' to={`/dashboard`}>DashBoard</NavLink>
                                <NavLink className='lg:block mr-3 border-2 lg:border-0 p-1 rounded lg:p-0 lg:rounded-none inline-block text-lg mb-2 font-semibold' to={`/dashboard/all-courses`}>All Students</NavLink>
                                <NavLink className='lg:block mr-3 border-2 lg:border-0 p-1 rounded lg:p-0 lg:rounded-none inline-block text-lg mb-2 font-semibold' to={`/dashboard/add-course`}>Add Student</NavLink>
                                <NavLink className='lg:block mr-3 border-2 lg:border-0 p-1 rounded lg:p-0 lg:rounded-none inline-block text-lg mb-2 font-semibold' to={`/dashboard/make-admin`}>Make Admin</NavLink>
                            </div>}
                        </li>
                    </ul>
                    <div className='col-span-6'>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>}
        </div>
    );
};

export default Dashboard;