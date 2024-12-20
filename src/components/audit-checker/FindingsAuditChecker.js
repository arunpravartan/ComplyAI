import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import DrawerMenu from '../drawer/DrawerMenu';
import { Button, Divider, Stack } from '@mui/material';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import ShareIcon from '@mui/icons-material/Share';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useLocation } from "react-router-dom";
  

const FindingsAuditChecker = () => {
    const location = useLocation();
    const findings = location.state?.auditData;
    const fileName = location.state?.fileName;

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

  const handlePrintClick = () => {
    const textToPrint = document.querySelector('.findings-text').textContent;
    window.print(textToPrint);
  }

    return (
        <Box className="main">
            <Box  sx={{ display: 'flex' }}>
                
                <DrawerMenu />

                <Box component="main" className="complyai-main">                    
                    <Box className="complyai-wrapper">
                        {/* Mobile drawer menu */}
                        <Box className="mobile-menu" sx={{ display: { xs: 'block', sm: 'none' } }}>
                            <IconButton>
                                <MenuIcon />
                            </IconButton>
                        </Box>

                        <Box className="complyai-container" sx={{justifyContent: 'flex-start!important'}}>
                            <Box className="findings-audit-checker-main">
                                <Typography variant='h4' className="main-title">Findings of Audit Checker</Typography>
                                <Divider />
                                <Box className="findings-audit-wrapper" mt={2}>
                                    <Box mb={1.5}>
                                        <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent={'space-between'} alignItems={{ xs: 'flex-start', sm: 'center' }} spacing={{ xs: 2, sm: 0 }} sx={{width: '100%'}}>
                                            <Typography>Document Name : <Typography variant='p' className="bold">{fileName}</Typography></Typography>
                                            <Typography> Date : <Typography variant='p' className="bold">{new Date().toLocaleDateString()}</Typography></Typography>
                                        </Stack>
                                    </Box>
                                    <Box className="findings-audit-content">
                                        <Stack spacing={2} className="findings-text">
                                        {findings.map((finding, index) => (
                                            <Box >
                                                <Typography>{index + 1}. Finding {index + 1} :</Typography>
                                                <Typography>{finding.issue}</Typography>
                                                <Typography><strong>Recommendation :</strong> {finding?.recommendation}</Typography>
                                            </Box>
                                        ))}
                                        </Stack>
                                    </Box>
                                    <Box className="copy-share-btn-wrapper">
                                        <Stack direction="row" justifyContent={'flex-end'} spacing={{ xs: 1, sm: 4 }}>
                                            <Button startIcon={<ContentCopyOutlinedIcon />} className="icon-btn" onClick={() => { handleCopyClick() }}  disableRipple>Copy</Button>
                                            <Button startIcon={<ShareIcon />} className="icon-btn" onClick={() => { handleShareClick() }} disableRipple>Share</Button>
                                        </Stack>
                                    </Box>
                                </Box>

                                <Box sx={{margin: '1rem 0'}}>
                                    <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent={'space-evenly'} spacing={1}>
                                        <Button 
                                            type="button" 
                                            variant="contained" 
                                            sx={{width: '150px', borderRadius: '12px'}}
                                            onClick={() => { handleDownloadClick() }}
                                            disableRipple>Download</Button>
                                        <Button 
                                            type="button" 
                                            variant="contained" 
                                            sx={{width: '150px', borderRadius: '12px'}}
                                            onClick={() => { handlePrintClick() }}
                                            disableRipple>Print</Button>
                                    </Stack>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>        
    )
}

export default FindingsAuditChecker
