import React from "react";
import { Autocomplete, TextField, Button, Box, Typography } from "@mui/material";
import RestoreIcon from '@mui/icons-material/Restore';

const FormComponent = ({ options, onUpload }) => {
  return (
    <Box>
      <Autocomplete
        disablePortal
        options={options}
        sx={{ width: 600, mt: 5, ml: 5, bgcolor: "white", borderRadius: "4px" }}
        renderInput={(params) => <TextField {...params} label="Procedure Type" />}
      />
      <Autocomplete
        disablePortal
        options={options}
        sx={{ width: 600, mt: 3, ml: 5, bgcolor: "white", borderRadius: "4px" }}
        renderInput={(params) => <TextField {...params} label="Select Template" />}
      />
      <Box sx={{ mt: 3, ml: 30}}>
        <Button variant="outlined" onClick={onUpload}>
          Upload Data Doc
        </Button>
      </Box>
      <Box sx={{ mt: 3, ml: 33.5 }}>
      <Button variant="contained" sx={{ bgcolor: "#a8a8a8 !important", color: "white !important" }}>
        Validate
      </Button>
      </Box>
    </Box>
  );
};

export default FormComponent;
