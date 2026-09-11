import React from 'react';
import type { TechnologiesType } from '../types/technologiesType';
import TechnologyCard from './TechnologyCard';

const AllTechnology = ({technologies}) => {
    return (
        <div className="grid grid-cols-3 ml-23 w-5xl">
            {
              technologies.map((technology:TechnologiesType)=>{
               return (
                <TechnologyCard key={technology.id} technology={technology}/>
              )
             })
            }
        </div>
        );
    };

export default AllTechnology;