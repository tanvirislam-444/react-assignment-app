import { use, useState } from 'react';
import type { TechnologiesType } from '../types/technologiesType';
import AllTechnology from './AllTechnology';
import SelectedStack from './SelectedStack';

export interface TechnologiesProps{
    technologiesPromise:Promise<TechnologiesType[]>
}

const Technologies = ({technologiesPromise}:TechnologiesProps) => {
    const technologies= use(technologiesPromise);
    const [selectedStack,setselectedStack]=useState<TechnologiesType[]>([]);
    return ( 
        <div>
            <div className='lg:ml-15 sm:text-center lg:text-left'>
               <h2 className='font-bold text-4xl'>Explore the <span className='brand-gradient-text bg-clip-text text-transparent'>Technologies</span></h2>
               <p className='text-[#475569] py-3'>Pick one technology per category to build your ideal stack.</p>
            </div>
            <div className='flex flex-col lg:flex-row lg:ml-15 sm:ml-2 '>
            <div className="w-full lg:w-[75%] ">
                <AllTechnology technologies={technologies} selectedStack={selectedStack} setselectedStack={setselectedStack}/>
            </div>
            <div className="w-full lg:w-[25%] ">
                <SelectedStack selectedStack={selectedStack} setselectedStack={setselectedStack}/>
            </div>
            </div>
         </div>
    );
};

export default Technologies;