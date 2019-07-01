var helper = require('../../helper');

var SearchPage = function() {
    this.searchField = element(By.id('search_query_top'));
    this.searchBtn = element(By.css('.button-search'));
    this.searchResults = element(By.css(".ajax_block_product:nth-child(1) .product-name"));
}

module.exports = SearchPage;
