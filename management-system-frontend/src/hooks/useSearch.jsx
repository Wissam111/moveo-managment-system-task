import { useState, useEffect } from "react";
const useSearch = ({
  handleSearch = () => {},
  initialSearch,
  enableSearch = true,
}) => {
  const [searchTerm, setSearchTerm] = useState(null);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);
  const onChangeSearch = (value) => {
    setSearchTerm(value);
  };

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 450);

    return () => clearTimeout(debounceTimeout);
  }, [searchTerm]);

  useEffect(() => {
    if (debouncedSearchTerm === null || !enableSearch) return;
    handleSearch({
      searchTerm: debouncedSearchTerm,
    });
    return () => setSearchTerm(null);
  }, [debouncedSearchTerm]);

  return { onChangeSearch, searchTerm, setSearchTerm };
};

export default useSearch;
