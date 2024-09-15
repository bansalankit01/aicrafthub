import React,{useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import axios from 'axios';
import {Box, Typography, useTheme, useMediaQuery, TextField, Button, Alert, Collapse} from '@mui/material';


const Login = () => {
  const theme = useTheme();
  const navigate = useNavigate()
  // setting media querry
  const isNotMobile = useMediaQuery("(min-width: 1000px")

  //  setting states
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  // register control
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/v1/auth/login', {email,password});
        toast.success('Login Successfully');
        localStorage.setItem("authToken", true)
        navigate('/');
    } catch (err) {
      console.log(error);
      if(err.response.data.error){
        setError(err.response.data.error)
      } else if(err.message) {
        setError(err.message)
      } setTimeout(() => {setError("");}, 5000)
    }
  }

  return (
    <Box width={isNotMobile ? '40%' : '80%'} p={'2rem'} m={'2rem auto'} borderRadius={10} sx={{
      boxShadow: '0 8px 18px rgba(0, 123, 255, 0.5)', 
      background: 'linear-gradient(270deg, rgba(196, 228, 255, 0.5), rgba(154, 200, 205, 0.5))',
      backdropFilter: 'blur(20px)',
      transition: 'all 0.3s ease-in-out',
     '&:hover': {
       boxShadow: '0 12px 24px rgba(0, 123, 255, 0.7)',
     }
   }}>

      <Collapse in={error}>
        <Alert severity="error" sx={{ mb:2 }}>{error}</Alert>
      </Collapse>
      
       <form onSubmit={handleSubmit}>
        <Typography variant='h5' textAlign={'center'}>Sign In</Typography>
        <TextField label="email" type='email' required margin='normal' fullWidth value={email} onChange={ (e) => {setEmail(e.target.value);}}/>
        <TextField label="password" type='password' required margin='normal' fullWidth value={password} onChange={ (e) => {setPassword(e.target.value);}}/>
        <Button 
          type='submit' 
          fullWidth 
          variant='contained' 
          size='large' 
          sx={{ 
            color: 'white', 
            mt: 2, 
            background: 'linear-gradient(90deg, #43cea2, #185a9d)', 
            boxShadow: '0 4px 8px rgba(0, 123, 255, 0.5)', 
            '&:hover': { 
              background: 'linear-gradient(90deg, #185a9d, #43cea2)',
              boxShadow: '0 6px 12px rgba(0, 123, 255, 0.7)',
            }
          }}
        >
          Sign In
        </Button>
        <Typography mt={2}>
           Don't have an account ?  <Link to="/register">Register</Link>
        </Typography>
       </form>

    </Box>
  );
};

export default Login;