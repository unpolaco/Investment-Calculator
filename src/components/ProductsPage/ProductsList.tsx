import React, {useEffect} from 'react';
import {useGetProducts} from '../../hooks/useGetProducts';
import {ProductItemCard} from './ProductItemCard';
import {ProductsListContainer} from './ProductsList.styles';
import {Loader} from '../../helpers/components/Loader/Loader';

export const ProductsList: React.FC = () => {
    const {isFetching, getProductList, isError} = useGetProducts();
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
                <ProductItemCard risk="1" rating="3" category="dłużny" />
                <ProductItemCard risk="3" rating="5" category="mieszany" />
                <ProductItemCard risk="5" rating="2" category="akcyjny" />
                <ProductItemCard risk="2" rating="4" category="mieszany" />
                <ProductItemCard risk="5" rating="1" category="dłużny" />
                <ProductItemCard risk="1" rating="5" category="mieszany" />
                <ProductItemCard risk="1" rating="3" category="akcyjny" />
                <ProductItemCard risk="4" rating="2" category="akcyjny" />
                <ProductItemCard risk="6" rating="5" category="dłużny" />
                <ProductItemCard risk="3" rating="2" category="akcyjny" />
            </ProductsListContainer>
        </>
    );
};
