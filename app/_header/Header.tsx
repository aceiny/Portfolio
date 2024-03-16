import React from 'react'
import wizard from "@/public/wizard.png"
import Image from 'next/image'
import Nav_Buttons from './Nav_Buttons'
const Header = () => {

    return (
        <div className=' h-screen w-full overflow-hidden flex items-center justify-center'>
            <div className=' relative'>
                <Image
                    src={wizard}
                    className='Header_image'
                    alt="Picture of the author"
                />
                <Nav_Buttons/>
            </div>
        </div>
    )
}

export default Header