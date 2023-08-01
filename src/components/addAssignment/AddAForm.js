import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import PropTypes from "prop-types";
import axiosSetup from "../../axiosSetup";
import { useNavigate } from "react-router-dom";
import "./AddAForm.css";
import emailjs from "emailjs-com";

const AddAForm = (props) => {
  const navigate = useNavigate();
  const [fileType, setFileType] = useState(0);
  const [addedFiles, setAddedFile] = useState([]);
  const [studentList, setStudentList] = useState();
  const [asname, setAsname] = useState();
  const [desc, setDesc] = useState();
  const [pat, setPat] = useState();
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [patEmail, setPatEmail] = useState("");


  useEffect(() => {
    getStud();
    async function getStud() {
      var result = await axiosSetup.get(`/patients?username=${localStorage.getItem("username")}`);
      setStudentList(result.data);
      setUsers(result.data);
    }
  }, []);

  const getUserIdByUsername = (username) => {
    const user = users.find((user) => user.username === username);
    if (user) {
      setSelectedUserId(user._id);
      // Make a second API request to get user details using the obtained user ID
      axiosSetup.get(`/sDetails?id=${user._id}`)
        .then((result) => {
          const email = result.data.email; // Assuming the API response contains the email field
          setPatEmail(email); // Set the obtained email in the state
        })
        .catch((error) => {
          console.error("Error fetching user details:", error);
        });
    } else {
      setSelectedUserId(null);
      setPatEmail(""); // Set the email to empty if the user is not found
    }
  };

  useEffect(() => {
    getUserIdByUsername(pat)
  
    
  }, [pat])
  
  

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

    setAddedFile((ei) => [
      ...ei,
      [e.target.files[0].name, response.data.file_id, fileType],
    ]);
    console.log(addedFiles);
  }

  function handleDelete(e) {
    delFile();

    async function delFile() {
      axiosSetup.delete(`/file/${e.target.value}`);
      const newArray = addedFiles.filter(
        (element) => element[1] !== e.target.value
      );
      setAddedFile(newArray);
      console.log(e.target.value);
    }
  }
  function handleReset(e) {
    setAsname("");
    setDesc("");
    setPat("");
  }
  const handleFileChange = (e) => {
    setFileType(Number(e.target.value));
  };
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
        docE: localStorage.getItem("email"),
        patE: patEmail,
      };
      var res = await axiosSetup.post("/cAssignment", body);
      console.log(res);
      if (res.data.success) {
        
        console.log(body.patE);
        alert("Assignment made");
        navigate("/");

        try {

            
        
          const templateId = "template_wuw1kki";
  
          const emailParams = {
            patE: patEmail,
            docE: localStorage.getItem("email"),
          };

          console.log(emailParams.patE);
          console.log(emailParams.docE);
        
          await emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE_ID, templateId, emailParams, process.env.REACT_APP_EMAILJS_USER_ID);

          console.log("Email sent successfully.");
        } catch (error) {
          console.error("Error sending email:", error);
          
        }

      }
    }
  }

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <form
            className="component2-form"
            onSubmit={handleSubmit}
            onReset={handleReset}
          >
            <div className="row">
              <div className="col">
                <div className="form-group mb-3">
                  <label className="name-label">
                    Enter Name of Assignment:
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    placeholder="Enter Name Here"
                    value={asname}
                    onChange={(e) => setAsname(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="form-group mb-3">
                  <label className="name-label">
                    Enter Description of Assignment:
                  </label>
                  <textarea
                    required
                    type="text"
                    className="form-control"
                    placeholder="Enter Description Here"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="form-group mb-4">
                  <label className="name-label">Select Parent</label>
                  <select
                    className="form-control"
                    value={pat}
                    onChange={(e) => setPat(e.target.value)}
                  >
                    <option>Select a student</option>
                    {studentList &&
                      studentList.map((e) => (
                        <option key={e.username} value={e.username}>
                          {e.name}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="form-group">
                  <div>
                    <label className="name-label">Add File here:</label>
                    <select
                      value={fileType}
                      onChange={handleFileChange}
                      name="userRole"
                      className="customDropdown"
                    >
                      <option value={0}>choose file type</option>
                      <option value={1}>video</option>
                      <option value={2}>image</option>
                      <option value={3}>document</option>
                    </select>
                    {fileType && (
                      <input
                        type="file"
                        className="form-control-file btn"
                        onChange={handleAddfile}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
            {addedFiles.length && (
              <div className="container">
                <div className="row">
                  <div className="col">
                    <ul className="list-group">
                      {addedFiles.map((e) => (
                        <li className="list-group-item" key={e[1]}>
                          {(e[2] == 0 || e[2] == 3) && <span>{e[0]}</span>}
                          {e[2] == 1 && (
                            <ReactPlayer
                              url={`https://medback.up.railway.app/video/${e[1]}`}
                              controls // Display video controls
                              width="50%"
                              height="auto"
                            />
                          )}
                          {
                            e[2]==2 &&(
                              <img src={`https://medback.up.railway.app/image/${e[1]}`} alt="Image"
                              width="50%"
                              height="auto" />
                            )
                          }
                          <button
                            type="button"
                            className="btn btn-outline-danger ms-5"
                            onClick={handleDelete}
                            value={e[1]}
                          >
                            Delete
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <span className="text">Added Files</span>
                  </div>
                </div>
              </div>
            )}
            <div className="row">
              <div className="col">
                <div className="form-group bt">
                  <input
                    value={"Submit"}
                    type="submit"
                    className="btn btn-outline-success mt-3"
                  />
                  <input
                    value={"Reset"}
                    type="reset"
                    className="btn btn-outline-danger ms-3 mt-3"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

AddAForm.defaultProps = {
  textinput_placeholder: "placeholder",
  button: "Submit",
  button1: "Reset",
  textinput_placeholder1: "Enter name here",
  text: "Name of Assignment  : ",
  textarea_placeholder: "Enter Description here",
  text1: "Description of Assignment  : ",
};

AddAForm.propTypes = {
  textinput_placeholder: PropTypes.string,
  button: PropTypes.string,
  button1: PropTypes.string,
  textinput_placeholder1: PropTypes.string,
  text: PropTypes.string,
  textarea_placeholder: PropTypes.string,
  text1: PropTypes.string,
};

export default AddAForm;
