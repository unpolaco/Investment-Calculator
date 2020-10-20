import {useCallback, useState} from 'react';
import {getProducts} from './../api/getProducts';

export const useGetProducts = () => {
    const [isFetching, setIsFetching] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const [productList, setProductList] = useState<any>();

    const getProductList = useCallback(async () => {
        setIsFetching(true);
        try {
            const response: any = await getProducts();
            setProductList(response.data);
        } catch {
            setIsError(true);
        } finally {
            setIsFetching(false);
        }
    }, []);

    return {
        isFetching,
        isError,
        productList,
        getProductList,
    };
};
