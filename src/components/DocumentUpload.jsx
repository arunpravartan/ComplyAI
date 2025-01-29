import React from "react";
import { Autocomplete, TextField, Button, Box, Typography } from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const FormComponent = ({ options, onUpload, uploadFileForAudit, removeUploadFile, fileDetails, formDetails, onFormDetailsChange }) => {

    const handleProcedureTypeChange = (event, value) => {
        formDetails["procedureType"] = value?.label;
        onFormDetailsChange({ ...formDetails }); // Pass updated object to parent
      };
    
      const handleInstructionChange = (e) => {
        formDetails["instruction"] = e.target.value;
        onFormDetailsChange({ ...formDetails }); // Pass updated object to parent
      };

    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "left" }}>
            <Autocomplete
                disablePortal
                options={options}
                sx={{ width: 600, mt: 5, bgcolor: "white", borderRadius: "4px" }}
                onChange={handleProcedureTypeChange}
                renderInput={(params) => <TextField {...params} label="Procedure Type" />}
            />
            {/* <Autocomplete
                disablePortal
                options={options}
                sx={{ width: 600, mt: 3, bgcolor: "white", borderRadius: "4px" }}
                renderInput={(params) => <TextField {...params} label="Select Template" />}
            /> */}
            <TextField
                id="outlined-multiline-flexible"
                label="Provide any additional instructions"
                sx={{ width: 600, mt: 3, bgcolor: "white", borderRadius: "4px" }}
                multiline
                maxRows={4}
                onChange={handleInstructionChange} // Handle change
            />
            <Box sx={{ mt: 3, textAlign: "center", width: 600,  display: fileDetails ? "flex" : "block", 
                justifyContent: fileDetails ? "space-between" : "center", }}>
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
            <Box sx={{ mt: 3, textAlign: "center", width: 600 }}>
                <Button variant="contained" className="disabled" disabled={!fileDetails?.name} sx={{
                    color: "#ffff !important", bgcolor: fileDetails?.name ? "#25BAA2" : "#b8b8b8 !important", "&:hover": {
                        bgcolor: fileDetails?.name ? "#25BAA2" : "#b8b8b8 !important", // Ensure the hover color matches the default
                    }
                }} onClick={uploadFileForAudit} >
                    Validate
                </Button>
            </Box>
        </Box>
    );
};

export default FormComponent;
