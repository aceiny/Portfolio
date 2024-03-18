"use client"
import Image, { StaticImageData } from 'next/image' 
import React, { useEffect } from 'react'
import { getRandomColor } from '../_componants/colorFonc'
type Props = {
  setHover: React.Dispatch<React.SetStateAction<boolean>>,
  hover: boolean,
  text: string,
  image: StaticImageData,
  index: number,
  to : string,
  x: string,
  y: string,

}
const Nav_Button = ({
  setHover,
  hover,
  text,
  image,
  index,
  to,
  x,
  y,
}: Props) => {
  const [color , setColor ] = React.useState<string>('')
  useEffect(() => {
    setColor(getRandomColor())
  }, [])
  return (
    <a key={index} style={{ transform: `translate(${x}, ${y})` }} className={`absolute `} href={to} >
      <div data-text={text} onMouseLeave={() => setHover(false)} onMouseOver={() => setHover(true)} style={{backgroundColor : color }} className={`Header_icons HeaderNav p-1 Header_icons_rotation ${hover ? "paused-animation" : ""}`}>
        <Image
          data-text={text}
          className='mini-icon '
          src={image}
          width={84}
          alt=''
        />
      </div>
    </a>
  )
}

export default Nav_Button