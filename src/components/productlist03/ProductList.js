import React from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';

class ProductList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            productList: []
        };
    }

    async componentDidMount() {
        try {
            const res = await axios.get("http://localhost:8080/products")
            this.setState({
                productList: res.data,
            });
          } catch (error) {
            console.error(error);
          }
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
