import React, { type Dispatch, type SetStateAction } from 'react';
import type { TechnologiesType } from '../types/technologiesType';
import TechnologyCard from './TechnologyCard';
interface StackPropsType{
    technologies:TechnologiesType[],
    selectedStack: TechnologiesType[],
    setselectedStack:Dispatch<SetStateAction<TechnologiesType[]>>
}

const AllTechnology = ({technologies,selectedStack,setselectedStack}:StackPropsType) => {
    return (
        <div className="grid grid-cols-3 ml-23 gap-4 mt-10 w-5xl">
            {
              technologies.map((technology:TechnologiesType)=>{
               return (
                <TechnologyCard key={technology.id} technology={technology} selectedStack={selectedStack} setselectedStack={setselectedStack}/>
              )
             })
            }
        </div>
        );
    };

export default AllTechnology;