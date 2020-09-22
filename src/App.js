import React, { useEffect, useState } from 'react';
import SelectBar from './Components/Selectbar';
import NestedGrid from './Components/Grid'
import {CountryProvider} from './Management/CountryAvalable';

export default function App(){
  let [contry,setCountry]=useState([]);
  let selected_Country=useState("Worldwide");
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
       <CountryProvider.Provider value={selected_Country}>
    <SelectBar country={contry}/>
    <NestedGrid/>
    </CountryProvider.Provider>
    
    </>
  )
}