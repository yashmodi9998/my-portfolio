import React from 'react'

function HeadingText({ title }: { title: string })  {
  return (
     <h2 className="text-3xl md:text-4xl font-bold text-center relative inline-block group mb-8 transition-colors duration-300">
      <span className=" group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
        {title}
      </span>
      <span className="block w-0 group-hover:w-full h-1 bg-[#58A2FF] transition-all duration-500 mx-auto mt-1"></span>
    </h2>
  )
}

export default HeadingText