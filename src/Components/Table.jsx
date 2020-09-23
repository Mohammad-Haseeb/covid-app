import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 50,
  },
  blackColor:{
      backgroundColor:"black",
  }
,
  whiteColor:{
      backgroundColor:"white",
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159),
  createData('Ice cream sandwich', 237),
  createData('Eclair', 262),
  createData('Cupcake', 305),
  createData('Gingerbread', 356),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table"  >
        <TableHead>
          <TableRow className={classes.blackColor} className={classes.text}>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
          
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,ind) => (
            <TableRow key={row.name} className={ind%2===0?"blackColor":"whiteColor"} >
              <TableCell component="th" scope="row" className={ind%2===0?"blackColor":"whiteColor"}>
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
