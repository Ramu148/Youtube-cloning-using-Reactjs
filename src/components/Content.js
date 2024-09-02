import React from "react";
import image1 from './image/img1.png';
import image2 from './image/img2.png';
import image3 from './image/img3.png';
import image4 from './image/img4.png';
import image5 from './image/img5.png';
import image6 from './image/img6.png';
import image7 from './image/img7.png';
import image8 from './image/img8.png';
import './Content.css';

const Content =()=>{
    return(
        <div className="content">
            <div className="video">
            <div className="item">
                <img src={image5} alt="Image 5" className="gallery-image" />
                    <h3>The Avengers take a final stand against Thanos in Marvel Studios'</h3>
                    <p>The Avengers</p>
                    <p>8.8m views . 2 years ago</p>
                </div>
                <div className="item">
                <img src={image6} alt="Image 6" className="gallery-image" />
                    <h3>Three buddies wake up from a bachelor party in Las Vegas</h3>
                    <p>hangover</p>
                    <p>946k views . 10 months ago</p>
                </div>
                <div className="item">
                <img src={image7} alt="Image 7" className="gallery-image" />
                    <h3>This Teaser Trailer offers a sneak peek into the legendary game ...</h3>
                    <p>god of war</p>
                    <p>1.6m views . 2 years ago</p>
                </div>
                <div className="item">
                <img src={image8} alt="Image 8" className="gallery-image" />
                    <h3>Imaginary is a 2024 American supernatural horror film</h3>
                    <p>IMAGINARY</p>
                    <p>80k views . 1 year ago</p>
                </div>
                <div className="item">
                <img src={image1} alt="Image 1" className="gallery-image" />
                    <h3>The Boys: Created by Eric Kripke</h3>
                    <p>impossible</p>
                    <p>85k views . 2 hours ago</p>
                </div>
                <div className="item">
                <img src={image2} alt="Image 2" className="gallery-image" />
                    <h3>Avatar is a 2009 epic science fiction</h3>
                    <p>James Cameron</p>
                    <p>1m views . 2 days ago</p>
                </div>
                <div className="item">
                <img src={image3} alt="Image 3" className="gallery-image" />
                    <h3>10 people escape bombing on small boat,</h3>
                    <p>boat </p>
                    <p>250k views . 13 hors ago</p>
                </div>
                <div className="item">
                <img src={image4} alt="Image 4" className="gallery-image" />
                    <h3>Premalu ( transl. Love) is a 2024 </h3>
                    <p>true love </p>
                    <p>3.2m views . 3 weeks ago</p>
                </div>
            </div>
        </div>
    );
}

export default Content;