import React from 'react';
import { Table } from 'react-bootstrap';

class ProductList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            productList: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:8080/products", { mode: 'cors' })
        .then(r => r.json())
        .then(jsonResult => {
            this.setState({
                productList: jsonResult,
            });
        });
        
    }

    render() {
        const { productList } = this.state;
        
        const productListRows = [];
        !productList & productList.map(
            ({ productId, productName, productPrice }) => 
                productListRows.push(
                    <tr key={productId}>
                        <td>{productId}</td>
                        <td>{productName}</td>
                        <td>{productPrice}</td>
                    </tr>
                )
        );

        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Product ID</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                    </tr>
                </thead>
                <tbody>
                    { productListRows }
                </tbody>
            </Table>
        );
    }
}

export default ProductList;
