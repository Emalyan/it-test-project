import React, { useState, useEffect } from 'react';
import { Styled } from './styled';
import { Carts } from './components/carts'; 

export const MoviesBoard = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getMovies(setItems);        
    }, []);            

    return (     
        <Styled.MoviesBoard>
            <Carts carts={items}/>
        </Styled.MoviesBoard>           
    );
}

const getMovies = async (setItems: React.Dispatch<React.SetStateAction<never[]>>) => {    
    const response = await fetch("https://kinoafisha.herokuapp.com/api/kinoafisha_load");
    const data = await response.json();                   
    setItems(data.result);
}