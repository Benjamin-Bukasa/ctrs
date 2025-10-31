import React from 'react'

const HomeIntro = () => {
  return (
    <section className='px-8 py-10 flex flex-col md:px-48 md:py-32 md:flex md:flex-row md:justify-center md:gap-16'>
        <div className='w-full md:w-1/3'>
            <img src="images/IntroImage.png" alt="" className='w-full md:w-[500px]'/>
        </div>
        <div className="w-full flex flex-col gap-4 md:w-1/2 md:flex md:flex-col md:justify-start md:gap-8">
            <h2 className='text-[56px] font-bold text-[#1B1C4A]'>Qui sommes-nous</h2>
            <p className='text-[18px] font-semibold'>CTRS (Cabinet Comptable Transparency), agréé par l’ONEC, repose sur l’intégrité, l’expertise et la transparence.
            Nous exerçons la profession d’Expert-Comptable en RDC et à l’international, selon la loi n°15/002.
            Notre mission: accompagner entreprises et organisations vers une gestion financière saine, transparente et durable.</p>
            <ul className='text-[18px]  flex flex-col gap-4 text- list-disc list-inside'>
                <li>Recrutement</li>
                <li>Placement de personnel</li>
                <li>Accompagnement comptable</li>
                <li>Audit</li>
                <li>Assistance fiscale</li>
                <li>Certification légale des comptes</li>
                <li>Formations professionnelles</li>
                <li>Payroll</li>
            </ul>
        </div>
    </section>
  )
}

export default HomeIntro
