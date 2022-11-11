// import React, { useEffect } from 'react'

// function Card(){
//     // useEffect(()=>{
//     //     fetch()
//     //     .then(r => r.json())
//     //     .then((data)=> console.log(data))
//     // }, [])

//     return(
//         <>
//             <table class="table-fixed">
//   <thead>
//     <tr>
//       <th>Song</th>
//       <th>Artist</th>
//       <th>Year</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
//       <td>Malcolm Lockyer</td>
//       <td>1961</td>
//     </tr>
//     <tr>
//       <td>Witchy Woman</td>
//       <td>The Eagles</td>
//       <td>1972</td>
//     </tr>
//     <tr>
//       <td>Shining Star</td>
//       <td>Earth, Wind, and Fire</td>
//       <td>1975</td>
//     </tr>
//   </tbody>
// </table>
//         </>
//     )
// }

// export default Card;


import * as React from 'react';
import { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';

function Card(){
    
    const [employers, setEmployers] = useState([]) 
    // const navigate = useNavigate();

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
    }));
    
    useEffect(()=>{
        fetch("http://localhost:9292/employers")
        .then(r => r.json())
        .then(data => setEmployers(data))
    }, [])


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Employers_id</StyledTableCell>
            <StyledTableCell align="right">Occupation</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employers.map((employer) => (
            <StyledTableRow 
            key={employer.id}
            // onClick={() => navigate(`/students/${student.id}`)}
            style={{cursor: "pointer"}}
            >
              <StyledTableCell align="left">{employer.id}</StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {employer.name}
              </StyledTableCell>
              <StyledTableCell align="right">{employer.employers_id}</StyledTableCell>
              <StyledTableCell align="right">{employer.occupation}</StyledTableCell>
              {/* <Box
                m={1}
                display="flex"
                justifyContent="flex-end"
                alignItems="flex-end"
                onClick={() => navigate(`/students/${student.id}`)}
              >
                <Button 
                variant="outlined" 
                
                >
                  EDIT
                </Button>
              </Box> */}
              {/* <Box
                m={1}
                display="flex"
                justifyContent="flex-end"
                alignItems="flex-end"
              >
                <Button 
                variant="contained" 
                color="error"
                onClick={() => {
                  deleteStudent(student.id);
                }}
                >
                  Delete
                </Button>
              </Box> */}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}



export default Card