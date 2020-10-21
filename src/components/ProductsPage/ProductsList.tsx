import React, {useState, useEffect} from 'react';
import {useGetProducts} from '../../hooks/useGetProducts';
import {ProductItemCard} from './ProductItemCard';
import {ProductsListContainer} from './ProductsList.styles';
import {Loader} from '../../helpers/components/Loader/Loader';
import {Error} from '../../helpers/components/Error/Error';
import {CartPanel} from './CartPanel';

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
    const handleClickItem = (e: any) => {
        e.preventDefault();
        const clickedId: number = +e.currentTarget.getAttribute('id');
        productList.map(() => {
            const selectedItem = productList.find((item: any) => item.id === clickedId);
            selectedItem.selected = !selectedItem.selected;
            return productList;
        });
        const selectedItems = productList.filter((item: any) => item.selected === true);
        setSelectedProducts(selectedItems);
    };

    return (
        <>
            <CartPanel selectedProducts={selectedProducts} />
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
                            onClickProduct={handleClickItem}
                        />
                    );
                })}
            </ProductsListContainer>
        </>
    );
};
