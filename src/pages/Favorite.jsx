import { useDispatch, useSelector } from "react-redux"
import { fetchDatas } from "../redux/operation";
import { Card } from "../components/card";
import { data, favorites } from "../redux/selectors";
import { useEffect } from "react";
import styled from "styled-components";
import { addFavorite } from "../redux/redusers";

const Container = styled.div`
    margin: 50px auto 100px auto;
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
        if (favLS) favLS.split(',').map(el=>dispatch(addFavorite(Number(el)))); 
        dispatch(fetchDatas({ limit: 30 }));
    }, [])
    const cards = useSelector(data);
    const fav = useSelector(favorites);
    return (
        <>
            <Container>
                {cards.map((el) => fav.includes(el.id) && <Card key={el.id} elem={el} setModal={setModal} />)}
            </Container>
            
        </>
    )
}