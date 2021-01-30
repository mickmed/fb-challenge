import "./Nav.css";

const Nav = (props) => {
  const { headerHeight, yAxis } = props;
    console.log(headerHeight, yAxis)
  const style = { position: "sticky", top: 0 };
  return (
    <nav style={yAxis > headerHeight ? style : {}}>
      <ul>
        <li>Shipping</li>
        <li>Billing</li>
        <li>Review</li>
      </ul>
    </nav>
  );
};
export default Nav;
