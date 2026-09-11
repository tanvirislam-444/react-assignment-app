import React, { use } from 'react';
import type { TechnologiesType } from '../types/technologiesType';
import AllTechnology from './AllTechnology';
import SelectedStack from './SelectedStack';

export interface TechnologiesProps{
    technologiesPromise:Promise<TechnologiesType[]>
}

const Technologies = ({technologiesPromise}:TechnologiesProps) => {
    const technologies= use(technologiesPromise);
    console.log(technologies)
    return (
        <div>
            <div className='ml-25'>
               <h2 className='font-bold text-4xl'>Explore the <span className='bg-[linear-gradient(90deg,#FF5722_0%,#D81B7E_50%,#7C3AED_100%)] bg-clip-text text-transparent'>Technologies</span></h2>
               <p className='text-[#475569] py-3'>Pick one technology per category to build your ideal stack.</p>
            </div>
            <div className='flex'>
            <div>
                <AllTechnology technologies={technologies}/>
            </div>
            <div>
                <SelectedStack/>
            </div>
            </div>
         </div>
    );
};

export default Technologies;