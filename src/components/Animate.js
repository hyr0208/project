import React from "react";

function Flex() {
  return (
    <div>
      <div className="bg-[#F07260] w-[100px] h-[100px] relative">
        <div className="w-[20px] h-[20px] bg-white absolute rounded-[100%] top-[30px] animate-custom-bounce  ml-[40px]"></div>
        <div
          className={`w-[20px] h-[5px] bottom-5 rounded-[100%] bg-[0,0,0,0.2] animate-custom-shadow absolute`}
          style={{
            left: `calc(50% - 10px)`,
          }}
        ></div>
      </div>
    </div>
  );
}

export default Flex;
