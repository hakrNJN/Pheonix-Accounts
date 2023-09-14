import * as React from 'react';
import {
  Unstable_NumberInput as NumInput,
} from '@mui/base/Unstable_NumberInput';
import { StyledInputElement,StyledInputRoot,StyledButton } from './Global/Styles/InputStyle';

const NumberInput = React.forwardRef(function CustomNumberInput(props, ref) {
  return (
    <NumInput
      slots={{
        root: StyledInputRoot,
        input: StyledInputElement,
        incrementButton: StyledButton,
        decrementButton: StyledButton,
      }}
      slotProps={{
        incrementButton: {
          children: <span className="arrow">▴</span>,
        },
        decrementButton: {
          children: <span className="arrow">▾</span>,
        },
      }}
      {...props}
      ref={ref}
    />
  );
});

export default NumberInput;
