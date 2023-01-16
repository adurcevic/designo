import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import styles from './ContactForm.module.scss';
import Button from '../../Button/Button';
import ErrorIcon from '../../Icons/ErrorIcon';
import { data } from './FormData';
import Modal from '../../Modal/Modal';
import { BeatLoader } from 'react-spinners';

const ContactForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: '',
    subtitle: '',
    text: '',
  });
  const [isError, setIsError] = useState(false);

  return (
    <>
      {isModalOpen && (
        <div className={styles.modalWrapper}>
          <Modal hasError={isError} isOpen={isModalOpen} {...modalContent} />
        </div>
      )}
      <Formik
        initialValues={{ name: '', email: '', phone: '', message: '' }}
        onSubmit={async (values, { resetForm }) => {
          try {
            setIsFetching(true);
            const res = await fetch('http://127.0.0.1:1337/api/messages', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                data: {
                  Message: {
                    name: values.name,
                    email: values.email,
                    phone: values.phone,
                    message: values.message,
                  },
                },
              }),
            });

            if (!res.ok) {
              throw res;
            }

            setModalContent({
              title: 'We got it!',
              subtitle: 'Thank you for choosing us.',
              text: 'Our representative will check it out and get in touch with you.',
            });
            setIsModalOpen(true);
            resetForm();
          } catch (err) {
            setModalContent({
              title: 'Error',
              subtitle: 'Something went wrong.',
              text: 'Please try again or contact us.',
            });
            setIsError(true);
            setIsModalOpen(true);
            console.log(err);
          } finally {
            setIsFetching(false);
            setTimeout(() => {
              setIsModalOpen(false);
              if (isError) setIsError(false);
            }, 3000);
          }
        }}
        validationSchema={Yup.object({
          name: Yup.string().required('Can`t be empty'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Can`t be empty'),
          phone: Yup.string().required('Can`t be empty'),
          message: Yup.string().required('Can`t be empty'),
        })}
      >
        {(formik) => (
          <Form className={styles.form}>
            {data.map((item) => (
              <div
                key={item.id}
                className={`${styles.row} ${
                  formik.values[`${item.id}`] ? styles.filled : ''
                }`}
              >
                <label className={styles.label} htmlFor={item.id}>
                  {item.label}
                </label>
                <Field
                  as={item.as ? item.as : 'input'}
                  className={styles.input}
                  type={item.type}
                  id={item.id}
                  name={item.id}
                  placeholder={item.label}
                  disabled={formik.isSubmitting}
                />
                <ErrorMessage
                  name={item.id}
                  render={(msg) => (
                    <div className={styles.error}>
                      {msg}
                      <ErrorIcon />
                    </div>
                  )}
                ></ErrorMessage>
              </div>
            ))}
            <Button
              type="submit"
              kind="Button"
              text={
                isFetching ? (
                  <BeatLoader aria-hidden="true" color="#e7816b" size={12} />
                ) : (
                  'Submit'
                )
              }
              disabled={formik.isSubmitting}
            />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ContactForm;
