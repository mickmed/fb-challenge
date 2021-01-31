import { useState, useEffect } from "react";
import "./OrderReview.css";

const OrderReview = (props) => {
  useEffect(() => {});

  const [quantity, setQuantity] = useState([]);
  const [total, setTotal] = useState([]);
  const [discount, setDiscount] = useState([])

  const counter = (e, id, price) => {
    let { value } = e.target;
    setQuantity((prev) => {
      prev[id] = parseInt(value);
      return [...prev];
    });
    setTotal((prev) => {
      if (quantity[id] > 1 && id === 0) {
        if (quantity[id] % 2 === 0) {
          prev[id] = parseInt(value * 50);
        } else {
          prev[id] = parseInt((value - 1) * 50) + price;
        }
      } else {
        prev[id] = parseInt(value * price);
      }
      return [...prev];
    });
    setDiscount((prev) => {
      if (quantity[id] > 1 && id === 0) {
        if (quantity[id] % 2 === 0) {
          prev[id] = 10 * value;
        } else {
          prev[id] = 10 * (value -1);
        }
      } else {
        prev[id] = parseInt(value * price);
      }
      return [...prev];
    })
  };

  return (
    <div className="order-review">
      <h3>Order Review</h3>
      <div className="order">
        <h6>Please review your order</h6>

        <div className="header">
          <h3 className="name">item</h3>
          <h3 className="price">price</h3>
          <h3 className="qty">quantity</h3>
          <h3 className="discount">discount</h3>
          <h3 className="total">total</h3>
        </div>
        <section className="items">
          {props.order.map((item, index) => (
            <div className="item">
              {/* <img src={item.imgUrl} /> */}

              <div className="name">
                <h4>{item.name}</h4>
              </div>
              <div className="price">
                <h4>{item.price}</h4>
              </div>
              <div className="qty">
                <input
                  type="text"
                  name={`quantity ${index}`}
                  value={quantity[index] || 0}
                  onChange={(e) => counter(e, index, item.price)}
                />
              </div>
              <div className="discount">
                <h4>{discount[index]}</h4>
              </div>
              <div className="total">
                <input type="text" name="total" value={total[index] || 0} />
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default OrderReview;
