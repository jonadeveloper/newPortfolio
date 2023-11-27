"use client"
import React , {useState,useRef} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import {motion,useInView} from 'framer-motion'

const projectsData = [
    {
        id:1,
        title:'poryecto web',
        description: 'hola soy jona dev',
        image: '/images/hero1.png',
        tag: ["All"],
        gitUrl: "/",
        previewUrl:"/"
    },
    {
        id:2,
        title:'poryecto web',
        description: 'hola soy jona dev',
        image: '/images/hero1.png',
        tag: ["All","Web"],
        gitUrl: "/",
        previewUrl:"/"
    },
    {
        id:3,
        title:'poryecto web',
        description: 'hola soy jona dev',
        image: '/images/hero1.png',
        tag: ["All","Web"],
        gitUrl: "/",
        previewUrl:"/"
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