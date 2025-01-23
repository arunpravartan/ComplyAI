import React, {useRef } from "react";
import { Card, CardHeader, CardContent, Box, Typography, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const UploadDocxFile = ({onClose, uploadFile}) => {
const [file, setFile] = React.useState(null);
const fileInputRef = useRef(null);

const onUploadFile = () => {   
    fileInputRef.current.click();
}

const onFileChange = (event) => {
    const file = event.target.files[0];
    uploadFile(file);
  };

    return (
        <Card sx={{ width: 500, borderRadius: 2, boxShadow: 3 }}>
          {/* Card Header */}
          <CardHeader
            title="Upload Data Docx"
            titleTypographyProps={{ align: "center", fontWeight: "bold" }}
            action={
              <IconButton onClick={onClose}>
                <CloseIcon />
              </IconButton>
            }
            sx={{ textAlign: "center", pb: 0 }}
          />
    
          {/* Card Content */}
          <CardContent>
            {/* Drag and Drop Box */}
            <Box
              sx={{
                height: 146.5,
                border: "2px dashed #ccc",
                borderRadius: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "#f9f9f9",
                mb: 3,
              }}
            >
              <CloudUploadIcon sx={{ fontSize: 40, color: "#1976d2" }} />
              <Typography sx={{ mt: 1, color: "#666" }}>Drag and Drop or Click to Upload</Typography>
              <Typography sx={{ mt: 2, color: "#666" }}>OR</Typography>
            </Box>
    
            {/* Upload Button */}
            <Box sx={{ mt: 3, textAlign: "center" }}>
            <Button
              variant="contained"
              sx={{ bgcolor: "#25BAA2", "&:hover": { bgcolor: "#25BAA2" } }}
            onClick={onUploadFile}>
              Upload File
            </Button>
            </Box>
            <input
                type="file"
                ref={fileInputRef}
                accept=".docx"
                style={{ display: 'none' }}
                onChange={onFileChange}
            />
          </CardContent>
        </Card>
      );
};

export default UploadDocxFile;
