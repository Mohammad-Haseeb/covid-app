import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TotalInformation from './TotalInformationBoxes';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(0),
    
  },
}));

export default function NestedGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2} justify="center">
        <Grid item xs={3}>
        <Paper className={classes.paper}><TotalInformation Description="Coronavirus Cases" Numbers="098" total="987" color="blue"/></Paper>

        </Grid>
        <Grid item xs={3}>
         
<Paper className={classes.paper}><TotalInformation Description="Recovered" Numbers="098" total="987" color="green"/></Paper>

        
        </Grid>
        <Grid item xs={3}>
<Paper className={classes.paper}><TotalInformation Description="Death" Numbers="098" total="987" color="red"/></Paper>
          
        </Grid>
      </Grid>
    
    </div>
  );
}