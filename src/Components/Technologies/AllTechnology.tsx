import { type Dispatch, type SetStateAction } from 'react';
import type { TechnologiesType } from '../types/technologiesType';
import TechnologyCard from './TechnologyCard';
interface StackPropsType{
    technologies:TechnologiesType[],
    selectedStack: TechnologiesType[],
    setselectedStack:Dispatch<SetStateAction<TechnologiesType[]>>
}

const AllTechnology = ({technologies,selectedStack,setselectedStack}:StackPropsType) => {
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
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