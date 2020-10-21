import React, {useState, useEffect} from 'react';
import {useGetProducts} from '../../hooks/useGetProducts';
import {ProductItemCard} from './ProductItemCard';
import {ProductsListContainer} from './ProductsList.styles';
import {Loader} from '../../helpers/components/Loader/Loader';
import {Error} from '../../helpers/components/Error/Error';

export const ProductsList: React.FC = () => {
    const [selectedProducts, setSelectedProducts] = useState([]);
    const {isFetching, getProductList, productList, isError} = useGetProducts();
    useEffect(() => {
        getProductList();
    }, [getProductList]);

    if (isFetching) {
        return <Loader />;
    }
    if (isError) {
        return <Error error={' :( '} />;
    }
    const handleSelectItem = (e: any) => {
        e.preventDefault();
        const selectedId: number = +e.currentTarget.getAttribute('id');
        const selectedItem = productList.find((item: any) => item.id === selectedId);
        const checkIfNoDouble = selectedProducts.find((el: any) => el.id === selectedId);
        checkIfNoDouble === undefined && setSelectedProducts((prevState: any) => prevState.push(selectedItem));
    };

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
                            onSelectProduct={handleSelectItem}
                        />
                    );
                })}
            </ProductsListContainer>
        </>
    );
};
