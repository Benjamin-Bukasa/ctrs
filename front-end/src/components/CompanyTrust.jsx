import React from 'react'
import { trustUsItems } from '../services/trustUsItems';

function CompanyTrust() {
  return (
    <div className='md:flex flex-wrap md:justify-center md:gap-4 gap-6'>
        {
            trustUsItems.map((item)=>(
                <div key={item.id} className='md:w-[10%] bg-gray-100 rounded-lg overflow-hidden'>
                    <img src={item.image} alt={item.description} className='w-full h-full object-contain'/>
                </div>
            ))
        }
    </div>
  )
}

export default CompanyTrust