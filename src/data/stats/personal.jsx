import React, { useState, useEffect } from "react";

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date("2000-04-20T12:05:00");
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (<>{age}</>);
};

const data = [
  {
    key: "name",
    label: "Name",
    value: "Ashutosh Chapagain",
  },
  {
    key: "age",
    label: "Current age",
    value: <Age />,
  },
  {
    key: "height",
    label: "Height",
    value: `5'9"`,
  },
  {
    key: "location",
    label: "Current Location",
    value: "Kathmandu, Nepal",
  },
];

export default data;
