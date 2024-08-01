import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import si1 from '../../../assets/home/slide1.jpg'
import si2 from '../../../assets/home/slide2.jpg'
import si3 from '../../../assets/home/slide3.jpg'
import si4 from '../../../assets/home/slide4.jpg'
import si5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../Components/SectionTitle';

const Category = () => {
    return (
        <section>
            <SectionTitle
                heading={"Order Online"}
                subHeading={"From 11 am to 10 PM"}
            ></SectionTitle>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper mb-20"
            >
                <SwiperSlide><img src={si1} alt='' />
                    <h3 className='text-3xl uppercase -mt-20 ml-20 text-white '>Salad</h3>
                </SwiperSlide>
                <SwiperSlide><img src={si2} alt='' />
                    <h3 className='text-3xl uppercase -mt-20 ml-20 text-white '>Pizza</h3>
                </SwiperSlide>
                <SwiperSlide><img src={si3} alt='' />
                    <h3 className='text-3xl uppercase -mt-20 ml-20 text-white '>Soup</h3>
                </SwiperSlide>
                <SwiperSlide><img src={si4} alt='' />
                    <h3 className='text-3xl uppercase -mt-20 ml-20 text-white '>Cakes</h3>
                </SwiperSlide>
                <SwiperSlide><img src={si5} alt='' />
                    <h3 className='text-3xl uppercase -mt-20 ml-20 text-white '>Salad</h3>
                </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default Category;