import React from 'react';
import { Styled } from './styled';
import { MoviesBoard } from './movies-board';

export const Body = () => {
    return (
        <Styled.Body>                        
            <MoviesBoard />
        </Styled.Body>
    );
}