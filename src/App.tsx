import React from 'react';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Content } from './content/content';

export const App = () => {
    return (
        <>
            <Header/>
            <Content/>  
            <Footer/>          
        </>
    );
}