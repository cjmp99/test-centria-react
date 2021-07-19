import Layout from 'components/layout/Layout'
import React, { useContext } from 'react'
import { Container } from 'styled-components/list/list.styles'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import ProductContext from 'context/products/productsContext';
import { Tag } from 'primereact/tag';
import ShowShipment from 'components/modal/ShowShipment';
import useShowModal from 'hooks/useShowModal';

const Shopping = () => {
    const [visible, onHide] = useShowModal()
    const { myshopping, selectShipment } = useContext(ProductContext);

    const showShipment = shipment => {
        onHide()
        selectShipment(shipment)
    }

    return (
        <Layout>
            <Container>
                <h1>My shopping</h1>

                <DataTable value={myshopping} className="p-datatable-responsive-demo" rows={10}>
                    <Column field="products" header="Qty products" body={
                        rowData => (
                            <span>{rowData.products.length}</span>
                        )
                    } />
                    <Column field="pricetotal" header="Price Total" body={
                        rowData => (
                            <span> $ {rowData.totalprice}</span>
                        )
                    } />
                    <Column field="status" header="Status" body={
                        rowData => (
                            <Tag className="p-mr-2" severity="success" value={rowData.status}></Tag>
                        )
                    } />
                    <Column field="showproducts" header="Shipment" body={
                        rowData => (
                            <span style={{position: 'relative', left: '30px'}} onClick={() => showShipment(rowData)}>
                                <i className="pi pi-eye"></i>
                            </span>
                        )
                    } />
                </DataTable>
            </Container>

            <ShowShipment
                visible={visible}
                onHide={onHide}
            />
        </Layout>
    )
}

export default Shopping
