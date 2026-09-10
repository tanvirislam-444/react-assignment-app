import React from 'react';
import bannerLogo from '../assets/banner-stack.png'

const Banner = () => {
    return (
        <div className='flex justify-center items-center min-h-100 my-6 mx-5'>
            <div>
            <h1 className='font-bold text-5xl w-2xl'>Build Your Ideal <span className='bg-[linear-gradient(90deg,#FF5722_0%,#D81B7E_50%,#7C3AED_100%)] bg-clip-text text-transparent'>Development Stack</span></h1>
            <p className='text-[#475569] w-118.25 py-8'>Explore frontend, backend, database, and tooling options,
              compare them side by side, and put together the stack that fits your
              next project.</p>
              <div>
           <button className='bg-[linear-gradient(90deg,#F97316_0%,#EC4899_100%)] px-5 py-2 rounded-[10px] text-white'>Explore Technologies</button>
           <button className='px-7 py-2 border rounded-[10px] border-b-gray-400 mx-3'>Learn More</button>
           </div>
           </div>
           <img src={bannerLogo} alt="" />
        </div>
        
    );
};

export default Banner;