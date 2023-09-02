import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useGlobalContext } from "../context";
const url = `https://api.unsplash.com/search/photos/?client_id=${
  import.meta.env.VITE_API_KEY
}`;

const Gallary = () => {
  const { url_search_parameter, setUrlSearchParameter } = useGlobalContext();
  console.log(url_search_parameter);
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["search-photo", url_search_parameter],
    queryFn: async () => {
      const response = await axios.get(`${url}&query=${url_search_parameter}`);
      return response.data;
    },
  });
  if (isLoading) {
    return <h1>Loading ...</h1>;
  }
  if (isError) {
    return <h1>There was an error{error.message}</h1>;
  }
  if (data.results < 1) {
    return <h1>No results found!!</h1>;
  }
  return (
    <div className="images-container">
      {data.results.map((item) => {
        return (
          <div className="image" key={item.id}>
            <img src={item.urls.regular} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Gallary;
