import React from 'react'
import GitHubIcon from '../../../public/github-icon.svg'
import LinkedinIcon from '../../../public/linkedin-icon.svg'
import Link from 'next/link'
import Image from 'next/image'


export default function EmailSection() {
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4'>
        <div>
            <h5 className='text-xl font-bold text-white my-2'>Contactame</h5>
            <p className='text-[#ADB7BE] mb-4 max-w-md'>
            {""}
            Actualmente estoy buscando nuevas oportunidades, 
            mi bandeja de entrada siempre es si tienes alguna pregunta.
            </p>
            <div className='socials flex flex-row gap-2'>
                <Link href='github.com'>
                    <Image src={GitHubIcon} alt='github icon'/>
                </Link>
                <Link href='linkedin.com'>
                    <Image src={LinkedinIcon} alt='linkedin icon'/>
                </Link>
            </div>
        </div>
        <div>
            <form className='flex flex-col'>
                <div className='mb-6'>
                <label htmlFor="email" 
                type="email" 
                className='text-white block mb-2 text-sm font-medium'>
                    Tu email
                </label>
                <input type="email" 
                id='email' 
                required 
                className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full py-2.5'
                placeholder='example@example.com' />
                </div>
                <div className='mb-6'>
                <label htmlFor="subject" 
                type="text" 
                className='text-white block mb-2 text-sm font-medium'>
                    Asunto
                </label>
                <input type="text" 
                id='subject' 
                required 
                className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full py-2.5'
                placeholder='example@example.com' />
                </div>
                <div className='mb-6'>
                <label htmlFor="message"
                className='text-white block text-sm mb-2 font-medium'>
                    Mensaje
                </label>
                <textarea name="message"
                id="message" 
                className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full py-2.5'
                placeholder='Vamos a hablar acerca de...'/>
                </div>
                <button type='submit'
                className='bg-blue-500 hover:bg-blue-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'>
                    Enviar mensaje
                </button>
            </form>
        </div>
    </section>
    
  )
}
