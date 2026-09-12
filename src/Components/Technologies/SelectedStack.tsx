import React, { type Dispatch, type SetStateAction } from "react";
import type { TechnologiesType } from "../types/technologiesType";
interface ISelectedProps {
  selectedStack: TechnologiesType[];
  setselectedStack: Dispatch<SetStateAction<TechnologiesType[]>>;
}

const SelectedStack = ({ selectedStack, setselectedStack }: ISelectedProps) => {
    const handleRemoveTechnology = (technology:TechnologiesType)=>{
        const restTechnology= selectedStack.filter((item)=> item.name !== technology.name)
        setselectedStack(restTechnology)
    }
  return (
    <div className="px-8 py-5 mt-10 ml-20 border border-gray-200 bg-white p-6 rounded-[10px] shadow-sm">
      <div>
        <h3 className="font-semibold text-2xl">Your Stack</h3>
        <p className="text-[#475569]">
          {selectedStack.length} Technology Selected
        </p>
      </div>
        {selectedStack.length === 0 ? (
    <div className="h-[180px] flex items-center justify-center">
      <p className="px-20 py-15 border border-gray-200 bg-white rounded-[10px] text-[#475569]">Your Stack is empty</p>
    </div>
  ):(selectedStack.map((technology: TechnologiesType) => {
        return (
          <div
            key={technology.id}
            className="flex justify-between gap-20 mt-3 border border-gray-200 bg-white p-2 rounded-[10px]"
          >
            <div className="flex items-center pl-2 ">
              <img
                src={technology.icon}
                alt=""
                className="h-10 w-10 pr-3"
              />

              <div>
                <h3 className="font-semibold">
                  {technology.name}
                </h3>

                <p className="text-[#475569]">
                  {technology.category}
                </p>
              </div>
            </div>
            <button className="font-semibold text-4xl text-[#94A3B8] cursor-pointer" onClick={()=>handleRemoveTechnology(technology)}>
              ×
            </button>
          </div>
        );
      }))}
      <div className="mt-2 text-center">
        <button onClick={() => setselectedStack([])} className="border border-[#ED8C85] px-5 py-2 rounded-[10px] text-[#D82C20] font-semibold ">
          Remove All
        </button>
      </div>

    </div>
  );
};

export default SelectedStack;
