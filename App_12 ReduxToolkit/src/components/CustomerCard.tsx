import React from "react";
import {useDispatch} from "react-redux";
import {addFoodToCustomer} from "../features/customerSlice";

function CustomerCard({id, name, food}: CustomerCardType): JSX.Element {
  // console.log("id, name, food:", id, name, food);
  const [customerFoodInput, setCustomerFoodInput] = React.useState("");
  const dispatch = useDispatch();
  return (
    <div className="customer-food-card-container" key={id}>
      {/* <p>Selena Gomez</p> */}
      <h5>{name}</h5>
      <div className="customer-foods-container">
        <div className="customer-food">
          {food.map((food) => {
            // console.log("food:", food);
            return <p key={food}>{food}</p>;
          })}
        </div>
        <div className="customer-food-input-container">
          <input value={customerFoodInput} onChange={(event) => setCustomerFoodInput(event.target.value)} />
          <button
            onClick={() => {
              if (!customerFoodInput) return;
              dispatch(
                addFoodToCustomer({
                  id: id,
                  food: customerFoodInput,
                })
              );
              setCustomerFoodInput("");
            }}
          >
            Add Food
          </button>
        </div>
      </div>
    </div>
  );
}

export default CustomerCard;
