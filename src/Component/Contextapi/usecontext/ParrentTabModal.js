import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BasicInformation from "./BasicInformation";
import PersonalInformation from "./PersonalInformation";
import Preview from './Preview';
import { NewContext } from '../Newcontext';
import { FormProvider, useForm } from 'react-hook-form';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      style={{ width: value === index ? '100%' : '0', overflow: 'hidden' }}
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

function  ParrentTabModal({openpParrentTabModal,setOpenParrentTabModal}) {
  const methods = useForm()
 

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  

  return (
    <>
    
      <Modal
        open={openpParrentTabModal}
        onClose={()=>setOpenParrentTabModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <FormProvider {...methods}>
        <NewContext.Provider value={{value, setValue }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ width: '100%', maxWidth: 800 }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  centered
                >
                  <Tab label="BasicInformation" {...a11yProps(0)} />
                  <Tab label="PersonalInformation" {...a11yProps(1)} />
                  <Tab label="Preview" {...a11yProps(2)} />
                </Tabs>
              </Box>
              <CustomTabPanel value={value} index={0}>
                <div className='text-center'>
                  <BasicInformation />
                </div>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <div className='text-center'>
                  <PersonalInformation />
                </div>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                <div className='text-center'> <Preview /></div>
              </CustomTabPanel>
            </Box>
          </div>
        </NewContext.Provider>
      </FormProvider>
        </Box>
      </Modal>
    </>
  );
}
export default ParrentTabModal