import styled from 'styled-components';
import { footerHeight } from '../constants'

const Footer = styled.footer`
    width: 100%;
    height: ${footerHeight};
    background-color: #8ac858;
    position: absolute;    
    bottom: 0; 
`;

export const Styled = { Footer }