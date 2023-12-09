import { Outlet } from "react-router-dom";
import styled from "styled-components";
import sprite from "../../img/sprite.svg";
import { useState } from "react";
import make from "../../json/make.json";
const Container = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    gap:18px;

`; 
const BrandSelectMilage = styled.div`
    width: 160px;
    height: 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top:8px;
    background-color: #F7F7FB;
    border: none;
    
    position: relative;
    &:first-child{
        border-top-left-radius: 20px;
        border-bottom-left-radius:20px;
        border-right: 1px solid #8A8A8933;
    }
    &:last-child{
        border-top-right-radius: 20px;
        border-bottom-right-radius:20px;

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
    margin-top: 100px;
   
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
export const Layout = () => {
    const [arrow, setArrow] = useState("#icon-down");
    const [arrowPrice, setArrowPrice] = useState("#icon-down");
    const [option, setOption] = useState("Enter the text");
    const [priceFilter, setPriceFilter] = useState("To $");
    const [milageFrom, setMilageFrom] = useState("From");
    const [milageTo, setMilageTo] = useState("To");

    const price = [];
    for (let i = 1; i <= 40; i++)price[i] = i * 10;
    return (
        <>
            <Container>
            <GroupDiv>
            <LabelSel >Car brand</LabelSel>
            
            <BrandSelect onClick={()=>arrow==="#icon-down" ? setArrow("#icon-up") : setArrow("#icon-down")}>
                <TextBrandSel>{option}</TextBrandSel>       
                <SvgDown >
                    <use href={sprite + arrow}></use>     
                </SvgDown>
            </BrandSelect>
                    <MenuSelect style={arrow === "#icon-down" ? { visibility: "hidden" } : { visibility: "visible" }}>
                        {make.name.map((el, i) => <TextMenuSel key={i+11} onClick={()=>setOption(el)}>{el}</TextMenuSel>)}        
                        
            </MenuSelect>
            </GroupDiv>
            <GroupDiv>    
                <LabelSel >Price/ 1 hour</LabelSel>  
                <BrandSelectPrice onClick={()=>arrowPrice==="#icon-down" ? setArrowPrice("#icon-up") : setArrowPrice("#icon-down")}>
                <TextBrandSel>{priceFilter}</TextBrandSel>       
                <SvgDownPrice >
                    <use href={sprite + arrowPrice}></use>     
                </SvgDownPrice>
                </BrandSelectPrice >
                    <MenuSelectPrice style={arrowPrice === "#icon-down" ? { visibility: "hidden" } : { visibility: "visible" }}>
                            {price.map((el, i) => <TextMenuSel key={i+15} onClick={()=>setPriceFilter(el)}>{el}</TextMenuSel>)}        
                            
                </MenuSelectPrice>
            </GroupDiv>
            <GroupDiv>   
                <LabelSel >Сar mileage / km</LabelSel>
                <GroupDivMilage>
                        <BrandSelectMilage >
                            <TextBrandSel>{milageFrom}</TextBrandSel> 
                        </BrandSelectMilage>
                        <BrandSelectMilage >
                            <TextBrandSel>{milageTo}</TextBrandSel> 
                        </BrandSelectMilage>
                </GroupDivMilage>
            </GroupDiv>     
            </Container>
            <Outlet />
        </>
    )
}