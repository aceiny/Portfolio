import React from 'react'
import wizard from "@/public/wizard.png"
import mini_wizard from "@/public/mini-wizard.png"
import crystal_ball from "@/public/crystal-ball.png"
import magic_wand from "@/public/magic-wand.png"
import spellbook from "@/public/spellbook.png"
import Image from 'next/image'
const Header = () => {

    return (
        <div className=' h-screen w-full overflow-x-hidden flex items-center justify-center'>
            <div className=' relative'>
                <Image
                    src={wizard}
                    className='Header_image'
                    alt="Picture of the author"
                />
                <div className='Header_icons_container absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[140%] h-[140%] rounded-full flex items-center justify-around '>
                    <div data-text="about me" className='Header_icons absolute top-0 left-[50%] translate-x-[-50%] '>
                        <Image
                            data-text='mini_wizard'
                            className='mini-icon'
                            src={mini_wizard}
                            width={84}
                            alt=''
                        />
                    </div>
                    <div data-text="projects" className='Header_icons absolute top-[50%] left-0 translate-y-[-50%] '>
                        <Image
                            src={crystal_ball}
                            className='mini-icon'
                            width={84}
                            alt=''
                        />
                    </div>
                    <div data-text="skills" className='Header_icons absolute top-[50%] right-0 translate-y-[-50%] '>
                        <Image
                            src={spellbook}
                            className='mini-icon'
                            width={84}
                            alt=''
                        />
                    </div>
                    <div  data-text="contact me" className='Header_icons absolute bottom-0 left-[50%] translate-x-[-50%] '>
                        <Image
                            src={magic_wand}
                            className='mini-icon'
                            width={84}
                            alt=''
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header