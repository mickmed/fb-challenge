import "./Header.css";
const Header = (props) => {
  
  return (
    <header ref={props.headerRef}>
      <h1 className="main-header">Brand o' Brands Stationery</h1>
    
    </header>
  );
};

export default Header;
