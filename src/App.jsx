import React from "react";
import { useState } from "react";
import "./styles.css";

import Inputs from "./Components/inputs/Inputs";

const initialValues = {
  checkIn: "dd/mm/yyyy",
  checkOut: "dd/mm/yyyy",
  place: "todos",
  price: "cualquiera",
  rooms: "cualquiera"
};
export default function App() {
  const [inputState, setInputState] = useState(initialValues);

  return (
    <div className="AppMainContainer">
      <Inputs inputState={inputState} setInputState={setInputState} />
    </div>
  );
}
