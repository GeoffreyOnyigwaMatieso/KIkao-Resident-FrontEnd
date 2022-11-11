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
    const [employees, setEmployees] = useState([]) 
    const [residents, setResidents] = useState([])
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

    useEffect(()=>{
        fetch("http://localhost:9292/employees")
        .then(r => r.json())
        .then(data => setEmployees(data))
    }, [])

    useEffect(()=>{
        fetch("http://localhost:9292/residents")
        .then(r => r.json())
        .then(data => setResidents(data))
    }, [])

  return (
    <>
        <div>
            <h1 className='text-center'>Employers Table</h1>
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
        </div>
        <div>
            <h1 className='text-center'>Employees Table</h1>
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                <TableRow>
                <StyledTableCell>Id</StyledTableCell>
                    <StyledTableCell>Name</StyledTableCell>
                    <StyledTableCell align="right">Employees_id</StyledTableCell>
                    <StyledTableCell align="right">Occupation</StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {employees.map((employee) => (
                    <StyledTableRow 
                    key={employee.id}
                    // onClick={() => navigate(`/students/${student.id}`)}
                    style={{cursor: "pointer"}}
                    >
                    <StyledTableCell align="left">{employee.id}</StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                        {employee.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">{employee.employee_id}</StyledTableCell>
                    <StyledTableCell align="right">{employee.occupation}</StyledTableCell>
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
        </div>
        <div>
            <h1 className='text-center'>Residents Table</h1>
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                <TableRow>
                <StyledTableCell>Id</StyledTableCell>
                    <StyledTableCell>Name</StyledTableCell>
                    <StyledTableCell align="right">Residents_id</StyledTableCell>
                    <StyledTableCell align="right">Occupation</StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {residents.map((resident) => (
                    <StyledTableRow 
                    key={resident.id}
                    // onClick={() => navigate(`/students/${student.id}`)}
                    style={{cursor: "pointer"}}
                    >
                    <StyledTableCell align="left">{resident.id}</StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                        {resident.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">{resident.resident_id}</StyledTableCell>
                    <StyledTableCell align="right">{resident.occupation}</StyledTableCell>
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
        </div>

    </>
  );
}



export default Card