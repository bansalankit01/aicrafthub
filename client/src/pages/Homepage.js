import React from 'react';
import { Box, Typography, Card, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DescriptionRounded from '@mui/icons-material/DescriptionRounded';
import FormatAlignLeftOutlined from '@mui/icons-material/FormatAlignLeftOutlined';
import ChatRounded from '@mui/icons-material/ChatRounded';
import CodeRounded from '@mui/icons-material/CodeRounded';
import '../homepage.css'; // Import the CSS file

const Homepage = () => {
  const navigate = useNavigate();
  const boxCardStyle = { textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer", color:"#2CD3E1" }

  const topContStyle = {}

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 5, p: 4, mt: 10, ...topContStyle }} className="topCont">
      <Box p={2} sx={boxCardStyle}>
        <Typography variant='h5' mb={2} fontWeight="bold">
          Text Generation
        </Typography>
        <Card
          className="card"
          onClick={() => navigate('/summary')}
        >
          <DescriptionRounded className="card-icon" sx={{color:"#E72929"}}/>
          <Stack className="card-content">
            <Typography fontWeight="bold" variant='h6'>Text Summary</Typography>
            <Typography variant='h6'>
              Summarize long text into short sentences.
            </Typography>
          </Stack>
        </Card>
      </Box>

      <Box p={2} sx={boxCardStyle}>
        <Typography variant='h5' mb={2} fontWeight="bold">
          Paragraph Generation
        </Typography>
        <Card
          className="card"
          onClick={() => navigate('/paragraph')}
        >
          <FormatAlignLeftOutlined className="card-icon" sx={{color:"#FF0080"}}/>
          <Stack className="card-content">
            <Typography fontWeight="bold" variant='h6'>Paragraph</Typography>
            <Typography variant='h6'>
              Generate paragraphs with words.
            </Typography>
          </Stack>
        </Card>
      </Box>

      <Box p={2} sx={boxCardStyle}>
        <Typography variant='h5' mb={2} fontWeight="bold">
          AI Chatbot
        </Typography>
        <Card
          className="card"
          onClick={() => navigate('/chatbot')}
        >
          <ChatRounded className="card-icon" sx={{color:"#892CDC"}}/>
          <Stack className="card-content">
            <Typography fontWeight="bold" variant='h6'>Chatbot</Typography>
            <Typography variant='h6'>
              Chat with AI Chatbot
            </Typography>
          </Stack>
        </Card>
      </Box>

      <Box p={2} sx={boxCardStyle}>
        <Typography variant='h5' mb={2} fontWeight="bold">
          JavaScript Converter
        </Typography>
        <Card
          className="card"
          onClick={() => navigate('/js-converter')}
        >
          <CodeRounded className="card-icon" sx={{color:"#FF8911"}}/>
          <Stack className="card-content">
            <Typography fontWeight="bold" variant='h6'>JS Converter</Typography>
            <Typography variant='h6'>
              Translate English to JavaScript Code
            </Typography>
          </Stack>
        </Card>
      </Box>
    </Box>
  );
};

export default Homepage;
