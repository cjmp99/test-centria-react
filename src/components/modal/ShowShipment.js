import React, { useContext } from 'react'
import { Dialog } from 'primereact/dialog';
import { Container, ImageProduct, Title} from 'styled-components/purchase/purchase.style';
import ProductContext from 'context/productsContext';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const ShowShipment = ({ visible, onHide }) => {
    const { actualshipment } = useContext(ProductContext);

    return (
        <Dialog
            visible={visible}
            onHide={onHide}
            breakpoints={{ '960px': '75vw', '640px': '100vw' }}
            style={{ width: '50vw' }}
            header={<Title>Purchase</Title>}
            footer={
                <div>

                </div>
            }
        >
            <Container>
                <DataTable value={actualshipment?.products} className="p-datatable-responsive-demo">
                    <Column field="name" header="Name" body={rowData => <span>{rowData.name}</span>} />
                    <Column field="description" header="Description" body={rowData => <span>{rowData.description}</span>} />
                    <Column field="price" header="Price" body={rowData => <span>$ {rowData.price}</span>} />
                    <Column field="image" header="Image" body={rowData => <ImageProduct alt={rowData.name} src={rowData.img} />} />
                </DataTable>
            </Container>
        </Dialog>
    )
}

export default ShowShipment
