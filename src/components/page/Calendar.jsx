/** @format */
import "./CalendarStyles.css";

import { Alert, Calendar } from "antd";
import moment from "moment";
import { useState } from "react";

const App = () => {
  const [value, setValue] = useState(moment("2022-01-25"));
  const [selectedValue, setSelectedValue] = useState(moment("2022-01-25"));

  const onSelect = (newValue) => {
    setValue(newValue);
    setSelectedValue(newValue);
  };

  const onPanelChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className='layout'>
        <Alert
          className='alert'
          message={`You selected date: ${selectedValue?.format("YYYY-MM-DD")}`}
        />
        <Calendar
          value={value}
          onSelect={onSelect}
          onPanelChange={onPanelChange}
        />
      </div>
    </>
  );
};

export default App;
