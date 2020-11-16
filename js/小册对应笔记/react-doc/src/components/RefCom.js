import React, { useState } from "react";
export default function RefCom(props) {
  const [count, setCount] = useState(0);
  const [dict, setDict] = useState({ a: 1, b: 2 });
  return (
    <div>
      <div className="count">{count}</div>
      <button
        onClick={() => {
          setCount(count + 1);
          setDict({ b: count + 1 });
          console.log(dict);
        }}
      >
        click me
      </button>
    </div>
  );
}
