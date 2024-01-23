/**
 * @typedef OrderProduct
 * @property {Number} storage - Type of magazine from which the product comes.
 * @property {Number} storage_id - Identifier of the magazine from which the product comes.
 * @property {String} product_id - Product identifier in BaseLinker or store magazine. Blank if the product Number is unknown.
 * @property {Number} variant_dd - Product variant ID. Blank if the variant Number is unknown.
 * @property {String} name - Product name.
 * @property {String} sku - Product SKU.
 * @property {String} ean - Product EAN.
 * @property {String} location - Product location.
 * @property {Number} warehouse_id - Product source warehouse identifier. Only applies to products from BaseLinker inventory.
 * @property {String} attributes - Specific product attributes (e.g. "Color: blue").
 * @property {Number} price_brutto - Single item gross price.
 * @property {Number} tax_rate - VAT tax rate. Value from range 0-100, EXCEPTION values: "-1" for "EXPT"/"ZW" exempt from VAT, "-0.02" for "NP" annotation, "-0.03" for "OO" VAT reverse charge.
 * @property {Number} quantity - Quantity of pieces.
 * @property {Number} weight - Single item weight.
 */

/**
 * @typedef ProductFeature
 * @property {String} name
 * @property {String} value
 */

/**
 * @typedef IdValueObject
 * @property {String} id
 * @property {String} value
 */

/**
 * @typedef PackageSize
 * @property {Number} [length] - Length of the product (in units)
 * @property {Number} [height] - Height of the product (in units)
 * @property {Number} [width] - Width of the product (in units)
 * @property {Number} [weight] - Weight of the product (in units)
 * @property {Number} [size_custom] - Custom size value of the product (in units)
 */

/**
 * @typedef ProductPrice
 * @property {Number} product_id - Product identifier
 * @property {Number} variant_id - Product variant identifier (0 or no value if the main product is changed, not the variant)
 * @property {Number} price_brutto - Price gross
 * @property {Number} price_wholesale_netto - Net wholesale price (not applicable to variants)
 * @property {Number} tax_rate - VAT tax rate e.g. "23", (value from range 0-100, EXCEPTION values: "-1" for "EXPT"/"ZW" exempt from VAT, "-0.02" for "NP" annotation, "-0.03" for "OO" VAT reverse charge) Only one price field can be given (then the second price will not be updated). The VAT rate must always be specified (in case of variants, it is the VAT rate of the main product).
 */

/**
 * @typedef {Integer} ProductId - Description of index 0...
 * @typedef {Integer} VariantId - Description of index 1...
 * @typedef {Integer} StockQuantity - Description of index 1...
 * @typedef {[ProductId, VariantId, StockQuantity]} StockQuantityTuple
 */

/**
 * @typedef {Object} AddCategoryRequest
 * @property {(storage_id: String) => AddCategoryRequest} storage_id Storage ID in format "[type:bl|shop|warehouse]_[id:int]" (e.g. "shop_2445").
 * @property {(category_id: Integer) => AddCategoryRequest} category_id The category identifier to be provided for updates. Should be left blank when creating a new category.
 * @property {(name: String) => AddCategoryRequest} name Category name
 * @property {(parent_id: Integer) => AddCategoryRequest} parent_id The parent category identifier obtained previously at the output of the addCategory method. Categories should be added starting from the hierarchy root so that the child is always added after the parent (you need to know the parent ID to add the child). For the top level category, 0 should be given as parent_id.
 */

/**
 * @typedef {Object} AddInventoryRequest
 * @property {(inventory_id: Integer) => AddInventoryRequest} inventory_id Catalog ID. The list of identifiers can be retrieved using the method getInventories.
 * @property {(name: String) => AddInventoryRequest} name Catalog name
 * @property {(description: String) => AddInventoryRequest} description Catalog description
 * @property {(languages: Array<String>) => AddInventoryRequest} languages An array of languages available in the catalogue.
 * @property {(default_language: String) => AddInventoryRequest} default_language Default catalogue language. Must be included in the "languages" parameter.
 * @property {(price_groups: Array<Integer>) => AddInventoryRequest} price_groups An array of price group identifiers available in the catalogue. The list of price group identifiers can be downloaded using the getInventoryPriceGroups method
 * @property {(default_price_group: Integer) => AddInventoryRequest} default_price_group ID of the price group default for the catalogue. The identifier must be included in the "price_groups" parameter.
 * @property {(warehouses: Array<String>) => AddInventoryRequest} warehouses An array of warehouse identifiers available in the catalogue. The list of warehouse identifiers can be retrieved using the getInventoryWarehouses API method. The format of the identifier should be as follows: "[type:bl|shop|warehouse]_[id:int]". (e.g. "shop_2445")
 * @property {(default_warehouse: String) => AddInventoryRequest} default_warehouse Identifier of the warehouse default for the catalogue.  The identifier must be included in the "warehouses" parameter.
 * @property {(reservations: Boolean) => AddInventoryRequest} reservations Does this catalogue support reservations
 */

/**
 * @typedef {Object} AddInventoryCategoryRequest
 * @property {(inventory_id: Integer) => AddInventoryCategoryRequest} inventory_id Catalog ID. The list of identifiers can be retrieved by the getInventories method (inventory_id field). To add a category available for all catalogs created in BaseLinker, this field should be omitted.
 * @property {(category_id: Integer) => AddInventoryCategoryRequest} category_id The category identifier to be provided for updates. Should be left blank when creating a new category.
 * @property {(name: String) => AddInventoryCategoryRequest} name Category name
 * @property {(parent_id: Integer) => AddInventoryCategoryRequest} parent_id The parent category identifier obtained previously at the output of the addCategory method. Categories should be added starting from the hierarchy root so that the child is always added after the parent (you need to know the parent ID to add the child). For the top level category, 0 should be given as parent_id.
 */

/**
 * @typedef {Object} AddInventoryManufacturerRequest
 * @property {(manufacturer_id: Integer) => AddInventoryManufacturerRequest} manufacturer_id Manufacturer ID provided in case of an update. Should be blank when creating a new manufacturer.
 * @property {(name: String) => AddInventoryManufacturerRequest} name Manufacturer name
 */

/**
 * @typedef {Object} AddInventoryPriceGroupRequest
 * @property {(price_group_id: Integer) => AddInventoryPriceGroupRequest} price_group_id Price group identifier
 * @property {(name: String) => AddInventoryPriceGroupRequest} name Name of the price group
 * @property {(description: String) => AddInventoryPriceGroupRequest} description Price group description
 * @property {(currency: String) => AddInventoryPriceGroupRequest} currency 3-letter currency symbol e.g. PLN, EUR
 */

/**
 * @typedef {Object} AddInventoryProductRequest
 * @property {(inventory_id: String) => AddInventoryProductRequest} inventory_id Catalog ID. The list of identifiers can be retrieved using the method getInventories. (inventory_id field).
 * @property {(product_id: String) => AddInventoryProductRequest} product_id Main product identifier, given only during the update. Should be left blank when creating a new product. The new product identifier is returned as a response to this method.
 * @property {(parent_id: String) => AddInventoryProductRequest} parent_id Product parent ID. To be provided only if the added/edited product is a variant of another product.
 * @property {(is_bundle: Boolean) => AddInventoryProductRequest} is_bundle Is the given product a part of a bundle
 * @property {(ean: String) => AddInventoryProductRequest} ean Product EAN number.
 * @property {(sku: String) => AddInventoryProductRequest} sku Product SKU number.
 * @property {(tax_rate: Number) => AddInventoryProductRequest} tax_rate VAT tax rate e.g. "23", (value from range 0-100, EXCEPTION values: "-1" for "EXPT"/"ZW" exempt from VAT, "-0.02" for "NP" annotation, "-0.03" for "OO" VAT reverse charge)
 * @property {(weight: Number) => AddInventoryProductRequest} weight Weight in kilograms.
 * @property {(height: Number) => AddInventoryProductRequest} height Product height
 * @property {(width: Number) => AddInventoryProductRequest} width Product width
 * @property {(length: Number) => AddInventoryProductRequest} length Product length
 * @property {(star: Integer) => AddInventoryProductRequest} star Product star type. It takes from 0 to 5 values. 0 means no starring.
 * @property {(manufacturer_id: Integer) => AddInventoryProductRequest} manufacturer_id Product manufacturer ID. IDs can be retrieved with getInventoryManufacturers method.
 * @property {(category_id: Integer) => AddInventoryProductRequest} category_id Product category ID (category must be previously created with addInventoryCategories) method.
 * @property {(prices: Object) => AddInventoryProductRequest} prices A list containing product prices, where the key is the price group ID and value is a product gross price for a given price group. The list of price groups can be retrieved with getInventoryPriceGroups method.
 * @property {(stock: Object) => AddInventoryProductRequest} stock A list containing product stocks, where the key is the warehouse ID and value is a product stock for a given warehouse. Warehouse ID should have this format: "bl_[id:int]" (eg. "bl_123").The list of warehouse IDs can be retrieved with getInventoryWarehouses method. Stocks cannot be assigned to the warehouses created automatically for purposes of keeping external stocks (shops, wholesalers, etc.).
 * @property {(locations: Object) => AddInventoryProductRequest} locations A list containing product locations where the key is the warehouse ID and value is a product location for a given warehouse, eg. "A-5-2". Warehouse ID should have this format: "[type:bl|shop|warehouse]_[id:int]" (eg. "bl_123"). The list of warehouse IDs can be retrieved with getInventoryWarehouses method.
 * @property {(text_fields: Object) => AddInventoryProductRequest} text_fields A list containing field text values (names, descriptions, etc.) of a product, where the key is the field text ID and value is the field value. The field text ID consists of the following components separated with the "|" character:[field] - Field name. Accepted field names: "name", "description", "features", "description_extra1", "description_extra2", "description_extra3", "description_extra4", "extra_field_[extra-field-ID]" e.g. "extra_field_75". The list of extra fields IDs can be retrieved with getInventoryExtraFields method.[lang] - A two-letter code of language, which gets assigned given value e.g. "en". If this value is not specified, the default catalog language is assigned. The list of languages available for each integration can be retrieved with getInventoryIntegrations method.[source_id] - Integration ID provided when the given text field value is to be overwritten only for a specific integration. ID should have a following format: "[type:varchar]_[id:int]", where the type means a kind of integration (e.g. "ebay", "amazon", "google"), and ID is an account identifier for given integration (eg. "ebay_2445").If a value is to be overwritten throughout the integration (e.g. for all Amazon accounts), the value "0" should be used as the identifier. (e.g. "amazon_0").Examples of text field identifiers: "name" - Default name assigned to the default language."name|de" - Name assigned to a particular language."name|de|amazon_0" - Name assigned to a specific language for all Amazon accounts."name|de|amazon_123" - Name assigned to a specific language for an Amazon account with ID 123.The list of all text field identifiers can be retrieved with the getInventoryAvailableTextFieldKeys method.In the case of the name and short additional fields, the character limit for the field value is 200. When specifying the value of a product feature (field "features"), provide a list where the key is the name of the parameter (e.g. "Colour") and the value is the value of that parameter (e.g. "White").In case of file the following format is expected:{&nbsp;&nbsp;&nbsp;&nbsp;"title": "file.pdf" (varchar(40) - the file name)&nbsp;&nbsp;&nbsp;&nbsp;"file": "data:4AAQSkZJRgABA[...]" (binary - the file body limited to 2MB)}
 * @property {(images: Object) => AddInventoryProductRequest} images A list of product images (maximum 16). Each element of the list is a separate photo where the key is the photo position in the gallery (numbering from 0 to 15). You can delete a photo by sending "" at the selected position. You can submit a photo in binary format, or a link to the photo. In case of binary format, the photo should be coded in base64 and at the very beginning of the photo string the prefix "data:" should be provided. In case of link to the photo, the prefix "url:" must be given before the link. Example:{&nbsp;&nbsp;&nbsp;&nbsp;"0": "url:http://adres.pl/zdjecie.jpg", (url - the photo url limited to 1000 characters length)&nbsp;&nbsp;&nbsp;&nbsp;"3": "data:4AAQSkZJRgABA[...]", (binary - the photo content limited to 2MB)&nbsp;&nbsp;&nbsp;&nbsp;"5": "", (empty - to delete the photo)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...}
 * @property {(links: Object) => AddInventoryProductRequest} links An array containing product links to external warehouses (e.g. shops, wholesalers). Each element of the array is a list in which the key is the identifier of the external warehouse in the format "[type:shop|warehouse]_[id:int]". (e.g. "shop_2445"). The warehouse identifiers can be retrieved with the getStoragesList method. The value is an array containing the fields listed below.
 * @property {(bundle_products: Object) => AddInventoryProductRequest} bundle_products A list containing information about the products included in the bundle, where the key is the identifier of the product included in the bundle, and the value is the number of pieces of this product in the bundle.Subproducts can only be defined if the added/edited product is a bundle (is_bundle = true).
 */

/**
 * @typedef {Object} AddInventoryWarehouseRequest
 * @property {(warehouse_id: Integer) => AddInventoryWarehouseRequest} warehouse_id ID of the warehouse
 * @property {(name: String) => AddInventoryWarehouseRequest} name Warehouse name
 * @property {(description: String) => AddInventoryWarehouseRequest} description Warehouse description
 * @property {(stock_edition: Boolean) => AddInventoryWarehouseRequest} stock_edition Is manual editing of stocks permitted. A false value means that you can only edit your stock through the API.
 */

/**
 * @typedef {Object} AddInvoiceRequest
 * @property {(order_id: Integer) => AddInvoiceRequest} order_id Order Identifier from BaseLinker order manager 
 * @property {(series_id: Integer) => AddInvoiceRequest} series_id Series numbering identifier
 * @property {(vat_rate: Number) => AddInvoiceRequest} vat_rate (optional) VAT rate - parameter accepts values:- "DEFAULT": according to the numbering series (is set as default value)- "ITEM": use the rate assigned to the item of the order- "EXPT" / "ZW": exempt from VAT- "NP": annotation NP- "OO": VAT reverse charge- value: number from range 0-100
 */

/**
 * @typedef {Object} AddOrderRequest
 * @property {(order_status_id: Integer) => AddOrderRequest} order_status_id Order status (the list available to retrieve with getOrderStatusList)
 * @property {(custom_source_id: Integer) => AddOrderRequest} custom_source_id (optional) Identifier of custom order source defined in BaseLinker panel. If not provided, default order source is assigned.
 * @property {(date_add: Integer) => AddOrderRequest} date_add Date of order creation (in unix time format)
 * @property {(currency: String) => AddOrderRequest} currency 3-letter currency symbol (e.g. EUR, PLN)
 * @property {(payment_method: String) => AddOrderRequest} payment_method Payment method
 * @property {(payment_method_cod: Boolean) => AddOrderRequest} payment_method_cod Flag indicating whether the type of payment is COD (cash on delivery)
 * @property {(paid: Boolean) => AddOrderRequest} paid Information whether the order is already paid. The value "1" automatically adds a full payment to the order.
 * @property {(user_comments: String) => AddOrderRequest} user_comments Buyer comments
 * @property {(admin_comments: String) => AddOrderRequest} admin_comments Seller comments
 * @property {(email: String) => AddOrderRequest} email Buyer e-mail address
 * @property {(phone: String) => AddOrderRequest} phone Buyer phone number
 * @property {(user_login: String) => AddOrderRequest} user_login Allegro or eBay user login
 * @property {(delivery_method: String) => AddOrderRequest} delivery_method Delivery method name
 * @property {(delivery_price: Number) => AddOrderRequest} delivery_price Gross delivery price
 * @property {(delivery_fullname: String) => AddOrderRequest} delivery_fullname Delivery address - name and surname
 * @property {(delivery_company: String) => AddOrderRequest} delivery_company Delivery address - company
 * @property {(delivery_address: String) => AddOrderRequest} delivery_address Delivery address - street and number
 * @property {(delivery_postcode: String) => AddOrderRequest} delivery_postcode Delivery address - postcode
 * @property {(delivery_city: String) => AddOrderRequest} delivery_city Delivery address - city
 * @property {(delivery_state: String) => AddOrderRequest} delivery_state Delivery address - state/province
 * @property {(delivery_country_code: String) => AddOrderRequest} delivery_country_code Delivery address - country code (two-letter, e.g. EN)
 * @property {(delivery_point_id: String) => AddOrderRequest} delivery_point_id Pick-up point delivery - pick-up point identifier
 * @property {(delivery_point_name: String) => AddOrderRequest} delivery_point_name Pick-up point delivery - pick-up point name
 * @property {(delivery_point_address: String) => AddOrderRequest} delivery_point_address Pick-up point delivery - pick-up point address
 * @property {(delivery_point_postcode: String) => AddOrderRequest} delivery_point_postcode Pick-up point delivery - pick-up point postcode
 * @property {(delivery_point_city: String) => AddOrderRequest} delivery_point_city Pick-up point delivery - pick-up point city
 * @property {(invoice_fullname: String) => AddOrderRequest} invoice_fullname Billing details - name and surname
 * @property {(invoice_company: String) => AddOrderRequest} invoice_company Billing details - company
 * @property {(invoice_nip: String) => AddOrderRequest} invoice_nip Billing details - Vat Reg. no./tax number
 * @property {(invoice_address: String) => AddOrderRequest} invoice_address Billing details - street and house number
 * @property {(invoice_postcode: String) => AddOrderRequest} invoice_postcode Billing details - postcode
 * @property {(invoice_city: String) => AddOrderRequest} invoice_city Billing details - city
 * @property {(invoice_state: String) => AddOrderRequest} invoice_state Billing details - state/province
 * @property {(invoice_country_code: String) => AddOrderRequest} invoice_country_code Billing details - country code (two-letter, e.g. EN)
 * @property {(want_invoice: Boolean) => AddOrderRequest} want_invoice Flag indicating whether the customer wants an invoice (1 - yes, 0 - no)
 * @property {(extra_field_1: String) => AddOrderRequest} extra_field_1 Value of the "additional field 1". - the seller can store any information there
 * @property {(extra_field_2: String) => AddOrderRequest} extra_field_2 Value of the "additional field 2". - the seller can store any information there
 * @property {(custom_extra_fields: Object) => AddOrderRequest} custom_extra_fields A list containing order custom extra fields, where the key is the extra field ID and value is an extra field content for given extra field. The list of extra fields can be retrieved with getOrderExtraFields method.In case of removing a field the empty string is expected.In case of file the following format is expected:{&nbsp;&nbsp;&nbsp;&nbsp;"title": "file.pdf" (varchar(40) - the file name)&nbsp;&nbsp;&nbsp;&nbsp;"file": "data:4AAQSkZJRgABA[...]" (binary - the file body limited to 2MB)}
 * @property {(products: Array<OrderProduct>) => AddOrderRequest} products Order product array. Each element of the array is also an array containing fields:storage (varchar) - type of magazine from which the product comes (available values: "db" - BaseLinker internal catalog, "shop" - the online store magazine, "warehouse" - a connected wholesaler).storage_id (int) - the identifier of the magazine from which the product comes (one of the shops connected to the account). Value "0" for a product from the BaseLinker internal catalog.product_id (varchar) - Product identifier in BaseLinker or store magazine. Blank if the product number is unknownvariant_id (int) - Product variant ID. Blank if the variant number is unknownname (varchar) - Product namesku (varchar) - Product skuean (varchar) - Product eanlocation (varchar) - Product locationwarehouse_id (int) - Product source warehouse identifier. Only applies to products from BaseLinker inventory. By default warehouse_id is determined based on the source of the order.attributes (varchar) - Specific product attributes (e.g. "Color: blue")price_brutto (float) - Single item gross pricetax_rate (float) - VAT tax rate e.g. "23", (value from range 0-100, EXCEPTION values: "-1" for "EXPT"/"ZW" exempt from VAT, "-0.02" for "NP" annotation, "-0.03" for "OO" VAT reverse charge)quantity (int) - Quantity of piecesweight (float) - Single item weight
 */

/**
 * @typedef {Object} AddOrderInvoiceFileRequest
 * @property {(invoice_id: Integer) => AddOrderInvoiceFileRequest} invoice_id BaseLinker invoice identifier
 * @property {(file: String) => AddOrderInvoiceFileRequest} file Invoice PDF file in binary format encoded in base64, at the very beginning of the invoice string provide a prefix "data:" e.g. "data:4AAQSkSzkJRgABA[...]"
 * @property {(external_invoice_number: String) => AddOrderInvoiceFileRequest} external_invoice_number External system invoice number (overwrites BaseLinker invoice number)
 */

/**
 * @typedef {Object} AddOrderProductRequest
 * @property {(order_id: Integer) => AddOrderProductRequest} order_id Order Identifier from BaseLinker order manager 
 * @property {(storage: String) => AddOrderProductRequest} storage Type of product source storage (available values: "db" - BaseLinker internal catalog, "shop" - online shop storage, "warehouse" - the connected wholesaler)
 * @property {(storage_id: String) => AddOrderProductRequest} storage_id The identifier of the storage (inventory/shop/warehouse) from which the product comes.
 * @property {(product_id: String) => AddOrderProductRequest} product_id Product identifier in BaseLinker or shop storage. Blank if the product number is not known
 * @property {(variant_id: String) => AddOrderProductRequest} variant_id Product variant ID. Blank if the variant number is unknown
 * @property {(auction_id: String) => AddOrderProductRequest} auction_id Listing ID number (if the order comes from ebay/allegro)
 * @property {(name: String) => AddOrderProductRequest} name Product name
 * @property {(sku: String) => AddOrderProductRequest} sku Product SKU number
 * @property {(ean: String) => AddOrderProductRequest} ean Product EAN number
 * @property {(location: String) => AddOrderProductRequest} location Product location
 * @property {(warehouse_id: Integer) => AddOrderProductRequest} warehouse_id Product source warehouse identifier. Only applies to products from BaseLinker inventory. By default warehouse_id is determined based on the warehouse identifiers in the existing products of the order. If no such product exist, it will be determined based on the source of the order
 * @property {(attributes: String) => AddOrderProductRequest} attributes The detailed product attributes, e.g. "Colour: blue" (Variant name)
 * @property {(price_brutto: Number) => AddOrderProductRequest} price_brutto Single item gross price
 * @property {(tax_rate: Number) => AddOrderProductRequest} tax_rate VAT tax rate e.g. "23", (value from range 0-100, EXCEPTION values: "-1" for "EXPT"/"ZW" exempt from VAT, "-0.02" for "NP" annotation, "-0.03" for "OO" VAT reverse charge)
 * @property {(quantity: Integer) => AddOrderProductRequest} quantity Number of pieces
 * @property {(weight: Number) => AddOrderProductRequest} weight Single piece weight
 */

/**
 * @typedef {Object} AddOrderReceiptFileRequest
 * @property {(receipt_id: Integer) => AddOrderReceiptFileRequest} receipt_id BaseLinker receipt identifier
 * @property {(file: String) => AddOrderReceiptFileRequest} file Receipt PDF file in binary format encoded in base64, at the very beginning of the receipt string provide a prefix "data:" e.g. "data:4AAQSkSzkJRgABA[...]"
 * @property {(external_receipt_number: String) => AddOrderReceiptFileRequest} external_receipt_number External system receipt number (overwrites BaseLinker receipt number)
 */

/**
 * @typedef {Object} AddProductRequest
 * @property {(storage_id: String) => AddProductRequest} storage_id Storage ID in format "[type:bl|shop|warehouse]_[id:int]" (e.g. "shop_2445").
 * @property {(product_id: String) => AddProductRequest} product_id Main product identifier, given only during the update. Should be left blank when creating a new product. The new product identifier is returned as a response to this method.
 * @property {(ean: String) => AddProductRequest} ean Product EAN number.
 * @property {(sku: String) => AddProductRequest} sku Product SKU number.
 * @property {(name: String) => AddProductRequest} name Product name
 * @property {(quantity: Integer) => AddProductRequest} quantity Stock quantity
 * @property {(price_brutto: Number) => AddProductRequest} price_brutto Price gross
 * @property {(price_wholesale_netto: Number) => AddProductRequest} price_wholesale_netto Net wholesale price
 * @property {(tax_rate: Number) => AddProductRequest} tax_rate VAT tax rate e.g. "23", (value from range 0-100, EXCEPTION values: "-1" for "EXPT"/"ZW" exempt from VAT, "-0.02" for "NP" annotation, "-0.03" for "OO" VAT reverse charge)
 * @property {(weight: Number) => AddProductRequest} weight Weight in kilograms
 * @property {(description: String) => AddProductRequest} description Product description
 * @property {(description_extra1: String) => AddProductRequest} description_extra1 Additional product description
 * @property {(description_extra2: String) => AddProductRequest} description_extra2 Additional product description
 * @property {(description_extra3: String) => AddProductRequest} description_extra3 Additional product description
 * @property {(description_extra4: String) => AddProductRequest} description_extra4 Additional product description
 * @property {(man_name: String) => AddProductRequest} man_name Manufacturer name
 * @property {(category_id: Integer) => AddProductRequest} category_id Product category ID (the category must be created earlier with the addCategories method)
 * @property {(images: Array<String>) => AddProductRequest} images An array of product images (maximum 16). Each element of the array is a separate photo. You can submit a photo in binary format, or a link to the photo. In case of binary format, the photo should be coded in base64 and at the very beginning of the photo string the prefix "data:" should be provided. In case of link to the photo, the prefix "url:" must be given before the link. Example:images[0] = "url:http://adres.pl/image.jpg";images[1] = "data:4AAQSkZJRgABA[...]";
 * @property {(features: Array<ProductFeature>) => AddProductRequest} features An array of product features in the form of a list. Each array element is an object containing two fields:name (varchar) - parameter name e.g. "resolution"value (varchar) - parameter value, e.g. "Full HD"If the parameter name is identical to the name of the parameter used in categories of the Allegro.pl website, the parameter will be automatically completed when listing the offer, which will considerably facilitate the product listing for the seller,
 */

/**
 * @typedef {Object} AddProductVariantRequest
 * @property {(storage_id: String) => AddProductVariantRequest} storage_id Storage ID in format "[type:bl|shop|warehouse]_[id:int]" (e.g. "shop_2445").
 * @property {(product_id: String) => AddProductVariantRequest} product_id Product ID.
 * @property {(variant_id: String) => AddProductVariantRequest} variant_id Product variant ID. Given only for updates. Should be left blank when creating a new variant. The new variant identifier is returned as a response to this method.
 * @property {(name: String) => AddProductVariantRequest} name Variant name
 * @property {(quantity: Integer) => AddProductVariantRequest} quantity Stock quantity
 * @property {(price_brutto: Number) => AddProductVariantRequest} price_brutto Price gross
 * @property {(sku: String) => AddProductVariantRequest} sku Product SKU number.
 * @property {(ean: String) => AddProductVariantRequest} ean Product EAN number.
 */

/**
 * @typedef {Object} CreatePackageRequest
 * @property {(order_id: Integer) => CreatePackageRequest} order_id Order identifier
 * @property {(courier_code: String) => CreatePackageRequest} courier_code Courier code
 * @property {(account_id: Integer) => CreatePackageRequest} account_id (optional) Courier API account id for the courier accounts retrieved from the request getCourierAccountsIf blank, the first account will be used.
 * @property {(fields: Array<IdValueObject>) => CreatePackageRequest} fields List of form fields retrieved from the request getCourierFieldsFor checkbox with multiple selection, the information should be sent in separate arrays e.g.[&nbsp;&nbsp;{&nbsp;&nbsp;&nbsp;&nbsp;"id":"services",&nbsp;&nbsp;&nbsp;&nbsp;"value":"sms"&nbsp;&nbsp;},&nbsp;&nbsp;{&nbsp;&nbsp;&nbsp;&nbsp;"id":"services",&nbsp;&nbsp;&nbsp;&nbsp;"value":"email"&nbsp;&nbsp;},]
 * @property {(packages: Array<PackageSize>) => CreatePackageRequest} packages Array of shipments list, weight of at least one shipment required. The array includes fields received in response to the request getCourierFields. The response returns also information whether the courier supports multiple shipments.s                As a key use the field 'id' retrieved from the packages_fields parameter in response of the getCourierFields method.s                As a value of field provide a value compatible with the field type from the getCourierFields response. Height, length, width should be sent in centimeters. Weight should be sent in kilograms.E.g.[&nbsp;&nbsp;"weight":"1",&nbsp;&nbsp;"height":"25",]
 */

/**
 * @typedef {Object} CreatePackageManualRequest
 * @property {(order_id: Integer) => CreatePackageManualRequest} order_id Order identifier
 * @property {(courier_code: String) => CreatePackageManualRequest} courier_code Courier code (courier code retrieved with getCourierList or custom courier name)
 * @property {(package_number: String) => CreatePackageManualRequest} package_number Shipping number (consignment number)
 * @property {(pickup_date: Integer) => CreatePackageManualRequest} pickup_date Date of dispatch (unix time format)
 * @property {(return_shipment: Boolean) => CreatePackageManualRequest} return_shipment (optional, false by default) Marks package as return shipment
 */

/**
 * @typedef {Object} DeleteCategoryRequest
 * @property {(storage_id: String) => DeleteCategoryRequest} storage_id Storage ID in format "[type:bl|shop|warehouse]_[id:int]" (e.g. "shop_2445").
 * @property {(category_id: Integer) => DeleteCategoryRequest} category_id The number of the category to be removed in the BaseLinker storage.
 */

/**
 * @typedef {Object} DeleteCourierPackageRequest
 * @property {(courier_code: String) => DeleteCourierPackageRequest} courier_code Courier code
 * @property {(package_id: Integer) => DeleteCourierPackageRequest} package_id Shipment ID, optional if package_number is provided
 * @property {(package_number: String) => DeleteCourierPackageRequest} package_number Shipping number (consignment number), optional if package_id was provided
 * @property {(force_delete: Boolean) => DeleteCourierPackageRequest} force_delete (optional, false by default) Forcing a shipment to be removed from BaseLinker database in the case of an error with the removal of the shipment in the courier API.
 */

/**
 * @typedef {Object} DeleteInventoryRequest
 * @property {(inventory_id: Integer) => DeleteInventoryRequest} inventory_id Catalog ID. The list of identifiers can be retrieved using the method getInventories.
 */

/**
 * @typedef {Object} DeleteInventoryCategoryRequest
 * @property {(category_id: Integer) => DeleteInventoryCategoryRequest} category_id The number of the category to be removed in the BaseLinker storage.
 */

/**
 * @typedef {Object} DeleteInventoryManufacturerRequest
 * @property {(manufacturer_id: Integer) => DeleteInventoryManufacturerRequest} manufacturer_id The ID of the manufacturer removed from BaseLinker warehouse.
 */

/**
 * @typedef {Object} DeleteInventoryPriceGroupRequest
 * @property {(price_group_id: Integer) => DeleteInventoryPriceGroupRequest} price_group_id Price group identifier
 */

/**
 * @typedef {Object} DeleteInventoryProductRequest
 * @property {(product_id: Integer) => DeleteInventoryProductRequest} product_id BaseLinker catalogue product identifier
 */

/**
 * @typedef {Object} DeleteInventoryWarehouseRequest
 * @property {(warehouse_id: Integer) => DeleteInventoryWarehouseRequest} warehouse_id ID of the warehouse
 */

/**
 * @typedef {Object} DeleteOrderProductRequest
 * @property {(order_id: Integer) => DeleteOrderProductRequest} order_id Order ID from BaseLinker order manager.
 * @property {(order_product_id: Integer) => DeleteOrderProductRequest} order_product_id Order item ID from BaseLinker order manager.
 */

/**
 * @typedef {Object} DeleteProductRequest
 * @property {(storage_id: String) => DeleteProductRequest} storage_id Storage ID in format "[type:bl|shop|warehouse]_[id:int]" (e.g. "shop_2445").
 * @property {(product_id: String) => DeleteProductRequest} product_id Product identifier from BaseLinker storage
 */

/**
 * @typedef {Object} DeleteProductVariantRequest
 * @property {(storage_id: String) => DeleteProductVariantRequest} storage_id Storage ID in format "[type:bl|shop|warehouse]_[id:int]" (e.g. "shop_2445").
 * @property {(product_id: String) => DeleteProductVariantRequest} product_id Product identifier from BaseLinker storage
 * @property {(variant_id: String) => DeleteProductVariantRequest} variant_id Product variant identifier from BaseLinker storage
 */

/**
 * @typedef {Object} GetCategoriesRequest
 * @property {(storage_id: String) => GetCategoriesRequest} storage_id Storage ID in format "[type:bl|shop|warehouse]_[id:int]" (e.g. "shop_2445").
 */

/**
 * @typedef {Object} GetCourierAccountsRequest
 * @property {(courier_code: String) => GetCourierAccountsRequest} courier_code Courier code
 */

/**
 * @typedef {Object} GetCourierFieldsRequest
 * @property {(courier_code: String) => GetCourierFieldsRequest} courier_code Courier code
 */

/**
 * @typedef {Object} GetCourierPackagesStatusHistoryRequest
 * @property {(package_ids: Array<String>) => GetCourierPackagesStatusHistoryRequest} package_ids An array with a list of parcel IDs.
 */

/**
 * @typedef {Object} GetCourierServicesRequest
 * @property {(courier_code: String) => GetCourierServicesRequest} courier_code Courier code
 * @property {(package_number: String) => GetCourierServicesRequest} package_number Shipping number (consignment number)
 * @property {(account_id: Integer) => GetCourierServicesRequest} account_id (optional) Courier API account id for the courier accounts retrieved from the request getCourierAccountsIf blank, the first account will be used.
 * @property {(fields: Array<IdValueObject>) => GetCourierServicesRequest} fields Fields same as in createPackage" function
 * @property {(packages: Array<PackageSize>) => GetCourierServicesRequest} packages Fields same as in createPackage" function
 */

/**
 * @typedef {Object} GetCouriersListRequest
 */

/**
 * @typedef {Object} GetExternalStorageCategoriesRequest
 * @property {(storage_id: String) => GetExternalStorageCategoriesRequest} storage_id Storage ID in format "[type:shop|warehouse]_[id:int]"  (e.g. "shop_2445").
 */

/**
 * @typedef {Object} GetExternalStorageProductsDataRequest
 * @property {(storage_id: String) => GetExternalStorageProductsDataRequest} storage_id Storage ID in format "[type:shop|warehouse]_[id:int]"  (e.g. "shop_2445").
 * @property {(products: Array<Integer>) => GetExternalStorageProductsDataRequest} products An array of product ID numbers to download
 */

/**
 * @typedef {Object} GetExternalStorageProductsListRequest
 * @property {(storage_id: String) => GetExternalStorageProductsListRequest} storage_id Storage ID in format "[type:shop|warehouse]_[id:int]"  (e.g. "shop_2445").
 * @property {(filter_category_id: String) => GetExternalStorageProductsListRequest} filter_category_id (optional) Retrieving products from a specific category (optional)
 * @property {(filter_sort: String) => GetExternalStorageProductsListRequest} filter_sort (optional) the value for sorting the product list. Possible values:s                                                                                                                            "id [ASC|DESC]", "name [ASC|DESC]", "quantity [ASC|DESC]", "price [ASC|DESC]"
 * @property {(filter_id: String) => GetExternalStorageProductsListRequest} filter_id (optional) limiting results to a specific product id
 * @property {(filter_ean: String) => GetExternalStorageProductsListRequest} filter_ean (optional) limiting results to a specific ean
 * @property {(filter_sku: String) => GetExternalStorageProductsListRequest} filter_sku (optional) limiting the results to a specific SKU (stock keeping number)
 * @property {(filter_name: String) => GetExternalStorageProductsListRequest} filter_name (optional) item name filter (part of the searched name or an empty field)
 * @property {(filter_price_from: Number) => GetExternalStorageProductsListRequest} filter_price_from (optional) minimum price limit (not displaying products with lower price)
 * @property {(filter_price_to: Number) => GetExternalStorageProductsListRequest} filter_price_to (optional) maximum price limit
 * @property {(filter_quantity_from: Integer) => GetExternalStorageProductsListRequest} filter_quantity_from (optional) minimum quantity limit
 * @property {(filter_quantity_to: Integer) => GetExternalStorageProductsListRequest} filter_quantity_to (optional) maximum quantity limit
 * @property {(filter_available: Integer) => GetExternalStorageProductsListRequest} filter_available (optional) displaying only products marked as available (value 1) or not available (0) or all (empty value)
 * @property {(page: Integer) => GetExternalStorageProductsListRequest} page (NOWY) (nieobowiązkowe) Stronicowanie wyników
 */

/**
 * @typedef {Object} GetExternalStorageProductsPricesRequest
 * @property {(storage_id: String) => GetExternalStorageProductsPricesRequest} storage_id Storage ID in format "[type:shop|warehouse]_[id:int]"  (e.g. "shop_2445").
 * @property {(page: Integer) => GetExternalStorageProductsPricesRequest} page (optional) Results paging
 */

/**
 * @typedef {Object} GetExternalStorageProductsQuantityRequest
 * @property {(storage_id: String) => GetExternalStorageProductsQuantityRequest} storage_id Storage ID in format "[type:shop|warehouse]_[id:int]"  (e.g. "shop_2445").
 * @property {(page: Integer) => GetExternalStorageProductsQuantityRequest} page (optional) Results paging
 */

/**
 * @typedef {Object} GetExternalStoragesListRequest
 */

/**
 * @typedef {Object} GetInventoriesRequest
 */

/**
 * @typedef {Object} GetInventoryAvailableTextFieldKeysRequest
 * @property {(inventory_id: Integer) => GetInventoryAvailableTextFieldKeysRequest} inventory_id Catalog ID. The list of identifiers can be retrieved by the getInventories method (inventory_id field).
 */

/**
 * @typedef {Object} GetInventoryCategoriesRequest
 * @property {(inventory_id: Integer) => GetInventoryCategoriesRequest} inventory_id Catalog ID. The list of identifiers can be retrieved by the getInventories method (inventory_id field). To retrieve categories available for all catalogs created in BaseLinker, this field should be omitted.
 */

/**
 * @typedef {Object} GetInventoryExtraFieldsRequest
 */

/**
 * @typedef {Object} GetInventoryIntegrationsRequest
 * @property {(inventory_id: Integer) => GetInventoryIntegrationsRequest} inventory_id Catalog ID. The list of identifiers can be retrieved by the getInventories method (inventory_id field).
 */

/**
 * @typedef {Object} GetInventoryManufacturersRequest
 */

/**
 * @typedef {Object} GetInventoryPriceGroupsRequest
 */

/**
 * @typedef {Object} GetInventoryProductLogsRequest
 * @property {(product_id: Integer) => GetInventoryProductLogsRequest} product_id Product identifier. In case of retrieving logs for a variant, the variant identifier must be provided as the product identifier.
 * @property {(date_from: Integer) => GetInventoryProductLogsRequest} date_from (optional) Date from which logs are to be retrieved. Unix time stamp format.
 * @property {(date_to: Integer) => GetInventoryProductLogsRequest} date_to (optional) Date up to which logs are to be retrieved. Unix time stamp format.
 * @property {(log_type: Integer) => GetInventoryProductLogsRequest} log_type (optional) List of event types you want to retrieve. Available values:1 - Change in stocks                    2 - Price changes                    3 - Product creations                    4 - Product deletions                    5 - Text fields modificationss                    6 - Locations modificationss                    7 - Modifications of linkss                    8 - Gallery modificationss                    9 - Variant modificationss                    10 - Modifications of bundle products
 * @property {(sort: Integer) => GetInventoryProductLogsRequest} sort (optional) Type of log sorting. Possible "ASC" values ( ascending from date), "DESC" (descending after the date). By default the sorting is done in ascending order.
 * @property {(page: Integer) => GetInventoryProductLogsRequest} page (optional) Results paging (100 product editions per page).
 */

/**
 * @typedef {Object} GetInventoryProductsDataRequest
 * @property {(inventory_id: Integer) => GetInventoryProductsDataRequest} inventory_id Catalog ID. The list of identifiers can be retrieved using the method getInventories.
 * @property {(products: Array<Integer>) => GetInventoryProductsDataRequest} products An array of product ID numbers to download
 */

/**
 * @typedef {Object} GetInventoryProductsListRequest
 * @property {(inventory_id: Integer) => GetInventoryProductsListRequest} inventory_id Catalog ID. The list of identifiers can be retrieved using the method getInventories.
 * @property {(filter_id: Integer) => GetInventoryProductsListRequest} filter_id (optional) limiting results to a specific product id
 * @property {(filter_category_id: Integer) => GetInventoryProductsListRequest} filter_category_id (optional) Retrieving products from a specific category (optional)
 * @property {(filter_ean: String) => GetInventoryProductsListRequest} filter_ean (optional) limiting results to a specific ean
 * @property {(filter_sku: String) => GetInventoryProductsListRequest} filter_sku (optional) limiting the results to a specific SKU (stock keeping number)
 * @property {(filter_name: String) => GetInventoryProductsListRequest} filter_name (optional) item name filter (part of the searched name or an empty field)
 * @property {(filter_price_from: Number) => GetInventoryProductsListRequest} filter_price_from (optional) minimum price limit (not displaying products with lower price)
 * @property {(filter_price_to: Number) => GetInventoryProductsListRequest} filter_price_to (optional) maximum price limit
 * @property {(filter_stock_from: Integer) => GetInventoryProductsListRequest} filter_stock_from (optional) minimum quantity limit
 * @property {(filter_stock_to: Integer) => GetInventoryProductsListRequest} filter_stock_to (optional) maximum quantity limit
 * @property {(page: Integer) => GetInventoryProductsListRequest} page (optional) Results paging (1000 products per page for BaseLinker warehouse)
 * @property {(filter_sort: String) => GetInventoryProductsListRequest} filter_sort (optional) the value for sorting the product list. Possible values: "id [ASC|DESC]"
 */

/**
 * @typedef {Object} GetInventoryProductsPricesRequest
 * @property {(inventory_id: Integer) => GetInventoryProductsPricesRequest} inventory_id Catalog ID. The list of identifiers can be retrieved using the method getInventories.
 * @property {(page: Integer) => GetInventoryProductsPricesRequest} page (optional) Results paging (1000 products per page for BaseLinker warehouse)
 */

/**
 * @typedef {Object} GetInventoryProductsStockRequest
 * @property {(inventory_id: Integer) => GetInventoryProductsStockRequest} inventory_id Catalog ID. The list of identifiers can be retrieved using the method getInventories.
 * @property {(page: Integer) => GetInventoryProductsStockRequest} page (optional) Results paging (1000 products per page for BaseLinker warehouse)
 */

/**
 * @typedef {Object} GetInventoryWarehousesRequest
 */

/**
 * @typedef {Object} GetInvoiceFileRequest
 * @property {(invoice_id: Integer) => GetInvoiceFileRequest} invoice_id BaseLinker invoice identifier
 * @property {(get_external: Boolean) => GetInvoiceFileRequest} get_external false (by default) - download invoice file generated by BaseLinkertrue - download an invoice from an external accounting system (if provided there), or an invoice uploaded by API. If an additional invoice file does not exist, an invoice in BaseLinker format will be returneds        
 */

/**
 * @typedef {Object} GetInvoicesRequest
 * @property {(invoice_id: Integer) => GetInvoicesRequest} invoice_id (optional) Invoice identifier. Completing this field will result in downloading information about only one specific invoice.
 * @property {(order_id: Integer) => GetInvoicesRequest} order_id (optional) Order identifier. Completing this field will result in downloading information only about the invoice associated with this order (if the order has an invoice created).
 * @property {(date_from: Integer) => GetInvoicesRequest} date_from (optional) Date from which invoices are to be collected. Unix time stamp format.
 * @property {(id_from: Integer) => GetInvoicesRequest} id_from (optional) The invoice ID number from which subsequent invoices are to be retrieved.
 * @property {(series_id: Integer) => GetInvoicesRequest} series_id (optional) numbering series ID that allows filtering after the invoice numbering series.
 * @property {(get_external_invoices: Boolean) => GetInvoicesRequest} get_external_invoices If set to 'false' then omits from the results invoices that already have an external invoice file uploaded by addOrderInvoiceFile method (useful for ERP integrations uploading invoice files to BaseLinker)
 */

/**
 * @typedef {Object} GetJournalListRequest
 * @property {(last_log_id: Integer) => GetJournalListRequest} last_log_id Log ID number from which the logs are to be retrieved
 * @property {(logs_types: Array<Integer>) => GetJournalListRequest} logs_types Event ID List
 * @property {(order_id: Integer) => GetJournalListRequest} order_id Order ID number
 */

/**
 * @typedef {Object} GetLabelRequest
 * @property {(courier_code: String) => GetLabelRequest} courier_code Courier code
 * @property {(package_id: Integer) => GetLabelRequest} package_id Shipment ID, optional if package_number was provided
 * @property {(package_number: String) => GetLabelRequest} package_number Shipping number (consignment number), optional if package_id was provided
 */

/**
 * @typedef {Object} GetNewReceiptsRequest
 * @property {(series_id: Integer) => GetNewReceiptsRequest} series_id (optional) The numbering series ID allows filtering by the receipt numbering series. Using multiple series numbering for receipts is recommended when the user has multiple fiscal printers. Each fiscal printer should have a separate series.
 * @property {(id_from: Integer) => GetNewReceiptsRequest} id_from (optional) ID from which logs are to be retrieved. [default=0]
 */

/**
 * @typedef {Object} GetOrderExtraFieldsRequest
 */

/**
 * @typedef {Object} GetOrderPackagesRequest
 * @property {(order_id: Integer) => GetOrderPackagesRequest} order_id Order identifier
 */

/**
 * @typedef {Object} GetOrderPaymentsHistoryRequest
 * @property {(order_id: Integer) => GetOrderPaymentsHistoryRequest} order_id Order Identifier from BaseLinker order manager 
 * @property {(show_full_history: Boolean) => GetOrderPaymentsHistoryRequest} show_full_history (optional, false by default) Download full payment history, including order value change entries, manual order payment edits. False by default - only returns entries containing an external payment identifier (most commonly used)
 */

/**
 * @typedef {Object} GetOrderPickPackHistoryRequest
 * @property {(order_id: Integer) => GetOrderPickPackHistoryRequest} order_id Order Identifier from BaseLinker order manager 
 * @property {(action_type: Integer) => GetOrderPickPackHistoryRequest} action_type (optional) List of event types you want to retrieve. Available values:1 - Reservation of an order for products collecting2 - Picking products started3 - Picking products cancelled4 - Products picking status changed: in progress5 - Products picking status changed: finished6 - Products picking status changed: error7 - Reservation of an order for products packing8 - Packing products started9 - Packing products cancelled10 - Products packing status changed: in progress11 - Products packing status changed: finished12 - Products packing status changed: error13 - Products photo initialized14 - Products photo taken15 - Products photo deleted16 - Error when trying to save products photo17 - Error when trying to save product image: image size too large
 */

/**
 * @typedef {Object} GetOrdersRequest
 * @property {(order_id: Integer) => GetOrdersRequest} order_id (optional) Order identifier. Completing this field will download information about only one specific order.
 * @property {(date_confirmed_from: Integer) => GetOrdersRequest} date_confirmed_from (optional) Date of order confirmation from which orders are to be collected. Format unix time stamp.
 * @property {(date_from: Integer) => GetOrdersRequest} date_from (optional) The order date from which orders are to be collected. Format unix time stamp.
 * @property {(id_from: Integer) => GetOrdersRequest} id_from (optional) The order ID number from which subsequent orders are to be collected.
 * @property {(get_unconfirmed_orders: Boolean) => GetOrdersRequest} get_unconfirmed_orders (optional, false by default) Download unconfirmed orders as well (this is e.g. an order from Allegro to which the customer has not yet completed the delivery form). Default is false. Unconfirmed orders may not be complete yet, the shipping method and price is also unknown.
 * @property {(include_custom_extra_fields: Boolean) => GetOrdersRequest} include_custom_extra_fields (optional, false by default) Download values of custom additional fields.
 * @property {(status_id: Integer) => GetOrdersRequest} status_id (optional) The status identifier from which orders are to be collected. Leave blank to download orders from all statuses.
 * @property {(filter_email: String) => GetOrdersRequest} filter_email (optional) Filtering of order lists by e-mail address (displays only orders with the given e-mail address).
 * @property {(filter_order_source: String) => GetOrdersRequest} filter_order_source (optional) Filtering of order lists by order source, for instance "ebay", "amazon" (displays only orders come from given source). The list of order sources can be retrieved with getOrderSources method.
 * @property {(filter_order_source_id: Integer) => GetOrdersRequest} filter_order_source_id (optional) Filtering of order lists by order source identifier, for instance "2523" (displays only orders come from order source defined in "filter_order_source" identified by given order source identifier). Filtering by order source indentifier requires "filter_order_source" to be set prior. The list of order source identifiers can be retrieved with getOrderSources method.
 */

/**
 * @typedef {Object} GetOrdersByEmailRequest
 * @property {(email: String) => GetOrdersByEmailRequest} email The e-mail address we search for in orders.
 */

/**
 * @typedef {Object} GetOrdersByPhoneRequest
 * @property {(phone: String) => GetOrdersByPhoneRequest} phone The phone number we search for in orders.
 */

/**
 * @typedef {Object} GetOrderSourcesRequest
 */

/**
 * @typedef {Object} GetOrderStatusListRequest
 */

/**
 * @typedef {Object} GetOrderTransactionDetailsRequest
 * @property {(order_id: Integer) => GetOrderTransactionDetailsRequest} order_id Order Identifier from BaseLinker order manager
 */

/**
 * @typedef {Object} GetProductsDataRequest
 * @property {(storage_id: String) => GetProductsDataRequest} storage_id Storage ID in format "[type:bl|shop|warehouse]_[id:int]" (e.g. "shop_2445").
 * @property {(products: Array<Integer>) => GetProductsDataRequest} products An array of product ID numbers to download
 */

/**
 * @typedef {Object} GetProductsListRequest
 * @property {(storage_id: String) => GetProductsListRequest} storage_id Storage ID in format "[type:bl|shop|warehouse]_[id:int]" (e.g. "shop_2445").
 * @property {(filter_category_id: String) => GetProductsListRequest} filter_category_id (optional) Retrieving products from a specific category (optional)
 * @property {(filter_limit: String) => GetProductsListRequest} filter_limit (OBSOLETE) (optional) limit of returned categories in SQL format ("quantity skipped, quantity downloaded")
 * @property {(filter_sort: String) => GetProductsListRequest} filter_sort (optional) the value for sorting the product list. Possible values:s                                                                                                                            "id [ASC|DESC]", "name [ASC|DESC]", "quantity [ASC|DESC]", "price [ASC|DESC]"
 * @property {(filter_id: String) => GetProductsListRequest} filter_id (optional) limiting results to a specific product id
 * @property {(filter_ean: String) => GetProductsListRequest} filter_ean (optional) limiting results to a specific ean
 * @property {(filter_sku: String) => GetProductsListRequest} filter_sku (optional) limiting the results to a specific SKU (stock keeping number)
 * @property {(filter_name: String) => GetProductsListRequest} filter_name (optional) item name filter (part of the searched name or an empty field)
 * @property {(filter_price_from: Number) => GetProductsListRequest} filter_price_from (optional) minimum price limit (not displaying products with lower price)
 * @property {(filter_price_to: Number) => GetProductsListRequest} filter_price_to (optional) maximum price limit
 * @property {(filter_quantity_from: Integer) => GetProductsListRequest} filter_quantity_from (optional) minimum quantity limit
 * @property {(filter_quantity_to: Integer) => GetProductsListRequest} filter_quantity_to (optional) maximum quantity limit
 * @property {(filter_available: Integer) => GetProductsListRequest} filter_available (optional) displaying only products marked as available (value 1) or not available (0) or all (empty value)
 * @property {(page: Integer) => GetProductsListRequest} page (optional) Results paging (for BaseLinker storage 1000 products per page)
 */

/**
 * @typedef {Object} GetProductsPricesRequest
 * @property {(storage_id: String) => GetProductsPricesRequest} storage_id Storage ID in format "[type:bl|shop|warehouse]_[id:int]" (e.g. "shop_2445").
 * @property {(page: Integer) => GetProductsPricesRequest} page (optional) Results paging (for BaseLinker storage 1000 products per page)
 */

/**
 * @typedef {Object} GetProductsQuantityRequest
 * @property {(storage_id: String) => GetProductsQuantityRequest} storage_id Storage ID in format "[type:bl|shop|warehouse]_[id:int]" (e.g. "shop_2445").
 * @property {(page: Integer) => GetProductsQuantityRequest} page (optional) Results paging (for BaseLinker storage 1000 products per page)
 */

/**
 * @typedef {Object} GetProtocolRequest
 * @property {(courier_code: String) => GetProtocolRequest} courier_code Courier code
 * @property {(package_ids: Array<Integer>) => GetProtocolRequest} package_ids Array of shipments ID, optional if package_numbers was provided
 * @property {(package_numbers: Array<String|Integer>) => GetProtocolRequest} package_numbers Array of shipments number (consignment number), optional if package_ids was provided
 * @property {(account_id: Integer) => GetProtocolRequest} account_id Courier API account id for the courier accounts retrieved from the request getCourierAccounts
 */

/**
 * @typedef {Object} GetReceiptRequest
 * @property {(receipt_id: Integer) => GetReceiptRequest} receipt_id Receipt ID. Not required if order_id is provided.
 * @property {(order_id: Integer) => GetReceiptRequest} order_id Order ID. Not required if receipt_id is provided.
 */

/**
 * @typedef {Object} GetRequestParcelPickupFieldsRequest
 * @property {(courier_code: String) => GetRequestParcelPickupFieldsRequest} courier_code Courier code
 */

/**
 * @typedef {Object} GetSeriesRequest
 */

/**
 * @typedef {Object} GetStoragesListRequest
 */

/**
 * @typedef {Object} RequestParcelPickupRequest
 * @property {(courier_code: String) => RequestParcelPickupRequest} courier_code Courier code
 * @property {(package_ids: Array<Integer>) => RequestParcelPickupRequest} package_ids Array of shipments ID, optional if package_numbers was provided
 * @property {(package_numbers: Array<String|Integer>) => RequestParcelPickupRequest} package_numbers Array of shipments number (consignment number), optional if package_ids was provided
 * @property {(account_id: Integer) => RequestParcelPickupRequest} account_id Courier API account id for the courier accounts retrieved from the request getCourierAccounts
 * @property {(fields: Object) => RequestParcelPickupRequest} fields List of form fields retrieved from the request getRequestParcelPickupFieldsFor checkbox with multiple selection, the information should be sent in separate arrays e.g.[&nbsp;&nbsp;{&nbsp;&nbsp;&nbsp;&nbsp;"id":"pickup_date",&nbsp;&nbsp;&nbsp;&nbsp;"value":"1642416311"&nbsp;&nbsp;},&nbsp;&nbsp;{&nbsp;&nbsp;&nbsp;&nbsp;"id":"shipments_weight",&nbsp;&nbsp;&nbsp;&nbsp;"value":"40"&nbsp;&nbsp;},]
 */

/**
 * @typedef {Object} RunOrderMacroTriggerRequest
 * @property {(order_id: Integer) => RunOrderMacroTriggerRequest} order_id Order identifier from BaseLinker order manager 
 * @property {(trigger_id: Integer) => RunOrderMacroTriggerRequest} trigger_id Identifier of personal trigger from orders automatic actions.
 */

/**
 * @typedef {Object} RunProductMacroTriggerRequest
 * @property {(product_id: Integer) => RunProductMacroTriggerRequest} product_id Product identifier from BaseLinker product manager.
 * @property {(trigger_id: Integer) => RunProductMacroTriggerRequest} trigger_id Identifier of personal trigger from products automatic actions.
 */

/**
 * @typedef {Object} SetOrderFieldsRequest
 * @property {(order_id: Integer) => SetOrderFieldsRequest} order_id Order identifier from the BaseLinker order manager. Field required. Other fields are optional.
 * @property {(admin_comments: String) => SetOrderFieldsRequest} admin_comments Seller comments
 * @property {(user_comments: String) => SetOrderFieldsRequest} user_comments Buyer comments
 * @property {(payment_method: String) => SetOrderFieldsRequest} payment_method Payment method
 * @property {(payment_method_cod: Boolean) => SetOrderFieldsRequest} payment_method_cod Flag indicating whether the type of payment is COD (cash on delivery)
 * @property {(email: String) => SetOrderFieldsRequest} email Buyer e-mail address
 * @property {(phone: String) => SetOrderFieldsRequest} phone Buyer phone number
 * @property {(user_login: String) => SetOrderFieldsRequest} user_login Buyer login
 * @property {(delivery_method: String) => SetOrderFieldsRequest} delivery_method Delivery method name
 * @property {(delivery_price: Number) => SetOrderFieldsRequest} delivery_price Gross delivery price
 * @property {(delivery_fullname: String) => SetOrderFieldsRequest} delivery_fullname Delivery address - name and surname
 * @property {(delivery_company: String) => SetOrderFieldsRequest} delivery_company Delivery address - company
 * @property {(delivery_address: String) => SetOrderFieldsRequest} delivery_address Delivery address - street and number
 * @property {(delivery_postcode: String) => SetOrderFieldsRequest} delivery_postcode Delivery address - postcode
 * @property {(delivery_city: String) => SetOrderFieldsRequest} delivery_city Delivery address - city
 * @property {(delivery_state: String) => SetOrderFieldsRequest} delivery_state Delivery address - state/province
 * @property {(delivery_country_code: String) => SetOrderFieldsRequest} delivery_country_code Delivery address - country code (two-letter, e.g. EN)
 * @property {(delivery_point_id: String) => SetOrderFieldsRequest} delivery_point_id Pick-up point delivery - pick-up point identifier
 * @property {(delivery_point_name: String) => SetOrderFieldsRequest} delivery_point_name Pick-up point delivery - pick-up point name
 * @property {(delivery_point_address: String) => SetOrderFieldsRequest} delivery_point_address Pick-up point delivery - pick-up point address
 * @property {(delivery_point_postcode: String) => SetOrderFieldsRequest} delivery_point_postcode Pick-up point delivery - pick-up point postcode
 * @property {(delivery_point_city: String) => SetOrderFieldsRequest} delivery_point_city Pick-up point delivery - pick-up point city
 * @property {(invoice_fullname: String) => SetOrderFieldsRequest} invoice_fullname Billing details - name and surname
 * @property {(invoice_company: String) => SetOrderFieldsRequest} invoice_company Billing details - company
 * @property {(invoice_nip: String) => SetOrderFieldsRequest} invoice_nip Billing details - Vat Reg. no./tax number
 * @property {(invoice_address: String) => SetOrderFieldsRequest} invoice_address Billing details - street and house number
 * @property {(invoice_postcode: String) => SetOrderFieldsRequest} invoice_postcode Billing details - postcode
 * @property {(invoice_city: String) => SetOrderFieldsRequest} invoice_city Billing details - city
 * @property {(invoice_state: String) => SetOrderFieldsRequest} invoice_state Billing details - state/province
 * @property {(invoice_country_code: String) => SetOrderFieldsRequest} invoice_country_code Billing details - country code (two-letter, e.g. EN)
 * @property {(want_invoice: Boolean) => SetOrderFieldsRequest} want_invoice Flag indicating whether the customer wants an invoice (1 - yes, 0 - no)
 * @property {(extra_field_1: String) => SetOrderFieldsRequest} extra_field_1 Value of the "extra field 1". - the seller can store any information there
 * @property {(extra_field_2: String) => SetOrderFieldsRequest} extra_field_2 Value of the "extra field 2". - the seller can store any information there
 * @property {(custom_extra_fields: Object) => SetOrderFieldsRequest} custom_extra_fields A list containing order custom extra fields, where the key is the extra field ID and value is an extra field content for given extra field. The list of extra fields can be retrieved with getOrderExtraFields method.In case of removing a field the empty string is expected.In case of file the following format is expected:{&nbsp;&nbsp;&nbsp;&nbsp;"title": "file.pdf" (varchar(40) - the file name)&nbsp;&nbsp;&nbsp;&nbsp;"file": "data:4AAQSkZJRgABA[...]" (binary - the file body limited to 2MB)}
 * @property {(pick_state: Integer) => SetOrderFieldsRequest} pick_state Flag indicating the status of the order products collection (1 - all products have been collected, 0 - not all products have been collected)
 * @property {(pack_state: Integer) => SetOrderFieldsRequest} pack_state Flag indicating the status of the order products packing (1 - all products have been packed, 0 - not all products have been packed)
 */

/**
 * @typedef {Object} SetOrderPaymentRequest
 * @property {(order_id: Integer) => SetOrderPaymentRequest} order_id Order ID number
 * @property {(payment_done: Number) => SetOrderPaymentRequest} payment_done The amount of the payment. The value changes the current payment in the order (not added to the previous value). If the amount matches the order value, the order will be marked as paid.
 * @property {(payment_date: Integer) => SetOrderPaymentRequest} payment_date Payment date unixtime.
 * @property {(payment_comment: String) => SetOrderPaymentRequest} payment_comment Payments commentary.
 * @property {(external_payment_id: String) => SetOrderPaymentRequest} external_payment_id (optional) External payment identifier
 */

/**
 * @typedef {Object} SetOrderProductFieldsRequest
 * @property {(order_id: Integer) => SetOrderProductFieldsRequest} order_id Order identifier from the BaseLinker order manager. Field required.
 * @property {(order_product_id: Integer) => SetOrderProductFieldsRequest} order_product_id Order item ID from BaseLinker order manager. Field required.
 * @property {(storage: String) => SetOrderProductFieldsRequest} storage Type of product source storage (available values: "db" - BaseLinker internal catalog, "shop" - online shop storage, "warehouse" - the connected wholesaler)
 * @property {(storage_id: String) => SetOrderProductFieldsRequest} storage_id The identifier of the storage (inventory/shop/warehouse) from which the product comes.
 * @property {(product_id: String) => SetOrderProductFieldsRequest} product_id Product identifier in BaseLinker or shop storage. Blank if the product number is not known
 * @property {(variant_id: String) => SetOrderProductFieldsRequest} variant_id Product variant ID. Blank if the variant number is unknown
 * @property {(auction_id: String) => SetOrderProductFieldsRequest} auction_id Listing ID number (if the order comes from ebay/allegro)
 * @property {(name: String) => SetOrderProductFieldsRequest} name Product name
 * @property {(sku: String) => SetOrderProductFieldsRequest} sku Product SKU number
 * @property {(ean: String) => SetOrderProductFieldsRequest} ean Product EAN number
 * @property {(location: String) => SetOrderProductFieldsRequest} location Product location
 * @property {(warehouse_id: Integer) => SetOrderProductFieldsRequest} warehouse_id Product source warehouse identifier. Only applies to products from BaseLinker inventory.
 * @property {(attributes: String) => SetOrderProductFieldsRequest} attributes The detailed product attributes, e.g. "Colour: blue" (Variant name)
 * @property {(price_brutto: Number) => SetOrderProductFieldsRequest} price_brutto Single item gross price
 * @property {(tax_rate: Number) => SetOrderProductFieldsRequest} tax_rate VAT tax rate e.g. "23", (value from range 0-100, EXCEPTION values: "-1" for "EXPT"/"ZW" exempt from VAT, "-0.02" for "NP" annotation, "-0.03" for "OO" VAT reverse charge)
 * @property {(quantity: Integer) => SetOrderProductFieldsRequest} quantity Number of pieces
 * @property {(weight: Number) => SetOrderProductFieldsRequest} weight Single piece weight
 */

/**
 * @typedef {Object} SetOrderReceiptRequest
 * @property {(receipt_id: Integer) => SetOrderReceiptRequest} receipt_id Receipt_id number received in the getNewReceipts method
 * @property {(receipt_nr: String) => SetOrderReceiptRequest} receipt_nr The number of the issued receipt (may be blank if the printer does not return the number)
 * @property {(date: Integer) => SetOrderReceiptRequest} date Receipt printing date (unixtime format)
 * @property {(printer_error: Boolean) => SetOrderReceiptRequest} printer_error Flag indicating whether an error occurred during receipt printing (false by default)
 * @property {(printer_name: String) => SetOrderReceiptRequest} printer_name (optional) Printer name
 */

/**
 * @typedef {Object} SetOrderStatusRequest
 * @property {(order_id: Integer) => SetOrderStatusRequest} order_id Order ID number
 * @property {(status_id: Integer) => SetOrderStatusRequest} status_id Status ID number. The status list can be retrieved using getOrderStatusList.
 */

/**
 * @typedef {Object} SetOrderStatusesRequest
 * @property {(order_ids: Array<Integer>) => SetOrderStatusesRequest} order_ids Array of Order ID numbers
 * @property {(status_id: Integer) => SetOrderStatusesRequest} status_id Status ID number. The status list can be retrieved using getOrderStatusList.
 */

/**
 * @typedef {Object} UpdateExternalStorageProductsQuantityRequest
 * @property {(storage_id: String) => UpdateExternalStorageProductsQuantityRequest} storage_id Storage ID in format "[type:shop|warehouse]_[id:int]"  (e.g. "shop_2445").
 * @property {(products: Array<StockQuantityTuple>) => UpdateExternalStorageProductsQuantityRequest} products An array of products. Each product is a separate element of the array. The product consists of a 3 element array of components:                                           0 => product ID number (varchar)1 => variant ID number (0 if the main product is changed, not the variant) (int)2 => Stock quantity (int)
 */

/**
 * @typedef {Object} UpdateInventoryProductsPricesRequest
 * @property {(inventory_id: Integer) => UpdateInventoryProductsPricesRequest} inventory_id Catalog ID. The list of identifiers can be retrieved using the method getInventories.
 * @property {(products: Object) => UpdateInventoryProductsPricesRequest} products An array of products, where the key is a product ID and the value is a list of prices. When determining the variant price, provide variant ID as a product ID.In the prices array the key should be the price group ID and the value - price for that price group. The list of price groups can be retrieved using the getInventoryPriceGroups method.
 */

/**
 * @typedef {Object} UpdateInventoryProductsStockRequest
 * @property {(inventory_id: Integer) => UpdateInventoryProductsStockRequest} inventory_id Catalog ID. The list of identifiers can be retrieved using the method getInventories.
 * @property {(products: Object) => UpdateInventoryProductsStockRequest} products An array of products, where the key is a product ID and the value is a list of stocks. When determining the variant stock, provide variant ID as a product ID.In the stocks array the key should be the warehouse ID and the value - stock for that warehouse. The format of the warehouse identifier should be as follows: "[type:bl|shop|warehouse]_[id:int]". (e.g. "bl_123"). The list of warehouse identifiers can be retrieved using the getInventoryWarehousesmethod.Stocks cannot be assigned to the warehouses created automatically for purposes of keeping external stocks (shops, wholesalers, etc.).
 */

/**
 * @typedef {Object} UpdateProductsPricesRequest
 * @property {(storage_id: String) => UpdateProductsPricesRequest} storage_id Storage ID in format "[type:bl|shop|warehouse]_[id:int]" (e.g. "shop_2445").
 * @property {(products: Array<ProductPrice>) => UpdateProductsPricesRequest} products An array of products. Each product is a separate element of the array.
 */

/**
 * @typedef {Object} UpdateProductsQuantityRequest
 * @property {(storage_id: String) => UpdateProductsQuantityRequest} storage_id Storage ID in format "[type:bl|shop|warehouse]_[id:int]" (e.g. "shop_2445").
 * @property {(products: Array<StockQuantityTuple>) => UpdateProductsQuantityRequest} products An array of products. Each product is a separate element of the array. The product consists of a 3 element array of components:                                           0 => product ID number (varchar)1 => variant ID number (0 if the main product is changed, not the variant) (int)2 => Stock quantity (int)
 */

/**
 * Baselinker Methods. 
 * @typedef {Object} Gateways
 * @property {AddCategoryRequest} addCategory The method allows adding a category to the BaseLinker storage. Adding a category with the same ID again, updates the previously saved category.
 * @property {AddInventoryRequest} addInventory The method allows you to add the BaseLinker catalogs. Adding a catalog with the same identifier again will cause updates of the previously saved catalog.
 * @property {AddInventoryCategoryRequest} addInventoryCategory The method allows you to add a category to the BaseLinker catalog. Adding a category with the same identifier again, updates the previously saved category
 * @property {AddInventoryManufacturerRequest} addInventoryManufacturer The method allows you to add a manufacturer to the BaseLinker catalog. Adding a manufacturer with the same identifier again, updates the previously saved manufacturer
 * @property {AddInventoryPriceGroupRequest} addInventoryPriceGroup The method allows to create a price group in BaseLinker storage. Providing a price group ID will update the existing price group. Such price groups may be later assigned in addInventory method.
 * @property {AddInventoryProductRequest} addInventoryProduct The method allows you to add a new product to BaseLinker catalog. Entering the product with the ID updates previously saved product.
 * @property {AddInventoryWarehouseRequest} addInventoryWarehouse The method allows you to add a new warehouse available in BaseLinker catalogues. Adding a warehouse with the same identifier again will cause updates of the previously saved warehouse. The method does not allow editing warehouses created automatically for the purpose of keeping external stocks of shops, wholesalers etc. Such warehouse may be later used in addInventory method.
 * @property {AddInvoiceRequest} addInvoice The method allows to issue an order invoice.
 * @property {AddOrderRequest} addOrder The method allows adding a new order to the BaseLinker order manager.
 * @property {AddOrderInvoiceFileRequest} addOrderInvoiceFile The method allows you to add an external PDF file to an invoice previously issued from BaseLinker. It enables replacing a standard invoice from BaseLinker with an invoice issued e.g. in an ERP program.
 * @property {AddOrderProductRequest} addOrderProduct The method allows you to add a new product to your order.
 * @property {AddOrderReceiptFileRequest} addOrderReceiptFile The method allows you to add an external PDF file to a receipt previously issued from BaseLinker. It enables replacing a standard receipt from BaseLinker with a receipt issued e.g. in an ERP program.
 * @property {AddProductRequest} addProduct The method allows you to add a new product to BaseLinker storage. Entering the product with the ID updates previously saved product.
 * @property {AddProductVariantRequest} addProductVariant The method allows to add a new variant to the product in BaseLinker storage. Providing the variant together with the ID, causes an update of the previously saved variant.
 * @property {CreatePackageRequest} createPackage The method allows you to create a shipment in the system of the selected courier.
 * @property {CreatePackageManualRequest} createPackageManual The method allows you to enter the shipping number and the name of the courier to the order (function used only to add shipments created outside BaseLinker)
 * @property {DeleteCategoryRequest} deleteCategory The method allows you to remove categories from BaseLinker storage. Along with the category, the products contained therein are removed (however, this does not apply to products in subcategories). The subcategories will be changed to the highest level categories.
 * @property {DeleteCourierPackageRequest} deleteCourierPackage The method allows you to delete a previously created shipment. The method removes the shipment from the BaseLinker system and from the courier system if the courier API allows it
 * @property {DeleteInventoryRequest} deleteInventory The method allows you to delete a catalog from BaseLinker storage.
 * @property {DeleteInventoryCategoryRequest} deleteInventoryCategory The method allows you to remove categories from BaseLinker warehouse. Along with the category, the products contained therein are removed (however, this does not apply to products in subcategories). The subcategories will be changed to the highest level categories.
 * @property {DeleteInventoryManufacturerRequest} deleteInventoryManufacturer The method allows you to remove manufacturer from BaseLinker catalog
 * @property {DeleteInventoryPriceGroupRequest} deleteInventoryPriceGroup The method allows you to remove the price group from BaseLinker storage.
 * @property {DeleteInventoryProductRequest} deleteInventoryProduct The method allows you to remove the product from BaseLinker catalog.
 * @property {DeleteInventoryWarehouseRequest} deleteInventoryWarehouse The method allows you to remove the warehouse available in BaseLinker catalogues. The method does not allow to remove warehouses created automatically for the purpose of keeping external stocks of shops, wholesalers etc.
 * @property {DeleteOrderProductRequest} deleteOrderProduct The method allows you to remove a specific product from the order.
 * @property {DeleteProductRequest} deleteProduct The method allows you to remove the product from BaseLinker storage.
 * @property {DeleteProductVariantRequest} deleteProductVariant The method allows you to remove the product from BaseLinker storage.
 * @property {GetCategoriesRequest} getCategories The method allows you to download a list of categories for a BaseLinker storage or a shop storage connected to BaseLinker.
 * @property {GetCourierAccountsRequest} getCourierAccounts The method allows you to retrieve the list of accounts connected to a given courier.
 * @property {GetCourierFieldsRequest} getCourierFields The method allows you to retrieve the form fields for creating shipments for the selected courier.
 * @property {GetCourierPackagesStatusHistoryRequest} getCourierPackagesStatusHistory The method allows you to retrieve the history of the status list of the given shipments. Maximum 100 shipments at a time
 * @property {GetCourierServicesRequest} getCourierServices The method allows you to retrieve additional courier services, which depend on other shipment settings. Used only for X-press, BrokerSystem, Wysyłam z Allegro, ErliPRO couriers. Not applicable to other couriers whose forms have fixed options. The details of the package should be sent with the method (the format as in createPackage) in order to receive a list of additional services
 * @property {GetCouriersListRequest} getCouriersList The method allows you to retrieve a list of available couriers.
 * @property {GetExternalStorageCategoriesRequest} getExternalStorageCategories The method allows you to retrieve a category list from an external storage (shop/wholesale) connected to BaseLinker.
 * @property {GetExternalStorageProductsDataRequest} getExternalStorageProductsData The method allows to retrieve detailed data of selected products from an external storage (shop/wholesaler) connected to BaseLinker.
 * @property {GetExternalStorageProductsListRequest} getExternalStorageProductsList The method allows to retrieve detailed data of selected products from an external storage (shop/wholesaler) connected to BaseLinker.
 * @property {GetExternalStorageProductsPricesRequest} getExternalStorageProductsPrices The method allows to retrieve product prices from an external storage (shop/wholesaler) connected to BaseLinker.
 * @property {GetExternalStorageProductsQuantityRequest} getExternalStorageProductsQuantity The method allows to retrieve stock from an external storage (shop/wholesaler) connected to BaseLinker.
 * @property {GetExternalStoragesListRequest} getExternalStoragesList The method allows you to retrieve a list of available external storages (shops, wholesalers) that can be referenced via API.
 * @property {GetInventoriesRequest} getInventories The method allows you to retrieve a list of catalogs available in the BaseLinker storage.
 * @property {GetInventoryAvailableTextFieldKeysRequest} getInventoryAvailableTextFieldKeys The method returns a list of product text fields that can be overwritten for specific integration.
 * @property {GetInventoryCategoriesRequest} getInventoryCategories The method allows you to retrieve a list of categories for a BaseLinker catalog.
 * @property {GetInventoryExtraFieldsRequest} getInventoryExtraFields The method allows you to retrieve a list of extra fields for a BaseLinker catalog.
 * @property {GetInventoryIntegrationsRequest} getInventoryIntegrations The method returns a list of integrations where text values in the catalog can be overwritten. The returned data contains a list of accounts for each integration and a list of languages supported by the integration
 * @property {GetInventoryManufacturersRequest} getInventoryManufacturers The method allows you to retrieve a list of manufacturers for a BaseLinker catalog.
 * @property {GetInventoryPriceGroupsRequest} getInventoryPriceGroups The method allows to retrieve price groups existing in BaseLinker storage
 * @property {GetInventoryProductLogsRequest} getInventoryProductLogs The method allows to retrieve a list of events related to product change (or their variants) in the BaseLinker catalog.
 * @property {GetInventoryProductsDataRequest} getInventoryProductsData The method allows you to retrieve detailed data for selected products from the BaseLinker catalogue.
 * @property {GetInventoryProductsListRequest} getInventoryProductsList The method allows to retrieve a basic data of chosen products from BaseLinker catalogs.
 * @property {GetInventoryProductsPricesRequest} getInventoryProductsPrices The method allows to retrieve the gross prices of products from BaseLinker catalogues.
 * @property {GetInventoryProductsStockRequest} getInventoryProductsStock The method allows you to retrieve stock data of products from BaseLinker catalogs
 * @property {GetInventoryWarehousesRequest} getInventoryWarehouses The method allows you to retrieve a list of warehouses available in BaseLinker catalogues. The method also returns information about the warehouses created automatically for the purpose of keeping external stocks (shops, wholesalers etc.)
 * @property {GetInvoiceFileRequest} getInvoiceFile The method allows you to get the invoice file from BaseLinker.
 * @property {GetInvoicesRequest} getInvoices The method allows you to download invoices issued from the BaseLinker order manager. The list of invoices can be limited using filters described in the method parameters. Maximum 100 invoices are returned at a time.
 * @property {GetJournalListRequest} getJournalList The method allows you to download a list of order events from the last 3 days.
 * @property {GetLabelRequest} getLabel The method allows you to download a shipping label (consignment) for a selected shipment.
 * @property {GetNewReceiptsRequest} getNewReceipts The method allows you to retrieve receipts waiting to be issued. This method should be used in creating integration with a fiscal printer. The method can be requested for new receipts every e.g. 10 seconds. If any receipts appear in response, they should be confirmed by the setOrderReceipt method after printing to disappear from the waiting list.
 * @property {GetOrderExtraFieldsRequest} getOrderExtraFields The method returns extra fields defined for the orders. Values of those fields can be set with method setOrderFields. In order to retrieve values of those fields set parameter include_custom_extra_fields in method getOrders
 * @property {GetOrderPackagesRequest} getOrderPackages The method allows you to download shipments previously created for the selected order.
 * @property {GetOrderPaymentsHistoryRequest} getOrderPaymentsHistory The method allows you to retrieve payment history for a selected order, including an external payment identifier from the payment gateway. One order can have multiple payment history entries, caused by surcharges, order value changes, manual payment editing
 * @property {GetOrderPickPackHistoryRequest} getOrderPickPackHistory The method allows you to retrieve pick pack history for a selected order.
 * @property {GetOrdersRequest} getOrders The method allows you to download orders from a specific date from the BaseLinker order manager. The order list can be limited using the filters described in the method parameters. A maximum of 100 orders are returned at a time. It is recommended to download only confirmed orders (get_unconfirmed_orders = false). Unconfirmed orders may be incomplete. The user may be, for example, in the process of creating an order - it already exists in the database, but not all information is completed. Unconfirmed orders may contain only a partial list of products and may be changed soon. Confirmed orders usually do not change anymore and can be safely downloaded to an external system. The best way to download the ongoing orders is: Collecting new order identifiers using getJournalList.Or, using this method: 1. Setting the starting date and specifying it in the date_confirmed_from field 2. Processing of all received orders. If 100 orders are received, there may be even more to download. 3. Downloading the next package of orders by entering the value of the date_confirmed field from last downloaded order in the date_confirmed_from field. In order to avoid downloading the same orders value of date_confirmed should be increased by 1 second. This operation is repeated until you receive a package with less than 100 orders (this means that there are no more orders left to download). 4. Saving the date_confirmed last processed order. You can download orders from this date onwards so that you do not download the same order twice. It is not possible for an order to 'jump' into the database with an earlier confirmation date. This way you can be sure that all confirmed orders have been downloaded.
 * @property {GetOrdersByEmailRequest} getOrdersByEmail The method allows to search for orders related to the given e-mail address. This function is designed to be used in plugins for mail clients (Thunderbird, Outlook, etc.).
 * @property {GetOrdersByPhoneRequest} getOrdersByPhone The method allows you to search for orders related to the given phone number. This function is intended for use in caller recognition programs.
 * @property {GetOrderSourcesRequest} getOrderSources The method returns types of order sources along with their IDs. Order sources are grouped by their type that corresponds to a field order_source from the getOrders method. Available source types are "personal", "shop" or "marketplace_code" e.g. "ebay", "amazon", "ceneo", "emag", "allegro", etc.
 * @property {GetOrderStatusListRequest} getOrderStatusList The method allows you to download order statuses created by the customer in the BaseLinker order manager.
 * @property {GetOrderTransactionDetailsRequest} getOrderTransactionDetails The method allows you to retrieve transaction details for a selected order (it now works only for orders from Amazon)
 * @property {GetProductsDataRequest} getProductsData The method allows to download detailed data of selected products from the BaseLinker storage or a shop/wholesaler storage connected to BaseLinker.
 * @property {GetProductsListRequest} getProductsList The method allows to download detailed data of selected products from the BaseLinker storage or a shop/wholesaler storage connected to BaseLinker.
 * @property {GetProductsPricesRequest} getProductsPrices The method allows you to fetch prices of products from the BaseLinker storage or the shop/wholesaler storage connected to BaseLinker.
 * @property {GetProductsQuantityRequest} getProductsQuantity The method allows to retrieve stock from the BaseLinker storage or the shop/wholesaler storage connected to BaseLinker.
 * @property {GetProtocolRequest} getProtocol The method allows you to download a parcel protocol for selected shipments if the protocol is available for chosen courier
 * @property {GetReceiptRequest} getReceipt The method allows you to retrieve a single receipt from the BaseLinker order manager. To retrieve a list of new receipts (when integrating a fiscal printer), use the getNewReceipts method.
 * @property {GetRequestParcelPickupFieldsRequest} getRequestParcelPickupFields The method allows you to retrieve additional fields for a parcel pickup request.
 * @property {GetSeriesRequest} getSeries The method allows to download a series of invoice/receipt numbering.
 * @property {GetStoragesListRequest} getStoragesList This method allows downloading a list of available storages that can be accessed via API.
 * @property {RequestParcelPickupRequest} requestParcelPickup The method allows you to request a parcel pickup for previously created shipments. The method sends a parcel pickup request to courier API if the courier API allows it
 * @property {RunOrderMacroTriggerRequest} runOrderMacroTrigger The method allows you to run personal trigger for orders automatic actions.
 * @property {RunProductMacroTriggerRequest} runProductMacroTrigger The method allows you to run personal trigger for products automatic actions.
 * @property {SetOrderFieldsRequest} setOrderFields The method allows you to edit selected fields (e.g. address data, notes, etc.) of a specific order. Only the fields that you want to edit should be given, other fields can be omitted in the request.
 * @property {SetOrderPaymentRequest} setOrderPayment The method allows you to add a payment to the order.
 * @property {SetOrderProductFieldsRequest} setOrderProductFields The method allows you to edit the data of selected items (e.g. prices, quantities etc.) of a specific order. Only the fields that you want to edit should be given, the remaining fields can be omitted in the request.
 * @property {SetOrderReceiptRequest} setOrderReceipt The method allows you to mark orders with a receipt already issued.
 * @property {SetOrderStatusRequest} setOrderStatus The method allows you to change order status.
 * @property {SetOrderStatusesRequest} setOrderStatuses The method allows you to batch set orders statuses
 * @property {UpdateExternalStorageProductsQuantityRequest} updateExternalStorageProductsQuantity The method allows to bulk update the product stock (and/or variants) in an external storage (shop/wholesaler) connected to BaseLinker. Maximum 1000 products at a time.
 * @property {UpdateInventoryProductsPricesRequest} updateInventoryProductsPrices The method allows bulk update of gross prices of products (and/or their variants) in the BaseLinker catalog. Maximum 1000 products at a time.
 * @property {UpdateInventoryProductsStockRequest} updateInventoryProductsStock The method allows to update stocks of products (and/or their variants) in BaseLinker catalog. Maximum 1000 products at a time.
 * @property {UpdateProductsPricesRequest} updateProductsPrices The method allows for bulk update of product prices (and/or variants) in BaseLinker storage. Maximum 1000 products at a time.
 * @property {UpdateProductsQuantityRequest} updateProductsQuantity The method allows to bulk update the product stock (and/or variants) in BaseLinker storage or in a shop/wholesaler storage connected to BaseLinker. Maximum 1000 products at a time. */

export const MAX_REQ_PER_MIN = 100;