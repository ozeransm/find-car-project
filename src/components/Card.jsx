import styled from 'styled-components';
import like from "../../img/like.svg";
import { useDispatch, useSelector } from 'react-redux';
import { favorites } from '../redux/selectors';
import { addFavorite, delFavorite } from '../redux/redusers';

const CardDiv = styled.div`
    width: 274px;
    height: 426px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const CardImg = styled.div`
    position: relative;
    border-radius: 20px;
    border: 1px solid lightgrey;
    overflow: hidden;
`;
const Img = styled.img`
    display: block;
    width: 274px;
    height: 268px;
    object-fit: cover;
`;
const TitleDiv = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 2px;
    margin-top: 14px;
    margin-bottom: 8px;

`;
const MarkaSpan = styled.span`
    font-size: 16px;
    font-weight: 400;
    color: #121417;
    margin-right:5px;
`;
const ModelSpan = styled.span`
    font-size: 16px;
    font-weight: 400; 
    color: #3470FF;
`;
const YearSpan = styled.span`
    font-size: 16px;
    font-weight: 400;
    color: #121417;
`;
const PriceSpan = styled.span`
    font-size: 16px;
    font-weight: 400;
    color: #121417;
`;
const GroupSpan = styled.div`
    display: flex;
    justify-content: flex-start;
`;
const InfoDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-bottom: 4px;
`;
const AddrSpan = styled.span`
    font-size: 12px;
    font-weight: 200;
    margin: 8px, 2px;
    padding: 2px;
    color: #12141777;
    &:not(:last-child){
        border-right: 1px solid grey;

    }
`;
const SvgImh = styled.svg`
    width: 18px; 
    height: 16px;
    position: absolute;
    top: 15px;
    right: 15px;
       
`;
const BtnLM = styled.button`
    width: 100%;
    height: 44px;
    padding: 12px;
    background-color: #3470FF;
    color: #ffffff;
    font-size: 14px;
    font-weight: 500;
    border-radius: 15px;
    border: 1px solid #3470FF;
    &:hover{
        background-color: #0B44CD;
        border: 1px solid #0B44CD;
    }
`;
const CardZone = styled.div`

`;
export const Card = ({ elem }) => {
    const addr = elem.address.split(',');
    const dispatch = useDispatch();
    const favoriteItem = useSelector(favorites);
    const fillFavorite = favoriteItem.includes(elem.id) ? { stroke: "#3470FF", fill: "#3470FF" } : { stroke: "white", fill: "none" };
    function handlerSvgCl(id) {
        if (favoriteItem.includes(id)) dispatch(delFavorite(id));
        else dispatch(addFavorite(id));

    }
    
    return (
        <>  
            <CardDiv>
                <CardZone>
                <CardImg>
                    <SvgImh onClick={() => handlerSvgCl(elem.id)} style={ fillFavorite }>
                        <use xlinkHref={like+"#icon-Vector"}></use>
                    </SvgImh>
                    <Img src={elem.img} />
                </CardImg>
                <TitleDiv>
                    <GroupSpan>
                        <MarkaSpan>{elem.make} </MarkaSpan>
                        <ModelSpan>{elem.model}</ModelSpan>
                        <YearSpan>, {elem.year}</YearSpan>

                    </GroupSpan>
                    <PriceSpan>{elem.rentalPrice}</PriceSpan>
                </TitleDiv>
                <InfoDiv>
                    <AddrSpan>{addr[1]}</AddrSpan>
                    <AddrSpan>{addr[2]}</AddrSpan>
                    <AddrSpan>{elem.rentalCompany}</AddrSpan>
                    
                </InfoDiv>
                <InfoDiv>
                    <AddrSpan>{elem.type}</AddrSpan>
                    <AddrSpan>{elem.make}</AddrSpan>
                    <AddrSpan>{elem.mileage}</AddrSpan>
                    <AddrSpan>{elem.functionalities[0]}</AddrSpan>
                    
                </InfoDiv>
                </CardZone>
                <BtnLM>
                    Learn more
                </BtnLM>
            </CardDiv>
            
            
        </>
    )
}