import  { createContext } from 'react';

export  let CountryProvider=createContext("Worldwide");
export let SelectedISO=createContext("");
export let SelectedCountryData=createContext({});