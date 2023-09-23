import React, { Component } from 'react'

export default class GlassesApp extends Component {
    arrGlasses = [
        {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./img/glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "./img/glassesImage/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 3,
            "price": 30,
            "name": "DIOR D6700HQ",
            "url": "./img/glassesImage/v3.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 4,
            "price": 70,
            "name": "DIOR D6005U",
            "url": "./img/glassesImage/v4.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 5,
            "price": 40,
            "name": "PRADA P8750",
            "url": "./img/glassesImage/v5.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 6,
            "price": 60,
            "name": "PRADA P9700",
            "url": "./img/glassesImage/v6.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 7,
            "price": 80,
            "name": "FENDI F8750",
            "url": "./img/glassesImage/v7.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 8,
            "price": 100,
            "name": "FENDI F8500",
            "url": "./img/glassesImage/v8.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 9,
            "price": 60,
            "name": "FENDI F4300",
            "url": "./img/glassesImage/v9.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    ]

    state = {
        url : "./img/glassesImage/v2.png",
    };

    handleChangeUrl = (url) => {
        console.log("url:",url)
        this.setState({
            url : url
        })
    };

    showGlassesList = () => {
        //return: trả kết quả ra khỏi hàm hienThiDSMap
        return this.arrGlasses.map((glasses) => {
            //Bóc tách thuộc tính => giúp dùng nhanh thuộc tính mà ko cần dùng cú  pháp phone.hinhAnh
            let {id,  url} = glasses;
            //Đối tượng div column
            //key: gần giống id của object, giúp react phân biệt giữa các đối tượng cùng loại
            //map: return bên trong map: ko dừng vòng lặp (chỉ dừng vòng lặp khi hết mảng) => trả về 1 mảng mới.
                    // trả về mảng mới , chưa trả ra khỏi phương thức hienThiDSMap
            return <div className="col-2 itemStyle" key={`glasses${id}`}> {/* key={`phone${phone.maSP}`} */}
                    <button onClick={() => this.handleChangeUrl({url})}><img src={url} className="card-img-top" alt="..." /></button>
            </div>
        })
    }

    

  render() {
    let styleModel = {
        width: "300px",
        height: "300px",
    }
    let styleGlass = {
        width: "150px",
        height: "50px",
        
    }
    return (
      <div className='styleBg'>
        <div className="modelSize pt-5">
            <img style={styleModel}  src="./img/glassesImage/model.jpg" alt="" />
            <div className='setGlass'><img style={styleGlass}  src={this.state.url} alt="" /></div>
        </div>
        <div className="row mt-5 listGlasses">
            {this.showGlassesList()}
        </div>
      </div>
    )
  }
}
