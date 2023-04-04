// npm test async
import React, { useState } from "react";
import Children from "./Children";

export default function Async() {
  const [username, setUsername] = useState("");
  const [food, setFood] = useState("");
  const [childFood, setChildFood] = useState("");

  const changeUsernameHandler = (e) => setUsername(e.target.value);

  const changeFoodHandler = async (e) => {
    const { value } = e.target;
    // 1 Promise 延迟更新
    // await new Promise((r) => setTimeout(r, 500));
    // setFood(value);

    // 2 setTimeout 延迟更新
    setTimeout(() => {
      setFood(value);
    }, 500);
  };

  return (
    <div>
      <label>
        Username
        <input value={username} type="text" onChange={changeUsernameHandler} />
      </label>

      <p>{childFood}</p>
      <Children setChildFood={setChildFood} />

      <input
        type="text"
        value={food}
        placeholder="food"
        onChange={changeFoodHandler}
      />
    </div>
  );
}
