import styles from './Modal.module.scss';
import CheckIcon from '../Icons/CheckIcon';
import ErrorIcon from '../Icons/ErrorIcon';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';

type Props = {
  hasError: boolean;
  isOpen: boolean;
  title: string;
  subtitle: string;
  text: string;
};

const Modal: NextPage<Props> = ({
  hasError,
  isOpen,
  title,
  subtitle,
  text,
}) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (isOpen) setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 2500);
  }, [isOpen]);

  return (
    <div className={`${styles.modal} ${showModal ? styles.open : ''}`}>
      <div className={styles.modalInner}>
        <div className={styles.titleWrapper}>
          <p className={styles.title}>{title}</p>
          <div className={styles.iconWrapper}>
            {hasError ? (
              <ErrorIcon bgColor="#e7816b" color="#FFF" />
            ) : (
              <CheckIcon />
            )}
          </div>
        </div>
        <p className={styles.text}>{subtitle}</p>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};

export default Modal;
