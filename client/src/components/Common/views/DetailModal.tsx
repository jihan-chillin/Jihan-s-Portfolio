import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
    ModalCloseButton, 
    ModalCloseButtonWrapper, 
    ModalContentInfo, 
    ModalContentTitle, 
    ModalContentWrapper, 
    ModalWrapper 
} from '../styles/DetailModal.styles';

import { TOGGLE_EDUAWARDS_DETAIL_REQUEST } from '../../../../reducers/EduAwardReducer';

export interface IDetailModal{
    cate? : string,
    detailId? : any,
}

export function DetailModal({
    detailId
}:IDetailModal){
    const {color} = useSelector((state:any)=>state.theme)
    const dark:boolean = color.theme_1 == '#F2F2F2' 
    
    const {EduawardContents} = useSelector((state:any)=>state.eduaward)
    const dispatch = useDispatch();

    const closeTimelineModal = useCallback(()=>{
        dispatch({
            type : TOGGLE_EDUAWARDS_DETAIL_REQUEST,
            data : false,
        })
    },[])
   
    return(
        <ModalWrapper>
            <ModalCloseButtonWrapper onClick={closeTimelineModal}>
                <ModalCloseButton dark={dark} src='./closebtn.png'/>
            </ModalCloseButtonWrapper>
            <ModalContentWrapper>

                <ModalContentTitle>활동 내용</ModalContentTitle>
                <ModalContentInfo>
                    {EduawardContents[detailId].eduawardInfo}
                </ModalContentInfo>
                {EduawardContents[detailId].eduawardTitle !== '' 
                ? (
                <>
                    <ModalContentTitle>관련링크</ModalContentTitle>
                    <a href={EduawardContents[detailId].eduawardlink}><ModalContentInfo>{EduawardContents[detailId].eduawardTitle}</ModalContentInfo></a>
                </>)
                :(
                    <></>
                )
                }
                
            </ModalContentWrapper>
        </ModalWrapper>
    )
}