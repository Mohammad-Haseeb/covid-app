import React,{useEffect,useState} from 'react';
import TotalCases from './Components/TotalCasesDisplay';
import './App.css'
import SimpleSelect from './Components/SearchBar';

function App(){
  const [state, setstate] = useState([])
         useEffect(()=>{
                  async function GetingData(){
                      let apiCalling4AlCountries=await fetch("https://disease.sh/v3/covid-19/countries");
                       let Data4Countries=await apiCalling4AlCountries.json();
                         let completeCountryData=Data4Countries.map((countryName)=>({
                          name :  countryName.country,
                          value : countryName.countryInfo.iso2,
                         }));
                         setstate(completeCountryData);


                   }
                   GetingData();
         },[])






  return(
    <> 
          <div className="SimpleSearch">
              <SimpleSelect countryData={state}/>
          </div>
    <TotalCases /> 

    </>

        
     );
}
export default App;