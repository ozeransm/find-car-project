import { useDispatch, useSelector } from "react-redux"
import { fetchDatas } from "../redux/operation";
import { Card } from "../components/card";
import { data, favorites } from "../redux/selectors";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { addFavorite } from "../redux/redusers";

const Container = styled.div`
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 1184px;
    row-gap: 50px;
    column-gap: 29px;
`;

export const Favorite = ({ setModal }) => {
    const dispatch = useDispatch();
    const favLS = localStorage.getItem('fav');
    
    useEffect(() => {
        dispatch(fetchDatas({ limit: 30 }));
        if (favLS) favLS.split(',').map(el=>dispatch(addFavorite(Number(el)))); 
       
    }, [])
    const cards = useSelector(data);
    const fav = useSelector(favorites);
    return (
        <>
            <h2>Favorite</h2>
            <Container>
                {cards.map((el) => fav.includes(el.id) && <Card key={el.id} elem={el} setModal={setModal} />)}
            </Container>
            
        </>
    )
}