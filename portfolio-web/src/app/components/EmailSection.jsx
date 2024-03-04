"use client"
import React, {useState} from 'react'
import GitHubIcon from '../../../public/github-icon.svg'
import LinkedinIcon from '../../../public/linkedin-icon.svg'
import EmailIcon from '../../../public/emails-icon.svg'
import WhatsappIcon from '../../../public/whatsapp-icon.svg'
import Link from 'next/link'
import Image from 'next/image'


export default function EmailSection() {
    const [emailSubmited,setEmailSubmited] = useState(false);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value
        }
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";
        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSONdata
        }
        const response = await fetch(endpoint,options);
        const resData = await response.json();
        if(response.status === 200){
            console.log("Mensaje enviado")
            setEmailSubmited(true)
        }
    }
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4' id='contacto'>
        <div className='z-10'>
            <h5 className='text-xl font-bold text-white my-2'>Contactame</h5>
            <p className='text-[#ADB7BE] mb-4 max-w-md'>
            {""}
            Actualmente estoy buscando nuevas oportunidades, 
            mi bandeja de entrada siempre esta a tu disposición si tienes alguna pregunta.
            </p>
            <div className='socials flex flex-row gap-2'>
                <Link href='https://github.com/jonadeveloper' target='_blank'>
                    <Image src={GitHubIcon} alt='github-icon'/>
                </Link>
                <Link href='https://www.linkedin.com/in/jonatan-villalva-fullstack-developer/' target='_blank'>
                    <Image src={LinkedinIcon} alt='linkedin-icon'/>
                </Link>
                <Link href='mailto:jvillalva.sistemas@gmail.com' target='_blank'>
                    <Image src={EmailIcon} alt='email-icon'/>
                </Link>
                <Link href='https://wa.me/541138619940?text=Hola,%20quiero%20contactarte' target='_blank'>
                    <Image src={WhatsappIcon} alt='whatsapp-icon'/>
                </Link>
            </div>
        </div>
        <div>
        {emailSubmited ? (
        <p className="text-green-500 text-sm mt-2">
            mensaje enviado correctamente!
        </p>
        ) : (
            <form className='flex flex-col' onSubmit={handleSubmit}>
                <div className='mb-6'>
                <label htmlFor="email" 
                type="email" 
                className='text-white block mb-2 text-sm font-medium'>
                    Tu email
                </label>
                <input type="email" 
                name='email'
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
                name='subject'
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
                className='bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'>
                    Enviar mensaje
                </button>
                
            </form>
            )}
        </div>
    </section>
    
  )
}
