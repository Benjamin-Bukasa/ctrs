import React from 'react';

const Hero = () => {
  return (
    <section className='md:flex md:justify-start md:items-start md:px-52 pt-64 pb-28 bg-[#1B1C4A] text-white'>
      <div className="w-1/2 h-full flex flex-col items-start justify-center gap-8 ">
        <h1 className='md:w-[95%] md:text-[52px] font-bold md:leading-0'><span className='text-[#cb9f08]'>Cabinet Transparency</span> Accélérez la croissance de votre entreprise</h1>
        <p className='md:text-[16px] mb-6'>CTRS Sarlu accompagne les entreprises en RDC et à l’international dans l’optimisation de leurs opérations et la gestion des ressources humaines. Nos services sur mesure, de la gestion des talents à l’externalisation des processus, transforment les défis RH en opportunités stratégiques pour maximiser la performance et assurer le succès durable de nos clients..</p>
        <button className='btnNav'>En savoir plus</button>
      </div>
      <div className="w-[720px] h-full absolute right-48 top-20 flex justify-center items-center">
        <img src="images/landingImage.png" alt="" className='md:w-[640px] h-[720px]'/>
      </div>
    </section>
  );
}

export default Hero;
