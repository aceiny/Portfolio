import Image, { StaticImageData } from 'next/image'
import React from 'react'
type Props = {
    text: string,
    image: StaticImageData,
    index: number,
    x: string,
    y: string,

}
const Nav_Button = ({
    text , 
    image,
    index,
    x,
    y,
} : Props) => {
  return (
    <button  key={index} style={{transform: `translate(${x}, ${y})`}} className={`absolute`}>
        <div data-text={text} className=' Header_icons Header_icons_rotation hover:'>
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