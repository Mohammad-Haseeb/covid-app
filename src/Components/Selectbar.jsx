import React,{useState,useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {CountryProvider} from '../Management/CountryAvalable'

const useStyles = makeStyles((theme) => ({
    Centeralize:{
    
      width:"100px",
      height:"100px",
      margin:"0 auto",
    },
  formControl: {
    
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function SelectBar({country}) {
    
  
    



      
  const classes = useStyles();
  const [CountryISO, setCountryISO] = useState('');
  const [open, setOpen] = useState(false);
  const context = useContext(CountryProvider);
  context[1](CountryISO)
  const handleChange = (event) => {
    setCountryISO(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      
          

         <div className={classes.Centeralize}>  
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Age</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={CountryISO}
          onChange={handleChange}>
          <MenuItem value="Worldwide">
            <em>Worldwide</em>
          </MenuItem>
          
        { 
         country.map((country,ind)=>{
                  return <MenuItem value={country.iso} key={ind}>{country.country}</MenuItem>
                  })
             }
          
         
        
        </Select>
      </FormControl>

      {
                 
                      
              }
   
     
      </div>
     
    </div>

  );
}
