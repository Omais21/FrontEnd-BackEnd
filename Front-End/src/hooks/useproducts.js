import { useEffect, useState } from "react";
import axios from "axios";
import { API_KEY } from "../lib";

// hooks function returns state
export default function useProducts(query) {
    // memoization 
  // const API_KEY = `https://dummyjson.com/products?${query}`;
  

  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getProductData = async () => {
    try {
      setError(null);
      setIsLoading(true);
      const response = await axios(`${API_KEY}/AllProducts`);

      setProducts(response?.data?.products);
    } catch (error) {
      setError(
        error?.response?.statusText || "Unknown error, please try again"
      );
    } finally {
      setIsLoading(false);
    }
  };

  // useEffect ak bar call hoga (in this case)
  useEffect(() => {
    getProductData();
  }, []);

  return {
    Products: products,
    isLoading: isLoading,
    error: error,
  };
}