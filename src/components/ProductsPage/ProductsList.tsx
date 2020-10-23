import React, {useState, useEffect} from 'react';
import {useGetProducts} from '../../hooks/useGetProducts';
import {ProductItemCard} from './ProductItemCard';
import {ProductsListContainer} from './ProductsList.styles';
import {Loader} from '../../helpers/components/Loader/Loader';
import {Error} from '../../helpers/components/Error/Error';
import {CartPanel} from './CartPanel';
import {useSendSelectedProducts} from '../../hooks/useSendSelectedProducts';
export const ProductsList: React.FC = () => {
    const [selectedProducts, setSelectedProducts] = useState([]);
    const {isFetchingGet, getProductList, productList, isErrorGet} = useGetProducts();
    const {isFetchingSend, isErrorSend, calculatedInvPortfolio, sendProducts} = useSendSelectedProducts();

    useEffect(() => {
        getProductList();
    }, [getProductList]);

    if (isFetchingGet || isFetchingSend) {
        return <Loader />;
    }
    if (isErrorGet || isErrorSend) {
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

    const handleSendProducts = (selectedProductsToSend: any) => {
        selectedProductsToSend.map((product: any) => {
            delete product.selected;
            return product;
        });
        const preparedDataToSend: any = {};
        preparedDataToSend.investmentList = selectedProductsToSend;
        sendProducts(preparedDataToSend);
    };

    return (
        <>
            <CartPanel handleSendProducts={handleSendProducts} selectedProducts={selectedProducts} />

            {calculatedInvPortfolio ? (
                <div>Result Component</div>
            ) : (
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
                                isSelected={item.selected}
                            />
                        );
                    })}
                </ProductsListContainer>
            )}
        </>
    );
};
