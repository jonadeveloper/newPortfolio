"use client"
import React , {useState} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

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
    const handleTagChange = (newTag)=>{
        setTag(newTag)
    };
    const filterProjects = projectsData.filter((project)=>
        project.tag.includes(tag)
    );
  return (
    <>
        <h2 className='text-center text-4xl font-bold text-white'>Mis proyectos</h2>
        <div className='text-white flex flex-row justify-center items-center gap-2 py-6' id='proyectos'>
            <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
            <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
        </div>
        <div className='grid md:grid-cols-3 gap-8 md:gap-12'>{filterProjects.map((project)=>(
            <ProjectCard
             key={project.id}
             title={project.title}
             description={project.description}
             imgUrl={project.image}
             tag={project.tag}
             gitUrl={project.gitUrl}
             previewUrl={project.previewUrl}
            />
        ))}</div>
    </>
    )
}