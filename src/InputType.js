import React, { useState } from "react";

function InputType() {
  const [imageSrc, setImageSrc] = useState("");

  const encodeFileToBase64 = (fileBlob) => {
    //FileReader = fileBlob객체를 사용해 자바스크립트에서 파일에 접근할 수 있도록 도와주는 도구
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        // FileReader가 성공적으로 파일을 읽어들였을때 트리거 되는 이벤트 핸들러
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  return (
    <div>
      <input
        type="file"
        onChange={(e) => {
          encodeFileToBase64(e.target.files[0]);
        }}
      />
      <div>
        {imageSrc && (
          <img
            src={imageSrc}
            alt="preview-img"
            className="w-[100px] h-[100px]"
          />
        )}
      </div>
    </div>
  );
}

export default InputType;
