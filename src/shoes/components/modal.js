import React, { Component } from 'react'

export default class Modal extends Component {

  render() {
    const { detaiProduct } = this.props;
    return (
      <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
        <div className="modal-dialog" style={{ maxWidth: "1000px" }} role="document" >

          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Thông Tin Chi Tiết</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-sm-5">
                  <img className="img-fluid" src={detaiProduct?.image} alt={detaiProduct?.name} />
                </div>
                <div className="col-sm-7">
                  <h3></h3>
                  <table className="table">
                    <tbody>
                      <tr className="row">
                        <td className="col-sm-5">Tên sản phẩm</td>
                        <td className="col-sm-7">{detaiProduct?.name}</td>
                      </tr>
                      <tr className="row">
                        <td className="col-sm-5">Giá</td>
                        <td className="col-sm-7">{detaiProduct?.price}</td>
                      </tr>
                      <tr className="row">
                        <td className="col-sm-5">Mô tả</td>
                        <td className="col-sm-7">{detaiProduct?.description}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
