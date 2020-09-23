import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
import TextField from "@material-ui/core/TextField";

import "../App.css";

const CustomInput = (props) => {
  const [textValue, setTextValue] = useState("");
  const [somethingHere, setSomethingHere] = useState("");
  useEffect(() => {
    console.log("useEffect!");
    props.callBack(textValue);
  }, [textValue, somethingHere]);

  const handleOnBlur = () => {
    setSomethingHere('hey')
  };

  // const handleOnChange = ({ target: { value } }) => {
  //   // setTextValue();
  //   console.log(value);
  //   props.callBack(value);
  // };

  return (
    <div id={props.id}>
      <TextField
        id={props.id}
        label={props.label}
        type={props.type}
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
        // onChange={handleOnChange}
        onBlur={handleOnBlur}
      />
    </div>
  );
};

export default CustomInput;
