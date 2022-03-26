import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { 
    ModalCloseButton, 
    ModalCloseButtonWrapper, 
    ModalContentInfo, 
    ModalContentTitle, 
    ModalContentWrapper, 
    ModalWrapper 
} from '../styles/DetailModal.styles';

import {TOGGLE_PROJECT_DETAIL_REQUEST, TOGGLE_TIMELINE_DETAIL_REQUEST} from '../../../../reducers/modalReducer'

export interface IDetailModal{
    cate? : string,
}

export function DetailModal({
    cate,
}:IDetailModal){

    const dispatch = useDispatch();

    const closeModal = useCallback(()=>{
        dispatch({
            type : TOGGLE_PROJECT_DETAIL_REQUEST,
            data : false,
        })
    },[])

    const closeTimelineModal = useCallback(()=>{
        dispatch({
            type : TOGGLE_TIMELINE_DETAIL_REQUEST,
            data : false,
        })
    },[])
   
    return(
        <>
            <ModalWrapper>
                    {cate == 'ProjectDetail' ? (
                        <>
                            <ModalCloseButtonWrapper>
                                <ModalCloseButton src='./closebtn.png' onClick={closeModal}/>
                            </ModalCloseButtonWrapper>
                             <ModalContentWrapper>
                                <ModalContentTitle>기간</ModalContentTitle>
                                <ModalContentInfo>
                                2020.03.01 ~ 2020.03.04
                                </ModalContentInfo>

                                <ModalContentTitle>기술 스택</ModalContentTitle>
                                <ModalContentInfo>
                                뭠너우머누엄누어문어ㅜㅁㄴ우먼웜ㄴ웜누언어문어
                                무넝무ㅏㄴ어ㅜ머ㅏㄴ우ㅏ먼워ㅏㅁ ㅁ누어ㅏ문아ㅓ
                                ㅜㅁ나우마asdasdasdasdasdasdasdasdasdㄴ우
                                </ModalContentInfo>

                                <ModalContentTitle>나의 기여도</ModalContentTitle>
                                <ModalContentInfo>
                                뭠너우머누엄누어문어ㅜㅁㄴ우먼웜ㄴ웜누언어문어
                                무넝무ㅏㄴ어ㅜ머ㅏㄴ우ㅏ먼워ㅏㅁ ㅁ누어ㅏ문아ㅓ
                                ㅜㅁ나우마asdasdasdasdasdasdasdasdasdㄴ우
                                </ModalContentInfo>
                            </ModalContentWrapper>
                        </>
                    ) : (
                        <>
                            <ModalCloseButtonWrapper onClick={closeTimelineModal}>
                                <ModalCloseButton src='./closebtn.png'/>
                            </ModalCloseButtonWrapper>
                            <ModalContentWrapper>
                                <ModalContentTitle>활동 내용</ModalContentTitle>
                                <ModalContentInfo>
                                뭠너우머누엄누어문어ㅜㅁㄴ우먼웜ㄴ웜누언어문어
                                무넝무ㅏㄴ어ㅜ머ㅏㄴ우ㅏ먼워ㅏㅁ ㅁ누어ㅏ문아ㅓ
                                ㅜㅁ나우마asdasdasdasdasdasdasdasdasdㄴ우
                                </ModalContentInfo>

                                <ModalContentTitle>발표영상 링크</ModalContentTitle>
                                <a href='https://www.youtube.com/watch?v=4iOwYHKXijw&t=300s'><ModalContentInfo>요ㅛㅇ</ModalContentInfo></a>
                            </ModalContentWrapper>
                        </>
                    )}
            </ModalWrapper>
        </>
        
    )
}