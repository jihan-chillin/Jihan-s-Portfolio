import styled from 'styled-components'

export const TimelineBackground = styled.div`
    display: ${(props)=> props.showTimelineDetail ? 'block' : 'none'};
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #4b4b4b;
    opacity: 0.6;
`

export const TimelineWrapper = styled.div`
    padding-bottom: 20px;
    background-color:  ${(props)=>props.theme.theme_11};
`

export const CateName = styled.span`
    display: inline-block;
    margin-top: 76px;
    font-size: 20px;
    color:  ${(props)=>props.theme.theme_2};
    opacity: 0.5;
`

export const TimelineWholeContentWrapper = styled.div`
    position : relative;
    margin: 76px auto;
`

export const TimelineContentWrapper = styled.div`
    display: flex;
    position: relative;
    margin: 40px auto;
    padding: 0 20px;
    max-width: 800px;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width : 800px){
        justify-content: space-around;
    }
`

export const Period = styled.span`
    display: inline-box;
    font-size: 18px;
    color : ${(props)=>props.theme.theme_13};

    @media screen and (max-width : 800px){
        display: none;
    }
`

export const TimelineTitle = styled.div`
    padding : 0 12px;
    width : 500px;
    height: 40px;
    font-size: 20px;
    border : 3px solid #F6C45A;
    border-radius: 20px;
    background-color: ${(props)=>props.theme.theme_12};
    cursor: pointer;
    color : ${(props)=>props.theme.theme_13};
    
    &:hover{
        width: 520px;
        height : 44px;
        font-size: 22px;
        border-radius: 30px;
    }
    
    @media screen and (max-width : 800px){
        width: 200px;
        height : 40px;
        line-height: 200%;
        font-size: 14px;

        &:hover{
            width: 220px;
            height : 44px;
            font-size: 16px;
        }
    }

`