import React, { Component } from "react";
import SanPham from "./san-pham";

export default class DanhSachSanPham extends Component {
  renderListProduct = () => {
    return this.props.listProduct.map((product) => {
      return (
        <SanPham
          key={product.maSP}
          product={product}
          getDetailProduct={this.props.getDetailProduct}
          getProductAddCart={this.props.getProductAddCart}
        />
      );
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">{this.renderListProduct()}</div>
      </div>
    );
  }
}
