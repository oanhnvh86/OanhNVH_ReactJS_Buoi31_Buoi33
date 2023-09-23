import React, { Component } from 'react'
import ProductItem from './ProductItem';

export default class ProductList extends Component {
    
    //Product List : move to component ProductList.jsx
    showProductList = () => {
        let {productListProps, AddToCartProps } = this.props;

        //return: trả mảng mới ra khỏi hàm showProductList
        return productListProps.map((product) => {
            //bóc tách thành phần trong product. Note: thành phần y chang trong json
            let{id, name, price, image} = product;
            //return: trả về mảng mới chứa các obj thẻ col-3
            return <div className="col-3 mt-3" key={`code${id}`}>
                {/* Move to Component ProductItem.jsx
                <div className="card">
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">${price}</p>
                        <button data-toggle="modal" data-target="#exampleModal" className="btn btn-primary">Add to cart</button>
                    </div>
                </div> */}
                <ProductItem AddToCartProps = {AddToCartProps}  productProps = {product}/>
            </div>
        })
    }

    //Output to UI
    render() {
        console.log(this.props);
        return (
            <div className="row">
                {this.showProductList()}
            </div>
        )
    }
}
