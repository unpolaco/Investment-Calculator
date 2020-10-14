import {useCallback, useState} from 'react';
import {saveCalculatorValues} from './../api/calculatorInputsValues';

export const useSaveCalculatorValues = () => {
    const [isFetching, setIsFetching] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const [responseLink, setResponseLink] = useState<any>();

    const saveValues = useCallback(async values => {
        setIsFetching(true);
        try {
            const response: any = await saveCalculatorValues(values);
            setResponseLink(response);
        } catch {
            setIsError(true);
        } finally {
            setIsFetching(false);
        }
    }, []);

    return {
        isFetching,
        isError,
        responseLink,
        saveValues,
    };
};
