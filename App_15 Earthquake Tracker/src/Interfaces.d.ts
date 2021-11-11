// Types and Interfaces

type RootState = ReturnType<typeof rootReducer>;

interface IFeature {
  geometry: any;
  properties: {
    mag: number;
    place: string;
    time: number;
    url: string;
    title: string;
  };
  type: string;
}

interface ITilelayer {
  name: string;
  attribution: string;
  url: string;
  checked: boolean;
}

interface IPeriod {
  id: number;
  name: string;
}

interface IAction {
  type: string;
  payload: any;
}

interface IEarthquakesReducer {
  startTime: string;
  endTime: string;
  numOfDays: string;
}

interface IInfoTip {
  setTooltipOpen: (tooltipOpen: boolean) => void;
  target: string;
  tooltipOpen: boolean;
}
