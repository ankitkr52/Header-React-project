import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Heroimg from '../../assets/strawberry.png'

import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { GrInstagram } from 'react-icons/gr';
import { ImGithub } from 'react-icons/im';


const Hero = () => {
    const [sidebar, setSidebar] = useState(false);
    return (
        <main className='bg-primary-dark md:py-6 md:px-12'>
            <section className='relative min-h-163.5 bg-linear-to-r from-primary to-secondary w-full rounded-xl md:rounded-xl shadow-md '>
                <div className="container mx-auto">
                    <Navbar sidebar={sidebar} setSidebar={setSidebar} />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-h-162.5 place-items-center">
                        {/* text-contaimer in hero section */}
                        <div className='text-white space-y-4 p-4 mt-70 md:mt-0'>
                            <h1 data-aos="fade-right" className='text-3xl pl-6 md:pl-14'>01_______</h1>
                            <h1 data-aos="fade-left" data-aos-delay="300" className='text-5xl font-bold uppercase text-shadow text-black'>A Healthy Fruit</h1>
                            <p data-aos="fade-up"data-aos-delay="600" className='text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, molestias sit magni perspiciatis deleniti eum id laborum soluta?</p>
                            <button data-aos="fade-up" className=' border border-white px-4 py-2 rounded-lg'>Shop Now</button>
                        </div>
                        {/* image-container  */}
                        <div>

                            <img src={Heroimg} alt="" data-aos="zoom-in"data-aos-delay="200" className="w-400px md:w-600px rounded-xl object-cover img-shadow relative z-1" />
                        </div>
                        {/* blank container */}
                        <div className='md:hidden'></div>
                    </div>
                </div>
                <h1 data-aos='fade-up'data-aos-delay="500" className='text-center text-white uppercase font-bold text-[80px] sm:text-[120px] md:text-[150px] xl:text-[180px] absolute bottom-0 w-full z-0 text-shadow'>Berries</h1>
                {
                    sidebar && (
                        <div className='absolute top-0 right-0 w-30 h-full bg-linear-to-b from-primary to-secondary z-10'>
                            <div className='w-full h-full flex justify-center flex-col items-center gap-4'>
                                {/* lining */}
                                <div className='w-1 h-20 bg-white'> </div>

                                <div className='inline-block p-2 rounded-full text-white cursor-pointer border-4 border-primary'>
                                    <FaFacebookSquare className='text-2xl' />
                                </div>

                                <div className='inline-block p-2 rounded-full text-white cursor-pointer border-4 border-primary' >
                                    <GrInstagram className='text-2xl' />
                                </div>

                                <div className='inline-block p-2 rounded-full text-white cursor-pointer border-4 border-primary'>
                                    <ImGithub className='text-2xl' />
                                </div>
                                <div className='inline-block p-2 rounded-full text-white cursor-pointer border-4 border-primary'>
                                    <FaLinkedin className='text-2xl' />
                                </div>
                                <div className='w-1 h-20 bg-white'> </div>
                            </div>
                        </div>
                    )
                }
            </section>
        </main>
    )
}

export default Hero
