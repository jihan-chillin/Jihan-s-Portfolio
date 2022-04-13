
import React, { useEffect } from "react"
import { useSelector } from "react-redux";
import { Sidebar } from "../Sidebar/Sidebar";

import {
    HeaderWrapper, 
    LogoImage, 
    MenuItem, 
    MenuWrapper,
} from './Header.styles'

export function Header (){
    const {color} = useSelector((state:any)=>state.theme)
    const dark = color.theme_1 == '#F2F2F2' 

    return(
        <HeaderWrapper>
           <a href="/"><LogoImage dark={dark}src="/logo.png"/></a>
                <MenuWrapper>
                    <MenuItem to="about" spy={true} smooth={true}>About</MenuItem>
                    <MenuItem to="skill" spy={true} smooth={true}>Skills</MenuItem>
                    <MenuItem to="project" spy={true} smooth={true}>Projects</MenuItem>
                    <MenuItem to="eduawards" spy={true} smooth={true}>Edu/Awards</MenuItem>
                    <MenuItem to="contact" spy={true} smooth={true}>Contact</MenuItem>
                    <Sidebar/>
               </MenuWrapper> 
        </HeaderWrapper>
    )
}

 