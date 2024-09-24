import React from 'react'
import { FaCircleArrowUp } from "react-icons/fa6";

function InputField({generateAnswer, handleInputField , value}) {
  return (
    <>
      <div className="h-auto w-full fixed bottom-0 flex justify-center items-center bg-slate-800">
        <div className="h-full w-[80%] my-3 flex justify-between border-2 bg-slate-700 border-slate-700 rounded-full shadow-md md:mb-2">
          <input type="text"value={value} onChange={(e)=>handleInputField(e)} className="h-10 w-[90%] px-3 text-gray-50 bg-slate-700 outline-none rounded-l-full md:px-14" placeholder="Ask areGen" />
          <button type="submit" className="h-10 w-[10%] text-3xl mr-1 text-gray-400 rounded-r-full flex items-center hover:text-gray-200" onClick={generateAnswer}><FaCircleArrowUp /></button>
        </div>
      </div>
    </>
  )
}

export default InputField