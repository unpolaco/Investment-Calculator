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
                {({handleSubmit, values}) =>
                    fields.map((field, index) => {
                        return (
                            <Form onSubmit={handleSubmit} key={field.name}>
                                <FieldTextComponent name={field.name} labelText={field.labelText} value={values[index]} />
                            </Form>
                        );
                    })
                }
            </Formik>
            <p>Result</p>
        </>
    );
};
