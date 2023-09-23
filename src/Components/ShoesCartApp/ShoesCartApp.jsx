import React, { Component, Fragment } from 'react'
import ProductList from './ProductList';
import ProductCart from './ProductCart';

export default class ShoesCartApp extends Component {
    //Attribute: productList (Thuộc tính của class)
    productList = [
        {
            "id": 1,
            "name": "Adidas Prophere",
            "alias": "adidas-prophere",
            "price": 350,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 995,
            "image": "http://svcy3.myclass.vn/images/adidas-prophere.png"
        },
        {
            "id": 2,
            "name": "Adidas Prophere Black White",
            "alias": "adidas-prophere-black-white",
            "price": 450,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 990,
            "image": "http://svcy3.myclass.vn/images/adidas-prophere-black-white.png"
        },
        {
            "id": 3,
            "name": "Adidas Prophere Customize",
            "alias": "adidas-prophere-customize",
            "price": 375,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 415,
            "image": "http://svcy3.myclass.vn/images/adidas-prophere-customize.png"
        },
        {
            "id": 4,
            "name": "Adidas Super Star Red",
            "alias": "adidas-super-star-red",
            "price": 465,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 542,
            "image": "http://svcy3.myclass.vn/images/adidas-super-star-red.png"
        },
        {
            "id": 5,
            "name": "Adidas Swift Run",
            "alias": "adidas-swift-run",
            "price": 550,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 674,
            "image": "http://svcy3.myclass.vn/images/adidas-swift-run.png"
        },
        {
            "id": 6,
            "name": "Adidas Tenisky Super Star",
            "alias": "adidas-tenisky-super-star",
            "price": 250,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 456,
            "image": "http://svcy3.myclass.vn/images/adidas-tenisky-super-star.png"
        },
        {
            "id": 7,
            "name": "Adidas Ultraboost 4",
            "alias": "adidas-ultraboost-4",
            "price": 450,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 854,
            "image": "http://svcy3.myclass.vn/images/adidas-ultraboost-4.png"
        },
        {
            "id": 8,
            "name": "Adidas Yeezy 350",
            "alias": "adidas-yeezy-350",
            "price": 750,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 524,
            "image": "http://svcy3.myclass.vn/images/adidas-yeezy-350.png"
        },
        {
            "id": 9,
            "name": "Nike Adapt BB",
            "alias": "nike-adapt-bb",
            "price": 630,
            "description": "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
            "shortDescription": "Paul George is the rare high-percentage shooter",
            "quantity": 599,
            "image": "http://svcy3.myclass.vn/images/nike-adapt-bb.png"
        },
        {
            "id": 10,
            "name": "Nike Air Max 97",
            "alias": "nike-air-max-97",
            "price": 650,
            "description": "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
            "shortDescription": "Paul George is the rare high-percentage shooter",
            "quantity": 984,
            "image": "http://svcy3.myclass.vn/images/nike-air-max-97.png"
        },
        {
            "id": 11,
            "name": "Nike Air Max 97 Blue",
            "alias": "nike-air-max-97-blue",
            "price": 450,
            "description": "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
            "shortDescription": "Paul George is the rare high-percentage shooter",
            "quantity": 875,
            "image": "http://svcy3.myclass.vn/images/nike-air-max-97-blue.png"
        },
        {
            "id": 12,
            "name": "Nike Air Max 270 React",
            "alias": "nike-air-max-270-react",
            "price": 750,
            "description": "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
            "shortDescription": "Paul George is the rare high-percentage shooter",
            "quantity": 445,
            "image": "http://svcy3.myclass.vn/images/nike-air-max-270-react.png"
        }
    ]

    //!Product List : move to component ProductList.jsx
    // showProductList = () => {
    //     //return: trả mảng mới ra khỏi hàm showProductList
    //     return this.productList.map((product) => {
    //         //bóc tách thành phần trong product. Note: thành phần y chang trong json
    //         let{id, name, price, image} = product;
    //         //return: trả về mảng mới chứa các obj thẻ col-3
    //         return <div className="col-3 mt-3" key={`code${id}`}>
    //             <div className="card">
    //                 <img src={image} className="card-img-top" alt="..." />
    //                 <div className="card-body">
    //                     <h5 className="card-title">{name}</h5>
    //                     <p className="card-text">${price}</p>
    //                     <button data-toggle="modal" data-target="#exampleModal" className="btn btn-primary">Add to cart</button>
    //                 </div>
    //             </div>
    //         </div>
    //     })
    // }

    //State: chứa mảng đối tượng (kiểu dữ liệu: mảng đối tượng)
    state = {
        // productCart: [
        //     {
        //         id: 1,
        //         name: "Adidas Prophere",
        //         price: 350,
        //         image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
        //         quantity: 1
        //     },
        //     {
        //         id: 2,
        //         name: "Adidas Prophere",
        //         price: 350,
        //         image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
        //         quantity: 1
        //     }
        // ]
        //Mảng mới load lên sẽ empty
        productCart: []
    }

    //ProductsInCart: Hàm chỉ hiển thị dữ liệu từ state. KO Có gọi setSate, thì ko cần xét 2đk khi move code qua Component
    //! Move to Component ProductCart.jsx do hàm này ko có set State nên move ok
    // showProductsInCart = () => {
    //     return this.state.productCart.map((proCart) => {
    //         let { id, name, price, image, quantity } = proCart;
    //         return <tr key={`cart${id}`}>
    //             <td>{id}</td>
    //             <td>
    //                 <img style={{ width: "50px" }} src={image} alt='' />
    //             </td>
    //             <td>{name}</td>
    //             <td>
    //                 <button className='btn btn-success'>+</button>
    //                 <span style={{ padding: "10px" }}>{quantity}</span>
    //                 <button className='btn btn-success'>-</button>
    //             </td>
    //             <td>{price}</td>
    //             <td>{quantity * price}</td>
    //             <td>
    //                 <button className='btn btn-danger'>Delete</button>
    //             </td>
    //         </tr>
    //     })
    // }

    //Add Product To Cart => setState()
    //Thỏa 2dk để khai báo hàm gọi setState=> hàm này sẽ dc đặt ở Component này
    AddToCart = (product) => { 
        // console.log(product);
        let {id,name, price,image} = product
        
        //khởi tạo sản phẩm mới thêm vào mảng
        let prdToCart = {
            id: id,
            name: name,
            price: price,
            image: image,
            quantity: 1
        }
        console.log("sp mới: ",prdToCart );

        //giữ lại các sản phẩm đang có của giỏ hàng và thêm dc sản phẩm mới
        //copy mảng cũ
        //let function scope
        let productCartUpdate = [...this.state.productCart];

        //Check :sp mới đó có tồn tại trong giỏ hàng hay chưa
        let findProd = this.state.productCart.find((prodsInCart) => {
            return prodsInCart.id === prdToCart.id
        })
        console.log("findProd:",findProd);
        if(findProd){
            //tìm thấy sp đã có trong giỏ => tăng số lượng của sp đó
            findProd.quantity += 1
        }
        else{
            //let phạm vi block scope: let productCartUpdate = [...this.state.productCart,prdToCart];
            //thêm phần tử mới vào mảng
            productCartUpdate.push(prdToCart); //productCartUpdate.push(findProd);
        }

        //giữ lại các sản phẩm đang có của giỏ hàng và thêm dc sản phẩm mới
        //copy mảng cũ + thêm phần tử mới vào mảng
        // let productCartUpdate = [...this.state.productCart,prdToCart];
        console.log("sp trong gio hàng: ", productCartUpdate )
        
        //goi setState
        this.setState({
            productCart: productCartUpdate
        })
    }

    //Delete ProdInCart
    deleteProdInCart = (prodID) => { 
        console.log("delete prod:", prodID)

        //giữ lại các sản phẩm đang có của giỏ hàng 
        //copy mảng cũ ra mảng mới
        //let function scope
        let productCartUpdate = [...this.state.productCart];

        //index
        // c1: rút gọin
        // let index = productCartUpdate.findIndex(prodsInCart => prodsInCart.id === prodID
        //c2
        let index = productCartUpdate.findIndex((prodsInCart) => {
            return prodsInCart.id === prodID
        })
        if(index>-1){
            productCartUpdate.splice(index,1);
        }

        //update lại mảng mới vào mảng cũ
        this.setState({
            productCart: productCartUpdate
        })
    }

    //update Quantity (Inscrease, Descrease Quantity)
    //quantity: Nếu cần tăng => truyền 1. Nếu muốn giảm => truyền -1
    updateQuantity = (prodID, quantity) => { 
        console.log("update Quantity: ",prodID)

        let prodFind = this.state.productCart.find((prodsInCart) => { 
            return prodsInCart.id === prodID
         })
        if (prodFind)
        {
            //nếu tìm thấy product thì thay đổi số lượng
            prodFind.quantity += quantity;
            if(prodFind.quantity<1){
                alert("invalid quantity")
                prodFind.quantity = 1;
            }
        }

        //update lại mảng mới vào mảng cũ
        this.setState({
            productCart: this.state.productCart
        })
    }

    //sumProdInCart
    sumProdInCart = () => { 
        let t = 0;
        //duyệt mảng gio hàng
        this.state.productCart.map((prod) => {
            t += Number(prod.quantity);
        })
        //return
        return t;
    }


    //Output to UI
    render() {
        //bóc tách thành phần trong state (productCart) . Note: tên thành phần y chang trong state
        // let { id, name, price, image, quantity } = this.state.productCart[0];

        return (
            //   <div> 
            <Fragment>
                {/* 1.Header  */}
                <div className="row">
                    <div className="col-9">
                        <h2>Bài tập giỏ hàng</h2>
                    </div>
                    <div className="col-3">
                        <p data-toggle="modal" data-target="#exampleModal" className='text-danger'>Gio hàng ({this.sumProdInCart()})</p>
                    </div>
                </div>

                {/* 2.Product List */}
                {/* <div className="row"> */}
                {/*! Move to:  showProductList
                    <div className="col-3">
                        <div className="card">
                            <img src="http://svcy3.myclass.vn/images/adidas-prophere.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Adidas</h5>
                                <p className="card-text">20.000</p>
                                <button data-toggle="modal" data-target="#exampleModal" className="btn btn-primary">Add to cart</button>
                            </div>
                        </div>
                    </div> */}
                {/* {this.showProductList()}
                </div> */}

                <ProductList AddToCartProps = {this.AddToCart}  productListProps={this.productList} />

                {/* 3.Modal Popup Cart: Dữ liệu thay đổi --> store trong state -> kiểu dữ liệu: mảng đối tượng*/}
                {/*! Move to Component ProductCart.jsx */}
                {/* <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
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
                                        /* Move to Method ProductsInCart above: to scan array: show list product in cart
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
                                        </tr> /
                                        {this.showProductsInCart()}

                                    </tbody>
                                </table>
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div> */}
                <ProductCart updateQuantityProps = {this.updateQuantity}   deleteProdInCartProps = {this.deleteProdInCart}  productCartProps = {this.state.productCart} />

            </Fragment >
            // </div>
        )
    }
}
