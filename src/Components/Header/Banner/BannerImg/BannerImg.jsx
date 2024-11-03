import React from 'react';
import BannerImage from "../../../../assets/banner.jpg"
const BannerImg = () => {
    return (
        <div>
            <img src={BannerImage} alt="" className='rounded-2xl' />
        </div>
    );
};

export default BannerImg;