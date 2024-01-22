import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import img from '../Asessts/Image/logo-big-rentals-black-white 3.png'

const MaterialUITable = () => {
    return (
        <div className='HA_table_main_div'>
            <img src={img} alt="" />
            <p className='HA_table_main_div_heading'>Trailercover for owners</p>
            <Table style={{ width: '90%' }}>
                <TableHead>
                    <TableRow>
                        <TableCell> </TableCell>
                        <TableCell style={{textAlign:'center'}}>BigRentals</TableCell>
                        <TableCell style={{textAlign:'center'}}>Competitors</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell style={{ borderBottom: "1px solid",width:"50%" }}>
                            <p className='HA_table_heading'>Guest identity verification</p>
                            <p className='HA_table_para'>Our comprehensive verification system check details such as name, address, government ID and more to confirm the  identity of guest who book on bigrentals</p>

                        </TableCell>
                        <TableCell style={{ borderBottom: "1px solid",textAlign:'center'}}><CloseIcon style={{color:'red'}}/></TableCell>
                        <TableCell style={{ borderBottom: "1px solid",textAlign:'center' }}><CheckIcon style={{color:"green"}}/></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{ borderBottom: "1px solid",width:"50%" }}>
                            <p className='HA_table_heading'>Guest identity verification</p>
                            <p className='HA_table_para'>Our comprehensive verification system check details such as name, address, government ID and more to confirm the  identity of guest who book on bigrentals</p>

                        </TableCell>
                        <TableCell style={{ borderBottom: "1px solid",textAlign:'center'}}><CloseIcon style={{color:'red'}}/></TableCell>
                        <TableCell style={{ borderBottom: "1px solid",textAlign:'center' }}><CheckIcon style={{color:"green"}}/></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{ borderBottom: "1px solid",width:"50%" }}>
                            <p className='HA_table_heading'>Guest identity verification</p>
                            <p className='HA_table_para'>Our comprehensive verification system check details such as name, address, government ID and more to confirm the  identity of guest who book on bigrentals</p>

                        </TableCell>
                        <TableCell style={{ borderBottom: "1px solid",textAlign:'center'}}><CloseIcon style={{color:'red'}}/></TableCell>
                        <TableCell style={{ borderBottom: "1px solid",textAlign:'center' }}><CheckIcon style={{color:"green"}}/></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{ borderBottom: "1px solid",width:"50%" }}>
                            <p className='HA_table_heading'>Art & valuables</p>
                        </TableCell>
                        <TableCell style={{ borderBottom: "1px solid",textAlign:'center'}}><CloseIcon style={{color:'red'}}/></TableCell>
                        <TableCell style={{ borderBottom: "1px solid",textAlign:'center' }}><CheckIcon style={{color:"green"}}/></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{ borderBottom: "1px solid",width:"50%" }}>
                            <p className='HA_table_heading'>Art & valuables</p>
                        </TableCell>
                        <TableCell style={{ borderBottom: "1px solid",textAlign:'center'}}><CloseIcon style={{color:'red'}}/></TableCell>
                        <TableCell style={{ borderBottom: "1px solid",textAlign:'center' }}><CheckIcon style={{color:"green"}}/></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{ borderBottom: "1px solid",width:"50%" }}>
                            <p className='HA_table_heading'>Art & valuables</p>
                        </TableCell>
                        <TableCell style={{ borderBottom: "1px solid",textAlign:'center'}}><CloseIcon style={{color:'red'}}/></TableCell>
                        <TableCell style={{ borderBottom: "1px solid",textAlign:'center' }}><CheckIcon style={{color:"green"}}/></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{ borderBottom: "1px solid",width:"50%" }}>
                            <p className='HA_table_heading'>Art & valuables</p>
                        </TableCell>
                        <TableCell style={{ borderBottom: "1px solid",textAlign:'center'}}><CloseIcon style={{color:'red'}}/></TableCell>
                        <TableCell style={{ borderBottom: "1px solid",textAlign:'center' }}><CheckIcon style={{color:"green"}}/></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
}

export default MaterialUITable;
