"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
        const handleDownloadPDF = () => {
        const pdfFilePath = '/images/JonatanVillalva-fullStackWebDeveloper.pdf';
    
        const link = document.createElement('a');
        link.href = pdfFilePath;
        link.download = 'jv_cv.pdf';
        document.body.appendChild(link);
      
        link.click();
      
        document.body.removeChild(link);
        };
    return (
    <section className='lg:py-16'>
        <div className='grid grid-cols-1 sm:grid-cols-12'>
            <motion.div 
            initial={{opacity:0, scale:0.5}} 
            animate={{opacity: 1, scale: 1}} 
            transition={{duration: 0.5}} 
            className='col-span-8 place-self-center text-center sm:text-left justify-self-start'>
                <h1 className="text-white mb-4  text-4xl sm:text-4xl lg:text-5xl lg:leading-normal font-extrabold">
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-800 to-secondary-500'>
                        Hola, soy {""}
                    </span>
                    <br/>
                    <TypeAnimation
                    sequence={[
                    'Jona',
                    1000,
                    'Web Developer',
                    1000,
                    'Full Stack web Developer',
                    1000,
                    'Content Creator',
                    1000,
                    'Jona',
                    1000
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '1.5em', display: 'inline-block' }}
                    repeat={isFinite(2000)}
                    />
                </h1>
                <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-2xl'>
                    Saludos cordiales. Bienvenidos a mi portfolio profesional.
                </p>
                <div>
                    <Link href="/#contacto" className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-400 via-primary-800 to-secondary-500 hover:bg-slate-200 text-white'>Contratame</Link>
                    <button onClick={handleDownloadPDF} className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-400 via-primary-800 to-secondary-500 hover:bg-slate-800 text-white mt-3'>
                        <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-2 py-2'>Descarga mi CV</span>
                    </button>
                </div>
            </motion.div>
            <motion.div 
            initial={{opacity:0, scale:0.5}} 
            animate={{opacity: 1, scale: 1}} 
            transition={{duration: 0.5}} 
            className='col-span-4 place-self-center mb-6 mt-4 lg:mt-0'>
                <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative'>
                    <Image
                    src= "/images/hero2.png"
                    alt='hero-image'
                    className='rounded-full absolute tranform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                    width= {350}
                    height={350}
                    />               
                </div>
            </motion.div>
        </div>
    </section>
  )
}
