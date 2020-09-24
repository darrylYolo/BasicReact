import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
import TextField from "@material-ui/core/TextField";

import "../App.css";

const CustomInput = ({ value, id, label, type, callBack }) => {
  const [textValue, setTextValue] = useState(value ? value : "");
  useEffect(() => {
    callBack(textValue);
  }, [textValue]);

  // const handleOnBlur = () => {
  //   callBack(textValue);
  // };

  // const handleOnChange = ({ target: { value } }) => {
  //   // setTextValue();
  //   console.log(value);
  //   props.callBack(value);
  // };

  return (
    <div id={id}>
      <TextField
        id={id}
        label={label}
        type={type}
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
        // onChange={handleOnChange}
        // onBlur={handleOnBlur}
      />
    </div>
  );
};

export default CustomInput;
