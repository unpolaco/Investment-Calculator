import {useCallback, useState} from 'react';
import {sendSelectedProducts} from '../api/sendSelectedProducts';

export const useSendSelectedProducts = () => {
    const [isFetchingSend, setIsFetchingSend] = useState<boolean>(false);
    const [isErrorSend, setIsErrorSend] = useState<boolean>(false);
    const [calculatedInvPortfolio, setCalculatedInvPortfolio] = useState<any>();

    const sendProducts = useCallback(async data => {
        setIsFetchingSend(true);
        try {
            const response: any = await sendSelectedProducts(data);
            setCalculatedInvPortfolio(response);
        } catch {
            setIsErrorSend(true);
        } finally {
            setIsFetchingSend(false);
        }
    }, []);

    return {
        isFetchingSend,
        isErrorSend,
        calculatedInvPortfolio,
        sendProducts,
    };
};
