var CartPage = function() {


    this.shopping_empty_cart = element(By.css(".alert"));
    this.emptyCartNotificationText = 'Your shopping cart is empty.';
    this.cartIcon = element(By.css('b'));

}

module.exports = CartPage;
