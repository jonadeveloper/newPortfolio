"use client"
import React, {useTransition , useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

export default function AboutSection() {
const [tab, setTab] = useState("Habilidades")
const [ isPending , startTransition] = useTransition()
const handleTabChange = (id)=>{
    startTransition(()=>{
        setTab(id)
    })
}
const TAB_DATA = [
    {
        title: "Habilidades",
        id: "Habilidades",
        content: (
            <ul className='list-disc pl-2'>
                <li>Html - Css - JavaScript</li>
                <li>Git - GitHub</li>
                <li>Node.Js - Express</li>
                <li>React.Js</li>
                <li>SQL</li>
            </ul>
        )
    },
    {
        title: "Educacion",
        id: "Educacion",
        content: (
            <ul className='list-disc pl-2'>
                <li>C.E.N.S N° 451</li>
                <li>Henry Bootcamp</li>
                <li>Universidad Abierta Interamericana - UAI</li>
            </ul>
        )
    },
    {
        title: "Certificacion",
        id: "Certificacion",
        content: (
            <ul className='list-disc pl-2'>
                <li>Bachiller en ciencias sociales - Graduado</li>
                <li>Full Stack Web Developer - Graduado</li>
                <li>Analista programador - En curso</li>
            </ul>
        )
    }
]
  return (
    <section className='text-white h-screen'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16' id='sobre-mi'>
            <Image src="/images/about.png" width={500} height={500}/>
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full pt-6'>
                <h2 className='text-4xl font-bold text-white mb-4'>Sobre mi</h2>
                <p className='text-base lg:text-lg'>
                Soy un desarrollador web full stack y analista programador en formación. 
                Me considero un apasionado por la tecnologia y la creación de aplicaciones web 
                interactivas y responsivas.
                Aprendo rápido y siempre busco ampliar mis conocimientos y habilidades para mantenerme al 
                dia con las tendencias del mercado tech. 
                <br/>
                Tambien me gusta compartir mi conocimiento mediante la creacion de contenido en redes 
                sociales.

                </p>
                <div className='flex flex-row justify-start mt-8'>
                    <TabButton selectTab={()=> handleTabChange("Habilidades")} active={tab === "Habilidades"}>
                        {""}
                        Habilidades{""}
                    </TabButton>
                    <TabButton selectTab={()=> handleTabChange("Educacion")} active={tab === "Educacion"}>
                        {""}
                        Educación{""}
                    </TabButton>
                    <TabButton selectTab={()=> handleTabChange("Certificacion")} active={tab === "Certificacion"}>
                        {""}
                        Certificaciones{""}
                    </TabButton>
                </div>
                <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
            </div>
        </div>
    </section>
  )
}
