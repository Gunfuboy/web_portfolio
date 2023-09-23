import { Box, Container, List, ListItem, Typography } from "@mui/material";
import React from "react";
import "../styles/Home.css";
import { LinkedIn, Instagram, Facebook } from "@mui/icons-material";


function Home(){
    return(
        
        <Container maxWidth={false} disableGutters>
        {/* About section */}
        <Box className="about">
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
          <Typography variant="h1">Skills</Typography>
          <Box
            display="flex"
            flexDirection='column'
            justifyContent="space-evenly"
            alignItems="center"
            textAlign="center"
            className="list"
          >
            <Typography align="center" variant="h3">
              Frontend
            </Typography>
            <Typography align="center" variant="body1">
              ReactJS, HTML, CSS, TailWind
            </Typography>
            <Typography align="center" variant="h3">
              Backend
            </Typography>
            <Typography align="center" variant="body1">
              NodeJS, Java
            </Typography>
            <Typography align="center" variant="h3">
              Languages
            </Typography>
            <Typography align="center" variant="body1">
              TypeScript, Java, Python, C#, C, C++, JavaScript
            </Typography>
          </Box>
        </Box>
      </Container>
    );
}

export default Home;