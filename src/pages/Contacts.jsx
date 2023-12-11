import styled from "styled-components";
import sprite from "../../img/sprite.svg";
const SvgImh = styled.svg`
    width: 24px; 
    height: 22px;
    
    fill: #0B44CD;
`;
export const Contacts = () => {
    return (
        <>
            <h1>Contacts</h1>
            <SvgImh>
                    <use xlinkHref={sprite+"#icon-address"}></use>
            </SvgImh>
            <SvgImh>
                    <use xlinkHref={sprite+"#icon-phone"}></use>
            </SvgImh>
            <SvgImh>
                    <use xlinkHref={sprite+"#icon-telegram"}></use>
            </SvgImh>
            <SvgImh>
                    <use xlinkHref={sprite+"#icon-facebook"}></use>
            </SvgImh>
            <SvgImh>
                    <use xlinkHref={sprite+"#icon-linkedin"}></use>
            </SvgImh>
            <SvgImh>
                    <use xlinkHref={sprite+"#icon-instagram"}></use>
            </SvgImh>
            
        </>
    )
}