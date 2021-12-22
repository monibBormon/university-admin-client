import React from 'react';
import './Hero.css'

const Hero = () => {
    return (
        <div className='hero-area'>
            <div className="container mx-auto py-16">
                <div className="grid grid-cols-2 gap-4 items-center">
                    <div className='hero-text'>
                        <h2 className='text-6xl mb-8'>Better Education <br /> Better World</h2>
                        <p className='mb-8'>Wondering how this is possible and whether learning in schools is sufficient? What else can you do to get more knowledge and experience?</p>
                        <button className='bg-black text-white px-8 font-semibold rounded py-2'>Learn More</button>
                    </div>
                    <div className="hero-img">
                        <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;