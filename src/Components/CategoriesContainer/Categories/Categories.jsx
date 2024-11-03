import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import Cards from "../Cards/Cards";

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('../../../../public/categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);
    // console.log(categories)

    return (
        <div>
            <div className="mt-5">
                <div className="flex gap-5">
                    <div className="bg-base-200 w-1/6 h-1/2 p-4 rounded-2xl">
                        <div className="grid grid-cols-1 gap-2">
                            {
                                categories.map(category => <button className="btn btn-xs sm:btn-sm md:btn-md bg-white rounded-full" key={category.category_id} >{category.category_name}</button>)
                            }
                        </div>
                    </div>
                    <div className="w-5/6">
                        <Cards />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;