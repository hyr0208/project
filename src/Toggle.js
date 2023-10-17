import React, { useState } from "react";

function Toggle() {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <div>
        <button
          className="w-[50px] h-[50px] border-2 border-black "
          onClick={() => setToggle(!toggle)}
        >
          버튼
        </button>
      </div>
      <div
        className={`w-[50px] h-[50px] bg-[#000] duration-500 ${
          toggle ? "translate-x-10" : "-translate-x-50"
        }`}
      ></div>
    </div>
  );
}

export default Toggle;
