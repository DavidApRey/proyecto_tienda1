'use client';

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react';
import AlmaCRUD from './almaCRUD/almaCRUD';
import MarcaCRUD from './marcaCRUD';
import MemramCRUD from './memramCRUD';
import ProceCRUD from './proceCRUD';
import SoCRUD from './soCRUD';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function GeneralTab({ data_alma, data_procesa, data_mem_ram, data_so, data_marca }) {

    // console.log(data_alma)

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Almacenamiento" {...a11yProps(0)} />
                        <Tab label="Marca" {...a11yProps(1)} />
                        <Tab label="Memoria Ram" {...a11yProps(2)} />
                        <Tab label="Procesador" {...a11yProps(3)} />
                        <Tab label="Sistema Operativo" {...a11yProps(4)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <AlmaCRUD data={data_alma} />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    {/* <MarcaCRUD data={data_marca}/> */}
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    {/* <MemramCRUD data={data_mem_ram}/> */}
                </CustomTabPanel>
                <CustomTabPanel value={value} index={3}>
                    {/* <ProceCRUD data={data_procesa}/> */}
                </CustomTabPanel>
                <CustomTabPanel value={value} index={4}>
                    {/* <SoCRUD data={data_so}/> */}
                </CustomTabPanel>
            </Box>
        </div>
    );
}

export default GeneralTab;
