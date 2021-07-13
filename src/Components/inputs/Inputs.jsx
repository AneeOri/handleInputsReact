import React from "react";
import "./Inputs.css";

export default function Inputs({ setInputState, inputState }) {
  let handleChange = (event) => {
    setInputState({
      ...inputState,
      [event.target.name]: event.target.value
    });
  };

  const reset = () => {
    setInputState({
      checkIn: "dd/mm/yyyy",
      checkOut: "dd/mm/yyyy",
      place: "todos",
      price: "cualquiera",
      rooms: "cualquiera"
    });
    console.log(inputState);
  };

  let currentBefore = new Date();
  let current = currentBefore.toLocaleDateString().split();
  let currentStick =
    current[0][5] +
    current[0][6] +
    current[0][7] +
    current[0][8] +
    "-0" +
    current[0][3] +
    "-" +
    current[0][0] +
    current[0][1];
  return (
    <div className="filter-container">
      <div className="inputContainer">
        <input
          name="checkIn"
          type="date"
          value={inputState.checkIn}
          min={currentStick}
          id="fill"
          onChange={handleChange}
        ></input>
      </div>
      <div className="inputContainer">
        <input
          name="checkOut"
          type="date"
          value={inputState.checkOut}
          id="fill"
          min={inputState.checkIn}
          onChange={handleChange}
        ></input>
      </div>
      <div className="selectContainer">
        <select
          name="place"
          value={inputState.place}
          id="fill"
          onChange={handleChange}
        >
          <option value="todos">Todos los paises</option>
          <option value="Uruguay">Uruguay</option>
          <option value="Argentina">Argentina</option>
        </select>
      </div>
      <div className="selectContainer">
        <select
          name="price"
          value={inputState.price}
          id="fill"
          onChange={handleChange}
        >
          <option value="cualquiera">Cualquier Precio</option>
          <option value="1">$</option>
          <option value="2">$$</option>
          <option value="3">$$$</option>
          <option value="4">$$$$</option>
        </select>
      </div>
      <div className="selectContainer">
        <select
          name="rooms"
          value={inputState.rooms}
          id="fill"
          onChange={handleChange}
        >
          <option value="cualquiera">Cualquier Tamaño</option>
          <option value="pequeño">Hotel Pequeño</option>
          <option value="mediano">Hotel Mediano</option>
          <option value="grande">Hotel Grande</option>
        </select>
      </div>
      <div className="selectContainerB">
        <button onClick={reset} className="resetButton">
          Limpiar
        </button>
      </div>
    </div>
  );
}
