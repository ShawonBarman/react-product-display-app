import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

import Category from "./components/Category";
import ProductItems from "./components/ProductItems";
import axios from 'axios';

function App() {
  let [finalCategory, setFinalCategory] = useState([]);
  let [finalProduct, setFinalProduct] = useState([]);
  let [categoryName, setCategoryName] = useState('');
  let [isLoading, setIsLoading] = useState(false);
  const [visibleCount, setVisibleCount] = useState(9);

  let getCategory = () => {
    setIsLoading(true);
    axios.get('https://dummyjson.com/products/categories')
    .then((res) => res.data)
    .then((finalRes) => {
      setIsLoading(false);
      setFinalCategory(finalRes);
    })
    .catch((error) => {
      setIsLoading(false);
      console.log(error);
    })
  };

  let getProducts = () => {
    setIsLoading(true);
    axios.get('https://dummyjson.com/products')
    .then((res) => res.data)
    .then((finalRes) => {
      setIsLoading(false);
      setFinalProduct(finalRes.products);
    })
    .catch((error) => {
      setIsLoading(false);
      console.log(error);
    })
  }

  useEffect(() => {
    getCategory();
    getProducts();
  }, []);

  useEffect(() => {
    if (categoryName !== ""){
      setIsLoading(true);
      axios.get(`https://dummyjson.com/products/category/${categoryName}`)
      .then((res) => res.data)
      .then((finalRes) => {
        setIsLoading(false);
        setFinalProduct(finalRes.products);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      })
    }
  }, [categoryName]);

  const loadMoreProducts = () => {
    setVisibleCount(prevCount => prevCount + 9);
  };

  let pItems = finalProduct.slice(0, visibleCount).map((v, i) => {
    return (
      <ProductItems key={i} productItems={v} />
    );
  })

  return (
    <>
      <div className="container py-5">
        <div className="row g-5">
          <h1 className="text-center fw-bolder mb-1">Our Products</h1>
          <div className="col-md-3">
            <div className="category_part">
              <Category finalCategory={finalCategory} setCategoryName={setCategoryName} />
            </div>
          </div>
          <div className="col-md-9">
            <div className="products">
              <div className="row g-4">
                {
                  (finalProduct.length > 0)
                  ?
                  pItems
                  :
                  <h2 className="text-center mt-5">No Product Found!</h2>
                }
              </div>
              {visibleCount < finalProduct.length && (
                <div className="see_more_section text-center mt-3">
                  <button className="btn btn-primary mt-4" onClick={loadMoreProducts}>
                    See More
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {
        (isLoading)
        ?
        (
          <div id="loader-overlay">
            <div className="loader"></div>
          </div>
        )
        :
        ''
      }
    </>
  );
}

export default App;



