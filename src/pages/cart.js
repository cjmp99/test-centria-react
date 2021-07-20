import Layout from 'components/layout/Layout'
import ConfirmPurchase from 'components/modal/ConfirmPurchase';
import ProductContext from 'context/productsContext';
import useShowModal from 'hooks/useShowModal';
import React, { useContext, useRef } from 'react'
import { Container, ContentInfo, ContentProducts, Label, NonData, Product, RemoveButton, Title } from 'styled-components/cart/cart.styles'
import { Toast } from 'primereact/toast';
import { ButtonPr } from 'styled-components/list/list.styles';

const Cart = () => {
    const [visible, onHide] = useShowModal()
    const { cart, pricetotal, removeProduct } = useContext(ProductContext);
    const toast = useRef(null);

    const accept = () => {
        toast.current.show({ severity: 'success', summary: 'Confirmed', detail: 'You have accepted', life: 5000 });
    }

    return (
        <Layout>
            <Toast ref={toast} />

            <Title>Cart</Title>

            <Container>
                <ContentProducts>
                    {cart.length === 0 ?
                        <>
                            <NonData className="pi pi-info-circle"></NonData>
                            <h3>No products added</h3>
                        </>
                        :
                        <>
                            <Product>
                                <Label weight={'bold'}>Name</Label>
                                <Label weight={'bold'}>Description</Label>
                                <Label weight={'bold'}>Price</Label>
                                <Label weight={'bold'}>Actions</Label>
                            </Product>

                            {cart.map((product, key) => (
                                <Product key={key}>
                                    <Label>{product.name}</Label>
                                    <Label>{product.description}</Label>
                                    <Label>$ {product.price}</Label>
                                    <Label>
                                        <RemoveButton onClick={() => removeProduct(product, key)}>
                                            <i className="pi pi-minus-circle"></i>
                                        </RemoveButton>
                                    </Label>
                                </Product>
                            ))}
                        </>
                    }


                </ContentProducts>
                <ContentInfo>
                    <h2>Purchase information</h2>

                    <span>Price total: <b>$ {pricetotal ? pricetotal?.toFixed(2) : '$ 0.00'}</b></span>

                    <ButtonPr disabled={cart.length === 0} onClick={onHide} style={{ marginTop: '50px' }} label="Complete purchase" />
                </ContentInfo>
            </Container>

            <ConfirmPurchase
                visible={visible}
                onHide={onHide}
                accept={accept}
            />
        </Layout>
    )
}

export default Cart
