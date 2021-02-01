import { useState, useRef, useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import Layout from "./Shared/Layout";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Billing from "./Components/Billing/Billing";
import BillingEdit from "./Components/Billing/BillingEdit";
import Shipping from "./Components/Shipping/Shipping";
import OrderReview from "./Components/OrderReview/OrderReview";
import { User, Order } from "./Data/data.js";

import "./App.css";

function App() {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [yAxis, setYAxis] = useState(0);
  const headerRef = useRef();

  const [user, setUser] = useState({});
  const [order, setOrder] = useState([]);
  const history = useHistory();

  useEffect(() => {
    setHeaderHeight(headerRef.current.clientHeight);
    window.addEventListener("scroll", yVal);
    return () => {
      window.removeEventListener("scroll", yVal);
    };
  });

  useEffect(() => {
    const getUser = async () => {
      const resp = await User;
      setUser(resp);
      const orderResp = await Order;
      setOrder(orderResp);
    };
    getUser();
  }, []);

  const yVal = () => {
    setYAxis(window.pageYOffset);
  };

  const handleChange = async (e) => {
    const { id, value } = e.target;
    id === "username" &&
      (await setUser({
        ...user,
        [id]: id === "username" && value,
        billing: {
          address: {
            [id]:
              id === "street" || id === "state" || (id === "zipcode" && value),
          },
        },
      }));
  };

  const handleSubmit = async (e) => {
    history.push("/");
  };

  return (
    <div className="App">
      <Header headerRef={headerRef} />
      <Nav yAxis={yAxis} headerHeight={headerHeight} />
      <Layout>
        <Route exact path="/">
          <Shipping user={user} />
        </Route>
        <Route path="/shipping">
          <Shipping user={user} />
        </Route>
        <Route path="/billing">
          <Billing user={user} />
        </Route>
        <Route path="/billing-edit">
          <BillingEdit
            user={user}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </Route>
        <Route path="/order-review">
          <OrderReview user={user} order={order} />
        </Route>
      </Layout>
    </div>
  );
}

export default App;
