import React, { useState } from "react";

import SHOP_DATA from "./shop.data.js";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

const ShopPage = () => {
	const [collections, setCollections] = useState(SHOP_DATA);

	return (
		<div className="shop-page">
			{SHOP_DATA.map(({ id, ...SHOP_DATAProps }) => {
				return <CollectionPreview key={id} {...SHOP_DATAProps} />;
			})}
		</div>
	);
};

export default ShopPage;