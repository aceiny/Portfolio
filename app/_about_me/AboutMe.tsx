import React from 'react'
import laptop from "../../public/Laptop.svg"
import lamp from "../../public/Lamp.svg"
import Image from 'next/image'
const AboutMe = () => {
  return (
    <div id='about-me' className='section bg-purple-600 text-black h-screen flex gap-5  w-full'>
      <div className='flex flex-col w-[40vw]  items-center origin-top h-fit '>
        <Image
          className=' cursor-pointer'
          src={lamp}
          alt='lamp'
        />
        <Image
          src={laptop}
          alt='laptop'
        />
      </div>
      <div className=' flex flex-col bg-cyan-400 justify-center flex-1 px-[5vw]'>
        <p className='AboutMeTitle'>
        👋 hi im yacine
        </p>
        <p className='AboutMeText '>
          I like making fun, interactive things with code. I also talk & write about those things.
        </p>
      </div>
    </div>
  )
}

export default AboutMe