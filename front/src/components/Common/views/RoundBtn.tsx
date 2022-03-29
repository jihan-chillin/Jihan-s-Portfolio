import React, { useCallback } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { ButtonWrapper } from '../styles/RoundBtn.styles';

import { LOG_IN_REQUEST, LOG_OUT_REQUEST } from '../../../../reducers/userReducer';
import { useRouter } from 'next/router';


export function RoundButton(){
    const router = useRouter();
    const dispatch = useDispatch();
    const dummyUser = {id : 1, nickname : "김지한"}

    const Login = useCallback(()=>{
        // console.log("로그인 버튼클릭")
        // dispatch({
        //     type : LOG_IN_REQUEST,
        //     data : dummyUser,
        // })
        // console.log(dummyUser)
        router.push('./login')
    },[])

    const Logout = useCallback(()=>{
        console.log("로그아웃 버튼클릭")
        dispatch({
            type : LOG_OUT_REQUEST,
        })
    },[])

    const {me} = useSelector((state:any)=>state.user);
    
    return (
        <>
            {me 
                ? <ButtonWrapper onClick={Logout}>로그아웃</ButtonWrapper>
                : <ButtonWrapper onClick={Login}>로그인</ButtonWrapper>
            }
        </>
    )
}