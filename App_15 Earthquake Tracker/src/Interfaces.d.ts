// Types and Interfaces

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
