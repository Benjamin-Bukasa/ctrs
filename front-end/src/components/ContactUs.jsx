import React from 'react';

const ContactUs = () => {
  return (
    <section className='w-full flex flex-col px-4 py-4 md:flex md:flex-flow md:px-40 md:py-20'>
      <div className="w-full flex bg-blue-600 text-white pl-40  rounded-3xl overflow-hidden">
            <div className="w-full md:w-1/2 md:flex md:flex-col md:justify-center gap-2 py-16">
                <h6 className='text-[14px]'>Votre croissant, notre mission</h6>
                <h3 className='text-[44px] font-semibold leading-[44px]'>Votre partenaire idéal pour <span className='text-[#e9b817]'>la croissance</span> de votre entreprise</h3>
                <div className="flex justify-start items-center gap-8">
                    <button className='btn'>Nous contacter</button>
                    <div className="w-1/2 flex justify-start items-center gap-4">
                        <div className="rounded-full w-16 h-16 overflow-hidden">
                            <img src="images/contact.jpeg" alt="" className='w-[200px]'/>
                        </div>
                        <div className="flex flex-col">
                            <p className="">Contactez-nous au :</p>
                            <p className="font-semibold">+243 980 069 950</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:w-1/2 bg-cover bg-center bg-[url('images/contact.jpeg')]"></div>
      </div>
    </section>
  );
}

export default ContactUs;
