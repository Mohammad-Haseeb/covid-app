import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop:"30px",
    width:"94%",
    marginLeft:"6px",
    
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function TotalCases() {
  const classes = useStyles();
     function Details(){
       return(
         <>
         <p>Coronavirus</p>
         <h1>+2.8K</h1>
         <p>3.0 Total</p>
         </>
       );
     }     

  return (
    <div className={classes.root}>
      <Grid container spacing={7} justify="center">
       
        <Grid item xs={12} sm={4}  >
  <Paper className={classes.paper}>{<Details/>}</Paper>
        </Grid>
        <Grid item xs={12} sm={4}  >
          <Paper className={classes.paper}>{<Details/>}</Paper>
        </Grid>
        <Grid item xs={12} sm={4}  >
          <Paper className={classes.paper}>{<Details/>}</Paper>
        </Grid>
       
      </Grid>
    </div>
  );
}
