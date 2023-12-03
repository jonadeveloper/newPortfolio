"use client"
import React , {useState,useRef} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import {motion,useInView} from 'framer-motion'

const projectsData = [
    {
        id:1,
        title:'Studio Bad Dog',
        description: 'Web multipagina de una agencia de servicios de desarrollo web.',
        image: '/images/projects/project01.jpeg',
        tag: ["All"],
        gitUrl: "https://github.com/Jonatan-R-Villalva/estudio-badDog",
        previewUrl:"https://estudio-bad-dog.vercel.app/"
    },
    {
        id:2,
        title:'Clon de Tesla',
        description: 'Clon de website oficial de la empresa automotriz tesla.',
        image: '/images/projects/project02.jpeg',
        tag: ["All","Web"],
        gitUrl: "https://github.com/Jonatan-R-Villalva/clonTesla",
        previewUrl:"https://clon-tesla.vercel.app/"
    },
    {
        id:3,
        title:'Portfolio profesional',
        description: 'Portfolio web profesional para desarrollador web.',
        image: '/images/projects/project03.jpeg',
        tag: ["All","Web"],
        gitUrl: "https://github.com/Jonatan-R-Villalva/portfolio",
        previewUrl:"https://jvdesarrolloweb.vercel.app/"
    },
    {
        id:3,
        title:'Portfolio profesional',
        description: 'Portfolio web profesional para desarrollador web.',
        image: '/images/projects/project03.jpeg',
        tag: ["All","Web"],
        gitUrl: "https://github.com/Jonatan-R-Villalva/portfolio",
        previewUrl:"https://jvdesarrolloweb.vercel.app/"
    },{
        id:5,
        title:'Movie Source',
        description: 'Apliación web para buscar peliculas y ver sus trailers.',
        image: '/images/projects/project05.jpeg',
        tag: ["All","Web"],
        gitUrl: "https://github.com/Jonatan-R-Villalva/movie-source",
        previewUrl:"https://movie-source-self.vercel.app/"
    }
]

export default function ProjectsSection() {
    const [ tag , setTag ] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref,{once: true});
    const handleTagChange = (newTag)=>{
        setTag(newTag)
    };
    const filterProjects = projectsData.filter((project)=>
    project.tag.includes(tag)
    );
    const cardVariants = {
        initial: {y:50, opacity: 0},
        animate: {y: 0, opacity: 1}
    }
  return (
    <section>
        <h2 className='text-center text-4xl font-bold text-white'>Mis proyectos</h2>
        <div className='text-white flex flex-row justify-center items-center gap-2 py-6' id='proyectos'>
            <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
            <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
        </div>
        <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>{filterProjects.map((project,index)=>(
            <motion.li 
            key={index}
            variants={cardVariants} 
            initial="initial" 
            animate={isInView ? "animate" : "initial"}
            transition={{duration: 0.3 , delay: index * 0.4}}>
            <ProjectCard
             key={project.id}
             title={project.title}
             description={project.description}
             imgUrl={project.image}
             tag={project.tag}
             gitUrl={project.gitUrl}
             previewUrl={project.previewUrl}
            />
            </motion.li>
        ))}</ul>
    </section>
    )
}