import React, { Component } from 'react';
import ListProduct from './components/list-product';
import Modal from './components/modal';
import data from "./data/data.json";

export default class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            listProduct: data,
            detaiProduct: null,
        };
    }

    getInfoDetailProduct = (product) => {
        this.setState({
            detaiProduct: product,
        });
    }    

    render() {
        const { listProduct, detaiProduct } = this.state;
        return (
            <>
                <h3 className="title">Shoes Shop</h3>
                <ListProduct listProduct={listProduct} getInfoDetailProduct={this.getInfoDetailProduct}  />
                <Modal detaiProduct={detaiProduct}/>
            </>
        )
    }
}