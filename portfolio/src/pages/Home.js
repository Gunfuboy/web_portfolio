import { Box, Container, Typography } from "@mui/material";
import React from "react";
import "../styles/Home.css";
import { LinkedIn, Instagram, Facebook, Margin } from "@mui/icons-material";


function Home(){
    return(
        
      <Container maxWidth={false}  disableGutters>
        {/* About section */}
        <Box className="about">
          <Box sx={{margin: 10}}/>
          <Typography variant="h2">My name is</Typography> 
          <Typography variant="h1">Andrew Wei</Typography>
          <Typography variant="h3">Bonjour, hi.</Typography>
          <Box className="about-sub">
            <Typography variant="h4">I am a student and full-stack developer from Montreal, Canada.</Typography>
            <LinkedIn />
            <Instagram />
            <Facebook />
          </Box>
        </Box>
        {/* Skills section */}
        <Box className="skills">
          <Box sx={{margin: 4}}/>
          <Typography variant="h2">I am</Typography>
          <Typography variant="h1">Forever curious, Enlessly ambitious.</Typography>
          
          <Box className="list">
            <Typography align="center" variant="h1" >
              Frontend
            </Typography>
            <Typography align="center" variant="h2" >
              ReactJS, HTML, CSS, TailWind
            </Typography>
            <Box sx={{margin: 4}}/>
            <Typography align="center" variant="h1" >
              Backend
            </Typography>
            <Typography align="center" variant="h2">
              NodeJS, Java
            </Typography>
            <Box sx={{margin: 4}}/>
            <Typography align="center" variant="h1" >
              Languages
            </Typography>
            <Typography align="center" variant="h2">
              TypeScript, Java, Python, C#, C, C++, JavaScript
            </Typography>
          
          </Box>
        </Box>
      </Container>
    );
}

export default Home;