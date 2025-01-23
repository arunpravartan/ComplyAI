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
  return (
    <Box>
      <Grid container spacing={2}>
        {/* Left Panel */}
        <Grid item xs={9}>
          <Box sx={{ padding: '5px 30px 10px 20px' }}>
            <Paper sx={{ backgroundColor: 'white', padding: '10px', height: '59vh', overflowY: 'auto' }}>
              <Typography>CAPA ID: -2023-003</Typography>
              <Typography>Title: Corrective Action for Batch Contamination Incident</Typography>
              <Typography>Associated Deviation ID: DEV-567</Typography>
              <Typography>Awareness Date: 05/11/2024</Typography>
              <Typography>Date Initiated: 05/15/2024</Typography>
              <Typography>Category: Major</Typography>
              <Typography>CAPA Owner: Ron Swanson - Quality Assurance Lead</Typography>
              <Typography>Department: Manufacturing Operations</Typography>
              <Typography>CAPA ID: -2023-003</Typography>
              <Typography>Title: Corrective Action for Batch Contamination Incident</Typography>
              <Typography>Associated Deviation ID: DEV-567</Typography>
              <Typography>Awareness Date: 05/11/2024</Typography>
              <Typography>Date Initiated: 05/15/2024</Typography>
              <Typography>Category: Major</Typography>
              <Typography>CAPA Owner: Ron Swanson - Quality Assurance Lead</Typography>
              <Typography>Department: Manufacturing Operations</Typography>
              <Typography>CAPA ID: -2023-003</Typography>
              <Typography>Title: Corrective Action for Batch Contamination Incident</Typography>
              <Typography>Associated Deviation ID: DEV-567</Typography>
              <Typography>Awareness Date: 05/11/2024</Typography>
              <Typography>Date Initiated: 05/15/2024</Typography>
              <Typography>Category: Major</Typography>
              <Typography>CAPA Owner: Ron Swanson - Quality Assurance Lead</Typography>
              <Typography>Department: Manufacturing Operations</Typography>
              <Typography>CAPA ID: -2023-003</Typography>
              <Typography>Title: Corrective Action for Batch Contamination Incident</Typography>
              <Typography>Associated Deviation ID: DEV-567</Typography>
              <Typography>Awareness Date: 05/11/2024</Typography>
              <Typography>Date Initiated: 05/15/2024</Typography>
              <Typography>Category: Major</Typography>
              <Typography>CAPA Owner: Ron Swanson - Quality Assurance Lead</Typography>
              <Typography>Department: Manufacturing Operations</Typography>
              <Typography>CAPA ID: -2023-003</Typography>
              <Typography>Title: Corrective Action for Batch Contamination Incident</Typography>
              <Typography>Associated Deviation ID: DEV-567</Typography>
              <Typography>Awareness Date: 05/11/2024</Typography>
              <Typography>Date Initiated: 05/15/2024</Typography>
              <Typography>Category: Major</Typography>
              <Typography>CAPA Owner: Ron Swanson - Quality Assurance Lead</Typography>
              <Typography>Department: Manufacturing Operations</Typography>
            </Paper>
          </Box>
        </Grid>

        {/* Right Panel */}
        <Grid item xs={3}>
          <Stack direction="column" spacing={2} sx={{ padding: '30px 60px 0px 60px', height: '54vh' }}>
            <Button variant="contained" startIcon={<Download />} sx={{ backgroundColor: "#00579B", color: "white", "&:hover": { backgroundColor: "#00579B", color: "white"}}}>
              Download
            </Button>
            <Button variant="outlined" startIcon={<BorderColor />} sx={{ border: '4px solid', color: "#00579B", "&:hover": { border: '4px solid', color: "#00579B"}}}>
              Edit
            </Button>
            <Button variant="outlined" startIcon={<Share />} sx={{ border: '4px solid', color: "#00579B", "&:hover": { border: '4px solid', color: "#00579B"}}}>
              Share
            </Button>
            <Button variant="outlined" startIcon={<AddToPhotos />} sx={{ border: '4px solid', color: "#00579B", "&:hover": { border: '4px solid', color: "#00579B"}}}>
              Copy
            </Button>
          </Stack>
          <Stack direction="column" spacing={2} sx={{ padding: '10px 60px' }}>
            <Button variant="text" sx={{color: "#00579B"}} startIcon={<History />}>
              History
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ResponseData;