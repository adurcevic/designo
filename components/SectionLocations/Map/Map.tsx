import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import styles from './Map.module.scss';
import { NextPage } from 'next';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Workaround for displaying marker on leaflet map
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
});

type Props = {
  lat: string;
  lng: string;
};

const Map: NextPage<Props> = ({ lat, lng }) => {
  return (
    <>
      <MapContainer
        className={styles.map}
        center={[+lat, +lng]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        <Marker position={[+lat, +lng]}></Marker>
      </MapContainer>
    </>
  );
};

export default Map;
