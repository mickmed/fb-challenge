import { useState, useEffect } from "react";
import {
  calcQuantities,
  calcTotals,
  calcDiscounts,
  calcTwoForOne,
} from "../Helpers";
import "./OrderReview.css";

const OrderReview = (props) => {
  const [quantity, setQuantity] = useState([0, 0, 0, 0]);
  const [total, setTotal] = useState([]);
  const [discount, setDiscount] = useState([]);
  const [twoForOne, setTwoForOne] = useState(0);
  const [scenario1] = useState(["A", "A", "B", "C", "C", "D"]);
  const [scenario2] = useState(["A", "A", "A", "A", "A", "B", "B", "C", "D"]);
  const [selected, setSelected] = useState("scenario1");
  const { order, user } = props;

  useEffect(() => {
    //count scenario items
    const arr = selected === "scenario1" ? scenario1 : scenario2;
    const quantities = {};
    for (let i = 0; i < arr.length; i++) {
      let key = arr[i];
      quantities[key] = quantities[key] ? quantities[key] + 1 : 1;
    }
    setQuantity(Object.values(quantities));

    //calc scenario totals and discounts
    order.length !== 0 &&
      Object.values(quantities).forEach((qty, index) => {
        let price = order[index].price;
        console.log(qty);
        setTotal((prev) => calcTotals(prev, qty, index, price));
        setDiscount((prev) => calcDiscounts(prev, qty, index, price));
      });
  }, [selected, order]);

  const counter = (e, id, price) => {
    let qty = e.target.valueAsNumber;
    setQuantity((prev) => {
      prev[id] = qty;

      return [...prev];
    });
    setTotal((prev) => calcTotals(prev, qty, id, price));
    setDiscount((prev) => calcDiscounts(prev, qty, id, price));
    id === 1 && setTwoForOne((prev) => calcTwoForOne(prev, qty));
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
          </div>
        </div>
        <div className="header">
          <h3 className="name">item</h3>
          <h3 className="price">price</h3>
          <h3 className="qty">quantity</h3>
          <h3 className="discount">discount</h3>
          <h3 className="total">total</h3>
        </div>
        <section className="items">
          {order.map((item, index) => (
            <div className="item" key={index}>
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
                <div className="two-for-one">
                  {index === 1 && `+ ${twoForOne}`}
                </div>
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
