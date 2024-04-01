import React, { Component } from 'react'

export default class Product extends Component {
  handleViewDetail = () => {
    this.props.viewDetail(this.props.productDetail);
  }

  render() {
    const { productDetail } = this.props;
    const { image, name } = productDetail;

    return (
      <div className="col-sm-4">
        <div className="card">
          <img className="card-img-top" src={image} alt="" />
          <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <button className="btn btn-danger" data-toggle="modal" data-target="#modelId" onClick={this.handleViewDetail}>Chi tiết</button>
          </div>
        </div>
      </div>
    )
  }
}
