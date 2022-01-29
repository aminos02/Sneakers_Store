import React from 'react';
import './gallery.css'
const Gallery = () => {
    return (
<div className='gal-newSeason'>
<div className="gallery">
        <div className="galleryItem">
            <h1 className="galleryTitle">Be Yourself!</h1>
            <img src="https://images.pexels.com/photos/9295809/pexels-photo-9295809.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt="" className="galleryImg"/>
        </div>
        <div className="galleryItem">
            <img src="https://images.pexels.com/photos/1040427/pexels-photo-1040427.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt="" className="galleryImg"/>
            <h1 className="galleryTitle">This is the First Day of Your New Life</h1>
        </div>
        <div className="galleryItem">
            <h1 className="galleryTitle">Just Do it!</h1>
            <img src="https://images.pexels.com/photos/7856965/pexels-photo-7856965.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt="" className="galleryImg"/>
        </div>
    </div>
    <div className="newSeason">
    <div className="nsItem">
        <img src="https://images.pexels.com/photos/4753986/pexels-photo-4753986.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="" className="nsImg"/>
    </div>
    <div className="nsItem">
        <h3 className="nsTitleSm">WINTER NEW ARRIVALS</h3>
        <h1 className="nsTitle">New Season</h1>
        <h1 className="nsTitle">New Collection</h1>
        <a href="#nav">
            <button className="nsButton">CHOOSE YOUR STYLE</button>
        </a>
    </div>
    <div className="nsItem">
        <img src="https://images.pexels.com/photos/7856965/pexels-photo-7856965.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="" className="nsImg"/>
    </div>
</div>
</div>
    );
};

export default Gallery;