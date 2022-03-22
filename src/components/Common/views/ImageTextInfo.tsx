import React from 'react'

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
    return (
        <ImageTextWrapper>
            <InfoImage src={imagePath}/>
            <a href={page}><InfoText>{info}</InfoText></a>
        </ImageTextWrapper>
    )
}