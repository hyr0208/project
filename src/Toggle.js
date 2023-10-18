import React, { useState } from "react";

function Toggle() {
  const [toggle, setToggle] = useState(false);
  const [scale, setScale] = useState(false);
  const [rotate, setRotate] = useState(false);
  const [translateX, setTranslateX] = useState(100);

  return (
    <div className="h-screen">
      <div>
        <button
          className="w-[50px] h-[50px] border-2 border-black "
          onClick={() => setToggle(!toggle)}
        >
          버튼
        </button>
        <button
          className="w-[50px] h-[50px] border-2 border-black "
          onClick={() => setScale(!scale)}
        >
          Scale
        </button>
        <button
          className="w-[50px] h-[50px] border-2 border-black"
          onClick={() => setRotate(!rotate)}
        >
          Rotate
        </button>
      </div>
      <div>
        <input
          type="number"
          className="px-4 py-2 border rounded"
          value={translateX}
          onChange={(event) => {
            setTranslateX(event.target.value);
          }}
        />
      </div>
      <div className="w-full h-full flex items-center justify-center">
        <div
          className={`w-[50px] h-[50px] bg-[#000] duration-500`}
          style={{
            transform: `translateX(${
              toggle ? `${translateX}px` : "0px"
            }) scale(${scale ? 2 : 1}) rotate(${rotate ? 720 : 0}deg)`,
          }}
        ></div>
      </div>
    </div>
  );
}

export default Toggle;
