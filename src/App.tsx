import React from 'react';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Body } from './content/body';
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