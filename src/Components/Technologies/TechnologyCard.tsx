import {type Dispatch, type SetStateAction } from "react";
import type { TechnologiesType } from "../types/technologiesType";
import { toast } from "react-toastify";
interface TechnologiesPropsType{
    technology:TechnologiesType,
    selectedStack: TechnologiesType[],
    setselectedStack:Dispatch<SetStateAction<TechnologiesType[]>>
}

const TechnologyCard = ({ technology,selectedStack,setselectedStack }:TechnologiesPropsType) => {
const isSelected = selectedStack.some(
  (item) => item.id === technology.id
);
 const handleSelectedStack = () => {
    if (isSelected) return;
    toast.success(`${technology.name} add successfully`);
    // SelectedStack logic
   setselectedStack([...selectedStack,technology])
  };

  return (
    <div
      className={`rounded-2xl bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg ${isSelected === true ? "border-4 border-emerald-300" : "border border-gray-200"}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <img src={technology.icon} alt={technology.name} className="h-12 w-12" />
        <span className="rounded-full bg-[#D1FAE5] text-[#059669] px-3 py-1 text-xs font-semibold">
          {technology.badge}
        </span>
      </div>

      {/* React Icon + Name */}
      <div className="mt-5 flex items-center gap-4">
        <h2 className="text-2xl font-bold text-gray-900">{technology.name}</h2>
      </div>

      {/* Description */}
      <p className="mt-4 text-sm leading-6 text-[#475569]">
        {technology.description}
      </p>

      {/* Info */}
      <div className="mt-5 flex items-center justify-between">
        <span className="rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600">
          {technology.category}
        </span>
        <span className="text-sm font-medium text-gray-500">
          {technology.difficulty}
        </span>

        <div className="flex items-center gap-1">
          <span className="text-yellow-500">★</span>
          <span className="font-semibold text-gray-800">
            {technology.rating}
          </span>
        </div>
      </div>

      {/* Button */}
      <button
        onClick={() => handleSelectedStack()}
        disabled={isSelected}
        className={`mt-6 w-full rounded-xl py-3 font-semibold ${isSelected === true ? "bg-[#D1FAE5] text-[#059669]" : "bg-black  text-[#ffffff] "}`}
      >
        {isSelected === true ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechnologyCard;
