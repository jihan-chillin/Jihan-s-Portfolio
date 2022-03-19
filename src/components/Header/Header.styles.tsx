import styled from "styled-components";

export const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding : 0 40px;
    height: 88px;
    border : solid 1px red;

`

export const LogoImage = styled.img`
    width: 48px;

    @media screen and (max-width: 600px) {
        width: 48px;
    }
`
export const MenuWrapper = styled.div`
    position: relative;
    padding : 10px;
`

export const MenuItem = styled.span`
    vertical-align: middle;
    margin-right: 40px;
    font-size: 14px;
    color : #4b4b4b;
    cursor: pointer;

    &:hover{
        color : #000000;
        font-weight: bold;
    }

    @media screen and (max-width: 600px) {
        display: none;
    }
`

export const More = styled.img`
    vertical-align: middle;
    width: 24px;
    cursor: pointer;
`