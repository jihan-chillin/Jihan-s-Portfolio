import styled from "styled-components";

export const ButtonWrapper = styled.div`
    width: 120px;
    margin: 18px auto;
    padding : 8px 0;
    text-align: center;
    border: 1px solid ${(props)=>props.theme.theme_4};
    border-radius: 20px;
    color : ${(props)=>props.theme.theme_4};
    cursor: pointer;

    &:hover {
        font-weight: bold;
    }
`