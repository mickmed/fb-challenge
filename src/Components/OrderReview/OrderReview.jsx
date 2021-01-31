import { useState, useEffect } from "react";
import "./OrderReview.css";

const OrderReview = (props) => {
  const [quantity, setQuantity] = useState([0, 0, 0, 0]);
  const [total, setTotal] = useState([]);
  const [discount, setDiscount] = useState([]);

  const [scenario1] = useState(["A", "A", "B", "C", "C", "D"]);
  const [scenario2] = useState(["A", "A", "A", "A", "A", "B", "B", "C", "D"]);
  const [selected, setSelected] = useState("scenario1");

  useEffect(() => {
    const quantities = {};
    const arr = selected === "scenario1" ? scenario1 : scenario2;

    for (let i = 0; i < arr.length; i++) {
      let key = arr[i];
      quantities[key] = quantities[key] ? quantities[key] + 1 : 1;
    }
    setQuantity(Object.values(quantities));
  }, [selected]);

  const counter = (e, id, price) => {
    let qty = e.target.valueAsNumber;

    setQuantity((prev) => {
      if (qty > 1 && id === 1 && qty) {
        if (qty % 2 === 0) {
          prev[id] = qty + qty / 2;
        } else {
          prev[id] = qty + (qty - 1) / 2;
        }

        return [...prev];
      } else {
        prev[id] = qty;
        return [...prev];
      }
    });
    setTotal((prev) => {
      if (qty > 1 && id === 0) {
        if (qty % 2 === 0) {
          prev[id] = qty * 50;
        } else {
          prev[id] = (qty - 1) * 50 + price;
        }
      } else if (qty > 1 && id === 1) {
        prev[id] = qty * price;
      } else {
        prev[id] = qty * price;
      }
      return [...prev];
    });
    setDiscount((prev) => {
      if (qty > 1 && id === 0) {
        if (qty % 2 === 0) {
          prev[id] = 10 * qty;
        } else {
          prev[id] = 10 * (qty - 1);
        }
      } else {
        prev[id] = parseInt(qty * price);
      }
      return [...prev];
    });
  };

  return (
    <div className="order-review">
      <h3>Order Review</h3>
      <div className="order">
        <div className="menu">
        <h6>Please review your order</h6>
        <div className="buttons">
          <button onClick={() => setSelected("scenario1")}>Scenario 1</button>
          <button onClick={() => setSelected("scenario2")}>Scenario 2</button>
        </div></div>
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
                  type="number"
                  min="0"
                  name={`quantity ${index}`}
                  value={quantity[index] || 0}
                  onChange={(e) => counter(e, index, item.price)}
                />
              </div>
              <div className="discount">
                <h4>{discount[index]}</h4>
              </div>
              <div className="total">
                <div>{total[index] || 0}</div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default OrderReview;
