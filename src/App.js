import { useState, useRef, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav'
import Billing from './Billing';
import Shipping from './Shipping'
import ReviewOrder from './ReviewOrder';

import './App.css'

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
    <div className='App'>
      <Header headerRef={headerRef} />
      <Nav yAxis={yAxis} headerHeight={headerHeight} />
      <Route path='/shipping'>
        <Shipping />
      </Route>
      <Route path='/billing'>
        <Billing />
      </Route>
      <Route path='review-order'>
        <ReviewOrder />
      </Route>
    </div>
  );
}

export default App;
