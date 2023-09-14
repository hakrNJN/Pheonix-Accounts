import * as React from "react";
import { Input } from "@mui/base/Input";
import Styles from "./Global/Styles/InputStyle";

export default function NumberInput({label = '', width = '200px', fullWidth = false}) {
  return (
    <React.Fragment>
      <Input
        slotProps={{ input: { className: `CustomInput ${fullWidth ? 'FullWidth' : ''}`, style: { width: width } } }}
        aria-label="Demo input"
        placeholder={label}
      />
      <Styles />
    </React.Fragment>
  );
}
