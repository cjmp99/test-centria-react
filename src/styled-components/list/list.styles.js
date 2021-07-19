import styled from 'styled-components'
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

export const Container = styled.div`
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 100px;
`;

export const CardPr = styled(Card)`
    width: 300px;
    margin: auto;
    margin-top: 50px;
`;

export const ButtonPr = styled(Button)`
    width: 100% !important;
    justify-content: center !important;
    background-color: ${props => props.bg ? props.bg : '#E000FF'};
    border: none !important;

    :hover{
        background-color: ${props => props.hv ? props.hv : 'rgba(224, 0, 255, 0.6) !important'};

    }
`;

export const Img = styled.img`
    width: 100%;
    height: 30%;
    object-fit: cover;
`;