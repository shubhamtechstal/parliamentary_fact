import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  p: 4,
};

export default function ThankYouModal({ open, handleClose }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <IconButton
            className="btn_close"
            sx={{ position: 'relative', zIndex: 1, left: '88%', backgroundColor: 'white' }}
            onClick={handleClose}
          >
            <CloseIcon onClick={handleClose}/>
          </IconButton>
          <Box>
            <Card sx={{ maxWidth: 400, borderRadius: "20px", maxHeight: 490 }} className="modal_card">
              <Box sx={{ display: "flex", justifyContent: "center", mt: 0.5 }}>
                <Typography
                  variant="h5"
                  sx={{
                    color: "grey",
                    textAlign: "center",
                    borderBottom: "2px solid lightgrey",
                    width: 130,
                  }}
                >
                  Thanks
                </Typography>
              </Box>
              <Box sx={{ mt: 1 }}>
                <Typography
                  variant="body2"
                  sx={{ color: "grey", textAlign: "center", mt: 1 }}
                >
                  Your Rating has been Successfully Submitted
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "grey", textAlign: "center" }}
                >
                  आपकी रेटिंग सफलतापूर्वक सबमिट दर्ज हो चुकी है
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "grey", textAlign: "center", mt: 1 }}
                >
                  Share Your Rating/अपनी रेटिंग साझा करें
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "grey",
                    borderRadius: "20px",
                    py: 0.5,
                    width: 150,
                  }}
                >
                  Click Here
                </Button>
              </Box>
            </Card>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
