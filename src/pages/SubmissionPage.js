import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Upload, Button, message } from "antd";
import { InboxOutlined, FileOutlined } from "@ant-design/icons";
import BrandNav from "../components/BrandNav";
import styles from "./submitAssignment.module.css";
import Bg from "../components/PageBg";
import axios from "axios";

const { Dragger } = Upload;

function Submission() {
  const [fileList, setFileList] = useState([]);

  const handleFileRemove = (file) => {
    setFileList((prevList) => prevList.filter((f) => f.uid !== file.uid));
  };

  const handleFileUpload = async () => {
    if (fileList.length === 0) {
      message.error("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", fileList[0]);

    try {
      const response = await axios.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        message.success("File uploaded successfully.");
        setFileList([]);
      } else {
        message.error("Failed to upload file.");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      message.error("Failed to upload file. Please try again.");
    }
  };

  return (
    <>
      <BrandNav logout="true" />
      <Bg type={3} />
      <div className="parentcontainer">
        <div className="flex-section">
          <h2 className={styles.heading}>Submit Your Assignment</h2>
          <div className={`${styles.rectangleBox} ${styles.desktopSize}`}>
            <label htmlFor="submissionStatus">Submission Status (DD/MM/YYYY):</label>

            <br />
            <label htmlFor="fileUpload">Upload Files:</label>
            <Dragger
              className={`${styles.dragArea} drag-area`}
              fileList={fileList}
              beforeUpload={(file) => {
                setFileList([file]);
                return false; // Prevent file upload
              }}
              onRemove={handleFileRemove}
              showUploadList={{
                showPreviewIcon: true,
                showRemoveIcon: true,
                showDownloadIcon: false,
              }}
            >
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">Click or drag files to this area to upload</p>
              <p className="ant-upload-hint">Supports file types: PDF, DOC, DOCX</p>
            </Dragger>
            <Button
              className={`${styles.submitButton} submit-button`}
              type="primary"
              icon={<FileOutlined />}
              onClick={handleFileUpload}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Submission;
