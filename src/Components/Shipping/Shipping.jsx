const Shipping = (props) => {
  const { user } = props
console.log(user.billing &&user.billing.card.cardNum.split('').splice(5,4))

  return (
    <content className="billing">
      <h3>Shipping</h3>
      {user.address && user.billing && (
        <div className="content">
          <div>{user.username}</div>
          <div className="address">
            <div>{user.address.street}</div>
            <div>{user.address.city}</div>
            <div>{user.address.state}</div>
            
          </div>
        </div>
      )}
    </content>
  );
};

export default Shipping;
