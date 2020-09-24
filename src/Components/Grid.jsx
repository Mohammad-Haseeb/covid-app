import React,{useContext, useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TotalInformation from './TotalInformationBoxes';
import {CountryProvider,SelectedCountryData} from '../Management/CountryAvalable'
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
         const selectedCountryISO = useContext(CountryProvider);
         console.log("ISO CHECKER : ", selectedCountryISO[0])
         let [stat, setstat] = useState({})
         let Data4Graph=useContext(SelectedCountryData);
         
            useEffect(() => {
                async function StateCollector(){
                  
                               if(selectedCountryISO[0]==="Worldwide"){
                                 let ap=await fetch('https://disease.sh/v3/covid-19/all');
                                 let api= await ap.json();
                                 let y=await {deaths:api.deaths,
                                  todayDeaths:api.todayDeaths,
                                  cases:api.cases,
                                  todayCases:api.todayCases,
                                  recovered:api.recovered,
                                  todayRecovered:api.todayRecovered        
                           }
                                   setstat(y); 
                                 
                                 
                               }
                               else{
                                 let ap= await fetch(`https://disease.sh/v3/covid-19/countries/${selectedCountryISO[0]}?strict=true`);
                                 let api= await ap.json();
                                 let y=await {deaths:api.deaths,
                                  todayDeaths:api.todayDeaths,
                                  cases:api.cases,
                                  todayCases:api.todayCases,
                                  recovered:api.recovered,
                                  todayRecovered:api.todayRecovered        
                           }
                                 setstat(y);


                               
                           }
                               
                              

                       }

                       StateCollector()

            }, [selectedCountryISO[0]])

           

           
     


  return (
    <div className={classes.root}>
      
      { 
      
        Data4Graph[1](stat)

     
      }
      <Grid container spacing={2} justify="center">
        <Grid item xs={11} sm={3}>
        <Paper className={classes.paper}><TotalInformation Description="Coronavirus Cases" Numbers={stat.todayCases} total={stat.cases} color="blue"/></Paper>

        </Grid>
        <Grid item xs={11} sm={3}>
         
<Paper className={classes.paper}><TotalInformation Description="Recovered" Numbers={stat.todayRecovered} total={stat.recovered} color="green"/></Paper>

        
        </Grid>
        <Grid item xs={11} sm={3}>
<Paper className={classes.paper}><TotalInformation Description="Death" Numbers={stat.deaths} total={stat.todayDeaths} color="red"/></Paper>
          
        </Grid>
      </Grid>
    
    </div>
  );
}