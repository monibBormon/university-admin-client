import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';

const DashBoardHome = () => {
    const { user } = useFirebase()
    return (
        <div>
            <div className="container mx-auto">
                <Link to='/dashboard'><h2 className='text-center text-4xl font-semibold mb-10'>Dashboard</h2></Link>
                <div className="dashboard-home">
                    <h3>Welcome! <span className='capitalize font-semibold text-2xl'>{user.displayName}</span> to the NSU Dashboard</h3>
                    <h4 className='mt-5 font-semibold mb-3'>Features</h4>
                    <ul>
                        <li><i className="fas fa-arrow-right"></i> Here on the left side is the navigation to control.</li>
                        <li><i className="fas fa-arrow-right"></i> You Can add Courses for the students</li>
                        <li><i className="fas fa-arrow-right"></i> Also you can view details and delete courses</li>
                        <li><i className="fas fa-arrow-right"></i> Also a page for make another admin</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashBoardHome;