import React from 'react';
import {ourServices} from "../services/serviceItems"

const Service = () => {
  return (
    <div className='md:flex md:flex-row md:justify-center md:h-[540px] md:gap-8 px-48 py-4'>
      {
        ourServices.slice(2,5).map((item)=>(
            <div className="md:w-1/3 border shadow-sm rounded-md overflow-hidden bg-white shadow-blue-300" key={item.id}>
                <div className="w-full h-[300px] overflow-hidden">
                    <img src={item.image} alt="" className='w-full h-full hover:scale-105 duration-200'/>
                </div>
                <div className="w-full flex flex-col gap-4 justify-start items-start p-2">
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
