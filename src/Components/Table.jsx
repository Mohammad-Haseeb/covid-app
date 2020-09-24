import React, { useEffect ,useState} from 'react';
import {withStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";




const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 9
  }
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover
    }
  }
}))(TableRow);

function createData(name, calories) {
  return { name, calories };
}
const rows = [

];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  table: {
    minWidth: 100,
    maxHeight: 400
  },
  fonting:{
    fontSize:"19px",
    fontFamily: 'Oswald',
  },
  gridList: {
    width: "auto",
    height: "auto",
  },
}));
export default function BasicTable(){
  const [TableData, setTableData] = useState([])
     
  useEffect(()=>{
    let SettingArray;
         async  function APICallingForContry(){
              let Api=await fetch("https://disease.sh/v3/covid-19/countries");
                let  CountryApi=await Api.json()
                SettingArray=await CountryApi.map((x)=>{
                 return({
                   "country":x.country,
                   "cases":x.cases,
                   
                 })

                })
                setTableData(SettingArray);


          }

          APICallingForContry()
                                            
  },[])
               TableData.map((x)=>{
                return rows.push(createData(x.country,x.cases));
               })
   



           console.log("TABLE : ",TableData)




  const classes = useStyles();



 return (
      <>
      <GridList cellHeight={380} className={classes.gridList} cols={0}>
 
  
           
           <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Country</StyledTableCell>
            <StyledTableCell align="right">Cases</StyledTableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name} className={classes.fonting}>
              <StyledTableCell component="th" scope="row" className={classes.fonting}>
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right" className={classes.fonting}>{row.calories}</StyledTableCell>
           
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

















  
  
</GridList>
      </>

 );
}