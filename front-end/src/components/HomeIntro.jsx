import React from 'react'
import { motion } from 'framer-motion';

const HomeIntro = () => {
  return (
    <section className='px-8 py-10 flex flex-col md:px-48 md:pt-32 md:pb-8 md:flex md:flex-row md:justify-center md:gap-16'>
        <motion.div
                animate={{ x: [0, 15, 0] }}
                transition={{
                            repeat: Infinity,
                            duration: 4,
                            ease: "easeInOut"
                        }}  className='w-full md:w-1/3'>
            <img src="images/IntroImage.png" alt="" className='w-full md:w-[500px]'/>
        </motion.div>
        <div className="w-full flex flex-col gap-6 md:w-1/2 md:flex md:flex-col md:justify-start md:gap-8">
            <h2 className='font-bold text-[40px] md:text-[56px]  text-[#1B1C4A]'>Qui sommes-nous</h2>
            <p className='text-[18px] font-semibold'>CTRS (Cabinet Comptable Transparency), agréé par l’ONEC, repose sur l’intégrité, l’expertise et la transparence.
            Nous exerçons la profession d’Expert-Comptable en RDC et à l’international, selon la loi n°15/002.
            Notre mission: accompagner entreprises et organisations vers une gestion financière saine, transparente et durable dans le secteur ci-après:</p>
            <ul className='grid grid-cols-1 gap-4 text-[18px] md:grid md:grid-cols-2 md:gap-6'>
                <li className='py-4 px-2 border  hover:text-white hover:bg-[#2c2d7a] transition-colors ease-in-out delay-200 rounded-lg font-semibold shadow-sm shadow-[#2c2d7a67] '>Recrutement</li>
                <li className='py-4 px-2 border  hover:text-white hover:bg-[#2c2d7a] transition-colors ease-in-out delay-200 rounded-lg font-semibold shadow-sm shadow-[#2c2d7a67] '>Placement de personnel</li>
                <li className='py-4 px-2 border  hover:text-white hover:bg-[#2c2d7a] transition-colors ease-in-out delay-200 rounded-lg font-semibold shadow-sm shadow-[#2c2d7a67] '>Accompagnement comptable</li>
                <li className='py-4 px-2 border  hover:text-white hover:bg-[#2c2d7a] transition-colors ease-in-out delay-200 rounded-lg font-semibold shadow-sm shadow-[#2c2d7a67] '>Audit</li>
                <li className='py-4 px-2 border  hover:text-white hover:bg-[#2c2d7a] transition-colors ease-in-out delay-200 rounded-lg font-semibold shadow-sm shadow-[#2c2d7a67] '>Assistance fiscale</li>
                <li className='py-4 px-2 border  hover:text-white hover:bg-[#2c2d7a] transition-colors ease-in-out delay-200 rounded-lg font-semibold shadow-sm shadow-[#2c2d7a67] '>Certification légale des comptes</li>
                <li className='py-4 px-2 border  hover:text-white hover:bg-[#2c2d7a] transition-colors ease-in-out delay-200 rounded-lg font-semibold shadow-sm shadow-[#2c2d7a67] '>Formations professionnelles</li>
                <li className='py-4 px-2 border  hover:text-white hover:bg-[#2c2d7a] transition-colors ease-in-out delay-200 rounded-lg font-semibold shadow-sm shadow-[#2c2d7a67] '>Payroll</li>
            </ul>
        </div>
    </section>
  )
}

export default HomeIntro
