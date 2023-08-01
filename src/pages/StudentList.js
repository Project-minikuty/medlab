import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BrandNav from "../components/BrandNav";
import Bg from "../components/PageBg";
import ListView from "../components/StudentListView";
import Heading from "../components/PageHeading";
import axiosSetup from "../axiosSetup";
import './studentList.css';



function StudentList() {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    axiosSetup.get("/Names?type=3") 
      .then((result) => {
        setUsers(result.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);




  return (
    <>
      <BrandNav logout="true" showBackButton={true}/>
      <Bg type={7} />

      <div className="parentcontainer">
        <div className="flex-section">
          <Heading view="desktop" type={7} />
          <div className="List">
            <div className="list">
              <ListView List={users} type={3}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentList;
