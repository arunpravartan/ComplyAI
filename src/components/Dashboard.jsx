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
import CircularProgress from '@mui/material/CircularProgress';
import ChatInput from "./ChatInput";

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
  const [uploadFileData, setuploadFileData] = React.useState(null);
  const [isAuditCompleted, setIsAuditCompleted] = React.useState(false);
  const [auditData, setAuditData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [message, setMessage] = React.useState("Uploading file...");
  const url = "https://complyai.pravartan.com";

  
  const [formDetails, setFormDetails] = React.useState({});
  const handleChange = (event, nValue) => {
    setValue(nValue);
  };
  const NewhandleChange = (event, newvalue) => {
    newSetValue(newvalue);
  };

  const procedureType = [
    { label: "Quality Assurance (QA)" },
    { label: "Good Manufacturing Practices (GMP)" },
    { label: "Good Laboratory Practices (GLP)" },
    { label: "Quality Control (QC)" },
    { label: "Validation and Qualification" },
    { label: "Regulatory Compliance" },
    { label: "Risk Management" },
    { label: "Training and Competency Assessment" },
    { label: "Complaint and Recall Management" },
    { label: "Data Management and Integrity" }
  ];

  const handleUpload = () => {
    setIsUpload(true)
  };

  const handleFormDetailsChange = (updatedDetails) => {
    setFormDetails(updatedDetails);
  };

  const uploadFileForAudit = () => {
    setIsUpload(false);
    handleSubmit()
  };

  const handleSubmit = async () => {
    if (!uploadFileData) {
      alert("Please upload a doc file before submitting.");
      return;
    }
    setIsLoading(true)
    try {
      const response = await fetch(`${url}/docvalidation/send4audit`, {
        method: 'POST',
        body: uploadFileData,
      });

      let timer, progressPercentage = 0, isDataFetch = false;
      if (response?.status === 202) {
        const result = await response.json();
        if (result && result?.jobid) {
          const messages = [
            "Uploading file...",
            "Validating data...",
            "Processing data...",
            "Finalizing audit...",
          ];
  
          let currentMessageIndex = 0;
          const updateMessage = () => {
            if (currentMessageIndex < messages.length) {
              setMessage(messages[currentMessageIndex]);
              currentMessageIndex += 1;
              setTimeout(updateMessage, 15000);
            } else {
            fetchJobDetails(result?.jobid, uploadFile?.name);
            }
          };
  
          updateMessage(); 
        }
      } else {
        console.error("Failed to upload file");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const fetchJobDetails = async (jobId, fileName) => {
    try {
      let jobIdResponse = await fetch(`${url}/job/${jobId}`);
      if (jobIdResponse?.status === 200) {
        const jobIdResult = await jobIdResponse.json();
        if (jobIdResult && jobIdResult?.["audit-result"]?.length > 0) {
          const responceData = jobIdResult?.["audit-result"];
          setIsAuditCompleted(true);
          setAuditData(responceData);
        }
        if (jobIdResult && jobIdResult?.Status === 500 && jobIdResult?.payload?.error) {
          alert(jobIdResult?.payload?.error);
        }
      }
    } catch (error) {
      console.error("Error fetching job details:", error);
    } finally {
    setIsLoading(false)
    }
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
    setuploadFileData(formData)
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
          {isLoading && (
            <Box
              sx={{
                position: 'absolute', // Restrict to parent container
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(255, 255, 255, 0.5)', // Semi-transparent white background
                backdropFilter: 'blur(0.5px)', // Adds a blur effect to the background
                zIndex: 10, // Ensure it appears above content within the TabPanel
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column', // Stack spinner and message vertically\
              }}
            >
              <CircularProgress /><br/>
              <Typography variant="body1" sx={{  color: 'gray' }}>
                {message || "Uploading file..."}
              </Typography>
            </Box>
          )}
          {isUpload && !isAuditCompleted ? <UploadDocxFile onClose={handleClose} uploadFile={handleUploadFile} /> :
            isAuditCompleted && !isUpload ? <ResponseData findings={auditData} fileName= {uploadFile?.name} formDetails = {formDetails} /> :
              <FormComponent
                options={procedureType}
                onUpload={handleUpload}
                uploadFileForAudit={uploadFileForAudit}
                removeUploadFile={removeUploadFile}
                fileDetails={uploadFile}
                formDetails = {formDetails}
                onFormDetailsChange={handleFormDetailsChange}
              />
          }
          {!isAuditCompleted &&
            <Box sx={{ mt: 13, width: "100%", display: "flex", alignItems: "right", gap: 1, justifyContent: "flex-end", marginLeft: "-50px" }}>
              <RestoreIcon />
              <Typography>History</Typography>
            </Box>}
        </NewCustomTabPanel>
        <NewCustomTabPanel value={newvalue} index={1}>
          Comming Soon.....
        </NewCustomTabPanel>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <ChatInput />
      </CustomTabPanel>
    </Box>
  );
}
