export function addAmountsToSelectedProducts(selectedProducts: any, values: any) {
    selectedProducts = selectedProducts.map((product: any) => {
        product.amount = values[product.name];
        return product;
    });
}
export function calculatePercentageQuota(selectedProducts: any, totalAmount: any) {
    selectedProducts = selectedProducts.map((product: any) => {
        product.percentQuota = (product.amount / totalAmount) * 100;
        return product;
    });
}
