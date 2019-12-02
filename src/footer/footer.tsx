import styled from 'styled-components';
import React from 'react';

const FooterBlock = styled.div`
    width: 100%;
    height: 50px;
    background-color: #8ac858;
    position: absolute;    
    bottom: 0; 
`;

export const Footer = () => {
    return <FooterBlock/>
}