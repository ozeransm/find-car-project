import styled from "styled-components"
import sprite from "../img/sprite.svg";
const Overlay = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #12141777;
`;
const Modal = styled.div`
    position: relative;
    padding: 30px;
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 10px;
`;
const ModalImg = styled.img`
    width: 461px;
    height: 248px;
    object-fit: cover;
    border-radius: 10px;

`;
const ModalMarka = styled.span`
    font-size: 18px;
    font-weight: 500;

`;
const ModalModel = styled.span`
    font-size: 18px;
    font-weight: 500;
    color:#3470FF;
`;
const ModalYear = styled.span`
    font-size: 18px;
    font-weight: 500;

`;
const InfoDivTitle = styled.div`
    margin-top: 10px;
    margin-bottom: 8px;
`;
const InfoDiv = styled.div`
    &:not(:last-child){
        margin-bottom: 4px;
    }
`;
const InfoSpan = styled.span`
    font-size: 12px;
    font-weight: 200;
    margin: 8px, 2px;
    padding: 2px;
    color: #12141777;
    &:not(:last-child){
        border-right: 1px solid grey;

    }
`;
const DescribeDiv = styled.p`
    margin-top: 10px;
    margin-bottom: 0;
    max-width: 461px;
    font-size: 14px;
    font-weight: 400;
    color:#121417;

`;
const AccessoriesDiv = styled.p`
    margin-top: 15px;
    margin-bottom: 8px;
    max-width: 461px;
    font-size: 14px;
    font-weight: 400;
    color:#121417;
`;
const AccesFuncDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    max-width: 461px;
    &:not(:last-child){
        margin-bottom: 4px;
    }
`;
const RentalCon = styled.p`
    font-size: 14px;
    font-weight: 500;
    color:#121417;
`;
const InfoSpanRen = styled.span`
    font-size: 12px;
    font-weight: 400;
    color:#363535;
    background-color: #F9F9F9;
    /* background-color: lightblue; */
    padding: 7px 14px;
    margin-right: 8px;
    &:not(:nth-child(n+4)){
        margin-bottom: 8px;

    }
    border-radius: 15px;
`;
const SvgX = styled.svg`
    display: inline-block;
    position: absolute;
    top: 10px;
    right: 10px;
    width: 24px;
    height: 24px;
    stroke-width: 0;
    stroke: currentColor;
    fill: currentColor;
`;
const Age = styled.span`
    font-size: 12px;
    font-weight: 600;
    color: #3470FF;
`;
const BtnRC = styled.button`
    margin: 15px 0 0 0;
    width: 168px;
    height: 44px;
    background-color: #3470FF;
    color:white;
    border-radius: 20px;
    border: none;
    &:hover{
        background-color: #0B44CD;
        border: 1px solid #0B44CD;
    }
`;
export const ModalWin = ({ onClose, valueModal }) => {
    const addr = valueModal.address.split(',');
    const rentCon = valueModal.rentalConditions.split('\n');
    const zal = parseInt(valueModal.mileage) % 1000;
    const c = Math.trunc(parseInt(valueModal.mileage) / 1000);
    const price = parseInt(valueModal.rentalPrice.match(/\d+/));
    return (
        <>
            <Overlay>
                <Modal>
                    <SvgX onClick={onClose}>
                        <use xlinkHref={sprite+"#icon-x"}></use>
                    </SvgX>
                    
                    <ModalImg src={valueModal.img} />
                    <InfoDivTitle>
                        <ModalMarka>{valueModal.make} </ModalMarka>
                        <ModalModel>{valueModal.model}, </ModalModel>
                        <ModalYear>{valueModal.year}</ModalYear>
                    </InfoDivTitle>
                    
                    <InfoDiv>
                        <InfoSpan>{addr[1]}</InfoSpan>
                        <InfoSpan>{addr[2]}</InfoSpan>
                        <InfoSpan>{valueModal.rentalCompany}</InfoSpan>
                        <InfoSpan>id: {valueModal.id}</InfoSpan>
                        <InfoSpan>Year: {valueModal.year}</InfoSpan>
                        <InfoSpan>Type: {valueModal.type}</InfoSpan> 
                    </InfoDiv>
                    <InfoDiv>
                        <InfoSpan>FuelConsumption: {valueModal.fuelConsumption}</InfoSpan>
                        <InfoSpan>EngineSize: {valueModal.engineSize}</InfoSpan>
                        
                    </InfoDiv>
                    <DescribeDiv>{valueModal.description}</DescribeDiv>
                    <AccessoriesDiv>Accessories and functionalities:</AccessoriesDiv>
                    <AccesFuncDiv>
                        {valueModal.accessories.map((el, i) => { return <InfoSpan key={i}>{el}</InfoSpan> })}
                    </AccesFuncDiv>
                    <AccesFuncDiv>
                        {valueModal.functionalities.map((el, i) => { return <InfoSpan key={i+100}>{el}</InfoSpan> })}
                    </AccesFuncDiv>
                    <RentalCon>Rental Conditions:</RentalCon>
                    <AccesFuncDiv>
                       {rentCon.map((el, i) => {
                            if (el.match(/\d+/)) {
                                const age = el.match(/\d+/);
                                const str = el.match(/\D/g).join('');
                                return <InfoSpanRen key={i + 200}>{str}<Age>{age}</Age></InfoSpanRen>
                            }
                            else return <InfoSpanRen key={i + 200}>{el}</InfoSpanRen>
                        })}
                        {
                        
                        }
                        <InfoSpanRen>Mileage: <Age>{c+','+zal}</Age></InfoSpanRen>
                        <InfoSpanRen>Price: <Age>{price}$</Age></InfoSpanRen>
                    </AccesFuncDiv>
                    <BtnRC>Rental car</BtnRC>
                </Modal>
            </Overlay>
            
        </>
    )
}
