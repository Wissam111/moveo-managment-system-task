// @ts-nocheck
import { useState } from "react";

const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (callback) => {
    setLoading(true);
    try {
      const response = await callback();
      setLoading(false);
      return response;
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  };

  return { loading, error, fetchData };
};

export default useFetch;
