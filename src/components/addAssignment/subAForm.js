import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axiosSetup from "../../axiosSetup";
import { useNavigate } from "react-router-dom";
import "./AddAForm.css";

const SubAForm = (props) => {
  
  const navigate = useNavigate();
  const [addedFiles, setAddedFile] = useState([]);
  const [studentList, setStudentList] = useState();
  const [asname, setAsname] = useState();
  const [desc, setDesc] = useState();
  const [pat, setPat] = useState();
  const [asData,setAsdata] = useState(props.data);
  useEffect(() => {
    getStud();
    async function getStud() {
      var result = await axiosSetup.get("/Names?type=3");
      setStudentList(result.data);
    }
  }, []);


  const handleFileDownload = async (e) => {
    try {
      var value=e.target.value.split(",")
      console.log(value[1])
      const response = await axiosSetup.get(`/file/${value[1]}`, {
        responseType: "blob",
      });
  
      if (response.status === 200) {
        // Extract the filename from the Content-Disposition header
        const contentDisposition = response.headers["content-disposition"];
        const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
        const matches = filenameRegex.exec(contentDisposition);
        // const filename = matches && matches[1] ? decodeURIComponent(matches[1].replace(/['"]/g, "")) : "file";
        const filename = value[0]
        console.log(filename)
        // Create a download link
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", filename);
  
        // Simulate a click to trigger the download
        document.body.appendChild(link);
        link.click();
  
        // Clean up the URL object after the download
        window.URL.revokeObjectURL(url);
      } else {
        alert.error("Failed to download file.");
      }
    } catch (error) {
      console.error("Error downloading file:", error);
      alert.error("Failed to download file. Please try again.");
    }
  };
  

  function handleAddfile(e) {
    addFile(e);
  }

  async function addFile(e) {
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    const response = await axiosSetup.post("/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    setAddedFile((ei) => [...ei, [e.target.files[0].name, response.data.file_id]]);
    console.log(addedFiles);
  }

  function handleDelete(e) {
    delFile();

    async function delFile() {
      axiosSetup.delete(`/file/${e.target.value}`);
      const newArray = addedFiles.filter((element) => element[1] !== e.target.value);
      setAddedFile(newArray);
      console.log(e.target.value);
    }
  }
  
  function handleReset(e){
    setAsname("");
    setDesc("");
    setPat("");
  }
  function handleSubmit(e) {
    e.preventDefault();
    subForm();

    async function subForm() {
      // const newArray = addedFiles.map((e) => e[1]);
      var body = {
        name: asname,
        desc: desc,
        doc: localStorage.getItem("username"),
        files: addedFiles,
        pat: pat,
      };
      var res = await axiosSetup.post("/cAssignment", body);
      console.log(res);
      if (res.data.success) {
        alert("Assignment made");
        navigate("/");
      }
    }
  }

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <form className="component2-form" onSubmit={handleSubmit} onReset={handleReset}>
            <div className="row">
              <div className="col">
                <div className="form-group mb-3">
                  <label className="name-label">Name of Assignment</label>
                  <input
                    contentEditable={false}
      
                    type="text"
                    className="form-control"
                    placeholder="Enter Name Here"
                    value={asData.name}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="form-group mb-3">
                  <label className="name-label">Description of Assignment</label>
                  <textarea
                    contentEditable={false}
                    type="text"
                    className="form-control"
                    placeholder="Enter Description Here"
                    value={asData.description}
                  />
                </div>
              </div>
            </div>
            
            <div className="row">
              <div className="col">
                <div className="form-group">
                  <label className="name-label">Add File here:</label>
                  <input type="file" className="form-control-file btn" onChange={handleAddfile} />
                </div>
              </div>
            </div>
            {asData.files.length && (
              <div className="container">
                <div className="row">
                  <div className="col">
                    <ul className="list-group">
                      {asData.files.map((e) => (
                        <li className="list-group-item" key={e[1]}>
                          <span>{e[0]}</span>
                          <button
                            type="button"
                            className="btn btn-outline-success ms-5"
                            onClick={handleFileDownload}
                            value={e}
                          >
                            Download
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <span className="text">materials</span>
                  </div>
                </div>
              </div>
            )}
            <div className="row">
              <div className="col">
                <div className="form-group bt">
                  <input value={"Submit"} type="submit" className="btn btn-outline-success mt-3" />
                  <input value={"Reset"} type="reset" className="btn btn-outline-danger ms-3 mt-3" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

SubAForm.defaultProps = {
  textinput_placeholder: "placeholder",
  button: "Submit",
  button1: "Reset",
  textinput_placeholder1: "Enter name here",
  text: "Name of Assignment  : ",
  textarea_placeholder: "Enter Description here",
  text1: "Description of Assignment  : ",
};

SubAForm.propTypes = {
  textinput_placeholder: PropTypes.string,
  button: PropTypes.string,
  button1: PropTypes.string,
  textinput_placeholder1: PropTypes.string,
  text: PropTypes.string,
  textarea_placeholder: PropTypes.string,
  text1: PropTypes.string,
};

export default SubAForm;
