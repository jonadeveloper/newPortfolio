import React from 'react'

export default function ({name, onClick , isSelected}) {
    const buttonStyles = isSelected 
    ? "text-white border-blue-500"
    : "text-[#ADB7BE] border-slate-500 hover:border-white"
  return (
    <button className={`${buttonStyles}
    rounded-full border-2 border-blue-500 px-6 py-3 text-xl cursor-pointer`}
    onClick={()=> onClick(name)}>
        {name}
    </button>
  )
}
