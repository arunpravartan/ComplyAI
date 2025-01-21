import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import DrawerMenu from '../drawer/DrawerMenu';
import { Button, Divider, Stack, List, ListItem, TextField, IconButton } from '@mui/material';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import ShareIcon from '@mui/icons-material/Share';
import EditIcon from '@mui/icons-material/Edit';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
import PropTypes from 'prop-types';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

const PromptQuestionAnswer = () => {
    const [question, setQuestion] = useState("");
    const [response, setResponse] = useState("");
    const [isPreloader, setIsPreloader] = useState(false);
    const [progress, setProgress] = React.useState(0);
    const [message, setMessage] = React.useState('');

    const handleInputChange = (e) => {
        setQuestion(e.target.value);
    };
    
    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });
    
    
    function CircularProgressWithLabel(props) {
        return (
          <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress variant="determinate" {...props} />
            <Box
              sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="caption" component="div" color="text.secondary">
                {`${Math.round(props.value)}%`}
              </Typography>
            </Box>
          </Box>
        );
    }
      
      CircularProgressWithLabel.propTypes = {
        /**
         * The value of the progress indicator for the determinate variant.
         * Value between 0 and 100.
         * @default 0
         */
        value: PropTypes.number.isRequired,
      };

    const handleSubmit = async () => {
        if (!question.trim()) {
            alert("Please enter a question.");
            return;
        }

        setIsPreloader(true);
        try {
            const res = await fetch("/knowledgehub/ask", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ question }),
            });

            if (!res.ok) {
                throw new Error("Failed to fetch response from server");
            }

            const data = await res.json();
            // const data = { response: "This is a sample response to the question." };
            // let timer, progressPercentage = 0, isDataFetch = false;
            if (data && data?.response) {
                setResponse(data.response);
                // timer = setInterval(() => {
                //     if (progressPercentage >= 100 && !isDataFetch) {
                //         clearInterval(timer);
                       
                //         setIsPreloader(false);
                //         isDataFetch = true;
                //     } else {
                //         const diff = Math.random() * 10;
                //         progressPercentage = Math.min(progressPercentage + diff, 100);
                //         setProgress(progressPercentage);
                //     }
                // }, 100);
            }
        } catch (err) {
            alert(err.message || "An error occurred");
        } finally {
            //setIsPreloader(false);
        }
    };

    const handleShareClick = () => {
        const textToShare = document.querySelector('.que-ans-content')?.textContent || '';
    
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
        const textToCopy = document.querySelector('.que-ans-content').textContent;
        navigator.clipboard.writeText(textToCopy);
        alert("Copied to clipboard");
    }
    return (
        <Box className="main prompt-que-ans-page">
            <Box sx={{ display: 'flex' }}>

                <DrawerMenu />

                <Box component="main" className="complyai-main">
                    <Box className="complyai-wrapper">
                        {/* Mobile drawer menu */}
                        <Box className="mobile-menu" sx={{ display: { xs: 'block', sm: 'none' } }}>
                            <IconButton>
                                <MenuIcon />
                            </IconButton>
                        </Box>
                        <Box className="complyai-container" sx={{ justifyContent: 'flex-start!important' }}>
                            <Box className="que-ans-main">
                                <Typography variant='h4' className="main-title">Ask queries from knowledge base</Typography>
                                <Divider />
                                {/* <Box mt={2} sx={{ textAlign: 'center' }} className={!isPreloader ? 'visible-hidden' : ""}>
                                    <CircularProgressWithLabel value={progress} />
                                </Box> */}
                                <Box className={!response ? 'que-ans-wrapper visible-hidden' : "que-ans-wrapper"} mt={1} >
                                    <Box className="que-ans-content">
                                        <Typography>{response}</Typography>
                                    </Box>
                                    <Box className="copy-share-btn-wrapper">
                                        <Stack direction="row" justifyContent={'space-between'}>
                                            <Stack direction="row" spacing={2}>
                                                <Button startIcon={<ContentCopyOutlinedIcon />} className="icon-btn" onClick={() => { handleCopyClick() }} >Copy</Button>
                                                <Button startIcon={<EditIcon />} className="icon-btn">Rewrite</Button>
                                            </Stack>
                                            <Button startIcon={<ShareIcon />} onClick={() => { handleShareClick() }} className="icon-btn">Share</Button>
                                        </Stack>
                                    </Box>
                                </Box>
                                <Box mt={1}>
                                    <TextField
                                        id="outlined-multiline-flexible"
                                        multiline
                                        value={question}
                                        onChange={handleInputChange}
                                        rows={2}
                                        placeholder='Type your queries related to Internal procedures , external guidelines or other Quality documents'
                                        fullWidth
                                    />
                                </Box>

                                <Box sx={{ margin: '1rem 0', textAlign: 'center' }}>
                                    <Button
                                        type="button"
                                        variant="contained"
                                        onClick={handleSubmit}
                                        sx={{ width: '150px', borderRadius: '12px' }}
                                        disableRipple>Submit</Button>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default PromptQuestionAnswer
