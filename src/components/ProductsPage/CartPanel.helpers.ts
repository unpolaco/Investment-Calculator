export function addAmountsToSelectedProducts(selectedProducts: any, values: any) {
    selectedProducts = selectedProducts.map((product: any) => {
        product.amount = values[product.name];
        if (product.amount === undefined) {
            product.amount = 0;
        }
        return product;
    });
}
export function calculatePercentageQuota(selectedProducts: any, totalAmount: any) {
    selectedProducts = selectedProducts.map((product: any) => {
        if (totalAmount === 0) {
            product.percentQuota = 0;
        } else {
            product.percentQuota = +((product.amount / totalAmount) * 100).toFixed();
        }
        return product.percentQuota;
    });
}
