import React, { useState,useEffect } from "react";

import PropTypes from "prop-types";

import "./component2.css";
import "./component1.css";
import "./component.css";
import axiosSetup from "../../axiosSetup";
import { useNavigate } from "react-router-dom";

const AddAForm = (props) => {
  const navigate = useNavigate()
  const [addedFiles, setAddedFile] = useState([]);
  const [studentList,setStudentList] = useState();
  const [asname,setAsname] = useState();
  const [desc,setDesc] = useState();
  const [pat,setPat] = useState();
  useEffect(() => {
    getStud();
    async function getStud(){
      var result = await axiosSetup.get("/Names?type=3");
      setStudentList(result.data);
    }
  }, [])
  
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

  function handleDelete(e){
    delFile();

    async function delFile() {
      axiosSetup.delete(`/file/${e.target.value}`);
      const newArray = addedFiles.filter(element => element[1] !== e.target.value);
      setAddedFile(newArray);
      console.log(e.target.value);
    }
  }
  function handleSubmit(e){
    e.preventDefault();
    subForm();

    async function subForm() {
      const newArray = addedFiles.map(e => (e[1]));
      var body = {
        "name": asname,
        "desc": desc,
        "doc": localStorage.getItem('username'),
        "files": newArray,
        "pat": pat
      };
      var res = await axiosSetup.post("/cAssignment",body);
        console.log (res);
       if(res.data.success){
        alert("Assignment made")
        navigate("/");
       }
    }
  }
  return (
    <div className="main-container">
      <form className="component2-form" onSubmit={handleSubmit}>
        <div className="fcol">
          <div className="frow">
            <div className="frowi">
              <label className="name-label">Enter name of Assignment :</label>
              <input
                required
                type="text"
                className="name-i"
                placeholder="Enter name here"
                value={asname}
                onChange={(e)=>setAsname(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="frow">
            <div className="frowi">
              <label className="name-label">
                Enter Description of Assignment :
              </label>
              <textarea
                required
                type="text"
                className="name-i"
                placeholder="Enter Description here here"
                value={desc}
                onChange={e=>setDesc(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="frow">
            <div className="frowi">
              <label className="name-label">Select Parent</label>
              <select
              value={pat}
              onChange={e=>setPat(e.target.value)}>
                {studentList && studentList.map(e=>(
                  <option value={e.username}>{e.name}</option>
                ))}
                
              </select>
              </div>
          </div>
          <div className="frow">
            <div className="frowi">
              <label className="name-label">Add File here :</label>
              <input type="file" onChange={handleAddfile}></input>
            </div>
          </div>
          {addedFiles.length && (
            <div className="component1-container">
              <div className="component1-container1">
                {addedFiles.map((e) => (
                  <div className="component-container frowi">
                  <li className="component-li list-item">
                    <span>{e[0]}</span>
                    <button type="button" className="button" onClick={handleDelete} value={e[1]}>
                      Delete
                    </button>
                  </li>
                </div>
                ))}
              </div>
              <div className="component1-container2">
                <span className="component1-text">Added Files</span>
              </div>
            </div>
          )}
          <div className="frow">
            <div className="frowi">
                  <input value={"Submit"} type="submit" ></input>
                  <input value={"Reset"} type="reset" ></input>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

AddAForm.defaultProps = {
  textinput_placeholder: "placeholder",
  button: "Submit",
  button1: "Reset",
  textinput_placeholder1: "Enter name here",
  text: "Name of Assignment  : ",
  textarea_placeholder: "Enter Description here",
  text1: "Description of Assignment  : ",
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
