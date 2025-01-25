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
  Card
} from "@mui/material";
import RestoreIcon from '@mui/icons-material/Restore';
import { fontSize, Stack } from "@mui/system";
import Download from '@mui/icons-material/Download';
import Share from '@mui/icons-material/Share';
import History from '@mui/icons-material/History';
import AddToPhotos from '@mui/icons-material/AddToPhotos';
import BorderColor from '@mui/icons-material/BorderColor';

const ResponseData = ({findings, fileName, formDetails}) => {
  
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

const handleDownloadClick = () => {
  const textToDownload = document.querySelector('.findings-text').textContent;
  const blob = new Blob([textToDownload], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName + '.txt';
  link.click();
  URL.revokeObjectURL(url);
};

const handleEditClick = () => {
}

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={9}>
          <Box sx={{ padding: '5px 30px 10px 20px' }}>
            <Paper className="hide-scroll" sx={{ backgroundColor: 'white', padding: '10px', height: '59vh', overflowY: 'auto', // Enable vertical scrolling
    scrollbarWidth: 'none', // Hide scrollbar (Firefox)
    msOverflowStyle: 'none', // Hide scrollbar (IE/Edge)
    '&::-webkit-scrollbar': {
      display: 'none', // Hide scrollbar (Chrome, Safari, Edge)
    }, }}>
              <Typography><strong>CAPA ID:</strong> 2023-003</Typography>
              <Typography><strong>Title:</strong> {fileName}</Typography>
              <Typography><strong>Associated Deviation ID:</strong> DEV-567</Typography>
              <Typography><strong>Awareness Date:</strong>  {new Date().toLocaleDateString()}</Typography>
              <Typography><strong>Date Initiated:</strong> {new Date().toLocaleDateString()}</Typography>
              <Typography><strong>Category:</strong> {formDetails?.procedureType}</Typography>
              {/* <Typography>CAPA Owner: Ron Swanson - Quality Assurance Lead</Typography>
              <Typography>Department: Manufacturing Operations</Typography> */}
              <Box></Box>
              <Stack className="findings-text">
              {(findings || []).map((finding, index) => (
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
        <Grid item xs={3}>
          <Stack direction="column" spacing={2} sx={{ padding: '30px 60px 0px 60px', height: '54vh' }}>
            <Button variant="contained" startIcon={<Download />} sx={{ backgroundColor: "#25BAA2", color: "white", "&:hover": { backgroundColor: "#25BAA2", color: "white"}}} onClick={() => { handleDownloadClick() }}>
              Download
            </Button>
            <Button variant="outlined" startIcon={<BorderColor />} sx={{ border: '4px solid', color: "#25BAA2", "&:hover": { border: '4px solid', color: "#25BAA2"}}} onClick={() => { handleEditClick() }}>
              Edit
            </Button>
            <Button variant="outlined" startIcon={<Share />} sx={{ border: '4px solid', color: "#25BAA2", "&:hover": { border: '4px solid', color: "#25BAA2"}}} onClick={() => { handleShareClick() }}>
              Share
            </Button>
            <Button variant="outlined" startIcon={<AddToPhotos />} sx={{ border: '4px solid', color: "#25BAA2", "&:hover": { border: '4px solid', color: "#25BAA2"}}} onClick={() => handleCopyClick()}>
              Copy
            </Button>
          </Stack>
          <Stack direction="column" spacing={2} sx={{ padding: '10px 140px'}}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, justifyContent: "flex-end",}}>
              <RestoreIcon />
              <Typography>History</Typography>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ResponseData;