import {validate} from '../../src/components/CalculatorPage/CalculatorForm/CalculatorForm.constants';

describe('Calculator inputs test', () => {
    describe('Start values test', () => {
        test.each([
            [-1, 'Must be a positive number'],
            [0, undefined],
        ])('If start value is less than 0 proper message should be displayed', (startValue, expectedResult) => {
            const errors = validate({startValue});
            expect(errors.startValue).toBe(expectedResult);
        });
    });

    describe('Additional contribution values test', () => {
        test.each([
            [-1, 'Must be a positive number'],
            [0, undefined],
        ])('If start value is less than 0 proper message should be displayed', (additionalContribution, expectedResult) => {
            const errors = validate({additionalContribution});
            expect(errors.additionalContribution).toBe(expectedResult);
        });
    });

    describe('Years contribution values test', () => {
        test.each([
            [-1, 'Must be a positive number'],
            [0, 'Required field'],
            [101, 'You are trying to look too far ahead!'],
        ])(
            'If value of years to contribute is out of specific range, proper message should be displayed',
            (yearsContribution, expectedResult) => {
                const errors = validate({yearsContribution});
                expect(errors.yearsContribution).toBe(expectedResult);
            },
        );
    });

    describe('Return rate values test', () => {
        test.each([
            [-1, 'Why so pesimistic?'],
            [0, 'Required field'],
            [51, 'You are too optimistic!'],
        ])('If value of years to contribute is out of specific range, proper message should be displayed', (returnRate, expectedResult) => {
            const errors = validate({returnRate});
            expect(errors.returnRate).toBe(expectedResult);
        });
    });
});
