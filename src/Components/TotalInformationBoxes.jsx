import React from 'react';
import '../App.css';
import Box from '@material-ui/core/Box';

export default function  TotalInformation(props){
  let backgroundColor=props.color==="green" ?"colorgreen":props.color==="blue" ?"colorblue":"colorred";
  let textColor=props.color==="green" ?"textgreen":props.color==="blue" ?"textblue":"textred";
  

  return(
    <>
       <div className={backgroundColor}>{}</div>
    <h4 className="description">{props.Description}</h4>
      <h2 className={textColor}>{props.Numbers}</h2>
      <h5 className="total">{props.total}</h5>
     
    
    </>
  );
}