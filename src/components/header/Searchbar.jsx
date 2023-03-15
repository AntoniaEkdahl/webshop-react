import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts, setFilteredProducts } from "../../slice/productsSlice";
import "./Searchbar.css";
import { MagnifyingGlass } from "phosphor-react";
import "../product/Product.css";
import { setSearchText } from "../../slice/productsSlice";

function Searchbar() {
  const [searchResult, setSearchResult] = useState("");
  const dispatch = useDispatch();
  const PRODUCTS = useSelector(selectProducts);

  const onSearchClick = (e) => {
    dispatch(setSearchText(searchResult));
    // Filter the products based on search string
    let resultsArray = PRODUCTS.filter(
      (product) =>
        product.title.toLowerCase().includes(searchResult) ||
        product.description.toLowerCase().includes(searchResult)
    );
    //Store the filterd products in state.
    dispatch(setFilteredProducts(resultsArray));

    setSearchResult("");
  };

  return (
    <>
      <div className="searchBar">
        <input
          className="search"
          type="text"
          id="search"
          onChange={(e) => {
            setSearchResult(e.target.value);
          }}
          value={searchResult}
        />
        <button className="btn" onClick={() => onSearchClick(searchResult)}>
          <MagnifyingGlass size={25} />
        </button>
      </div>
    </>
  );
}

export default Searchbar;
