import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';

export default function GroupTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="custom tabs"
        sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-between', width: '100%' }}
      >
        <Tab label="Tab 1" sx={{ flex: 1, maxWidth: '220px' }} />
        <Tab label="Tab 2" sx={{ flex: 1, maxWidth: '220px' }} />
        <Tab label="Tab 3" sx={{ marginLeft: 'auto', width: '220px' }} />
      </Tabs>
    </Box>
  );
}
