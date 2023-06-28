import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Upload, Button} from "antd";
import { InboxOutlined, FileOutlined } from "@ant-design/icons";
import BrandNav from "../components/BrandNav";
import styles from "./submitAssignment.module.css";
import Bg from "../components/PageBg";

const { Dragger } = Upload;

function Submission() {
  const [fileList, setFileList] = useState([]);

  // const handleFileUpload = (file) => {
  //   // Perform file upload logic here
  //   console.log("File uploaded:", file);
  //   message.success(`${file.name} uploaded successfully.`);
  // };

  const handleFileRemove = (file) => {
    // Perform file removal logic here
    console.log("File removed:", file);
    setFileList((prevList) => prevList.filter((f) => f.uid !== file.uid));
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
                setFileList((prevList) => [...prevList, file]);
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
              className={`${styles.submitButton} submit-button`} // Apply custom CSS classes to the submit button
              type="primary"
              icon={<FileOutlined />}
              onClick={() => {
                console.log("Files submitted:", fileList);
                setFileList([]);
              }}
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
