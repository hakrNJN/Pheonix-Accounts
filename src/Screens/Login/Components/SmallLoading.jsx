import { Box, useTheme } from '@mui/material'
import React from 'react'
import { css } from '@emotion/react';
import { PulseLoader } from 'react-spinners';
import { tokens } from '../../../theme';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  zIndex: 3;
`;


const SmallLoading = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="10vh">
            <div className="sweet-loading">
                <PulseLoader color={'#fff'} loading={true} css={override} size={10} />
            </div>
        </Box>
    )
}

export default SmallLoading
