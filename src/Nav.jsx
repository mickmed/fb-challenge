import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = (props) => {
  const { headerHeight, yAxis } = props;
  console.log(headerHeight, yAxis);
  const style = { position: "sticky", top: 0 };
  return (
    <nav style={yAxis > headerHeight ? style : {}}>
      <Link to='/shipping'>Shipping</Link>
      <Link to='/billing'>Billing</Link>
      <Link to='/review'>ReviewOrder</Link>
    </nav>
  );
};
export default Nav;
