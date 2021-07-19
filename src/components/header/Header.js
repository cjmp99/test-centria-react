import React, { useContext } from 'react'
import { Container, ContainerSidebar, Hamburguer, LinkH, LinksHeader, Logo, Nav, Section, Title } from 'styled-components/header/header.styles'
import { Sidebar } from 'primereact/sidebar';
import useShowSidebar from 'hooks/useShowSidebar';
import { useHistory } from 'react-router-dom';
import ProductContext from 'context/productsContext';

const Header = () => {
    const [visible, showSidebar] = useShowSidebar()
    const { cart } = useContext(ProductContext);
    const history = useHistory()

    return (
        <Container>
            <Nav>
                <Section>
                    <Logo>
                        <Title onClick={() => history.push('/')}>Carlos Shop</Title>
                    </Logo>
                    <LinksHeader>

                        <LinkH onClick={() => history.push('/')}>products</LinkH>
                        <LinkH onClick={() => history.push('/shopping')}>shopping</LinkH>
                        <LinkH onClick={() => history.push('/cart')}><i className="pi pi-shopping-cart"></i> <b>{cart.length}</b></LinkH>
                    </LinksHeader>
                    <Hamburguer>
                        <LinkH onClick={showSidebar}><i className="pi pi-bars"></i></LinkH>
                    </Hamburguer>
                </Section>
            </Nav>
            <Sidebar visible={visible} position="right" onHide={showSidebar}>
                <ContainerSidebar>
                    <LinkH onClick={() => history.push('/')}>products</LinkH>
                    <LinkH onClick={() => history.push('/shopping')}>shopping</LinkH>
                    <LinkH onClick={() => history.push('/cart')}><i className="pi pi-shopping-cart"></i>  <b>{cart.length}</b></LinkH>
                </ContainerSidebar>
            </Sidebar>
        </Container>
    )
}

export default Header
