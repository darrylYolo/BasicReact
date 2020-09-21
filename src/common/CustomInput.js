import React, { useCallback, useState } from "react";
// import { useLocation } from "react-router-dom";
import TextField from "@material-ui/core/TextField";

import "../App.css";

const CustomInput = (props) => {
  const [textValue, setTextValue] = useState("");

  const handleOnChange = () => {
    setTextValue();
    props.callback(textValue);
  };

  return (
    <div id={props.id}>
      <TextField
        id={props.id}
        label={props.label}
        type={props.type}
        value={textValue}
        onChange={(e) => handleOnChange(e.target.value)}
      />
    </div>
  );
};

export default CustomInput;
