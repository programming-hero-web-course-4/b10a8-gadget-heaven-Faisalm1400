import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Cards = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('../../../../public/products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {
                products.map(product => <Card key={product.product_id} product={product} />)
            }
        </div>
    );
};

export default Cards;