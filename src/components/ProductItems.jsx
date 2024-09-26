import React from 'react'

export default function ProductItems({productItems}) {
  return (
    <div className="col-4">
        <div className="card">
            <img src={productItems.thumbnail} alt="product-image1" />
            <h3>{productItems.brand}</h3>
            {/* <p>{productItems.description}</p> */}
            <div className="d-flex align-items-center justify-content-between">
                <span className="price">${productItems.price}</span>
                <button className="button">Buy Now</button>
            </div>
        </div>
    </div>
  )
}