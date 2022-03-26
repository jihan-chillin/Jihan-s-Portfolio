import React from "react";
import Head from 'next/head';

import { Header } from "../components/Header/Header";
import { MainContainer} from "../styles/main.style";
import { AboutMe } from "../components/AboutMe/AboutMe";
import { Skills } from "../components/Skills/Skills";
import { Projects } from "../components/Projects/Projects";
import { Timeline } from "../components/Timeline/Timeline";
import { TopBtn } from "../components/Common/views/TopBtn";

function MainPage(){
    return (
        <>
            <Head>
                <title>KOZUB JIHAN</title>
                <meta name="description" content="Generated by create next app" />
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap" rel="stylesheet"/>
                <link rel="icon" href="/favicon.ico" /> 
            </Head>
            <Header/>
            <TopBtn/>
            <MainContainer className="no-scroll">
                <AboutMe/>
                <Skills/>
                <Projects/>
                <Timeline/>
            </MainContainer>
        </>
    )
}

export default MainPage;