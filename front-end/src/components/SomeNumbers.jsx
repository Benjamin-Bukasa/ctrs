import React from 'react';


const SomeNumbers = () => {

    const numbers = [
        { id: 1, value: '10+', label: 'd\'années d\'existence' },
        { id: 2, value: '12+', label: 'Entreprises qui nous font confiance' },
        { id: 3, value: '25+', label: 'Secteurs couverts' },
        { id: 4, value: '10+', label: 'Années d\'Expérience' },
    ];

  return (
    <>
    <section className='py-10 bg-blue-100 '>
        <div className='bg-blue-100 md:flex md:justify-center md:items-center md:gap-24 md:py-4'>
            {
                numbers.map((number) => (
                    <div key={number.id} className='text-center p-6 m-4'>
                     <h2 className='text-4xl font-bold text-[#cb9f08]'>{number.value}</h2>
                    <p className='text-lg mt-2'>{number.label}</p>
                </div>
                ))   
            }
        </div>
    </section>
    </>
  );
}

export default SomeNumbers;
