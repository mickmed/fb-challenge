import { useState, useEffect } from "react";
import {
  calcQuantities,
  calcTotals,
  calcDiscounts,
  calcTwoForOne,
} from "../Helpers";
import "./OrderReview.css";

const OrderReview = (props) => {
  const [quantities, setQuantities] = useState([0, 0, 0, 0]);
  const [totals, setTotals] = useState([]);
  const [discounts, setDiscounts] = useState([]);
  const [twoForOne, setTwoForOne] = useState(0);
  const [scenario1] = useState(["A", "A", "B", "C", "C", "D"]);
  const [scenario2] = useState(["A", "A", "A", "A", "A", "B", "B", "C", "D"]);
  const [selected, setSelected] = useState("scenario1");
  const { order, user } = props;

  useEffect(() => {
    //count scenario items
    const arr = selected === "scenario1" ? scenario1 : scenario2;
    const qty = {};
    for (let i = 0; i < arr.length; i++) {
      let key = arr[i];
      qty[key] = qty[key] ? qty[key] + 1 : 1;
    }
    setQuantities(Object.values(qty));

    //calc scenario totals and discounts
    order.length !== 0 &&
      Object.values(qty).forEach((qty, index) => {
        let price = order[index].price;
        setTotals((prev) => calcTotals(prev, qty, index, price));
        setDiscounts((prev) => calcDiscounts(prev, qty, index, price));
        index === 1 && setTwoForOne((prev) => calcTwoForOne(prev, qty));
      });
  }, [selected, order]);

  const counter = (e, id, price) => {
    let qty = e.target.valueAsNumber;
    setQuantities((prev) => {
      prev[id] = qty;

      return [...prev];
    });
    setTotals((prev) => calcTotals(prev, qty, id, price));
    setDiscounts((prev) => calcDiscounts(prev, qty, id, price));
    id === 1 && setTwoForOne((prev) => calcTwoForOne(prev, qty));
  };
  return (
    <div className="order-review">
      <h3>Order Review</h3>
      <div className="order">
        <div className="menu">
          <h6>Hi {user.username}, please review your order</h6>
          <div className="buttons">
            <button
              onClick={() => setSelected("scenario1")}
              className={selected === "scenario1" && "selected"}
            >
              Scenario 1
            </button>
            <button
              onClick={() => setSelected("scenario2")}
              className={selected === "scenario2" && "selected"}
            >
              Scenario 2
            </button>
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
          {order !== undefined &&
            order.map((item, index) => (
              <div className="item" key={index}>

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
                    value={quantities[index] || 0}
                    onChange={(e) => counter(e, index, item.price)}
                  />
                  <div className={`two-for-one ${index === 1 && "show"}`}>
                    {`+ ${twoForOne}`}
                  </div>
                </div>
                <div className="discount">
                  <h4>{discounts[index]}</h4>
                </div>
                <div className="total">
                  <div>{totals[index] || 0}</div>
                </div>
              </div>
            ))}
        </section>

        <section className="totals">
          <div className="summary">
            <div>
              <div>Discounts: &nbsp;</div>
              <div>{discounts.length && discounts.reduce((a, b) => a + b)}</div>
            </div>
            <div>
              <div>Bonus Items: &nbsp;</div>
              <div>{twoForOne}</div>
            </div>
            <div>
              <div>Total Items:</div>
              <div>
                {quantities.length && quantities.reduce((a, b) => a + b)}
              </div>
            </div>
          </div>
          <div className="total-price">
            <div>
              <div>Price: &nbsp;</div>
              <div>
                ${totals.length && totals.reduce((a, b) => a + b).toFixed(2)}
              </div>
            </div>
            <div>
              <div>
                Shipping for {user && user.address && user.address.zipcode}
              </div>
              <div>$16.78</div>
            </div>
            <div>
              <div>Total Price: &nbsp;</div>
              <div>
                $
                {parseInt(
                  totals.length && totals.reduce((a, b) => a + b).toFixed(2)
                ) + 16.98}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OrderReview;
