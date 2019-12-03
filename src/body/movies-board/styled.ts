import styled from 'styled-components';

const MoviesBoard = styled.div`
    display: flex;
    flex-wrap: wrap;
    font-size: 20px;
    font-style: italic;
    justify-content: center;
`;

const Cart = styled.div`
    text-align: center;
    margin: 15px 25px;
    width: 400px;
    height: 100px;
    line-height: 100px;
    border: 2px solid #8ac858;
    border-radius: 15px;
`;

export const Styled = { Cart, MoviesBoard }