import React from 'react';
import { ButtonWrapper } from '../styles/RoundBtn.styles';

export interface IRoundButton{
    RoundButtonTitle : string;
}

export function RoundButton({
    RoundButtonTitle,
}:IRoundButton){
    return(
        <ButtonWrapper>{RoundButtonTitle}</ButtonWrapper>
    )
}