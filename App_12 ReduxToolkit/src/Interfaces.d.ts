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
