import React from "react";

export default function RoleLabel() {
  return (
    <div>
      {/* htmlFor 与 id 关联上 */}
      <label htmlFor="htmlFor">Username</label>
      <input id="htmlFor" />

      {/* 保裹在 label 里 */}
      <label>
        Password <input />
      </label>
      <label>
        <span>Sex</span>
        <input />
      </label>

      {/* 通过 aria-labelledby 关联 */}
      <label id="fav">Fav</label>
      <input aria-labelledby="fav" />

      {/* 通过 aria-label 关联 */}
      <input aria-label="food" />

      {/* { selector: "textarea" } */}
      <label>
        Address
        <input />
      </label>
      <label>
        Address
        <textarea></textarea>
      </label>
    </div>
  );
}
