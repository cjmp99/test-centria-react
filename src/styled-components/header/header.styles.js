import styled from 'styled-components';

export const Container = styled.header`
    ::before{
        content: "";
        display: block;
        margin-bottom: 80px;
    }
`;

export const Title = styled.h1`
    width: 100%;
    font-size: 30px;
    margin-top: 30px;
    font-weight: bold;
    font-family: fantasy;
    box-shadow: 1px 1px 10px 0 rgba(224, 0, 255, .2);
`;

export const Nav = styled.nav`
    width: 100%;
    height: 80px;
    background: #fff;
    border-bottom: 1px solid transparent;
    box-shadow: 1px 1px 10px 0 rgba(0, 0, 0, .2);
    position: fixed;
    top: 0;
    z-index: 100;
    transition: ease-in-out 0.5s; 
`;

export const Section = styled.section`
    display: flex;
    justify-content: space-between;
    height: 80px;
    width: 100%;
    align-items: center;
    padding: 0 40px;
    max-width: 1120px;
    margin: auto;
    overflow: hidden;

    @media (max-width: 978px){
        padding: 0 10px;
        max-width: 90%;
    }
`;

export const Logo = styled.div`
    height: 100px;
    cursor: pointer;
`;

export const LinksHeader = styled.div`
    font-weight: 300;
    transition: ease-in-out 0.5s; 

    @media (max-width: 978px){
        display: none;
    }
`;

export const LinkH = styled.span`
    color: #5d6678;
    text-decoration: none;
    margin-left: 40px;
    transition: .5s border ease-in-out;
    border-bottom: 1px solid rgba(224, 0, 255, 0);
    padding: 5px;
    cursor: pointer;
    font-size: 18px;

    :hover {
        border-bottom: 1px solid rgba(224, 0, 255, 0.8);
        transition: .5s border ease-in-out;
    }

    @media (max-width: 978px){
        margin-top: 50px;
        margin-left: 0;
    }
`;

export const Hamburguer = styled.div`
    display: none;
    @media (max-width: 978px){
        display: block;
    }
`;

export const ContainerSidebar = styled.div`
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;