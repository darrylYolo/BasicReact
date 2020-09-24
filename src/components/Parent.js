import React, { useState, useEffect } from "react";
import "../App.css";
// import { ITEM } from "../routes/Path";
// import PostList from "./PostList";
// import Button from "@material-ui/core/Button";
import CustomInput from "../common/CustomInput";

function Parent() {
  // const [valueFromChild, setValueFromChild] = useState(
  //   localStorage.getItem("valueFromChild")
  //     ? localStorage.getItem("valueFromChild")
  //     : ""
  // );

  const [valueFromChild, setValueFromChild] = useState("");

  useEffect(() => {
    localStorage.setItem("valueFromChild", valueFromChild);
    setValueFromChild(localStorage.getItem("valueFromChild"));
  }, [valueFromChild]);

  const handleChange = (value) => {
    setValueFromChild(value);
  };

  return (
    <React.Fragment>
      <h1>Parent page</h1>
      <div>
        <CustomInput
          id="parent-input"
          label="Parent"
          type="text"
          value={valueFromChild}
          callBack={handleChange}
        />
      </div>
      <div>{valueFromChild}</div>
    </React.Fragment>
  );
}

export default Parent;
