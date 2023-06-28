import React, { useState } from "react";
import "./newUserForm.css";
import Navbar from "./BrandNav";
import Heading from "./PageHeading";
import NewuserForm from "./newUserForm";
import FormSuccess from "./formSuccess";
import BackButton from "./BackButton";


const NewUserFormBody = (props) => {
  const [formState, setFormState] = useState(() => {
    return {
      success: false,
    };
  });

  return (
    <>
      <Navbar logout="true"/>
      <div className="body1">
      
        <Heading view="desktop" type={6} />
        {formState.success ? (
          <FormSuccess text="New user created succesfully" />
        ) : (
          <NewuserForm setFormState={setFormState} />
        )}
      </div>
    </>
  );
};

export default NewUserFormBody;
