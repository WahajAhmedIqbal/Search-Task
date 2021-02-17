import React, { useEffect, useState } from "react";

const Search = () => {
  const [inputSearch, setInputSearch] = useState("");
  const [itemsList, setItemList] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${inputSearch}`)
      .then((response) => response.json())
      .then((json) => setItemList(json));
  }, [inputSearch]);

  return (
    <div>
      <h1>Search </h1>
      <button onClick={() => setInputSearch("posts")}>Posts</button>
      <button onClick={() => setInputSearch("users")}>Users</button>
      <button onClick={() => setInputSearch("comments")}>Comments</button>
      <p>
        <h1>{inputSearch}</h1>
        {itemsList.map((item) => (
          <p>{JSON.stringify(item)}</p>
        ))}
      </p>
    </div>
  );
};

export default Search;
