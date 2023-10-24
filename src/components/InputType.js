import React, { useState } from "react";

function InputType() {
  const [imageSrc, setImageSrc] = useState("");
  const [isActive, setActive] = useState(false);

  const Logo = () => (
    <svg className="w-[100px] h-[100px]" x="0px" y="0px" viewBox="0 0 24 24">
      <path fill="transparent" d="M0,0h24v24H0V0z" />
      <path
        fill="#000"
        d="M20.5,5.2l-1.4-1.7C18.9,3.2,18.5,3,18,3H6C5.5,3,5.1,3.2,4.8,3.5L3.5,5.2C3.2,5.6,3,6,3,6.5V19  c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V6.5C21,6,20.8,5.6,20.5,5.2z M12,17.5L6.5,12H10v-2h4v2h3.5L12,17.5z M5.1,5l0.8-1h12l0.9,1  H5.1z"
      />
    </svg>
  );

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  /**
   *
   * @returns
   * @description 드래그 영역에 들어갔을때 호출되는 함수
   */
  const handleDragEnter = () => {
    setActive(true);
  };

  /**
   *
   * @description 드래그 영역에서 빠져나왔을때 호출되는 함수
   */
  const handleDragLeave = () => {
    setActive(false);
  };

  const handleDrop = async (event) => {
    event.preventDefault();

    // 1. then catch
    // checkFileExtension(event)
    //   .then(() => {
    //     const file = event.dataTransfer.files[0];
    //     setActive(false);

    //     encodeFileToBase64(file);
    //   })
    //   .catch(() => {});

    // 2. try catch
    try {
      await checkFileExtension(event);
      const file = event.dataTransfer.files[0];
      setActive(false);

      encodeFileToBase64(file);
    } catch (error) {}
  };

  /**
   *
   * @returns
   */
  const checkFileExtension = (event) => {
    return new Promise((resolve, reject) => {
      const files = event.dataTransfer.files;
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const fileName = file.name;
        const acceptedExtension = ["jpg", "png", "jpeg"];

        const fileExtension = fileName.split(".").pop(); // 파일 이름에서 확장자 추출

        if (acceptedExtension.includes(fileExtension.toLowerCase())) {
          // 허용된 확장자와 일치하는지 확인
          console.log("파일 확장자가 허용되었습니다.");
          resolve();
        } else {
          console.log("허용되지 않은 파일 확장자입니다.");
          reject();
        }
      }
    });
  };

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
    <div className="relative h-screen flex items-center">
      <p className="absolute top-0">isActive : {isActive.toString()}</p>
      <label
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        htmlFor="inputFile"
        className={`w-full m-4 h-1/2 bg-white rounded-[5px] border-dashed border-[3px] flex justify-center flex-col items-center  cursor-pointer ${
          isActive && "border-[#111] bg-[#efeef3]"
        }`}
      >
        <div>
          <input
            className="hidden"
            type="file"
            accept="image/png, image/jpeg, image/jpg"
            id="inputFile"
            onChange={(e) => {
              encodeFileToBase64(e.target.files[0]);
            }}
          />
          {imageSrc ? (
            <div>
              <img src={imageSrc} alt="preview-img" />
            </div>
          ) : (
            <div className="flex justify-center flex-col items-center">
              <Logo />
              <p className="text-[18px] font-medium">
                클릭 혹은 파일을 이곳에 드롭하세요.
              </p>
              <p className="text-[14px]">파일당 최대 3MB</p>
            </div>
          )}
        </div>
      </label>
    </div>
  );
}

export default InputType;
