import styles from './LocationsCard.module.scss';
import dynamic from 'next/dynamic';
import { NextPage } from 'next';
import ThreeCircles from '../../BgPatterns/ThreeCircles/ThreeCircles';
import TwoCircles from '../../BgPatterns/TwoCircles/TwoCircles';

export type Props = {
  country: string;
  office: string;
  street: string;
  city: string;
  phone: string;
  email: string;
  position: {
    lat: number;
    lng: number;
  };
};

const LocationsCard: NextPage<Props> = ({
  country,
  office,
  street,
  city,
  phone,
  email,
  position,
}) => {
  const Map = dynamic(() => import('../Map/Map'), { ssr: false });

  return (
    <div className={styles.card}>
      <Map {...position} />
      <div className={styles.content}>
        <div className={styles.contentInner}>
          <h1 className={styles.title}>{country}</h1>
          <div className={styles.info}>
            <address className={styles.address}>
              <span>{office}</span>
              <span>{street}</span>
              <span>{city}</span>
            </address>
            <address className={styles.address}>
              <span>Contact</span>
              <span>
                P : <a href="tel:+1253-863-8967">{phone}</a>
              </span>
              <span>
                M : <a href="mailto:contact@designo.co">{email}</a>
              </span>
            </address>
          </div>
        </div>
        <ThreeCircles hasLocations />
        <TwoCircles hasLocations />
      </div>
    </div>
  );
};

export default LocationsCard;
