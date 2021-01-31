import { useReducer } from "react";
import "./Billing.css";

const Billing = (props) => {
  const { user } = props;

  return (
    <content className="billing">
      <h3>Billing</h3>{" "}
      {user.address && (
        <div className="content">
          <div>{user.username}</div>
          <div className="address">
            <div>{user.address.street}</div>
            <div>{user.address.city}</div>
            <div>{user.address.state}</div>
          </div>
          <section className='card'>
              <h6>Last Four</h6>
              <div>{user.billing.card.cardNum.split('').splice(5,4)}</div>
            </section>
        </div>
      )}
    </content>
  );
};

export default Billing;
