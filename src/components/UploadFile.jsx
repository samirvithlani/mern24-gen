import axios from "axios";
import React, { useState } from "react";

export const UploadFile = () => {
  const [filePath, setfilePath] = useState();
  const fileUploadHandler = async (event) => {
    //event.target.value..
    //console.log("fileUploadHandler",event.target.files[0])
    const formData = new FormData();
    formData.append("myImage", event.target.files[0]);
    const res = await axios.post(
      "http://localhost:3001/upload/upload",
      formData
    );
    console.log("res", res);
    setfilePath(res.data.secure_url);
  };

  return (
    <div>
      <h1>UPLOAD FILE</h1>
      <input
        type="file"
        name="file"
        id="file"
        onChange={(event) => {
          fileUploadHandler(event);
        }}
      ></input>
      {filePath && (
        <img
          src={filePath}
          alt="file"
          style={{ width: "200px", height: "200px" }}
        ></img>
      )}
    </div>
  );
};
