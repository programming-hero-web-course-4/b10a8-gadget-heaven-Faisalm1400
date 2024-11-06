import { useContext, useEffect, useState } from "react";
import Card from "../Card/Card";
import { AssetContext } from "../../Root/Root";
import noDataImg from '../../../assets/error.webp'

const Cards = () => {
    const { filteredProducts } = useContext(AssetContext);

    if (filteredProducts.length === 0) {
        return <div class="min-h-[500px] flex flex-col gap-5 justify-center items-center bg-white rounded-3xl p-3">
            <img src={noDataImg} alt="" />
            <h2 class="text-3xl font-bold text-center">No Information Available</h2>
        </div>
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