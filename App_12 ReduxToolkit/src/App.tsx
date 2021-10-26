import React from "react";
import {useSelector, useDispatch} from "react-redux";
import "./App.scss";
import ReservationCard from "./components/ReservationCard";
import {addReservation} from "./features/reservationSlice";

function App() {
  const [reservationNameInput, setReservationNameInput] = React.useState("");

  const reservation = useSelector((state: RootState) => state.reservations.value);

  const dispatch = useDispatch();

  const handleAddReservations = () => {
    if (!reservationNameInput) return; //-  [=return undefined]
    dispatch(addReservation(reservationNameInput));
    setReservationNameInput("");
  };

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {/* <div className="reservation-card-container">Prezes Jarek</div> */}
              {reservation.map((name: string, index: number) => {
                return <ReservationCard key={index} name={name} index={index} />;
              })}
            </div>
          </div>
          <div className="reservation-input-container">
            <input value={reservationNameInput} onChange={(event) => setReservationNameInput(event.target.value)} />
            <button onClick={handleAddReservations}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          <div className="customer-food-card-container">
            <p>Selena Gomez</p>
            <div className="customer-foods-container">
              <div className="customer-food"></div>
              <div className="customer-food-input-container">
                <input />
                <button>Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
