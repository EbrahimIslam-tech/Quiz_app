import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import Stack from "@mui/material/Stack";
import Timer from "./Timer";
const MaterialTimer = () => {
  const [value, setValue] = React.useState(new Date());
  console.log(value);
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={3}>
          <TimePicker
            // ampmInClock
            views={["minutes"]}
            inputFormat="mm"
            mask="__:__"
            label="Minutes and seconds"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
    
        </Stack>
      </LocalizationProvider>
    </div>
  );
};

export default MaterialTimer;
