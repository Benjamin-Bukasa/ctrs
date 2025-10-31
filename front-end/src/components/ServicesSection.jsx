import React from 'react';
import Service from './Service';

const ServicesSection = () => {
  return (
    <section className='md:flex md:flex-col md:items-center md:gap-10 md:py-20 bg-blue-100 '>
      <div className="text-[#1B1C4A] md:flex md:flex-col md:justify-start md:items-center md:gap-5 md:px-40">
        <h2 className="font-bold md:text-center md:text-[52px]">Ce que nous faisons le mieux pour vous</h2>
        <p className="text-[18px] font-semibold md:text-center md:w-1/2">Nos services sur mesure, de la gestion des talents à l’externalisation des processus, transforment les défis RH en opportunités stratégiques pour maximiser la performance et assurer le succès durable de nos clients..</p>
      </div>
      <Service/>
      <div className="flex flex-col items-center">
          <button className='btnNav'>Plus de services</button>
      </div>
    </section>
  );
}

export default ServicesSection;
