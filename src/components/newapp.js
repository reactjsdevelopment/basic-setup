import React, { useState, useEffect } from "react";
import List from "./List";
import ResultTile from "./result";
import { useSelector, useDispatch } from "react-redux";
import { remove, add } from "../reducers/cartSlice";
import { STATUSES, fetchProducts, setProducts, setStatus } from "../reducers/productSlice";
import { v4 as uuidv4 } from 'uuid';
export function NewApp() {
  const dispatch = useDispatch();

  const cartproducts = useSelector((state) => state.cart);
  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };
  const handleAdd = (product) => {
    dispatch(add(product));
  };
  const { data: products, status } = useSelector((state) => state.product);
  // const [products, setProducts] = useState([]);

  useEffect(() => {
    dispatch(fetchProducts());
    // const fetchProducts = async () => {
    //     const res = await fetch('https://fakestoreapi.com/products');
    //     const data = await res.json();
    //     console.log(data);
    //     setProducts(data);
    // };
    // fetchProducts();
  }, []);

 

  // if (status === STATUSES.LOADING) {
  //   return <h2>Loading....</h2>;
  // }

  // if (status === STATUSES.ERROR) {
  //   return <h2>Something went wrong!</h2>;
  // }
  console.log(cartproducts, "products");
  console.log(products, status, 'products1');
  return (
    <div>
      <h2>Articles</h2>
      {/* <List /> */}

      <button onClick={() => handleAdd({id: uuidv4(), name:'scds'})} className="btn">
        Add cart
      </button>

      <button className="btn" onClick={() => handleRemove("p1")}>
        Remove cart
      </button>

   

      <ResultTile/>
    </div>
  );
}

export default NewApp;
