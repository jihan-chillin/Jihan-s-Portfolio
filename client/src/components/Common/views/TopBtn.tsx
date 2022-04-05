import React from 'react';
import { useSelector } from 'react-redux';
import { TopButtonWrapper, TopTriangle } from '../styles/TopBtn.styles';

export function TopBtn(){
    const {color} = useSelector((state:any)=>state.theme)
    const dark = color.theme_1 == '#F2F2F2'

    const ScrollToTop = () =>{
        window.scrollTo({top : 0, left : 0, behavior : 'smooth'})
    }

    return(
            <TopButtonWrapper onClick={ScrollToTop}>
                <TopTriangle dark={dark} src="./top.png"/>
            </TopButtonWrapper>
        
    )
}