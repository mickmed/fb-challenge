import { useState, useEffect } from "react";
import "./OrderReview.css";

const OrderReview = (props) => {
  useEffect(() => {});

  return (
    <div className="order-review">
      <h3>Order Review</h3>
      <div className='order'>
        <h6>Please review your order</h6>

        <div className="header">
          <h3 className="name">item</h3>
          <h3 className="price">price</h3>
          <h3 className="qty">quantity</h3>
          <h3 className='discount'>discount</h3>
        </div>
        <section className="items">
          {props.order.map((item) => (
            <div className="item">
              {/* <img src={item.imgUrl} /> */}

              <div className="name">
                <h4>{item.name}</h4>
              </div>
              <div className="price">
                <h4>{item.price}</h4>
              </div>
              <div className="qty">
                <input type="text" value="1" />
              </div>
              <div className="discount">
                <h4>%</h4>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default OrderReview;
