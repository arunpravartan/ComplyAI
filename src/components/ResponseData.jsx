import React from "react";
import {
  Autocomplete,
  TextField,
  Button,
  Box,
  Typography,
  Grid,
  Paper,
  IconButton,
  Card, useMediaQuery
} from "@mui/material";
import RestoreIcon from '@mui/icons-material/Restore';
import { fontSize, Stack } from "@mui/system";
import Download from '@mui/icons-material/Download';
import Share from '@mui/icons-material/Share';
import History from '@mui/icons-material/History';
import AddToPhotos from '@mui/icons-material/AddToPhotos';
import BorderColor from '@mui/icons-material/BorderColor';
import { jsPDF } from "jspdf";
import { useTheme } from "@mui/material/styles";
const ResponseData = ({findings, fileName, formDetails,date, handleResetClick}) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const handleShareClick = () => {
    const textToShare = document.querySelector('.findings-text')?.textContent || '';

    // Encode text for fallback sharing
    const encodedText = encodeURIComponent(textToShare);

    // Check if the Share API is available
    if (navigator.share) {
      navigator
        .share({
          title: 'Findings to Share',
          text: textToShare,
        })
        .catch((error) => console.error('Sharing failed', error));
    } else {
      // Fallback for platforms without Share API
      const emailLink = `mailto:?subject=Findings to Share&body=${encodedText}`;
      const whatsappLink = `https://wa.me/?text=${encodedText}`;

      // Display fallback share links
      const shareMenu = document.createElement('div');
      shareMenu.innerHTML = `
        <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 1000; background: white; padding: 20px; border: 1px solid #ccc; box-shadow: 0 4px 8px rgba(0,0,0,0.1); border-radius: 8px;">
          <p>Share this content:</p>
          <a href="${emailLink}" target="_blank" style="margin-right: 10px;">Share via Email</a>
          <a href="${whatsappLink}" target="_blank">Share via WhatsApp</a>
          <button style="margin-top: 10px;" onclick="document.body.removeChild(this.parentElement)">Close</button>
        </div>
      `;
      document.body.appendChild(shareMenu);
    }
  };

  const handleCopyClick = () => {
    const textToCopy = document.querySelector('.findings-text').textContent;
    navigator.clipboard.writeText(textToCopy);
    alert("Copied to clipboard");
}

const handleDownloadClick = (findings, fileName) => {
  const doc = new jsPDF();

  let yPosition = 10; // Initial Y position for text
  doc.setFontSize(13); // Set font size to 13px

  findings.forEach((finding, index) => {
    // Finding Title (Bold)
    doc.setFont("helvetica", "bold");
    doc.text(`Finding ${index + 1}:`, 10, yPosition);
    yPosition += 8;

    // Finding Issue (Normal)
    doc.setFont("helvetica", "normal");
    doc.text(finding.issue, 10, yPosition, { maxWidth: 180 });
    yPosition += 12; // Added gap between Finding & Recommendation

    // Recommendation Title (Bold)
    doc.setFont("helvetica", "bold");
    doc.text("Recommendation:", 10, yPosition);
    yPosition += 8;

    // Recommendation Text (Normal)
    doc.setFont("helvetica", "normal");
    doc.text(finding.recommendation, 10, yPosition, { maxWidth: 180 });
    yPosition += 15; // Extra space before next Finding

    // Ensure the content does not overflow the page
    if (yPosition > 270) {
      doc.addPage();
      yPosition = 10;
    }
  });

  doc.save(`${fileName}.pdf`);
};

// const handleEditClick = () => {
// }

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={9} lg={9}>
          <Box sx={{ padding: !isMobile? '5px 30px 10px 20px' : '' }}>
            <Paper className="hide-scroll" sx={{ backgroundColor: 'white', padding: '10px', height: isMobile? '53vh' : '59vh', overflowY: 'auto', // Enable vertical scrolling
            scrollbarWidth: 'none', // Hide scrollbar (Firefox)
            msOverflowStyle: 'none', // Hide scrollbar (IE/Edge)
            '&::-webkit-scrollbar': {
              display: 'none', // Hide scrollbar (Chrome, Safari, Edge)
            }, }}>
              <Typography><strong>CAPA ID:</strong> 2023-003</Typography>
              <Typography><strong>Title:</strong> {fileName}</Typography>
              <Typography><strong>Associated Deviation ID:</strong> DEV-567</Typography>
              <Typography><strong>Awareness Date:</strong>  {new Date(date).toLocaleDateString() || new Date().toLocaleDateString()}</Typography>
              <Typography><strong>Date Initiated:</strong> {new Date(date).toLocaleDateString() || new Date().toLocaleDateString()}</Typography>
              <Typography><strong>Category:</strong> {formDetails?.procedureType}</Typography>
              {/* <Typography>CAPA Owner: Ron Swanson - Quality Assurance Lead</Typography>
              <Typography>Department: Manufacturing Operations</Typography> */}
              <Box></Box>
              <Stack className="findings-text">
              {((findings || audit_data) || []).map((finding, index) => (
                  <Box sx={{ mt:2}}>
                      <Typography><strong style={{ fontSize: '16px' }}>Finding {index + 1} :</strong></Typography>
                      <Typography>{finding.issue}</Typography>
                      <Typography><strong>Recommendation :</strong> {finding?.recommendation}</Typography>
                  </Box>
              ))}
              </Stack>
            </Paper>
          </Box>
        </Grid>
        <Grid item xs={12} md={3} lg={3}>
      {/* Stack for Buttons */}
      <Stack
        direction={isMobile ? "row" : "column"} // Change direction based on screen size
        spacing={2}
        sx={{
          padding: isMobile ? "1px" : "30px 60px 0px 60px",
          height: isMobile ? "fit-content" : "54vh",
          justifyContent: isMobile ? "center" : "flex-start", // Center buttons in mobile view
          flexWrap: isMobile ? "wrap" : "nowrap", // Wrap buttons in small screens if needed
        }}
      >
        <Button
          variant="outlined"
          startIcon={<Download />}
          sx={{
            "& .MuiButton-startIcon": { margin: { xs: 0, md: '0 8px 0 -4px' } },
            backgroundColor: "#25BAA2",
            color: "white",
            "&:hover": { backgroundColor: "#25BAA2", color: "white" },
            ...(isMobile && { width: "40px", height: "fit-content", fontSize : '20px' })
          }}
          onClick={() => {handleDownloadClick(findings, fileName)}}
        >
         {!isMobile && "Download"} 
        </Button>
        
        <Button
          variant="outlined"
          startIcon={<Share />}
          sx={{
            "& .MuiButton-startIcon": { margin: { xs: 0, md: '0 8px 0 -4px' } },
            color: "#25BAA2",
            borderColor: "#25BAA2",
            "&:hover": { color: "#25BAA2" },
            ...(isMobile && { width: "40px", height: "fit-content", fontSize : '20px' })
          }}
          onClick={handleShareClick}
        > 
        {!isMobile && "Share"} 
        </Button>

        <Button
          variant="outlined"
          startIcon={<AddToPhotos />}
          sx={{
            "& .MuiButton-startIcon": { margin: { xs: 0, md: '0 8px 0 -4px' } },
            borderColor: "#25BAA2",
            color: "#25BAA2",
            "&:hover": { color: "#25BAA2" },
            ...(isMobile && { width: "40px", height: "fit-content", fontSize : '20px' })
          }}
          onClick={handleCopyClick}
        >
          {!isMobile && "Copy"} 
        </Button>

        <Button
          variant="outlined"
          sx={{
             margin: { xs: 0, md: '0 8px 0 -4px' },
            borderColor: "#25BAA2",
            color: "#25BAA2",
            ...(isMobile && { width: "40px", height: "fit-content", fontSize : '12px' })
          }}
          onClick={handleResetClick}
        >
          Reset
        </Button>
      </Stack>

      {/* History Section (Visible Only on Larger Screens) */}
      {!isMobile && (
        <Stack direction="column" spacing={2} sx={{ padding: "10px 140px"}}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, justifyContent: "flex-end", cursor: "pointer" }} onClick={handleResetClick}>
            <RestoreIcon />
            <Typography>History</Typography>
          </Box>
        </Stack>
      )}
    </Grid>
      </Grid>
    </Box>
  );
};

export default ResponseData;