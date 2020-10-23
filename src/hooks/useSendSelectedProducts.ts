import {useCallback, useState} from 'react';
import {sendSelectedProducts} from '../api/sendSelectedProducts';

export const useSendSelectedProducts = () => {
    const [isFetching, setIsFetching] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const [response, setResponse] = useState<any>();

    const sendProducts = useCallback(async data => {
        setIsFetching(true);
        try {
            const response: any = await sendSelectedProducts(data);
            setResponse(response);
        } catch {
            setIsError(true);
        } finally {
            setIsFetching(false);
        }
    }, []);

    return {
        isFetching,
        isError,
        response,
        sendProducts,
    };
};
