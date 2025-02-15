import React from "react";
import { TextField, Button, Box, Typography, MenuItem, Select, FormControl, InputLabel, Grid, List, ListItem, IconButton, ListItemText, useMediaQuery, Card, CardContent, CardActions } from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import { useTheme } from '@mui/material/styles';
import { Stack } from "@mui/system";
import RestoreIcon from '@mui/icons-material/Restore';
import { ArrowBack, Close } from "@mui/icons-material";

const FormComponent = ({ options, onUpload, uploadFileForAudit, removeUploadFile, fileDetails, formDetails, onFormDetailsChange, responseHistory, handleHistoryClick, documentType }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const [selectedValue, setSelectedValue] = React.useState("");
    const [historyShow, setHistoryShow] = React.useState(false);
    const handleProcedureTypeChange = (event, value) => {
        formDetails["procedureType"] = value?.label;
        onFormDetailsChange({ ...formDetails }); // Pass updated object to parent
    };

    const clearQuestions = () => {
        // setResponseHistory([])
    };

    const handleCardHistoryClick = (id) => {
        handleHistoryClick(id);
    }

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
        formDetails["procedureType"] = event.target.value;
        onFormDetailsChange({ ...formDetails }); // Pass updated object to parent
    };

    const handleInstructionChange = (e) => {
        formDetails["instruction"] = e.target.value;
        onFormDetailsChange({ ...formDetails }); // Pass updated object to parent
    };

    const handleButtonHistoryClick= () => {
        setHistoryShow(true);
    }

    return (
        <Grid container spacing={2} className="hide-scroll" sx={{marginLeft : "-10px"}}>
            <Grid item md={3} xs={isMobile && historyShow ? 12 : 0} sx={{ backgroundColor: "#d3d3d3", paddingRight: "16px", display: isMobile && !historyShow ? 'none' : 'block'  }}>
                <Box padding={1} sx={{ display: 'flex', flexDirection: 'column', rowGap: 1 }}>
                {isMobile && (
                    <IconButton onClick={() => setHistoryShow(false)} sx={{ position: "relative",left: -10, height:"15px" }}>
                        <ArrowBack sx={{color : '#00579B'}}/>
                    </IconButton>
                )}
                    <Box className="hide-scroll" sx={{
                        height: '65vh',
                        overflowY: 'auto',
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                        '&::-webkit-scrollbar': {
                            display: 'none',
                        }
                    }}>
                        {!responseHistory?.length ?
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: '#6f6f6f'
                            }}>
                                <Typography variant="h6">No Document found.</Typography>
                            </Box>
                            : null}
                        {responseHistory?.length ? (
                            <Grid container spacing={2}>
                                {[...responseHistory].reverse()?.map((item, index) => (
                                    <Grid item xs={12} key={`ques-${index}`}>
                                        <Card sx={{ bgcolor: "background.paper", cursor: "pointer", display: "flex", alignItems: "center", padding: "8px" }}>
                    
                                            {/* Left Side: Document Info (80%) */}
                                            <Box sx={{ flex: 4 }} onClick={() => handleCardHistoryClick(item?._id)}>
                                                <CardContent sx={{ padding: 0, "&:last-child": { paddingBottom: 0 } }} >
                                                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                                                        {item?.file_name}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        Uploaded: {new Date(item?.date).toLocaleDateString()}
                                                    </Typography>
                                                </CardContent>
                                            </Box>

                                            {/* Right Side: Delete Button (20%) */}
                                            <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
                                                <CardActions>
                                                    <IconButton aria-label="delete" onClick={() => deleteQuestion(item?.id)}>
                                                        <DeleteOutlineIcon fontSize="small" />
                                                    </IconButton>
                                                </CardActions>
                                            </Box>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        ) : null}
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={historyShow ? 0: 12} md={9} sx={{display: isMobile && historyShow ? 'none' : 'block'  }}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <FormControl fullWidth sx={{ maxWidth: 600, mt: 5, bgcolor: "white", borderRadius: "4px" }}>
                    <InputLabel>{documentType}</InputLabel>
                    <Select value={selectedValue} onChange={handleChange} label="Procedure Type">
                        {options.map((option, index) => (
                            <MenuItem key={index} value={option.label}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <TextField
                    fullWidth
                    id="outlined-multiline-flexible"
                    label="Provide any additional instructions"
                    sx={{ maxWidth: 600, mt: 3, bgcolor: "white", borderRadius: "4px" }}
                    multiline
                    maxRows={4}
                    onChange={handleInstructionChange} // Handle change
                />
                <Box sx={{
                    mt: 3, textAlign: "center", maxWidth: 600, flexDirection: 'column', rowGap: 2, display: fileDetails ? "flex" : "block",
                    justifyContent: fileDetails ? "space-between" : "center",
                }}>
                    {fileDetails && (
                        <Box sx={{ display: "flex", alignItems: "center", textAlign: "left" }}>
                            <Typography
                                variant="body1"
                                sx={{ color: "#25BAA2", marginRight: "8px" }}
                            >
                                {fileDetails.name}
                            </Typography>
                            <DeleteOutlineIcon sx={{ fontSize: "1.2rem", cursor: "pointer" }} onClick={removeUploadFile} />
                        </Box>

                    )}
                    <Box>
                        <Button variant="outlined" onClick={onUpload} sx={{ color: "#25BAA2" }}>
                            Upload Data Doc
                        </Button>
                    </Box>
                </Box>
                <Box sx={{ mt: 3, textAlign: "center", maxWidth: 600 }}>
                    <Button variant="contained" className="disabled" disabled={!fileDetails?.name || !formDetails?.procedureType}
                        sx={{
                            color: "#ffff !important",
                            bgcolor: fileDetails?.name || !formDetails?.procedureType ? "#25BAA2" : "#b8b8b8 !important",
                            "&.MuiButton-root.Mui-disabled": {
                                backgroundColor: "#b8b8b8",
                                color: "#d9d9d9"
                            },
                            "&:hover": {
                                bgcolor: fileDetails?.name || !formDetails?.procedureType ? "#25BAA2" : "#b8b8b8 !important", // Ensure the hover color matches the default
                            }
                        }} onClick={uploadFileForAudit} >
                        Validate
                    </Button>
                </Box>
                { isMobile && (
                    <Box sx={{ mt: 3, textAlign: "center", maxWidth: 600 }}>
                    <Stack direction="column" spacing={2} sx={{ padding: "10px 140px"}}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1, justifyContent: "flex-end", cursor: "pointer" }} onClick={handleButtonHistoryClick}>
                            <RestoreIcon />
                            <Typography>History</Typography>
                        </Box>
                    </Stack>
                </Box>  
                )}
            </Box>
            </Grid>
        </Grid>
    );
};

export default FormComponent;
