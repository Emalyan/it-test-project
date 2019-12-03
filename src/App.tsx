import React from 'react';
import { Header } from './header/index';
import { Footer } from './footer/index';
import { Body } from './body/index';
import { GlobalStyle } from './globalStyled';

export const App = () => {
    return (
        <>
            <GlobalStyle/>
            <Header/>
            <Body/>  
            <Footer/>          
        </>
    );
}