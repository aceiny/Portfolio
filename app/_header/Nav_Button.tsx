import Image, { StaticImageData } from 'next/image'
import React from 'react'
type Props = {
  setHover: React.Dispatch<React.SetStateAction<boolean>>,
  hover: boolean,
  text: string,
  image: StaticImageData,
  index: number,
  x: string,
  y: string,

}
const Nav_Button = ({
  setHover,
  hover,
  text,
  image,
  index,
  x,
  y,
}: Props) => {
  return (
    <button key={index} style={{ transform: `translate(${x}, ${y})` }} className={`absolute`}>
      <div data-text={text} onMouseLeave={() => setHover(false)} onMouseOver={() => setHover(true)} className={`Header_icons Header_icons_rotation ${hover ? "paused-animation" : ""}`}>
        <Image
          data-text={text}
          className='mini-icon '
          src={image}
          width={84}
          alt=''
        />
      </div>
    </button>
  )
}

export default Nav_Button