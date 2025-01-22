'use client';
import { useState } from 'react';

// @mui
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @project
import { TabsType, ViewMode } from '@/enum';
import MainCard from '@/components/MainCard';
import Legend from '@/components/third-party/chart/Legend';

// @icons
import { IconArrowUpRight, IconChevronRight } from '@tabler/icons-react';
import Background from '@/images/graphics/Background';

// @types

/***************************  CHART - DATA  ***************************/

const yearlyData = {
  salesData: [10000, 18000, 19000, 25000, 23000, 28000, 28000, 20000, 12000, 13000, 12500, 25000],
  targetData: [20000, 38000, 59000, 28000, 43000, 54000, 18000, 50000, 42000, 43000, 42500, 15000]
};

const monthlyData = {
  salesData: [10000, 25000, 24000, 38000, 29000, 40500, 28500, 24500, 28500, 22000, 28000, 37500],
  targetData: [10000, 17000, 19000, 25000, 24000, 26000, 17000, 20000, 11000, 14000, 12000, 23000]
};

const dailyData = {
  salesData: [20000, 38000, 59000, 28000, 43000, 54000, 18000],
  targetData: [40000, 28000, 49000, 58000, 23000, 53000, 48000]
};

const xLabelsDaily = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const xLabelsMonthly = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const xLabelsYearly = [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012];
const timeFilter = ['Daily', 'Monthly', 'Yearly'];

const xLabelsMapping = {
  [ViewMode.MONTHLY]: xLabelsMonthly,
  [ViewMode.DAILY]: xLabelsDaily,
  [ViewMode.YEARLY]: xLabelsYearly
};

const dataMap = { [ViewMode.MONTHLY]: monthlyData, [ViewMode.DAILY]: dailyData, [ViewMode.YEARLY]: yearlyData };

/***************************  PERFORMANCE - CHART   ***************************/

export default function AnalyticsPerformanceChart() {
  const theme = useTheme();

  const [view, setView] = useState(ViewMode.MONTHLY);
  const [visibilityOption, setVisibilityOption] = useState({
    sales: true,
    target: true
  });

  const handleViewChange = (_event, newValue) => {
    setView(newValue);
  };

  const toggleVisibility = (id) => {
    setVisibilityOption((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const xLabels = xLabelsMapping[view] || xLabelsYearly;

  const seriesData = [
    {
      data: dataMap[view].salesData,
      label: 'Sales Growth',
      id: 'sales',
      color: theme.palette.primary.main,
      visible: visibilityOption['sales']
    },
    {
      data: dataMap[view].targetData,
      label: 'Target',
      id: 'target',
      color: theme.palette.primary.light,
      visible: visibilityOption['target']
    }
  ];

  const visibleSeries = seriesData.filter((s) => s.visible);
  const lagendItems = seriesData.map((series) => ({ label: series.label, color: series.color, visible: series.visible, id: series.id }));

  // Dynamic styles for visible series
  const dynamicSeriesStyles = visibleSeries.reduce((acc, series) => {
    acc[`& .MuiLineElement-series-${series.id}`] = {
      markerEnd: `url(#${series.id})`
    };
    return acc;
  }, {});

  return (
    <MainCard sx={{ 
      height: '70vh', 
      backgroundColor: '#00579B', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'flex-end', 
      p: 2 
    }}>
      <Box>
          <OutlinedInput
            placeholder="Email Id"
            fullWidth
            error={Boolean()}
          />
      </Box>
    </MainCard>
  );
}
