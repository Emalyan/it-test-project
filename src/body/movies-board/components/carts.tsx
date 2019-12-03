import React from 'react';
import { Cart } from './cart';
import { ICarts } from '../interfaces';

export const Carts = (carts: ICarts) => {    
    return (
        <>
            {carts.carts.map(item => {
                return <Cart key={item.id} id={item.id} name={item.name} />
            })}
        </>
    );
}