import React, { useState, useRef } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  TextField,
  InputAdornment,
  Typography
} from "@mui/material";
import { Facebook, Twitter, Instagram, WhatsApp, Telegram, Link as LinkIcon, Close } from "@mui/icons-material";
import GrayButton from "../GrayButton";

const ShareModal = ({open, shareMpInfo, handleOpenSharePopup}) => {
//   const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef(null);
console.log('shareMpInfo', shareMpInfo)
  const handleCopy = () => {
    const input = inputRef.current;
    input.select();
    document.execCommand("copy");
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <Box>
      <Dialog open={open} onClose={() => handleOpenSharePopup(false)}>
        <DialogTitle sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6">Share Modal</Typography>
          <IconButton onClick={() => handleOpenSharePopup(false)}>
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Typography gutterBottom>Share this link via</Typography>
          <Box display="flex" justifyContent="space-between" mb={2}>
            <IconButton sx={{ color: "#1877F2" }}><Facebook /></IconButton>
            <IconButton sx={{ color: "#46C1F6" }}><Twitter /></IconButton>
            <IconButton sx={{ color: "#e1306c" }}><Instagram /></IconButton>
            <IconButton sx={{ color: "#25D366" }}><WhatsApp /></IconButton>
            <IconButton sx={{ color: "#0088cc" }}><Telegram /></IconButton>
          </Box>
          <Typography gutterBottom>Or copy link</Typography>
          <Box display="flex" alignItems="center" gap={1} borderRadius={1} border="1px solid #757171" pl={0}>
            <InputAdornment position="start">
              <LinkIcon />
            </InputAdornment>
            <TextField
              inputRef={inputRef}
              value={`${window.location.origin}/mps-details/${ shareMpInfo?.name?.replaceAll(" ", '-')?.toLowerCase()}_${shareMpInfo?.mp_id}`}
              variant="standard"
              fullWidth
              InputProps={{ disableUnderline: true, readOnly: true }}
              sx={{ flex: 1 }}
            />
            <GrayButton width='70px' variant="contained" onClick={handleCopy} >
              {copied ? "Copied" : "Copy"}
            </GrayButton>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default ShareModal;
