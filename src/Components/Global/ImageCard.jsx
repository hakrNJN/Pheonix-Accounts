import { Card, CardMedia } from '@mui/material';
import * as React from 'react';

// Define a custom component that takes image and alt as props
const ImageBox = ({ image, alt, width, height }) => {
    return (
        <Card
            sx={{
                maxWidth: width ? width : 300, // Use the width prop if defined, otherwise use 300px
                height: height ? height : 350, // Use the height prop if defined, otherwise use 350px
            }}
        >
            <CardMedia
                component="img"
                sx={{
                    objectFit: 'contain', // Use object-fit to scale the image to fit the box
                    margin: 'auto', // Use margin to center the image
                }}
                image={image} // Use the image prop as the source
                alt={alt} // Use the alt prop as the alternative text
            />
        </Card>
    )
}

export default ImageBox