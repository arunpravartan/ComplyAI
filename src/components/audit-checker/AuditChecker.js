import React, {useState} from 'react';
import { Link as RouterLink } from "react-router-dom";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import DrawerMenu from '../drawer/DrawerMenu';
import { Button, Collapse, Divider, FormControl, Grid, IconButton, List, ListItemButton, ListItemText, MenuItem, Select, Stack } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });
  

const AuditChecker = () => {
    const [auditData, setAuditData] = useState([])
    const [selectedFile, setSelectedFile] = useState(null);
    const [error, setError] = useState("");
    const [isPreloader, setisPreloader] = useState(false);
    const [message, setMessage] = useState("Uploading file...");
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);

    const url = "https://complyai.pravartan.com";
    const handleClick = () => {
        setOpen(!open);
    };

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });
    
    
    function CircularProgressWithLabel(props) {
        return (
          <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress variant="determinate" {...props} />
            <Box
              sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="caption" component="div" color="text.secondary">
                {`${Math.round(props.value)}%`}
              </Typography>
            </Box>
          </Box>
        );
    }
      
      CircularProgressWithLabel.propTypes = {
        /**
         * The value of the progress indicator for the determinate variant.
         * Value between 0 and 100.
         * @default 0
         */
        value: PropTypes.number.isRequired,
      };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const validExtensions = ["doc", "docx"];
        if (file) {
          const fileExtension = file.name.split(".").pop().toLowerCase();
          if (validExtensions.includes(fileExtension)) {
            setSelectedFile(file);
            setError("");
          } else {
            setError("Please upload a valid .doc or .docx file.");
            setSelectedFile(null); 
          }
        }
      };

    const [progress, setProgress] = React.useState(0);

    const fetchJobDetails = async (jobId, fileName) => {
        try {
          const jobIdResponse = await fetch(`${url}/job/${jobId}`);
          if (jobIdResponse?.status === 200) {
            const jobIdResult = jobIdResponse?.data;
      
            if (jobIdResult && jobIdResult?.["audit-result"]?.length > 0) {
              const auditData = jobIdResult?.["audit-result"];
              setAuditData(auditData);
              navigate("/findings-audit-checker", { state: { auditData, fileName: fileName } });
            }
      
            if (jobIdResult && jobIdResult?.Status === 500 && jobIdResult?.payload?.error) {
              alert(jobIdResult?.payload?.error);
            }
          }
        } catch (error) {
          console.error("Error fetching job details:", error);
        } finally {
        setisPreloader(false);
        }
      };

    const handleSubmit = async (event) => {
        event.preventDefault(); 
        setProgress(0);
        if (!selectedFile) {
          alert("Please upload a doc file before submitting.");
          return;
        }
        setisPreloader(true);
        const formData = new FormData();
        formData.append("file", selectedFile);
        try {
          const response = await fetch(`${url}/docvalidation/send4audit`, {
            method: 'POST',
            body: formData,
          });

          let timer, progressPercentage = 0, isDataFetch = false;
          if (response?.status === 202) {
            const result = await response.json();
            if (result && result?.jobid) {
              timer = setInterval(() => {
                if (progressPercentage >= 100 && !isDataFetch) {
                    clearInterval(timer); // Ensure timer is cleared
                    fetchJobDetails(result?.jobid, selectedFile?.name); // Fetch job details only once
                    isDataFetch = true;
                } else {
                    const diff = Math.random() * 10;
                    progressPercentage = Math.min(progressPercentage + diff, 100);
                    setProgress(progressPercentage);
                }
              }, 3000);
            }
          } else {
            console.error("Failed to upload file");
          }
        } catch (error) {
          console.error("Error uploading file:", error);
        }
      };

    return (
        <Box className="main">
            <Box  sx={{ display: 'flex' }}>
                <DrawerMenu />
                <Box component="main" className="complyai-main">                    
                    <Box className="complyai-wrapper">
                        {/* Mobile drawer menu */}
                        <Box className="mobile-menu" sx={{ display: { xs: 'block', sm: 'none' } }}>
                            <IconButton>
                                <MenuIcon />
                            </IconButton>
                        </Box>

                        <Box className="complyai-container" sx={{justifyContent: 'flex-start!important'}}>
                            <Box className="audit-procedure">
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={5} md={3}>
                                        <Box className="left-wrapper">
                                            <Typography variant='h3'>Document Validation</Typography>
                                            <List
                                                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                                                component="nav"
                                                aria-labelledby="nested-list-subheader" 
                                                className="dropdown-list"                                  
                                            >                                    
                                                <ListItemButton onClick={handleClick} className="menu-title-root">                                        
                                                    <ListItemText primary="History" />
                                                    {open ? <ExpandLess /> : <ExpandMore />}
                                                </ListItemButton>
                                                <Collapse in={open} timeout="auto" unmountOnExit>
                                                    <List component="div" disablePadding>
                                                        <ListItemButton sx={{ pl: 4 }}>                                                
                                                            <ListItemText primary="Ducument 1" />
                                                        </ListItemButton>
                                                        <ListItemButton sx={{ pl: 4 }}>                                                
                                                            <ListItemText primary="Ducument 2" />
                                                        </ListItemButton>
                                                        <ListItemButton sx={{ pl: 4 }}>                                                
                                                            <ListItemText primary="Ducument 3" />
                                                        </ListItemButton>
                                                        <ListItemButton sx={{ pl: 4 }}>                                                
                                                            <ListItemText primary="Ducument 4" />
                                                        </ListItemButton>
                                                    </List>
                                                </Collapse>
                                            </List>
                                        </Box>
                                    </Grid>

                                    <Grid item xs={12} sm={7} md={9}>
                                        <Box className="right-wrapper" sx={{padding: '1.5rem'}}>
                                            <Typography variant='h4' className="main-title">Validate Quality Procedure</Typography>
                                            <Divider />
                                            <Box sx={{marginTop: '1.5rem', marginBottom: '4rem'}}>
                                                <Typography variant='p' className="info-text">Upload the procedure to validate against Regulatory guidelines and Internal quality standards. Once you upload the document, the AI agent will audit it and  list out all the compliance gaps as</Typography>    
                                                
                                            </Box>
                                            {isPreloader && 
                                            <Box mb={2} sx={{textAlign: 'center'}}>
                                                <CircularProgressWithLabel value={progress} />
                                            </Box>
                                            }
                                            
                                            <Box>
                                                <Stack alignItems={'center'} spacing={6}>
                                                    <Button
                                                        component="label"
                                                        role={undefined}
                                                        variant="contained"
                                                        tabIndex={-1}   
                                                        className="upload-file-btn"  
                                                        endIcon={<KeyboardArrowDownIcon />}    
                                                        fullWidth           
                                                    >
                                                        <Box className="replace-profile-pic">{selectedFile ? selectedFile.name : 'Select the document to upload' }</Box>
                                                        <VisuallyHiddenInput type="file" accept=".doc,.docx" onChange={handleFileChange}/>
                                                    </Button>  
                                                     
                                                    <Button 
                                                        type="button" 
                                                        variant="contained" 
                                                        className="submit-btn" 
                                                        onClick={ handleSubmit}
                                                        component={RouterLink}
                                                        to="/findings-audit-checker"
                                                        sx={{width: '150px', borderRadius: '12px'}}
                                                        disableRipple>Submit</Button>
                                                </Stack>
                                            </Box>                                            
                                        </Box>                                    
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>        
    )
}

export default AuditChecker
