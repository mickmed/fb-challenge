import { useState, useRef, useEffect } from "react";
import { Route } from "react-router-dom";
import Layout from './Shared/Layout'
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Billing from "./Components/Billing/Billing";
import Shipping from "./Components/Shipping/Shipping";
import ReviewOrder from "./Components/ReviewOrder/ReviewOrder";

import "./App.css";

function App() {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [yAxis, setYAxis] = useState(0);
  const headerRef = useRef();

  useEffect(() => {
    setHeaderHeight(headerRef.current.clientHeight);
    window.addEventListener("scroll", yVal);
    return () => {
      window.removeEventListener("scroll", yVal);
    };
  });

  const yVal = () => {
    setYAxis(window.pageYOffset);
  };

  return (
    <div className="App">
      <Layout>
        <Header headerRef={headerRef} />
        <Nav yAxis={yAxis} headerHeight={headerHeight} />
        <Route path="/shipping">
          <Shipping />
        </Route>
        <Route path="/billing">
          <Billing />
        </Route>
        <Route path="review-order">
          <ReviewOrder />
        </Route>
      </Layout>
    </div>
  );
}

export default App;
