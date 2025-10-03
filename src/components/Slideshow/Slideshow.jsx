import './Slideshow.scss';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState } from 'react';

const Slideshow = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }
    const counter = images.length === 1;
    return (
        <div className="slideshow">
            <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slideshow__image" />

            {!counter && (
                <>
                    <button className="slideshow__prev" onClick={prevImage}>
                        <FaChevronLeft />
                    </button>
                    <button className="slideshow__next" onClick={nextImage}>
                        <FaChevronRight />
                    </button>
                    <div className="slideshow__counter">
                        {currentIndex + 1} / {images.length}
                    </div>
                </>

            )}



        </div>
    );
};

export default Slideshow;