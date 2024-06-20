import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../styles/globals.css";

export const RDatePicker = ({
  field,
  label,
  name,
  nam,
  id,
  value,
  form: { touched, errors, setFieldValue },
  ...props
}) => {
  const [startDate, setStartDate] = useState(null);
  useEffect(() => {
    if (value !== undefined) {
      setStartDate(value);
    }
  }, [value]);
  return (
    <div className="flex flex-col">
      <label className="mt-4 font-bold">{label}</label>
      <DatePicker
        selected={startDate}
        onChange={(date) => {
          setStartDate(date);
          setFieldValue(nam, String(date));
        }}
        placeholderText="Pick a date"
        dateFormat="dd/MM/YYYY"
        required
      />
      <input
        hidden
        readOnly
        type="text"
        value={startDate}
        {...field}
        {...props}
      ></input>
    </div>
  );
};
