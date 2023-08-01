import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Upload, Button, message } from "antd";
import { InboxOutlined, FileOutlined } from "@ant-design/icons";
import emailjs from "emailjs-com"; // Import emailjs-com

import BrandNav from "../components/BrandNav";
import styles from "./submitAssignment.module.css";
import Bg from "../components/PageBg";
import axios from "axios";
import axiosSetup from "../axiosSetup";
import SubVForm from "../components/addAssignment/subVForm";
import Heading from "../components/PageHeading";

const { Dragger } = Upload;

function Submission1() {
  const [fileList, setFileList] = useState([]);
  const [asData, setAsdata] = useState();

  useEffect(() => {
    getAssD();
    async function getAssD() {
      const assQ = localStorage.getItem("assID");
      var details = await axiosSetup.get(`/sassData/${assQ}`);
      console.log(details.data);
      setAsdata(details.data);
      
    }
  }, []);

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

   
        try {

          const serviceId = "service_16f1chs";
          const templateId = "template_81xpn8e";
          const fromEmail = localStorage.getItem("email")
          const emailJsKey = process.env.REACT_APP_EMAILJS_KEY;

          const emailParams = {
            userEmail: fromEmail, 
            subject: "",
            body: "Your file has been successfully uploaded",
          };

        
          await emailjs.send(serviceId, templateId, emailParams, emailJsKey);

          console.log("Email sent successfully.");
        } catch (error) {
          console.error("Error sending email:", error);
        }
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
      <Heading type={12} view={"desktop"}/>
      <Bg type={3} />
      <div className="parentcontainer">
        <div className="flex-section">
          
          {/* <div className={`${styles.rectangleBox} ${styles.desktopSize}`}>
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
          </div>*/}
          {asData && <SubVForm data={asData} />}
        </div>
      </div>
    </>)
}

export default Submission1;
