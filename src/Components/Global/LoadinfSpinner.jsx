import { Box } from '@mui/material'
import React from 'react'
import { css } from '@emotion/react';
import { PulseLoader } from 'react-spinners';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;


const LoadingSpinner = () => {
    return (
        <Box display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh">
            <div className="sweet-loading">
                <PulseLoader color="#123abc" loading={true} css={override} size={50} />
            </div>
        </Box>
    )
}

export default LoadingSpinner
