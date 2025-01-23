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
import { Stack } from "@mui/system";
import Download from '@mui/icons-material/Download';
import Share from '@mui/icons-material/Share';
import History from '@mui/icons-material/History';
import AddToPhotos from '@mui/icons-material/AddToPhotos';
import BorderColor from '@mui/icons-material/BorderColor';

const ResponseData = () => {
  const findings = [
    {issue : "CAPA ID format does not match the SOP's specified format", recommendation : "Ensure the CAPA ID follows the format CAPA-YYYY-###. The current ID 'CAPA-2023-003' should be updated to 'CAPA-2024-003' to reflect the correct year of initiation"},
    {issue: "The CAPA document does not explicitly mention the CAPA Approver's role in verifying that the CAPA was executed to the approved plan.", recommendation : "Include a section in the CAPA document where the CAPA Approver verifies that the CAPA was executed according to the approved plan, as required by the SOP."},
    {issue : "The CAPA document does not mention the classification of the CAPA as Minor, Major, or Critical.", recommendation : "Explicitly state the classification of the CAPA as Major, as per the SOP requirement, in the CAPA document."},
    {issue : "The CAPA document does not mention the CAPA Action Owner's responsibility for implementing the identified CAPA actions.", recommendation : "Include a section in the CAPA document that identifies the CAPA Action Owner and their responsibility for implementing the identified CAPA actions."}
  ]
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
              <Typography>CAPA ID: -2023-003</Typography>
              <Typography>Title: Corrective Action for Batch Contamination Incident</Typography>
              <Typography>Associated Deviation ID: DEV-567</Typography>
              <Typography>Awareness Date: 05/11/2024</Typography>
              <Typography>Date Initiated: 05/15/2024</Typography>
              <Typography>Category: Major</Typography>
              <Typography>CAPA Owner: Ron Swanson - Quality Assurance Lead</Typography>
              <Typography>Department: Manufacturing Operations</Typography>
              <Box sx={{ mt: 2, mb: 2 }}></Box>
              {(findings || []).map((finding, index) => (
                  <Box >
                      <Typography>{index + 1}. Finding {index + 1} :</Typography>
                      <Typography>{finding.issue}</Typography>
                      <Typography><strong>Recommendation :</strong> {finding?.recommendation}</Typography>
                  </Box>
              ))}
            </Paper>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Stack direction="column" spacing={2} sx={{ padding: '30px 60px 0px 60px', height: '54vh' }}>
            <Button variant="contained" startIcon={<Download />} sx={{ backgroundColor: "#25BAA2", color: "white", "&:hover": { backgroundColor: "#25BAA2", color: "white"}}}>
              Download
            </Button>
            <Button variant="outlined" startIcon={<BorderColor />} sx={{ border: '4px solid', color: "#25BAA2", "&:hover": { border: '4px solid', color: "#25BAA2"}}}>
              Edit
            </Button>
            <Button variant="outlined" startIcon={<Share />} sx={{ border: '4px solid', color: "#25BAA2", "&:hover": { border: '4px solid', color: "#25BAA2"}}}>
              Share
            </Button>
            <Button variant="outlined" startIcon={<AddToPhotos />} sx={{ border: '4px solid', color: "#25BAA2", "&:hover": { border: '4px solid', color: "#25BAA2"}}}>
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