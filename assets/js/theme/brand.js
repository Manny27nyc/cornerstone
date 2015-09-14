import PageManager from '../page-manager';
import FacetedSearch from './common/faceted-search';

export default class Brand extends PageManager {
    constructor() {
        let $productListingContainer = $('#product-listing-container'),
            $facetedSearchContainer = $('#faceted-search-container'),
            requestOptions = {
                template: {
                    productListing: 'brand/product-listing',
                    sidebar: 'brand/sidebar'
                },
                config: {
                    shop_by_brand: true
                }
            };

        super();

        this.facetedSearch = new FacetedSearch(requestOptions, function(content) {
            $productListingContainer.html(content.productListing);
            $facetedSearchContainer.html(content.sidebar);

            $('html, body').animate({
                scrollTop: 0
            }, 100);
        });
    }
}
