import { useState, useRef, useEffect } from "react";
import Header from "./Header.jsx";
import Nav from "./Nav.jsx";
import OrderReview from "./OrderReview.jsx";
import "./App.css";

function App() {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [yAxis, setYAxis] = useState(0);
  const headerRef = useRef();

  useEffect(() => {
    setHeaderHeight(headerRef.current.clientHeight)
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
      <Header headerRef={headerRef} />
      <Nav yAxis={yAxis} headerHeight={headerHeight}/>
      <OrderReview />
    </div>
  );
}

export default App;
