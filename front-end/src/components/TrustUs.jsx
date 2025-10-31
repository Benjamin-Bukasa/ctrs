import React from 'react';
import CompanyTrust from './CompanyTrust';

const TrustUs = () => {
  return (
    <section className='md:px-64 md:pb-20 px-4 py-10'>
        <div className='text-center mb-10 md:flex md:flex-col md:justify-center md:items-center md:gap-1'>
            <h2 className='font-bold text-[32px] md:text-[40px] text-[#1B1C4A]'>Faites-nous confiance</h2>
            <p className='md:w-1/2 text-[18px] mt-4'>Nous avons eu le privilège de collaborer avec des entreprises et organisations de renom, renforçant ainsi notre expertise et notre engagement envers l'excellence.</p>
        </div>
      <CompanyTrust/>
    </section>
  );
}

export default TrustUs;
