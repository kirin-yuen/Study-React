import React from "react";

export default function RoleOption() {
  return (
    <div>
      {/* { hidden: true } 在可访问树里排除 */}
      <div aria-hidden="true">
        <h6>1-hidden</h6>
      </div>
      {/* dom 存在该元素，但无法看见元素 */}
      <div style={{ visibility: "hidden" }}>
        <h6>2-visibility:hidden</h6>
      </div>
      {/* style display : none */}
      <div style={{ display: "none" }}>
        <h6>3-display:none</h6>
      </div>
      {/* style opacity : 0 */}
      <div style={{ opacity: 0 }}>
        <h6>4-opacity:0</h6>
      </div>
      {/* class : hidden */}
      <div className="hidden">
        <h6>5-class:hidden</h6>
      </div>
      <div>
        <h6>6-other</h6>
      </div>

      {/* { name: "option name" } */}
      <button>option name</button>

      {/* { description: /NO/i } */}
      <button aria-describedby="button-2">
        <span id="button-1">yes</span>
        <span id="button-2">no</span>
      </button>

      {/* { selected: true }  */}
      <button role="tab" aria-selected="true">
        selected
      </button>

      {/* { checked: true } */}
      <button role="checkbox" aria-checked="true">
        checked
      </button>

      {/* { current: true } */}
      <button aria-current="true">current</button>

      {/* { expanded: true } */}
      <button aria-expanded="true">expanded</button>

      {/* { pressed: true } */}
      <button aria-pressed="true">pressed</button>

      {/* { queryFallbacks: true } 原则上不应该有两个 role */}
      <div role="switch dialog" />

      {/* { level: 2 }  */}
      <h2>heading 2</h2>
      <div role="heading" aria-level="2">
        heading 2
      </div>
    </div>
  );
}
