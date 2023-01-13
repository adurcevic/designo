import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './ContactForm.module.scss';
import Button from '../../Button/Button';
import ErrorIcon from '../../Icons/ErrorIcon';
import { data } from './FormData';

const ContactForm = () => {
  return (
    <Formik
      initialValues={{ name: '', email: '', phone: '', message: '' }}
      onSubmit={async (values, { resetForm }) => {
        try {
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

          resetForm();
        } catch (err) {
          console.log(err);
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
            text={'Submit'}
            disabled={formik.isSubmitting}
          />
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
