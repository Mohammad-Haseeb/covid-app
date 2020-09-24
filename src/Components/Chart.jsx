import React, { useContext } from 'react';
import {Pie} from 'react-chartjs-2';
import {SelectedCountryData} from '../Management/CountryAvalable'


export default function Chart(){
	const GraphData = useContext(SelectedCountryData)
   
	const data = {
		labels: [
			'Cases',
			'Recovered',
			'Deaths'
		],
		datasets: [{
			// data: [GraphData[0].cases, GraphData[0].deaths, GraphData[0].recovered]
			data:[GraphData[0].cases,GraphData[0].recovered,GraphData[0].deaths],
			backgroundColor: [
			'#FF6384',
			'#36A2EB',
			'#FFCE56'
			],
			hoverBackgroundColor: [
			'#FF6384',
			'#36A2EB',
			'#FFCE56'
			]
		}]
	};
    return(
		
        <div>
			{
			console.log("Data Gaph  ye : ",GraphData)
		}
        <h2>Pie Example</h2>
	<p>{` ${data.datasets.data}`}</p>
        <Pie data={data} />
      </div>
    );
}
