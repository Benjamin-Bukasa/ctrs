import React from 'react';

const Hero = () => {
  return (
    <section className='sm:flex sm:flex-col sm:gap-20 md:flex md:flex-row md:justify-start md:items-center md:px-52 md:pt-32 pt-32 sm:pb-4 bg-[#1B1C4A] text-white'>
      <div className="flex flex-col justify-center items-center md:w-1/2 md:h-full md:flex md:flex-col md:items-start md:justify-center md:gap-8 gap-4">
        <h1 className='w-full text-[32px] text-center md:text-start md:w-[95%] md:text-[52px] font-bold md:leading-tight'><span className='text-[#cb9f08]'>Cabinet Transparency</span> Accélérez la croissance de votre entreprise</h1>
        <p className='w-[90%] m-auto md:w-full text-center md:text-start md:text-[16px] mb-6'>CTRS Sarlu accompagne les entreprises en RDC et à l’international dans l’optimisation de leurs opérations et la gestion des ressources humaines. </p>
        <button className='btnNav'>Nous contacter</button>
      </div>
      <div className="w-full h-full flex flex-col justify-center md:w-[720px] md:h-full md:flex md:flex-row md:justify-center md:items-center">
        <img src="images/landingImage.png" alt="" className='w-full h-full md:w-[640px] md:h-[720px]'/>
      </div>
    </section>
  );
}

export default Hero;
