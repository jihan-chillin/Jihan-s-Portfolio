import React from 'react';
import { 
    ModalCloseButton, 
    ModalCloseButtonWrapper, 
    ModalContentInfo, 
    ModalContentTitle, 
    ModalContentWrapper, 
    ModalWrapper 
} from '../styles/DetailModal.styles';

export function DetailModal(){
    return(
        <ModalWrapper>
            <ModalCloseButtonWrapper>
                <ModalCloseButton src='./closebtn.png'/>
            </ModalCloseButtonWrapper>
            <ModalContentWrapper>
                {/* 여기 map이나 for문 돌려서 채울 것 */}
                <ModalContentTitle>나의 기여도</ModalContentTitle>
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

                <ModalContentTitle>나의 기여도</ModalContentTitle>
                <ModalContentInfo>
                뭠너우머누엄누어문어ㅜㅁㄴ우먼웜ㄴ웜누언어문어
                무넝무ㅏㄴ어ㅜ머ㅏㄴ우ㅏ먼워ㅏㅁ ㅁ누어ㅏ문아ㅓ
                ㅜㅁ나우마asdasdasdasdasdasdasdasdasdㄴ우
                </ModalContentInfo>
            </ModalContentWrapper>
        </ModalWrapper>
    )
}