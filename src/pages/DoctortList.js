import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BrandNav from "../components/BrandNav";
import Bg from "../components/PageBg";
import ListView from "../components/StudentListView";
import Heading from "../components/PageHeading";
import axiosSetup from "../axiosSetup";
import BackButton from "../components/BackButton";

function DoctorList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axiosSetup.get("/Names?type=2") // Change the URL to the appropriate endpoint on your server
      
      .then((result) => {
        setUsers(result.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  return (
    <>
      <BrandNav logout="true" />
      <Bg type={8} />
      <BackButton />
      <div className="parentcontainer">
        <div className="flex-section">
        <Heading view="desktop" type={8} />

          <div className="List">
          <div className="list">
            <ListView List={users} type={2}/>
            </div>
          </div>
          </div>
        </div>
  
    </>
  );
}

export default DoctorList;
