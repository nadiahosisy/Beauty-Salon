import { useState } from "react";
// import { render } from "react-dom";
import Calendar from "react-calendar";

const UserPage = () => {
  const [date, setDate] = useState(new Date());
  const onChane = () => {
    setDate(date);
  };
  return <div>UserPage</div>;
};

// render(<UserPage />), document.querySelector("#root");

export default UserPage;
