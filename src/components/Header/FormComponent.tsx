import React, { useState } from 'react';
import { Field, Form, Formik, FormikValues } from 'formik';
import * as Yup from 'yup';

const formSchema = Yup.object().shape({
  newTask: Yup.string().required("Field must be requiered!")
});

export const FormComponent = () => {
  const [initialValues] = useState<FormValues>({
    newTask: ''
  });

  return (<>
    <Formik
      initialValues={ initialValues }
      validationSchema={ formSchema }
      enableReinitialize
      onSubmit={({ newTask } : FormikValues) => {
        console.log(newTask);
      }}
    >
      { ({ errors, touched }) => (<Form className='mt-4'>
        <Field
          className='w-full border p-2 rounded'
          type="text"
          name="newTask"
          placeholder="Create a new todo..."
        />
        <div
          className={errors.newTask && touched.newTask ? "visible" : "invisible"}
        >{ String(errors.newTask) }</div>
      </Form>) }
    </Formik>
  </>);
};