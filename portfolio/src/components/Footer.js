import React from 'react';
import { Instagram, LinkedIn, Facebook } from '@mui/icons-material';
import '../styles/Footer.css';

function Footer(){
    return(
        <div className='footer'>
            <div>
                <LinkedIn></LinkedIn>
                <Instagram></Instagram>
                <Facebook />
            </div>

        </div>
    )
}