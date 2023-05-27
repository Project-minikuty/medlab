import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BrandNav from "../components/BrandNav";
import Bg from "../components/Bg";
import "./dashboard.css";
import Options from "../components/parent-dashboard/Options";

function Parent() {
  return (
    <>
      <BrandNav logout="true" />
      <div className="parentcontainer" style={{ overflowX: "hidden" }}>
        <Options />
        <Bg bgText="Welcome Parent" bgSubText="Manage your ward's data here" />
      </div>
    </>
  );
}

export default Parent;
