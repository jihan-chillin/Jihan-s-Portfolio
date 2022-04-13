import styled from 'styled-components'

export const TimelineBackground = styled.div<{showTimelineDetail:any}>`
    display: ${(props:any)=> props.showTimelineDetail ? 'block' : 'none'};
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
    background-color: #4b4b4b;
    opacity: 0.6;
`

export const TimelineWrapper = styled.div`
    position : relative;
    padding-bottom: 20px;
    background-color:  ${(props)=>props.theme.theme_8};
`

export const CateName = styled.span`
    display: inline-block;
    margin-top: 76px;
    font-size: 20px;
    color:  ${(props)=>props.theme.theme_2};
    opacity: 0.5;

    @media screen and (max-width : 800px){
        margin-top: 60px;
    }
`

export const TimelineContentWrapper = styled.div`
    display: flex;
    margin: 120px auto;
    padding-bottom: 50px;
    max-width: 1200px;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width : 800px){
        display: block;
        margin: 60px auto;
        max-width: 300px;
        padding-bottom: 20px;
        justify-content: space-around;
    }
`

export const TimelineDetailWrapper = styled.div<{colorKey:any}>`
    margin: 0 auto;
    width : 240px;
    height: 240px;
    font-size: 20px;
    border : 3px solid ${(props:any)=>props.colorKey == 0 
        ? (props)=>props.theme.theme_10 
        : (props:any)=>props.colorKey == 1 
        ? (props)=>props.theme.theme_11
        : (props)=>props.theme.theme_12};
    border-radius: 200%;
    background-color: white;
    
    @media screen and (max-width : 800px){
        margin: 52px auto;
    }

`
export const TimelineTitle = styled.div`
    font-size: 24px;
    margin-top: 70px;
`

export const Period = styled.div`
    font-size: 16px;
    color : #747171;
    margin: 6px 0 ;
`

export const Moredetail = styled.div`
    font-size: 16px;
    color : #A9A9A9;
    text-decoration: underline ;
    cursor: pointer;
`