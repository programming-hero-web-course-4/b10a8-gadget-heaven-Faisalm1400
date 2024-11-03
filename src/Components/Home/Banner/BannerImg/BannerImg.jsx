import React from 'react';
import BannerImage from "../../../../assets/banner.jpg"
const BannerImg = () => {
    return (
        <div className='p-4 bg-white bg-opacity-35 rounded-2xl'>
            <img src={BannerImage} alt="" className='rounded-2xl' />
        </div>
    );
};

export default BannerImg;