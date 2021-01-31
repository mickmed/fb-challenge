import { useState, useRef, useEffect } from "react";
import { Route } from "react-router-dom";
import Layout from "./Shared/Layout";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Billing from "./Components/Billing/Billing";
import BillingEdit from './Components/Billing/BillingEdit'
import Shipping from "./Components/Shipping/Shipping";
import OrderReview from "./Components/OrderReview/OrderReview";
import { User, Order } from "./Data/data.js";

import "./App.css";

function App() {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [yAxis, setYAxis] = useState(0);
  const headerRef = useRef();

  const [user, setUser] = useState([]);
  const [order, setOrder] = useState([]);

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
      setUser(resp[0]);
      const orderResp = await Order;
      setOrder(orderResp);
    };
    getUser();
  }, []);

  const yVal = () => {
    setYAxis(window.pageYOffset);
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
          <BillingEdit user={user} />
        </Route>
        <Route path="/order-review">
          <OrderReview user={user} order={order} />
        </Route>
      </Layout>
    </div>
  );
}

export default App;
