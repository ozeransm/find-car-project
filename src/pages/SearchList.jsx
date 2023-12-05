import { useDispatch, useSelector } from "react-redux"
import { fetchDatas } from "../redux/operation";
import { Card } from "../components/card";
import { data } from "../redux/selectors";
import { useEffect } from "react";
import styled from "styled-components";

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
const LoadMore = styled.a`
    display: block;
    text-align: center;
    text-decoration: none;
    margin: 100px 0 150px 0;
    color: #3470FF;
    &:hover{
        color: #0B44CD;
    }
    cursor: pointer;
`;

export const SearchList = () => {
    const cards = useSelector(data);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchDatas())
    }, [])

    function handlerLM(page) {
        dispatch(fetchDatas({ page }))
    }

    return (
        <>
            <h2>SearchList</h2>
            <Container>
                {cards.map((el) => <Card key={el.id} elem={el} />)}
            </Container>
            <LoadMore onClick={()=>handlerLM(2)}>Load more</LoadMore>
            
        </>
    )
}