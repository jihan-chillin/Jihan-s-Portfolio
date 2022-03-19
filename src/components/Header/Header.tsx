import React from "react"

import {
    HeaderWrapper, 
    LogoImage, 
    MenuItem, 
    MenuWrapper,
    More
} from './Header.styles'

export function Header (){
    return(
        <HeaderWrapper>
           <LogoImage src="/logo.png"/>
                <MenuWrapper>
                    <MenuItem><a href="#me">About Me</a></MenuItem>
                    <MenuItem><a href="#skill">Skills</a></MenuItem>
                    <MenuItem><a href="#project">Projects</a></MenuItem>
                    <MenuItem><a href="#timeline">Timeline</a></MenuItem>
                    <More src="/more.png"/>
               </MenuWrapper> 
        </HeaderWrapper>
    )
}

 