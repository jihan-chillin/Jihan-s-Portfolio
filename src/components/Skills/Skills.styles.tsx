import styled from 'styled-components'

export const SkillsWrapper = styled.div`
    padding-bottom: 160px;
    background-color: #F9F9F9;

    @media screen and (max-width:800px) {
        padding-bottom: 50px !important;
    }
`

export const CateName = styled.span`
    display: inline-block;
    margin-top: 76px;
    font-size: 20px;
    color: #4b4b4b;
    opacity: 0.5;
`

export const AllSkillsContenWrapper = styled.div`
    width: 1100px;
    margin: 80px auto;

    @media screen and (max-width:1100px) {
    margin: 24px auto;
    width: 600px;
}
`
