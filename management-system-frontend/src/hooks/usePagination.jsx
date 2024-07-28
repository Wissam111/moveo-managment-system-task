import { useState, useEffect } from "react";

const usePagination = ({
  key = "data",
  paginationHandler,
  pageSize = 10,
  filters = {},
}) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData({ initial: true, page: 1, pageSize });
  }, []);
  const fetchData = async ({
    initial = false,
    page,
    pageSize,
    customSearch = filters,
  }) => {
    setLoading(true);
    const paginationParams = { page, pageSize, ...customSearch };
    const response = await paginationHandler(paginationParams);
    setCount(response?.count);
    setLoading(false);
    if (initial) {
      setData(response?.[key]);
      return;
    }
    setData((prev) => [...prev, ...response?.[key]]);
  };

  const handleFilter = async (customSearch) => {
    setLoading(true);
    await fetchData({
      initial: true,
      page,
      pageSize,
      customSearch: { ...customSearch, ...filters },
    });
    setLoading(false);
  };

  const onPageChange = async (newPage) => {
    setLoading(true);
    await fetchData({
      initial: true,
      page: newPage,
      pageSize,
      customSearch: filters,
    });
    setPage(newPage);
    setLoading(false);
  };

  return {
    loading,
    handleGetData: fetchData,
    data,
    count,
    page,
    setData,
    setCount,
    onPageChange,
    handleFilter,
    onPageChange,
  };
};

export default usePagination;
