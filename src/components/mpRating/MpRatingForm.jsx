import * as React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Stack, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import "../../App.css";

export default function MpRatingForm({handleSubmit}) {
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <Box sx={{ display: "grid", justifyContent: "flex-start" }} className="form">
      <Box sx={{ mr: 2, mb: 3 }}>
        <Typography sx={{ fontWeight: 600 }} className="form_text">
          कृपया अपना विवरण भरें
        </Typography>
        <Typography sx={{ color: "grey" }} className="form_text">
          (Please fill out your details)
        </Typography>
      </Box>
      <Stack direction="row" spacing={20} className="form_stack">
        <TextField variant="standard" label="Name" />
        <TextField variant="standard" label="Email" className="form_textfield" />
        <TextField variant="standard" label="Mobile No." className="form_textfield" />
      </Stack>
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }} className="form_stack">
        <FormControl component="fieldset">
          <RadioGroup
            row
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
            sx={{ my: 1 }}
          >
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="female" control={<Radio />} label="Female" />
          </RadioGroup>
        </FormControl>
        <Stack spacing={20} direction="row" className="form_stack">
          <TextField variant="standard" label="Select Age Category" />
          <TextField variant="standard" label="Enter City / District Name" className="form_textfield" />
        </Stack>
      </Box>
      <Stack direction="row" sx={{ mt: 4 }} spacing={15} className="form_stack">
        <Box>
          <Button
            sx={{
              backgroundColor: "grey",
              color: "white",
              borderRadius: 0,
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 5,
              py: "7.5px"
            }}
          >
            Send OTP
          </Button>
          <TextField
            sx={{
              width: 150,
              "& fieldset": {
                borderLeft: "none",
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0
              }
            }}
            id="outlined-basic"
            label="Enter OTP"
            variant="outlined"
            component="form"
            noValidate
            autoComplete="on"
            size="small"
          />
        </Box>
        <Box sx={{ display: "flex" }} className="form_checkbox">
          <Checkbox {...label} />
          <Typography sx={{ mt: 1.5 }}>Terms and Conditions*</Typography>
        </Box>
      </Stack>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Button onClick={handleSubmit} sx={{ backgroundColor: "coral", color: "white", width: 150, py: 1 }}>
          Submit
        </Button>
      </Box>
    </Box>
  );
}
