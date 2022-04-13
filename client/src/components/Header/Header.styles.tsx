import styled from "styled-components";
import {Link} from 'react-scroll'

export const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding : 0 40px;
    height: 88px;
    background-color: ${(props)=>props.theme.theme_13};
`

export const LogoImage = styled.img<{dark:any}>`
    width: 60px;
    filter : ${(props)=>props.dark ? 'invert(100%)' : 'invert(0%)'};
`
export const MenuWrapper = styled.div`
    position: relative;
    padding : 10px;
`

export const MenuItem = styled(Link)`
    vertical-align: middle;
    margin-right: 40px;
    font-size: 16px;
    color : ${(props)=>props.theme.theme_6};
    cursor: pointer;

    &:hover{
        font-weight: bold;
    }

    @media screen and (max-width: 800px) {
        display: none;
    }
`