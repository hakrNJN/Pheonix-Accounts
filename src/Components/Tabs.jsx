import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import * as React from 'react';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ px: 2, pt:1 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

export default function FullWidthTabs(props) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ bgcolor: 'background.paper' }}>
            <AppBar position="static">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="inherit"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    {props.labels.map((label, index) => (
                        <Tab key={index} label={label} {...a11yProps(index)} />
                    ))}
                </Tabs>
            </AppBar>
            <Box sx={{ height: '100%' }}>
                {value === 0 ? (
                    <TabPanel value={value} index={0}>
                        {props.children[0]}
                    </TabPanel>
                ) : null}
                {value === 1 ? (
                    <TabPanel value={value} index={1}>
                        {props.children[1]}
                    </TabPanel>
                ) : null}
                {value === 2 ? (
                    <TabPanel value={value} index={2}>
                        {props.children[2]}
                    </TabPanel>
                ) : null}
            </Box>
        </Box>
    );
}
