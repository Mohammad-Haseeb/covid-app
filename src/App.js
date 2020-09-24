import React, { useEffect, useState } from 'react';
import SelectBar from './Components/Selectbar';
import NestedGrid from './Components/Grid'
import {CountryProvider,SelectedCountryData} from './Management/CountryAvalable';
import ChartAndDisplay from './Components/ChartAndTableDisply';

import './App.css'

export default function App(){
  let [contry,setCountry]=useState([]);
  let selected_Country=useState("Worldwide");
  let DataOfSelectCountry=useState({});
     useEffect(()=>{
       let SettingArray;
            async  function APICallingForContry(){
                 let Api=await fetch("https://disease.sh/v3/covid-19/countries");
                   let  CountryApi=await Api.json()
                   SettingArray=await CountryApi.map((x)=>{
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
     
    <div className="NestedGrid">
    <SelectedCountryData.Provider value={DataOfSelectCountry}>
    <NestedGrid/>
    <ChartAndDisplay/>
    </SelectedCountryData.Provider>
  

    </div >

    </CountryProvider.Provider>
    
    </>
  )
}