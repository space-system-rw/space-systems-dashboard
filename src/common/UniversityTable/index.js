import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
    head: {
        // backgroundColor: theme.palette.primary,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('University of Rwanda', 'www.ur.ac.rw', 'Kigali, Rwanda', 2000),
    createData('Carnegie Mellon University', 'www.cmu-africa.ac', 'Kigali, Rwanda', 12000),
    createData('University of Rwanda', 'www.ur.ac.rw', 'Kigali, Rwanda', 2000),
    createData('University of Rwanda', 'www.ur.ac.rw', 'Kigali, Rwanda', 2000),
    createData('Carnegie Mellon University', 'www.cmu-africa.ac', 'Kigali, Rwanda', 12000),
];

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export default function CustomizedTables() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper} style={{ width: '80%', margin: 'auto', marginTop: 30 }}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead  style={{ background: '#4051B6' }}>
                    <TableRow>
                        <StyledTableCell>University</StyledTableCell>
                        <StyledTableCell align="right">Website</StyledTableCell>
                        <StyledTableCell align="right">Location</StyledTableCell>
                        <StyledTableCell align="right">Fees</StyledTableCell>
                        <StyledTableCell align="right">Edit</StyledTableCell>
                        <StyledTableCell align="right">Delete</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.calories}</StyledTableCell>
                            <StyledTableCell align="right">{row.fat}</StyledTableCell>
                            <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                            <StyledTableCell align="right">Edit</StyledTableCell>
                            <StyledTableCell align="right">Delete</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

// import React from 'react';
// import { withStyles, makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';

// const StyledTableCell = withStyles((theme) => ({
//     head: {
//         // backgroundColor: theme.palette.primary,
//         color: theme.palette.common.white,
//     },
//     body: {
//         fontSize: 14,
//     },
// }))(TableCell);

// const StyledTableRow = withStyles((theme) => ({
//     root: {
//         '&:nth-of-type(odd)': {
//         backgroundColor: theme.palette.action.hover,
//         },
//     },
// }))(TableRow);

// function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
// }

// const rows = [
//     createData('University of Rwanda', 'www.ur.ac.rw', 'Kigali, Rwanda', 2000),
//     createData('Carnegie Mellon University', 'www.cmu-africa.ac', 'Kigali, Rwanda', 12000),
//     createData('University of Rwanda', 'www.ur.ac.rw', 'Kigali, Rwanda', 2000),
//     createData('University of Rwanda', 'www.ur.ac.rw', 'Kigali, Rwanda', 2000),
//     createData('Carnegie Mellon University', 'www.cmu-africa.ac', 'Kigali, Rwanda', 12000),
// ];

// const useStyles = makeStyles({
//     table: {
//         minWidth: 700,
//     },
// });

// export default function CustomizedTables() {
//     const classes = useStyles();

//     return (
//         <TableContainer component={Paper} style={{ width: '80%', margin: 'auto', marginTop: 30 }}>
//             <Table className={classes.table} aria-label="customized table">
//                 <TableHead  style={{ background: '#4051B6' }}>
//                     <TableRow>
//                         <StyledTableCell>University</StyledTableCell>
//                         <StyledTableCell align="right">Website</StyledTableCell>
//                         <StyledTableCell align="right">Location</StyledTableCell>
//                         <StyledTableCell align="right">Fees</StyledTableCell>
//                         <StyledTableCell align="right">Edit</StyledTableCell>
//                         <StyledTableCell align="right">Delete</StyledTableCell>
//                     </TableRow>
//                 </TableHead>
//                 <TableBody>
//                     {rows.map((row) => (
//                         <StyledTableRow key={row.name}>
//                             <StyledTableCell component="th" scope="row">
//                                 {row.name}
//                             </StyledTableCell>
//                             <StyledTableCell align="right">{row.calories}</StyledTableCell>
//                             <StyledTableCell align="right">{row.fat}</StyledTableCell>
//                             <StyledTableCell align="right">{row.carbs}</StyledTableCell>
//                             <StyledTableCell align="right">Edit</StyledTableCell>
//                             <StyledTableCell align="right">Delete</StyledTableCell>
//                         </StyledTableRow>
//                     ))}
//                 </TableBody>
//             </Table>
//         </TableContainer>
//     );
// };

