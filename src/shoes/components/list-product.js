import React, { Component } from 'react';
import Product from './product';

export default class ListProduct extends Component {

  renderListProduct = () => {
    const { listProduct, getInfoDetailProduct } = this.props;
    return listProduct.map((item, Index) => {
      return <Product key={Index} productDetail={item} viewDetail={getInfoDetailProduct} />;
    });
  };

  render() {
    return (
      <div className='container'>
          <div className='row'>{this.renderListProduct()}</div>
      </div>
    )
  }
}