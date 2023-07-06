import React from 'react';
// import Calendar from "react-big-calendar";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Box, Button, Modal, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

function Sample(){
    const navigation = useNavigate()
    const [event,setEvent]=React.useState([])
    const localizer = momentLocalizer(moment);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

      const now = new Date();
      // console.log(now,"date");
    const addevent=()=>{
        // alert("hello")
        navigation("/addevent")
        
    }
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleDateClick = (arg) => {
    alert(arg.dateStr);
  };

  React.useEffect(()=>{
    const data= async()=>{
      await axios.get('http://localhost:5000/event')
      .then((res)=>{
        console.log("data");
        setEvent(res.data)
        // console.log(res.data);
      })
      .catch((e)=>{
        console.log(e);
      })
    }
    data()
  },[])
  console.log(event);
       return (
        <div>
        <Box >
            <Button style={{float:"right", margin:2}} onClick={addevent}>add event</Button>
        </Box>
        <Calendar
        events={[{
          id: 4,
          title: "Some Event",
          start: new Date(2023, 0, 9, 0, 0, 0),
          end: new Date(2023, 1, 10, 0, 0, 0)
        }]}
        style={{ height: "100vh", width:"150vh" }}
        step={15}
        selectable
        localizer={localizer}
        defaultView="month"
        views={["month", "week", "day", "agenda"]}
        defaultDate={new Date()}
        // popup={false}
        // onShowMore={(events, date) => this.setState({ showModal: true, events })}
      />
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Text in a modal
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    </Typography>
  </Box>
</Modal>
      </div>
       )
}
function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  }
export default Sample;