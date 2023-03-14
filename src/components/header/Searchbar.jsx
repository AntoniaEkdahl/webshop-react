import { useState } from "react";
import { useSelector } from "react-redux";
import { selectProducts } from "../../slice/productsSlice";
import "./Searchbar.css";
import { MagnifyingGlass } from "phosphor-react";
import Results from "../product/Results";
import "../product/Product.css";

function Searchbar() {
  const [searchResult, setSearchResult] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const PRODUCTS = useSelector(selectProducts);

  const onSearchClick = (searchTerm) => {
    setSearchResult(searchTerm);
  };

  const handleSearchChange = (e) => {
    setSearchResult(e.target.value);
    // Filter the products based on search string
    let resultsArray = PRODUCTS.filter(
      (product) =>
        product.title.toLowerCase().includes(e.target.value) ||
        product.description.toLowerCase().includes(e.target.value)
    );
    //Store the filterd products in state.
    setFilteredProducts(resultsArray);
  };

  return (
    <>
      <div className="searchBar">
        <input
          className="search"
          type="text"
          id="search"
          onChange={handleSearchChange}
          value={searchResult}
        />
        <button className="btn" onClick={() => onSearchClick(searchResult)}>
          <MagnifyingGlass size={25} />
        </button>
      </div>
      <Results filteredProducts={filteredProducts} />
    </>
  );
}

export default Searchbar;
