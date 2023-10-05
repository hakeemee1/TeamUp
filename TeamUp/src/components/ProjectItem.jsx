import { AdjustmentsHorizontalIcon, AdjustmentsVerticalIcon, ArchiveBoxXMarkIcon } from '@heroicons/react/24/outline'
import React from 'react'

function ProjectItem({title, description, date, status}) {
  return (
    <div className='grid grid-cols-6 bg-blue-50 rounded-lg  items-center py-4 pl-10 mx-14 mt-3 shadow-md'>
        <h1 className=' font-medium text-blue-900'>{title}</h1>
        <h1>{description}</h1>
        <h1 className=' m-auto font-medium'>{date}</h1>
        <h1 className=' bg-red-400  w-16 p-1 text-center rounded-lg text-white ml-20'>{status}</h1>
        <AdjustmentsHorizontalIcon className=' w-7 h-7 text-blue-500 hover:scale-110 ml-40' />
        <ArchiveBoxXMarkIcon className=' w-7 h-7 text-red-400 hover:scale-110 m-auto' />

    </div>
  )
}

export default ProjectItem