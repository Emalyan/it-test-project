import styled from 'styled-components';
import { footerHeight, headerHeight } from '../constants';

const Body = styled.div`
    overflow: auto;
    position: absolute;
    height: calc(100% - ${footerHeight} - ${headerHeight});    
    background-color: #f4f4f4;    
`;

export const Styled = { Body }