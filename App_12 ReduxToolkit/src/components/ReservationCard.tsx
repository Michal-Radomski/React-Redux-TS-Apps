import {useDispatch} from "react-redux";
import {removeReservation} from "../features/reservationSlice";
import {addCustomer} from "../features/customerSlice";

const ReservationCard = ({name, index}: ReservationCardTypes): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => {
        dispatch(removeReservation(index));
        dispatch(
          addCustomer({
            id: "",
            name,
            food: [],
          })
        );
      }}
      className="reservation-card-container"
    >
      {name}
    </div>
  );
};

export default ReservationCard;
