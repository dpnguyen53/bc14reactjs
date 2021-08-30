import React, { Component } from "react";
import DanhSachSanPham from "./danh-sach-san-pham";
import Modal from "./modal";
import data from "./data.json";

export default class LiftingStateUpCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listProduct: data,
      detailProduct: data[0],
      listCart: [],
    };
  }

  //Nhận data từ Component SanPham
  handleGetProduct = (product) => {
    this.setState({
      detailProduct: product,
    });
  };

  _findIndex = (maSP) => {
    return this.state.listCart.findIndex((item) => item.maSP === maSP);
  };

  handleAddCart = (product) => {
    /**
     * Thêm product vào giỏ hàng state.listCart
     */
    //copy lại mảng state.listCart
    let listCart = [...this.state.listCart]; //spread operator

    //Kiểm tra product có tồn tại trong listCart hay không?
    const index = this._findIndex(product.maSP);

    if (index !== -1) {
      //Update
      listCart[index].soLuong += 1;
    } else {
      //Tạo productCart trước khi add vào listCart
      const productCart = {
        maSP: product.maSP,
        tenSP: product.tenSP,
        hinhAnh: product.hinhAnh,
        soLuong: 1,
        donGia: product.giaBan,
      };
      //thêm productCart vào mảng listCart
      listCart.push(productCart);
    }

    //Cập nhật lại state để component render lại
    this.setState({
      listCart,
    });
  };

  handleDelete = (product) => {
    const index = this._findIndex(product.maSP);
    if (index !== -1) {
      //Tim thay product => delete
      let listCart = [...this.state.listCart];
      listCart.splice(index, 1);
      this.setState({
        listCart,
      });
    }
  };

  handleUpdateSL = (product, status) => {
    const index = this._findIndex(product.maSP);
    if (index !== -1) {
      let listCart = [...this.state.listCart];
      if (status) {
        //Tang SL
        listCart[index].soLuong += 1;
      } else {
        //Giam SL
        if (listCart[index].soLuong > 1) {
          listCart[index].soLuong -= 1;
        }
      }
      //Cap nhat lai state
      this.setState({
        listCart,
      });
    }
  };

  total = () => {
    // let sum = 0;
    // this.state.listCart.forEach((product) => {
    //   sum += product.soLuong;
    // });
    // return sum;
    return this.state.listCart.reduce(
      (sum, product) => (sum += product.soLuong),
      0
    );
  };

  render() {
    const { listProduct, detailProduct, listCart } = this.state;
    return (
      <div>
        <h3 className="title">Bài tập giỏ hàng</h3>
        <div className="container">
          <button
            className="btn btn-danger"
            data-toggle="modal"
            data-target="#modelId"
          >
            Giỏ hàng ({this.total()})
          </button>
        </div>
        <DanhSachSanPham
          listProduct={listProduct}
          getDetailProduct={this.handleGetProduct}
          getProductAddCart={this.handleAddCart}
        />
        <Modal
          listCart={listCart}
          getProductDelete={this.handleDelete}
          getProductUpdate={this.handleUpdateSL}
        />
        <div className="row">
          <div className="col-sm-5">
            <img className="img-fluid" src={detailProduct.hinhAnh} alt="" />
          </div>
          <div className="col-sm-7">
            <h3>Thông số kỹ thuật</h3>
            <table className="table">
              <tbody>
                <tr>
                  <td>Màn hình</td>
                  <td>{detailProduct.manHinh}</td>
                </tr>
                <tr>
                  <td>Hệ điều hành</td>
                  <td>{detailProduct.heDieuHanh})</td>
                </tr>
                <tr>
                  <td>Camera trước</td>
                  <td>{detailProduct.cameraTruoc}</td>
                </tr>
                <tr>
                  <td>Camera sau</td>
                  <td>{detailProduct.cameraSau}</td>
                </tr>
                <tr>
                  <td>RAM</td>
                  <td>{detailProduct.ram}</td>
                </tr>
                <tr>
                  <td>ROM</td>
                  <td>{detailProduct.rom}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
