import {
  Chip,
  FormControl,
  FormControlLabel,
  Select,
  ListSubheader,
  InputAdornment
} from "@mui/material";
import Box from "./Box";
import TextField from "./TextField";
import SearchIcon from "@mui/icons-material/Search";
import MenuItem from "./MenuItem";
import Checkbox from "./Checkbox";
import { uuid } from "helpers/utility";

const MultiSelect = (props) => {
  const { value, onChange, onClose, onSearchChange, options, idKeyName="id" } = props;
  console.log({ props });
  return (
    <FormControl fullWidth>
      <Select
        multiple
        MenuProps={{
          autoFocus: false,
          PaperProps: { style: { maxHeight: 250 } },
        }}
        value={value}
        onChange={onChange}
        onClose={onClose}
        renderValue={(selected=[]) => (
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 0.5,
              overflow: "hidden"
            }}
          >
            {selected.slice(0,3).map((value) => (
              <Chip key={uuid()} label={value.name} />
            ))}
            {
              selected.length > 3 ? 
                <Chip label={`More +${selected.length - 3}`}/>
              : null
            }
          </Box>
        )}
      >
        <ListSubheader>
          <TextField
            autoFocus
            placeholder="Search"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            onChange={onSearchChange}
            onKeyDown={(e) => {
              if (e.key !== "Escape") {
                e.stopPropagation();
              }
            }}
          />
        </ListSubheader>
        {options?.map((option, i) =>{
          const hasChecked = value.some( item => (item[idKeyName] === option[idKeyName]));
          return(
            <MenuItem key={i} value={option}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={hasChecked}
                    sx={{ marginRight: "1px" }}
                  />
                }
                label={option.name}
              />
            </MenuItem>
          )

        } 
        )}
      </Select>
    </FormControl>
  );
};

export default MultiSelect;
