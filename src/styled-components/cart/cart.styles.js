import styled from 'styled-components'
import { Button } from 'primereact/button';

export const Container = styled.div`
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;

    @media (max-width: 978px){
        flex-direction: column;
    }
`;

export const ContentInfo = styled.div`
    width: 40%;
    justify-content: center;
    display: flex;
    flex-direction: column;
    text-align: center;

    @media (max-width: 978px){
        width: 80%;
        margin: auto;
        align-items: center;
        margin-top: 50px;
    }
`;

export const ContentProducts = styled.div`
    width: 50%;
    min-height: 300px;
    max-height: 300px;
    margin: auto;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #EFEFEF;
    border-radius: 5px;
    overflow: auto;
    padding: 20px;

    @media (max-width: 978px){
        width: 80%;
        margin: auto;
        margin-top: 20px;
    }
`;

export const Product = styled.div`
    width: 95%;
    margin: auto;
    margin-top: 20px;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    padding: 10px;

    @media (max-width: 978px){
        width: 100%;
        flex-direction: column;
        padding: 5px;
    }
`;

export const Label = styled.span`
    width: 100px;
    margin: auto;
    font-weight: ${props => props.weight ? props.weight : ''};

    @media (max-width: 978px){
        margin-top: 30px;
    }
`;

export const Title = styled.h1`
    text-align: center;
    padding-top: 50px;
`;

export const NonData = styled.i`
    font-size: 50px;
`;

export const RemoveButton = styled(Button)`
    width: 100%;
    margin: auto;
    background: transparent;
    border: none;
    cursor: pointer;
    color: #000;

    :hover{
            background-color: rgba(224, 0, 255, 0.6) !important;
        }

    @media (max-width: 978px){
        width: 100% !important;
        justify-content: center !important;
        background-color: #E000FF;
        border: none !important;
        color: #fff;

        :hover{
            background-color: rgba(224, 0, 255, 0.6) !important;
        }
    }
`;