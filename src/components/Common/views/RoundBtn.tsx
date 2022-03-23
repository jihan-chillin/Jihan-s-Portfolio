import React from 'react';
import Link from 'next/link'
import { ButtonWrapper } from '../styles/RoundBtn.styles';

export interface IRoundButton{
    RoundButtonTitle : string;
}

export function RoundButton({
    RoundButtonTitle,
}:IRoundButton){
    return(
        <ButtonWrapper><Link href="/login">{RoundButtonTitle}</Link></ButtonWrapper>
    )
}