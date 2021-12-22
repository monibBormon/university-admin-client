import React from 'react';

const Features = () => {
    return (
        <div>
            <div className="container mx-auto py-16 px-5 lg:px-0">
                <div className="section-title mb-12">
                    <h4 className='text-5xl font-semibold pb-2'>Features</h4>
                    <span className='block w-20 h-1 bg-black'></span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="feature-box text-center px-10 shadow-lg py-10">
                        <div className="feature-icon mb-5">
                            <i class="fas fa-user-graduate text-5xl"></i>
                            {/* <i class="fas fa-award text-5xl"></i> */}
                            {/* <i class="far fa-bell text-5xl"></i> */}
                        </div>
                        <div className="feature-text">
                            <h4 className='text-2xl font-semibold mb-3'>Professional Teachers</h4>
                            <p>We have many well trained professional teachers to guide you and helo you to achieve your goal.</p>
                        </div>
                    </div>
                    <div className="feature-box text-center px-10 shadow-lg py-10">
                        <div className="feature-icon mb-5">
                            <i class="fas fa-award text-5xl"></i>
                        </div>
                        <div className="feature-text">
                            <h4 className='text-2xl font-semibold mb-3'>Get Awards</h4>
                            <p>We have many well trained professional teachers to guide you and helo you to achieve your goal.</p>
                        </div>
                    </div>
                    <div className="feature-box text-center px-10 shadow-lg py-10">
                        <div className="feature-icon mb-5">
                            <i class="far fa-bell text-5xl"></i>
                        </div>
                        <div className="feature-text">
                            <h4 className='text-2xl font-semibold mb-3'>Time Management</h4>
                            <p>We have many well trained professional teachers to guide you and helo you to achieve your goal.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;