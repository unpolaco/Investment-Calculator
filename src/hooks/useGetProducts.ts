import {useCallback, useState} from 'react';
import {getProducts} from './../api/getProducts';

export const useGetProducts = () => {
    const [isFetchingGet, setIsFetchingGet] = useState<boolean>(false);
    const [isErrorGet, setIsErrorGet] = useState<boolean>(false);
    const [productList, setProductList] = useState<any>();

    const getProductList = useCallback(async () => {
        setIsFetchingGet(true);
        try {
            const response: any = await getProducts();

            response.data.map((el: any) => {
                el.selected = false;
                return response.data;
            });
            setProductList(response.data);
        } catch {
            setIsErrorGet(true);
        } finally {
            setIsFetchingGet(false);
        }
    }, []);

    return {
        isFetchingGet,
        isErrorGet,
        productList,
        getProductList,
    };
};
