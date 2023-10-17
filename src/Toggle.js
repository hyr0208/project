import React, { useState } from "react";

function Toggle() {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <div>
        <button
          className="w-[100px] h-[100px] border-2 border-black "
          onClick={() => setToggle(!toggle)}
        >
          버튼
        </button>
      </div>
      <div
        className={`w-[20px] h-[20px] bg-[#000] duration-500 ${
          toggle ? "translate-y-5" : "-translate-y-50"
        }`}
      ></div>
    </div>
  );
}

export default Toggle;
