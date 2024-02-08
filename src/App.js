import logo from './logo.svg';
import './App.css';
import {Box, Button, Modal, TextField, Typography} from "@mui/material";
import {useState} from "react";
import BaseModal from "./BaseModal";

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


function App() {

    const [open, setOpen] = useState(false);
    const [text, setText] = useState("");
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const Body = ( <div>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{mt: 2}}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" defaultValue={text}
                       onChange={(e) => {
                           setText(e.target.value)
                       }}/></div>);

    return (<div className="App">
            <Button onClick={handleOpen}>Open modal</Button>
            <BaseModal open={open} handleClose={handleClose} style={style} Body={Body} />
        </div>);
}

export default App;
