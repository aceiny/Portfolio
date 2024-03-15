"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import mini_wizard from "@/public/mini-wizard.png"
import crystal_ball from "@/public/crystal-ball.png"
import magic_wand from "@/public/magic-wand.png"
import spellbook from "@/public/spellbook.png"
import Nav_Button from './Nav_Button'
const Nav_Buttons = () => {
    const NavBtns = [
        {
            image: mini_wizard,
            text: "about me"
        },
        {
            image: crystal_ball,
            text: "projects"
        },
        {
            image: spellbook,
            text: "skills"
        },
        {
            image: magic_wand,
            text: "contact me"
        },
    ]
    const angleInc = 360 / NavBtns.length
    return (
        <div className='Header_icons_container absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[140%] h-[140%] rounded-full flex items-center justify-around '>
            {NavBtns.map((btn, index) => {
                const angleRed = (index * angleInc * Math.PI) / 180
                const raduis = 'calc(20vw - 1rem)'
                const x = `calc(${raduis} * ${Math.cos(angleRed)})`
                const y = `calc(${raduis} * ${Math.sin(angleRed)})`
                return (
                    <Nav_Button
                        key={index}
                        text={btn.text}
                        image={btn.image}
                        index={index}
                        x={x}
                        y={y}
                    />)
            })}
        </div>
    )
}

export default Nav_Buttons

/*import Image from 'next/image'
import React from 'react'
import mini_wizard from "@/public/mini-wizard.png"
import crystal_ball from "@/public/crystal-ball.png"
import magic_wand from "@/public/magic-wand.png"
import spellbook from "@/public/spellbook.png"
const Nav_Buttons = () => {
    return (
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
            <div data-text="contact me" className='Header_icons absolute bottom-0 left-[50%] translate-x-[-50%] '>
                <Image
                    src={magic_wand}
                    className='mini-icon'
                    width={84}
                    alt=''
                />
            </div>
        </div>
    )
}

export default Nav_Buttons*/