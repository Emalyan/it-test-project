import React from 'react';
import { Styled } from '../styled';
import { ICart } from '../interfaces';

export const Cart = (cart: ICart) => {
    return (
        <Styled.Cart>            
            {cart.name}            
        </Styled.Cart>
    );
}