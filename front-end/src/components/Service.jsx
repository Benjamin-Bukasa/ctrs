import React from 'react';
import {ourServices} from "../services/serviceItems"

const Service = () => {
  return (
    <div className='w-full flex flex-col gap-4 px-2 py-4 md:px-48 md:flex md:flex-row md:justify-center md:h-[540px] md:gap-8 '>
      {
        ourServices.slice(2,5).map((item)=>(
            <div key={item.id} className="w-full md:w-[460px] border shadow-sm rounded-md overflow-hidden bg-white shadow-blue-300" >
                <div className="w-full h-[200px] sm:h-[300px] md:h-[300px] overflow-hidden">
                    <img src={item.image} alt="" className='w-full h-full hover:scale-105 duration-200'/>
                </div>
                <div className="w-full flex flex-col gap-4 justify-start items-start p-4">
                    <h3 className="font-semibold text-[18px]">{item.title}</h3>
                    <p className="">{item.description}</p>
                    <button className='btnNav'>Commander</button>
                </div>
            </div>
        ))
      }
    </div>
  );
}

export default Service;
