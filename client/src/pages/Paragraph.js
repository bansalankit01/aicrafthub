import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
import axios from "axios";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  TextField,
  Button,
  Alert,
  Collapse,
  Card,
} from "@mui/material";

const Paragraph = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  //media
  const isNotMobile = useMediaQuery("(min-width: 1000px)");
  
  // states
  const [text, settext] = useState("");
  const [para, setPara] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  //register ctrl
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/v1/openai/paragraph", { text });
      setLoading(false);
      console.log(data);
      setPara(data);
    } catch (err) {
      console.log(error);
      if (err.response.data.error) {
        setError(err.response.data.error);
      } else if (err.message) {
        setError(err.message);
      }
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };
  return (
    <Box
      width={isNotMobile ? "40%" : "80%"}
      p={"2rem"}
      m={"3rem auto"}
      borderRadius={5}
      sx={{ 
        boxShadow: 5,
        background: "linear-gradient(270deg, #E49BFF, #A0DEFF)",
        opacity: '70%', 
        width: '60rem',
        }}
    >
      <Collapse in={error}>
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      </Collapse>
      <form onSubmit={handleSubmit}>
        <Typography variant="h4" sx={{
          color: '#FF0080',
          fontWeight: 'bold',
        }}
        >
        Generate Paragraph
        </Typography>

        <TextField
          placeholder="add your text here"
          type="text"
          multiline={true}
          required
          margin="normal"
          fullWidth
          value={text}
          onChange={(e) => {
            settext(e.target.value);
          }}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          size="large"
          sx={{ 
            color: "white", 
            borderRadius: "10px",
            height: "50px",
            backgroundColor: "#f40651",
            mt: 2, 
            }}
        >
          Generate
        </Button>
        <Typography mt={2} color={'black'}>
          not this tool ? <Link to="/">GO BACK</Link>
        </Typography>
      </form>

      {para ? (
        <Card
          sx={{
            mt: 4,
            border: 1,
            boxShadow: 0,
            minHeight: "11rem",
            borderRadius: 5,
            borderColor: "natural.medium",
            bgcolor: "background.default",
          }}
        >
          <Typography p={2}>{para}</Typography>
        </Card>
      ) : (
        <Card
          sx={{
            mt: 2,
            border: 1,
            boxShadow: 0,
            minHeight: "11rem",
            borderRadius: 5,
            borderColor: "natural.medium",
            bgcolor: "background.default",
          }}
        >
          <Typography
            variant="h5"
            color="natural.main"
            sx={{
              textAlign: "center",
              verticalAlign: "middel",
              lineHeight: "150px",
            }}
          >
            {loading
            ? "Generating Paragraph....." : "Your Paragraph Will be Appear Here.........."}
          </Typography>
        </Card>
      )}
    </Box>
  );
};

export default Paragraph;