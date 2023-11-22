import React from 'react'

const achievementList = [
    {
        metric:'Proyectos',
        value:'20+'
    },
    {
        metric:'Contribuciones',
        value:'80+'
    },
    {
        metric:'Articulos',
        value:'10+'
    },
    {
        metric:'Contenido RRSS',
        value:'30+'
    },
]

export default function AchievementsSection() {
  return (
    <div className='py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <div className='border-[#33353F] border rounded-md py-8 px-17 flex flex-row items-center justify-between'>
        {achievementList.map((achievement,index)=>{
            return(
                <div key={index} className='flex flex-col items-center justify-center mx-4'>
                    <h2 className='text-white text-4xl font-bold'>
                        {achievement.value}
                    </h2>
                    <p className='text-[#ADB7BE] text-base'>
                        {achievement.metric}
                    </p>
                </div>
            )
        })}
        </div>
    </div>
  )
}
