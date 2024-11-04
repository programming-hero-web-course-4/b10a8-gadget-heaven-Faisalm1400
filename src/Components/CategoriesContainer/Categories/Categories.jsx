import { data } from "autoprefixer";
import { useContext, useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import { AssetContext } from "../../Root/Root";

const Categories = () => {
    const { categories, handleSelectCategory } = useContext(AssetContext)

    console.log("Categories:", categories);

    return (
        <div>
            <div className="mt-5">
                <div className="flex max-sm:flex-col gap-5">
                    <div className="bg-base-200 md:w-1/6 md:h-1/2 p-4 rounded-2xl">
                        <div className="grid grid-cols-3 md:grid-cols-1 gap-1 md:gap-2">
                            {
                                categories.map(category => <button onClick={() => handleSelectCategory(category.category_name)} className="btn btn-xs sm:btn-sm md:btn-md bg-white rounded-full" key={category.category_id} >{category.category_name}</button>)
                            }
                        </div>
                    </div>
                    <div className="w-5/6 mx-auto">
                        <Cards />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;