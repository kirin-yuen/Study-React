import React, { useState } from "react";
import useData from "../hooks/useData";

export default function ListData() {
  const [url, setUrl] = useState("");

  const { data, isLoading, error } = useData(url);

  const changeHandler = ({ target: { value } }) => setUrl(value);

  return (
    <div>
      <input type="text" onChange={changeHandler} />
      {isLoading && <h6 style={{ color: "purple " }}>Loading...</h6>}
      {error && <h6 style={{ color: "red " }}>{error}</h6>}
      {data && <h3>{JSON.stringify(data)}</h3>}
    </div>
  );
}
