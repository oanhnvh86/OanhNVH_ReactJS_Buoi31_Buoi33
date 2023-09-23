import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        console.log(this.props);
        let { id, name, price, image } = this.props.productProps;
        let { productProps,AddToCartProps} = this.props;
        return (
            <div className="card">
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">${price}</p>
                    <button onClick={() => { 
                        AddToCartProps(productProps);
                     }} data-toggle="modal" data-target="#exampleModal" className="btn btn-primary">Add to cart</button>
                </div>
            </div>

        )
    }
}
