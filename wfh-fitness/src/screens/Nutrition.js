import React from 'react';
import logo from '../logo.svg';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

export default function NutritionScreen() {
    return (
        <Paper elevation={6} style={{marginLeft: 50, marginRight: 50, marginTop: 50}}>
            <img src={logo} alt="mainImage" height="20%" width='20%'></img>
            <Typography variant="h6" className={'Nutrition'}>
              This section will come tomorrow, sorry bow dah!
            </Typography>
        </Paper>
    );
}