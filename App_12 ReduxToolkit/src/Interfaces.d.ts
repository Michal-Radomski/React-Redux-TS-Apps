// Types and Interfaces

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

interface ReservationState {
  value: string[];
}

interface ReservationCardTypes {
  name: string;
  index: number;
}

interface Customer {
  id: string;
  name: string;
  food: string[];
}

interface CustomerState {
  value: Customer[];
}

interface AddFoodToCustomerPayload {
  food: string;
  id: string;
}

interface CustomerCardType {
  id: string;
  name: string;
  food: string[];
}
