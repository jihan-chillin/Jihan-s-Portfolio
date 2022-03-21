import React from 'react';
import { TopButtonWrapper, TopTriangle } from '../styles/TopBtn.styles';

export function TopBtn(){
    const ScrollToTop = () =>{
        window.scrollTo({top : 0, left : 0, behavior : 'smooth'})
    }

    return(
            <TopButtonWrapper onClick={ScrollToTop}>
                <TopTriangle src="./top.png"/>
            </TopButtonWrapper>
        
    )
}