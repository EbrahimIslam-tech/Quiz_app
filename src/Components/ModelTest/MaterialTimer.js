import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import Stack from "@mui/material/Stack";
import Timer from "./Timer";
const MaterialTimer = ({ value, setValue }) => {
  const [timeValue, setTimeValue] = React.useState();
  console.log(value, "value");
  console.log(timeValue, "timevalue");
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={3}>
          <TimePicker
            ampmInClock
            views={["minutes"]}
            inputFormat="mm"
            // mask="__:__"
            label="Minutes "
            value={timeValue}
            onChange={(newValue) => {
              // console.log(newValue, "time");
              setTimeValue(newValue);
              setValue(new Date(newValue).getMinutes());
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack>
      </LocalizationProvider>
    </div>
  );
};

export default MaterialTimer;
