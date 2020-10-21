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

            //  This function is temporary - we will create "selected" key on server side
            response.data.map((el: any) => {
                el.selected = false;
                return response.data;
            });

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
