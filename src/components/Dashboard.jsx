import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import FormComponent from "./DocumentUpload";
import { Typography, Paper, BottomNavigation, BottomNavigationAction, useTheme, useMediaQuery } from "@mui/material";
import { Home, Search, Person, Restore as RestoreIcon, PlayArrow, Grade, Stop, PanoramaFishEye, Forum, Circle, DocumentScanner, LibraryBooks, Insights, Try } from "@mui/icons-material";

import UploadDocxFile from "./UploadDocxFile";
import ResponseData from "./ResponseData";
import CircularProgress from '@mui/material/CircularProgress';
import ChatInput from "./ChatInput";

import { useAuth } from 'hooks/useAuthContext';
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      style={{ background: value ? "#f5f5f5" : "white", color: "black", height: "80vh", borderRadius: "0 0 8px 8px" }}
      {...other}
    >
      {value === index && <Box height="100%" sx={{ p: 1 }}>{children}</Box>}
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
      style={{ background: "#F6F6F6", color: "#00579B", height: "71vh", borderRadius: "0 0 8px 8px" }}
      {...other}
    >
      {value === index && <Box height="100%" sx={{ p: 3 }}>{children}</Box>}
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

export default function Dashboard() {
  const theme = useTheme();
    const { user } = useAuth();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  
  const [value, setValue] = React.useState(0);
  const [newvalue, newSetValue] = React.useState(0);
  const [isUpload, setIsUpload] = React.useState(false);
  const [uploadFile, setuploadFile] = React.useState(null);
  const [uploadFileData, setuploadFileData] = React.useState(null);
  const [isAuditCompleted, setIsAuditCompleted] = React.useState(false);
  const [auditData, setAuditData] = React.useState([]);
  const [auditHistoryData, setAuditHistoryData] = React.useState({});
  
  const [historyData, setHistoryData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [message, setMessage] = React.useState("Uploading file...");
  const url = "https://complyai.pravartan.com";
  const serverURL = 'http://localhost:1892'

  
  const [formDetails, setFormDetails] = React.useState({});
  const handleChange = (event, nValue) => {
    console.log("Switching to: ", nValue);
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

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${serverURL}/get-history`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ user_id: user?._id }),
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setHistoryData(data?.data);
        console.log("Fetched Data:", data); 
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }
    fetchData(); 
  }, [user]);

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

  const handleResetClick = () => {
   setIsAuditCompleted(false);
   setAuditData([]);
   setIsLoading(false);
   setuploadFileData(null);
   setuploadFile(null);
  }
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
            "Finalizing audit report...",
          ];
  
          let currentMessageIndex = 0;
          const updateMessage = () => {
            if (currentMessageIndex < messages.length) {
              setMessage(messages[currentMessageIndex]);
              currentMessageIndex += 1;
              setTimeout(updateMessage, 5000);
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
          const response = await fetch(`${serverURL}/add-history`, {
            method: 'POST',
            headers: {
              "Content-Type": "application/json", // ✅ Required for JSON data
            },
            body: JSON.stringify({
              user_id : user?._id,
              responceData,
              fileName: uploadFile?.name,
            })
          });
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

  
  const handleHistoryClick = (id) => {
    const selectedHistory = historyData.find((item) => item._id === id)
    setAuditData(selectedHistory?.audit_data);
    setAuditHistoryData(selectedHistory);
    setIsAuditCompleted(true);
  }
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
      {isDesktop ? (<Box sx={{ borderBottom: 0, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="custom tabs example"
          sx={{
            '&.MuiTabs-root': {
              minHeight: "0px !important",
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
            icon={<DocumentScanner />} 
            iconPosition="start"
            label="Document Validation"
            sx={{
              flex: 1,
              maxWidth: '15vw',
              textAlign: 'center',
              fontWeight: 'bold',
              '&.MuiTab-root': {
                borderBottom: "1px solid lightgrey",
              },
              '&.MuiTab-root:hover': {
                backgroundColor: 'white'
              },
              '&.MuiTab-root.Mui-selected': {
                borderBottom: 0,
              },
            }}
          />
          <Tab
            icon={<LibraryBooks />} 
            iconPosition="start"
            label="Update Knowledge"
            sx={{
              flex: 1,
              maxWidth: '15vw',
              textAlign: 'center',
              fontWeight: 'bold',
              '&.MuiTab-root': {
                background: "#f6f6f6",
                color: "#929292",
                borderBottom: "1px solid lightgrey",
              },
              '&.MuiTab-root.Mui-selected': {
                background: "#f5f5f5 !important",
                color: "#929292",
                borderBottom: 0,
              },
            }}
          />
          <Tab
            icon={<Insights />} 
            iconPosition="start"
            label="Predictive Analysis"
            sx={{
              flex: 1,
              maxWidth: '15vw',
              textAlign: 'center',
              fontWeight: 'bold',
              '&.MuiTab-root': {
                background: "#f6f6f6",
                color: "#929292",
                borderBottom: "1px solid lightgrey",
              },
              '&.MuiTab-root.Mui-selected': {
                background: "#f5f5f5 !important",
                color: "#929292",
                borderBottom: 0,
              },
            }}
          />
          <Tab
            icon={<Try />} 
            iconPosition="start"
            label="Ask Me Anything"
            sx={{
              marginLeft: 'auto', 
              textAlign: 'center',
              fontWeight: 'bold',
              '&.MuiTab-root': {
                background: "#00579B",
                color: "white",
              },
            }}
          />
        </Tabs>
      </Box>) : (
        <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={3}>
          <BottomNavigation showLabels value={value} onChange={handleChange}>
            <BottomNavigationAction label="Document" icon={<DocumentScanner />} value={0} />
            <BottomNavigationAction label="Knowledge" icon={<LibraryBooks />} value={1} />
            <BottomNavigationAction label="Analysis" icon={<Insights />} value={2} />
            <BottomNavigationAction label="Ask Me" icon={<Try />} value={3} />
          </BottomNavigation>
        </Paper>
      )}
      <CustomTabPanel value={value} index={value}>
        { value === 0 ?
          (<Box>
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
                    color: "grey",
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
                  label="Validate Record"
                  value={0}
                  sx={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}
                />
                <Tab
                  label="Validate Procedure"
                  value={1}
                  sx={{
                    textAlign: 'center',
                    fontWeight: 'bold'
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
                    backgroundColor: 'rgba(255, 255, 255, 0.66)', // Semi-transparent white background
                    backdropFilter: 'blur(0.5px)', // Adds a blur effect to the background
                    zIndex: 10, // Ensure it appears above content within the TabPanel
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column', // Stack spinner and message vertically\
                  }}
                >
                  <Box display="flex" flexDirection="column" alignItems="center" bgcolor="#f5f5f5" boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)" padding="50px" borderRadius="8px"> 
                    <CircularProgress /><br/>
                    <Typography variant="body1" sx={{  color: 'gray' }}>
                      {message || "Uploading file..."}
                    </Typography>
                  </Box>
                </Box>
              )}
              {isUpload && !isAuditCompleted ? <UploadDocxFile onClose={handleClose} uploadFile={handleUploadFile} /> :
                isAuditCompleted && !isUpload ? <ResponseData findings={auditData} fileName= {uploadFile?.name || auditHistoryData?.file_name} formDetails = {formDetails} date = {auditHistoryData?.date} handleResetClick={handleResetClick} /> :
                  <FormComponent
                    options={procedureType}
                    onUpload={handleUpload}
                    uploadFileForAudit={uploadFileForAudit}
                    removeUploadFile={removeUploadFile}
                    fileDetails={uploadFile}
                    formDetails = {formDetails}
                    onFormDetailsChange={handleFormDetailsChange}
                    responseHistory = {historyData}
                    handleHistoryClick={handleHistoryClick}
                    documentType = {"Record Type"}
                  />
              }
            </NewCustomTabPanel>
            <NewCustomTabPanel value={newvalue} index={1}>
            {isLoading && (
                <Box
                  sx={{
                    position: 'absolute', // Restrict to parent container
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(255, 255, 255, 0.66)', // Semi-transparent white background
                    backdropFilter: 'blur(0.5px)', // Adds a blur effect to the background
                    zIndex: 10, // Ensure it appears above content within the TabPanel
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column', // Stack spinner and message vertically\
                  }}
                >
                  <Box display="flex" flexDirection="column" alignItems="center" bgcolor="#f5f5f5" boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)" padding="50px" borderRadius="8px"> 
                    <CircularProgress /><br/>
                    <Typography variant="body1" sx={{  color: 'gray' }}>
                      {message || "Uploading file..."}
                    </Typography>
                  </Box>
                </Box>
              )}
              {isUpload && !isAuditCompleted ? <UploadDocxFile onClose={handleClose} uploadFile={handleUploadFile} /> :
                isAuditCompleted && !isUpload ? <ResponseData findings={auditData} fileName= {uploadFile?.name || auditHistoryData?.file_name} formDetails = {formDetails} date = {auditHistoryData?.date} handleResetClick={handleResetClick} /> :
                  <FormComponent
                    options={procedureType}
                    onUpload={handleUpload}
                    uploadFileForAudit={uploadFileForAudit}
                    removeUploadFile={removeUploadFile}
                    fileDetails={uploadFile}
                    formDetails = {formDetails}
                    onFormDetailsChange={handleFormDetailsChange}
                    responseHistory = {historyData}
                    handleHistoryClick={handleHistoryClick}
                    documentType = {"Procedure Type"}
                  />
              }
            </NewCustomTabPanel>
            
            <NewCustomTabPanel value={newvalue} index={2}>
              {/* <GroupTabs /> */}
              <Box display="flex" justifyContent="center" alignItems="center" height="100%">Comming soon...</Box>
            </NewCustomTabPanel>
          </Box>) : (value === 3 ? <ChatInput /> : <Box display="flex" justifyContent="center" alignItems="center" height="100%"  sx={{ color: "#00579B", backgroundColor: "#f6f6f6", borderRadius: "8px" }} >Comming soon...</Box>) }
      </CustomTabPanel>
    </Box>
  );
}
