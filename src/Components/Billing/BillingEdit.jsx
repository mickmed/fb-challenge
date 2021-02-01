import { useState } from "react";
import "./BillingEdit.css";

const BillingEdit = (props) => {
  const { handleChange, handleSubmit, user } = props;



  return (
    <section className="billing-edit">
      <img src="https://images.unsplash.com/photo-1589816494510-08265bbbbe48?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjV8fGNvbG9yZWQlMjBwZW5jaWxzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt='img'  /> 
      { Object.keys(user).length && (
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Name</label>
          <input
            type="text"
            id="username"
            value={user.username}
            onChange={handleChange}
          />
          <label htmlFor="street">Street</label>
          <input
            type="text"
            id="street"
            value={user.billing.address.street}
            onChange={handleChange}
          />
          <label htmlFor="state">State</label>
          <input
            type="text"
            id="state"
            value={user.billing.address.state}
            onChange={handleChange}
          />
          <label htmlFor="zipcode">Zip</label>
          <input
            type="text"
            id="zipcode"
            value={user.billing.address.zipcode}
            onChange={handleChange}
          />
          <button type='submit'>Update</button>
        </form>
      )}
    </section>
  );
};

export default BillingEdit;
