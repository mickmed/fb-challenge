import { useReducer } from "react";
import "./Billing.css";

const Billing = (props) => {
  const { user } = props;

  return (
    <section className="billing">
      <h3>Billing</h3>
      <h6>Hi {user.username}, please check your Billing Address</h6>
      <div>
        <img src="https://images.unsplash.com/photo-1589816494510-08265bbbbe48?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjV8fGNvbG9yZWQlMjBwZW5jaWxzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />

        {user.address && (
          <div className="content">
            <div>{user.username}</div>
            <div className="address">
              <div>{user.address.street}</div>
              <div>{user.address.city}</div>
              <div>{user.address.state} {user.address.zipcode}</div>
            </div>
            <section className="card">
              <h6>Payment Method: {user.billing.card.cardType} </h6>
              <div>Last Four: {user.billing.card.cardNum.split("").splice(5, 4)}</div>
            </section>
          </div>
        )}
      </div>
    </section>
  );
};

export default Billing;
