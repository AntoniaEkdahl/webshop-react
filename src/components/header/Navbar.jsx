import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./Navbar.css";
import Searchbar from "./Searchbar";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="searchBar">
        <Searchbar />
      </div>
      <div className="links">
        <Link to="/products">Products</Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
