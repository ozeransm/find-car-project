import { useDispatch, useSelector } from "react-redux"
import { fetchDatas } from "../redux/operation";
import { Card } from "../components/card";
import { data } from "../redux/selectors";
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

export const SearchList = ({setModal}) => {
    const pageL = localStorage.getItem('page');
    const [page, setPage] = useState(Number(pageL) || 2);
    const favLS = localStorage.getItem('fav');
    const search = localStorage.getItem('search');
    useEffect(() => {
        const objSearch = JSON.parse(search);
        console.log(objSearch);
        dispatch(fetchDatas(objSearch || {}));
        localStorage.setItem('page',2);
        setPage(2);
        if (favLS) favLS.split(',').map(el=>dispatch(addFavorite(Number(el))));
    }, [])
    const cards = useSelector(data);
    const dispatch = useDispatch();

    function handlerLM() {
        setPage(page + 1);
        localStorage.setItem('page', page)
        dispatch(fetchDatas({ page }))
        
    }
    
    return (
        <>
            <Container>
                {cards.map((el) => <Card key={el.id} elem={el} setModal={setModal} />)}
            </Container>
            <LoadMore onClick={handlerLM}>Load more</LoadMore>
            
        </>
    )
}