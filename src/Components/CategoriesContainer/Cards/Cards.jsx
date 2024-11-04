import { useContext, useEffect, useState } from "react";
import Card from "../Card/Card";
import { AssetContext } from "../../Root/Root";

const Cards = () => {
    const { filteredProducts } = useContext(AssetContext);

    if (filteredProducts.length === 0) {
        return <div>No products found for the selected category.</div>;
    }
    


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {
                filteredProducts.map(product => <Card key={product.product_id} product={product} />)
            }
        </div>
    );
};

export default Cards;