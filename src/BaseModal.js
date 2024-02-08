import {Box, Modal, TextField, Typography} from "@mui/material";

export default function BaseModal({open, handleClose, style, Body}) {

    return <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box sx={style}>
            {Body}
        </Box>
    </Modal>
}
