import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import FormComponent from "./DocumentUpload";
import { Typography } from "@mui/material";
import RestoreIcon from '@mui/icons-material/Restore';

import UploadDocxFile from "./UploadDocxFile";
import ResponseData from "./ResponseData";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      style={{ background: value ? "#00579B" : "white", color: value ? "white" : "black", height: "78vh", borderRadius: "0 0 8px 8px" }}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function NewCustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      style={{ background: "#F6F6F6", color: "#00579B", height: "65vh", borderRadius: "0 0 8px 8px" }}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

NewCustomTabPanel.propTypes = {
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

export default function Dashboard1() {
  const [value, setValue] = React.useState(0);
  const [newvalue, newSetValue] = React.useState(0);
  const [isUpload, setIsUpload] = React.useState(false);
  const [uploadFile, setuploadFile] = React.useState(null);
  const [isAuditCompleted, setIsAuditCompleted] = React.useState(false);

  const handleChange = (event, nValue) => {
    setValue(nValue);
  };
  const NewhandleChange = (event, newvalue) => {
    newSetValue(newvalue);
  };

  const procedureType = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 }
  ];

  const handleUpload = () => {
    setIsUpload(true)
  };

  const uploadFileForAudit = () => {
    setIsUpload(false);
    setIsAuditCompleted(true)
  };

  const removeUploadFile = () => {
    setuploadFile();
    setIsUpload(false);
  };

  const handleClose = () => {
    setIsUpload(false)
  };

  const handleUploadFile = (file) => {
    setIsUpload(false);
    const formData = new FormData();
    formData.append("file", file);
    setuploadFile(file);
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 0, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="custom tabs example"
          sx={{
            '&.MuiTabs-root': {
              minHeight: "0px !important"
            },
            '& .MuiTabs-flexContainer': {
              justifyContent: "space-between"
            },
            '& .MuiTab-root': {
              background: "transparent",
              borderRadius: "8px 8px 0 0",
              border: "1px solid lightgray",
              borderBottom: 0
            },
            '& .Mui-selected': {
              background: "white",
              borderRadius: "8px 8px 0 0",
              border: "0px solid lightgray",
            },
          }}
          TabIndicatorProps={{
            style: { display: 'none' }, // Optional: hide the tab indicator if not needed
          }}
        >
          <Tab
            label="Document Validation"
            value={0}
            sx={{
              textAlign: 'center',
              fontWeight: 'bold',
            }}
          />
          <Tab
            label="Ask Me Anything"
            value={1}
            sx={{
              textAlign: 'center',
              fontWeight: 'bold',
              '&.MuiTab-root': {
                background: "#00579B",
                color: "white",
              },
            }}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Box sx={{ borderBottom: 0, borderColor: 'divider' }}>
          <Tabs
            value={newvalue}
            onChange={NewhandleChange}
            aria-label="custom tabs example"
            sx={{
              '&.MuiTabs-root': {
                minHeight: "0px !important"
              },
              '& .MuiTabs-flexContainer': {
                display: "flex"
              },
              '& .MuiTab-root': {
                background: "white",
                color: "lightgrey",
                borderRadius: "8px 8px 0 0",
                border: "1px solid lightgray",
                borderBottom: 0,
                flex: 1,
                maxWidth: "50%"
              },
              '& .Mui-selected': {
                background: "#F6F6F6",
                color: "#00579B",
                borderRadius: "8px 8px 0 0",
                border: "0px solid lightgray",
                fontWeight: 800
              },
            }}
            TabIndicatorProps={{
              style: { display: 'none' }, // Optional: hide the tab indicator if not needed
            }}
          >
            <Tab
              label="Validate Procedure"
              value={0}
              sx={{
                textAlign: 'center',
                fontWeight: 'bold',
              }}
            />
            <Tab
              label="Validate Record"
              value={1}
              sx={{
                textAlign: 'center',
                fontWeight: 'bold',
                '&.MuiTab-root': {
                  background: "#00579B",
                  color: "white",
                },
              }}
            />
          </Tabs>
        </Box>
        <NewCustomTabPanel value={newvalue} index={0}>
          {isUpload && !isAuditCompleted ? <UploadDocxFile onClose={handleClose} uploadFile={handleUploadFile} /> :
          isAuditCompleted && !isUpload ? <ResponseData/> :
            <FormComponent 
            options={procedureType} 
            onUpload={handleUpload} 
            uploadFileForAudit={uploadFileForAudit}
            removeUploadFile={removeUploadFile}
            fileDetails={uploadFile} 
            />
          }
          {!isAuditCompleted &&
          <Box sx={{ mt: 13, width: "100%", display: "flex", alignItems: "right", gap: 1, justifyContent: "flex-end", marginLeft: "-50px" }}>
            <RestoreIcon />
            <Typography>History</Typography>
          </Box> }
        </NewCustomTabPanel>
        <NewCustomTabPanel value={newvalue} index={1}>
          New Item 2
        </NewCustomTabPanel>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
    </Box>
  );
}
