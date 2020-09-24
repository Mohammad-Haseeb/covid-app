import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Chart from './Chart';
import BasicTable from './Table';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    marginLeft:"9px",
    color: theme.palette.text.secondary,
  },
}));

export default function ChartAndDisplay() {
  const classes = useStyles();
       





  
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>

        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}><Chart/></Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}><BasicTable/></Paper>
        </Grid>
      
      </Grid>
    </div>
  );
}
