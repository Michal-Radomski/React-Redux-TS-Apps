import React from "react";
import {useDispatch} from "react-redux";
import {addFoodToCustomer} from "../features/customerSlice";

function CustomerCard({id, name, food}: CustomerCardType): JSX.Element {
  const [customerFoodInput, setCustomerFoodInput] = React.useState("");
  const dispatch = useDispatch();
  return (
    <div className="customer-food-card-container">
      {/* <p>Selena Gomez</p> */}
      <h5>{name}</h5>
      <div className="customer-foods-container">
        <div className="customer-food">
          {food.map((food) => {
            return <p>{food}</p>;
          })}
        </div>
        <div className="customer-food-input-container">
          <input value={customerFoodInput} onChange={(event) => setCustomerFoodInput(event.target.value)} />
          <button
            onClick={() => {
              if (!customerFoodInput) return;
              dispatch(
                addFoodToCustomer({
                  id,
                  food: customerFoodInput,
                })
              );
              setCustomerFoodInput("");
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default CustomerCard;
