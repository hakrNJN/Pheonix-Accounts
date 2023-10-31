import { Box, InputAdornment, styled, TextField } from "@mui/material";
import React from "react";

const RoundedTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderRadius: "15px"
    }
  },
  
});

const TextInput = ({
  variant,
  type,
  onBlur,
  onChange,
  value,
  name,
  error,
  helperText,
  multiline,
  endAdornment,
  startAdornmentIcon
}) => {
  return (
    <Box sx={{padding:'8px'}}>
    <RoundedTextField
      fullWidth
      color="secondary"
      id={`${variant}-input-${name}`}
      size="small"
      multiline={multiline}
      variant={variant !== undefined ? variant : "outlined"}
      type={type}
      label={name}
      onBlur={onBlur}
      onChange={onChange}
      value={value}
      name={name}
      error={error}
      helperText={helperText}
      InputProps={{
        endAdornment,
        startAdornment: (
          <InputAdornment position="start">
            <Box mr={1}>
            {startAdornmentIcon}
            </Box>
          </InputAdornment>
        ),
      }}
      sx={{ gridColumn: "span 4" }}
    />
    </Box>
  );
};

export default TextInput;