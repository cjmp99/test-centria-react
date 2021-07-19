import React, { useContext, useState } from 'react'
import { Dialog } from 'primereact/dialog';
import { Container, Title, Img, ContentButton } from 'styled-components/purchase/purchase.style';
import confirm from 'media/areyousure.svg'
import { ButtonPr } from 'styled-components/list/list.styles';
import ProductContext from 'context/productsContext';
import { useHistory } from 'react-router-dom';

const ConfirmPurchase = ({ visible, onHide }) => {
    const { cart, completePurchase } = useContext(ProductContext);
    const [disabled, setDisable] = useState(false);
    const [loading, setLoading] = useState(false);
    const history = useHistory()

    const sendPurChase = () => {
        setLoading(true)
        setDisable(true)

        setTimeout(() => {
            completePurchase(cart)
            setLoading(false)
            setDisable(false)
            onHide()
            history.push('/shopping')
        }, 4000);
    }

    return (
        <Dialog
            visible={visible}
            onHide={onHide}
            breakpoints={{ '960px': '75vw', '640px': '100vw' }}
            style={{ width: '50vw' }}
            header={<Title>¿Are you sure to complete this purchase?</Title>}
            footer={
                <ContentButton>
                    <ButtonPr
                        bg={"red"}
                        hv={"rgba(255,0,0, 0.6) !important"}
                        label="Cancel"
                        onClick={onHide}
                        disabled={disabled}
                    />
                    <ButtonPr
                        onClick={sendPurChase}
                        disabled={disabled}
                        icon={
                            loading && <i className="pi pi-spin pi-spinner" style={{ 'fontSize': '1.5em' }}></i>
                        } label="Complete" />
                </ContentButton>
            }
        >
            <Container>

                <Img src={confirm} />
            </Container>
        </Dialog>
    )
}

export default ConfirmPurchase
