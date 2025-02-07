import React, { useRef, useState, useCallback } from "react";
import { useDropzone } from 'react-dropzone'
import {
  Card, CardHeader, CardContent, Box, Typography, Button,
  IconButton, Dialog, Slide, useMediaQuery
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import { useTheme } from "@mui/material/styles";
const UploadDocxFile = ({ onClose, uploadFile }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = React.useState(true);
  const [error, setError] = useState("");

  const fileInputRef = useRef(null);

  const handleFileSelect = () => {
    fileInputRef.current.click();
    setOpen(true)
  }

  const onFileChange = (event) => {
    const file = event.target.files[0];
    uploadFile(file);
  };

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      uploadFile(file);
      // const reader = new FileReader()

      // reader.onabort = () => console.log('file reading was aborted')
      // reader.onerror = () => console.log('file reading has failed')
      // reader.onload = () => {
      // // Do whatever you want with the file contents
      //   const binaryStr = reader.result
      //   console.log(binaryStr)
      // }
      // reader.readAsArrayBuffer(file)
    });
  }, []);

  const onDropRejected = useCallback(() => {
    setError("Only .doc and .docx files are allowed.");
    alert("Only .doc and .docx files are allowed.");
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ 
    onDrop,
    onDropRejected,
    multiple: false,
    accept: {
      "application/msword": [".doc"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
    },
  })

  return (
    <>
      {/* Normal UI for Desktop */}
      {!isMobile ? (
        <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <Card sx={{ width: 500, borderRadius: 2, boxShadow: 3 }}>
          <CardHeader
            color="primary.main"
            title="Upload Data Docx"
            titleTypographyProps={{ align: "center", fontWeight: "bold" }}
            action={
              <IconButton onClick={onClose}>
                <CloseIcon />
              </IconButton>
            }
            sx={{ textAlign: "center", pb: 0 }}
          />
          <CardContent>
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
              {...getRootProps()}
            >
              <CloudUploadIcon sx={{ fontSize: 40, color: "#1976d2" }} />
              <input {...getInputProps()} />
              <Typography sx={{ mt: 1, color: "#666" }}>Drag and Drop or Click to Select</Typography>
            </Box>
          </CardContent>
        </Card>
        </Box>
      ) : (
        <>
          {/* Bottom Drawer for Mobile */}
          <Dialog
            open={open}
            onClose={() => setOpen(false)}
            TransitionComponent={Slide}
            TransitionProps={{ direction: "up" }}
            fullWidth
            maxWidth="sm" // Ensures a controlled width
            sx={{
              position: "fixed", 
              bottom: 0,
              left: 0,
              right: 0,
              "& .MuiDialog-paper": {
                borderRadius: "20px 20px 0 0",
                maxWidth: "100%",
                position: "absolute",
                bottom: 0,
                margin: "0 auto",
                maxHeight: "60vh", // Prevents covering full screen
                overflowY: "auto",
                width: "100%",
              },
            }}
          >
            <Card sx={{ width: "100%", boxShadow: 3, borderRadius: 2 }}>
              <CardHeader
                title="Upload Data Docx"
                titleTypographyProps={{ align: "center", fontWeight: "bold" }}
                action={
                  <IconButton onClick={() => { setOpen(false); onClose(); }}>
                    <CloseIcon />
                  </IconButton>
                }
                sx={{ textAlign: "center", pb: 0 }}
              />
              <CardContent>
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
                  {...getRootProps()}
                >
                  <CloudUploadIcon sx={{ fontSize: 40, color: "#1976d2" }} />
                  <input {...getInputProps()} />
                  <Typography sx={{ mt: 1, color: "#666" }}>Click to Select & Upload</Typography>
                </Box>
              </CardContent>
            </Card>
          </Dialog>
        </>
      )}
    </>
  );
};

export default UploadDocxFile;
