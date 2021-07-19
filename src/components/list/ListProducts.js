import ProductContext from 'context/productsContext'
import React, { useContext, useEffect } from 'react'
import { ButtonPr, CardPr, Container, Img } from 'styled-components/list/list.styles'

const ListProducts = () => {
    const { products, getProducts, addProductToCart } = useContext(ProductContext);

    useEffect(() => {
        getProducts()
        // eslint-disable-next-line
    }, [])

    return (
        <Container>
            {products.map((product, key) => (
                <CardPr
                    key={key}
                    title={product.name}
                    subTitle={product.qty === 0 ? 'Exhausted' : `qty ${product.qty}`}
                    footer={
                        <span>
                            <ButtonPr
                                disabled={product.qty === 0}
                                onClick={() => addProductToCart(product, key)}
                                label={product.qty === 0 ? 'Exhausted' : 'Buy'}
                                icon={product.qty === 0 ? 'pi pi-ban' : 'pi pi-plus'}
                            />
                        </span>
                    }
                    header={
                        <Img alt="Card" src={product.img} />
                    }
                >

                    <p className="p-m-0" style={{ lineHeight: '1.5' }}>{product.description}</p>
                    <p className="p-m-0" style={{ lineHeight: '1.5', fontWeight: 'bold' }}>$ {product.price}</p>
                </CardPr>
            ))}
        </Container>
    )
}

export default ListProducts
