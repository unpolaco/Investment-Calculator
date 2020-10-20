import React, {useEffect} from 'react';
import {useGetProducts} from '../../hooks/useGetProducts';
import {ProductItemCard} from './ProductItemCard';
import {ProductsListContainer} from './ProductsList.styles';
import {Loader} from '../../helpers/components/Loader/Loader';

export const ProductsList: React.FC = () => {
    const {isFetching, getProductList, productList, isError} = useGetProducts();
    useEffect(() => {
        getProductList();
    }, [getProductList]);

    if (isFetching) {
        return <Loader />;
    }
    if (isError) {
        alert('Error');
    }
    return (
        <>
            <ProductsListContainer>
                {productList?.map((item: any) => {
                    return (
                        <ProductItemCard
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            risk={item.risk}
                            rating={item.rating}
                            rate={item.rate}
                            category={item.category}
                        />
                    );
                })}
            </ProductsListContainer>
        </>
    );
};
