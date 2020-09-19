import React, { useEffect, useState } from 'react';
import SelectBar from './Components/Selectbar';

export default function App(){
  let [contry,setCountry]=useState([]);
     useEffect(()=>{
            async  function APICallingForContry(){
                 let Api=await fetch("https://disease.sh/v3/covid-19/countries");
                   let  CountryApi=await Api.json()
                   let SettingArray=CountryApi.map((x)=>{
                    return({
                      "country":x.country,
                      "iso":x.countryInfo.iso2,
                      
                    })

                   })
                   setCountry(SettingArray);


             }

             APICallingForContry()
                                               
     },[])


  return(
    <>
  
    <SelectBar country={contry}/>
    
    </>
  )
}