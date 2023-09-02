import React from "react";
import { useGlobalContext } from "../context";
import { QueryClient } from "@tanstack/react-query";

const Search = () => {
  const { url_search_parameter, setUrlSearchParameter } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) {
      return;
    }
    console.log(searchValue);
    setUrlSearchParameter(searchValue);
  };

  return (
    <div className="search-component">
      <h1>Search for high-resolution unsplash images</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="dog"
          className="search-input"
        />
        <button>search</button>
      </form>
    </div>
  );
};

export default Search;
