import React, { useCallback } from 'react';
import Link from 'next/link'
import { useDispatch } from 'react-redux';
import { ButtonWrapper } from '../styles/RoundBtn.styles';

import { LOG_IN_REQUEST } from '../../../../reducers/userReducer';

export interface IRoundButton{
    RoundButtonTitle? : string;
}

export function RoundButton({
    RoundButtonTitle,
}:IRoundButton){
    // const dispatch = useDispatch();

    // const Login = useCallback(()=>{
    //     dispatch({
    //         type : LOG_IN_REQUEST,
    //     })
    // },[]);

    return(
        <ButtonWrapper><Link href="/login">{RoundButtonTitle}</Link></ButtonWrapper>
        // <ButtonWrapper onClick={Login}>{RoundButtonTitle}</ButtonWrapper>
        
   )
}