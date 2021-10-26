import {useDispatch} from "react-redux";
import {removeReservation} from "../features/reservationSlice";

const ReservationCard = ({name, index}: ReservationCardTypes): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => {
        dispatch(removeReservation(index));
      }}
      className="reservation-card-container"
    >
      {name}
    </div>
  );
};

export default ReservationCard;
