import styled from "styled-components";

export const SideContainer = styled.div`
    position: fixed;
    z-index: 1;
    /* right: -260px; */
    right : ${(props)=>(props.showSidemenu ? '0px' :'-260px')};
    height: 100%;
    width: 260px;
    /* background-color: white; */
    border: 1px solid gray;
`