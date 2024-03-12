"use client"
import React, {useState} from 'react'
import GitHubIcon from '../../../public/github-icon.svg'
import LinkedinIcon from '../../../public/linkedin-icon.svg'
import EmailIcon from '../../../public/emails-icon.svg'
import WhatsappIcon from '../../../public/whatsapp-icon.svg'
import LocationIcon from '../../../public/location-pin-svgrepo-com.svg'
import Link from 'next/link'
import Image from 'next/image'


export default function EmailSection() {
    
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-8 gap-4' id='contacto'>
        <div className='z-10 m-auto'>
            <h5 className='text-xl font-bold text-white my-2'>Contactame</h5>
            <p className='text-[#ADB7BE] mb-4 max-w-md'>
            {""}
            Actualmente estoy buscando nuevas oportunidades, 
            mi bandeja de entrada siempre esta a tu disposición si tenes alguna pregunta.
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
        <div className='m-auto pt-12'>
        <h5 className='flex items-center justify-center text-xl text-center font-bold text-white my-2'>
            Mi localización
            <Image src={LocationIcon} alt='icon-location' />
        </h5>
        <iframe
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52467.916956628345!2d-58.28791971186763!3d-34.724223118572695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a32e38e45f5777%3A0x6a86dac21334524f!2sQuilmes%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1710198661332!5m2!1ses-419!2sar"
        className='w-[35rem] h-[22rem]'
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        />
        <p className='text-[#ADB7BE] mb-4 max-w-md'>
            {""}
        E-mail: jvillalva.sistemas@gmail.com
        </p>
        </div>
    </section>
    
  )
}
