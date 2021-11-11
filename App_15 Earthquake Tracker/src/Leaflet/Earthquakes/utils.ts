import {Layer} from "leaflet";

// Convert Epoch Linux Time to human readable with specific timezone
const timeConverter = (time: number, offset: number): string => {
  const d = new Date(time);
  const utc = d.getTime() + d.getTimezoneOffset() * 60000; // This converts to UTC 00:00
  const nd = new Date(utc + 3600000 * offset);
  return nd.toLocaleString();
};

const onEachFeature = (feature: IFeature, layer: Layer) => {
  const {
    properties: {title, place, time, mag, url},
    geometry: {coordinates},
  } = feature;

  const popupContent = `
        <h3 style="font-size: 1.17em; font-weight: bold">${title}</h3>
        <b>Place</b>: ${place} <br>
        <b>Time (GMC /UTC/)</b>: ${timeConverter(time, 0)} <br>
        <b>Lat</b>: ${coordinates[1]}
        <b>Lon</b>: ${coordinates[0]} <br>
        <b>Depth</b>: ${coordinates[2]} km <br>
        <b>Magnitude</b>: <h3>${mag}</h3> Richter <br>
        <b>Details</b>: <a href=${url}>click here to see more details</a>
    `;

  layer.bindPopup(popupContent);
};

export {timeConverter, onEachFeature};
