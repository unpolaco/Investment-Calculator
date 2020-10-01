import React from 'react';
import {Formik, Form} from 'formik';
import FieldTextComponent from './FieldTextComponent';
import fields from './assets/FormFieldsData';
import SelectField from './SelectField';

interface FormValues {
    [name: string]: string;
}
export default function CalculatorForm() {
    const dropdownOptions = [
        {key: 'Weekly', value: '7'},
        {key: 'Monthly', value: '30'},
        {key: 'Annually', value: 'Annually'},
    ];

    const handleSubmit = (values: any) => {
        console.log(values);
    };

    const initialValues: FormValues = {};
    fields.forEach(field => {
        const key = field.name;
        initialValues[key] = '';
    });
    return (
        <>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {({handleSubmit, values}) => (
                    <Form onSubmit={handleSubmit}>
                        {fields.map((field, index) =>
                            field.name === 'frequencyContribution' ? (
                                <SelectField
                                    label="Frequency Contribution"
                                    name="selectOption"
                                    key={field.name}
                                    options={dropdownOptions}
                                />
                            ) : (
                                <FieldTextComponent name={field.name} labelText={field.labelText} value={values[index]} key={field.name} />
                            ),
                        )}
                        <button type="submit">Calculate</button>
                    </Form>
                )}
            </Formik>
            <p>Result</p>
        </>
    );
}
