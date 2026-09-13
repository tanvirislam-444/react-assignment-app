import React from 'react';
import bannerLogo from '../assets/banner-stack.png'

const Banner = () => {
    return (
        <div className='flex md:ml-30 justify-center items-center min-h-100 my-6 mx-5 flex-col md:flex-row'>
            <div className="w-full text-center md:w-1/2 md:text-left">
            <h1 className='font-bold text-5xl w-full md:text-5xl md:w-2xl'>Build Your Ideal <span className='brand-gradient-text bg-clip-text text-transparent'>Development Stack</span></h1>
            <p className='text-[#475569]  w-full md:w-118.25 py-8 '>Explore frontend, backend, database, and tooling options,
              compare them side by side, and put together the stack that fits your
              next project.</p>
              <div className='flex justify-center md:justify-start'>
           <button className='brand-gradient px-5 py-2 rounded-[10px] text-white'>Explore Technologies</button>
           <button className='px-7 py-2 rounded-[10px] border-gray-200 bg-white p-6 shadow-sm mx-3 text-[#374151]'>Learn More</button>
           </div>
           </div>
           <img src={bannerLogo} alt=""/>
        </div>
        
    );
};

export default Banner;