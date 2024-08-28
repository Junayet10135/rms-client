import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import si1 from '../../assets/home/01.jpg'
import si2 from '../../assets/home/02.jpg'
import si3 from '../../assets/home/03.jpg'
import si4 from '../../assets/home/04.jpg'
import si5 from '../../assets/home/05.jpg'
import si6 from '../../assets/home/06.jpg'

const Banner = () => {
    return (
        <Carousel>
            <div>
                <img src={si1} />
            </div>
            <div>
                <img src={si2} />
            </div>
            <div>
                <img src={si3} />
            </div>
            <div>
                <img src={si4} />
            </div>
            <div>
                <img src={si5} />
            </div>
            <div>
                <img src={si6} />
            </div>
        </Carousel>

    );
};

export default Banner;