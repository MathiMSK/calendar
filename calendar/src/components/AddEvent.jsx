import { DateCalendar, DatePicker, DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React from 'react'
import { DateRangeCalendar } from '@mui/x-date-pickers-pro';
import { Box, Button, TextField, Typography } from '@mui/material';

export default function AddEvent() {
  const [start,setStart]= React.useState('')
  const [end,setEnd]= React.useState('')
  const [title,setTitle]= React.useState('')
    console.log(start,"start date");
  return (
  <div style={{alignItems:"center", justifyContent:"center", marginTop:20}}>
    <h1>AddEvent </h1>
    <div  >
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateRangeCalendar']} >
        {/* <DatePicker label={"Start Date"}
        onChange={(newValue)=>setStart(newValue)}
        /> */}
        {/* <DateCalendar onChange={(newValue)=>setStart(newValue)}/> */}
        <TextField sx={{width:"100%"}} id="outlined-basic" label="Title" variant="outlined" onChange={(e)=>setTitle(e.target.value)}/>
        <DateTimePicker label={"Start Date"} onChange={(newValue)=>setStart(newValue)} />
        <DateTimePicker label={"End Date"} onChange={(newValue)=>setEnd(newValue)} />
        {/* <DateRangeCalendar calendars={1} onChange={(newValue)=>setStart(newValue)}/> */}
        <Button onClick={()=>console.log({title:title,start:start.$d,end:end.$d})}>Add</Button>
      </DemoContainer>
    </LocalizationProvider>

    </div>
    </div>
  )
}
