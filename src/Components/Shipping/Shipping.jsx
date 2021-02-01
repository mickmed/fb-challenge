import '../Billing/Billing.css'

const Shipping = (props) => {
  const { user } = props;
  // console.log(user.billing && user.billing.card.cardNum.split("").splice(5, 4));

  return (
    <section className="billing">
      <h3>Shipping</h3>
      <h6>Hi {user.username},  please check your Shipping Address</h6>
      <div>
        <img src="https://images.unsplash.com/photo-1589816494510-08265bbbbe48?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjV8fGNvbG9yZWQlMjBwZW5jaWxzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />

        {user.address && user.billing && (
          <div className="content">
            <div>{user.username}</div>
            <div className="address">
              <div>{user.address.street}</div>
              <div>{user.address.city}</div>
              <div>{user.address.state} {user.address.zipcode}</div>
              

            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Shipping;
