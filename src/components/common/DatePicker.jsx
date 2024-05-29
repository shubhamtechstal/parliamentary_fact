import React from "react";
import TextField from "components/common/TextField";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { styled } from "@mui/material";

const StyledDatePicker = styled(DesktopDatePicker)(() => ({
	"& .MuiInputBase-root": {
		borderRadius: "8px !important",
	},
}));
function DatePicker({ error = "", value,placeholder, onChange, name = "", textFieldProps = {}, ...restProps }) {
	return (
		<StyledDatePicker
			inputFormat="DD/MM/YYYY"
			value={value}
			placeholder={placeholder}
			onChange={onChange}
			{...restProps}
			renderInput={(params) => (
				<TextField
					{...params}
					{...textFieldProps}
					helperText={restProps.helperText}
					error={error}
				/>
			)}
		/>
	);
}

export default React.memo(DatePicker);
