import React, { Component } from 'react'

export default class ProductCart extends Component {

    //ProductsInCart: Hàm chỉ hiển thị dữ liệu từ state. KO Có gọi setSate, thì ko cần xét 2đk khi move code qua Component
    // Move to Component ProductCart.jsx 
    showProductsInCart = () => {
        let {productCartProps, deleteProdInCartProps,updateQuantityProps} = this.props;


        return productCartProps.map((proCart) => {
            let { id, name, price, image, quantity } = proCart;
            return <tr key={`cart${id}`}>
                <td>{id}</td>
                <td>
                    <img style={{ width: "50px" }} src={image} alt='' />
                </td>
                <td>{name}</td>
                <td>
                    <button onClick={()=>{
                        updateQuantityProps(id,1);
                    }} 
                    className='btn btn-success'>+</button>
                    <span style={{ padding: "10px" }}>{quantity}</span>
                    <button onClick={()=>{
                        updateQuantityProps(id,-1);
                    }} 
                    className='btn btn-success'>-</button>
                </td>
                <td>{price}</td>
                <td>{quantity * price}</td>
                <td>
                    <button onClick={() => {
                        deleteProdInCartProps(id);
                    }} className='btn btn-danger'>Delete</button>
                </td>
            </tr>
        })
    }

    render() {
        return (
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content border-0 rounded-0">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div classname="modal-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Amount</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Move to Method showProductsInCart above: to scan array: show list product in cart
                            <tr>
                                <td>{id}</td>
                                <td>
                                    <img style={{ width: "50px" }} src={image} alt='' />
                                </td>
                                <td>{name}</td>
                                <td>
                                    <button className='btn btn-success'>+</button>
                                    <span style={{ padding: "10px" }}>{quantity}</span>
                                    <button className='btn btn-success'>-</button>
                                </td>
                                <td>{price}</td>
                                <td>{quantity * price}</td> //Các dữ liệu có thể tính toán từ data có sẵn-> ko cần lưu trữ nó vào đối tượng  
                                <td>
                                    <button className='btn btn-danger'>Delete</button>
                                </td>
                            </tr> */}
                                    {this.showProductsInCart()}

                                </tbody>
                            </table>
                        </div>

                    </div>
                    <div className="modal-footer bg-white">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        {/* <button type="button" className="btn btn-primary">Save changes</button> */}
                    </div>
                </div>
            </div>
        )
    }
}
