import React, { useState } from "react";
import { Card, CardContent, TextField, Typography } from "@mui/material";
import "./DateSelection"

const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <Card className="date-picker-container max-w-sm mx-auto p-4">
      <CardContent>
        <TextField
          type="date"
          id="date"
          value={selectedDate}
          onChange={handleDateChange}
          fullWidth
          variant="outlined"
        />
      </CardContent>
    </Card>
  );
};

export default DatePicker;



