import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import BrandNav from "../components/BrandNav";
import Bg from "../components/PageBg";
import Heading from "../components/PageHeading";
import ButtonGrid from "../components/Options";
import BackButton from "../components/BackButton";

function SubmitAssignment() {
  const [selectedFile, setSelectedFile] = useState(null);

  const buttons = [
    {
      img: require("../images/parentOptions/option2.png"),
      alt: "option2",
      text: "Submit Media File",
      handleClick: () => handleFileSubmit("media"),
    },
  ];

  const isHighlighted = window.innerWidth > 768;

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileSubmit = (fileType) => {
    if (!selectedFile) {
      console.log("No file selected!");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("type", fileType);

    axios
      .post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("File uploaded successfully!");
        // Do something with the response if needed
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
      });
  };

  return (
    <>
      <BrandNav logout="true" />
      <Heading view="desktop" type={3} />
      <Bg type={3} />
      <div className="parentcontainer">
        <div className="flex-section selectionSpace">
          <ButtonGrid buttons={buttons} isHighlighted={isHighlighted} />
          <div>
            <label htmlFor="fileInput" className="btn btn-primary">
              Submit Text File
            </label>
            <input
              id="fileInput"
              type="file"
              accept=".txt"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SubmitAssignment;
