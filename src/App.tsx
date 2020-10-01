import React from 'react';
import {Formik, Form} from 'formik';
import FieldTextComponent from './FieldTextComponent';
import fields from './assets/FormFieldsData';

interface FormValues {
    [name: string]: string;
}
const handleSubmit = (values: any) => {
    console.log(values);
};

export const App = () => {
    const initialValues: FormValues = {};
    const setInitialValues = fields.forEach(field => {
        const key = field.name;
        initialValues[key] = '';
    });
    return (
        <>
            <header>Investment Calculator</header>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {({handleSubmit, values}) => (
                    <Form onSubmit={handleSubmit}>
                        {fields.map((field, index) => (
                            <FieldTextComponent name={field.name} labelText={field.labelText} value={values[index]} key={field.name} />
                        ))}
                        <button type="submit">Calculate</button>
                    </Form>
                )}
            </Formik>
            <p>Result</p>
        </>
    );
};
