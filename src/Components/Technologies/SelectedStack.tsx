import React from "react";

const SelectedStack = () => {
  return (
    <div className="px-8 py-2 mt-10 ml-20 border border-gray-200 bg-white p-6 rounded-[10px] flex flex-col gap-20 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div>
        <h3 className="font-semibold">Your Stack</h3>
        <p className="text-[#475569]">2 Technology Selected</p>
      </div>
      <div>
        <button className="border border-[#ED8C85] px-5 py-2 rounded-[10px] text-[#D82C20] font-semibold">
          Remove All
        </button>
      </div>
    </div>
  );
};

export default SelectedStack;
