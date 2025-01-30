import React, { useState, useEffect, useRef } from "react";
import { TextField, Button, Box, Grid, Stack, Typography, Card, CircularProgress, Drawer, List, ListItem, ListItemButton, ListItemText, IconButton } from "@mui/material";
import { FormControl } from "@mui/base";
import Download from '@mui/icons-material/Download';
import Share from '@mui/icons-material/Share';
import History from '@mui/icons-material/History';
import AddToPhotos from '@mui/icons-material/AddToPhotos';
import BorderColor from '@mui/icons-material/BorderColor';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';
import { identity } from "lodash";
import { ArrowForward, ArrowForwardIos } from "@mui/icons-material";

const ChatInput = () => {
  let scrollRef = useRef(null);
  const [question, setQuestion] = useState("");
  const [responseHistory, setResponseHistory] = useState([]);
  const [preLoading, setPreLoader] = useState(false);
  const [editKey, setEdit] = useState(null);
  const [ans, setAnswer] = useState("");

  useEffect(() => {
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [responseHistory]);

  const handleQuestionSubmit = () => {
    if (!question) return;
    setPreLoader(true);
    setQuestion("");
    getResponse(question);
  };
  const getResponse = async (question) => {
    try {
      // const res = await fetch("/knowledgehub/ask", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ question }),
      // });

      // if (!res.ok) {
      //   throw new Error("Failed to fetch response from server");
      // }

      // const data = await res.json();
      
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const data = { response: "To make the white box match the width of the Grid item while keeping it positioned at the bottom of the screen, you need to ensure the Stack takes up the width of the Grid item it's inside." }
      if (data && data?.response) {
        setAnswer(data?.response);
        setResponseHistory([...responseHistory, {
            id: Date?.now(),
            question,
            answer: data?.response
          }]);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setPreLoader(false);
    }
  };
  const handleCopyClick = (text) => {
    // const textToCopy = document.querySelector('.que-ans-content').textContent;
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard");
  };

  const handleShareClick = (text) => {
    // const textToShare = document.querySelector('.que-ans-content')?.textContent || '';
    const encodedText = encodeURIComponent(text);
    if (navigator.share) {
      navigator
        .share({
          title: 'Findings to Share',
          text: text,
        })
        .catch((error) => console.error('Sharing failed', error));
    } else {
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

  const handleEditClick = (key, value) => {
    setEdit(key);
    setAnswer(value);
  };

  const handleSave = (key, value) => {
    setEdit(null);
    setResponseHistory((prevHistory) => ({
      ...prevHistory,
      [key]: value,
    }));
  };

  // Store refs for each question
  const messageRefs = useRef({});

  const scrollToQuestion = (id) => {
    if (messageRefs.current[id]) {
      messageRefs.current[id].scrollIntoView({ behavior: "smooth", block: "center" });
  
      // Highlight effect
      messageRefs.current[id].style.background = "#E3EFF9";
      setTimeout(() => {
        messageRefs.current[id].style.background = ""; // Remove highlight
      }, 1200);
    }
  };

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid xs={0} md={3} sx={{ padding: 0, backgroundColor: "#d3d3d3", display: { xs: "none", sm: 'none', md: 'block' } }}>
          <Box className="hide-scroll" sx={{
            height: '76vh', 
            padding: 1,
            overflowY: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            '&::-webkit-scrollbar': {
              display: 'none',
            }
          }}>
            { !responseHistory?.length ?
                <Box sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  // height: '100%',
                  color: '#b0afaf'
                }}>
                  <Typography variant="h6">No question asked.</Typography>
                </Box>
              : null }
            { responseHistory?.length ?
            <List sx={{ color: "black" }}>
              { [...responseHistory].reverse()?.map((item, index) => (
                <ListItem key={ `ques-${index}` }
                disableGutters
                onClick={() => scrollToQuestion(item?.id)}
                secondaryAction={
                  <IconButton aria-label="comment">
                    <ArrowForwardIos fontSize="12px"  />
                  </IconButton>
                } sx={{ bgcolor: 'background.paper', mb: 1 }} >
                  <ListItemText sx={{ paddingLeft: 1 }} primary={item?.question} />
                </ListItem>
              )) }
            </List> : null }
          </Box>
        </Grid>
        <Grid item xs={12} md={9}>
          <Box >
            <Stack className="hide-scroll" ref={scrollRef} sx={{
              height: '68vh', 
              overflowY: 'auto',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              '&::-webkit-scrollbar': {
                display: 'none',
              }
            }}>
              { !responseHistory?.length ?
                <Box sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                  color: '#b0afaf'
                }}>
                  <Typography variant="h3">What can I help with?</Typography>
                </Box>
              : null }
              {responseHistory?.map(({ id, question, answer }) => (
                <Stack
                  key={id}
                  sx={{
                    padding: "10px",
                    marginBottom: "10px",
                    width: "100%",
                  }}
                  spacing={2}
                  ref={(el) => (messageRefs.current[id] = el)}
                >
                  <Stack sx={{ width: "100%", alignItems: "flex-end" }} >
                    <Card sx={{ width: "30%", padding: "10px", bgcolor: "white", borderRadius: "8px 0px 8px 8px" }} >
                      <Typography variant="body1">
                        {question}
                      </Typography>
                    </Card>
                  </Stack>
                  <Stack sx={{ width: "100%", alignItems: "flex-start" }}>
                    <Card sx={{ padding: "10px", width: "80%", bgcolor: "white", borderRadius: "0px 8px 8px 8px" }}>
                      {editKey === id ?
                        <FormControl fullWidth>
                          <TextField
                            variant="standard"
                            value={answer}
                            multiline
                            placeholder="Ask me anything"
                            InputProps={{ disableUnderline: true }}
                            onChange={(e) => setQuestion(e.target.value)}
                            sx={{
                              flex: 1,
                              marginRight: "10px",
                              fontSize: "14px",
                              "& input::placeholder": { color: "darkgrey" },
                              backgroundcolor: "black",
                              width: "100%"
                            }}
                          />
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "flex-end",
                            }}>
                            <Button
                              variant="contained"
                              sx={{
                                color: "white",
                                borderRadius: "5px",
                                padding: "10px 20px",
                                textTransform: "none",
                                fontSize: "16px",
                                fontWeight: "bold",
                                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                                background: "linear-gradient(to bottom, #25BAA2 0%, #0B749D 90%, #00579B 100%)",
                                "&:hover": {
                                  background: "linear-gradient(to bottom, #25BAA2 0%, #0B749D 90%, #00579B 100%)",
                                  boxShadow: "0px 5px 8px rgba(0, 0, 0, 0.15)",
                                },
                              }}
                              onClick={() => handleSave(id)}
                              startIcon={<CheckIcon />}
                            >
                            </Button>
                          </Box>
                        </FormControl> :
                        <Box>
                          <Typography variant="body1">
                            {answer}
                          </Typography>
                          <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", marginTop: "12px" }}>
                            {/* <Box sx={{ display: "flex", gap: 3 }}>
                              <ContentCopyIcon sx={{ fontSize: "1rem", cursor: "pointer", marginRight: "10px" }} onClick={() => handleCopyClick(answer)} />
                              <BorderColor sx={{ fontSize: "1rem", cursor: "pointer" }} onClick={() => handleEditClick(id)} />
                            </Box> */}
                            <ContentCopyIcon sx={{ fontSize: "1rem", cursor: "pointer", marginRight: "10px" }} onClick={() => handleCopyClick(answer)} />
                            <Share sx={{ fontSize: "1rem", cursor: "pointer", marginRight: "5px" }} onClick={() => handleShareClick(answer)} />
                          </Box>
                        </Box>
                      }
                    </Card>
                  </Stack>
                </Stack>
              ))}
            </Stack>
            {/* ask me textfield & send button */}
            <Stack>
              <FormControl fullWidth>
                <Box
                  sx={{
                    display: "flex",
                    backgroundColor: "white",
                    borderRadius: "5px",
                    padding: "5px 10px",
                    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <TextField
                    variant="standard"
                    value={question}
                    placeholder="Ask me anything"
                    InputProps={{ disableUnderline: true }}
                    onChange={(e) => setQuestion(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleQuestionSubmit(); // Call the submit function when Enter is pressed
                      }
                    }}
                    sx={{
                      flex: 1,
                      marginRight: "10px",
                      fontSize: "14px",
                      "& input::placeholder": { color: "darkgrey" },
                    }}
                  />
                  <Button
                    variant="contained"
                    sx={{
                      color: "white",
                      borderRadius: "5px",
                      padding: "10px 20px",
                      textTransform: "none",
                      fontSize: "16px",
                      fontWeight: "bold",
                      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                      background: "linear-gradient(to bottom, #25BAA2 0%, #0B749D 90%, #00579B 100%)",
                      "&:hover": {
                        background: "linear-gradient(to bottom, #25BAA2 0%, #0B749D 90%, #00579B 100%)",
                        boxShadow: "0px 5px 8px rgba(0, 0, 0, 0.15)",
                      },
                    }}
                    onClick={() => handleQuestionSubmit()}
                  >
                    Send
                  </Button>
                </Box>
              </FormControl>
            </Stack>
          </Box>
        </Grid>
      </Grid>
      {/* preloading */}
      <Drawer
        anchor="left"
        open={preLoading}
      >
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            backdropFilter: "blur(0px)",
            zIndex: 1300,
          }}
        >
          <CircularProgress />
        </Box>
      </Drawer>
    </Box>
  );
};

export default ChatInput;
