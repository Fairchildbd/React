import React from 'react';
import logo from '../logo.svg';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

export default function MultipleEquipmentScreen() {
    return (
        <Paper elevation={6} style={{marginLeft: 50, marginRight: 50, marginTop: 50}}>
            <img src={logo} alt="mainImage" height="50%" width='50%'></img>
            <Typography variant="h6" className={'Nutrition'}>
              Got tons of equipments!
            </Typography>
        </Paper>
    );
}