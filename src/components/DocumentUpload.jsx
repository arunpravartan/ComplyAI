import React from "react";
import { Autocomplete, TextField, Button, Box, Typography, MenuItem, Select, FormControl, InputLabel, Grid, List, ListItem, IconButton, ListItemText } from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import { ArrowForward, ArrowForwardIos, Close, Delete } from "@mui/icons-material";

const FormComponent = ({ options, onUpload, uploadFileForAudit, removeUploadFile, fileDetails, formDetails, onFormDetailsChange, responseHistory, handleHistoryClick, documentType }) => {
    const [selectedValue, setSelectedValue] = React.useState("");
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

    return (
        <Grid container spacing={2}>
            <Grid item md={3} sx={{ backgroundColor: "#d3d3d3", display: { xs: "none", md: "block" } }}>
                <Box padding={1} sx={{ display: 'flex', flexDirection: 'column', rowGap: 1 }}>
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
                        {responseHistory?.length ?
                            <List sx={{ color: "black" }}>
                                {[...responseHistory].reverse()?.map((item, index) => (
                                    <ListItem key={`ques-${index}`}
                                        disableGutters
                                        onClick={() => handleCardHistoryClick(item?._id)}
                                        secondaryAction={
                                            <IconButton aria-label="comment" onClick={() => deleteQuestion(item?.id)} >
                                                <Close fontSize="12px" />
                                            </IconButton>
                                        } sx={{ bgcolor: 'background.paper', mb: 1, cursor: 'pointer' }} >
                                        <ListItemText sx={{ paddingLeft: 1 }} primary={item?.file_name} />
                                    </ListItem>
                                ))}
                            </List> : null}
                    </Box>
                    {/* {responseHistory?.length ?
                     <Box textAlign='center'>
                        <Button variant="outlined" color="error" onClick={clearQuestions} startIcon={<Delete />}>
                            Clear All Questions
                        </Button>
                    </Box> : null} */}
                </Box>
            </Grid>
            <Grid item xs={12} md={9}>
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
                </Box>
            </Grid>
        </Grid>
    );
};

export default FormComponent;
