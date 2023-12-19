import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import sprite from "../../img/sprite.svg";
import { useState } from "react";
import make from "../../json/make.json";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { delData } from "../redux/redusers";

const Container = styled.div`
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: end;
    gap:18px;

`; 
const GroupNav = styled.div`
    margin: 50px 0;
    width: 100vw;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap:24px;
`;
const BrandSelectMilage = styled.input`
    width: 160px;
    height: 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top:8px;
    background-color: #F7F7FB;
    border: none;
    padding-left: 24px;
    position: relative;
    font-size: 18px;
    font-weight: 500;

    &::placeholder{
        color: #121417;

    }
    &:focus::placeholder{
        color: transparent;
    }
    &:first-child{
        border-top-left-radius: 20px;
        border-bottom-left-radius:20px;
        border-right: 1px solid #8A8A8933;
    }
    &:last-child{
        border-top-right-radius: 20px;
        border-bottom-right-radius:20px;

    }
    &:focus{
        outline: none;
    }
    
`;
const BrandSelectPrice = styled.div`
    width: 125px;
    height: 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top:8px;
    background-color: #F7F7FB;
    border: none;
    border-radius: 20px;
    position: relative;
`;
const BrandSelect = styled.div`
    width: 224px;
    height: 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top:8px;
    background-color: #F7F7FB;
    border: none;
    border-radius: 20px;
    position: relative;
`;
const GroupDiv = styled.div`
    /* margin-top: 100px; */
   
`;
const SvgDown = styled.svg`
  display: inline-block;
  width: 15px;
  height: 10px;
  stroke-width: 0;
  stroke: currentColor;
  fill: none;
  position: absolute;
  top:18px;
  right: 15px;
`;
const SvgDownPrice = styled.svg`
  display: inline-block;
  width: 15px;
  height: 10px;
  stroke-width: 0;
  stroke: currentColor;
  fill: none;
  position: absolute;
  top:18px;
  right: 15px;
`;
const LabelSel = styled.span`
    position: relative;
    color: #8A8A89;
    text-align: start;
    
`;
const TextBrandSel = styled.span`
    font-size: 18px;
    font-weight: 500;
    color: #121417;
    margin-left: 18px;
    
`; 
const MenuSelectPrice = styled.div`
    position: absolute;
    box-sizing: border-box;
    width: 125px;
    height: 272px;
    padding: 14px 18px;
    margin-top: 4px;
    overflow: auto;
    border: 1px solid #00000026;
    border-radius: 15px;
    background-color: white;
    z-index: 100;
`;
const MenuSelect = styled.div`
    position: absolute;
    box-sizing: border-box;
    width: 224px;
    height: 272px;
    padding: 14px 18px;
    margin-top: 4px;
    overflow: auto;
    border: 1px solid #00000026;
    border-radius: 15px;
    background-color: white;
    z-index: 100;
`;
const TextMenuSel = styled.span`
    display: block;
    cursor: pointer;
    
    font-size: 16px;
    font-weight: 500;
    color:#12141733;
`;
const GroupDivMilage = styled.div`
    display: flex;
`;
const BtnSearch = styled.button`
    width: 136px;
    height: 48px;
    background-color:#3470FF;
    color:white;
    border: none;
    border-radius: 15px;
    &:hover{
        background-color: #0B44CD;
    }
`;
const BtnLike = styled.button`
    padding: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 136px;
    height: 48px;
    background-color: transparent;
    border: 1px solid #12141733;
    border-radius: 15px;
    color: #0B44CD;
    &:hover{
       stroke: #3470FF;
       color: #3470FF;
    }
`;
const SvgImh = styled.svg`
    width: 24px; 
    height: 22px;
    
    fill: #0B44CD;
`;
export const Layout = () => {
    const [arrow, setArrow] = useState("#icon-down");
    const [arrowPrice, setArrowPrice] = useState("#icon-down");
    const [option, setOption] = useState("Enter the text");
    const [priceFilter, setPriceFilter] = useState("To $");
    const [mileageFrom, setMilageFrom] = useState("");
    const [mileageTo, setMilageTo] = useState("");
    const [nav, setNav] = useState();
    const navigation = useNavigate();
    const price = [];
    const dispatch = useDispatch();
    for (let i = 1; i <= 40; i++)price[i] = i * 10;
    const handlerBrandSelect = () => {
        if (arrow === "#icon-down") {
            setArrow("#icon-up");
            setArrowPrice("#icon-down");
        } else {
            setArrow("#icon-down");
             
        }
            
    }
    function handlerBtnSearch(e) {
        e.preventDefault();
        setMilageFrom(e.target.elements[0].value);
        setMilageTo(e.target.elements[1].value);
        dispatch(delData());
        navigation("*");
        setNav("/search");
        
    }
    function handlerBtnHome(e) {
        e.preventDefault();
        dispatch(delData());
        navigation("*");
        setNav("/");
    }
    function handlerBtnLike(e) {
        e.preventDefault();
        dispatch(delData());
        navigation("*");
        setNav("/favorite");
    }
    function handlerBtnContact(e) {
        e.preventDefault();
        navigation("*");
        setNav("/contacts");
    }
    function handlerBtnAdmin(e) {
        e.preventDefault();
        navigation("*");
        setNav("/admin");
    }
    function handlerBtnReset(e) {
        e.preventDefault();
        setOption("Enter the text");
        setPriceFilter("To $");
        setMilageFrom("");
        setMilageTo("");
        
    }
    function handlerOnFocus() {
        setArrow("#icon-down");
        setArrowPrice("#icon-down");
    }
    const handlerBrandSelectPrice = () => {
        if (arrowPrice === "#icon-down") {
            setArrowPrice("#icon-up");
            setArrow("#icon-down");
        } else {
            setArrowPrice("#icon-down");
             
        }
          
    }
    useEffect(() => {
        const newOption = option !== "Enter the text" ? option : "";
        const newPriceFilter = priceFilter !== "To $" ? priceFilter : "";
        
        localStorage.setItem('search', JSON.stringify(
            {
                make: newOption,
                rentalPrice: newPriceFilter,
                mileageFrom,
                mileageTo
            }));
        navigation(nav);
    }, [option, priceFilter, mileageFrom, mileageTo, navigation])
    return (
        <> 
            <GroupNav>
                <BtnLike onClick={handlerBtnHome}>
                <SvgImh style={{width:"32px", height:"32px"}}>
                    <use xlinkHref={sprite+"#icon-home"}></use>
                </SvgImh>
                Home
                </BtnLike> 
                <BtnLike onClick={handlerBtnLike}>
                <SvgImh>
                    <use xlinkHref={sprite+"#icon-like"}></use>
                </SvgImh>
                Favorite
                </BtnLike>
                <BtnLike onClick={handlerBtnReset}>
                <SvgImh>
                    <use xlinkHref={sprite+"#icon-refresh"}></use>
                </SvgImh>
                Reset filter
                </BtnLike>
                <BtnLike onClick={handlerBtnContact}>
                <SvgImh>
                    <use xlinkHref={sprite+"#icon-contacts"}></use>
                </SvgImh>
                Contact
                </BtnLike>
                <BtnLike onClick={handlerBtnAdmin}>
                <SvgImh>
                    <use xlinkHref={sprite+"#icon-enter"}></use>
                </SvgImh>
                Enter
                </BtnLike>
            </GroupNav>
            <form onSubmit={handlerBtnSearch}>
            <Container>
            <GroupDiv>
            <LabelSel >Car brand</LabelSel>
                <BrandSelect onClick={handlerBrandSelect}>
                <TextBrandSel>{option}</TextBrandSel>       
                <SvgDown >
                    <use href={sprite + arrow}></use>     
                </SvgDown>
            </BrandSelect>
                    <MenuSelect style={arrow === "#icon-down" ? { visibility: "hidden" } : { visibility: "visible" }}>
                        {make.name.map((el, i) => <TextMenuSel key={i + 11} onClick={() => { setOption(el);setArrow("#icon-down"); }}>{el}</TextMenuSel>)}        
                        
            </MenuSelect>
            </GroupDiv>
            <GroupDiv>    
                <LabelSel >Price/ 1 hour</LabelSel>  
                    <BrandSelectPrice onClick={handlerBrandSelectPrice}>
                <TextBrandSel>{priceFilter}</TextBrandSel>       
                <SvgDownPrice >
                    <use href={sprite + arrowPrice}></use>     
                </SvgDownPrice>
                </BrandSelectPrice >
                    <MenuSelectPrice style={arrowPrice === "#icon-down" ? { visibility: "hidden" } : { visibility: "visible" }}>
                        {price.map((el, i) => <TextMenuSel key={i + 15} onClick={() => { setPriceFilter('$'+el);setArrowPrice("#icon-down") }}>{el}</TextMenuSel>)}        
                            
                </MenuSelectPrice>
            </GroupDiv>
            <GroupDiv>
            <LabelSel >Сar mileage / km</LabelSel>
                <GroupDivMilage>
                    <BrandSelectMilage value={mileageFrom} placeholder="From" onChange={(e)=>setMilageFrom(e.target.value)} onFocus={handlerOnFocus}/>
                    <BrandSelectMilage value={mileageTo} placeholder="To" onChange={(e)=>setMilageTo(e.target.value)} onFocus={handlerOnFocus}/>
               </GroupDivMilage>
            </GroupDiv>
            <GroupDiv >    
                <BtnSearch>Search</BtnSearch> 
            </GroupDiv >
            </Container>
            </form>       
            <Outlet />
        </>
    )
}