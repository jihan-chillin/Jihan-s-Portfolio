import React from 'react'
import { useSelector } from 'react-redux';

import {
    ImageTextWrapper,
    InfoImage,
    InfoText
} from '../styles/ImageTextInfo.styles'

export interface IImageTextInput{
    page? : string;
    imagePath? :string;
    info : string;
}

export function ImageTextInput({
    page,
    imagePath,
    info
}:IImageTextInput){
    const {color} = useSelector((state:any)=>state.theme);
    const dark = color.theme_1 == '#F2F2F2'
    
    return (
        <ImageTextWrapper>
            <InfoImage dark={dark}src={imagePath}/>
            <a href={page}><InfoText>{info}</InfoText></a>
        </ImageTextWrapper>
    )
}