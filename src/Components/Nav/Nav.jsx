import { Link, NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = (props) => {
  const { headerHeight, yAxis } = props;
  const headerStyle = { position: "sticky", top: 0 };
  const active = { fontWeight: "bold", color: "red" };
  return (
    <nav style={yAxis > headerHeight ? headerStyle : {}}>
      <NavLink exact to={"/" || "/shipping"} activeStyle={active}>
        Shipping
      </NavLink>

      <NavLink to="/billing" activeStyle={active}>
        Billing
      </NavLink>
      <NavLink to="/order-review" activeStyle={active}>
        Order
      </NavLink>
    </nav>
  );
};
export default Nav;
