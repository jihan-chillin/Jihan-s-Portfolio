import styled from "styled-components";
import {Link} from 'react-scroll'

export const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding : 0 40px;
    height: 88px;
`

export const LogoImage = styled.img`
    width: 60px;
`
export const MenuWrapper = styled.div`
    position: relative;
    padding : 10px;
`

export const MenuItem = styled(Link)`
    vertical-align: middle;
    margin-right: 40px;
    font-size: 16px;
    color : #4b4b4b;
    cursor: pointer;

    &:hover{
        color : ${(props)=>props.theme.theme_3};
        font-weight: bold;
    }

    @media screen and (max-width: 800px) {
        display: none;
    }
`