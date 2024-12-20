import * as React from 'react';
import { Link as RouterLink } from "react-router-dom";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Card, CardContent, Grid, Stack } from '@mui/material';
import documentValidation from '../../assets/document-validation.png'
import knowledgeAgent from '../../assets/knowledge-agent.png'
import predictiveAnalytics from '../../assets/predictive-analytics.png'
import DrawerMenu from '../drawer/DrawerMenu';
import MobileDrawerMenu from '../drawer/MobileDrawerMenu';

  

const Dashboard = () => {    

    return (
        <Box className="main">
            <Box  sx={{ display: 'flex' }}>
                
                <DrawerMenu  />

                <Box component="main" className="complyai-main">   
                    <Box className="complyai-wrapper">
                        {/* Mobile drawer menu */}
                        <Box className="mobile-menu" mb={1} sx={{ display: { xs: 'block', sm: 'block', md: 'none' } }}>
                            <MobileDrawerMenu />                            
                        </Box>

                        <Box className="complyai-container">
                            <Typography variant='h2' className="title">Comply AI</Typography>

                            <Grid container spacing={4}>
                                <Grid item xs={12} sm={4} md={4}>
                                    <Card 
                                        className="dashboard-card" 
                                        component={RouterLink}
                                        to="/audit-checker"
                                        sx={{textDecoration: 'none', minWidth: '100%'}} >
                                        <CardContent sx={{p: 0}}>    
                                            <Stack spacing={1.5}>
                                                <Box className="icon">
                                                    <img alt="edit" width='80px' src={documentValidation} />
                                                </Box>
                                                <Typography variant="h5" component="div" className="card-title">
                                                    Document validation
                                                </Typography>
                                                
                                                <Typography variant="body2" className="info-text">
                                                    Validate regulatory requirements and internal policies
                                                </Typography>
                                            </Stack>
                                        </CardContent>
                                    </Card>
                                </Grid>

                                <Grid item xs={12} sm={4} md={4}>
                                    <Card className="dashboard-card"
                                        component={RouterLink}
                                        to="/prompt-question-answer"
                                        sx={{textDecoration: 'none', minWidth: '100%'}} >
                                        <CardContent sx={{p: 0}}>    
                                            <Stack spacing={2}>
                                                <Box className="icon">
                                                    <img alt="edit" width='80px' src={knowledgeAgent} />
                                                </Box>
                                                <Typography variant="h5" component="div" className="card-title">
                                                    Knowledge agent
                                                </Typography>
                                                
                                                <Typography variant="body2" className="info-text">
                                                    Ask anything about  regulatory compliance topics
                                                </Typography>
                                            </Stack>
                                        </CardContent>
                                    </Card>
                                </Grid>

                                <Grid item xs={12} sm={4} md={4}>
                                    <Card className="dashboard-card" sx={{minWidth: '100%'}}>
                                        <CardContent sx={{p: 0}}>    
                                            <Stack spacing={2}>
                                            <Box className="icon">
                                                    <img alt="edit" width='80px' src={predictiveAnalytics} />
                                                </Box>
                                            
                                                <Typography variant="h5" component="div" className="card-title">
                                                    Predictive  Analytics
                                                </Typography>
                                                
                                                <Typography variant="body2" className="info-text">
                                                    Get real time insights for decision making
                                                </Typography>
                                            </Stack>
                                        </CardContent>
                                    </Card>
                                </Grid>

                            </Grid>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>        
    )
}

export default Dashboard
