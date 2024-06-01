// src/GPACalculator.js
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box } from '@mui/material';
import './GPACalculator.css';

const GPACalculator = () => {
  return (
    <div className="gpa-calculator">
      <Typography variant="h4" gutterBottom>
        GPA Calculator: How do we Calculate GPA?
      </Typography>
      <Typography variant="subtitle1" gutterBottom className="line-example">
  Let us take the example of a student who would have 2 semesters. Let me demonstrate how to calculate the GPA.
</Typography>

      <Box className="tables-container">
        <Box className="table-wrapper">
          <Box className="table-header">
            <Typography variant="h6" className="table-title">Semester 1</Typography>
            <Box className="dropdown-arrow" />
          </Box>
          <TableContainer component={Paper} className="gpa-table">
            <Table aria-label="Semester 1 Table">
              <TableHead>
                <TableRow>
                  <TableCell className="table-heading-cell">Code Number & Subject</TableCell>
                  <TableCell className="table-heading-cell" align="right">Credits</TableCell>
                  <TableCell className="table-heading-cell" align="right">Grade</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {[
                  { subject: 'Subject – 1', credits: 4.0, grade: 'A+' },
                  { subject: 'Subject – 2', credits: 4.0, grade: 'A' },
                  { subject: 'Subject – 3', credits: 4.0, grade: 'A+' },
                  { subject: 'Subject – 4', credits: 4.0, grade: 'C' },
                  { subject: 'Subject – 5', credits: 4.0, grade: 'A+' },
                  { subject: 'Subject – 6', credits: 1.5, grade: 'A' },
                  { subject: 'Subject – 7', credits: 1.5, grade: 'A+' },
                ].map((row) => (
                  <TableRow key={row.subject}>
                    <TableCell>{row.subject}</TableCell>
                    <TableCell align="right">{row.credits}</TableCell>
                    <TableCell align="right">{row.grade}</TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell>Total Number of Credits & Grade Point</TableCell>
                  <TableCell align="right">23.0</TableCell>
                  <TableCell align="right">208.5 (using the above Grade Point Table and multiplying each Grade Point by their Credit Score)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Semester Grade Point Average (SGPA)</TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right">9.0652</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        <Box className="table-wrapper">
          <Box className="table-header">
            <Typography variant="h6" className="table-title">Semester 2</Typography>
            <Box className="dropdown-arrow" />
          </Box>
          <TableContainer component={Paper} className="gpa-table">
            <Table aria-label="Semester 2 Table">
              <TableHead>
                <TableRow>
                  <TableCell className="table-heading-cell">Code Number & Subject</TableCell>
                  <TableCell className="table-heading-cell" align="right">Credits</TableCell>
                  <TableCell className="table-heading-cell" align="right">Grade</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {[
                  { subject: 'Subject – 1', credits: 4.0, grade: 'A' },
                  { subject: 'Subject – 2', credits: 4.0, grade: 'A' },
                  { subject: 'Subject – 3', credits: 4.0, grade: 'B' },
                  { subject: 'Subject – 4', credits: 4.0, grade: 'B' },
                  { subject: 'Subject – 5', credits: 4.0, grade: 'A+' },
                  { subject: 'Subject – 6', credits: 1.5, grade: 'A' },
                  { subject: 'Subject – 7', credits: 1.5, grade: 'A' },
                  { subject: 'Subject – 8', credits: 1.5, grade: 'A' },
                ].map((row) => (
                  <TableRow key={row.subject}>
                    <TableCell>{row.subject}</TableCell>
                    <TableCell align="right">{row.credits}</TableCell>
                    <TableCell align="right">{row.grade}</TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell>Total Number of Credits & Grade Point</TableCell>
                  <TableCell align="right">24.5</TableCell>
                  <TableCell align="right">216.5 (using the above Grade Point Table and multiplying each Grade Point by their Credit Score)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Semester Grade Point Average (SGPA)</TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right">8.8367</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </div>
  );
};

export default GPACalculator;
